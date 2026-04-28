import { describe, it, expect } from "vitest";
import { cn, formatDate, dateRange } from "@lib/utils";

describe("cn", () => {
  it("merges class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("handles conditional classes", () => {
    expect(cn("base", false && "hidden", "active")).toBe("base active");
  });

  it("deduplicates tailwind classes", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });
});

describe("formatDate", () => {
  it("formats a date in English", () => {
    const result = formatDate(new Date("2024-01-15"));
    expect(result).toContain("Jan");
    expect(result).toContain("2024");
  });
});

describe("dateRange", () => {
  it("formats a range with end date in Spanish", () => {
    const result = dateRange(new Date("2023-01-01"), new Date("2024-06-15"), "es");
    expect(result).toContain("2023");
    expect(result).toContain("2024");
  });

  it("formats a range with end date in English", () => {
    const result = dateRange(new Date("2023-01-01"), new Date("2024-06-15"), "en");
    expect(result).toContain("2023");
    expect(result).toContain("2024");
  });

  it("formats open-ended range (present) with string endDate", () => {
    const result = dateRange(new Date("2023-01-01"), "present", "es");
    expect(result).toContain("Actualidad");
  });

  it("formats open-ended range (present) in English", () => {
    const result = dateRange(new Date("2023-01-01"), "present", "en");
    expect(result).toContain("Present");
  });

  it("handles UTC offset correctly (dates don't shift day)", () => {
    // Jan 1 midnight UTC should still show January, not December
    const result = dateRange(new Date("2024-01-01"), new Date("2024-12-31"), "en");
    expect(result).toContain("Jan");
    expect(result).toContain("Dec");
  });
});