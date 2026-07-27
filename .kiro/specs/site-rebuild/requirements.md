# Requirements Document

## Introduction

Rebuild heyismail.com from a multi-route site into a single-page, section-based site. The current site has separate routes for `/process`, `/builds`, `/about`, and `/contact`. The rebuilt site consolidates everything into a single scrollable page at `/` composed of stacked sections connected by anchor navigation. The site's positioning shifts from "Platform Builder for LinkedIn Creators" to a broader identity: a self-taught software engineer since 2018 who builds software, web, and mobile applications for premium clients, with a secondary coaching offering.

The redesign adopts a new design system (Fraunces headings + Inter body, Tailwind CSS v4 CSS-variable tokens, Framer Motion animations) and a strict DRY content architecture where all copy lives in typed data files under `lib/content/*.ts`.

---

## Glossary

- **Site**: The heyismail.com Next.js 15 App Router application deployed on Cloudflare Workers.
- **Single-Page Layout**: A site architecture where all content sections render on one route (`/`) and navigation uses in-page anchor links.
- **Section**: A full-width block of content within the single-page layout, identified by an HTML `id` attribute for anchor navigation.
- **Header**: The sticky navigation component rendered above all sections.
- **Footer**: The bottom component rendered below all sections.
- **Hero**: The topmost section introducing Ismail's positioning and primary CTAs.
- **ProofBar**: A horizontal statistics bar immediately below the Hero.
- **Portfolio**: A section showcasing two shipped production platforms (LinkUp OS and Motiv8).
- **Testimonials**: A section displaying client testimonial cards.
- **Coaching**: A section presenting the secondary coaching offering.
- **About**: A section with Ismail's personal background.
- **TechStack**: A section listing technologies used in every build.
- **Contact**: The final section with booking and WhatsApp CTAs.
- **PortfolioCard**: A card component rendering one portfolio project.
- **TestimonialCard**: A card component rendering one testimonial.
- **StatItem**: A display component rendering one statistic (large numeral + label).
- **TechBadge**: A pill component rendering one technology name.
- **SectionHeading**: A reusable heading component used across all sections.
- **Button**: A reusable button/link component with primary and outline variants.
- **Content_Layer**: The typed data files under `lib/content/*.ts` that are the single source of truth for all copy.
- **siteConfig**: The `lib/content/siteConfig.ts` file containing global site constants (calLink, whatsappLink, metadata).
- **Fraunces**: The Google Font used for all headings and display text.
- **Inter**: The Google Font used for all body text.
- **Old_Routes**: The existing `app/process/`, `app/builds/`, `app/builds/[slug]`, `app/about/`, and `app/contact/` directories to be deleted.
- **Anchor Navigation Link**: An `<a>` element whose `href` begins with `#` and whose target is an `id` on the current page.

---

## Requirements

---

### Requirement 1: Route Consolidation

**User Story:** As a site visitor, I want all content on a single scrollable page, so that I can navigate the site without full page loads.

#### Acceptance Criteria

1. THE Site SHALL expose exactly one public route: `/` (rendered by `app/page.tsx`).
2. IF the Old_Routes directories (`app/process/`, `app/builds/`, `app/builds/[slug]`, `app/about/`, `app/contact/`) exist, THEN THE Site SHALL delete them so no route other than `/` is reachable.
3. THE Site SHALL NOT contain any `<Link>` or `<a>` elements pointing to `/process`, `/builds`, `/about`, or `/contact` as separate page routes.
4. WHEN a user clicks an Anchor Navigation Link, THE browser SHALL scroll to the element on the same page whose `id` matches the fragment, without triggering a full page navigation.
5. WHEN a visitor navigates to any Old_Routes URL (e.g. `/about`, `/builds`), THE Site SHALL return a 404 response so no stale content is served.

---

### Requirement 2: Content Architecture

**User Story:** As a developer maintaining the site, I want all copy stored in typed data files, so that updating content never requires editing component files.

#### Acceptance Criteria

1. THE Content_Layer SHALL reside exclusively under `lib/content/` with exactly the following files: `siteConfig.ts`, `portfolio.ts`, `testimonials.ts`, `stats.ts`, `techStack.ts`.
2. THE Content_Layer SHALL export typed constants explicitly annotated with the types defined in `lib/types/content.ts` (`Project`, `Testimonial`, `Stat`, `TechItem`) such that removing an annotation causes a TypeScript compile error.
3. THE Site SHALL NOT contain hardcoded headings, body text, button labels, or link text inside any `.tsx` component file; all such strings SHALL be imported from `lib/content/*.ts`.
4. THE `siteConfig.ts` SHALL export `calLink` with value `"https://cal.com/heyismail/15min"` and `whatsappLink` with a placeholder value of `"https://wa.me/<REPLACE_WITH_REAL_NUMBER>"`.
5. THE `portfolio.ts` SHALL export a typed array of exactly two `Project` objects: one for LinkUp OS with results including `"2,500+ paying members"` and `"$2.3M+ in tracked revenue"`, and one for Motiv8 with results including `"10,000+ members"` and `"94% program completion rate"`.
6. THE `testimonials.ts` SHALL export a typed array of exactly two `Testimonial` objects, each with fields `id`, `quote`, `authorName`, `authorRole`, and `isPlaceholder`, both with `isPlaceholder: true`.
7. THE `stats.ts` SHALL export a typed array of exactly four `Stat` objects, each with a `value` field and a `label` field: `{ value: "8+", label: "Years building software" }`, `{ value: "2", label: "Platforms shipped in 7 days each" }`, `{ value: "12,500+", label: "Users served across delivered platforms" }`, `{ value: "$2.3M+", label: "Revenue tracked through delivered platforms" }`.
8. THE `techStack.ts` SHALL export a typed array of exactly five `TechItem` objects: Next.js, Supabase, Stripe, OpenAI API, Vercel.

---

### Requirement 3: Design System

**User Story:** As a visitor, I want a visually consistent, light-themed site, so that the brand feels polished and trustworthy.

#### Acceptance Criteria

1. THE Site SHALL use a light theme only; no dark-mode styles or `prefers-color-scheme` overrides SHALL be applied.
2. THE Site SHALL define four CSS custom properties in `globals.css`: `--light: #FBFFFC`, `--success: #14A714`, `--primary: #06382C`, `--dark: #0F0F0F`.
3. THE Site SHALL load Fraunces from `next/font/google`, expose it via a CSS variable named `--font-display`, and apply `font-family: var(--font-display)` to all `h1`–`h3` elements.
4. THE Site SHALL load Inter from `next/font/google`, expose it via a CSS variable named `--font-body`, and apply `font-family: var(--font-body)` to the `body` element and all paragraph text.
5. THE Site SHALL NOT use CSS gradients for decorative color fills. Any decorative overlay SHALL use a solid color at opacity no greater than 0.25 with blur radius no greater than 24px. Subtle box shadows and `rounded-lg` corner radii are permitted.
6. THE Site SHALL constrain all content sections to a maximum width of `max-w-6xl` (`72rem`), centered horizontally with `mx-auto`.
7. THE Site SHALL NOT include any `dark:` Tailwind variant classes in any file under `app/` or `components/`.

---

### Requirement 4: Header / Navigation Component

**User Story:** As a visitor, I want a persistent navigation bar with clear anchor links and a booking CTA, so that I can reach any section from anywhere on the page.

#### Acceptance Criteria

1. THE Header SHALL be sticky, remaining fixed at the top of the viewport at all times (`position: fixed` or `sticky` with `top: 0`).
2. WHILE the page scroll position is greater than 60 pixels, THE Header SHALL apply a `--light` (`#FBFFFC`) background and a backdrop-blur effect.
3. WHILE the page scroll position is 60 pixels or less, THE Header SHALL render with a transparent background.
4. THE Header SHALL display the wordmark "Ismail Muhammad" in Fraunces weight 600.
5. THE Header SHALL render four desktop anchor links: "Work" → `#portfolio`, "Coaching" → `#coaching`, "About" → `#about`, "Contact" → `#contact`.
6. THE Header SHALL render a primary CTA button labelled "Book a call" linking to `siteConfig.calLink`, opening in a new tab with `rel="noopener noreferrer"`.
7. WHEN the viewport width is below 768px (`md` breakpoint), THE Header SHALL hide the desktop nav links and CTA button and display a hamburger menu icon instead.
8. WHEN the hamburger icon is activated, THE Header SHALL render a mobile overlay sheet (light `--light` background) containing the four anchor links and the "Book a call" CTA.
9. WHEN a mobile sheet anchor link is activated, THE Header SHALL close the mobile sheet and scroll to the target section.
10. WHEN the mobile sheet is open, THE Header SHALL prevent body scroll.

---

### Requirement 5: Hero Section

**User Story:** As a visitor arriving on the site, I want an immediate, clear statement of who Ismail is and what he does, so that I can decide in seconds whether to engage further.

#### Acceptance Criteria

1. THE Hero Section SHALL render an eyebrow label with the text "SOFTWARE ENGINEER" in Inter, uppercase, wide letter-spacing.
2. THE Hero Section SHALL render an `<h1>` with the text "I build software, web, and mobile applications for premium clients."
3. THE Hero Section SHALL render a subheadline paragraph with the text: "Self-taught engineer since 2018. I've shipped production platforms serving thousands of users and tracking millions in revenue — built for founders and brands who need software that works, not a pitch deck."
4. THE Hero Section SHALL render a primary CTA button labelled "Book a call" linking to `siteConfig.calLink`, opening in a new tab with `rel="noopener noreferrer"`.
5. THE Hero Section SHALL render a secondary outline CTA button labelled "See the work" that scrolls the viewport to `#portfolio` when activated.
6. WHEN the Hero Section mounts, THE Hero Section SHALL animate its eyebrow, h1, subheadline, and CTA row sequentially using Framer Motion `initial` / `animate` with the `fadeUp` + `stagger` variants (not `whileInView`).

---

### Requirement 6: ProofBar Section

**User Story:** As a visitor, I want to see key numbers at a glance, so that I can quickly gauge Ismail's credibility.

#### Acceptance Criteria

1. THE ProofBar Section SHALL carry the HTML attribute `id="proof"`.
2. THE ProofBar Section SHALL render exactly four `StatItem` components, one per entry in `stats.ts`, in the order they appear in the array.
3. EACH `StatItem` SHALL display the stat's `value` field in Fraunces font at `text-4xl` size (or equivalent `font-display` class), and the stat's `label` field in Inter font at `text-sm` size (or equivalent `font-body` class) beneath it.
4. THE ProofBar Section SHALL display the four `StatItem` components in a single 4-column horizontal row on viewports 768px and above, and in a 2×2 grid on viewports below 768px.

---

### Requirement 7: Portfolio Section

**User Story:** As a potential client, I want to see detailed information about real projects Ismail has shipped, so that I can evaluate his capabilities.

#### Acceptance Criteria

1. THE Portfolio Section SHALL carry the HTML attribute `id="portfolio"`.
2. THE Portfolio Section SHALL render an eyebrow label "SELECTED WORK", an `<h2>` "Software shipped for real clients, with real results.", and a subheadline "Two production platforms built end-to-end — from architecture to launch — each delivered in seven days."
3. THE Portfolio Section SHALL render one `PortfolioCard` for each `Project` in `portfolio.ts`, in a `grid` layout with one column on mobile and `grid-cols-2 gap-8` on viewports 768px and above.
4. THE PortfolioCard for LinkUp OS SHALL display: `Project.clientDescriptor`, `Project.title` ("LinkUp OS") in an `<h3>`, `Project.summary`, the first two entries of `Project.features` as a list with lucide `Check` icons, the first two entries of `Project.results` (including "2,500+ paying members" and "$2.3M+ in tracked revenue"), and `Project.stack` as `TechBadge` components.
5. THE PortfolioCard for Motiv8 SHALL display: `Project.clientDescriptor`, `Project.title` ("Motiv8") in an `<h3>`, `Project.summary`, the first two entries of `Project.features` as a list with lucide `Check` icons, the first two entries of `Project.results` (including "10,000+ members" and "94% program completion rate"), and `Project.stack` as `TechBadge` components.
6. THE PortfolioCard SHALL render each entry of `Project.stack` as a `TechBadge` component displaying the stack name string.
7. WHEN a `PortfolioCard` enters the viewport, THE PortfolioCard SHALL animate with the `fadeUp` variant using `whileInView` and `viewport={{ once: true }}`. THE grid container SHALL apply the `stagger` variant so cards animate sequentially.

---

### Requirement 8: Testimonials Section

**User Story:** As a potential client, I want to see what existing clients say about working with Ismail, so that I can build trust before making contact.

#### Acceptance Criteria

1. THE Testimonials Section SHALL carry the HTML attribute `id="testimonials"`. It SHALL render an eyebrow label "WHAT CLIENTS SAY" and an `<h2>` "Trusted by the people whose businesses run on this software."
2. THE Testimonials Section SHALL render one `TestimonialCard` for each `Testimonial` in `testimonials.ts`. Each card SHALL display `Testimonial.quote`, `Testimonial.authorName`, and `Testimonial.authorRole`.
3. WHEN a `Testimonial` object has `isPlaceholder: true`, THE `TestimonialCard` SHALL render a visible label with the text "Placeholder" that a developer can distinguish at a glance (e.g. a small badge visible in the component's rendered output).
4. THE Testimonials Section SHALL render the `TestimonialCard` components in a responsive grid with one column on viewports below 768px and two columns on viewports 768px and above.
5. WHEN the Testimonials Section enters the viewport, THE Testimonials Section SHALL animate its cards with the `fadeUp` + `stagger` Framer Motion variants using `whileInView` and `viewport={{ once: true }}`.

---

### Requirement 9: Coaching Section

**User Story:** As a student looking to learn full-stack development, I want to find out about Ismail's coaching offering, so that I can reach out to him directly.

#### Acceptance Criteria

1. THE Coaching Section SHALL carry the HTML attribute `id="coaching"`.
2. THE Coaching Section SHALL render an eyebrow label "ALSO: COACHING", an `<h2>` "I coach students building their first full-stack applications.", and a body paragraph whose text is sourced from a `coaching` field exported by `lib/content/siteConfig.ts`. The field value SHALL be: "Alongside client work, I coach students who want to go from tutorials to shipping real, full-stack web applications — covering architecture decisions, working with modern frameworks, and the habits that separate a finished project from an abandoned one. This is hands-on, practical, and built around what you're actually trying to build."
3. THE Coaching Section SHALL render a single CTA button labelled "Message me on WhatsApp" linking to `siteConfig.whatsappLink`, opening in a new tab with `rel="noopener noreferrer"`.
4. WHEN the Coaching Section enters the viewport, THE Coaching Section SHALL animate its content with the `fadeUp` + `stagger` Framer Motion variants using `whileInView` and `viewport={{ once: true }}`.

---

### Requirement 10: About Section

**User Story:** As a visitor, I want to learn about Ismail's background and journey, so that I can decide whether he is someone I want to work with.

#### Acceptance Criteria

1. THE About Section SHALL carry the HTML attribute `id="about"`.
2. THE About Section SHALL render an eyebrow label "ABOUT", an `<h2>` "Started self-taught in 2018. Still writing every line.", and exactly two body paragraphs sourced from an `about` object exported by `lib/content/about.ts`.
3. THE `lib/content/about.ts` file SHALL export an object with a `paragraphs` field typed as `[string, string]` (a tuple of exactly two strings). Paragraph 1 SHALL be: "I started as a self-taught software engineer in 2018, with no formal CS background — just a habit of building things until they worked. That habit hasn't changed." Paragraph 2 SHALL be: "Today I build software, web, and mobile applications for premium clients and brands who need production-grade work, not a prototype. Every project I take on, I build end-to-end — architecture, implementation, and launch."
4. WHEN the About Section enters the viewport, THE About Section SHALL animate its content with the `fadeUp` Framer Motion variant using `whileInView` and `viewport={{ once: true }}`.

---

### Requirement 11: TechStack Section

**User Story:** As a technical decision-maker, I want to see which technologies power Ismail's builds, so that I can assess fit with my existing infrastructure.

#### Acceptance Criteria

1. THE TechStack Section SHALL carry the HTML attribute `id="tech"`. It SHALL render an eyebrow label "HOW IT'S BUILT" and an `<h2>` "The stack behind every platform I ship."
2. THE TechStack Section SHALL render one `TechBadge` for each `TechItem` in `techStack.ts`, displaying only the `TechItem.name` field as its text content.
3. THE TechStack Section SHALL display exactly five `TechBadge` components in a wrapping flex row: Next.js, Supabase, Stripe, OpenAI API, Vercel.
4. WHEN the TechStack Section enters the viewport, THE TechStack Section SHALL animate its badge row with the `fadeUp` + `stagger` Framer Motion variants using `whileInView` and `viewport={{ once: true }}`.

---

### Requirement 12: Contact Section

**User Story:** As a visitor ready to engage, I want clear, friction-free ways to reach Ismail, so that I can start a conversation.

#### Acceptance Criteria

1. THE Contact Section SHALL carry the HTML attribute `id="contact"`.
2. THE Contact Section SHALL render an eyebrow label "GET IN TOUCH", an `<h2>` "Have a project in mind?", and a subheadline "Book a short call, or reach out directly — I respond to every message myself."
3. THE Contact Section SHALL render a primary CTA button labelled "Book a call" linking to `siteConfig.calLink`, opening in a new tab with `rel="noopener noreferrer"`.
4. THE Contact Section SHALL render a secondary CTA button labelled "WhatsApp" linking to `siteConfig.whatsappLink`, opening in a new tab with `rel="noopener noreferrer"`.

---

### Requirement 13: Footer Component

**User Story:** As a visitor who has scrolled to the bottom, I want quick access to navigation and key information, so that I do not need to scroll back to the top.

#### Acceptance Criteria

1. THE Footer SHALL render the copyright line "© [current year] Ismail Muhammad", where the year is derived from `new Date().getFullYear()` at build time or render time.
2. THE Footer SHALL render four anchor links: "Work" → `#portfolio`, "Coaching" → `#coaching`, "About" → `#about`, "Contact" → `#contact`. THE Footer SHALL NOT contain links to any Old_Routes.
3. THE Footer SHALL render the tagline "Based in Lahore, Pakistan · Working with clients globally."
4. THE Footer SHALL use a background of `#FBFFFC` (`--light`) with a 1px solid top border using `--primary` color at reduced opacity (e.g. `border-color: rgb(6 56 44 / 0.15)`).

---

### Requirement 14: Page Metadata

**User Story:** As a search engine, I want accurate metadata, so that the site is correctly indexed and shared.

#### Acceptance Criteria

1. THE Site SHALL set the default page `<title>` to `"Ismail Muhammad — Software Engineer"` via the Next.js `metadata` export in `app/layout.tsx`.
2. THE Site SHALL set the `<meta name="description">` to `"Software engineer building software, web, and mobile applications for premium clients since 2018."`.
3. THE Site SHALL set Open Graph `og:title` to `"Ismail Muhammad — Software Engineer"` and `og:description` to the same value as the meta description.
4. THE Site SHALL set `og:image` to a static image path under `/public/` (placeholder path acceptable at implementation time, but the property SHALL be present).

---

### Requirement 15: Animation System

**User Story:** As a visitor, I want smooth, purposeful entrance animations, so that the page feels polished without being distracting.

#### Acceptance Criteria

1. THE Site SHALL define a `fadeUp` Framer Motion variant with a `hidden` state (invisible, shifted down) and a `visible` state (fully visible, at natural position) with a transition duration between 0.5 s and 0.8 s using an ease-out or custom cubic-bezier curve.
2. THE Site SHALL define a `stagger` Framer Motion container variant with a `staggerChildren` delay between 0.08 s and 0.15 s, used to orchestrate sequential child animations.
3. WHEN a page section or portfolio card enters the viewport, THE Site SHALL trigger its `fadeUp` animation using `whileInView` with `viewport={{ once: true }}` so the animation fires exactly once per page load.
4. THE Hero Section SHALL use `initial` / `animate` props (mount-triggered animation) with the same `fadeUp` variant values, rather than `whileInView`.
5. WHEN the visitor's OS or browser has `prefers-reduced-motion: reduce` set, THE Site SHALL skip all Framer Motion entrance animations so no motion is presented.

---

### Requirement 16: Mobile-First Responsive Design

**User Story:** As a visitor on a mobile device, I want the site to be fully usable and well-presented, so that the experience is not degraded compared to desktop.

#### Acceptance Criteria

1. THE Site SHALL render without horizontal overflow (no horizontal scrollbar) at any viewport width between 320px and 1440px.
2. THE Portfolio Section grid SHALL be a single column on viewports below 768px and two columns on viewports 768px and above.
3. THE ProofBar Section SHALL display stats in a 2×2 grid on viewports below 768px and a single 4-column row on viewports 768px and above.
4. THE Header SHALL display a hamburger menu icon on viewports below 768px and the full inline navigation on viewports 768px and above.
5. WHEN the mobile navigation menu is open, THE Site SHALL prevent body scroll (`overflow: hidden` on `<body>`).
6. WHEN the mobile navigation menu is closed, THE Site SHALL restore body scroll to its previous state.

---

### Requirement 17: Static Site Constraints

**User Story:** As a developer deploying the site to Cloudflare Workers, I want no runtime data fetching or backend dependencies, so that the build is fully static and reliable.

#### Acceptance Criteria

1. THE Site SHALL NOT perform any client-side data fetching; no `fetch()` calls, no `useEffect` data-loading hooks, no SWR, and no React Query usage SHALL be present in any component.
2. THE Site SHALL NOT establish connections to any external database or third-party API at runtime; all data displayed on the page SHALL originate from the Content_Layer static files.
3. THE Site SHALL produce a build output compatible with `@opennextjs/cloudflare` when `npm run build` is executed without errors.
4. THE `app/page.tsx` SHALL be a server component or a `"use client"` component that sources all rendered data exclusively from synchronous imports of `lib/content/*.ts` files, with no `async` component functions or `Suspense` boundaries.

---

### Requirement 18: Type Safety

**User Story:** As a developer, I want fully typed components and data structures, so that TypeScript catches content and prop errors at build time.

#### Acceptance Criteria

1. THE Site SHALL compile without TypeScript errors when running `tsc --noEmit` under `strict: true` mode as configured in `tsconfig.json`.
2. THE `lib/types/content.ts` SHALL export exactly four types: `Project`, `Testimonial`, `Stat`, and `TechItem`. The `Stat` type SHALL have `id: string`, `value: string`, and `label: string` fields. The `Testimonial` type SHALL have `id: string`, `quote: string`, `authorName: string`, `authorRole: string`, and `isPlaceholder: boolean` fields.
3. THE Site SHALL NOT use the `any` type explicitly in any file under `app/`, `components/`, or `lib/`.
4. WHEN a component accepts props, THE component SHALL define a named props interface or type alias with explicit types for each prop, such that removing a required prop causes a TypeScript compile error.
