import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = ((wordCount / 200) + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export function dateRange(startDate: Date, endDate?: Date | string, locale: string = 'es'): string {
  const localeCode = locale === 'es' ? 'es-MX' : 'en-US';
  const timeZone = 'America/Mexico_City';

  // Adjust dates to avoid UTC offset issues (add 12 hours to ensure correct day)
  const adjustedStart = new Date(startDate.getTime() + 12 * 60 * 60 * 1000);

  const startMonth = adjustedStart.toLocaleString(localeCode, { month: "short", timeZone });
  const startYear = adjustedStart.toLocaleString(localeCode, { year: "numeric", timeZone });
  let endMonth = "";
  let endYear = "";

  if (endDate) {
    if (typeof endDate === "string") {
      endMonth = "";
      endYear = locale === 'es' ? 'Actualidad' : 'Present';
    } else {
      const adjustedEnd = new Date(endDate.getTime() + 12 * 60 * 60 * 1000);
      endMonth = adjustedEnd.toLocaleString(localeCode, { month: "short", timeZone });
      endYear = adjustedEnd.toLocaleString(localeCode, { year: "numeric", timeZone });
    }
  }

  return `${startMonth} ${startYear} - ${endMonth} ${endYear}`.trim();
}