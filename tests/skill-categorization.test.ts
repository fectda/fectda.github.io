import { describe, it, expect } from "vitest";
import { categorizeSkills, SKILL_CATEGORIES } from "@data/skill-categories";

describe("categorizeSkills", () => {
  it("categorizes Python as Programming Languages", () => {
    const result = categorizeSkills(["Python"]);
    const cat = result.find((c) => c.category.en === "Programming Languages");
    expect(cat).toBeDefined();
    expect(cat!.items).toContain("Python");
  });

  it("categorizes ESPHome as IoT & Home Automation", () => {
    const result = categorizeSkills(["ESPHome", "Home Assistant"]);
    const cat = result.find((c) => c.category.en === "IoT & Home Automation");
    expect(cat).toBeDefined();
    expect(cat!.items).toContain("ESPHome");
    expect(cat!.items).toContain("Home Assistant");
  });

  it("categorizes FreeCAD as 3D Design & Prototyping", () => {
    const result = categorizeSkills(["FreeCAD", "SketchUp"]);
    const cat = result.find((c) => c.category.en === "3D Design & Prototyping");
    expect(cat).toBeDefined();
    expect(cat!.items).toContain("FreeCAD");
    expect(cat!.items).toContain("SketchUp");
  });

  it("categorizes Ollama as AI Engineering", () => {
    const result = categorizeSkills(["Ollama", "ComfyUI"]);
    const cat = result.find((c) => c.category.en === "AI Engineering & LLM Orchestration");
    expect(cat).toBeDefined();
  });

  it("categorizes Docker as DevOps & Cloud", () => {
    const result = categorizeSkills(["Docker", "Kubernetes"]);
    const cat = result.find((c) => c.category.en === "DevOps & Cloud");
    expect(cat).toBeDefined();
  });

  it("categorizes carpintería as Trade & Construction", () => {
    const result = categorizeSkills(["Carpintería", "Herrería"]);
    const cat = result.find((c) => c.category.en === "Trade & Construction");
    expect(cat).toBeDefined();
  });

  it("puts unmatched skills in Others", () => {
    const result = categorizeSkills(["some-unknown-tool-xyz"]);
    const others = result.find((c) => c.category.en === "Others");
    expect(others).toBeDefined();
    expect(others!.items).toContain("some-unknown-tool-xyz");
  });

  it("sorts items within each category alphabetically", () => {
    const result = categorizeSkills(["z-Docker", "a-Python", "m-ESPHome"]);

    // Each category has its items sorted
    const progLang = result.find((c) => c.category.en === "Programming Languages");
    const devops = result.find((c) => c.category.en === "DevOps & Cloud");
    const iot = result.find((c) => c.category.en === "IoT & Home Automation");

    expect(progLang!.items).toEqual(["a-Python"]);
    expect(devops!.items).toEqual(["z-Docker"]);
    expect(iot!.items).toEqual(["m-ESPHome"]);
  });

  it("handles mixed known and unknown skills", () => {
    const result = categorizeSkills(["Python", "ESPHome", "unknown-skill-123"]);
    const progLang = result.find((c) => c.category.en === "Programming Languages");
    const iot = result.find((c) => c.category.en === "IoT & Home Automation");
    const others = result.find((c) => c.category.en === "Others");

    expect(progLang!.items).toContain("Python");
    expect(iot!.items).toContain("ESPHome");
    expect(others!.items).toContain("unknown-skill-123");
  });

  it("places C as Programming Languages (not as substring of FreeCAD)", () => {
    const result = categorizeSkills(["C", "C++", "FreeCAD"]);
    const progLang = result.find((c) => c.category.en === "Programming Languages");
    const design3d = result.find((c) => c.category.en === "3D Design & Prototyping");
    const others = result.find((c) => c.category.en === "Others");

    expect(progLang!.items).toContain("C");
    expect(progLang!.items).toContain("C++");
    expect(design3d!.items).toContain("FreeCAD");
    expect(others).toBeUndefined();
  });

  it("places 'golang' in Others (2-char 'go' keyword needs word boundary)", () => {
    // golang shouldn't match "go" (2-char keyword, needs exact word boundary)
    // and doesn't match any other keyword → goes to Others
    const result = categorizeSkills(["golang"]);
    const others = result.find((c) => c.category.en === "Others");
    expect(others).toBeDefined();
    expect(others!.items).toContain("golang");
  });

  it("handles empty array", () => {
    const result = categorizeSkills([]);
    expect(result).toEqual([]);
  });

  it("categorizes Arduino as Physical Computing & Electronics", () => {
    const result = categorizeSkills(["Arduino"]);
    expect(result.length).toBe(1);
    const cat = result[0];
    expect(cat.category.en).toBe("Physical Computing & Electronics");
  });
});

describe("SKILL_CATEGORIES", () => {
  it("has all required domains from exploration", () => {
    const domainEnSet = new Set(SKILL_CATEGORIES.map((d) => d.domain.en));

    expect(domainEnSet.has("IoT & Home Automation")).toBe(true);
    expect(domainEnSet.has("3D Design & Prototyping")).toBe(true);
    expect(domainEnSet.has("AI Engineering & LLM Orchestration")).toBe(true);
    expect(domainEnSet.has("Trade & Construction")).toBe(true);
    expect(domainEnSet.has("PC Hardware & Modding")).toBe(true);
  });

  it("has bilingual labels for all domains", () => {
    for (const domain of SKILL_CATEGORIES) {
      expect(domain.domain.es.length).toBeGreaterThan(0);
      expect(domain.domain.en.length).toBeGreaterThan(0);
    }
  });

  it("each domain has at least one keyword", () => {
    for (const domain of SKILL_CATEGORIES) {
      expect(domain.keywords.length).toBeGreaterThan(0);
    }
  });
});