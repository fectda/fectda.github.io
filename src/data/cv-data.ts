/**
 * CV Base Data — Lo que cambia LENTO en el CV.
 *
 * ÚNICA FUENTE DE VERDAD para contacto y skills.
 * consts.ts tiene SITE.EMAIL y SOCIALS; aquí va lo demás.
 *
 * Lo que cambia RÁPIDO (skills de proyectos) → se extrae de bits/atoms dinámicamente.
 */

import { SITE, SOCIALS } from "@consts";

export type Locale = "es" | "en";

/** Skill con categoría — usada tanto en SkillMatrix web como en LaTeX */
export interface SkillCategory {
  category: { es: string; en: string };
  items: string[];
}

export interface CvData {
  sectionTitles: {
    summary: string;
    experience: string;
    skills: string;
    education: string;
    languages: string;
  };
  summary: string;
  baseSkills: SkillCategory[];
  languages: string;
}

// ─── Datos de contacto: ÚNICA FUENTE ──────────────────────────────────────────
// Teléfono, ubicación, nombre completo y título solo se definen AQUÍ.
// Ni en CV_DATA por locale, ni en getCvContact. Todo sale de aquí.

const CV_PERSONAL = {
  fullName: "Luis Eduardo González González",
  title: "Solutions Architect & Maker",
  phone: "55 6707 6720",
  location: { es: "Ciudad de México", en: "Mexico City" },
} as const;

// Links para CV: subconjunto de SOCIALS (sin Instagram/Facebook)
const CV_LINK_NAMES = ["github", "gitlab", "linkedin"] as const;

const LINK_LABELS: Record<string, { es: string; en: string }> = {
  github: { es: "GitHub", en: "GitHub" },
  gitlab: { es: "GitLab", en: "GitLab" },
  linkedin: { es: "LinkedIn", en: "LinkedIn" },
};

/** Devuelve TODOS los datos de contacto para el CV, desde una sola fuente */
export function getCvContact(lang: Locale) {
  const links = SOCIALS.filter((s) =>
    (CV_LINK_NAMES as readonly string[]).includes(s.NAME)
  ).map((s) => ({
    label: LINK_LABELS[s.NAME]?.[lang] || s.NAME,
    url: s.HREF,
  }));

  return {
    name: CV_PERSONAL.fullName,
    title: CV_PERSONAL.title,
    location: CV_PERSONAL.location[lang],
    phone: CV_PERSONAL.phone,
    email: SITE.EMAIL,
    links,
  };
}

// ─── Skills categorizadas (ES/EN) ─────────────────────────────────────────────
// Skills BASE. Las de proyectos se añaden dinámicamente.

export const BASE_SKILLS: SkillCategory[] = [
  {
    category: { es: "Lenguajes", en: "Languages" },
    items: ["Python", "JavaScript", "Java", "Go", "Fortran", "C", "PHP"],
  },
  {
    category: { es: "Front-End", en: "Front-End" },
    items: ["HTML5", "CSS3", "Vue.js", "jQuery", "Bootstrap"],
  },
  {
    category: { es: "Back-End", en: "Back-End" },
    items: ["Python (Flask)", "PHP (Laravel)", "Node.js"],
  },
  {
    category: { es: "IA/Automatización", en: "AI/Automation" },
    items: ["Prompt Engineering", "AI Agents", "Ollama", "n8n"],
  },
  {
    category: { es: "DevOps/Cloud", en: "DevOps/Cloud" },
    items: ["GCP", "AWS", "Docker", "K8s", "Terraform", "Ansible"],
  },
  {
    category: { es: "Observabilidad", en: "Observability" },
    items: ["Grafana", "Istio", "Prometheus"],
  },
  {
    category: { es: "Bases de Datos", en: "Databases" },
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
];

// ─── Datos por locale (solo lo que cambia entre idiomas) ──────────────────────

export const CV_DATA: Record<Locale, CvData> = {
  es: {
    sectionTitles: {
      summary: "RESUMEN PROFESIONAL",
      experience: "EXPERIENCIA",
      skills: "HABILIDADES",
      education: "EDUCACIÓN",
      languages: "IDIOMAS",
    },
    summary:
      "Profesional de TI con experiencia en full-stack, arquitectura en nube y gestión de proyectos. Especializado en Python, JavaScript y GCP. Enfocado en proyectos independientes: orquestación de IA local, observabilidad y sistemas distribuidos. Base analítica sólida en Ciencias Físicas.",
    baseSkills: BASE_SKILLS,
    languages: "Español: Nativo | Inglés: Avanzado (C1)",
  },

  en: {
    sectionTitles: {
      summary: "PROFESSIONAL SUMMARY",
      experience: "EXPERIENCE",
      skills: "SKILLS",
      education: "EDUCATION",
      languages: "LANGUAGES",
    },
    summary:
      "IT professional with experience in full-stack, cloud architecture, and project management. Specialized in Python, JavaScript, and GCP. Focused on independent projects: local AI orchestration, observability, and distributed systems. Solid analytical foundation in Physical Sciences.",
    baseSkills: BASE_SKILLS,
    languages: "Spanish: Native | English: Advanced (C1)",
  },
};