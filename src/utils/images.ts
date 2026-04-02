import { isUnpicCompatible, unpicOptimizer, astroAsseetsOptimizer } from './images-optimization';
import type { ImageMetadata } from 'astro';
import type { OpenGraph } from '@astrolib/seo';

const load = async function () {
  let images: Record<string, () => Promise<unknown>> | undefined = undefined;
  try {
    images = import.meta.glob('~/assets/images/**/*.{jpeg,jpg,png,tiff,webp,gif,svg,JPEG,JPG,PNG,TIFF,WEBP,GIF,SVG}');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    // continue regardless of error
  }
  return images;
};

let _images: Record<string, () => Promise<unknown>> | undefined = undefined;

/** */
export const fetchLocalImages = async () => {
  _images = _images || (await load());
  return _images;
};

/** */
export const findImage = async (
  imagePath?: string | ImageMetadata | null
): Promise<string | ImageMetadata | undefined | null> => {
  // Not string
  if (typeof imagePath !== 'string') {
    return imagePath;
  }

  // Absolute paths
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('/')) {
    return imagePath;
  }

  // Relative paths or not "~/assets/"
  if (!imagePath.startsWith('~/assets/images')) {
    return imagePath;
  }

  const images = await fetchLocalImages();
  const key = imagePath.replace('~/', '/src/');

  return images && typeof images[key] === 'function'
    ? ((await images[key]()) as { default: ImageMetadata })['default']
    : null;
};

/** */
export const adaptOpenGraphImages = async (
  openGraph: OpenGraph = {},
  astroSite: URL | undefined = new URL('')
): Promise<OpenGraph> => {
  if (!openGraph?.images?.length) {
    return openGraph;
  }

  // Set default dimensions for all images to avoid CLS errors
  const defaultWidth = 1200;
  const defaultHeight = 626;

  try {
    const images = openGraph.images;

    const adaptedImages = await Promise.all(
      images.map(async (image) => {
        // If image already has dimensions, use them
        if (image?.url && image?.width && image?.height) {
          // For absolute URLs, just return as is with the dimensions
          if (image.url.startsWith('http://') || image.url.startsWith('https://') || image.url.startsWith('/')) {
            return {
              url: image.url,
              width: image.width,
              height: image.height,
              alt: image.alt || '',
            };
          }
        }

        // For all other cases, try to process but with a fallback
        try {
          if (image?.url) {
            const resolvedImage = (await findImage(image.url)) as ImageMetadata | string | undefined;
            if (!resolvedImage) {
              return {
                url: image.url,
                width: image.width || defaultWidth,
                height: image.height || defaultHeight,
                alt: image.alt || '',
              };
            }

            let _image;

            if (
              typeof resolvedImage === 'string' &&
              (resolvedImage.startsWith('http://') || resolvedImage.startsWith('https://')) &&
              isUnpicCompatible(resolvedImage)
            ) {
              _image = (await unpicOptimizer(resolvedImage, [defaultWidth], defaultWidth, defaultHeight, 'jpg'))[0];
            } else if (resolvedImage) {
              const dimensions =
                typeof resolvedImage !== 'string' && resolvedImage?.width <= defaultWidth
                  ? [resolvedImage?.width, resolvedImage?.height]
                  : [defaultWidth, defaultHeight];
              _image = (
                await astroAsseetsOptimizer(resolvedImage, [dimensions[0]], dimensions[0], dimensions[1], 'jpg')
              )[0];
            }

            if (typeof _image === 'object') {
              return {
                url: 'src' in _image && typeof _image.src === 'string' ? String(new URL(_image.src, astroSite)) : '',
                width: 'width' in _image && typeof _image.width === 'number' ? _image.width : defaultWidth,
                height: 'height' in _image && typeof _image.height === 'number' ? _image.height : defaultHeight,
                alt: image.alt || '',
              };
            }
            
            // Fallback to original with default dimensions
            return {
              url: image.url,
              width: image.width || defaultWidth,
              height: image.height || defaultHeight,
              alt: image.alt || '',
            };
          }
        } catch (error) {
          console.warn('Error processing OpenGraph image:', error);
          // Fallback with default dimensions if processing fails
          return {
            url: image?.url || '',
            width: image?.width || defaultWidth,
            height: image?.height || defaultHeight,
            alt: image?.alt || '',
          };
        }

        return {
          url: '',
          width: defaultWidth,
          height: defaultHeight,
        };
      })
    );

    return { ...openGraph, ...(adaptedImages ? { images: adaptedImages } : {}) };
  } catch (error) {
    console.warn('Error in adaptOpenGraphImages:', error);
    // Return original openGraph without images to avoid breaking the build
    const { images, ...rest } = openGraph;
    return rest;
  }
};
