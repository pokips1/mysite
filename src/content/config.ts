import { z, defineCollection } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    sector: z.string(),
    tech: z.array(z.string()),
    cover: z.string(),
    liveUrl: z.string().url(),
    repoUrl: z.string().url().optional(),
    results: z.string(),
    featured: z.boolean(),
    lang: z.enum(["it", "en"])
  })
});

export const collections = { projects };
