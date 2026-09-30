import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const PAGES = [
  "/",
  "/de",
  "/it",
  "/work/barrierefrei-studio",
  "/de/work/barrierefrei-studio",
  "/it/work/barrierefrei-studio",
  "/does-not-exist",
];
const WCAG = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

for (const path of PAGES) {
  test(`axe: ${path} has no WCAG 2.2 AA violations`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(path);
    const results = await new AxeBuilder({ page }).withTags(WCAG).analyze();
    const summary = results.violations.map((v) => ({
      id: v.id,
      impact: v.impact,
      nodes: v.nodes.slice(0, 5).map((n) => `${n.target.join(" ")} — ${n.failureSummary?.split("\n")[1] ?? ""}`),
    }));
    expect(summary).toEqual([]);
  });
}

test("skip link is the first stop and moves focus to the main content", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Skip to content" });
  await expect(skip).toBeFocused();
  await expect(skip).toBeVisible();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main$/);
});

for (const path of ["/", "/work/barrierefrei-studio"]) {
  test(`every interactive element on ${path} shows a visible focus outline`, async ({ page }) => {
    await page.goto(path);
    const missing = await page.evaluate(() => {
      // checkVisibility() also excludes links inside a closed <details>, which can't take focus.
      const els = [...document.querySelectorAll<HTMLElement>("a[href], button")].filter((el) => el.checkVisibility());
      return els
        .filter((el) => {
          el.focus({ focusVisible: true } as FocusOptions);
          const style = getComputedStyle(el);
          return style.outlineStyle === "none" || style.outlineWidth === "0px";
        })
        .map((el) => el.outerHTML.slice(0, 80));
    });
    expect(missing).toEqual([]);
  });
}
