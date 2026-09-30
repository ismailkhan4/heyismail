import "server-only";
import type { Locale } from "./config";
import { en, type Dictionary } from "./en";
import { de } from "./de";
import { it } from "./it";

// Server-only: pages render on the server, so dictionaries never ship to the browser.
const dictionaries: Record<Locale, Dictionary> = { en, de, it };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
