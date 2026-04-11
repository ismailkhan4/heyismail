# Implementation Plan

- [x] 1. Update design tokens and typography in globals.css and layout.tsx
  - In `globals.css`: replace all CSS custom properties with new brand tokens — `--background: #FBFFFC`, `--primary: #06382C`, `--primary-foreground: #FBFFFC`, `--accent: #14A714`, `--secondary: rgba(6,56,44,0.05)`, `--border: rgba(15,15,15,0.09)`, `--muted-foreground: rgba(15,15,15,0.55)`, `--card: #FBFFFC`
  - Add named brand tokens: `--color-light`, `--color-success`, `--color-success-hover`, `--color-primary-dark`, `--color-dark`
  - Add shadow utilities: `--shadow-card` and `--shadow-card-hover` using `rgba(0,0,0,...)`
  - Remove all dark mode (`.dark`) CSS block — this is a light-mode-only site
  - In `layout.tsx`: import `Playfair_Display` and `Lora` via `next/font/google`, apply as CSS variables (`--font-display`, `--font-body`), wire into `globals.css` `@theme` block
  - In `globals.css`: add `font-family` rules so `font-display` class uses Playfair Display and `font-body` uses Lora
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.10, 1.11, 1.12_

- [x] 2. Rewrite app/data.ts with all new content
  - Define and export `SITE`, `HERO`, `PAIN_CARDS`, `PROCESS_STEPS` (7 steps, homepage version), `OWNERSHIP_ITEMS`, `BUILDS` (LinkUp OS + Motiv8 with all fields per requirements 3.22–3.23), `FAQS` (6 Q&As per requirement 3.27)
  - Define and export `PROCESS_DETAILED` (expanded per-day for /process page), `TECH_STACK` (5 items with plain-language descriptions per requirement 4.5), `OWNERSHIP_EXPLAINED`
  - Define and export `CASE_STUDIES` (LinkUp OS + Motiv8 full case study data per requirements 5.2–5.3)
  - Define and export `ABOUT` content (intro sentences, origin story, 3 principles, proof stats, ideal client description per requirements 6.2–6.6)
  - Define and export `CONTACT` content (headline, intro paragraph per requirement 7.1–7.2)
  - Remove all old exports referencing startup founders, MVPs, investor-readiness, or the old ICP
  - Write TypeScript interfaces for all new types: `Build`, `ProcessStep`, `ProcessStepDetailed`, `TechItem`, `CaseStudy`, `FAQ`, `AboutContent`, `ContactContent`
  - _Requirements: 3.1–3.38, 4.1–4.7, 5.1–5.6, 6.1–6.8, 7.1–7.6_

- [x] 3. Update Footer.tsx
  - Change background to `bg-[#06382C]` (--primary)
  - Update all text to `text-[#FBFFFC]` and `text-[#FBFFFC]/70`
  - Ensure nav links read: How It Works / Builds / About / Contact (not "Process")
  - Add "Built by Ismail Muhammad" attribution
  - Add LinkedIn and Upwork links with Lucide icons
  - Add © 2025 copyright line
  - Apply display font class to logo text
  - _Requirements: 8.1, 8.2, 8.3_

- [x] 4. Rewrite app/page.tsx — Homepage
- [x] 4.1 Hero section
  - Section background `bg-[#FBFFFC]`, min-h-screen, centered content
  - Headline: display font class, text-5xl→text-7xl, leading-[1.05], `text-[#0F0F0F]`, from `HERO.headline`
  - Subheadline: body font, text-lg/xl, `text-[#0F0F0F]/55`, from `HERO.subheadline`
  - Primary CTA: `bg-[#14A714] text-[#FBFFFC]` rounded-xl, hover scale + shadow, "Book a Free Call"
  - Secondary CTA: transparent, `border border-[#0F0F0F]`, `text-[#0F0F0F]`, hover scale, "See My Builds" → /builds
  - Social proof bar: small text, `text-[#0F0F0F]/40`, centered, from `HERO.trustBadge`
  - Framer Motion fade-up on mount
  - _Requirements: 3.1–3.8_

- [x] 4.2 Pain section
  - Section background `bg-[rgba(6,56,44,0.05)]` (--secondary), py-24
  - Section heading: display font, centered, from `PAIN_CARDS` section title
  - 3 problem cards: `grid md:grid-cols-3 gap-6`, each `bg-[#FBFFFC] border border-[rgba(15,15,15,0.09)] rounded-xl p-6 shadow-card`
  - Card title: body font semibold, `text-[#0F0F0F]`; card body: body font, `text-[#0F0F0F]/55`
  - 1 full-width callout card: same card style + `border-l-4 border-l-[#14A714]`
  - Framer Motion fade-up whileInView for each card
  - No emoji icons — clean typographic treatment
  - _Requirements: 3.9–3.15_

- [x] 4.3 How It Works section
  - Section background `bg-[#06382C]`, py-32, text `text-[#FBFFFC]`
  - Heading: display font, `text-[#FBFFFC]`, from requirement 3.16
  - Timeline: horizontal flex row on desktop with connecting line between steps, collapses to vertical stack on mobile
  - Each step: day label `text-[#14A714]` uppercase small, title display font `text-[#FBFFFC]`, description body font `text-[#FBFFFC]/70`
  - Ownership list below timeline: 2-column grid, Lucide `Check` icons in `text-[#14A714]`, items from `OWNERSHIP_ITEMS`
  - Framer Motion fade-up whileInView
  - _Requirements: 3.16–3.19_

- [x] 4.4 Builds section
  - Section background `bg-[#FBFFFC]`, py-24
  - Eyebrow "Client Builds" in `text-[#14A714]` uppercase small; heading display font from requirement 3.20
  - 2-column grid on desktop, single column on mobile, cards from `BUILDS`
  - Card: `bg-[#FBFFFC] border border-[rgba(15,15,15,0.09)] rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow`
  - Product name: display font large; creator: `text-[#14A714]` semibold; creator_bio: body font muted
  - Feature list: Lucide `Check` icons `text-[#14A714]`; stats: pill badges `bg-[rgba(6,56,44,0.05)]`
  - "Live in 7 days" badge: `--success` dot; "View Build →" link to /builds
  - Closing line: "Every build is live. Owned by the creator. Serving real paying members."
  - _Requirements: 3.20–3.25_

- [x] 4.5 FAQ section
  - Section background `bg-[rgba(6,56,44,0.05)]`, py-24
  - Heading: display font, centered, from requirement 3.26
  - Accordion: each item expands/collapses on click using React `useState` + Framer Motion `AnimatePresence`
  - Question: display font medium, `text-[#0F0F0F]`; answer: body font, `text-[#0F0F0F]/70`
  - Items from `FAQS` array
  - _Requirements: 3.26–3.28_

- [x] 4.6 Final CTA section
  - Section background `bg-[#06382C]`, py-32
  - Headline: display font large, `text-[#FBFFFC]`, from requirement 3.30
  - Body: body font, `text-[#FBFFFC]/70`, from requirement 3.31
  - Primary CTA: `bg-[#14A714] text-[#FBFFFC]` rounded-xl, "Book a Free Call"
  - Secondary CTA: transparent, `border border-[#FBFFFC]/40`, `text-[#FBFFFC]`, "Message on WhatsApp" → wa.me link
  - No "Ready to Move Fast?" eyebrow
  - _Requirements: 3.29–3.34_

- [x] 4.7 Verify homepage length and section padding
  - Confirm all 6 sections are present in order: Hero → Pain → How It Works → Builds → FAQ → Final CTA
  - Confirm each section has minimum `py-24` on desktop (major sections `py-32`)
  - Remove any leftover sections from the old homepage (MVP checklist, stack badges, "7 non-negotiables") that don't belong in the new structure
  - _Requirements: 3.35–3.38_

- [x] 5. Rewrite app/process/page.tsx — How It Works Page
  - Wrap in `"use client"`, import `motion`, `AnimatePresence` from framer-motion, Lucide icons, `PROCESS_DETAILED`, `TECH_STACK`, `OWNERSHIP_EXPLAINED`, `SITE` from `app/data`
  - Use the same `fadeUp` / `stagger` variants and `SectionLabel` pattern established in `app/page.tsx`
  - Hero section: `bg-[#06382C]` full-viewport with subtle grid texture overlay (same `opacity-[0.035]` pattern), display font headline "7 days. No surprises. Everything yours.", body font subheadline `text-[#FBFFFC]/50`, primary CTA "Book a Free Call" with `ArrowRight` icon
  - 7-day process section: `bg-[#FBFFFC]`, vertical rail layout with `left-[19px]` green gradient line (same pattern as homepage How It Works), each step from `PROCESS_DETAILED` rendered as an expanded card — day label `text-[#14A714]` uppercase tracking, display font title, body font description, "What happens" + "What you get" two-column list inside each card with Lucide `Check` icons
  - Agency comparison section: `bg-[rgba(6,56,44,0.05)]`, 3-column grid (This Service / Agency / Freelancer), rows for Timeline / Cost / Ownership / Support / Lock-in; "This Service" column uses `text-[#14A714]` with `Check` icons, others use `text-[#0F0F0F]/40` with `X` icons; card style `bg-[#FBFFFC] border border-[rgba(15,15,15,0.09)] rounded-2xl`
  - Ownership model section: `bg-[#06382C]` rounded-3xl card (same dark card treatment as homepage ownership block), items from `OWNERSHIP_EXPLAINED` in a 2×4 grid with `Check` icons `text-[#14A714]`, headline display font `text-[#FBFFFC]`
  - Tech stack section: `bg-[#FBFFFC]`, 5 cards in a `grid sm:grid-cols-2 lg:grid-cols-3` gap layout, each `bg-[#FBFFFC] border border-[rgba(15,15,15,0.09)] rounded-2xl p-7`, tech name display font `text-[#0F0F0F]`, plain description body font `text-[#0F0F0F]/50`, no colored badges
  - Final CTA section: `bg-[#06382C]` with same grid texture, display font headline `text-[#FBFFFC]`, primary CTA "Book a Free Call" `bg-[#14A714]`, secondary "Message on WhatsApp" `border border-[#FBFFFC]/20 text-[#FBFFFC]`
  - All sections use `whileInView` fade-up with `viewport={{ once: true }}`
  - _Requirements: 4.1–4.7_

- [x] 6. Rewrite app/builds/page.tsx — Builds Page
  - Wrap in `"use client"`, import `motion` from framer-motion, Lucide icons, `CASE_STUDIES`, `SITE` from `app/data`
  - Use the same `fadeUp` / `stagger` variants and `SectionLabel` pattern from `app/page.tsx`
  - Hero section: `bg-[#06382C]` full-viewport with subtle grid texture overlay, overline pill "The Work", display font headline "Built for creators who were done compromising", body font subheadline `text-[#FBFFFC]/50`, primary CTA "Book a Free Call"
  - Case study 1 (LinkUp OS): `bg-[#FBFFFC]` section, `grid lg:grid-cols-2` layout — left column has `SectionLabel`, display font product name, creator name `text-[#14A714]`, problem paragraph `text-[#0F0F0F]/50`, outcome paragraph, stats as large display font numbers with body font labels; right column has "What was built" list with `Check` icons `text-[#14A714]`, "Live in 7 days" badge (green dot + text), live link `ArrowRight` icon
  - Case study 2 (Motiv8): `bg-[rgba(6,56,44,0.05)]` section, same structure but `lg:grid-cols-2` with columns reversed (`order-last` / `order-first` on desktop) for alternating layout
  - Closing statement: centered `bg-[#06382C]` rounded-3xl card (same dark card treatment), display font "Every build is live. Owned by the creator. Serving real paying members." `text-[#FBFFFC]`, CTA "Ready to see what yours looks like?" subtext + "Book a Free Call" button
  - All sections use `whileInView` fade-up with `viewport={{ once: true }}`
  - _Requirements: 5.1–5.6_

- [x] 7. Rewrite app/about/page.tsx — About Page
  - Wrap in `"use client"`, import `motion` from framer-motion, Lucide icons, `ABOUT`, `SITE` from `app/data`
  - Use the same `fadeUp` / `stagger` variants and `SectionLabel` pattern from `app/page.tsx`
  - Hero / intro section: `bg-[#06382C]` full-viewport with subtle grid texture overlay, overline pill "The Builder", display font headline from `ABOUT.intro` `text-[#FBFFFC]`, body font supporting copy `text-[#FBFFFC]/50`, primary CTA "Book a Free Call"
  - Origin story section: `bg-[#FBFFFC]`, `SectionLabel` "How This Started", display font heading, body font story from `ABOUT.originStory` in a `max-w-2xl` centered column — clean editorial treatment, no card box
  - Principles section: `bg-[rgba(6,56,44,0.05)]`, `grid md:grid-cols-3 gap-5`, each card `bg-[#FBFFFC] border border-[rgba(15,15,15,0.09)] rounded-2xl p-8`, ghost number overlay (same `opacity-[0.04]` pattern), display font title, body font description `text-[#0F0F0F]/50`, `w-8 h-px bg-[#14A714] mb-6` accent line
  - Proof section: `bg-[#06382C]`, `grid sm:grid-cols-2 lg:grid-cols-4` stat blocks with display font large numbers `text-[#FBFFFC]`, body font labels `text-[#FBFFFC]/40 uppercase tracking-widest`, dividers `border-r border-[#FBFFFC]/08` — same pattern as homepage social proof bar
  - "Who I work best with" section: `bg-[#FBFFFC]`, `SectionLabel`, display font heading, body font description from `ABOUT.idealClient`, rendered as a clean list with `w-1.5 h-1.5 bg-[#14A714] rounded-full` bullet dots
  - Final CTA section: `bg-[#06382C]` with grid texture, display font headline `text-[#FBFFFC]`, primary CTA "Book a Free Call" `bg-[#14A714]`
  - All sections use `whileInView` fade-up with `viewport={{ once: true }}`
  - _Requirements: 6.1–6.8_

- [x] 8. Rewrite app/contact/ContactPageClient.tsx — Contact Page
  - Wrap in `"use client"`, import `useState` from react, `motion` from framer-motion, Lucide icons (`MessageCircle`, `Linkedin`, `Calendar`), `CONTACT`, `SITE` from `app/data`
  - Use the same `fadeUp` / `stagger` variants from `app/page.tsx`
  - Page layout: `bg-[#FBFFFC]` full page, single centered column `max-w-lg mx-auto px-5 py-24 sm:py-32`
  - Hero text: `SectionLabel` "Get in Touch", display font headline from `CONTACT.headline` `text-[#0F0F0F]` `text-4xl sm:text-5xl`, body font intro from `CONTACT.intro` `text-[#0F0F0F]/50 leading-[1.8]`
  - Form: `mt-10 space-y-5`, static labels `font-body text-sm font-medium text-[#0F0F0F]/70 mb-1.5` above each field; inputs `w-full bg-[#FBFFFC] border border-[rgba(15,15,15,0.09)] rounded-xl px-4 py-3 font-body text-[#0F0F0F] focus:outline-none focus:ring-2 focus:ring-[#14A714]/40`; platform select same styling with options Kajabi / Circle / Notion / Other; textarea 4 rows same styling
  - Submit button: full-width `bg-[#14A714] text-[#FBFFFC] font-body font-semibold rounded-xl py-4 hover:bg-[#129612] hover:shadow-[0_6px_28px_rgba(20,167,20,0.45)] hover:-translate-y-0.5 transition-all duration-200`
  - Contact links below form: `mt-10 pt-8 border-t border-[rgba(15,15,15,0.08)] flex flex-col gap-4`, each link `flex items-center gap-3 font-body text-sm text-[#0F0F0F]/50 hover:text-[#0F0F0F] transition-colors` with Lucide icon `text-[#14A714]` — WhatsApp, LinkedIn, Cal.com booking
  - Wrap entire page in `motion.div` with `initial="hidden" animate="visible" variants={stagger}` for staggered entrance
  - _Requirements: 7.1–7.6_

- [ ] 9. Run type check and content audit
  - Run `tsc --noEmit` to confirm no TypeScript errors after all page rewrites
  - Search codebase for any remaining references to "startup founders", "MVPs", "non-technical founders", "investor-ready", "prototype", "concept builds", "skill demonstrations" and remove them
  - Verify all CTA links point to correct destinations: `SITE.calLink`, `/builds`, `SITE.whatsapp`, `SITE.linkedin`
  - Verify `--success` (`#14A714`) is not used as a background fill anywhere except primary CTA buttons and accent dots
  - Verify `--primary` (`#06382C`) only appears on hero sections, contrast break sections, final CTA sections, and Footer
  - Verify every page uses `font-display` for headings and `font-body` for body copy — no bare `font-sans` or unstyled text
  - Verify all `whileInView` animations use `viewport={{ once: true }}` so they don't re-trigger on scroll-up
  - _Requirements: 1.2, 1.3, 1.4, 1.5_
