# Project Structure

```
/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout — metadata, fonts, PageLayout wrapper, Tawk.to chat
│   ├── page.tsx                # Homepage (client component, all sections inline)
│   ├── data.ts                 # Single source of truth for all content/copy (see below)
│   ├── components/             # App-level shared components
│   │   ├── Navigation.tsx      # Fixed nav with scroll-aware styling + mobile overlay
│   │   ├── Footer.tsx          # Site footer
│   │   └── PageLayout.tsx      # Wraps all pages: renders children + Footer
│   ├── about/                  # /about page
│   ├── builds/                 # /builds page + [slug] dynamic routes
│   │   └── [slug]/             # Individual case study pages
│   ├── contact/                # /contact page (server page + client component split)
│   ├── process/                # /process page
│   ├── styles/
│   │   ├── globals.css         # CSS variables, base reset
│   │   └── index.css           # Additional global styles
│   └── types/
│       └── global.d.ts         # Global TypeScript declarations
│
├── components/                 # Shared/reusable components
│   ├── sections/               # Full-page section components (older pattern, see note)
│   └── ui/                     # shadcn/ui primitives (badge, button, card, separator)
│
├── lib/
│   ├── utils.ts                # cn() helper
│   ├── markdown.ts             # Markdown parsing utilities
│   └── sanitizeMarkdown.ts     # HTML sanitization for rendered markdown
│
├── public/                     # Static assets
│   ├── fonts/                  # PolySans font files (woff2)
│   ├── builds/                 # Build screenshots
│   ├── blogImages/             # Blog/content images
│   └── creators/               # Creator profile photos
│
├── .kiro/steering/             # AI steering documents
├── next.config.ts              # Next.js config (SVGR support)
├── tailwind.config.js          # Tailwind config with brand colors and custom keyframes
├── open-next.config.ts         # Cloudflare deployment config
├── wrangler.jsonc              # Cloudflare Workers config
└── .dev.vars                   # Local environment variables (never commit)
```

## Key Conventions

### Content / Data
- **All site copy lives in `app/data.ts`** — typed interfaces and exported constants (HERO, BUILDS, PROCESS_STEPS, CASE_STUDIES, FAQS, etc.). Never hardcode strings in components; import from `data.ts`.

### Page Pattern
- Pages that need metadata use a server component wrapper + a `*Client.tsx` client component (e.g., `contact/page.tsx` + `ContactPageClient.tsx`)
- Pages with no metadata requirements are often written as `"use client"` directly
- Every page imports `Navigation` from `app/components/Navigation.tsx` directly (not from the layout)

### Component Location
- New interactive/UI primitives → `components/ui/`
- New page-level shared components → `app/components/`
- The `components/sections/` folder contains an older set of components — prefer the patterns in `app/` for new work

### Styling Pattern
- Use Tailwind utility classes directly; use `cn()` for conditional/merged classes
- Brand colors are available as Tailwind tokens: `bg-brand-primary`, `text-brand-dark`, etc., but inline hex values (`#14A714`, `#06382C`, `#FBFFFC`, `#0F0F0F`) are also used throughout — be consistent with the surrounding code
- Font classes: `font-display` for headings, `font-body` for body text

### Animation Pattern
- Define `fadeUp` and `stagger` variants at the top of the file
- Scroll animations always use `whileInView` + `viewport={{ once: true }}`
- Entry animations (on mount) use `initial` / `animate`

### SVGs
- SVGs can be imported as React components (SVGR configured in `next.config.ts`)
