import { defineConfig, devices } from "@playwright/test";

const PORT = 3100;

// Runs against a production build (`next start`), since language redirects
// and static generation only behave like production there.
export default defineConfig({
  testDir: "e2e",
  fullyParallel: true,
  reporter: "list",
  use: { baseURL: `http://localhost:${PORT}` },
  webServer: {
    command: `npm run build && npx next start -p ${PORT}`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: true,
    timeout: 240_000,
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    // HTTP-level and markup checks don't depend on the viewport; run them once.
    { name: "mobile", use: { ...devices["Pixel 7"] }, testIgnore: /routing|seo/ },
  ],
});
