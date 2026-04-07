import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    link: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  projects: projects,
};
