# Requirements Document

## Introduction

This project involves a complete content rewrite and new page creation for heyismail.com, a personal portfolio and service website for Ismail Muhammad, an AI-accelerated SaaS MVP developer. The goal is to transform the existing content to speak directly to non-technical founders (specifically "Alex" - the ideal customer profile) while maintaining the exact same design, layout, and styling. The project also includes creating new pages (/builds, /about, /contact) and implementing comprehensive SEO/AEO optimization.

## Requirements

### Requirement 1

**User Story:** As a non-technical founder visiting heyismail.com, I want to immediately understand that Ismail can build my SaaS MVP in 7 days, so that I can quickly assess if this service fits my needs.

#### Acceptance Criteria

1. WHEN a user lands on the homepage THEN the hero section SHALL display a clear value proposition targeting non-technical founders
2. WHEN a user reads the hero headline THEN it SHALL be written in three lines with maximum 15 words per line
3. WHEN a user views the hero content THEN it SHALL speak directly to "Alex" using second person "you" throughout
4. WHEN a user sees the social proof bar THEN it SHALL display 4 specific metrics: 15+ MVPs Shipped, 7 Days timeline, 4+ Years Building, 500K+ App Downloads

### Requirement 2

**User Story:** As a non-technical founder, I want to understand exactly what happens each day of the 7-day sprint, so that I can feel confident about the process and timeline.

#### Acceptance Criteria

1. WHEN a user visits the /process page THEN it SHALL provide a detailed day-by-day breakdown of the 7-day sprint
2. WHEN a user reads the process content THEN each day SHALL have a clear title, description, and deliverables
3. WHEN a user views Day 1 content THEN it SHALL emphasize scope definition and feature cutting
4. WHEN a user sees the scope call section THEN it SHALL break down the 30-minute call into 4 specific stages
5. WHEN a user reads any process description THEN it SHALL avoid technical jargon and speak in plain language

### Requirement 3

**User Story:** As a potential client, I want to see examples of what Ismail builds when nobody's watching, so that I can understand his capabilities and approach to product development.

#### Acceptance Criteria

1. WHEN a user visits the /builds page THEN it SHALL display concept builds as demonstrations of skill, not client projects
2. WHEN a user reads build descriptions THEN each SHALL use "I studied their system" framing, never "they hired me"
3. WHEN a user views build cards THEN each SHALL include: creator info, product name, tagline, description, built features list, and research note
4. WHEN a user sees the builds content THEN it SHALL include at least 3 complete build examples: Linkup OS, Step by Step OS, and The 3 Alarms Lab
5. WHEN a user reads build descriptions THEN they SHALL emphasize research and understanding before building

### Requirement 4

**User Story:** As a visitor interested in Ismail's background, I want to learn about his experience and the failure that shaped his approach, so that I can trust his expertise and methodology.

#### Acceptance Criteria

1. WHEN a user visits the /about page THEN it SHALL include the origin story about the failed project that changed his approach
2. WHEN a user reads the origin story THEN it SHALL be written as honest, personal narrative without corporate language
3. WHEN a user views the experience section THEN it SHALL display real work history with specific companies and achievements
4. WHEN a user sees the "Why Work With Me" section THEN it SHALL provide 3 clear differentiators from agencies
5. WHEN a user reads any about content THEN it SHALL maintain the conversational, direct tone throughout

### Requirement 5

**User Story:** As a non-technical founder ready to move forward, I want clear options for getting in touch with Ismail, so that I can easily book a call or send a message.

#### Acceptance Criteria

1. WHEN a user visits the /contact page THEN it SHALL provide two clear contact options: booking a call and LinkedIn messaging
2. WHEN a user reads the contact page THEN it SHALL emphasize that the call is not a sales pitch
3. WHEN a user sees the call option THEN it SHALL include 3 specific benefits of the free consultation
4. WHEN a user views the LinkedIn option THEN it SHALL provide clear instructions for messaging
5. WHEN a user reads contact content THEN it SHALL maintain the "no pressure" messaging throughout

### Requirement 6

**User Story:** As a search engine or AI system, I want to properly understand and index the website content, so that relevant users can discover Ismail's services through search.

#### Acceptance Criteria

1. WHEN search engines crawl any page THEN each page SHALL have unique, optimized meta titles and descriptions
2. WHEN content is analyzed THEN each page SHALL use proper heading hierarchy (H1 → H2 → H3)
3. WHEN pages are indexed THEN primary keywords SHALL appear in H1, first paragraph, at least one H2, and meta description
4. WHEN structured data is parsed THEN FAQ pages SHALL include JSON-LD FAQ schema
5. WHEN the site is crawled THEN it SHALL include Person schema for Ismail Muhammad
6. WHEN pages are analyzed THEN each SHALL have minimum 800 words of content (1200+ for homepage)

### Requirement 7

**User Story:** As a user navigating the website, I want the navigation and footer to reflect Ismail's personality and provide easy access to his profiles, so that I can connect with him on multiple platforms.

#### Acceptance Criteria

1. WHEN a user views the navigation THEN it SHALL include personalized link text like "I post on LinkedIn" and "Hire me on Upwork"
2. WHEN a user clicks LinkedIn or Upwork links THEN they SHALL open in new tabs
3. WHEN a user views the footer THEN it SHALL include the tagline "Building SaaS MVPs for non-technical founders. One sprint at a time."
4. WHEN a user sees footer links THEN they SHALL include all main pages and external profiles
5. WHEN a user views any navigation element THEN it SHALL maintain consistency across all pages

### Requirement 8

**User Story:** As a developer maintaining this website, I want all content changes to preserve the existing design system, so that the visual appearance remains unchanged while content is updated.

#### Acceptance Criteria

1. WHEN content is updated THEN zero Tailwind classes SHALL be modified on existing components
2. WHEN new pages are created THEN they SHALL use exact same component patterns as existing pages
3. WHEN content is replaced THEN colors, fonts, spacing, and layout SHALL remain identical
4. WHEN the build process runs THEN it SHALL produce zero TypeScript errors and zero ESLint warnings
5. WHEN new content is added THEN it SHALL fit within existing component structures without design modifications