import { expect, test } from "@playwright/test";

const SITE = "https://www.heyismail.com";

const HOME = { en: "/", de: "/de", it: "/it", "x-default": "/" };
const CS = "/work/barrierefrei-studio";
const CASE_STUDY = { en: CS, de: `/de${CS}`, it: `/it${CS}`, "x-default": CS };

const pages = [
  { path: "/", lang: "en", canonical: SITE, hreflang: HOME },
  { path: "/de", lang: "de", canonical: `${SITE}/de`, hreflang: HOME },
  { path: "/it", lang: "it", canonical: `${SITE}/it`, hreflang: HOME },
  { path: CS, lang: "en", canonical: `${SITE}${CS}`, hreflang: CASE_STUDY },
  { path: `/de${CS}`, lang: "de", canonical: `${SITE}/de${CS}`, hreflang: CASE_STUDY },
  { path: `/it${CS}`, lang: "it", canonical: `${SITE}/it${CS}`, hreflang: CASE_STUDY },
];

for (const page of pages) {
  test(`${page.path}: lang, title, description, canonical, hreflang, Open Graph`, async ({ page: p, request }) => {
    await p.goto(page.path);

    await expect(p.locator("html")).toHaveAttribute("lang", page.lang);
    expect((await p.title()).length).toBeGreaterThan(20);
    const description = await p.locator('meta[name="description"]').getAttribute("content");
    expect(description!.length).toBeGreaterThan(70);
    expect(description!.length).toBeLessThanOrEqual(300);

    await expect(p.locator('link[rel="canonical"]')).toHaveAttribute("href", page.canonical);

    const alternates = await p.locator('link[rel="alternate"][hreflang]').evaluateAll((links) =>
      Object.fromEntries(links.map((l) => [l.getAttribute("hreflang"), new URL(l.getAttribute("href")!).pathname]))
    );
    expect(alternates).toEqual(page.hreflang);

    // The canonical must be one of the hreflang targets (no conflicting signals).
    expect(Object.values(alternates)).toContain(new URL(page.canonical).pathname);

    const ogImage = await p.locator('meta[property="og:image"]').getAttribute("content");
    const image = await request.get(new URL(ogImage!).pathname);
    expect(image.status()).toBe(200);
    expect(image.headers()["content-type"]).toContain("image/png");

    await expect(p.locator("h1")).toHaveCount(1);
  });
}

test("homepage structured data describes the person accurately", async ({ page }) => {
  await page.goto("/");
  const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
  const graph = blocks.map((b) => JSON.parse(b)).flatMap((b) => b["@graph"] ?? [b]);
  const person = graph.find((n) => n["@type"] === "Person");
  expect(person.name).toBe("Muhammad Ismail");
  expect(person.homeLocation.address.addressCountry).toBe("PK");
  expect(person.sameAs).toEqual(
    expect.arrayContaining([
      "https://github.com/ismailkhan4",
      "https://www.linkedin.com/in/heyismail",
      "https://www.instagram.com/hey.ismail1",
      "https://www.facebook.com/heyismail.dev",
    ])
  );
  expect(graph.find((n) => n["@type"] === "ProfilePage").mainEntity["@id"]).toBe(person["@id"]);
});

test("case study structured data is an in-progress article by the same person", async ({ page }) => {
  await page.goto(CS);
  const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
  const graph = blocks.map((b) => JSON.parse(b)).flatMap((b) => b["@graph"] ?? [b]);
  const article = graph.find((n) => n["@type"] === "Article");
  expect(article.creativeWorkStatus).toBe("Incomplete");
  expect(article.author["@id"]).toBe(`${SITE}/#person`);
  expect(graph.find((n) => n["@type"] === "BreadcrumbList").itemListElement).toHaveLength(2);
});

test("sitemap lists every page with its alternates", async ({ request }) => {
  const xml = await (await request.get("/sitemap.xml")).text();
  for (const path of ["/", "/de", "/it", CS, `/de${CS}`, `/it${CS}`]) {
    expect(xml).toContain(`<loc>${SITE}${path}</loc>`);
  }
  expect(xml).not.toContain("climaflow");
  expect(xml).toContain('hreflang="x-default"');
});

test("robots.txt allows crawling and points to the sitemap", async ({ request }) => {
  const txt = await (await request.get("/robots.txt")).text();
  expect(txt).toContain("Allow: /");
  expect(txt).toContain(`Sitemap: ${SITE}/sitemap.xml`);
});
