/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1️⃣  Enable SVGR (import SVGs as React components) for Turbopack
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  // 2️⃣  Fallback webpack config for production builds
  webpack(config: any) {
    // Only apply webpack config if not using turbopack
    if (config.name === 'server' || config.name === 'client') {
      // Exclude SVGs from the default file‑loader
      const assetRule = config.module.rules.find((rule: any) =>
        rule.test?.test?.(".svg")
      );
      if (assetRule) {
        assetRule.exclude = /\.svg$/i;
      }

      // Add @svgr/webpack for SVG → React components
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      });
    }

    return config;
  },

  // 3️⃣  Allow TypeScript path aliases from tsconfig.json
  // (Nothing to do here — Next.js reads tsconfig automatically)
};

module.exports = nextConfig;