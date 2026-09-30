# heyismail.com

Personal site of Muhammad Ismail, frontend engineer. Next.js 15 (App Router), Tailwind CSS v4, one font (Inter).

## Commands

```bash
npm run dev        # local development
npm run build      # production build
npm test           # unit tests (Vitest)
npm run test:e2e   # routing, SEO, accessibility and interaction tests (Playwright, against a production build)
```

`npm run test:e2e` builds and serves the site on port 3100. It writes to `.next`, so don't run it while `npm run dev` is running in the same folder.

## Pages

| URL | Page |
| --- | --- |
| `/`, `/de`, `/it` | Homepage: hero, currently building, selected work, skills, about, contact |
| `/work/barrierefrei-studio` (+ `/de/…`, `/it/…`) | Case study of the product in progress |

All pages live under `app/[locale]`. `middleware.ts` rewrites unprefixed URLs to `/en/...` and redirects `/en/...` back to the unprefixed URL. New pages go in `routes` (`lib/site.ts`) and `app/sitemap.ts`.

## Languages

- `/` is English (also `x-default`), `/de` German (formal "Sie"), `/it` Italian.
- Copy lives in `lib/i18n/{en,de,it}.ts`. `en.ts` is the source of truth; the other two must carry the same facts.
- Language detection (`lib/i18n/negotiate.ts`): an explicit choice (cookie) always wins; a browser whose top language is German or Italian is redirected from `/` only; location alone shows a dismissible suggestion banner and never redirects; crawlers are never redirected.

## Content rules

- Team products (ARVO, Graana) are described as team work. Project entries keep the product (`product`) separate from Ismail's own work (`contribution`).
- **Barrierefrei Studio has no code yet** (September 2026). Every roadmap item carries a `done` / `next` / `planned` status. Don't move anything to "done" or describe it as built until it exists in a repository, and don't add metrics until they've been measured.
- `lib/site.ts`: email, profile links, current employer, and `cv` (set it to a PDF path in `/public` once a CV that matches the site exists; the button then appears).

## Design tokens

Defined in `app/globals.css`, with contrast ratios in the comment there.

- Surfaces: `canvas` (page), `surface` (cards), `sunken` (quiet blocks), `night` (the dark contact band and footer).
- Text: `ink`, `ink-2`, `ink-3`. `ink-3` is the lightest color allowed for text.
- Brand: `brand` (#C5D86D, the heyIsmail lime) is a fill only on light backgrounds: the primary button, the wordmark dot and the "currently building" dot. One primary button per view. `brand-ink` is the brand hue for text on light.
- Status: `success` for "Done". Next uses `brand-ink`, planned uses `ink-3`; each also has its own icon and label.
