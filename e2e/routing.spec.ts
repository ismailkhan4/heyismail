import { expect, test } from "@playwright/test";

// Language detection happens in middleware, so these run as plain HTTP
// requests with a regular (non-bot) browser user agent.
const BROWSER = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36";
const GOOGLEBOT = "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";

test.describe.configure({ mode: "parallel" });

async function visitRoot(request: import("@playwright/test").APIRequestContext, headers: Record<string, string>) {
  const res = await request.get("/", { headers: { "user-agent": BROWSER, ...headers }, maxRedirects: 0 });
  // headers() omits cookie headers; headersArray() has them.
  const cookies = res.headersArray().filter((h) => h.name.toLowerCase() === "set-cookie").map((h) => h.value).join("\n");
  return { status: res.status(), location: res.headers()["location"] ?? null, cookies };
}

test.describe("language resolution on /", () => {
  const cases: [string, Record<string, string>, string | null][] = [
    ["German browser → /de", { "accept-language": "de-DE,de;q=0.9,en;q=0.8" }, "/de"],
    ["Austrian German browser → /de", { "accept-language": "de-AT" }, "/de"],
    ["Swiss German browser → /de", { "accept-language": "de-CH,fr;q=0.8" }, "/de"],
    ["Italian browser → /it", { "accept-language": "it-IT,it;q=0.9" }, "/it"],
    ["English browser in Germany stays English", { "accept-language": "en-US", "x-vercel-ip-country": "DE" }, null],
    ["Visitor in Pakistan stays English", { "accept-language": "en-PK,ur;q=0.8", "x-vercel-ip-country": "PK" }, null],
    ["Visitor in the US stays English", { "accept-language": "en-US", "x-vercel-ip-country": "US" }, null],
    ["Explicit English choice beats German browser", { "accept-language": "de-DE", cookie: "hi_locale=en" }, null],
    ["Explicit Italian choice beats English browser", { "accept-language": "en-US", cookie: "hi_locale=it" }, "/it"],
    ["Clicking 'EN' from /de is not bounced back", { "accept-language": "de-DE", referer: "http://localhost:3100/de" }, null],
  ];

  for (const [name, headers, expected] of cases) {
    test(name, async ({ request }) => {
      const { status, location } = await visitRoot(request, headers);
      if (expected) {
        expect(status).toBe(307);
        expect(new URL(location!, "http://x").pathname).toBe(expected);
      } else {
        expect(status).toBe(200);
      }
    });
  }

  test("crawlers are never redirected", async ({ request }) => {
    const res = await request.get("/", {
      headers: { "user-agent": GOOGLEBOT, "accept-language": "de-DE", cookie: "hi_locale=de" },
      maxRedirects: 0,
    });
    expect(res.status()).toBe(200);
  });

  test("location only produces a suggestion cookie", async ({ playwright, baseURL }) => {
    const cases: [string, string | null][] = [["DE", "de"], ["AT", "de"], ["IT", "it"], ["PK", null], ["US", null]];
    for (const [country, locale] of cases) {
      // Fresh context per case so no cookie from a previous case is sent.
      const request = await playwright.request.newContext({ baseURL });
      const { status, cookies } = await visitRoot(request, { "accept-language": "en", "x-vercel-ip-country": country });
      expect(status).toBe(200);
      if (locale) expect(cookies).toContain(`hi_suggest=${locale}`);
      else expect(cookies).not.toContain("hi_suggest");
      await request.dispose();
    }
  });
});

test.describe("URLs", () => {
  for (const path of ["/", "/de", "/it", "/robots.txt", "/sitemap.xml", "/og/en", "/og/de", "/og/it"]) {
    test(`${path} is directly reachable`, async ({ request }) => {
      const res = await request.get(path, { headers: { "user-agent": BROWSER }, maxRedirects: 0 });
      expect(res.status()).toBe(200);
    });
  }

  test("/de and /it never redirect, whatever the browser language", async ({ request }) => {
    for (const path of ["/de", "/it"]) {
      for (const lang of ["en-US", "de-DE", "it-IT"]) {
        const res = await request.get(path, { headers: { "user-agent": BROWSER, "accept-language": lang }, maxRedirects: 0 });
        expect(res.status()).toBe(200);
      }
    }
  });

  test("/en paths redirect permanently to the unprefixed URL", async ({ request }) => {
    for (const [from, to] of [["/en", "/"], ["/en/some-page", "/some-page"]]) {
      const res = await request.get(from, { maxRedirects: 0 });
      expect(res.status()).toBe(308);
      expect(new URL(res.headers()["location"], "http://x").pathname).toBe(to);
    }
  });

  for (const path of ["/does-not-exist", "/de/does-not-exist", "/fr", "/projects/climaflow", "/it/projects/climaflow"]) {
    test(`${path} is a 404`, async ({ request }) => {
      const res = await request.get(path, { maxRedirects: 0 });
      expect(res.status()).toBe(404);
    });
  }
});
