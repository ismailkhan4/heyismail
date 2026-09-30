"use client";

import { LOCALE_COOKIE, locales, type Locale } from "@/lib/i18n/config";

const NAMES: Record<Locale, string> = { en: "English", de: "Deutsch", it: "Italiano" };

/** Remember an explicit language choice. It overrides browser and location hints. */
export function rememberLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

interface LanguageSwitcherProps {
  current: Locale;
  /** Path of this page in each language it exists in. */
  paths: Partial<Record<Locale, string>>;
  label: string;
  className?: string;
}

export default function LanguageSwitcher({ current, paths, label, className }: LanguageSwitcherProps) {
  return (
    <nav aria-label={label} className={className}>
      <ul className="flex items-center gap-1">
        {locales.map((locale) => {
          const href = paths[locale];
          if (!href) return null;
          const isCurrent = locale === current;
          return (
            <li key={locale}>
              <a
                href={href}
                hrefLang={locale}
                lang={locale}
                aria-current={isCurrent ? "page" : undefined}
                onClick={() => rememberLocale(locale)}
                className={`inline-flex h-8 min-w-8 items-center justify-center rounded-md px-2 font-body text-xs font-semibold tracking-wide transition-colors ${
                  isCurrent ? "bg-dark/8 text-dark" : "text-dark/60 hover:bg-dark/5 hover:text-dark"
                }`}
              >
                {locale.toUpperCase()}
                <span className="sr-only">, {NAMES[locale]}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
