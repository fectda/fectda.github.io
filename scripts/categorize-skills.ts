/**
 * CLI tool for skill categorization.
 *
 * Usage:
 *   npx tsx scripts/categorize-skills.ts           # categorizes all skills from all projects
 *   npx tsx scripts/categorize-skills.ts --check   # exits 1 if any skill is in "Others"
 *   npx tsx scripts/categorize-skills.ts --report  # shows categorized skills report
 */

import fg from "fast-glob";
import { readFile } from "fs/promises";
import { join, resolve } from "path";
import matter from "gray-matter";

// Load the categorization function
const { categorizeSkills } = await import("../src/data/skill-categories.ts");

const ARG = process.argv[2];

// ─── Collect all stacks from bits and atoms ───────────────────────────────

async function collectAllStacks(): Promise<string[]> {
  const root = resolve(process.cwd(), "src/content");
  const patterns = [
    join(root, "bits/**/*.md"),
    join(root, "atoms/**/*.md"),
  ];

  const stacks: string[] = [];

  for (const pattern of patterns) {
    const files = await fg(pattern, { nodir: true });
    for (const file of files) {
      const raw = await readFile(file, "utf-8");
      const { data } = matter(raw);
      if (data.stack && Array.isArray(data.stack)) {
        stacks.push(...data.stack);
      }
    }
  }

  return stacks;
}

// ─── Report mode ───────────────────────────────────────────────────────────

function printReport(skills: string[], categorized: ReturnType<typeof categorizeSkills>) {
  console.log("\n=== Skill Categorization Report ===\n");

  const othersCount = categorized
    .filter((cat) => cat.category.en === "Others")
    .reduce((sum, cat) => sum + cat.items.length, 0);

  console.log(`Total unique skills: ${skills.length}`);
  console.log(`Categories: ${categorized.length}`);
  console.log(`Uncategorized (Others): ${othersCount}\n`);

  for (const cat of categorized) {
    const label = `## ${cat.category.es} / ${cat.category.en}`;
    const count = cat.items.length === 1 ? "1 skill" : `${cat.items.length} skills`;
    console.log(label);
    console.log(cat.items.join(", "));
    console.log(`(${count})\n`);
  }

  if (othersCount > 0) {
    console.log("--- Skills NOT matched to any domain ---");
    const others = categorized.find((cat) => cat.category.en === "Others");
    if (others) {
      for (const skill of others.items) {
        console.log(`  - ${skill}`);
      }
    }
    console.log("\nTIP: Add keywords to SKILL_CATEGORIES in src/data/skill-categories.ts\n");
  }
}

// ─── Main ────────────────────────────────────────────────────────────────────

const allStacks = await collectAllStacks();
const uniqueSkills = [...new Set(allStacks)].sort();
const categorized = categorizeSkills(uniqueSkills);

if (ARG === "--check") {
  const othersCount = categorized
    .filter((cat) => cat.category.en === "Others")
    .reduce((sum, cat) => sum + cat.items.length, 0);

  if (othersCount > 0) {
    console.error(`❌ ${othersCount} skill(s) are in "Others" category — needs categorization`);
    console.error("\nUnmatched skills:");
    const others = categorized.find((cat) => cat.category.en === "Others");
    if (others) {
      for (const skill of others.items) {
        console.error(`  - ${skill}`);
      }
    }
    process.exit(1);
  } else {
    console.log(`✅ All ${uniqueSkills.length} skills are categorized`);
    process.exit(0);
  }
}

if (ARG === "--report") {
  printReport(uniqueSkills, categorized);
  process.exit(0);
}

// Default: JSON output
console.log(JSON.stringify(categorized, null, 2));
