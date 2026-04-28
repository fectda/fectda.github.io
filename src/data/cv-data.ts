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
  items: { es: string; en: string }[] | string[];
}

export interface CvData {
  sectionTitles: {
    summary: string;
    experience: string;
    skills: string;
    education: string;
    teaching?: string;
    projects?: string;
    languages: string;
  };
  summary: string; // Short version for web
  longSummary?: string; // Full version for CV
  baseSkills: SkillCategory[];
  languages: string;
}

// ─── Contact data: SINGLE SOURCE OF TRUTH ──────────────────────────────────────
// Phone, location, full name and title are defined ONLY here.
// Not in CV_DATA per locale, not in getCvContact. Everything comes from here.

const CV_PERSONAL = {
  fullName: "Luis Eduardo González González",
  title: "Solutions Architect & Maker",
  phone: "+52 55 6707 6720",
  location: { es: "Ciudad de México", en: "Mexico City" },
} as const;

/** CV CONTACT: Portfolio URL only (matching original PDFs). */
const CV_PORTFOLIO_URL = "https://fectda.github.io/es";

/** Returns ALL contact data for the CV from a single source. */
export function getCvContact(lang: Locale) {
  return {
    name: CV_PERSONAL.fullName,
    title: CV_PERSONAL.title,
    location: CV_PERSONAL.location[lang],
    phone: CV_PERSONAL.phone,
    email: SITE.EMAIL,
    links: [
      {
        label: lang === "es" ? "Portafolio" : "Portfolio",
        url: lang === "es" ? CV_PORTFOLIO_URL : "https://fectda.github.io/en",
      },
    ],
  };
}

// ─── Categorized skills (ES/EN) ─────────────────────────────────────────────
// BASE skills. Project skills are added dynamically.

export const BASE_SKILLS: SkillCategory[] = [
  {
    category: { es: "Lenguajes de Programación", en: "Programming Languages" },
    items: [
      { es: "Python", en: "Python" },
      { es: "JavaScript", en: "JavaScript" },
      { es: "Java", en: "Java" },
      { es: "Go", en: "Go" },
      { es: "Fortran", en: "Fortran" },
      { es: "C", en: "C" },
      { es: "PHP", en: "PHP" },
    ],
  },
  {
    category: { es: "Desarrollo Web (Front-End)", en: "Web Development (Front-End)" },
    items: [
      { es: "HTML5", en: "HTML5" },
      { es: "CSS3 (SASS)", en: "CSS3 (SASS)" },
      { es: "JavaScript", en: "JavaScript" },
      { es: "Vue.js", en: "Vue.js" },
      { es: "jQuery", en: "jQuery" },
      { es: "Bootstrap", en: "Bootstrap" },
      { es: "Materialize", en: "Materialize" },
    ],
  },
  {
    category: { es: "Desarrollo Web (Back-End)", en: "Web Development (Back-End)" },
    items: [
      { es: "Python (Flask)", en: "Python (Flask)" },
      { es: "PHP (Laravel)", en: "PHP (Laravel)" },
      { es: "Node.js", en: "Node.js" },
    ],
  },
  {
    category: { es: "IA y Automatización (Nuevas Adiciones)", en: "AI & Automation (New Additions)" },
    items: [
      { es: "Prompt Engineering (Creación de Expertos)", en: "Prompt Engineering (Expert Systems)" },
      { es: "AI Agents (OpenCode, Gemini-CLI)", en: "AI Agents (OpenCode, Gemini-CLI)" },
      { es: "Local LLMs (Ollama, GPU optimization)", en: "Local LLMs (Ollama, GPU optimization)" },
      { es: "n8n (Automatización de IA)", en: "n8n (AI Automation)" },
      { es: "Power BI", en: "Power BI" },
    ],
  },
  {
    category: { es: "DevOps y Cloud", en: "DevOps & Cloud" },
    items: [
      { es: "Google Cloud Platform (GCP)", en: "Google Cloud Platform (GCP)" },
      { es: "AWS (Bases)", en: "AWS (Basics)" },
      { es: "Docker & Docker Compose (Soporte GPU)", en: "Docker & Docker Compose (GPU Support)" },
      { es: "Kubernetes (K8s)", en: "Kubernetes (K8s)" },
      { es: "Terraform", en: "Terraform" },
      { es: "Ansible", en: "Ansible" },
      { es: "Xen Orchestra", en: "Xen Orchestra" },
    ],
  },
  {
    category: { es: "Infraestructura y Redes", en: "Infrastructure & Networking" },
    items: [
      { es: "Cloudflare Tunnel", en: "Cloudflare Tunnel" },
      { es: "Zero Trust", en: "Zero Trust" },
      { es: "Kafka", en: "Kafka" },
      { es: "RabbitMQ", en: "RabbitMQ" },
    ],
  },
  {
    category: { es: "Observabilidad", en: "Observability" },
    items: [
      { es: "Grafana", en: "Grafana" },
      { es: "Istio", en: "Istio" },
      { es: "Prometheus", en: "Prometheus" },
      { es: "Trazabilidad", en: "Traceability" },
      { es: "Video Coding", en: "Video Coding" },
    ],
  },
  {
    category: { es: "Bases de Datos", en: "Databases" },
    items: [
      { es: "SQL (PostgreSQL, MySQL, MariaDB)", en: "SQL (PostgreSQL, MySQL, MariaDB)" },
      { es: "NoSQL (MongoDB, Redis)", en: "NoSQL (MongoDB, Redis)" },
    ],
  },
  {
    category: { es: "Control de Versiones", en: "Version Control" },
    items: [{ es: "Git", en: "Git" }],
  },
  {
    category: { es: "Sistemas Operativos", en: "Operating Systems" },
    items: [
      { es: "Linux (Debian)", en: "Linux (Debian)" },
      { es: "macOS", en: "macOS" },
      { es: "Windows", en: "Windows" },
    ],
  },
  {
    category: { es: "Herramientas y Otros", en: "Tools & Others" },
    items: [
      { es: "Arduino", en: "Arduino" },
      { es: "Bash/Shell Scripting", en: "Bash/Shell Scripting" },
      { es: "Metodologías Ágiles (Scrum)", en: "Agile Methodologies (Scrum)" },
      { es: "Frigate", en: "Frigate" },
    ],
  },
  {
    category: { es: "Análisis de Datos/Simulación", en: "Data Analysis/Simulation" },
    items: [
      { es: "Matlab", en: "Matlab" },
      { es: "Mathematica", en: "Mathematica" },
      { es: "SPSS", en: "SPSS" },
      { es: "Origin", en: "Origin" },
    ],
  },
];

// ─── Independent projects (narrative from original CV) ─────────────────────
// Sub-categories with descriptions, not a flat list from bits/atoms.

export interface ProjectSubcategory {
  title: { es: string; en: string };
  dateRange?: { es: string; en: string };
  bullets: { es: string[]; en: string[] };
}

export const CV_PROJECTS: Record<string, ProjectSubcategory[]> = {
  infrastructure: [
    {
      title: {
        es: "Infraestructura, Cloud & Observabilidad",
        en: "Infrastructure, Cloud & Observability",
      },
      dateRange: { es: "2026 - Presente", en: "2026 - Present" },
      bullets: {
        es: [
          "Orquestación de Servidores Locales: Gestión de infraestructura on-premise utilizando Xen Orchestra, Terraform y Ansible para aprovisionamiento automatizado.",
          "Sistemas Distribuidos Escalables: Desarrollo de un sistema de procesamiento de mensajes en Kubernetes (K8s) integrado con RabbitMQ. Implementación de autoescalado de pods basado en carga de trabajo y pipelines donde cada worker ejecuta jobs independientes.",
          "Seguridad y Redes: Implementación de Cloudflare Tunnel y políticas Zero Trust para acceso seguro a recursos.",
          "Observabilidad Avanzada: Despliegue de stacks de monitoreo con Grafana, Istio y Prometheus; implementación de trazabilidad distribuida para microservicios.",
        ],
        en: [
          "Local Server Orchestration: Management of on-premise infrastructure using Xen Orchestra, Terraform, and Ansible for automated provisioning.",
          "Scalable Distributed Systems: Development of a Kubernetes (K8s) message processing system integrated with RabbitMQ. Implementation of pod autoscaling based on workload and pipelines where each worker runs independent jobs.",
          "Security & Networking: Implementation of Cloudflare Tunnel and Zero Trust policies for secure resource access.",
          "Advanced Observability: Deployment of monitoring stacks with Grafana, Istio, and Prometheus; implementation of distributed tracing for microservices.",
        ],
      },
    },
  ],
  ai: [
    {
      title: {
        es: "Inteligencia Artificial Generativa & Automatización",
        en: "Generative AI & Automation",
      },
      bullets: {
        es: [
          "Plataforma de Aprendizaje de Idiomas (AI Roleplay): Desarrollo de una aplicación local dockerizada que utiliza LLMs (vía Ollama con optimización de GPU) para simular un instructor de idiomas. El sistema gestiona interacciones de rol complejas mediante voz y texto.",
          "Agentes de IA y Flujos de Trabajo: Creación y programación de agentes autónomos utilizando OpenCode y Gemini-CLI. Automatización de procesos de negocio complejos mediante flujos de trabajo inteligentes en n8n.",
          "Ingeniería de Prompts Avanzada: Diseño de \"Sistemas Expertos\" mediante técnicas avanzadas de prompting para tareas especializadas.",
        ],
        en: [
          "Language Learning Platform (AI Roleplay): Development of a local dockerized application utilizing LLMs (via Ollama with GPU optimization) to simulate a language instructor. The system manages complex role-play interactions via voice and text.",
          "AI Agents & Workflows: Creation and programming of autonomous agents using OpenCode and Gemini-CLI. Automation of complex business processes using intelligent workflows in n8n.",
          "Advanced Prompt Engineering: Design of \"Expert Systems\" using advanced prompting techniques for specialized tasks.",
        ],
      },
    },
  ],
  simulations: [
    {
      title: {
        es: "Simulaciones & Domótica (Histórico)",
        en: "Simulations & Home Automation (Historical)",
      },
      bullets: {
        es: [
          "Simulaciones Físicas: Desarrollo de simulaciones de movimiento planetario (Basic) y ondas gravitacionales (Fortran).",
          "Redes Neuronales: Entrenamiento de redes para clasificación de imágenes con Python y TensorFlow.",
          "Domótica Avanzada: Implementación de sistemas de control (iluminación, temperatura, seguridad) con Home Assistant y Frigate.",
          "Diseño 3D: Modelado arquitectónico y de piezas técnicas para impresión 3D (SketchUp, FDM).",
        ],
        en: [
          "Physical Simulations: Developed interactive simulations for planetary motion (Basic) and gravitational waves (Fortran).",
          "Neural Networks: Experimented with development and training of neural networks for image classification using Python/TensorFlow.",
          "Advanced Home Automation: Implemented control systems (lighting, temperature, security) with Home Assistant and Frigate.",
          "3D Design: Architectural and technical part modeling for 3D printing (SketchUp, FDM).",
        ],
      },
    },
  ],
};

// ─── Locale-specific data (only what changes between languages) ───────────────

export const CV_DATA: Record<Locale, CvData> = {
  es: {
    sectionTitles: {
      summary: "RESUMEN PROFESIONAL",
      experience: "EXPERIENCIA LABORAL",
      skills: "HABILIDADES TÉCNICAS",
      education: "EDUCACIÓN",
      teaching: "ACTIVIDAD DOCENTE",
      projects: "PROYECTOS INDEPENDIENTES Y FREELANCE",
      languages: "IDIOMAS",
    },
    summary:
      "Profesional de TI con experiencia en full-stack, arquitectura en nube y gestión de proyectos. Especializado en Python, JavaScript y GCP. Enfocado en proyectos independientes: orquestación de IA local, observabilidad y sistemas distribuidos. Base analítica sólida en Ciencias Físicas.",
    longSummary:
      "Profesional de Tecnologías de la Información con sólida experiencia en full-stack, arquitectura de software en la nube, y gestión de proyectos tecnológicos. Especializado en Python, JavaScript y soluciones en Google Cloud, con una reciente expansión hacia la orquestación de IA generativa local y observabilidad avanzada. Apasionado por la creación de soluciones eficientes y de alta calidad, con una sólida base analítica proveniente de una formación en Ciencias Físicas. Busco contribuir con mis habilidades técnicas y de liderazgo en roles desafiantes que impulsen la innovación.",
    baseSkills: BASE_SKILLS,
    languages: "Español: Nativo | Inglés: Nivel B2 (Competencia profesional funcional)",
  },

  en: {
    sectionTitles: {
      summary: "PROFESSIONAL SUMMARY",
      experience: "PROFESSIONAL EXPERIENCE",
      skills: "TECHNICAL SKILLS",
      education: "EDUCATION",
      teaching: "TEACHING EXPERIENCE",
      projects: "INDEPENDENT PROJECTS & FREELANCE",
      languages: "LANGUAGES",
    },
    summary:
      "IT professional with experience in full-stack, cloud architecture, and project management. Specialized in Python, JavaScript, and GCP. Focused on independent projects: local AI orchestration, observability, and distributed systems. Solid analytical foundation in Physical Sciences.",
    longSummary:
      "IT Professional with extensive experience in full-stack development, cloud software architecture, and technology project management. Specialized in Python, JavaScript, and Google Cloud solutions. Recently focused on high-level independent projects involving local generative AI orchestration, advanced observability, and distributed systems. Passionate about building efficient, high-quality solutions, backed by a strong analytical foundation from a background in Physical Sciences.",
    baseSkills: BASE_SKILLS,
    languages: "Spanish: Native | English: B2 Level (Professional Working Proficiency)",
  },
};