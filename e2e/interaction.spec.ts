import { expect, test } from "@playwright/test";

test("mobile menu opens, closes with Escape and returns focus", async ({ page, isMobile }) => {
  test.skip(!isMobile, "The menu button is only shown on small screens");
  await page.goto("/");
  const button = page.getByRole("button", { name: "Open menu" });
  await button.click();
  const menu = page.locator("#mobile-menu");
  await expect(menu).toBeVisible();
  await expect(menu.getByRole("link").first()).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(menu).toBeHidden();
  await expect(page.getByRole("button", { name: "Open menu" })).toBeFocused();
});

test("mobile menu links go to the section and close the menu", async ({ page, isMobile }) => {
  test.skip(!isMobile, "The menu button is only shown on small screens");
  await page.goto("/de");
  await page.getByRole("button", { name: "Menü öffnen" }).click();
  await page.locator("#mobile-menu").getByRole("link", { name: "Kontakt", exact: true }).click();
  await expect(page.locator("#mobile-menu")).toBeHidden();
  await expect(page).toHaveURL(/\/de#contact$/);
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
  for (const path of ["/", "/de", "/it"]) {
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
