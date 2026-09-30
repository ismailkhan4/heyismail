import { NextResponse, type NextRequest } from "next/server";
import { LOCALE_COOKIE, SUGGEST_COOKIE, defaultLocale, isLocale } from "@/lib/i18n/config";
import { localeForCountry, redirectLocaleForRoot } from "@/lib/i18n/negotiate";

// URL scheme: English at the root ("/", "/some/page"), German and
// Italian under "/de" and "/it". Internally every page lives under
// app/[locale], so unprefixed English URLs are rewritten to "/en/...".
// See lib/i18n/negotiate.ts for the language-detection policy.

const ONE_YEAR = 60 * 60 * 24 * 365;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];

  // "/en/..." would duplicate the root English pages: send it to the canonical URL.
  if (firstSegment === defaultLocale) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  let response: NextResponse;

  // Tell the 404 page which language to render (it gets no route params).
  const forwarded = new Headers(request.headers);
  forwarded.set("x-locale", isLocale(firstSegment) ? firstSegment : defaultLocale);

  if (isLocale(firstSegment)) {
    response = NextResponse.next({ request: { headers: forwarded } });
  } else {
    if (pathname === "/") {
      const target = redirectLocaleForRoot({
        cookieLocale,
        acceptLanguage: request.headers.get("accept-language"),
        userAgent: request.headers.get("user-agent"),
        internalReferer: isInternalReferer(request),
      });
      if (target) {
        const url = request.nextUrl.clone();
        url.pathname = `/${target}`;
        const redirect = NextResponse.redirect(url, 307);
        redirect.headers.set("Cache-Control", "private, no-store");
        redirect.headers.set("Vary", "Accept-Language, Cookie");
        return redirect;
      }
    }
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    response = NextResponse.rewrite(url, { request: { headers: forwarded } });
  }

  // Location is only a hint. Hand it to the client banner, which offers the
  // language without switching it. Skipped once the visitor has chosen.
  if (!isLocale(cookieLocale)) {
    const country =
      request.headers.get("cf-ipcountry") ?? request.headers.get("x-vercel-ip-country");
    const suggestion = localeForCountry(country, request.headers.get("accept-language"));
    if (suggestion && request.cookies.get(SUGGEST_COOKIE)?.value !== suggestion) {
      response.cookies.set(SUGGEST_COOKIE, suggestion, { path: "/", maxAge: ONE_YEAR, sameSite: "lax" });
    }
  }

  return response;
}

function isInternalReferer(request: NextRequest): boolean {
  const referer = request.headers.get("referer");
  if (!referer) return false;
  try {
    return new URL(referer).host === request.nextUrl.host;
  } catch {
    return false;
  }
}

export const config = {
  // Pages only: skip Next internals, API routes, OG images, metadata routes and files with an extension.
  matcher: ["/((?!_next|api|_vercel|og/|sitemap.xml|robots.txt|.*\\..*).*)"],
};
