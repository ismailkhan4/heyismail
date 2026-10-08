import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
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

// Continues the dark contact band, so the page ends in one block.
export default function Footer({ locale, dict, homeHref, languagePaths }: FooterProps) {
  return (
    <footer className="bg-night text-on-night-2">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-line-night px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <a href={homeHref} aria-label={dict.nav.home} className="self-start rounded-sm text-on-night">
            <Wordmark />
          </a>
          <p className="text-sm">{dict.footer.tagline}</p>
          <p className="text-sm">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-1">
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="me noopener"
                aria-label="GitHub"
                className="inline-flex size-10 items-center justify-center rounded-md hover:bg-white/5 hover:text-on-night"
              >
                <Github size={20} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="me noopener"
                aria-label="LinkedIn"
                className="inline-flex size-10 items-center justify-center rounded-md hover:bg-white/5 hover:text-on-night"
              >
                <Linkedin size={20} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={profile.instagram}
                target="_blank"
                rel="me noopener"
                aria-label={dict.footer.instagramLabel}
                className="inline-flex size-10 items-center justify-center rounded-md hover:bg-white/5 hover:text-on-night"
              >
                <Instagram size={20} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={profile.facebook}
                target="_blank"
                rel="me noopener"
                aria-label={dict.footer.facebookLabel}
                className="inline-flex size-10 items-center justify-center rounded-md hover:bg-white/5 hover:text-on-night"
              >
                <Facebook size={20} aria-hidden="true" />
              </a>
            </li>
          </ul>
          <LanguageSwitcher current={locale} paths={languagePaths} label={dict.footer.languagesLabel} tone="night" />
        </div>
      </div>
    </footer>
  );
}
