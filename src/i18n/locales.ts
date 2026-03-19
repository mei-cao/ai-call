export const locales = ['en', 'zh', 'ja', 'ko', 'es', 'fr', 'de', 'pt'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
  ko: '한국어',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  zh: '🇨🇳',
  ja: '🇯🇵',
  ko: '🇰🇷',
  es: '🇪🇸',
  fr: '🇫🇷',
  de: '🇩🇪',
  pt: '🇧🇷',
};

/** Return the URL prefix for a locale (empty string for default English) */
export function localePath(locale: Locale, path = ''): string {
  const base = locale === defaultLocale ? '' : `/${locale}`;
  return path ? `${base}${path}` : base || '/';
}

export const nonDefaultLocales = locales.filter((l) => l !== defaultLocale) as Exclude<Locale, 'en'>[];
