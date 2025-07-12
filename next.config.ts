/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1️⃣  Enable SVGR (import SVGs as React components)
  webpack(config: any) {
    // Exclude SVGs from the default file‑loader
    const assetRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.(".svg")
    );
    assetRule.exclude = /\.svg$/i;

    // Add @svgr/webpack for SVG → React components
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  // 2️⃣  Allow TypeScript path aliases from tsconfig.json
  // (Nothing to do here — Next.js reads tsconfig automatically)
};

module.exports = nextConfig;
