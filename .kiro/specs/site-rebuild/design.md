# Design Document — site-rebuild

## Overview

The site-rebuild collapses heyismail.com from a multi-route Next.js application into a single scrollable page (`/`) composed of stacked, anchor-linked sections. The architectural shift is:

- **Before**: 5 distinct routes (`/`, `/process`, `/builds`, `/about`, `/contact`), content co-located in `app/data.ts`, components mixed between `app/components/` and `components/sections/`.
- **After**: 1 route (`/`), all copy in `lib/content/*.ts` typed data files, components reorganised into `components/layout/`, `components/sections/`, and `components/ui/`.

The design system adopts Fraunces (display/headings) + Inter (body), Tailwind CSS v4 with CSS custom property tokens, and Framer Motion `fadeUp`/`stagger` entrance animations. The site remains fully static — no runtime data fetching — compatible with `@opennextjs/cloudflare`.

---

## Architecture

### Component Tree

```
app/layout.tsx                     (server component — metadata, fonts)
└── <body>
    └── app/page.tsx               (client component — composes all sections)
        ├── components/layout/Header.tsx        (sticky nav, scroll-aware, mobile menu)
        ├── components/sections/Hero.tsx        (id: hero — mount animation)
        ├── components/sections/ProofBar.tsx    (id: proof)
        ├── components/sections/Portfolio.tsx   (id: portfolio)
        │   └── components/ui/PortfolioCard.tsx (×2)
        │       └── components/ui/TechBadge.tsx (×n)
        ├── components/sections/Testimonials.tsx (id: testimonials)
        │   └── components/ui/TestimonialCard.tsx (×2)
        ├── components/sections/Coaching.tsx    (id: coaching)
        ├── components/sections/About.tsx       (id: about)
        ├── components/sections/TechStack.tsx   (id: tech)
        │   └── components/ui/TechBadge.tsx (×5)
        ├── components/sections/Contact.tsx     (id: contact)
        └── components/layout/Footer.tsx
```

### Data Flow

All data flows in one direction: typed content files → section components → rendered HTML. There is no state that crosses section boundaries except:

1. Header scroll state (local `useState` + `useScrollY` hook inside `Header.tsx`)
2. Mobile menu open/close state (local `useState` inside `Header.tsx`)

```
lib/content/siteConfig.ts  ──→  Header, Hero, Coaching, Contact, Footer
lib/content/portfolio.ts   ──→  Portfolio → PortfolioCard
lib/content/testimonials.ts ──→ Testimonials → TestimonialCard
lib/content/stats.ts        ──→ ProofBar → StatItem
lib/content/techStack.ts    ──→ TechStack → TechBadge
lib/content/about.ts        ──→ About
lib/types/content.ts        ──→ (type imports only — no runtime value)
```

### Page-Level Composition (`app/page.tsx`)

`app/page.tsx` is a `"use client"` component that imports all section components and renders them in document order. It imports no content data directly — each section component handles its own import from `lib/content/`. This keeps `page.tsx` a thin composition root.

---

## Components and Interfaces

### `components/layout/Header.tsx`

```typescript
// No external props — self-contained with internal scroll + menu state
export default function Header(): JSX.Element
```

Internal state:
- `scrolled: boolean` — drives background/text color swap
- `mobileOpen: boolean` — drives mobile overlay visibility

Nav items (hardcoded anchor links, not from content layer — these are navigation structure, not copy):
```typescript
const NAV_ITEMS = [
  { label: "Work",     href: "#portfolio" },
  { label: "Coaching", href: "#coaching"  },
  { label: "About",    href: "#about"     },
  { label: "Contact",  href: "#contact"   },
] as const;
```

### `components/layout/Footer.tsx`

```typescript
// No props — all content imported from siteConfig internally
export default function Footer(): JSX.Element
```

### `components/sections/Hero.tsx`

```typescript
// No props — imports from siteConfig internally
export default function Hero(): JSX.Element
```

### `components/sections/ProofBar.tsx`

```typescript
// No props — imports from stats.ts internally
export default function ProofBar(): JSX.Element
```

### `components/sections/Portfolio.tsx`

```typescript
// No props — imports from portfolio.ts internally
export default function Portfolio(): JSX.Element
```

### `components/sections/Testimonials.tsx`

```typescript
// No props — imports from testimonials.ts internally
export default function Testimonials(): JSX.Element
```

### `components/sections/Coaching.tsx`

```typescript
// No props — imports coaching text from siteConfig internally
export default function Coaching(): JSX.Element
```

### `components/sections/About.tsx`

```typescript
// No props — imports from about.ts internally
export default function About(): JSX.Element
```

### `components/sections/TechStack.tsx`

```typescript
// No props — imports from techStack.ts internally
export default function TechStack(): JSX.Element
```

### `components/sections/Contact.tsx`

```typescript
// No props — imports from siteConfig internally
export default function Contact(): JSX.Element
```

### `components/ui/PortfolioCard.tsx`

```typescript
import type { Project } from "@/lib/types/content";

interface PortfolioCardProps {
  project: Project;
}

export default function PortfolioCard({ project }: PortfolioCardProps): JSX.Element
```

### `components/ui/TestimonialCard.tsx`

```typescript
import type { Testimonial } from "@/lib/types/content";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps): JSX.Element
```

### `components/ui/StatItem.tsx`

```typescript
import type { Stat } from "@/lib/types/content";

interface StatItemProps {
  stat: Stat;
}

export default function StatItem({ stat }: StatItemProps): JSX.Element
```

### `components/ui/TechBadge.tsx`

```typescript
import type { TechItem } from "@/lib/types/content";

interface TechBadgeProps {
  item: TechItem;
}

export default function TechBadge({ item }: TechBadgeProps): JSX.Element
```

### `components/ui/Button.tsx`

```typescript
import { type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-body font-semibold rounded-lg transition-all duration-200",
  {
    variants: {
      variant: {
        primary: "bg-[--success] text-[--light] hover:bg-[#129612] hover:shadow-[0_6px_28px_rgba(20,167,20,0.45)] hover:-translate-y-0.5",
        outline: "bg-transparent border border-current hover:bg-[--primary]/5",
      },
      size: {
        md: "px-7 py-4 text-base",
        sm: "px-5 py-2.5 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  href: string;
  external?: boolean;
}

export default function Button({ href, variant, size, external, children, className, ...rest }: ButtonProps): JSX.Element
```

### `components/ui/SectionHeading.tsx`

```typescript
interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  subheading?: string;
  /** "dark" = light-bg section (#0F0F0F text), "light" = dark-bg section (#FBFFFC text) */
  theme?: "dark" | "light";
  className?: string;
}

export default function SectionHeading({ eyebrow, heading, subheading, theme, className }: SectionHeadingProps): JSX.Element
```

---

## Data Models

### `lib/types/content.ts`

```typescript
export type Project = {
  id: string;
  clientName: string;
  clientDescriptor: string;
  title: string;
  summary: string;
  deliveryTime: string;
  features: string[];
  results: string[];
  stack: string[];
};

export type Testimonial = {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  isPlaceholder: boolean;
};

export type Stat = {
  id: string;
  value: string;
  label: string;
};

export type TechItem = {
  id: string;
  name: string;
};
```

### `lib/content/siteConfig.ts`

```typescript
export const calLink = "https://cal.com/heyismail/15min";
export const whatsappLink = "https://wa.me/<REPLACE_WITH_REAL_NUMBER>";
export const coaching =
  "Alongside client work, I coach students who want to go from tutorials to shipping real, full-stack web applications — covering architecture decisions, working with modern frameworks, and the habits that separate a finished project from an abandoned one. This is hands-on, practical, and built around what you're actually trying to build.";
```

### `lib/content/portfolio.ts`

```typescript
import type { Project } from "@/lib/types/content";

export const portfolio: Project[] = [
  {
    id: "linkup-os",
    clientName: "LinkUp OS",
    clientDescriptor: "...",
    title: "LinkUp OS",
    summary: "...",
    deliveryTime: "7 days",
    features: ["...", "..."],
    results: ["2,500+ paying members", "$2.3M+ in tracked revenue"],
    stack: ["Next.js", "Supabase", "Stripe"],
  },
  {
    id: "motiv8",
    clientName: "Motiv8",
    clientDescriptor: "...",
    title: "Motiv8",
    summary: "...",
    deliveryTime: "7 days",
    features: ["...", "..."],
    results: ["10,000+ members", "94% program completion rate"],
    stack: ["Next.js", "Supabase", "Stripe"],
  },
];
```

### `lib/content/testimonials.ts`

```typescript
import type { Testimonial } from "@/lib/types/content";

export const testimonials: Testimonial[] = [
  {
    id: "placeholder-1",
    quote: "Placeholder testimonial quote.",
    authorName: "Client Name",
    authorRole: "Client Role",
    isPlaceholder: true,
  },
  {
    id: "placeholder-2",
    quote: "Placeholder testimonial quote.",
    authorName: "Client Name",
    authorRole: "Client Role",
    isPlaceholder: true,
  },
];
```

### `lib/content/stats.ts`

```typescript
import type { Stat } from "@/lib/types/content";

export const stats: Stat[] = [
  { id: "years",    value: "8+",      label: "Years building software" },
  { id: "ships",    value: "2",       label: "Platforms shipped in 7 days each" },
  { id: "users",    value: "12,500+", label: "Users served across delivered platforms" },
  { id: "revenue",  value: "$2.3M+",  label: "Revenue tracked through delivered platforms" },
];
```

### `lib/content/techStack.ts`

```typescript
import type { TechItem } from "@/lib/types/content";

export const techStack: TechItem[] = [
  { id: "nextjs",    name: "Next.js"     },
  { id: "supabase",  name: "Supabase"    },
  { id: "stripe",    name: "Stripe"      },
  { id: "openai",    name: "OpenAI API"  },
  { id: "vercel",    name: "Vercel"      },
];
```

### `lib/content/about.ts`

```typescript
export const about: { paragraphs: [string, string] } = {
  paragraphs: [
    "I started as a self-taught software engineer in 2018, with no formal CS background — just a habit of building things until they worked. That habit hasn't changed.",
    "Today I build software, web, and mobile applications for premium clients and brands who need production-grade work, not a prototype. Every project I take on, I build end-to-end — architecture, implementation, and launch.",
  ],
};
```

---

## Header Scroll Behavior — useScrollY Hook

The scroll threshold logic is extracted into a custom hook so it can be independently tested and shared if needed.

```typescript
// lib/hooks/useScrollY.ts
"use client";
import { useState, useEffect } from "react";

/**
 * Returns true when the page has scrolled past `threshold` pixels.
 * Registers a passive scroll listener; cleans up on unmount.
 */
export function useScrollY(threshold: number = 60): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    // Sync on mount in case page loads mid-scroll
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
```

`Header.tsx` usage:

```typescript
const scrolled = useScrollY(60);

// Transparent header when not scrolled, --light bg when scrolled
const headerClass = scrolled
  ? "bg-[--light]/96 backdrop-blur-md border-b border-[--dark]/7 shadow-sm"
  : "bg-transparent";

const textClass = scrolled ? "text-[--dark]" : "text-[--light]";
```

The header slides in from above on mount via Framer Motion `initial={{ y: -80, opacity: 0 }}` / `animate={{ y: 0, opacity: 1 }}`, matching the existing pattern.

---

## Mobile Navigation

State lives entirely in `Header.tsx`. No global context or URL state is needed.

```typescript
const [mobileOpen, setMobileOpen] = useState(false);

// Body scroll lock
useEffect(() => {
  if (mobileOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  return () => { document.body.style.overflow = ""; };
}, [mobileOpen]);
```

The mobile overlay renders full-viewport (100svh) with `bg-[--primary]` (#06382C), matching the existing pattern. It uses `AnimatePresence` + `motion.div` for enter/exit transitions.

Closing triggers:
1. Clicking the ×  button → `setMobileOpen(false)`
2. Clicking any nav link → `setMobileOpen(false)` (via `onClick` on each anchor)
3. Pressing Escape → handled by a `keydown` listener added when `mobileOpen === true`

```typescript
useEffect(() => {
  if (!mobileOpen) return;
  const handler = (e: KeyboardEvent) => {
    if (e.key === "Escape") setMobileOpen(false);
  };
  document.addEventListener("keydown", handler);
  return () => document.removeEventListener("keydown", handler);
}, [mobileOpen]);
```

The hamburger button has `aria-expanded={mobileOpen}` and `aria-controls="mobile-menu"` for accessibility. The overlay has `id="mobile-menu"` and `role="dialog"` with `aria-modal="true"`.

---

## Animation Architecture

### Shared Variants

Defined once in `lib/animations.ts` and imported by all components — no per-file re-declaration.

```typescript
// lib/animations.ts
import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.0, 0.0, 0.2, 1] },
  },
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

/**
 * When prefers-reduced-motion is active, variants produce no motion.
 * Components should call useMotionVariants() instead of importing
 * fadeUp/stagger directly.
 */
export const fadeUpReduced: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

export const staggerReduced: Variants = {
  hidden: {},
  visible: {},
};
```

### Reduced-Motion Hook

```typescript
// lib/hooks/useMotionVariants.ts
"use client";
import { useReducedMotion } from "framer-motion";
import { fadeUp, stagger, fadeUpReduced, staggerReduced } from "@/lib/animations";

export function useMotionVariants() {
  const reduce = useReducedMotion();
  return {
    fadeUp:  reduce ? fadeUpReduced  : fadeUp,
    stagger: reduce ? staggerReduced : stagger,
  };
}
```

Every section component calls `useMotionVariants()` and uses the returned variants. This is the single enforcement point for `prefers-reduced-motion`.

### Usage Pattern

**Scroll-triggered sections** (all except Hero):

```tsx
const { fadeUp, stagger } = useMotionVariants();

<motion.section
  variants={stagger}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <motion.div variants={fadeUp}>...</motion.div>
</motion.section>
```

**Hero** (mount-triggered):

```tsx
const { fadeUp, stagger } = useMotionVariants();

<motion.div
  variants={stagger}
  initial="hidden"
  animate="visible"
>
  <motion.div variants={fadeUp}>...</motion.div>
</motion.section>
```

---

## Tailwind / CSS Variable Integration

### `app/globals.css`

```css
@import "tailwindcss";

:root {
  --light:   #FBFFFC;
  --success: #14A714;
  --primary: #06382C;
  --dark:    #0F0F0F;

  /* Font variables set by next/font/google */
  /* --font-display and --font-body are injected by Next.js */
}

body {
  font-family: var(--font-body);
  background-color: var(--light);
  color: var(--dark);
}

h1, h2, h3 {
  font-family: var(--font-display);
}
```

Tailwind v4 uses `@import "tailwindcss"` (not `@tailwind base/components/utilities`). The existing `tailwind.config.js` continues to provide `theme.extend` for brand tokens, radius, and keyframes.

### Font Loading in `app/layout.tsx`

```typescript
import { Fraunces, Inter } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

// Applied to <html> tag:
// className={`${fraunces.variable} ${inter.variable}`}
```

The existing layout loads Inter with `variable: "--font-display"` (a naming inconsistency). The rebuild corrects this: Fraunces → `--font-display`, Inter → `--font-body`.

### CSS Variable Usage in Components

Components reference CSS variables directly in Tailwind classes using the `[--var]` syntax (Tailwind v4 arbitrary value) or via inline styles for values that Tailwind doesn't model well:

```tsx
// In Tailwind classes (preferred)
<div className="bg-[--primary] text-[--light]" />

// For opacity variants not in the config
<div className="border-[--dark]/15" />
```

No `dark:` prefix classes are used anywhere. The `darkMode: ["class"]` entry in `tailwind.config.js` can remain but will never be activated.

---

## Build and Deployment Considerations

### Static Output with `@opennextjs/cloudflare`

The rebuild is fully static — no `getServerSideProps`, no route handlers, no API routes, no `async` server components that fetch data. `app/page.tsx` is a client component that synchronously imports from `lib/content/*.ts`. This produces a build Cloudflare Workers can serve as static assets.

`open-next.config.ts` configures R2 incremental cache:
```typescript
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";
export default defineCloudflareConfig({ incrementalCache: r2IncrementalCache });
```

Since there are no dynamic routes and no ISR pages, the R2 cache will be effectively unused, but the config is harmless to keep.

### Deleting Old Routes

The following directories must be deleted before or during the task phase:
- `app/process/`
- `app/builds/`  (includes `app/builds/[slug]/`)
- `app/about/`
- `app/contact/`

After deletion, Next.js will produce 404 responses for those URL paths automatically — no explicit redirect configuration is needed for the Cloudflare deployment.

### `_headers` File

The existing `_headers` file at the project root provides HTTP response headers for Cloudflare. It should be kept as-is; no changes required for the rebuild.

### `wrangler.jsonc`

No changes to `wrangler.jsonc` are required. The worker name, routes, and environment bindings remain the same.

### Build Commands

```bash
# Verify TypeScript (no errors before touching deployment)
npx tsc --noEmit

# Standard Next.js build
npm run build

# Full Cloudflare build + preview
npm run preview

# Deploy
npm run deploy
```

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

This site-rebuild is primarily a UI/content site: configuration checks, fixture data, routing structure, and CSS styling. The vast majority of acceptance criteria are SMOKE, EXAMPLE, or INTEGRATION tests by nature. There are exactly two areas where the code has pure logic that varies meaningfully with input:

1. **`useScrollY` hook** — maps a numeric scroll position to a boolean above/below threshold
2. **`useMotionVariants` hook** — maps a reduced-motion OS preference to animation variant objects

Both are small pure functions that are cost-effective to test with many input values.

**Property Reflection:**
After reviewing the prework, Properties 1 and 2 are independent — one tests numeric input, one tests boolean input, and they validate different requirements. No redundancy to eliminate.

### Property 1: Scroll threshold produces correct boolean

*For any* scroll position value greater than 60, `useScrollY(60)` SHALL return `true`; *for any* scroll position value of 60 or less (including 0 and negative), it SHALL return `false`.

**Validates: Requirements 4.2, 4.3**

### Property 2: Reduced-motion disables all motion in animation variants

*For any* component that calls `useMotionVariants()`, when `useReducedMotion()` returns `true`, the returned `fadeUp.hidden` state SHALL have `opacity: 1` and `y: 0` — identical to the `visible` state — so no visible motion is applied regardless of animation lifecycle.

**Validates: Requirements 15.5**

---

## Error Handling

### Content Data

All content is static and typed. TypeScript compilation (`tsc --noEmit`) is the primary error gate — a missing required field or wrong type is a compile-time error, not a runtime error.

### Missing Images

The `og:image` path in metadata is a placeholder. If the file doesn't exist in `public/`, the OG image simply won't load in link previews — the page renders normally. A real image should be added to `public/` before production launch.

### External Links

`calLink` and `whatsappLink` open in a new tab with `rel="noopener noreferrer"`. If the `whatsappLink` still contains the `<REPLACE_WITH_REAL_NUMBER>` placeholder, clicking it will produce a WhatsApp error — this is intentional and visible during development, prompting the developer to fill in the real number before launch.

### Animation Errors

Framer Motion variant mismatches (e.g., using a stagger container without children that have matching variants) produce console warnings but don't break rendering. The `useMotionVariants` hook centralises variant definitions to prevent inconsistency.

---

## Testing Strategy

This feature is a UI/content site. PBT applies only to the two pure hook functions identified above. The bulk of coverage is delivered through unit tests (content fixture assertions) and type checking.

### TypeScript / Compile-Time (primary correctness gate)
- `tsc --noEmit` under `strict: true` validates all type annotations, prop interfaces, and content file shapes at build time.
- This catches: missing fields in content objects, wrong types passed to components, `any` usage, and unannotated exports.

### Unit Tests (example-based)
Use **Vitest** (aligned with the Next.js 15 + Vite ecosystem):

- Content fixture assertions: import each `lib/content/*.ts` file and assert exact values (array length, specific strings, field presence).
- `siteConfig` value assertions: `calLink` and `whatsappLink` match expected strings.
- Animation variant shape: `fadeUp.hidden` has `opacity: 0, y: 28`; `stagger.visible.transition.staggerChildren` is between 0.08 and 0.15.
- `SectionHeading` renders eyebrow, heading, and optional subheading.
- `TestimonialCard` renders "Placeholder" badge when `isPlaceholder: true`.

### Property-Based Tests (Vitest + fast-check)
Minimum 100 iterations per property test.

**Property 1 — Scroll threshold:**
```typescript
// Feature: site-rebuild, Property 1: scroll threshold produces correct boolean
import fc from "fast-check";
import { renderHook, act } from "@testing-library/react";
import { useScrollY } from "@/lib/hooks/useScrollY";

test("useScrollY returns true for any value > 60, false for ≤ 60", () => {
  fc.assert(
    fc.property(fc.integer({ min: 61, max: 100_000 }), (scrollY) => {
      // Mock window.scrollY
      Object.defineProperty(window, "scrollY", { value: scrollY, configurable: true });
      const { result } = renderHook(() => useScrollY(60));
      expect(result.current).toBe(true);
    }),
    { numRuns: 100 }
  );
  fc.assert(
    fc.property(fc.integer({ min: -1000, max: 60 }), (scrollY) => {
      Object.defineProperty(window, "scrollY", { value: scrollY, configurable: true });
      const { result } = renderHook(() => useScrollY(60));
      expect(result.current).toBe(false);
    }),
    { numRuns: 100 }
  );
});
```

**Property 2 — Reduced-motion variants:**
```typescript
// Feature: site-rebuild, Property 2: reduced-motion disables all motion
import fc from "fast-check";
import * as framerMotion from "framer-motion";
import { renderHook } from "@testing-library/react";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";

test("when reduced motion is true, fadeUp hidden state has no movement", () => {
  vi.spyOn(framerMotion, "useReducedMotion").mockReturnValue(true);
  fc.assert(
    fc.property(fc.constant(null), () => {
      const { result } = renderHook(() => useMotionVariants());
      const hidden = result.current.fadeUp.hidden as { opacity: number; y: number };
      expect(hidden.opacity).toBe(1);
      expect(hidden.y).toBe(0);
    }),
    { numRuns: 100 }
  );
  vi.restoreAllMocks();
});
```

### Integration / Smoke Checks
- `npm run build` completes without errors — validates routing, static export, and Cloudflare compatibility.
- Absence of old route directories in the file tree.
- No `dark:` Tailwind classes in `app/` or `components/` (grep check in CI).
- No `fetch()` or async data-loading patterns in component files (grep check in CI).
