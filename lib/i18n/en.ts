// English copy: the source of truth. de.ts and it.ts carry the same facts.
//
// Every claim below comes from Ismail's own published profiles or was
// confirmed by him. Rules:
// - Project entries keep the public product description (`product`) separate
//   from his own work (`contribution`). Don't merge the two.
// - Team products are described as team work; only Vectum was built alone.
// - Barrierefrei Studio has no code yet (September 2026). Nothing about it may
//   be described as built until the repository exists; see `status` labels.

export type Project = {
  id: string;
  name: string;
  category: string;
  role: string;
  /** Where the work happened: employer or freelance. */
  engagement: string;
  /** Public product site. */
  url: string;
  product: string;
  contribution: string;
  stack: string[];
};

/** Progress label for anything on the Barrierefrei Studio roadmap. */
export type Status = "done" | "next" | "planned";

export const en = {
  meta: {
    title: "Muhammad Ismail – Software Engineer (Frontend) — React · Next.js · React Native",
    description:
      "Software engineer (frontend) with 5 years of professional experience on web and mobile products built with React, Next.js and React Native. Based in Lahore, Pakistan.",
    jobTitle: "Software Engineer (Frontend)",
  },

  skipLink: "Skip to content",

  nav: {
    label: "Main",
    home: "heyIsmail, home",
    work: "Work",
    skills: "Skills",
    about: "About",
    contact: "Contact",
    languageLabel: "Language",
  },

  hero: {
    role: "Software engineer (frontend) working with React, Next.js and React Native.",
    summary:
      "5 years of professional work on products in EdTech, real estate, B2B SaaS and AI, including API and AI integration. I'm a software engineer at ARVO, and previously worked on Graana's React Native app, which has more than 1 million downloads on Google Play.",
    photoAlt: "Portrait of Muhammad Ismail",
    factsLabel: "At a glance",
    facts: [
      { term: "Based in", value: "Lahore, Pakistan · UTC+5" },
      { term: "Looking for", value: "A full-time frontend role" },
    ],
    ctaPrimary: "Get in touch",
    ctaSecondary: "See my work",
  },

  building: {
    heading: "Currently building",
    label: "In research and design · since September 2026",
    name: "Barrierefrei Studio",
    nameNote: "working name",
    summary:
      "An accessibility remediation workspace for small web agencies and e-commerce teams in Europe.",
    body:
      "The goal is to close the gap between finding a WCAG failure and fixing it: scan pages in a real browser, explain each failure in plain language, draft a code fix, then re-run the scan to check that fix before anyone relies on it. Detection stays deterministic; AI only helps explain and fix.",
    progressLabel: "Progress",
    progress: [
      { status: "done" as Status, text: "Research, MVP scope and architecture plan" },
      { status: "next" as Status, text: "Foundations: repository, CI, design tokens and accessibility checks" },
    ],
    stackLabel: "Planned stack",
    stack: ["Next.js", "TypeScript", "Playwright", "axe-core"],
    cta: "Read the case study",
  },

  status: {
    done: "Done",
    next: "Next",
    planned: "Planned",
  },

  work: {
    heading: "Selected work",
    subheading:
      "Products I've worked on, and my part in each. ARVO and Graana were built by teams; the freelance projects were for clients.",
    labelProduct: "The product",
    labelContribution: "My work",
    labelStack: "Stack",
    opensInNewTab: "opens in a new tab",
    items: <Project[]>[
      {
        id: "arvo",
        name: "ARVO",
        category: "EdTech · Web",
        role: "Software Engineer",
        engagement: "ARVO · current role",
        url: "https://arvo.com.pk",
        product:
          "A Pakistani education platform that pairs printed and digital textbooks with a learning management system and campus management tools. In daily use across schools in Pakistan.",
        contribution:
          "Front-end work in the team that builds the web platform: role-based dashboards for students, teachers, school admins and parents, digital textbooks, assignment tracking and real-time notifications, connected to the platform's APIs.",
        stack: ["React", "Next.js", "TypeScript"],
      },
      {
        id: "graana",
        name: "Graana",
        category: "Real estate · Mobile",
        role: "React Native Developer → Frontend Developer",
        engagement: "CodeNinja",
        url: "https://www.graana.com",
        product:
          "A real-estate marketplace for Pakistan with property listings on web and mobile. Its Android app has more than 1 million downloads on Google Play.",
        contribution:
          "Front-end work on the React Native app in the development team. Migrated the codebase from class components to function components with Hooks as part of the team, and integrated the app with its back-end APIs. Later worked across several internal projects as Frontend Developer.",
        stack: ["React Native", "React Hooks"],
      },
      {
        id: "whatever-ai",
        name: "Whatever AI",
        category: "AI · Web",
        role: "Software Engineer",
        engagement: "Freelance",
        url: "https://www.whatever-ai.com",
        product:
          "An AI tool from Atlas Apps (UK) for generating and editing images, removing backgrounds and creating music.",
        contribution:
          "Front end of the platform: the interfaces for the AI tools, the API and AI integration behind them, and the free-to-paid upgrade flow.",
        stack: ["Next.js", "TypeScript", "OpenAI API", "Stripe"],
      },
      {
        id: "supervise",
        name: "Supervise",
        category: "B2B SaaS · Web",
        role: "Software Engineer",
        engagement: "Freelance",
        url: "https://www.supervise.work",
        product:
          "A productivity tracker from Supervise LTD that brings team activity from tools like GitHub, Figma and Google Docs into one dashboard for managers.",
        contribution:
          "Front end of the activity dashboard with per-person breakdowns and automated reports, including the API integration for the GitHub, Figma and Google Docs data behind it.",
        stack: ["Next.js", "React", "REST APIs", "OAuth"],
      },
      {
        id: "vectum",
        name: "Vectum",
        category: "Logistics · Website",
        role: "Software Engineer",
        engagement: "Freelance · 2026",
        // [TODO: link to vectum.it once the production domain serves this site]
        url: "https://vectum-site.vercel.app",
        product: "The website of VECTUM, an Italian logistics company for air cargo, time-critical shipments, road and sea freight.",
        contribution:
          "Built the site on my own: Italian, English and Spanish versions with their own metadata, an animated freight journey on the homepage that turns off with reduced motion, a keyboard-operable menu and an accessibility statement.",
        stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "GSAP"],
      },
    ],
  },

  skills: {
    heading: "Skills",
    groups: [
      { name: "Front end", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML and CSS", "Tailwind CSS", "Material UI"] },
      { name: "Mobile", items: ["React Native", "Expo"] },
      { name: "Integration", items: ["REST APIs", "OAuth", "OpenAI API", "Stripe"] },
      { name: "Tools", items: ["Git", "GitHub", "Jira", "Figma", "Postman", "Vercel"] },
      { name: "Backend (personal projects)", items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
      { name: "Learning now", items: ["Web accessibility (WCAG 2.2)", "Playwright", "axe-core"] },
    ],
  },

  about: {
    heading: "About",
    paragraphs: [
      "I'm a frontend engineer from Lahore, Pakistan. I started building software on my own in 2018 and have worked professionally since 2021, mostly with React, Next.js and React Native.",
      "I'm currently a software engineer at ARVO. Before that I worked at CodeNinja on Graana's mobile app, and I've freelanced for clients in the UK and Italy.",
      "Accessibility is the part of frontend work I'm going deeper on now, and Barrierefrei Studio is how I'm doing it. I'm looking for a full-time frontend role where I can keep working with React, Next.js and React Native and keep going deeper on accessibility.",
    ],
    principlesHeading: "How I work",
    principles: [
      {
        title: "Front ends connected to real systems",
        body: "On every product here I connected the interface to APIs, third-party services or AI: GitHub, Figma and Google Docs data at Supervise, OpenAI and Stripe at Whatever AI.",
      },
      {
        title: "Mostly in teams",
        body: "Most of my work has been in shared codebases alongside other engineers, planned in Jira sprints.",
      },
      {
        title: "Remote and in writing",
        body: "I work across time zones with clients and teams outside Pakistan, including in the UK and Italy.",
      },
    ],
    testimonial: {
      quote:
        "Ismail delivered exactly what we needed; clean, fast, production-ready code with no back-and-forth. He understood the brief immediately and shipped work that genuinely elevated how our agency presents itself online. Rare to find an engineer who thinks about the product, not just the task.",
      author: "Pietro Gadaleta",
      role: "Founder, Agenzia Grafica Milano",
      url: "https://www.agenziagraficamilano.it",
    },
  },

  contact: {
    heading: "Contact",
    subheading: "Email is the fastest way to reach me. I usually reply within a day.",
    emailCta: "Email me",
    copyEmail: "Copy email address",
    copied: "Email address copied",
    linkedin: "LinkedIn",
    github: "GitHub",
    instagram: "Instagram",
    facebook: "Facebook",
    bookCall: "Book a 15-minute call",
    detailsHeading: "For recruiters",
    details: [
      { term: "Location", value: "Lahore, Pakistan (PKT, UTC+5)" },
      { term: "Looking for", value: "Full-time frontend roles: React, Next.js, React Native" },
      { term: "Languages", value: "English (professional working proficiency)" },
    ],
  },

  footer: {
    tagline: "Software engineer (frontend) · Lahore, Pakistan",
    instagramLabel: "Instagram profile, opens in a new tab",
    facebookLabel: "Facebook profile, opens in a new tab",
    languagesLabel: "This site in other languages",
  },

  notFound: {
    title: "Page not found",
    body: "This page doesn't exist or has moved.",
    cta: "Go to the homepage",
  },

  caseStudy: {
    meta: {
      title: "Barrierefrei Studio: accessibility tool in progress – Muhammad Ismail",
      description:
        "Case study of a product in research and design: real-browser WCAG scanning with Playwright and axe-core, AI-drafted fixes that are re-tested before they count, for web agencies in Europe.",
    },
    lastUpdated: "Last updated: October 2026",
    back: "All work",
    label: "Currently building",
    subtitle:
      "An accessibility remediation workspace for small web agencies and e-commerce teams in Europe. It's in research and design; this page separates what's done from what's planned.",
    factsLabel: "Project facts",
    facts: [
      { term: "Stage", value: "Research and design. No code yet." },
      { term: "Started", value: "September 2026" },
      { term: "Role", value: "Solo project" },
      { term: "Planned stack", value: "Next.js, React, TypeScript, Playwright, axe-core" },
    ],
    tocLabel: "On this page",

    overview: {
      heading: "Overview",
      body: [
        "Barrierefrei Studio (a working name) is an accessibility remediation workspace I'm designing. It scans a site's pages in a real browser, explains each WCAG failure in plain language, drafts a code-level fix, and re-runs the scan to check that fix.",
        "It also guides the manual checks automation can't do, and keeps the evidence a client asks for: issue history, reports and a draft accessibility statement.",
      ],
    },
    problem: {
      heading: "Problem",
      body: [
        "Since 28 June 2025, the European Accessibility Act (Directive (EU) 2019/882) has applied to many consumer-facing online shops and services across the EU. Agencies that build and maintain those sites now get the same question from their clients: are we accessible, and what do we need to fix?",
        "The tools on offer don't fit that job well. Free scanners list failures but leave the fix to the developer. Enterprise suites are priced for large companies. Overlay widgets promise automatic compliance; in 2025 the US Federal Trade Commission ordered one overlay vendor, accessiBe, to pay $1 million over misleading claims. And automated rules only catch part of the problem: keyboard flow, focus order and whether alt text is meaningful still need a person.",
      ],
    },
    users: {
      heading: "Who it's for",
      items: [
        {
          title: "Small web agencies",
          body: "Roughly 5–50 people in Europe, building and maintaining Shopify, Shopware, WordPress or headless shops for many clients. They need to scan many sites, hand developers concrete fixes and give clients a report they understand.",
        },
        {
          title: "In-house e-commerce teams",
          body: "Mid-sized retailers with one large shop and a development team of one to five people.",
        },
        {
          title: "Not for",
          body: "Anyone looking for a one-click compliance badge. The product helps teams find and fix problems; it doesn't certify anything.",
        },
      ],
    },
    why: {
      heading: "Why I'm building it",
      body: [
        "Semantic HTML, ARIA, focus management and contrast are frontend problems by definition, and they're the part of frontend work I want to go deeper on. A tool that has to detect those failures, and whose own interface has to get them right, is the most direct way I know to learn them properly.",
        "It's also a problem teams across Europe have right now, with EU law behind it. That gives it a real audience to test against rather than a demo one.",
      ],
    },
    status: {
      heading: "Where it stands",
      intro: "As of September 2026:",
      items: [
        { status: "done" as Status, text: "Market and user research: the problem, the customers, the existing tools and what they cost." },
        {
          status: "done" as Status,
          text: "MVP scope: sites and page lists, real-browser scans, live progress, an issue explorer, issue detail with an AI explanation and a re-tested fix, manual-check guidance, issue workflow and a client report.",
        },
        { status: "done" as Status, text: "Architecture plan and the decisions below, including where AI is and isn't allowed." },
        { status: "next" as Status, text: "Foundations: repository, CI with type checks, tests and accessibility checks, design tokens." },
        { status: "planned" as Status, text: "Scan core: a worker that opens pages with Playwright and runs axe-core, with progress streamed to the interface." },
        { status: "planned" as Status, text: "AI explanations, re-tested fix suggestions, manual checks and client reports." },
      ],
      outcome: "There's no code yet, so there's nothing to demo. Screenshots and the repository will appear here as parts ship.",
    },
    role: {
      heading: "My role",
      body: [
        "It's a solo project, so all of it: research, product scope, interface design, the Next.js front end and the scan worker. It isn't a company, and there are no customers or users yet.",
      ],
    },
    architecture: {
      heading: "Planned architecture",
      intro: "Two deployable parts in one TypeScript codebase, joined by a job queue. These choices come from the research and may change once the scan core exists.",
      items: [
        { title: "Web app", body: "Next.js, React and TypeScript. Sites, scans, the issue explorer and reports." },
        { title: "Job queue", body: "Redis with BullMQ. Hands scan jobs to the worker and reports progress back." },
        { title: "Scan worker", body: "Node.js with Playwright and axe-core. The only part that touches customer sites." },
        { title: "AI adapter", body: "One provider behind an interface, with validated structured output. It proposes; it never decides." },
        { title: "Database", body: "PostgreSQL, hosted in the EU, with each agency's data kept separate." },
      ],
    },
    decisions: {
      heading: "Decisions so far",
      intro: "Made on paper during the design phase, before any code:",
      items: [
        {
          title: "Detection stays deterministic",
          body: "axe-core decides whether a rule fails. It's deterministic, widely used and explainable. AI never decides whether something is an accessibility failure.",
        },
        {
          title: "Scan in a real browser",
          body: "Many shops render content with JavaScript, and contrast depends on computed styles. Static HTML analysis would miss both, so every page loads in headless Chromium.",
        },
        {
          title: "Every AI fix is re-tested",
          body: "A suggested fix is applied to the page in the browser and axe-core runs again. Only fixes that pass are marked as verified.",
        },
        {
          title: "Server-Sent Events for scan progress",
          body: "Progress only flows from server to browser, so SSE is enough: plain HTTP with reconnection built in. WebSockets would add a two-way channel nothing needs.",
        },
        {
          title: "Filters live in the URL",
          body: "A filtered issue list should be shareable with a colleague or linkable from a ticket.",
        },
        {
          title: "Never claim compliance",
          body: "Reports say what was tested and what wasn't. The product helps teams find and fix problems; it doesn't certify anything.",
        },
      ],
    },
    ai: {
      heading: "Where AI helps, and where it doesn't",
      intro: "AI is useful here where context matters. It isn't the core of the product, and the product has to work with it switched off.",
      helpsHeading: "Where AI helps",
      helps: [
        "Explaining a failure for this specific element, in plain language, for a developer or a client.",
        "Drafting a minimal code fix, shown as a diff.",
        "Drafting alt text for images, always for a person to approve.",
        "Turning a page's structure into a page-specific manual checklist, such as “this dialog needs to keep focus inside it”.",
        "Drafting an accessibility statement, clearly marked as a draft and not legal advice.",
      ],
      notHeading: "Deliberately not AI",
      not: ["Detecting failures", "Scoring", "Any statement that a site is compliant"],
    },
    verification: {
      heading: "How AI output gets checked",
      intro: "The loop I'm designing for every fix suggestion:",
      kinds: { deterministic: "Deterministic", ai: "AI-assisted" },
      steps: [
        { kind: "deterministic" as const, title: "Detect", body: "axe-core finds a failure on a specific element." },
        { kind: "ai" as const, title: "Explain", body: "The model explains it, grounded in the rule text and the WCAG success criterion." },
        { kind: "ai" as const, title: "Propose", body: "The model drafts a minimal change to the element's HTML." },
        { kind: "deterministic" as const, title: "Re-test", body: "The worker applies the change to the page in the browser and runs axe-core again." },
        {
          kind: "deterministic" as const,
          title: "Label",
          body: "Verified if the rule passes and nothing new fails; otherwise partially verified or unverified.",
        },
      ],
      note: "Once this exists, I'll measure how many suggestions pass re-testing on a fixed set of test pages and publish the number here. Until then there's no number to publish.",
    },
    accessibility: {
      heading: "Accessibility of the tool itself",
      body: [
        "A tool that reports accessibility failures has to be accessible itself. The target is WCAG 2.2 AA: full keyboard use, managed focus in dialogs, scan progress announced to screen readers, and axe-core checks in CI from the first commit.",
        "I apply the same standard to this site. Every page of heyismail.com is checked with axe-core against the WCAG 2.2 AA rules in its test suite, together with keyboard and focus checks. Automated checks only catch part of what matters, so that's a minimum, not a certificate.",
      ],
    },
    challenges: {
      heading: "Hard problems ahead",
      intro: "Problems I expect to be difficult, based on the research:",
      items: [
        { title: "Arbitrary websites", body: "Cookie banners, slow single-page apps, timeouts and pages that never finish loading." },
        { title: "Large issue lists", body: "A 50-page scan can produce thousands of issues. The explorer needs grouping, virtualised rows and filters that stay fast." },
        { title: "Pointing at the element", body: "Linking a failure to the right spot in a page screenshot and in the DOM, so a developer can find it." },
        { title: "Testing a fix on a page I don't control", body: "Applying a change to someone else's page in a browser without side effects." },
        { title: "AI failures and cost", body: "Timeouts, invalid output and cost per agency. The interface has to stay useful when the model isn't available." },
        { title: "Scanning only what you own", body: "Domain verification, so the tool can't be pointed at other people's sites." },
      ],
    },
    next: {
      heading: "Next",
      items: [
        { status: "next" as Status, text: "Foundations: repository, CI, design tokens and accessibility checks from day one." },
        { status: "planned" as Status, text: "Scan core: page lists, the Playwright and axe-core worker, live progress, issue explorer and issue detail." },
        { status: "planned" as Status, text: "AI layer: explanations, re-tested fix suggestions and alt-text drafts." },
        { status: "planned" as Status, text: "Production basics: manual checks, issue workflow, client reports, EU hosting and data-retention settings." },
      ],
    },
    sourcesHeading: "Sources",
    sources: [
      { label: "Directive (EU) 2019/882 (European Accessibility Act), full text", url: "https://eur-lex.europa.eu/eli/dir/2019/882/oj" },
      { label: "FTC: final order requiring accessiBe to pay $1 million (April 2025)", url: "https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-approves-final-order-requiring-accessibe-pay-1-million" },
      { label: "Deque: how much automated testing finds", url: "https://www.deque.com/blog/automated-testing-study-identifies-57-percent-of-digital-accessibility-issues/" },
      { label: "WCAG 2.2 (W3C)", url: "https://www.w3.org/TR/WCAG22/" },
    ],
    contactHeading: "Want to talk about it?",
    contactBody: "I'm happy to walk through the decisions on this page in an interview.",
    contactCta: "Get in touch",
  },
};

// Leaf strings widened to `string` so de.ts and it.ts can satisfy the same shape.
type LooseLeaves<T> = T extends Status
  ? Status
  : T extends string
  ? string
  : T extends ReadonlyArray<infer U>
  ? Array<LooseLeaves<U>>
  : T extends object
  ? { [K in keyof T]: LooseLeaves<T[K]> }
  : T;

export type Dictionary = LooseLeaves<typeof en>;
