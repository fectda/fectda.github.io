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
    progress: z.number().min(0).max(5).default(0), // Xiuhcoatl bar segments filled (1-5)
    type: z.string().default("SOFTWARE"), // Project type: AI_AGENT, APP, etc.
    images: z.array(z.string()).optional(), // Paths to images in public folder
    repository_url: z.string().url().optional(),
    demo_url: z.string().url().optional(),
  }),
});

// Colección: atoms (Proyectos Hardware/Maker)
const atoms = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(), // Short name for card display, e.g. MACRO_PAD_V2
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    icon: z.string().default("memory"), // Material Symbols icon name
    stack: z.array(z.string()), // Componentes/herramientas: ["Arduino", "ESP32", "3D Printing"]
    status: z.enum(["poc", "wip", "done"]),
    type: z.string().default("HARDWARE"),
    images: z.array(z.string()).optional(),
    repository_url: z.string().url().optional(),
    demo_url: z.string().url().optional(),
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
    references: z.array(z.string()).optional(), // List of citations
    status: z.enum(["draft", "peer_reviewed", "published"]).default("published"),
  }),
});

// Mantener colecciones existentes de Astro Nano
// Mantener colecciones existentes de Astro Nano
const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
    icon: z.string().optional(),
  }),
});



// Colección: education (Formación Académica)
const education = defineCollection({
  type: "content",
  schema: z.object({
    institution: z.string(),
    degree: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
    icon: z.string().optional(),
  }),
});

// Colección: about (Sobre Mí)
const about = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // interests: z.array(z.string()).optional(), // Deprecated in favor of structured sections
    manifesto: z.object({
      title: z.string(),
      subtitle: z.string(),
      bio: z.string(),
    }).optional(),
    blueBlood: z.object({
      title: z.string(),
      subtitle: z.string(),
      body: z.string(),
      tags: z.array(z.string()),
    }).optional(),
    discomfort: z.object({
      title: z.string(),
      warning: z.string(),
      body: z.string(),
    }).optional(),
    makerLineage: z.object({
      title: z.string(),
      id: z.string(),
      class: z.string(),
      body: z.string(),
      badges: z.array(z.string()),
    }).optional(),
    obsessions: z.object({
      title: z.string(),
      items: z.array(z.object({
        id: z.string(),
        icon: z.string(),
        title: z.string(),
        desc: z.string(),
      })),
    }).optional(),
  }),
});

export const collections = { bits, atoms, mind, work, education, about };
