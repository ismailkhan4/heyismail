"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { en } from "./en";
import { it } from "./it";
import type { Dictionary } from "./en";

// ── Types ────────────────────────────────────────────────────────────────────

export type Lang = "en" | "it";

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
}

// ── Context ──────────────────────────────────────────────────────────────────

const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  t: en,
});

// ── Provider ─────────────────────────────────────────────────────────────────

const STORAGE_KEY = "heyismail_lang";
const DICTIONARIES: Record<Lang, Dictionary> = { en, it };

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Restore persisted preference on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === "en" || stored === "it") setLangState(stored);
    } catch {
      // localStorage unavailable (SSR or private mode) — default to "en"
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang, t: DICTIONARIES[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

// ── Hook ─────────────────────────────────────────────────────────────────────

export function useTranslation(): LangContextValue {
  return useContext(LangContext);
}
