/**
 * Skill Categorization Rules — LO QUE CAMBIA LENTO.
 *
 * Skills se categorizan automáticamente desde los proyectos (bits/atoms).
 * Este archivo define las reglas: qué keywords pertenecen a qué dominio.
 *
 * Cómo funciona:
 * 1. Se extraen skills únicas del stack de todos los proyectos
 * 2. Para cada skill, se busca en qué dominio cae (keyword matching)
 * 3. Primera coincidencia gana (priority order)
 * 4. Si no coincide con nada → va a "Otros/Others"
 *
 * Cómo agregar un nuevo dominio:
 * 1. Añadir un objeto con { domain: { es, en }, keywords: [...] }
 * 2. Ponerlo en el orden correcto (orden = prioridad)
 * 3. Las keywords son case-insensitive y se buscan por substring
 */

import type { SkillCategory } from "@data/cv-data";

/** Keywords que se buscan en cada skill (case-insensitive, substring match) */
export interface SkillDomain {
  domain: { es: string; en: string };
  /** Keywords que mapean a este dominio. First match wins (priority order). */
  keywords: string[];
}

/**
 * Reglas de categorización — orden = prioridad.
 *
 * domains con * son las categorías nuevas que cubren gaps de BASE_SKILLS.
 * El resto son dominios existentes de BASE_SKILLS copiados aquí para mantener
 * consistencia cuando generate-cv.ts use este archivo.
 */
export const SKILL_CATEGORIES: SkillDomain[] = [
  // ─── Existing domains (from BASE_SKILLS) ───────────────────────────────
  {
    domain: { es: "Lenguajes de Programación", en: "Programming Languages" },
    keywords: [
      "python", "javascript", "java", "go", "fortran", "php", "c++", "c #",
      "typescript", "flask", "node.js", "nodejs", "laravel", "fastapi",
      "microservicios",
    ],
  },
  {
    domain: { es: "Desarrollo Web (Front-End)", en: "Web Development (Front-End)" },
    keywords: [
      "html", "css", "sass", "vue.js", "vuejs", "vue", "jquery", "bootstrap",
      "materialize", "tailwindcss", "tailwind", "react", "angular", "astro",
      "vite",
    ],
  },
  {
    domain: { es: "Desarrollo Web (Back-End)", en: "Web Development (Back-End)" },
    keywords: [
      "flask", "laravel", "node.js", "nodejs", "php", "fastapi", "python (flask)",
      "python (", "nginx", "apache",
    ],
  },
  {
    domain: { es: "IA y Automatización", en: "AI & Automation" },
    keywords: [
      "ollama", "local llm", "ai agents", "opencode", "gemini-cli",
      "prompt engineering", "n8n", "power bi", "ai swarm", "meta-prompting",
      "system prompting", "llm", "hugging face", "automatización",
      "spotify api", "yt-dlp", "vikunja", "methodology", "strategy",
    ],
  },
  {
    domain: { es: "DevOps y Cloud", en: "DevOps & Cloud" },
    keywords: [
      "docker", "kubernetes", "k8s", "gcp", "google cloud", "aws", "terraform",
      "ansible", "xen orchestra", "docker compose", "cloud", "gitlab", "ci/cd",
      "github actions", "cloudflare",
    ],
  },
  {
    domain: { es: "Infraestructura y Redes", en: "Infrastructure & Networking" },
    keywords: [
      "cloudflare", "zero trust", "kafka", "rabbitmq", "mqtt", "networking",
      "security", "firewall", "vpn",
    ],
  },
  {
    domain: { es: "Herramientas y Otros", en: "Tools & Others" },
    keywords: [
      "bash", "shell", "scripting", "scr", "scrum", "frigate",
      "vim", "emacs", "latex", "markdown",
    ],
  },
  {
    domain: { es: "Observabilidad", en: "Observability" },
    keywords: [
      "grafana", "istio", "prometheus", "trazabilidad", "tracing", "monitoring",
      "video coding",
    ],
  },
  {
    domain: { es: "Bases de Datos", en: "Databases" },
    keywords: [
      "postgresql", "mysql", "mariadb", "mongodb", "redis", "sql", "nosql",
      "database",
    ],
  },
  {
    domain: { es: "Control de Versiones", en: "Version Control" },
    keywords: ["git", "github", "gitlab", "bitbucket", "version control"],
  },
  {
    domain: { es: "Sistemas Operativos", en: "Operating Systems" },
    keywords: [
      "linux", "debian", "macos", "windows", "ubuntu", "fedora", "arch",
      "unix",
    ],
  },
  {
    domain: { es: "Civil & Construcción", en: "Civil & Construction" },
    keywords: [
      "arquitectura", "obra civil", "civil works",
      "tempered glass", "cristal templado", "policarbonato", "polycarbonate",
    ],
  },
  {
    domain: { es: "Análisis de Datos/Simulación", en: "Data Analysis/Simulation" },
    keywords: [
      "matlab", "mathematica", "spss", "origin", "statistics", "data science",
      "estadística", "simulation", "simulación",
    ],
  },

  // ─── New domains (from project skills NOT in BASE_SKILLS) ─────────────
  {
    domain: { es: "IoT y Automatización del Hogar", en: "IoT & Home Automation" },
    keywords: [
      "esphome", "home assistant", "esp32", "esp8266", "ld2410", "ds18b20",
      "sensor", "sensors", "mqtt", "smart", "home automation", "iot",
      "puente h", "power electronics", "hydraulics",
    ],
  },
  {
    domain: { es: "Diseño 3D y Prototipado", en: "3D Design & Prototyping" },
    keywords: [
      "freecad", "sketchup", "tinkercad", "3d printing", "impresión 3d",
      "petg", "pla", "slicing", "slicer", "mechanical design",
      "industrial design", "modelado 3d", "cad", "papel maché", "papier-mâché",
      "cardboard", "escultura", "sculpture",
    ],
  },
  {
    domain: { es: "Ingeniería de IA / Orquestación de LLMs", en: "AI Engineering & LLM Orchestration" },
    keywords: [
      "ollama", "comfyui", "prompt engineering", "meta-prompting",
      "system prompting", "ai agents", "local llm", "llama", "qwen",
      "hunyuan", "stable diffusion", "image generation", "text-to-image",
      "img-to-3d", "img2img", "text to image", "cuda", "nvidia", "coral tpu",
    ],
  },
  {
    domain: { es: "Voz y Audio AI", en: "Voice/Audio AI" },
    keywords: [
      "faster-whisper", "piper tts", "whisper", "stt", "tts",
      "speech to text", "text to speech", "audio", "voice", "tts", "pcm5102",
    ],
  },
  {
    domain: { es: "Oficio y Construcción", en: "Trade & Construction" },
    keywords: [
      "carpintería", "herrería", "albañilería", "plomería", "soldadura",
      "concreto", "acabados", "madera", "masonry", "cerámica",
      "cristal templado", "policarbonato", "obra civil", "pintura",
      "barnizado", "lijado", "cepillado", "madera reciclada", "concrete",
      "ironwork", "plumbing", "wood", "organization", "organización",
      "diy", "reclaimed wood", "nature", "naturaleza", "carpentry",
      "cartón", "civil works", "finishes", "polycarbonate", "pc fan",
    ],
  },
  {
    domain: { es: "Diseño y Planificación", en: "Design & Planning" },
    keywords: [
      "arquitectura", "interiorismo", "iluminación", "diseño industrial",
      "diseño", "interior design", "architecture", "espacio", "layout",
      "lighting",
    ],
  },
  {
    domain: { es: "Computación Física y Electrónica", en: "Physical Computing & Electronics" },
    keywords: [
      "arduino", "esp32", "esp8266", "electronics", "electronic", "soldering",
      "soldadura", "pcb", "reverse engineering", "mt3608", "ventilador pc",
      "hardware", "power electronics",
    ],
  },
  {
    domain: { es: "PC Hardware y Modding", en: "PC Hardware & Modding" },
    keywords: [
      "merv 13", "aio liquid cooler", "open case", "termodinámica",
      "refrigeración", "liquid cooling", "pc mod", "computer mod",
      "filtros", "filter", "thermodynamics", "pc fan",
    ],
  },
  {
    domain: { es: "Energía y Sustentabilidad", en: "Energy & Sustainability" },
    keywords: [
      "solar", "paneles solares", "inversor", "monitorización eléctrica",
      "energy", "sustainable", "renovable", "photovoltaic", "inverter",
    ],
  },
];

/** Dominio catch-all para skills que no calzan con nada */
const OTHERS_DOMAIN: { es: string; en: string } = {
  es: "Otros",
  en: "Others",
};

/**
 * Normaliza una skill string para búsqueda:
 * - Lowercase
 * - Quita acentos
 * - Trim espacios
 */
function normalizeSkill(skill: string): string {
  return skill
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

/**
 * Busca en qué dominio cae una skill.
 * Primera coincidencia gana (orden de SKILL_CATEGORIES = prioridad).
 * Si no hay match → null (va a Others).
 *
 * Matching rules:
 * - Keywords de 1-3 chars: se buscan como palabras completas en la skill
 *   (para evitar que "go" calce con "golang" o " c " calce con todo)
 * - Keywords de 4+ chars: substring matching bidireccional
 * - Case-insensitive, sin acentos
 */
function findDomain(skill: string): SkillDomain | null {
  const normalized = normalizeSkill(skill);
  // Split skill into words for boundary matching of short keywords
  const skillWords = new Set(normalized.split(/\s+/));

  for (const domain of SKILL_CATEGORIES) {
    for (const keyword of domain.keywords) {
      const normalizedKeyword = normalizeSkill(keyword);
      const klen = normalizedKeyword.length;

      if (klen <= 3) {
        // Short keywords: match only as complete word (boundary)
        if (skillWords.has(normalizedKeyword)) {
          return domain;
        }
      } else {
        // Longer keywords: bidirectional substring
        if (normalized.includes(normalizedKeyword) || normalizedKeyword.includes(normalized)) {
          return domain;
        }
      }
    }
  }
  return null;
}

/**
 * Categoriza una lista de skills únicas.
 * Retorna array de SkillCategory (mismo formato que SkillMatrix espera).
 * Skills sin match van a "Otros/Others".
 */
export function categorizeSkills(skills: string[]): SkillCategory[] {
  const categorized = new Map<string, string[]>();

  for (const skill of skills) {
    const domain = findDomain(skill);
    const domainKey = domain
      ? `${domain.domain.es}||${domain.domain.en}`
      : `${OTHERS_DOMAIN.es}||${OTHERS_DOMAIN.en}`;

    if (!categorized.has(domainKey)) {
      categorized.set(domainKey, []);
    }
    categorized.get(domainKey)!.push(skill);
  }

  // Convertir a array de SkillCategory
  const result: SkillCategory[] = [];
  for (const [key, items] of categorized) {
    const [es, en] = key.split("||");
    result.push({
      category: { es, en },
      items: items.sort(),
    });
  }

  // Ordenar por nombre de categoría (dominios conocidos primero, Others al final)
  result.sort((a, b) => {
    if (a.category.es === OTHERS_DOMAIN.es) return 1;
    if (b.category.es === OTHERS_DOMAIN.es) return -1;
    return a.category.es.localeCompare(b.category.es);
  });

  return result;
}

/**
 * Versión async que lee skills directamente de los proyectos.
 * Usa getCollection de Astro (para usar en páginas Astro).
 */
export async function categorizeSkillsFromProjects(): Promise<SkillCategory[]> {
  const { getCollection } = await import("astro:content");

  const bits = (await getCollection("bits")).filter((item) => !item.data.draft);
  const atoms = (await getCollection("atoms")).filter((item) => !item.data.draft);

  const allStacks = [...bits, ...atoms]
    .flatMap((item) => item.data.stack || []);

  const uniqueSkills = [...new Set(allStacks)];
  return categorizeSkills(uniqueSkills);
}
