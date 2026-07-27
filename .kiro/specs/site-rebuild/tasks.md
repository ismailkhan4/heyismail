# Implementation Plan: site-rebuild

## Overview

Collapse heyismail.com from a multi-route Next.js app into a single scrollable page. The work proceeds in six logical phases: (1) delete old routes, (2) establish the type system and content layer, (3) add animation utilities, (4) wire up global styles and layout, (5) build every UI/layout/section component, and (6) compose the final page and verify the build. Property-based tests for `useScrollY` and `useMotionVariants` are placed immediately after their respective implementations so failures surface early.

---

## Tasks

- [x] 1. Delete old route directories
  - Remove `app/process/`, `app/builds/` (including `app/builds/[slug]/`), `app/about/`, and `app/contact/` in their entirety.
  - After deletion, verify no `<Link>` or `<a>` in surviving files points to `/process`, `/builds`, `/about`, or `/contact` as standalone routes.
  - _Requirements: 1.2, 1.3, 1.5_

- [x] 2. Set up type system and content layer
  - [x] 2.1 Create `lib/types/content.ts`
    - Export exactly four types: `Project`, `Testimonial`, `Stat`, `TechItem` with the field shapes specified in the design.
    - `Stat` must have `id: string`, `value: string`, `label: string`.
    - `Testimonial` must have `id`, `quote`, `authorName`, `authorRole`, `isPlaceholder: boolean`.
    - No runtime values — types only.
    - _Requirements: 18.2_

  - [x] 2.2 Create `lib/content/siteConfig.ts`
    - Export `calLink = "https://cal.com/heyismail/15min"`.
    - Export `whatsappLink = "https://wa.me/<REPLACE_WITH_REAL_NUMBER>"`.
    - Export `coaching` string (exact text from Requirements 9.2).
    - _Requirements: 2.1, 2.4, 9.2_

  - [x] 2.3 Create `lib/content/portfolio.ts`
    - Import `Project` from `@/lib/types/content`.
    - Export `portfolio: Project[]` — exactly two entries: LinkUp OS and Motiv8 with the exact `results` strings from Requirements 2.5.
    - _Requirements: 2.1, 2.2, 2.5_

  - [x] 2.4 Create `lib/content/testimonials.ts`
    - Import `Testimonial` from `@/lib/types/content`.
    - Export `testimonials: Testimonial[]` — exactly two placeholder entries (`isPlaceholder: true`).
    - _Requirements: 2.1, 2.2, 2.6_

  - [x] 2.5 Create `lib/content/stats.ts`
    - Import `Stat` from `@/lib/types/content`.
    - Export `stats: Stat[]` — exactly four entries in the order and with the values from Requirements 2.7.
    - _Requirements: 2.1, 2.2, 2.7_

  - [x] 2.6 Create `lib/content/techStack.ts`
    - Import `TechItem` from `@/lib/types/content`.
    - Export `techStack: TechItem[]` — exactly five entries: Next.js, Supabase, Stripe, OpenAI API, Vercel.
    - _Requirements: 2.1, 2.2, 2.8_

  - [x] 2.7 Create `lib/content/about.ts`
    - Export `about: { paragraphs: [string, string] }` with the exact two paragraph strings from Requirements 10.3.
    - _Requirements: 10.2, 10.3_

- [x] 3. Create animation utilities
  - [x] 3.1 Create `lib/animations.ts`
    - Export `fadeUp: Variants` — `hidden: { opacity: 0, y: 28 }`, `visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0,0,0.2,1] } }`.
    - Export `stagger: Variants` — `hidden: {}`, `visible: { transition: { staggerChildren: 0.1 } }`.
    - Export `fadeUpReduced: Variants` and `staggerReduced: Variants` (both produce no motion for reduced-motion override).
    - _Requirements: 15.1, 15.2, 15.5_

  - [x] 3.2 Create `lib/hooks/useScrollY.ts`
    - `"use client"` hook `useScrollY(threshold: number = 60): boolean`.
    - Returns `true` when `window.scrollY > threshold`, `false` otherwise.
    - Registers a passive scroll listener; runs `handleScroll()` on mount for mid-scroll page loads; cleans up on unmount.
    - _Requirements: 4.2, 4.3_

  - [x] 3.3 Write property test for `useScrollY` (Property 1)
    - Install Vitest + `@testing-library/react` if not already present; add `vitest.config.ts` configured for jsdom.
    - **Property 1: Scroll threshold produces correct boolean**
    - **Validates: Requirements 4.2, 4.3**
    - For any integer in `[61, 100_000]`, mock `window.scrollY` to that value and assert `useScrollY(60)` returns `true`.
    - For any integer in `[-1000, 60]`, mock `window.scrollY` to that value and assert `useScrollY(60)` returns `false`.
    - Use `fast-check` with `numRuns: 100` for both sub-assertions.
    - _Requirements: 4.2, 4.3_

  - [x] 3.4 Create `lib/hooks/useMotionVariants.ts`
    - `"use client"` hook `useMotionVariants()`.
    - Calls `useReducedMotion()` from `framer-motion`.
    - Returns `{ fadeUp: fadeUpReduced, stagger: staggerReduced }` when reduced motion is active; otherwise returns the full `{ fadeUp, stagger }` from `lib/animations.ts`.
    - _Requirements: 15.5_

  - [x] 3.5 Write property test for `useMotionVariants` (Property 2)
    - **Property 2: Reduced-motion disables all motion in animation variants**
    - **Validates: Requirements 15.5**
    - Spy on `framer-motion.useReducedMotion` to return `true`.
    - Use `fast-check` (`fc.constant(null)`, `numRuns: 100`) to assert that `result.current.fadeUp.hidden` has `opacity: 1` and `y: 0`.
    - Restore mocks after the test.
    - _Requirements: 15.5_

- [x] 4. Checkpoint — content layer and animation utilities
  - Run `npx tsc --noEmit` and confirm zero errors before proceeding.
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Update global styles and root layout
  - [x] 5.1 Update `app/globals.css`
    - Replace file contents with `@import "tailwindcss"` plus the four CSS custom properties: `--light: #FBFFFC`, `--success: #14A714`, `--primary: #06382C`, `--dark: #0F0F0F`.
    - Add base rules: `body { font-family: var(--font-body); background-color: var(--light); color: var(--dark); }` and `h1, h2, h3 { font-family: var(--font-display); }`.
    - Remove any existing `@tailwind base/components/utilities` directives and stale CSS variable declarations.
    - _Requirements: 3.1, 3.2, 3.3, 3.4_

  - [x] 5.2 Update `app/layout.tsx`
    - Import `Fraunces` and `Inter` from `next/font/google`.
    - Configure Fraunces with `variable: "--font-display"`, weights `["400","600","700"]`, `display: "swap"`.
    - Configure Inter with `variable: "--font-body"`, weights `["400","500","600","700"]`, `display: "swap"`.
    - Apply `${fraunces.variable} ${inter.variable}` to the `<html>` element's `className`.
    - Export the `metadata` object: `title: "Ismail Muhammad — Software Engineer"`, `description: "Software engineer building software, web, and mobile applications for premium clients since 2018."`, Open Graph `og:title`, `og:description`, and `og:image` (placeholder path acceptable).
    - Remove `globals.css` import from `app/styles/globals.css` if still pointing to old path; import from `app/globals.css` (or wherever it now lives after 5.1).
    - _Requirements: 3.3, 3.4, 14.1, 14.2, 14.3, 14.4_

- [x] 6. Build UI primitives
  - [x] 6.1 Create `components/ui/Button.tsx`
    - Use `class-variance-authority` (`cva`) to define `buttonVariants` with `variant` (`primary`, `outline`) and `size` (`md`, `sm`) as specified in the design.
    - `ButtonProps` extends `React.AnchorHTMLAttributes<HTMLAnchorElement>` and `VariantProps<typeof buttonVariants>`, plus `href: string` and `external?: boolean`.
    - When `external` is true, add `target="_blank" rel="noopener noreferrer"`.
    - Use `cn()` from `@/lib/utils` for class merging.
    - _Requirements: 18.3, 18.4_

  - [x] 6.2 Create `components/ui/SectionHeading.tsx`
    - Props: `eyebrow: string`, `heading: string`, `subheading?: string`, `theme?: "dark" | "light"`, `className?: string`.
    - Eyebrow renders as a `<p>` or `<span>` in Inter, uppercase, wide letter-spacing.
    - Heading renders as `<h2>` (or `<h1>` if `asH1` prop needed — infer from usage context; default `<h2>`).
    - `theme="dark"` → `#0F0F0F` text (for light-bg sections); `theme="light"` → `#FBFFFC` text (for dark-bg sections).
    - _Requirements: 3.3, 18.4_

  - [x] 6.3 Create `components/ui/StatItem.tsx`
    - Props: `stat: Stat` (imported from `@/lib/types/content`).
    - Renders `stat.value` in Fraunces `text-4xl` and `stat.label` in Inter `text-sm` beneath it.
    - _Requirements: 6.3, 18.4_

  - [x] 6.4 Create `components/ui/TechBadge.tsx`
    - Props: `item: TechItem` (imported from `@/lib/types/content`).
    - Renders a pill/badge displaying `item.name`; reuse `cn()` for styling.
    - _Requirements: 7.6, 11.2, 18.4_

  - [x] 6.5 Create `components/ui/PortfolioCard.tsx`
    - Props: `project: Project` (imported from `@/lib/types/content`).
    - Renders: `project.clientDescriptor`, `<h3>{project.title}</h3>`, `project.summary`, first two `project.features` entries as a list with lucide `Check` icons, first two `project.results` entries, and `project.stack` as `<TechBadge>` components.
    - Apply `fadeUp` variant animation via `useMotionVariants()` with `whileInView` and `viewport={{ once: true }}`.
    - _Requirements: 7.4, 7.5, 7.6, 7.7, 18.4_

  - [x] 6.6 Create `components/ui/TestimonialCard.tsx`
    - Props: `testimonial: Testimonial` (imported from `@/lib/types/content`).
    - Renders: `testimonial.quote`, `testimonial.authorName`, `testimonial.authorRole`.
    - When `testimonial.isPlaceholder === true`, render a visible "Placeholder" badge (small, visually distinct — e.g. a coloured chip or labelled `<span>`).
    - _Requirements: 8.2, 8.3, 18.4_

- [x] 7. Build layout components
  - [x] 7.1 Create `components/layout/Header.tsx`
    - `"use client"` component, no external props.
    - Use `useScrollY(60)` to drive background/text swap: transparent on ≤60 px, `bg-[--light]/96 backdrop-blur-md` on >60 px.
    - Render wordmark "Ismail Muhammad" in Fraunces weight 600.
    - Four desktop anchor links via `NAV_ITEMS` constant (`#portfolio`, `#coaching`, `#about`, `#contact`).
    - Primary "Book a call" `<Button>` linking to `siteConfig.calLink` with `external`.
    - Hide desktop nav / CTA and show hamburger at `<md`; full nav at `md+`.
    - Mobile overlay: full-viewport `100svh`, `bg-[--primary]` (#06382C), `AnimatePresence` + `motion.div` enter/exit.
    - Body scroll lock (`document.body.style.overflow = "hidden"`) when mobile menu is open; restore on close/unmount.
    - Escape key closes the mobile menu (keydown listener scoped to `mobileOpen === true`).
    - Hamburger button: `aria-expanded={mobileOpen}`, `aria-controls="mobile-menu"`.
    - Overlay: `id="mobile-menu"`, `role="dialog"`, `aria-modal="true"`.
    - Mount animation: `initial={{ y: -80, opacity: 0 }}` / `animate={{ y: 0, opacity: 1 }}` via Framer Motion.
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4.10, 16.4, 16.5, 16.6_

  - [x] 7.2 Create `components/layout/Footer.tsx`
    - `"use client"` component, no external props.
    - Render `© {new Date().getFullYear()} Ismail Muhammad`.
    - Four anchor links: "Work" → `#portfolio`, "Coaching" → `#coaching`, "About" → `#about`, "Contact" → `#contact`.
    - Tagline "Based in Lahore, Pakistan · Working with clients globally."
    - Background `--light` (`#FBFFFC`) with 1px top border using `--primary` at ~0.15 opacity.
    - No links to Old_Routes.
    - _Requirements: 13.1, 13.2, 13.3, 13.4_

- [x] 8. Build section components
  - [x] 8.1 Create `components/sections/Hero.tsx`
    - `"use client"` component, no external props; imports from `siteConfig`.
    - Section `id="hero"`.
    - Eyebrow "SOFTWARE ENGINEER" in Inter, uppercase, wide letter-spacing.
    - `<h1>` "I build software, web, and mobile applications for premium clients."
    - Subheadline paragraph (exact text from Requirements 5.3).
    - Primary "Book a call" `<Button>` linking to `siteConfig.calLink`, `external`.
    - Secondary outline "See the work" `<Button>` linking to `#portfolio` (no `external`).
    - Mount animation (`initial`/`animate`, NOT `whileInView`) using `useMotionVariants()` `stagger` + `fadeUp` — eyebrow, h1, subheadline, and CTA row each wrapped in `<motion.div variants={fadeUp}>`.
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 15.3, 15.4, 15.5_

  - [x] 8.2 Create `components/sections/ProofBar.tsx`
    - `"use client"` component; imports from `stats.ts`.
    - Section `id="proof"`.
    - Renders exactly four `<StatItem>` components from `stats`.
    - Layout: `grid-cols-2` on mobile, `grid-cols-4` on md+.
    - Scroll-triggered animation via `useMotionVariants()` `stagger` wrapper + `fadeUp` children, `whileInView`, `viewport={{ once: true }}`.
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 15.3_

  - [x] 8.3 Create `components/sections/Portfolio.tsx`
    - `"use client"` component; imports from `portfolio.ts`.
    - Section `id="portfolio"`.
    - `<SectionHeading>` with eyebrow "SELECTED WORK", h2 "Software shipped for real clients, with real results.", subheading "Two production platforms built end-to-end — from architecture to launch — each delivered in seven days."
    - Grid: `grid-cols-1` on mobile, `grid-cols-2 gap-8` on md+.
    - `<motion.div variants={stagger}>` wrapping the grid; each `<PortfolioCard>` wrapped in `<motion.div variants={fadeUp}>`.
    - `whileInView`, `viewport={{ once: true }}`.
    - _Requirements: 7.1, 7.2, 7.3, 7.7, 15.3_

  - [x] 8.4 Create `components/sections/Testimonials.tsx`
    - `"use client"` component; imports from `testimonials.ts`.
    - Section `id="testimonials"`.
    - `<SectionHeading>` with eyebrow "WHAT CLIENTS SAY", h2 "Trusted by the people whose businesses run on this software."
    - Responsive grid: `grid-cols-1` below md, `grid-cols-2` on md+.
    - Scroll animation via `useMotionVariants()` `stagger` + `fadeUp`, `whileInView`, `viewport={{ once: true }}`.
    - _Requirements: 8.1, 8.2, 8.4, 8.5, 15.3_

  - [x] 8.5 Create `components/sections/Coaching.tsx`
    - `"use client"` component; imports `coaching` and `whatsappLink` from `siteConfig`.
    - Section `id="coaching"`.
    - `<SectionHeading>` with eyebrow "ALSO: COACHING", h2 "I coach students building their first full-stack applications."
    - Body paragraph sourced from `coaching`.
    - "Message me on WhatsApp" `<Button>` linking to `siteConfig.whatsappLink`, `external`.
    - Scroll animation via `useMotionVariants()`, `whileInView`, `viewport={{ once: true }}`.
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 15.3_

  - [x] 8.6 Create `components/sections/About.tsx`
    - `"use client"` component; imports from `about.ts`.
    - Section `id="about"`.
    - `<SectionHeading>` with eyebrow "ABOUT", h2 "Started self-taught in 2018. Still writing every line."
    - Renders exactly two `<p>` elements from `about.paragraphs`.
    - Scroll animation via `useMotionVariants()` `fadeUp`, `whileInView`, `viewport={{ once: true }}`.
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 15.3_

  - [x] 8.7 Create `components/sections/TechStack.tsx`
    - `"use client"` component; imports from `techStack.ts`.
    - Section `id="tech"`.
    - `<SectionHeading>` with eyebrow "HOW IT'S BUILT", h2 "The stack behind every platform I ship."
    - Wrapping flex row of exactly five `<TechBadge>` components.
    - Scroll animation via `useMotionVariants()` `stagger` + `fadeUp`, `whileInView`, `viewport={{ once: true }}`.
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 15.3_

  - [x] 8.8 Create `components/sections/Contact.tsx`
    - `"use client"` component; imports `calLink` and `whatsappLink` from `siteConfig`.
    - Section `id="contact"`.
    - `<SectionHeading>` with eyebrow "GET IN TOUCH", h2 "Have a project in mind?", subheading "Book a short call, or reach out directly — I respond to every message myself."
    - Primary "Book a call" `<Button>` linking to `calLink`, `external`.
    - Outline "WhatsApp" `<Button>` linking to `whatsappLink`, `external`.
    - Scroll animation via `useMotionVariants()`, `whileInView`, `viewport={{ once: true }}`.
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 15.3_

- [x] 9. Checkpoint — section components
  - Run `npx tsc --noEmit` and confirm zero errors before proceeding.
  - Ensure all tests pass, ask the user if questions arise.

- [x] 10. Compose `app/page.tsx` and wire everything together
  - [x] 10.1 Rewrite `app/page.tsx`
    - Add `"use client"` directive at the top.
    - Import and render in document order: `Header`, `Hero`, `ProofBar`, `Portfolio`, `Testimonials`, `Coaching`, `About`, `TechStack`, `Contact`, `Footer`.
    - No direct imports from `lib/content/` — each section handles its own imports.
    - No `async` function, no `Suspense`, no data fetching.
    - All content sections constrained to `max-w-6xl mx-auto` (enforced at the section level; verify each section applies this).
    - _Requirements: 1.1, 1.4, 17.1, 17.2, 17.4_

- [x] 11. Final verification
  - [x] 11.1 TypeScript check
    - Run `npx tsc --noEmit`.
    - Resolve any type errors before proceeding — zero errors required.
    - _Requirements: 18.1, 18.3_

  - [x] 11.2 Run `npm run build`
    - Execute `npm run build` and confirm it completes without errors.
    - Confirms routing, static export, and Cloudflare compatibility.
    - _Requirements: 17.3_

- [x] 12. Final checkpoint
  - Ensure all tests pass, ask the user if questions arise.

---

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP — but the PBT tasks (3.3, 3.5) are strongly recommended as they guard the two pure hook functions.
- `fast-check` and `@testing-library/react` are not in `package.json` yet; task 3.3 is responsible for adding them and a `vitest.config.ts`.
- Old components under `components/sections/` (the pre-rebuild versions) will be overwritten by tasks 8.1–8.8. The old `app/components/` files (`Footer.tsx`, `Navigation.tsx`, `PageLayout.tsx`) become unused after task 10.1 and may be deleted at that point.
- `app/globals.css` currently lives at `app/styles/globals.css` — task 5.1 moves it to `app/globals.css` (standard Next.js location); update the import in `app/layout.tsx` accordingly in task 5.2.
- No `dark:` Tailwind classes should appear anywhere in `app/` or `components/` after this rebuild (Requirement 3.7).
- All external `<a>` / `<Button external>` elements must carry `rel="noopener noreferrer"` (Requirements 4.6, 5.4, 9.3, 12.3, 12.4).

---

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1", "2.1"] },
    { "id": 1, "tasks": ["2.2", "2.3", "2.4", "2.5", "2.6", "2.7"] },
    { "id": 2, "tasks": ["3.1"] },
    { "id": 3, "tasks": ["3.2", "3.4"] },
    { "id": 4, "tasks": ["3.3", "3.5", "5.1"] },
    { "id": 5, "tasks": ["5.2"] },
    { "id": 6, "tasks": ["6.1", "6.2", "6.3", "6.4"] },
    { "id": 7, "tasks": ["6.5", "6.6"] },
    { "id": 8, "tasks": ["7.1", "7.2", "8.1", "8.2", "8.3", "8.4", "8.5", "8.6", "8.7", "8.8"] },
    { "id": 9, "tasks": ["10.1"] },
    { "id": 10, "tasks": ["11.1"] },
    { "id": 11, "tasks": ["11.2"] }
  ]
}
```
