import { defineCollection, z } from "astro:content";

// Colección: bits (Proyectos de Software)
const bits = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    stack: z.array(z.string()), // Tecnologías: ["React", "TypeScript", "Node.js"]
    status: z.enum(["poc", "wip", "done"]), // poc = Proof of Concept, wip = Work in Progress, done = Completado
    repository_url: z.string().url().optional(),
  }),
});

// Colección: atoms (Proyectos Hardware/Maker)
const atoms = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    stack: z.array(z.string()), // Componentes/herramientas: ["Arduino", "ESP32", "3D Printing"]
    status: z.enum(["poc", "wip", "done"]),
    repository_url: z.string().url().optional(),
  }),
});

// Colección: mind (Ensayos Técnicos)
const mind = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(), // Temas: ["arquitectura", "performance", "devops"]
  }),
});

// Mantener colecciones existentes de Astro Nano
const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional()
  }),
});

export const collections = { bits, atoms, mind, work, projects };
