import { Github, Linkedin } from "lucide-react";
import Wordmark from "@/components/ui/Wordmark";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/en";
import { profile } from "@/lib/site";
import LanguageSwitcher from "./LanguageSwitcher";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
  homeHref: string;
  languagePaths: Partial<Record<Locale, string>>;
}

export default function Footer({ locale, dict, homeHref, languagePaths }: FooterProps) {
  const links = [
    { href: `${homeHref}#work`, label: dict.nav.work },
    { href: `${homeHref}#stack`, label: dict.nav.stack },
    { href: `${homeHref}#about`, label: dict.nav.about },
    { href: `${homeHref}#contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="border-t border-dark/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-2">
            <Wordmark className="text-dark" />
            <p className="font-body text-sm text-dark/70">{dict.footer.tagline}</p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="font-body text-sm text-dark/70 hover:text-dark">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-4">
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-dark/70 hover:text-dark">
                <Github size={20} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-dark/70 hover:text-dark">
                <Linkedin size={20} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 border-t border-dark/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-sm text-dark/70">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <LanguageSwitcher current={locale} paths={languagePaths} label={dict.footer.languagesLabel} />
        </div>
      </div>
    </footer>
  );
}
