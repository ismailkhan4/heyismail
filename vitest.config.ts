import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  // Unit tests import no CSS; don't let Vite load the Next.js PostCSS config.
  css: { postcss: { plugins: [] } },
  test: {
    environment: "node",
    globals: true,
    include: ["**/__tests__/**/*.test.ts"],
    exclude: ["node_modules", ".next", "e2e"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});
