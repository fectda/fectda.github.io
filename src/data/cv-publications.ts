/**
 * CV Publications & Certifications — Datos exclusivos del CV.
 *
 * Contiene:
 * - Publicaciones (libro co-autor)
 * - Certificaciones (Técnico Electricista)
 * - Habilidades adicionales (reparación PC, herramientas ofimáticas)
 */

import type { Locale } from "./cv-data";

export interface Publication {
  type: "publication" | "certification" | "skill";
  title: { es: string; en: string };
  venue?: { es: string; en: string }; // Publisher, institution, or context
  date?: string; // ISO date or year
}

export const CV_PUBLICATIONS: Record<Locale, Publication[]> = {
  es: [
    {
      type: "publication",
      title: {
        es: 'Co-autor del libro: "Experimentos con burbujas de jabón"',
        en: 'Co-author: "Experiments with Soap Bubbles"',
      },
      venue: {
        es: "Notas de FENOMEC (divulgación científica)",
        en: "FENOMEC Notes (science outreach publication)",
      },
      date: "2010",
    },
    {
      type: "certification",
      title: {
        es: "Técnico Electricista",
        en: "Electrical Technician skills",
      },
    },
    {
      type: "skill",
      title: {
        es: "Reparación de PC y equipos electrónicos",
        en: "PC and electronics repair",
      },
    },
    {
      type: "skill",
      title: {
        es: "Manejo avanzado de herramientas ofimáticas (Microsoft Office Suite, Google Workspace)",
        en: "Advanced proficiency in office suites (Microsoft Office Suite, Google Workspace)",
      },
    },
  ],
  en: [
    {
      type: "publication",
      title: {
        es: 'Co-autor del libro: "Experimentos con burbujas de jabón"',
        en: 'Co-author: "Experiments with Soap Bubbles"',
      },
      venue: {
        es: "Notas de FENOMEC (divulgación científica)",
        en: "FENOMEC Notes (science outreach publication)",
      },
      date: "2010",
    },
    {
      type: "certification",
      title: {
        es: "Técnico Electricista",
        en: "Electrical Technician skills",
      },
    },
    {
      type: "skill",
      title: {
        es: "Reparación de PC y equipos electrónicos",
        en: "PC and electronics repair",
      },
    },
    {
      type: "skill",
      title: {
        es: "Manejo avanzado de herramientas ofimáticas (Microsoft Office Suite, Google Workspace)",
        en: "Advanced proficiency in office suites (Microsoft Office Suite, Google Workspace)",
      },
    },
  ],
};