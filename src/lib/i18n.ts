import { SITE, HOME, BITS, ATOMS, MIND, WORK, PROJECTS } from "@consts";

export const LANGUAGES = {
  en: "English",
  es: "Español",
};

export const DEFAULT_LOCALE = "es";

export const UI = {
  en: {
    ...SITE,
    ...HOME,
    ...BITS,
    ...ATOMS,
    ...MIND,
    ...WORK,
    ...PROJECTS,
  },
  es: {
    ...SITE,
    ...BITS,
    ...ATOMS,
    ...MIND,
    ...WORK,
    ...PROJECTS,

  },
} as const;

export type Locale = keyof typeof LANGUAGES;

export function getLocalizedPath(path: string, lang: Locale) {
  return `/${lang}${path}`;
}

export function t(lang: Locale, key: string): string {
  // @ts-ignore
  return UI[lang][key] || key;
}

export function getAlternateLanguage(lang: Locale): Locale {
  return lang === 'es' ? 'en' : 'es';
}

export function getAlternatePath(path: string, currentLang: Locale) {
  const alternateLang = getAlternateLanguage(currentLang);
  // basic swap logic, assuming path starts with /lang/
  if (path.startsWith(`/${currentLang}`)) {
    return path.replace(`/${currentLang}`, `/${alternateLang}`);
  }
  return `/${alternateLang}${path}`;
}


