# Design Document — Creator Platform Rebrand

## Overview

This document describes the design and implementation approach for rebranding heyismail.com from a startup MVP service to a premium creator platform builder. The work is entirely contained within the existing Next.js codebase — no new routes, no new pages, no tech stack changes.

The two primary files driving all visible changes are:
- `app/data.ts` — all content/copy lives here
- `app/page.tsx` — all section layouts and components
- `app/styles/globals.css` — color tokens and design system
- `app/components/Navbar.tsx` — nav links and CTA
- `app/components/Footer.tsx` — footer links and CTA
- `app/layout.tsx` — page metadata

---

## Architecture

The site uses a data-driven pattern: content is defined in `app/data.ts` as typed constants, then consumed by `app/page.tsx` and other components. This means most copy changes happen in `data.ts`, while structural/layout changes happen in `page.tsx`.

The design system is defined via CSS custom properties in `app/styles/globals.css` using Tailwind v4's `@theme` block. Color tokens, typography scale, and shadow utilities are all defined there.

```
app/
├── data.ts              ← all content constants (SITE, HERO, PROCESS, BUILDS, FAQS, etc.)
├── page.tsx             ← homepage sections, consumes data.ts
├── layout.tsx           ← metadata, font loading
├── styles/globals.css   ← design tokens (@theme block)
└── components/
    ├── Navbar.tsx        ← nav links, CTA button, available badge
    └── Footer.tsx        ← footer nav, CTA
```

---

## Components and Interfaces

### 1. Design Token Updates (`globals.css`)

The current token set uses a dark green primary (`#19453A`) and teal accent (`#79CEB8`). These need to be replaced with the new brand palette:

| Token | Old Value | New Value | Usage |
|---|---|---|---|
| `--color-primary` | `#19453A` | `#0F0F0F` | All body text, headlines |
| `--color-accent` | `#79CEB8` | `#14A714` | CTAs, active states, accent lines |
| `--color-accent-hover` | `#6bbfaa` | `#12961 2` | Hover state for green buttons |
| `--color-light` | `#FBF9FF` | `#F8F8F8` | Section backgrounds |
| `--color-dark` | `#000807` | `#0F0F0F` | Dark text |
| `--color-background` | `#FBF9FF` | `#FFFFFF` | Page background |
| `--color-border` | `rgba(25,69,58,0.10)` | `#E5E5E5` | Card borders |
| `--color-muted-foreground` | `#000807` | `#6B7280` | Secondary text |

New tokens to add:
- `--color-forest: #102F27` — footer/dark CTA section background
- `--color-sage: #D9E8D5` — soft section break background

Shadow system stays the same but values should be adjusted to use `rgba(0,0,0,...)` instead of the current green-tinted shadows.

### 2. Navbar (`Navbar.tsx`)

Changes:
- Background on scroll: change from `bg-primary/90` (dark green) to `bg-white/95 border-b border-[#E5E5E5]`
- Logo text color: change from `text-white` to `text-[#0F0F0F]`
- Nav links: change from `text-white/70 hover:text-white` to `text-[#0F0F0F]/60 hover:text-[#0F0F0F]`
- CTA button: change text from "Book a Call" to "Book a Free Call", update styles to green bg + white text
- Add "Available for new projects" badge next to logo (green dot + text)
- Nav links: keep How It Works / Builds / About / Contact (update "Process" → "How It Works")
- Transparent state: use white/light background from the start since hero is now light

### 3. Hero Section (`page.tsx`)

The hero currently uses `bg-primary` (dark green) with white text. It needs to flip to a light background.

Layout changes:
- Background: `bg-white` or `bg-[#F8F8F8]`
- Headline: large, bold, `#0F0F0F` — "Your audience is premium. Your platform should be too."
- Subheadline: `#6B7280` body text
- Primary CTA: `bg-[#14A714] text-white rounded-lg` — "Book a Free Call"
- Secondary CTA: `bg-white border border-[#0F0F0F] text-[#0F0F0F] rounded-lg` — "See My Builds"
- Trust badge below CTAs: pill/badge component with creator names and stats
- Remove the right-column "7-Day Process" card — replace with a clean visual or remove entirely for simplicity

### 4. Pain Section (`page.tsx`)

Currently a 2-column "old way vs sprint way" layout. Needs to become a 3-card problem grid + 1 solution card.

Layout:
- 3 problem cards in a row (or 2+1 on mobile), each with ❌ icon, title, and body copy
- 1 full-width solution card below with ✅ and green accent border
- Card style: white bg, `border border-[#E5E5E5]`, subtle shadow, `rounded-lg`
- Section background: `#F8F8F8`

### 5. How It Works Section (`page.tsx` + `data.ts`)

Currently shows 5 process days on a dark green background. Needs:
- Update to 7 days with new copy in `PROCESS` array in `data.ts`
- Section background: keep dark (`#102F27`) or use white — the dark forest green works well here as a contrast section
- Update intro copy in the section heading

### 6. What You Receive Section (`page.tsx` + `data.ts`)

Currently the `OWNERSHIP` pills section at the bottom of the process section. Changes:
- Update section title to "What transfers to you on Day 7"
- Add two new items to `OWNERSHIP` array: "Custom branded member experience" and "Platform trained around your content structure"

### 7. Builds Section (`page.tsx` + `data.ts`)

Currently shows one featured build card. Needs to show two cards side by side (or stacked on mobile).

`BUILDS` array in `data.ts` needs to be updated with two entries:
1. LinkUp OS — Jasmin Alić data
2. Motiv8 — Jaime Brenkus data

Layout: 2-column grid on desktop, single column on mobile. Each card:
- White bg, `border border-[#E5E5E5]`, `rounded-lg`, subtle shadow
- Creator name + bio at top
- Feature list
- Stats row (members, revenue/completion)
- "Live in 7 days" badge + URL
- Link to live site

Remove the "concept builds" framing. Update section eyebrow and description.

### 8. FAQ Section (`page.tsx` + `data.ts`)

Replace `FAQS` array in `data.ts` with the 6 new creator-focused Q&As. The accordion component and layout stay the same.

### 9. Bottom CTA Section (`page.tsx`)

- Background: `#102F27` (forest green) — this is the one dark section allowed
- Headline: "Your members deserve a platform that matches your brand."
- Subtext: updated copy
- Primary CTA: "Book a Free Call" (green button)
- Secondary CTA: "Message on WhatsApp" (white/outline button, links to wa.me)

### 10. Metadata (`layout.tsx`)

Update page title and description to reflect creator platform positioning.

### 11. Footer (`Footer.tsx`)

- Update nav link "Process" → "How It Works"
- Update CTA button text to "Book a Free Call"
- Background stays dark (`bg-dark` / `#0F0F0F`)

---

## Data Models

The `data.ts` file exports typed constants. The `FounderBuild` type already exists and covers the builds data. The `ProcessDay` type covers the timeline. `Faq` covers FAQs.

No new types are needed. The `BUILDS` array will be updated with two new entries matching the existing `FounderBuild` interface:

```ts
interface FounderBuild {
  slug: string
  creator: string
  creator_bio: string
  product: string
  tagline: string
  description: string
  gap: string
  built: string[]
  days: number
  url: string
  stack: string[]
  accent: string
  bg: string
}
```

The `PROCESS` array will be updated with 7 entries (currently 5) matching `ProcessDay`:

```ts
interface ProcessDay {
  day: string
  title: string
  headline: string
  description: string
}
```

`SITE` constant will be updated with new tagline and description. `HERO` constant will be updated with new copy.

---

## Error Handling

No new error states are introduced. All changes are static content and CSS. Existing error handling in components is preserved.

---

## Testing Strategy

Since this is a content + visual rebrand with no new logic:

1. Visual regression — manually verify each section matches the design direction after changes
2. Content audit — verify every old ICP reference ("non-technical founders", "MVPs", "startup", "$80K agencies") has been removed
3. Link audit — verify all CTAs point to correct destinations (calendly, /builds, WhatsApp)
4. Responsive check — verify hero, pain cards, builds grid, and FAQ all render correctly on mobile (375px) and desktop (1280px)
5. Type check — run `tsc --noEmit` to confirm no TypeScript errors after data.ts changes

---

## Implementation Sequence

The tasks will be sequenced to minimize risk and allow incremental review:

1. Update design tokens in `globals.css` first — this affects the whole site visually
2. Update `data.ts` — all content changes in one place
3. Update `Navbar.tsx` — light nav, new CTA text, available badge
4. Update `page.tsx` hero section — light background, new copy, new CTAs
5. Update `page.tsx` pain section — new 3+1 card layout
6. Update `page.tsx` process/ownership section — 7-day timeline, new title
7. Update `page.tsx` builds section — 2-card grid
8. Update `page.tsx` FAQ section — new accordion items
9. Update `page.tsx` bottom CTA section — new copy and WhatsApp CTA
10. Update `Footer.tsx` and `layout.tsx` — metadata and footer copy
