import { defaultLocale, isLocale, type Locale } from "./config";

// Language resolution for visitors who land on "/" (English).
//
// Policy, strongest signal first:
//   1. An explicit choice (cookie) always wins.
//   2. The browser's *top* language redirects: someone whose browser asks for
//      German first gets /de. This is what they read, not a guess.
//   3. Location alone never redirects. A visitor in Germany with an English
//      browser stays on English and only sees a small "also in German" banner.
//      Many recruiters in Germany work in English; guessing wrong costs more
//      than one click.
//
// Crawlers, internal navigation and every URL other than "/" are never
// redirected, so /de and /it are always directly reachable and there are no loops.

const BOT_PATTERN =
  /bot|crawl|spider|slurp|facebookexternalhit|embedly|preview|lighthouse|headless|validator|linkedin|whatsapp|telegram/i;

export function isBot(userAgent: string | null | undefined): boolean {
  return !userAgent || BOT_PATTERN.test(userAgent);
}

/** Primary language subtag of the highest-weighted Accept-Language entry. */
export function primaryLanguage(acceptLanguage: string | null | undefined): string | null {
  if (!acceptLanguage) return null;
  let best: { lang: string; q: number } | null = null;
  for (const part of acceptLanguage.split(",")) {
    const [tag, ...params] = part.trim().split(";");
    if (!tag || tag === "*") continue;
    const qParam = params.find((p) => p.trim().startsWith("q="));
    const q = qParam ? Number.parseFloat(qParam.trim().slice(2)) : 1;
    if (Number.isNaN(q) || q <= 0) continue;
    if (!best || q > best.q) best = { lang: tag.toLowerCase().split("-")[0], q };
  }
  return best?.lang ?? null;
}

function acceptsLanguage(acceptLanguage: string | null | undefined, lang: string): boolean {
  return !!acceptLanguage && new RegExp(`(^|,)\\s*${lang}(-|;|,|$)`, "i").test(acceptLanguage);
}

/** Locale suggested by the visitor's country, or null if English is the right default. */
export function localeForCountry(
  country: string | null | undefined,
  acceptLanguage?: string | null
): Locale | null {
  switch (country?.toUpperCase()) {
    case "DE":
    case "AT":
    case "LI":
      return "de";
    case "IT":
    case "SM":
    case "VA":
      return "it";
    case "CH":
      // Switzerland is multilingual: only suggest a language the browser accepts.
      if (acceptsLanguage(acceptLanguage, "de")) return "de";
      if (acceptsLanguage(acceptLanguage, "it")) return "it";
      return null;
    default:
      return null;
  }
}

export interface RootVisit {
  cookieLocale?: string;
  acceptLanguage?: string | null;
  userAgent?: string | null;
  /** True when the visitor came from another page on this site. */
  internalReferer?: boolean;
}

/** Where a visit to "/" should be redirected, or null to serve English. */
export function redirectLocaleForRoot(visit: RootVisit): Locale | null {
  if (isBot(visit.userAgent)) return null;
  if (isLocale(visit.cookieLocale)) {
    return visit.cookieLocale === defaultLocale ? null : visit.cookieLocale;
  }
  if (visit.internalReferer) return null;
  const lang = primaryLanguage(visit.acceptLanguage);
  return lang === "de" || lang === "it" ? lang : null;
}
