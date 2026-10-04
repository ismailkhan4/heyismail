"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { LOCALE_COOKIE, SUGGEST_COOKIE, isLocale, type Locale } from "@/lib/i18n/config";
import { rememberLocale } from "./LanguageSwitcher";

// Written in the suggested language, since that's the language the visitor reads.
const COPY: Record<Locale, { text: string; action: string; dismiss: string }> = {
  en: { text: "This page is also available in English.", action: "Read in English", dismiss: "Dismiss" },
  de: { text: "Diese Seite gibt es auch auf Deutsch.", action: "Auf Deutsch lesen", dismiss: "Hinweis schließen" },
  it: { text: "Questa pagina è disponibile anche in italiano.", action: "Leggi in italiano", dismiss: "Chiudi" },
};

function readCookie(name: string): string | undefined {
  return document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${name}=`))
    ?.split("=")[1];
}

interface LanguageSuggestionProps {
  current: Locale;
  /** Path of this page in each available language. */
  paths: Partial<Record<Locale, string>>;
}

/**
 * Offers the visitor's likely language (from their location, set by the
 * middleware) without switching it. Hidden once they've made any choice.
 */
export default function LanguageSuggestion({ current, paths }: LanguageSuggestionProps) {
  const [suggested, setSuggested] = useState<Locale | null>(null);

  useEffect(() => {
    if (isLocale(readCookie(LOCALE_COOKIE))) return;
    const hint = readCookie(SUGGEST_COOKIE);
    if (isLocale(hint) && hint !== current && paths[hint]) setSuggested(hint);
  }, [current, paths]);

  if (!suggested) return null;
  const copy = COPY[suggested];

  return (
    <aside
      lang={suggested}
      aria-label={copy.text}
      className="fixed inset-x-4 bottom-4 z-50 flex items-center gap-3 rounded-xl bg-night p-3 pl-4 text-on-night shadow-lg sm:inset-x-auto sm:left-4 sm:max-w-md"
    >
      <p className="flex-1 text-sm">{copy.text}</p>
      <a
        href={paths[suggested]}
        hrefLang={suggested}
        onClick={() => rememberLocale(suggested)}
        className="whitespace-nowrap rounded-lg bg-brand px-3 py-2 text-sm font-semibold text-ink hover:bg-brand-hover"
      >
        {copy.action}
      </a>
      <button
        type="button"
        aria-label={copy.dismiss}
        onClick={() => {
          rememberLocale(current);
          setSuggested(null);
        }}
        className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg text-on-night-2 hover:bg-white/10 hover:text-on-night"
      >
        <X size={18} aria-hidden="true" />
      </button>
    </aside>
  );
}
