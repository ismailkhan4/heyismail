"use client";

import { LOCALE_COOKIE, locales, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

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
  /** "night" for the dark footer. */
  tone?: "light" | "night";
}

export default function LanguageSwitcher({ current, paths, label, tone = "light" }: LanguageSwitcherProps) {
  const night = tone === "night";

  return (
    <nav aria-label={label}>
      <ul className="flex items-center gap-0.5">
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
                className={cn(
                  "inline-flex size-10 items-center justify-center rounded-md text-xs font-semibold tracking-wide transition-colors duration-150",
                  night
                    ? isCurrent
                      ? "bg-white/10 text-on-night"
                      : "text-on-night-2 hover:bg-white/5 hover:text-on-night"
                    : isCurrent
                      ? "bg-sunken text-ink"
                      : "text-ink-3 hover:bg-sunken hover:text-ink"
                )}
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
