import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
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
