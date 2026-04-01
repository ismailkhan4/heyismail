# Tech Stack & Build System

## Framework & Core Technologies
- **Next.js 15.3.6** with App Router (not Pages Router)
- **React 19** with TypeScript
- **Tailwind CSS 4.1.11** for styling
- **Framer Motion** for animations
- **Cloudflare Workers** deployment via OpenNext

## UI & Component System
- **shadcn/ui** components with Radix UI primitives
- **Lucide React** for icons
- **Class Variance Authority** for component variants
- Custom utility function `cn()` for className merging (clsx + tailwind-merge)

## Content & Data
- **Gray Matter** for frontmatter parsing
- **Marked** for markdown processing
- **DOMPurify** for sanitization
- **Zod** for validation

## Development Tools
- **TypeScript 5** with strict configuration
- **ESLint** with Next.js config
- **Wrangler** for Cloudflare deployment
- **Turbopack** for fast development builds

## Common Commands

### Development
```bash
npm run dev          # Start dev server with Turbopack
npm run build        # Build for production
npm run lint         # Run ESLint
```

### Deployment (Cloudflare)
```bash
npm run preview      # Build and preview locally
npm run deploy       # Build and deploy to Cloudflare
npm run upload       # Build and upload assets
npm run cf-typegen   # Generate Cloudflare types
```

## Architecture Patterns
- App Router with TypeScript
- Client components marked with "use client"
- Custom fonts via `next/font/google`
- CSS variables for theming with light/dark mode support
- Component composition over inheritance
- Utility-first CSS with Tailwind