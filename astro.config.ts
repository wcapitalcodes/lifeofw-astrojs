import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import type { AstroIntegration } from 'astro';

import astrowind from './vendor/integration';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

// Integration to exclude API routes from static builds
const excludeApiRoutes = (): AstroIntegration => ({
  name: 'exclude-api-routes',
  hooks: {
    'astro:config:setup': ({ config, updateConfig }) => {
      // For static builds, we'll handle API routes via Vite plugin
      if (config.output === 'static') {
        // This will be handled by the Vite plugin below
      }
    },
  },
});

export default defineConfig({
  output: 'static',
  site: 'https://www.lifeofw.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      customPages: [],
      lastmod: new Date(),
      changefreq: 'weekly',
      priority: 0.7,
      serialize: (item) => {
        if (item.url === 'https://lifeofw.com') {
          return {
            ...item,
            lastmod: new Date().toISOString()
          };
        }
        return item;
      }
    }),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        lucide:['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false, // Disabled - Astro already optimizes images, this causes duplicate processing
      JavaScript: true,
      SVG: true,
      Logger: 0, // Disable logging for faster builds
    }),

    astrowind({
      config: './src/config.yaml',
    }),

    // Exclude API routes from static builds
    excludeApiRoutes(),
  ],

  image: {
    domains: ['cdn.pixabay.com'],
  },

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
    build: {
      // Optimize build performance
      minify: 'esbuild', // Faster JS minification (default, but explicit)
      rollupOptions: {
        output: {
          // Reduce chunk size for faster processing
          manualChunks: undefined,
        },
      },
    },
    optimizeDeps: {
      // Pre-bundle dependencies for faster builds
      include: ['astro-icon'],
    },
  },
});
