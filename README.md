# heyismail.com

Personal site of Muhammad Ismail, full-stack software engineer. Next.js 15 (App Router), Tailwind CSS v4, deployed on Vercel.

## Commands

```bash
npm run dev        # local development
npm run build      # production build
npm test           # unit tests (Vitest)
npm run test:e2e   # routing, SEO, accessibility and interaction tests (Playwright, against a production build)
```

`npm run test:e2e` builds and serves the site on port 3100. It writes to `.next`, so don't run it while `npm run dev` is running in the same folder.

## Languages

| URL | Language |
| --- | --- |
| `/` | English (also `x-default`) |
| `/de` | German |
| `/it` | Italian |

- All pages live under `app/[locale]`. `middleware.ts` rewrites unprefixed URLs to `/en/...` and redirects `/en/...` back to the unprefixed URL.
- Copy lives in `lib/i18n/{en,de,it}.ts`. `en.ts` is the source of truth; the other two must carry the same facts. Project entries keep the public product description (`product`) separate from Ismail's own work (`contribution`).
- Language detection (`lib/i18n/negotiate.ts`): an explicit choice (cookie) always wins; a browser whose top language is German or Italian is redirected from `/` only; location alone shows a dismissible suggestion banner and never redirects; crawlers are never redirected.

## Content that needs updating by hand

- `lib/site.ts`: email, profile links, current employer, and `cv` (set it to the PDF path in `/public` once the CV exists and the button appears).
- `lib/i18n/*.ts`: all visible copy, metadata and the recruiter details.

## Brand tokens

Defined in `app/globals.css`. `brand-accent` (#C5D86D) is used as a fill and on dark backgrounds only. Text on light backgrounds uses `accent-ink` (#55651A). Muted text never goes below 60% opacity.
