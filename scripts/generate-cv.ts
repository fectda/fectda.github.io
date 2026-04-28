/**
 * generate-cv.ts
 *
 * Lee las content collections y cv-data.ts → genera archivos .tex → compila a PDF.
 *
 * Uso:
 *   npx tsx scripts/generate-cv.ts          # Genera .tex y compila si pdflatex está disponible
 *   npx tsx scripts/generate-cv.ts --tex-only # Solo genera .tex
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { execSync } from "node:child_process";
import matter from "gray-matter";

// ─── Types ───────────────────────────────────────────────────────────────────

interface WorkEntry {
  company: string;
  role: string;
  dateStart: string;
  dateEnd: string;
  icon?: string;
  body: string;
  cvBullets?: string[];
}

interface EducationEntry {
  institution: string;
  degree: string;
  dateStart: string;
  dateEnd: string;
  icon?: string;
  body: string;
  cvBullets?: string[];
}

interface ProjectEntry {
  title: string;
  description: string;
  date?: string;
  stack: string[];
  status: string;
  type?: string;
  url?: string;
}

interface TeachingEntry {
  title: string;
  institution: string;
  role: string;
  dateStart: string;
  dateEnd: string;
  level: string;
  cvBullets?: string[];
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const ROOT = path.resolve(import.meta.dirname, "..");
const CONTENT_DIR = path.join(ROOT, "src/content");
const CV_OUT_DIR = path.join(ROOT, "public");
const TEX_OUT_DIR = path.join(ROOT, "cv/generated");

function readMdFiles(collection: string, locale: string): matter.GrayMatterFile<string>[] {
  const dir = path.join(CONTENT_DIR, collection, locale);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), "utf-8");
      return matter(raw);
    });
}

function loadWork(locale: string): WorkEntry[] {
  const files = readMdFiles("work", locale);
  return files
    .map((f) => ({
      company: f.data.company || "",
      role: f.data.role || "",
      dateStart: f.data.dateStart || "",
      dateEnd: f.data.dateEnd || "",
      icon: f.data.icon,
      body: (f.content || "").trim(),
      cvBullets: f.data.cvBullets,
    }))
    .sort((a, b) => new Date(b.dateStart).getTime() - new Date(a.dateStart).getTime());
}

function loadEducation(locale: string): EducationEntry[] {
  const files = readMdFiles("education", locale);
  return files
    .map((f) => ({
      institution: f.data.institution || "",
      degree: f.data.degree || "",
      dateStart: f.data.dateStart || "",
      dateEnd: f.data.dateEnd || "",
      icon: f.data.icon,
      body: (f.content || "").trim(),
      cvBullets: f.data.cvBullets,
    }))
    .sort((a, b) => new Date(b.dateStart).getTime() - new Date(a.dateStart).getTime());
}

function loadProjects(locale: string): ProjectEntry[] {
  const bitsDir = path.join(CONTENT_DIR, "bits", locale);
  const atomsDir = path.join(CONTENT_DIR, "atoms", locale);

  const projects: ProjectEntry[] = [];

  for (const dir of [bitsDir, atomsDir]) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
    for (const f of files) {
      const raw = fs.readFileSync(path.join(dir, f), "utf-8");
      const { data, content } = matter(raw);
      if (data.draft) continue;
      if (data.status === "poc") continue; // Skip proof of concepts in CV
      projects.push({
        title: data.title || "",
        description: data.description || "",
        date: data.date?.toISOString().split("T")[0],
        stack: data.stack || [],
        status: data.status || "",
        type: data.type || "",
        url: data.repository_url || data.demo_url,
      });
    }
  }

  return projects;
}

function loadTeaching(locale: string): TeachingEntry[] {
  const files = readMdFiles("teaching", locale);
  return files
    .map((f) => {
      const dateStartObj = f.data.dateStart instanceof Date ? f.data.dateStart : new Date(String(f.data.dateStart || ""));
      const dateEndObj = f.data.dateEnd instanceof Date ? f.data.dateEnd : (f.data.dateEnd ? new Date(String(f.data.dateEnd)) : null);
      return {
      title: f.data.title || "",
      institution: f.data.institution || "",
      role: f.data.role || "",
      dateStart: dateStartObj.toISOString().split("T")[0],
      dateEnd: dateEndObj ? dateEndObj.toISOString().split("T")[0] : "",
      level: f.data.level || "",
      cvBullets: f.data.cvBullets,
    };})
    .sort((a, b) => new Date(a.dateStart).getTime() - new Date(b.dateStart).getTime());
}

/** Extraer skills únicas de proyectos publicados */
function extractProjectSkills(locale: string): string[] {
  const projects = loadProjects(locale);
  const allStacks = projects.flatMap((p) => p.stack || []);
  return [...new Set(allStacks)].sort();
}

/** Formatear fecha para LaTeX */
function formatDate(dateStr: string, locale: string): string {
  if (!dateStr || dateStr.toLowerCase() === "present") {
    return locale === "es" ? "Actualidad" : "Present";
  }
  // Append T12:00:00 to prevent timezone offset from shifting date to previous day
  const d = new Date(dateStr.includes("T") ? dateStr : `${dateStr}T12:00:00`);
  if (isNaN(d.getTime())) return dateStr;
  const months =
    locale === "es"
      ? ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
      : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[d.getMonth()]} ${d.getFullYear()}`;
}

/**
 * Convertir markdown a comandos LaTeX.
 * Primera pasada: **bold** → \textbf{}, *italic* → \textit{}, `code` → \texttt{}, [link](url) → \href{url}{text}
 * NO escapa caracteres especiales - eso lo hace texEscape() en la segunda pasada.
 */
function mdToLatex(md: string): string {
  return md
    .replace(/\*\*(.*?)\*\*/g, "\\textbf{$1}")      // bold → \textbf{}
    .replace(/\*(.*?)\*/g, "\\textit{$1}")          // italic → \textit{}
    .replace(/`(.*?)`/g, "\\texttt{$1}")            // code → \texttt{}
    .replace(/\[(.*?)\]\((.*?)\)/g, "\\href{$2}{$1}"); // links → \href{}{}
}

/**
 * Escapar caracteres especiales LaTeX en texto plano.
 * Segunda pasada: escapa %, $, &, _, {, }, ~, ^, # pero PRESERVA los comandos LaTeX ya generados.
 * Detecta patrones \command{...} y no escapa el backslash ni las llaves dentro de ellos.
 */
function texEscape(str: string): string {
  let result = "";
  let i = 0;

  while (i < str.length) {
    // Detectar inicio de comando LaTeX (\command{arg})
    if (str[i] === "\\" && i + 1 < str.length && str[i + 1] !== "\\") {
      // Intentar match de un comando LaTeX completo
      const match = str.slice(i).match(/^\\[a-zA-Z]+(\{[^}]*\})*/);
      if (match) {
        // Preservar el comando LaTeX sin escapar
        result += match[0];
        i += match[0].length;
        continue;
      }
    }

    // Escapar caracteres especiales en texto plano
    if (str[i] === "\\") {
      result += "\\textbackslash{}";
    } else if (str[i] === "&") {
      result += "\\&";
    } else if (str[i] === "%") {
      result += "\\%";
    } else if (str[i] === "$") {
      result += "\\$";
    } else if (str[i] === "#") {
      result += "\\#";
    } else if (str[i] === "_") {
      result += "\\_";
    } else if (str[i] === "{") {
      result += "\\{";
    } else if (str[i] === "}") {
      result += "\\}";
    } else if (str[i] === "~") {
      result += "\\textasciitilde{}";
    } else if (str[i] === "^") {
      result += "\\textasciicircum{}";
    } else {
      result += str[i];
    }
    i++;
  }

  return result;
}

/**
 * Convertir markdown bullets a LaTeX items.
 * Usa two-pass approach:
 * 1. mdToLatex(): markdown → comandos LaTeX (\textbf{}, \textit{}, etc.)
 * 2. texEscape(): escapa caracteres especiales restantes (texto plano solamente)
 * 
 * Si cvBullets es proporcionado, usa esos strings directamente como items.
 */
function mdToItems(md: string, cvBullets?: string[]): string {
  // Si cvBullets está presente, úsalo directamente; si no, parsea el body markdown
  const lines = cvBullets 
    ? cvBullets // cvBullets ya es un array de strings
    : md.split("\n").map((l) => l.trim()).filter((l) => l.startsWith("*") || l.startsWith("-"));

  return lines
    .map((l) => {
      const text = l.replace(/^[\*\-]\s+/, "");
      const latex = mdToLatex(text);        // Primera pasada: markdown → LaTeX
      const escaped = texEscape(latex);     // Segunda pasada: escapar texto plano
      return `    \\item ${escaped}`;
    })
    .join("\n");
}

// ─── LaTeX Template ──────────────────────────────────────────────────────────

function generateTex(
  locale: string,
  data: import("../src/data/cv-data").CvData,
  contact: { name: string; title: string; location: string; phone: string; email: string; links: { label: string; url: string }[] },
  work: WorkEntry[],
  education: EducationEntry[],
  teaching: TeachingEntry[],
  allSkills: import("../src/data/cv-data").SkillCategory[],
  publications: import("../src/data/cv-publications").Publication[] | undefined,
  projectCategories: Record<string, import("../src/data/cv-data").ProjectSubcategory[]>,
): string {
  const skillsLatex = allSkills
    .map((cat) => {
      const itemTexts = cat.items.map((item) => {
        // Support both string[] and {es, en}[] formats
        const text = typeof item === "string" ? item : item[locale as "es" | "en"];
        return text;
      });
      return `    \\item ${texEscape(cat.category[locale as "es" | "en"])}: ${texEscape(itemTexts.join(", "))}`;
    })
    .join("\n");

  const workLatex = work
    .map((w) => {
      const dateRange = `${formatDate(w.dateStart, locale)}--${formatDate(w.dateEnd, locale)}`;
      const bullets = mdToItems(w.body, w.cvBullets);
      return `\\subsection{${texEscape(w.role)} | ${texEscape(w.company)}}
\\textit{${texEscape(dateRange)}}
\\begin{itemize}
${bullets}
\\end{itemize}`;
    })
    .join("\n\n");

  const educationLatex = education
    .map((e) => {
      const dateRange = `${formatDate(e.dateStart, locale)}--${formatDate(e.dateEnd, locale)}`;
      const bullets = mdToItems(e.body, e.cvBullets);
      return `\\subsection{${texEscape(e.degree)} | ${texEscape(e.institution)}}
\\textit{${texEscape(dateRange)}}
\\begin{itemize}
${bullets}
\\end{itemize}`;
    })
    .join("\n\n");

  // Render Teaching section
  const teachingLatex = teaching
    .map((t) => {
      const dateRange = `${formatDate(t.dateStart, locale)}--${t.dateEnd ? formatDate(t.dateEnd, locale) : (locale === "es" ? "Actualidad" : "Present")}`;
      const bullets = mdToItems(t.title, t.cvBullets);
      return `\\subsection{${texEscape(t.role)} | ${texEscape(t.institution)}}
\\textit{${texEscape(dateRange)}}
\\begin{itemize}
${bullets}
\\end{itemize}`;
    })
    .join("\n\n");

// Render Projects section — narrative sub-categories from CV data
  const projSubs = Object.values(projectCategories)
    .flatMap((subs) => subs)
    .map((sub) => {
      const title = sub.title[locale as "es" | "en"];
      const dateStr = sub.dateRange ? ` (${sub.dateRange[locale as "es" | "en"]})` : "";
      const bullets = sub.bullets[locale as "es" | "en"]
        .map((b) => `    \\item ${texEscape(mdToLatex(b).replace(/^[\*\-]\s+/, ""))}`)
        .join("\n");
      return `\\subsection*{${texEscape(title)}${texEscape(dateStr)}}\n\\begin{itemize}\n${bullets}\n\\end{itemize}`;
    })
    .filter(Boolean)
    .join("\n\n");

  const linksLatex = contact.links
    .map((l: { label: string; url: string }) => `\\href{${l.url}}{${texEscape(l.label)}}`)
    .join(" | ");

  // Use longSummary for CV if available, otherwise fallback to summary
  const summaryText = data.longSummary || data.summary;

  // Publications section (if provided)
  let publicationsLatex = "";
  if (publications && publications.length > 0) {
    const pubItems = publications.map((pub) => {
      const title = texEscape(pub.title[locale as "es" | "en"]);
      const venue = pub.venue ? `, ${texEscape(pub.venue[locale as "es" | "en"])}` : "";
      const date = pub.date ? ` (${pub.date})` : "";
      const typeLabel = pub.type === "publication" 
        ? (locale === "es" ? "Publicación" : "Publication")
        : pub.type === "certification"
        ? (locale === "es" ? "Certificación" : "Certification")
        : "";
      return `    \\item ${title}${venue}${date}${typeLabel ? ` — ${typeLabel}` : ""}`;
    }).join("\n");
    
    const sectionTitle = locale === "es" ? "PUBLICACIONES / OTROS" : "PUBLICATIONS / OTHER";
    publicationsLatex = `
\\section{${sectionTitle}}
\\begin{itemize}
${pubItems}
\\end{itemize}`;
  }

  return `\\documentclass[10pt]{article}
\\usepackage[left=0.75in,top=0.75in,right=0.75in,bottom=0.75in]{geometry}
\\usepackage{enumitem}
\\usepackage{hyperref}
\\usepackage{xcolor}
\\usepackage{titlesec}
\\usepackage[T1]{fontenc}
\\usepackage[utf8]{inputenc}

\\definecolor{darkblue}{RGB}{0,51,102}
\\hypersetup{colorlinks=true,linkcolor=darkblue,filecolor=darkblue,urlcolor=darkblue}
\\titleformat{\\section}{\\large\\bfseries\\color{darkblue}}{}{0em}{}[\\titlerule]
\\titlespacing{\\section}{0pt}{12pt}{6pt}
\\setitemize[itemsep=2pt,parsep=0pt]

\\begin{document}
\\begin{center}
{\\LARGE\\bfseries ${texEscape(contact.name)}}\\\\
${texEscape(contact.location)} | ${texEscape(contact.phone)} | \\href{mailto:${contact.email}}{${texEscape(contact.email)}}\\\\
${linksLatex}
\\end{center}

\\section{${texEscape(data.sectionTitles.summary)}}
${texEscape(summaryText)}

\\section{${texEscape(data.sectionTitles.skills)}}
\\begin{itemize}
${skillsLatex}
\\end{itemize}

\\section{${texEscape(data.sectionTitles.experience)}}
${workLatex}

${teaching.length > 0 ? `\\section{${texEscape(data.sectionTitles.teaching || (locale === "es" ? "ACTIVIDAD DOCENTE" : "TEACHING EXPERIENCE"))}}\n${teachingLatex}\n\n` : ""}\\section{${texEscape(data.sectionTitles.education)}}
${educationLatex}

${projSubs ? `\\section{${texEscape(data.sectionTitles.projects || (locale === "es" ? "PROYECTOS INDEPENDIENTES Y FREELANCE" : "INDEPENDENT PROJECTS & FREELANCE"))}}\n${projSubs}\n\n` : ""}\\section{${texEscape(data.sectionTitles.languages)}}
${texEscape(data.languages)}
${publicationsLatex}

\\end{document}
`;
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const texOnly = process.argv.includes("--tex-only");

  // Import CV data dynamically
  const { CV_DATA, BASE_SKILLS, getCvContact } = await import("../src/data/cv-data");
  const { CV_PUBLICATIONS } = await import("../src/data/cv-publications");
  const { CV_PROJECTS } = await import("../src/data/cv-data");
  const { SITE, SOCIALS } = await import("../src/consts");
  const locales: Array<"es" | "en"> = ["es", "en"];

  const outputFiles: string[] = [];

  for (const locale of locales) {
    const data = CV_DATA[locale];
    const contact = getCvContact(locale);
    const work = loadWork(locale);
    const education = loadEducation(locale);
    const teaching = loadTeaching(locale);
    const projects = loadProjects(locale);
    const projectSkills = extractProjectSkills(locale);
    const publications = CV_PUBLICATIONS[locale];

    // Skills only from BASE_SKILLS (no project skills row — projects have their own section)
    const allSkills = [...BASE_SKILLS];

    const tex = generateTex(locale, data, contact, work, education, teaching, allSkills, publications, CV_PROJECTS);

    // Ensure output directory exists
    fs.mkdirSync(TEX_OUT_DIR, { recursive: true });

    const texPath = path.join(TEX_OUT_DIR, `cv-${locale}.tex`);
    fs.writeFileSync(texPath, tex, "utf-8");
    console.log(`✅ Generated: ${texPath}`);

    if (!texOnly) {
      const pdfPath = compileTex(texPath);
      if (pdfPath) {
        // Copy to public/
        const targetName = `cv-eduardo-gonzalez-${locale}.pdf`;
        const targetPath = path.join(CV_OUT_DIR, targetName);
        fs.copyFileSync(pdfPath, targetPath);
        console.log(`✅ Copied to: ${targetPath}`);
        outputFiles.push(targetPath);
      }
    }
  }

  if (!texOnly && outputFiles.length > 0) {
    console.log(`\n🎉 CV generation complete: ${outputFiles.join(", ")}`);
  } else if (texOnly) {
    console.log(`\n✅ .tex files generated in ${TEX_OUT_DIR}/`);
  } else {
    console.log(`\n⚠️  .tex files generated but PDF compilation failed. Install pdflatex to compile.`);
  }
}

function compileTex(texPath: string): string | null {
  try {
    const outDir = path.dirname(texPath);
    const texFile = path.basename(texPath);

    // Run pdflatex twice for cross-references
    for (let i = 0; i < 2; i++) {
      execSync(`pdflatex -interaction=nonstopmode -output-directory="${outDir}" "${texFile}"`, {
        cwd: outDir,
        stdio: "pipe",
        timeout: 60000,
      });
    }

    const pdfPath = texPath.replace(".tex", ".pdf");
    if (fs.existsSync(pdfPath)) {
      console.log(`✅ Compiled: ${pdfPath}`);
      return pdfPath;
    }
    return null;
  } catch (err) {
    const error = err as Error & { stderr?: string };
    // pdflatex may exit with code 1 but still produce PDF on non-fatal errors
    const pdfPath = texPath.replace(".tex", ".pdf");
    if (fs.existsSync(pdfPath)) {
      console.log(`⚠️  Compiled with warnings: ${pdfPath}`);
      return pdfPath;
    }
    console.warn(`❌ pdflatex compilation failed: ${error.message}`);
    return null;
  }
}

main().catch(console.error);