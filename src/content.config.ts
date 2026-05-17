import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    category: z.string().default('Insurance'),
    pdf: z.string().url().optional(),
    audio: z.string().url().optional(),
    featuredImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
