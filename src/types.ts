export type Site = {
  NAME: string;
  EMAIL: string;
  NUM_BITS_ON_HOMEPAGE: number;
  NUM_ATOMS_ON_HOMEPAGE: number;
  NUM_MIND_ON_HOMEPAGE: number;
  NUM_WORKS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
  JOB_TITLE: string;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];
