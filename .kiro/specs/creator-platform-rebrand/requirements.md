# Requirements Document

## Introduction

This spec covers the full content and design rebrand of heyismail.com. The site currently targets non-technical startup founders looking for MVP development. The rebrand repositions it entirely for LinkedIn creators earning $30K–$150K/month who need a custom platform to replace their cobbled-together Kajabi/Circle/Notion stack. The goal is a premium, clean, light-mode aesthetic that makes a high-earning creator trust the site immediately — before reading a single word.

No new pages or routes are being added. No tech stack changes. This is a content rewrite + visual redesign of the existing site.

---

## Requirements

### Requirement 1 — Navigation

**User Story:** As a visiting creator, I want a clean, premium nav that reflects the brand I'm about to trust with my platform, so that I feel confident before I even scroll.

#### Acceptance Criteria

1. WHEN the page loads THEN the navbar SHALL display links: How It Works / Builds / About / Contact
2. WHEN a user views the CTA button THEN it SHALL read "Book a Free Call" (not "Let's talk" or "Book a Call")
3. WHEN the navbar renders THEN it SHALL display the "Available for new projects" green dot badge
4. WHEN the navbar is scrolled past THEN it SHALL remain fixed and legible with a light/white background blur — not dark
5. WHEN on mobile THEN the navbar SHALL collapse into a hamburger menu with the same links

---

### Requirement 2 — Hero Section

**User Story:** As a LinkedIn creator with a real audience, I want the hero to speak directly to my situation, so that I immediately know this service is built for me.

#### Acceptance Criteria

1. WHEN the hero renders THEN the headline SHALL read: "Your audience is premium. Your platform should be too."
2. WHEN the hero renders THEN the subheadline SHALL read: "I build custom platforms for LinkedIn creators in 7 days. Courses, community, coaching — one branded home. Full ownership transferred on day 7."
3. WHEN the hero renders THEN the primary CTA SHALL read "Book a Free Call" linking to the contact/calendly page
4. WHEN the hero renders THEN the secondary CTA SHALL read "See My Builds" linking to /builds
5. WHEN the hero renders THEN a trust badge SHALL appear below the CTAs reading: "Built for Jasmin Alić (358K followers · $2.3M+ revenue) and Jaime Brenkus (National Fitness Hall of Fame · 10,000+ members)"
6. WHEN the hero renders THEN there SHALL be no references to "non-technical founders", "MVPs", or "startup ideas"
7. WHEN the hero renders on mobile THEN all elements SHALL stack cleanly and remain readable

---

### Requirement 3 — Pain Section (Problem/Solution)

**User Story:** As a creator, I want to see my exact frustrations named clearly, so that I feel understood and keep reading.

#### Acceptance Criteria

1. WHEN the pain section renders THEN it SHALL display three "problem" cards and one "solution" card
2. WHEN card 1 renders THEN it SHALL be titled "❌ Your tech doesn't match your brand" with the copy: "You've built something real. But members log in and get Kajabi's UI, Notion's chaos, or a Gumroad page that looks nothing like you. Every click after the sale is part of the product. Right now that part is failing quietly."
3. WHEN card 2 renders THEN it SHALL be titled "❌ You're paying to rent someone else's platform" with the copy: "Kajabi. Circle. Mighty Networks. You're paying $300–$1,200/month to live inside their brand constraints, their feature limits, and their pricing changes. You don't own any of it."
4. WHEN card 3 renders THEN it SHALL be titled "❌ Agencies want 8 weeks and $30K to start" with the copy: "You've talked to agencies. They want a discovery call, a proposal, a deposit, and 6–8 weeks before anything is live. By then your next launch has already happened on the wrong platform."
5. WHEN the solution card renders THEN it SHALL read: "✅ What you actually need: A custom platform that looks like you, works for your members, and is fully yours. Delivered in 7 days. No monthly fees. No lock-in."
6. WHEN the section renders THEN there SHALL be no references to "agencies charging $80K", "startup founders", or "MVPs"

---

### Requirement 4 — How It Works Section

**User Story:** As a creator evaluating the service, I want to see a clear 7-day timeline, so that I understand exactly what I'm committing to.

#### Acceptance Criteria

1. WHEN the section renders THEN the intro copy SHALL read: "7 focused days. Built around your brand. Owned completely by you."
2. WHEN the timeline renders THEN it SHALL show 7 days (not 5) with the following labels and descriptions:
   - Day 1: "We talk. I learn your brand, your members, your current platform pain."
   - Days 2–3: "I build the core. You log in and see it moving."
   - Days 4–5: "I connect every flow. Payments, onboarding, content access."
   - Day 6: "Full end-to-end test. I fix anything that feels off."
   - Day 7: "We deploy. Source code, credentials, and everything transferred to you."
3. WHEN the section renders THEN it SHALL NOT say "5 focused days" or "No surprises. Complete ownership."

---

### Requirement 5 — What You Receive Section

**User Story:** As a creator, I want to know exactly what I walk away with, so that I can justify the investment.

#### Acceptance Criteria

1. WHEN the section renders THEN the title SHALL read: "What transfers to you on Day 7" (not "What you receive on Day 8")
2. WHEN the list renders THEN it SHALL include all existing ownership items PLUS two new ones: "Custom branded member experience" and "Platform trained around your content structure"

---

### Requirement 6 — Builds Section

**User Story:** As a creator, I want to see real builds for real creators I might recognize, so that I trust the work is legitimate.

#### Acceptance Criteria

1. WHEN the builds section renders THEN it SHALL display exactly two build cards
2. WHEN card 1 renders THEN it SHALL show: LinkUp OS / Jasmin Alić · #1 LinkedIn Creator · 358,000 followers / Community feed. Course vault. AI coaching. Expert feedback. Leaderboard. / 2,500+ paying members · $2.3M+ in tracked revenue / Live in 7 days · linkup-os.vercel.app
3. WHEN card 2 renders THEN it SHALL show: Motiv8 / Jaime Brenkus · National Fitness Hall of Fame · 100M YouTube views / Daily workouts. AI meal planning. Coach check-ins. Two membership tiers. Stripe billing. / 10,000+ members · 94% program completion rate / Live in 7 days · motiv8-jaime.vercel.app
4. WHEN the section renders THEN it SHALL NOT include the line "These aren't client projects. They're skill demonstrations."
5. WHEN the section renders THEN it SHALL include the line: "Every build is live, owned by the creator, and serving real paying members."

---

### Requirement 7 — FAQ Section

**User Story:** As a creator with real money on the line, I want my specific objections answered directly, so that I feel confident booking a call.

#### Acceptance Criteria

1. WHEN the FAQ renders THEN it SHALL NOT include: "How can you build a real product in just 7 days?", "Is this investor-ready or just a prototype?", or "What if my idea changes during the 7 days?"
2. WHEN the FAQ renders THEN it SHALL include these six questions and answers:
   - Q: "What kind of creators do you build for?" — A: LinkedIn creators with an established audience selling courses, coaching, or running a paid community whose current platform doesn't match their brand.
   - Q: "What does the platform actually include?" — A: Custom branded UI, course/content delivery, community feed, coaching portal, member onboarding, Stripe billing, and admin access. Built around your specific structure — not a template.
   - Q: "Do I really own everything?" — A: Yes. Source code, database, deployment credentials, domain — all transferred on day 7. No recurring fees. No lock-in.
   - Q: "How is 7 days possible?" — A: Pre-built foundations for the parts every platform shares. Custom work for everything that makes yours yours. It's a focused process built from doing this repeatedly.
   - Q: "What's the investment?" — A: Starts at $5,000. Depends on scope. Book a call for a clear number in the first conversation.
   - Q: "What happens after day 7?" — A: 14 days of support for fixes and tweaks. After that: maintain yourself, bring your own developer, or work on a monthly retainer for new features.

---

### Requirement 8 — CTA / Footer Section

**User Story:** As a creator who's read the whole page, I want a final CTA that feels like a low-pressure next step, so that I book the call without hesitation.

#### Acceptance Criteria

1. WHEN the CTA section renders THEN the headline SHALL read: "Your members deserve a platform that matches your brand."
2. WHEN the CTA section renders THEN the subtext SHALL read: "Book a free 15-minute call. I'll look at your current setup and tell you exactly what a custom platform would look like for you. No pitch. No pressure."
3. WHEN the CTA section renders THEN the primary CTA SHALL read "Book a Free Call"
4. WHEN the CTA section renders THEN a secondary option SHALL read "Message on WhatsApp"
5. WHEN the CTA section renders THEN it SHALL NOT say "Ready to Move Fast?"

---

### Requirement 9 — Design System & Visual Direction

**User Story:** As a creator landing on this site, I want the visual design to feel premium and intentional, so that I trust the person behind it before reading anything.

#### Acceptance Criteria

1. WHEN any page renders THEN the background SHALL be white (#FFF) or very light gray (#F8F8F8 / #F5F5F5) — no dark backgrounds except the footer CTA section
2. WHEN green (#14A714) is used THEN it SHALL appear only on primary CTAs, accent lines, and active states — never as a dominant background color
3. WHEN cards render THEN they SHALL have 1px borders (#E5E5E5) and subtle box shadows — not heavy drop shadows
4. WHEN primary buttons render THEN they SHALL use #14A714 background with white text and rounded-lg corners
5. WHEN secondary buttons render THEN they SHALL use white background with #0F0F0F border and text
6. WHEN section backgrounds need a soft break THEN #D9E8D5 MAY be used sparingly
7. WHEN the footer or high-contrast CTA section renders THEN it MAY use #102F27 as the background
8. WHEN headlines render THEN they SHALL use #0F0F0F — never gray-washed
9. WHEN icons are used THEN they SHALL be line-style with consistent weight — no filled colorful icon sets
10. WHEN the page renders THEN section padding SHALL be generous — never cramped
11. WHEN the page renders on mobile THEN every section SHALL be fully responsive
12. WHEN the hero section renders THEN it SHALL use a light/white background — not the current dark green (#102F27) background
