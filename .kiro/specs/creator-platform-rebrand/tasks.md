# Implementation Plan

- [x] 1. Update design tokens in globals.css
  - Replace `--color-primary` with `#0F0F0F`, `--color-accent` with `#14A714`, `--color-accent-hover` with `#129612`
  - Replace `--color-light` with `#F8F8F8`, `--color-dark` with `#0F0F0F`, `--color-background` with `#FFFFFF`
  - Replace `--color-border` with `#E5E5E5`, `--color-muted-foreground` with `#6B7280`
  - Add `--color-forest: #102F27` and `--color-sage: #D9E8D5` tokens
  - Update shadow values to use `rgba(0,0,0,...)` instead of green-tinted values
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7, 9.8_

- [x] 2. Update all content in data.ts
  - Update `SITE` constant: new tagline ("Creator Platform Builder"), new description targeting LinkedIn creators
  - Update `HERO` constant: new headline, subheadline, and CTA labels
  - Update `PROCESS` array: expand to 7 days with new day labels and descriptions per requirements
  - Add two new items to `OWNERSHIP` array: "Custom branded member experience" and "Platform trained around your content structure"
  - Replace `BUILDS` array with two new entries: LinkUp OS (Jasmin Alić) and Motiv8 (Jaime Brenkus) with all fields per requirements
  - Replace `FAQS` array with the 6 new creator-focused Q&As per requirements
  - _Requirements: 2.1, 2.2, 4.1, 4.2, 5.1, 5.2, 6.2, 6.3, 7.2_

- [x] 3. Update Navbar.tsx
  - Change scrolled background from `bg-primary/90` to `bg-white/95 backdrop-blur-md border-b border-[#E5E5E5]`
  - Change unscrolled state to also use white/light background (hero is now light)
  - Update logo text color from `text-white` to `text-[#0F0F0F]`
  - Update nav link colors from `text-white/70 hover:text-white` to `text-[#0F0F0F]/60 hover:text-[#0F0F0F]`
  - Change nav link "Process" to "How It Works" pointing to `/process`
  - Update CTA button text from "Book a Call" to "Book a Free Call" with green bg + white text styles
  - Add "Available for new projects" badge (green dot + text) next to the logo
  - Update mobile menu background from `bg-primary` to `bg-white` with dark text
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

- [x] 4. Rewrite hero section in page.tsx
  - Change section background from `bg-primary` to `bg-white`
  - Remove all `text-white` and `text-white/80` classes, replace with `text-[#0F0F0F]` and `text-[#6B7280]`
  - Update headline text to "Your audience is premium. Your platform should be too."
  - Update subheadline to the new creator-focused copy
  - Update primary CTA button: text "Book a Free Call", styles `bg-[#14A714] text-white rounded-lg`
  - Update secondary CTA button: text "See My Builds", styles `bg-white border border-[#0F0F0F] text-[#0F0F0F] rounded-lg`
  - Replace the right-column "7-Day Process" card with a trust badge component showing creator names and stats
  - Add trust badge below CTAs: "Built for Jasmin Alić (358K followers · $2.3M+ revenue) and Jaime Brenkus (National Fitness Hall of Fame · 10,000+ members)"
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7_

- [x] 5. Rewrite pain section in page.tsx
  - Replace the current 2-column "old way vs sprint way" layout with a 3-card problem grid + 1 solution card
  - Implement 3 problem cards with ❌ titles and new copy per requirements 3.2, 3.3, 3.4
  - Implement 1 full-width solution card with ✅ and green left border per requirement 3.5
  - Card styles: `bg-white border border-[#E5E5E5] rounded-lg` with subtle shadow
  - Section background: `bg-[#F8F8F8]`
  - Remove all references to agencies, startup founders, MVPs
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6_

- [x] 6. Update process and ownership sections in page.tsx
  - Update section intro copy to "7 focused days. Built around your brand. Owned completely by you."
  - Update the process day cards to render 7 days (the PROCESS array now has 7 entries from task 2)
  - Update the ownership section title to "What transfers to you on Day 7"
  - The OWNERSHIP pills will automatically include the two new items added in task 2
  - _Requirements: 4.1, 4.2, 4.3, 5.1, 5.2_

- [x] 7. Rewrite builds section in page.tsx
  - Replace the single featured build card with a 2-column grid (stacked on mobile)
  - Each card shows: product name, creator name + bio, feature list, stats row, "Live in 7 days" badge, live URL link
  - Card styles: `bg-white border border-[#E5E5E5] rounded-lg` with subtle shadow
  - Update section eyebrow from "Concept Builds" to "Client Builds"
  - Replace section description with "Every build is live, owned by the creator, and serving real paying members."
  - Remove any "These aren't client projects" copy
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

- [x] 8. Update FAQ section in page.tsx
  - The FAQS array was replaced in task 2, so the accordion will automatically render the new Q&As
  - Update the section heading from "Questions founders ask before we start." to "Questions creators ask before we start."
  - Verify the old investor/prototype/pivot questions are gone
  - _Requirements: 7.1, 7.2_

- [x] 9. Rewrite bottom CTA section in page.tsx
  - Update section background to `bg-[#102F27]`
  - Update headline to "Your members deserve a platform that matches your brand."
  - Update subtext to the new copy per requirement 8.2
  - Update primary CTA to "Book a Free Call"
  - Add secondary CTA "Message on WhatsApp" linking to `https://wa.me/[phone]` with outline button styles
  - Remove "Ready to Move Fast?" eyebrow
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

- [x] 10. Update Footer.tsx and layout.tsx
  - In `Footer.tsx`: update nav link "Process" → "How It Works", update CTA button text to "Book a Free Call"
  - In `layout.tsx`: update page `<title>` to "Ismail Muhammad — Creator Platform Builder"
  - In `layout.tsx`: update `description` metadata to creator-focused copy
  - In `layout.tsx`: update OpenGraph and Twitter card metadata to match
  - _Requirements: 1.1, 2.6_
