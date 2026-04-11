# Requirements Document

## Introduction

This spec covers the full website revamp of heyismail.com across all 5 pages: Homepage, How It Works, Builds, About, and Contact. The site is being repositioned from a startup MVP service to a premium creator platform builder targeting LinkedIn creators earning $30K–$150K/month who run paid courses, coaching, or communities.

The revamp is a content rewrite + visual redesign within the existing Next.js codebase. No new pages or routes are added. No tech stack changes. Every page, every section, every line of copy, and every spacing decision is being rebuilt to a premium editorial standard.

The four brand tokens are the entire color system — no colors outside these are permitted:
- `--light: #FBFFFC` — page background (warm off-white canvas)
- `--success: #14A714` — primary CTAs, accent underlines, active states only
- `--primary: #06382C` — section contrast breaks, footer, high-intent CTA sections
- `--dark: #0F0F0F` — all body text, headings, cards, borders

Typography must use an editorial display font (not Inter, Roboto, Arial, DM Sans, Poppins, or any top-page Google Fonts result) paired with a refined, highly readable body font.

---

## Requirements

### Requirement 1 — Design System & Brand Tokens

**User Story:** As a creator landing on this site, I want the visual design to feel premium and intentional from the first pixel, so that I trust the person behind it before reading a single word.

#### Acceptance Criteria

1. WHEN any page renders THEN the page background SHALL use `--light: #FBFFFC` — warm off-white, not clinical white
2. WHEN `--success: #14A714` is used THEN it SHALL appear ONLY on primary CTA buttons, accent underlines, and active states — never as a background fill or decorative element
3. WHEN `--primary: #06382C` is used THEN it SHALL appear ONLY as section backgrounds for contrast breaks, the footer, and the high-intent CTA section
4. WHEN `--dark: #0F0F0F` is used THEN it SHALL be the default color for all body text, headings, card borders, and UI ink
5. WHEN any color is applied THEN it SHALL be one of the four brand tokens only — no grays invented from nowhere, no blues, no purple gradients, no softened variants
6. WHEN cards render THEN they SHALL have a 1px border using `--dark` at very low opacity (around 8–10%), a barely-there box shadow, and rounded corners that feel considered — not pill-shaped, not square
7. WHEN primary buttons render THEN they SHALL use `--success` background, `--light` text, medium border-radius, no outline, with a hover state that feels physical (slight scale + shadow lift, 200ms transition)
8. WHEN secondary buttons render THEN they SHALL use transparent background, 1px `--dark` border, `--dark` text, with the same physical hover state
9. WHEN section backgrounds alternate THEN sections SHALL use `--light` as the base, with `--primary` at 4–6% opacity for alternating card backgrounds — a barely perceptible green warmth, not gray
10. WHEN the display font renders THEN it SHALL be an editorial, confident typeface — not corporate, not startup-casual — with optical weight, tight leading, and presence
11. WHEN body text renders THEN it SHALL be 16–18px with comfortable line height, using a refined font that is not on the first page of Google Fonts sorted by popularity
12. WHEN headlines render THEN they SHALL have large size, tight leading, and confident weight — never looking like they came from a Webflow template
13. WHEN section padding renders THEN it SHALL be generous — sections breathe, no element feels crowded
14. WHEN the page renders on mobile THEN every section SHALL be fully responsive and feel as intentional as desktop
15. WHEN animations are used THEN they SHALL be subtle fade-up on scroll for content blocks — no parallax, no loading spinners, no entrance animations that make the user wait

---

### Requirement 2 — Navigation (All Pages)

**User Story:** As a visiting creator, I want a clean, premium nav that reflects the brand I'm about to trust with my platform, so that I feel confident before I even scroll.

#### Acceptance Criteria

1. WHEN the navbar renders THEN it SHALL display the logo left, nav links centered (How It Works / Builds / About / Contact), and CTA right
2. WHEN the CTA button renders THEN it SHALL read "Book a Free Call" styled with `--success` background
3. WHEN the navbar renders THEN it SHALL display a subtle "Available for new projects" badge near the CTA — small green dot, quiet text
4. WHEN the page is scrolled THEN the navbar SHALL remain fixed with a light background and subtle border — never dark
5. WHEN on mobile THEN the navbar SHALL collapse into a hamburger menu with the same links and CTA

---

### Requirement 3 — Homepage

**User Story:** As a LinkedIn creator with a real audience, I want a homepage that speaks directly to my situation across every section, so that I feel this was built for someone exactly like me.

#### Acceptance Criteria — Hero

1. WHEN the hero renders THEN the headline SHALL read: "Your audience is premium. Your platform should be too."
2. WHEN the hero renders THEN the subheadline SHALL read: "I build custom platforms for LinkedIn creators in 7 days. Courses, community, coaching — one branded home your members actually trust. Full ownership on day 7."
3. WHEN the hero renders THEN the primary CTA SHALL read "Book a Free Call" linking to the cal.com booking page
4. WHEN the hero renders THEN the secondary CTA SHALL read "See My Builds" linking to /builds
5. WHEN the hero renders THEN a social proof bar SHALL appear below the CTAs: "Built for Jasmin Alić · 358K followers · $2.3M+ revenue · and Jaime Brenkus · National Fitness Hall of Fame · 10,000+ members"
6. WHEN the hero renders THEN there SHALL be no hero image, stock photo, or literal illustration — the headline carries the hero; any visual element SHALL be a subtle abstract geometric form or quiet texture
7. WHEN the hero renders THEN the background SHALL use `--light` — not dark green
8. WHEN the hero renders on mobile THEN all elements SHALL stack cleanly and remain readable

#### Acceptance Criteria — Pain Section

9. WHEN the pain section renders THEN the section heading SHALL read: "The gap your members feel every time they log in"
10. WHEN the pain section renders THEN it SHALL display three problem cards followed by one green callout card
11. WHEN problem card 1 renders THEN it SHALL be titled "Your tech doesn't match your brand" with copy: "You've built something real. But members log in and get Kajabi's UI, Notion's chaos, or a Gumroad page that looks nothing like you. Every click after the sale is part of your product. Right now that part is quietly failing."
12. WHEN problem card 2 renders THEN it SHALL be titled "You're paying to rent someone else's platform" with copy: "Kajabi. Circle. Mighty Networks. You're paying $300–$1,200/month to live inside their brand constraints, their feature limits, and their pricing decisions. You own none of it."
13. WHEN problem card 3 renders THEN it SHALL be titled "Agencies want 8 weeks and $30K before they start" with copy: "You've had the conversations. They want a discovery call, a proposal, a deposit, and two months before anything exists. Meanwhile your next launch happens on the wrong platform again."
14. WHEN the callout card renders THEN it SHALL read: "What you actually need: A platform built around your brand, your members, and your content structure. Custom. Delivered in 7 days. Owned completely by you from day one." with a `--success` accent treatment
15. WHEN the pain section renders THEN there SHALL be no references to "startup founders", "MVPs", "agencies charging $80K", or "non-technical founders"

#### Acceptance Criteria — How It Works (Homepage Preview)

16. WHEN the how it works section renders THEN the heading SHALL read: "7 days. No surprises."
17. WHEN the timeline renders THEN it SHALL show these 7 steps in a horizontal layout (collapsing to vertical on mobile):
    - Day 1: "We talk. I learn your brand, your members, your current platform pain."
    - Day 2: "I map every page, every flow, every interaction. You approve it before I build."
    - Days 3–5: "I build. You get daily updates. You test as I go."
    - Day 6: "Full end-to-end test. I fix anything that feels off."
    - Day 7: "We deploy. Source code, credentials, database, everything transferred to you."
18. WHEN the ownership list renders below the timeline THEN it SHALL be a clean two-column list with: Custom branded member experience · Complete source code repository · Production database with admin access · Live deployment on your domain · Stripe connected to your bank · All API keys and credentials · Full technical documentation · 14 days post-launch support
19. WHEN the section renders THEN it SHALL NOT say "5 focused days", "No surprises. Complete ownership.", or reference MVPs

#### Acceptance Criteria — Builds Section (Homepage)

20. WHEN the builds section renders THEN the eyebrow SHALL read "Client Builds" and the heading SHALL read "Built for creators who were done compromising"
21. WHEN the builds section renders THEN it SHALL display exactly two build cards side by side on desktop, stacked on mobile
22. WHEN build card 1 renders THEN it SHALL show: LinkUp OS / Jasmin Alić · #1 LinkedIn Creator · 358,000 followers / Community feed · Course vault · AI coaching trained on his methodology · Expert feedback system · Leaderboard / 2,500+ paying members · $2.3M+ in tracked revenue / Live in 7 days / [View Build →] linking to /builds
23. WHEN build card 2 renders THEN it SHALL show: Motiv8 / Jaime Brenkus · National Fitness Hall of Fame · 100M YouTube views / Daily workouts · AI meal planning · Coach check-ins · Two membership tiers · Stripe billing / 10,000+ members · 94% program completion rate / Live in 7 days / [View Build →] linking to /builds
24. WHEN the builds section renders THEN it SHALL NOT include "These aren't client projects. They're skill demonstrations."
25. WHEN the builds section renders THEN it SHALL include: "Every build is live. Owned by the creator. Serving real paying members."

#### Acceptance Criteria — FAQ Section (Homepage)

26. WHEN the FAQ section renders THEN the heading SHALL read: "Questions creators ask before we start."
27. WHEN the FAQ renders THEN it SHALL include these six Q&As:
    - Q: "What kind of creators do you build for?" A: "LinkedIn creators with an established audience selling courses, coaching, or running paid communities — who are embarrassed by the gap between their brand and their current tech."
    - Q: "What does the platform actually include?" A: "Custom branded UI, course or content delivery, community feed, coaching portal, member onboarding, Stripe billing, and admin access. Built around your specific structure — not a template dropped into a builder."
    - Q: "Do I really own everything?" A: "Yes. Source code, database, deployment credentials, domain — all transferred to you on day 7. No recurring fees. No lock-in. No dependency on me to keep it running."
    - Q: "How is 7 days actually possible?" A: "I've built a delivery system specifically around creator platforms. Pre-built foundations for what every platform shares. Custom work for everything that makes yours distinct. It's not magic — it's a focused process refined across every build."
    - Q: "What's the investment?" A: "Starts at $5,000. Scope determines the final number. Book a call and I'll give you a clear figure in the first 15 minutes."
    - Q: "What happens after day 7?" A: "14 days of support for fixes and tweaks. After that you can maintain it yourself, bring in your own developer, or retain me for ongoing improvements."
28. WHEN the FAQ renders THEN it SHALL NOT include questions about investor-readiness, prototypes, or idea pivots

#### Acceptance Criteria — Final CTA Section (Homepage)

29. WHEN the final CTA section renders THEN the background SHALL use `--primary: #06382C`
30. WHEN the final CTA section renders THEN the headline SHALL read: "Your members deserve a platform that matches your brand."
31. WHEN the final CTA section renders THEN the body SHALL read: "Book a free 15-minute call. I'll look at your current setup and tell you exactly what a custom platform would look like for you. No pitch. No pressure."
32. WHEN the final CTA section renders THEN the primary CTA SHALL read "Book a Free Call"
33. WHEN the final CTA section renders THEN a secondary CTA SHALL read "Message on WhatsApp" linking to the WhatsApp number
34. WHEN the final CTA section renders THEN it SHALL NOT say "Ready to Move Fast?"

#### Acceptance Criteria — Homepage Length & Depth

35. WHEN the homepage renders THEN it SHALL be a long-form, high-conviction page — not a short summary page — with enough depth that a serious creator can make a decision without clicking away
36. WHEN the homepage renders THEN it SHALL include all of the following sections in order: Hero → Pain → How It Works → Ownership Transfer → Builds → FAQ → Final CTA
37. WHEN the homepage renders THEN each section SHALL have generous vertical padding (minimum py-24 on desktop) so the page breathes and feels premium, not rushed
38. WHEN the homepage renders THEN the total scroll depth SHALL feel comparable to a high-converting service page — not a landing page stub

---

### Requirement 4 — How It Works Page (/process)

**User Story:** As a creator seriously considering the service, I want a deep-dive process page that answers every question I have before booking, so that I arrive on the call already convinced.

#### Acceptance Criteria

1. WHEN the page renders THEN it SHALL go deeper than the homepage version with expanded detail per day
2. WHEN the 7-day process section renders THEN each day SHALL have an expanded description explaining what happens, why it matters, and what the creator experiences
3. WHEN the "different from agencies" section renders THEN it SHALL clearly contrast this service against hiring an agency or freelancer — specific, not generic
4. WHEN the ownership model section renders THEN it SHALL explain clearly what transfers, how it transfers, and what that means for the creator long-term
5. WHEN the tech stack section renders THEN it SHALL list: Next.js · Supabase · Stripe · OpenAI API · Vercel — each explained in one plain-language sentence, not developer jargon
6. WHEN the page renders THEN it SHALL end with a final CTA section into booking
7. WHEN the page renders THEN there SHALL be no references to "startup founders", "MVPs", or "investor-ready"

---

### Requirement 5 — Builds Page (/builds)

**User Story:** As a creator evaluating the work, I want full case studies for each build so I can see the depth of what was built and trust that it's real.

#### Acceptance Criteria

1. WHEN the page renders THEN it SHALL feature two builds prominently: LinkUp OS and Motiv8
2. WHEN the LinkUp OS case study renders THEN it SHALL include: the client (Jasmin Alić), the problem, what was built, the outcome, and a link to the live platform
3. WHEN the Motiv8 case study renders THEN it SHALL include: the client (Jaime Brenkus), the problem, what was built, the outcome, and a link to the live platform
4. WHEN the page renders THEN it SHALL include the line: "Every build is live. Owned by the creator. Serving real paying members."
5. WHEN the page renders THEN it SHALL end with the CTA: "Ready to see what yours looks like?"
6. WHEN the page renders THEN it SHALL NOT include "These aren't client projects. They're skill demonstrations."

---

### Requirement 6 — About Page (/about)

**User Story:** As a creator deciding whether to trust this person with my platform, I want a positioning page — not a bio — that tells me who Ismail is, what he believes, and whether he's the right person for this.

#### Acceptance Criteria

1. WHEN the page renders THEN it SHALL be a positioning page, not a bio — structured to build trust and conviction
2. WHEN the intro renders THEN it SHALL describe who Ismail is in two direct sentences — no fluff
3. WHEN the origin story renders THEN it SHALL tell one real, brief story about why he built this model
4. WHEN the principles section renders THEN it SHALL include 3 sharp beliefs about creator platforms
5. WHEN the proof section renders THEN it SHALL reference the builds, the stats, and the creator names
6. WHEN the "who I work best with" section renders THEN it SHALL be a direct, honest description of the ideal client
7. WHEN the page renders THEN it SHALL end with a CTA to book a call
8. WHEN the page renders THEN there SHALL be no references to "startup founders", "MVPs", or "non-technical founders"

---

### Requirement 7 — Contact Page (/contact)

**User Story:** As a creator ready to reach out, I want a simple, premium contact page that doesn't feel like a wall of form fields, so that I send a message without friction.

#### Acceptance Criteria

1. WHEN the page renders THEN the headline SHALL read: "One conversation is enough to know if this is right."
2. WHEN the intro paragraph renders THEN it SHALL read: "Tell me about your audience, your current platform, and what you want to change. I respond to every message within 2 hours."
3. WHEN the form renders THEN it SHALL include: Name · Email · Current platform (Kajabi / Circle / Notion / Other as a select) · Brief description of what you're building
4. WHEN the form renders THEN it SHALL NOT include excessive fields — only what's listed above
5. WHEN the contact options render below the form THEN they SHALL include: WhatsApp link · LinkedIn link · Cal.com booking link
6. WHEN the page renders THEN it SHALL feel simple and premium — not a wall of form fields

---

### Requirement 8 — Footer (All Pages)

**User Story:** As a creator at the bottom of any page, I want a clean footer that gives me navigation and contact options without visual noise.

#### Acceptance Criteria

1. WHEN the footer renders THEN the background SHALL use `--primary: #06382C`
2. WHEN the footer renders THEN it SHALL include: Logo · Nav links (How It Works / Builds / About / Contact) · "Built by Ismail Muhammad" · LinkedIn link · Upwork link · © 2025
3. WHEN the footer renders THEN the nav link SHALL read "How It Works" — not "Process"
