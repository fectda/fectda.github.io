import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Eduardo González",
  EMAIL: "fectda@gmail.com",
  NUM_BITS_ON_HOMEPAGE: 3,
  NUM_ATOMS_ON_HOMEPAGE: 3,
  NUM_MIND_ON_HOMEPAGE: 1,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Physicist. Builder. Strategist. (Físico. Constructor. Estratega.)",
};

export const BITS: Metadata = {
  TITLE: "Códices Digitales",
  DESCRIPTION: "Sistemas lógicos, arquitectura de nube y estructuras virtuales.",
};

export const ATOMS: Metadata = {
  TITLE: "Artefactos Físicos",
  DESCRIPTION: "Ingeniería tangible, impresión 3D y adaptación del entorno.",
};

export const MIND: Metadata = {
  TITLE: "Pensamiento",
  DESCRIPTION: "Filosofía, estrategia y la búsqueda de la eficiencia radical.",
};

export const WORK: Metadata = {
  TITLE: "Trayectoria",
  DESCRIPTION: "El camino recorrido.",
};

export const PROJECTS: Metadata = {
  TITLE: "Proyectos",
  DESCRIPTION: "Compendio de obras.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/fectda"
  },
  {
    NAME: "gitlab",
    HREF: "https://gitlab.com/eduardo-dev"
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/luis-eduardo-gonzalez-gonzalez",
  },
  {
    NAME: "instagram",
    HREF: "https://www.instagram.com/superjudio/"
  },
  {
    NAME: "facebook",
    HREF: "https://www.facebook.com/superjudio/?locale=es_LA"
  }
];
