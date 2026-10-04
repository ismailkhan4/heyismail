import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/en";
import Wordmark from "@/components/ui/Wordmark";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
  /** Localized homepage path; nav links point to its sections. */
  homeHref: string;
  /** Path of the current page in each available language. */
  languagePaths: Partial<Record<Locale, string>>;
}

// Four links fit on a phone, so the navigation is always visible: no menu to open.
// Phones: wordmark and languages on one row, links on the next; the header scrolls away.
// Large screens: one sticky row.
export default function Header({ locale, dict, homeHref, languagePaths }: HeaderProps) {
  const t = dict.nav;
  const links = [
    { href: `${homeHref}#work`, label: t.work },
    { href: `${homeHref}#skills`, label: t.skills },
    { href: `${homeHref}#about`, label: t.about },
    { href: `${homeHref}#contact`, label: t.contact },
  ];

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-canvas"
      >
        {dict.skipLink}
      </a>
      <header className="z-50 border-b border-line bg-canvas/95 backdrop-blur-sm lg:sticky lg:top-0">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 px-4 pt-3 sm:px-6 lg:h-16 lg:flex-nowrap lg:pt-0">
          <a href={homeHref} aria-label={t.home} className="rounded-sm">
            <Wordmark />
          </a>

          <nav aria-label={t.label} className="order-last -mx-2 w-full py-1.5 lg:order-none lg:mx-0 lg:ml-auto lg:w-auto lg:py-0">
            <ul className="flex items-center gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-10 items-center rounded-md px-2 text-[15px] font-medium text-ink-2 transition-colors duration-150 hover:bg-sunken hover:text-ink lg:px-3"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <LanguageSwitcher current={locale} paths={languagePaths} label={t.languageLabel} />
        </div>
      </header>
    </>
  );
}
