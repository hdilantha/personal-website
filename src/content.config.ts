import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const writing = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date().optional(),
    draft: z.boolean().default(true),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    role: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
  }),
});

export const collections = { writing, projects };
