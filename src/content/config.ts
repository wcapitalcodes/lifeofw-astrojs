import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updateDate: z.date().optional(),
    image: z.string().optional(),
    author: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    external_link: z.string().optional()
  }),
});

export const collections = {
  blog: blog,
}; 