export const SITE_URL = "https://www.heyismail.com";

export const locales = ["en", "de", "it"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** Cookie holding an explicit language choice. Explicit choice always wins. */
export const LOCALE_COOKIE = "hi_locale";
/** Cookie holding the middleware's geo-based suggestion, read by the banner. */
export const SUGGEST_COOKIE = "hi_suggest";

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/**
 * Public path for a page in a locale. English lives at the root, so
 * localePath("en", "/projects/x") → "/projects/x" and localePath("de") → "/de".
 */
export function localePath(locale: Locale, path = "/"): string {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** hreflang map for a page that exists in the given locales (x-default → English). */
export function languageAlternates(path: string, available: readonly Locale[] = locales) {
  const languages: Record<string, string> = {};
  for (const locale of available) languages[locale] = `${SITE_URL}${localePath(locale, path)}`;
  languages["x-default"] = `${SITE_URL}${localePath(defaultLocale, path)}`;
  return languages;
}

export const ogLocale: Record<Locale, string> = {
  en: "en_US",
  de: "de_DE",
  it: "it_IT",
};
