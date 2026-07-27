# Tech Stack

## Framework & Runtime
- **Next.js 15** (App Router) with **React 19**
- **TypeScript** (strict mode, `moduleResolution: bundler`)
- Deployed to **Cloudflare Workers** via `@opennextjs/cloudflare`
- R2 incremental cache configured in `open-next.config.ts`

## Styling
- **Tailwind CSS v4** with `@tailwindcss/postcss`
- Custom brand colors defined in `tailwind.config.js` under `theme.extend.colors.brand`
- CSS variables for semantic colors (`--background`, `--foreground`, etc.) in `globals.css`
- `cn()` helper from `lib/utils.ts` (clsx + tailwind-merge) — use this for conditional classes
- `@tailwindcss/typography` plugin for prose/markdown content

## UI Components
- **Radix UI** primitives (full suite installed) — use these as the base for any new interactive components
- **shadcn/ui** pattern: components live in `components/ui/`, built on Radix + CVA
- `class-variance-authority` for component variant definitions
- `lucide-react` for icons

## Animation
- **Framer Motion** for all page/section animations
- Standard pattern: `fadeUp` variant (`opacity: 0, y: 28` → `opacity: 1, y: 0`) + `stagger` wrapper
- Always use `whileInView` with `viewport={{ once: true }}` for scroll-triggered animations

## Forms & Validation
- `react-hook-form` with `@hookform/resolvers`
- **Zod** for schema validation

## Content / Markdown
- `marked` for markdown parsing
- `gray-matter` for frontmatter
- `isomorphic-dompurify` for sanitizing HTML output
- Utilities in `lib/markdown.ts` and `lib/sanitizeMarkdown.ts`

## Other Libraries
- `date-fns` for date formatting
- `framer-motion` for animations
- `vaul` for drawer components
- `@next/font` for font loading

## Path Aliases
- `@/*` maps to the project root (e.g., `@/lib/utils`, `@/app/data`)

## Common Commands

```bash
# Local development
npm run dev

# Production build (Next.js)
npm run build

# Build + preview on Cloudflare locally
npm run preview

# Deploy to Cloudflare
npm run deploy

# Lint
npm run lint

# Generate Cloudflare env types
npm run cf-typegen
```

## Deployment
- Platform: **Cloudflare Workers** (not Vercel for production)
- Config: `wrangler.jsonc` and `open-next.config.ts`
- Environment variables: `.dev.vars` (local only, never commit)
