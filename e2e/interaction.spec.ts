import { expect, test } from "@playwright/test";

test("navigation is visible on phones without opening a menu", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Phone layout only");
  await page.goto("/de");
  const nav = page.getByRole("navigation", { name: "Hauptnavigation" });
  await expect(nav.getByRole("link", { name: "Kontakt", exact: true })).toBeVisible();
  await nav.getByRole("link", { name: "Kontakt", exact: true }).click();
  await expect(page).toHaveURL(/\/de#contact$/);
  await expect(page.locator("#contact-heading")).toBeInViewport();
});

test("copy email button copies the address and announces it", async ({ page, context, browserName }) => {
  test.skip(browserName !== "chromium", "Clipboard permissions are Chromium-only");
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/");
  await page.getByRole("button", { name: "Copy email address" }).click();
  await expect(page.getByRole("status").filter({ hasText: "Email address copied" })).toBeVisible();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe("ismaeel.kheshgi@gmail.com");
});

test("the current project is labelled as in progress and links to its case study", async ({ page }) => {
  await page.goto("/");
  const section = page.locator("#building");
  await expect(section.getByText("In research and design")).toBeVisible();
  await section.getByRole("link", { name: "Read the case study" }).click();
  await expect(page).toHaveURL(/\/work\/barrierefrei-studio$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Barrierefrei Studio");
  // Nothing on the page may claim the product is built or shipped.
  await expect(page.getByText("No code yet", { exact: false }).first()).toBeVisible();
});

test("choosing a language is remembered and wins over the browser language", async ({ page, context }) => {
  await page.goto("/de");
  await page.getByRole("link", { name: /^EN\b.*English/ }).first().click();
  await expect(page).toHaveURL(/localhost:\d+\/$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  const cookies = await context.cookies();
  expect(cookies.find((c) => c.name === "hi_locale")?.value).toBe("en");
});

test("location-based suggestion is offered, not forced, and can be dismissed", async ({ page, context, baseURL }) => {
  await context.addCookies([{ name: "hi_suggest", value: "de", url: baseURL! }]);
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  const banner = page.getByRole("complementary", { name: "Diese Seite gibt es auch auf Deutsch." });
  await expect(banner).toBeVisible();
  await banner.getByRole("button", { name: "Hinweis schließen" }).click();
  await expect(banner).toBeHidden();
  await page.reload();
  await expect(banner).toBeHidden();
});

test("no suggestion when the visitor is already on the suggested language", async ({ page, context, baseURL }) => {
  await context.addCookies([{ name: "hi_suggest", value: "de", url: baseURL! }]);
  await page.goto("/de");
  await expect(page.getByRole("complementary")).toHaveCount(0);
});

test("the hero answers who, what, where and next step without scrolling", async ({ page }) => {
  await page.goto("/");
  const viewport = page.viewportSize()!;
  for (const text of ["Muhammad Ismail", "React", "Lahore, Pakistan", "Germany or Italy"]) {
    const box = await page.getByText(text, { exact: false }).first().boundingBox();
    expect(box, text).not.toBeNull();
    expect(box!.y, `${text} should be above the fold`).toBeLessThan(viewport.height * 1.15);
  }
  await expect(page.getByRole("link", { name: "Get in touch" }).first()).toBeVisible();
});

test("internal links resolve and in-page anchors exist", async ({ page, request }) => {
  for (const path of ["/", "/de", "/it", "/work/barrierefrei-studio", "/de/work/barrierefrei-studio"]) {
    await page.goto(path);
    const hrefs = await page.locator("a[href]").evaluateAll((as) => as.map((a) => (a as HTMLAnchorElement).href));
    for (const href of new Set(hrefs)) {
      const url = new URL(href);
      if (url.host !== new URL(page.url()).host) continue;
      const res = await request.get(url.pathname, { maxRedirects: 0 });
      expect(res.status(), `${path} → ${url.pathname}`).toBe(200);
      if (url.hash) {
        await page.goto(url.pathname);
        await expect(page.locator(url.hash), `${path} → ${href}`).toHaveCount(1);
        await page.goto(path);
      }
    }
  }
});
