import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/en";
import Button from "@/components/ui/LinkButton";
import Wordmark from "@/components/ui/Wordmark";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
  /** Localized homepage path; nav links point to its sections. */
  homeHref: string;
  /** Path of the current page in each available language. */
  languagePaths: Partial<Record<Locale, string>>;
}

export default function Header({ locale, dict, homeHref, languagePaths }: HeaderProps) {
  const t = dict.nav;
  const links = [
    { href: `${homeHref}#work`, label: t.work },
    { href: `${homeHref}#stack`, label: t.stack },
    { href: `${homeHref}#about`, label: t.about },
    { href: `${homeHref}#contact`, label: t.contact },
  ];
  const cta = { href: `${homeHref}#contact`, label: dict.hero.ctaPrimary };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-dark focus:px-4 focus:py-2 focus:text-light"
      >
        {dict.skipLink}
      </a>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-dark/10 bg-light/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 md:h-[72px] lg:px-8">
          <a href={homeHref} aria-label={t.home} className="text-dark">
            <Wordmark />
          </a>

          <nav aria-label={t.label} className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-lg px-3 py-2 font-body text-sm font-medium text-dark/70 transition-colors hover:bg-dark/5 hover:text-dark"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 lg:gap-4">
            <LanguageSwitcher current={locale} paths={languagePaths} label={t.languageLabel} />
            <Button href={cta.href} size="sm" className="hidden lg:inline-flex">
              {cta.label}
            </Button>
            <MobileMenu
              links={links}
              cta={cta}
              navLabel={t.label}
              openLabel={t.menuOpen}
              closeLabel={t.menuClose}
            />
          </div>
        </div>
      </header>
    </>
  );
}
