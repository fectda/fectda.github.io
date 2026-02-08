import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Astro Nano",
  EMAIL: "markhorn.dev@gmail.com",
  NUM_BITS_ON_HOMEPAGE: 3,
  NUM_ATOMS_ON_HOMEPAGE: 3,
  NUM_MIND_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BITS: Metadata = {
  TITLE: "Bits",
  DESCRIPTION: "Software projects and technical implementations.",
};

export const ATOMS: Metadata = {
  TITLE: "Atoms",
  DESCRIPTION: "Hardware projects, maker experiments, and physical computing.",
};

export const MIND: Metadata = {
  TITLE: "Mind",
  DESCRIPTION: "Technical essays, thoughts, and reflections on engineering.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "twitter-x",
    HREF: "https://twitter.com/markhorn_dev",
  },
  {
    NAME: "github",
    HREF: "https://github.com/markhorn-dev"
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/markhorn-dev",
  }
];
