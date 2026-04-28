import { describe, it, expect } from "vitest";
import { BASE_SKILLS, getCvContact, CV_DATA } from "@data/cv-data";

describe("getCvContact", () => {
  it("returns Spanish contact data", () => {
    const contact = getCvContact("es");
    expect(contact.name).toBe("Luis Eduardo González González");
    expect(contact.location).toBe("Ciudad de México");
    expect(contact.phone).toContain("+52");
    expect(contact.links[0].label).toBe("Portafolio");
  });

  it("returns English contact data", () => {
    const contact = getCvContact("en");
    expect(contact.name).toBe("Luis Eduardo González González");
    expect(contact.location).toBe("Mexico City");
    expect(contact.links[0].label).toBe("Portfolio");
  });

  it("always includes email from SITE constant", () => {
    const contact = getCvContact("es");
    expect(contact.email).toBeDefined();
    expect(contact.email).toContain("@");
  });
});

describe("BASE_SKILLS", () => {
  it("has 12 skill categories", () => {
    expect(BASE_SKILLS).toHaveLength(12);
  });

  it("every category has bilingual labels", () => {
    for (const cat of BASE_SKILLS) {
      expect(cat.category).toHaveProperty("es");
      expect(cat.category).toHaveProperty("en");
      expect(cat.category.es.length).toBeGreaterThan(0);
      expect(cat.category.en.length).toBeGreaterThan(0);
    }
  });

  it("every item is either string or bilingual object", () => {
    for (const cat of BASE_SKILLS) {
      for (const item of cat.items) {
        if (typeof item === "string") {
          expect(item.length).toBeGreaterThan(0);
        } else {
          expect(item).toHaveProperty("es");
          expect(item).toHaveProperty("en");
        }
      }
    }
  });
});

describe("CV_DATA", () => {
  it("has both es and en locales", () => {
    expect(CV_DATA).toHaveProperty("es");
    expect(CV_DATA).toHaveProperty("en");
  });

  it("both locales have all required section titles", () => {
    for (const lang of ["es", "en"] as const) {
      const data = CV_DATA[lang];
      expect(data.sectionTitles).toHaveProperty("summary");
      expect(data.sectionTitles).toHaveProperty("experience");
      expect(data.sectionTitles).toHaveProperty("skills");
      expect(data.sectionTitles).toHaveProperty("education");
      expect(data.sectionTitles).toHaveProperty("languages");
    }
  });

  it("both locales have a non-empty summary", () => {
    expect(CV_DATA.es.summary.length).toBeGreaterThan(0);
    expect(CV_DATA.en.summary.length).toBeGreaterThan(0);
  });
});