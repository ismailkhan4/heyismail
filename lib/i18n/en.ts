// English copy: the source of truth. de.ts and it.ts carry the same facts.
//
// Every claim below comes from Ismail's own published profiles or was
// confirmed by him. Project entries separate public product facts
// (`product`) from his own work (`contribution`). Don't merge the two.

export type Project = {
  id: string;
  name: string;
  category: string;
  role: string;
  /** Shown next to the role, e.g. "Current role". */
  status?: string;
  /** Public product site. */
  url: string;
  product: string;
  contribution: string;
  stack: string[];
};

export const en = {
  meta: {
    title: "Muhammad Ismail – Frontend Software Engineer (React, Next.js, React Native)",
    description:
      "Frontend software engineer with 5+ years of professional experience building web and mobile products with React, Next.js and React Native, including API and AI integration. Based in Lahore, Pakistan. Open to relocating to Germany or Italy.",
    jobTitle: "Frontend Software Engineer",
  },

  skipLink: "Skip to content",

  nav: {
    label: "Main",
    home: "heyIsmail, home",
    work: "Work",
    stack: "Stack",
    about: "About",
    contact: "Contact",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    languageLabel: "Language",
  },

  hero: {
    eyebrow: "Muhammad Ismail · Frontend Software Engineer",
    headline: "I build web and mobile front ends with React, Next.js and React Native, including API and AI integration.",
    body: "5+ years of professional experience on products in EdTech, real estate, B2B SaaS and AI. I'm currently a React developer at ARVO, and mobile apps I've worked on have over 1 million combined downloads on Google Play.",
    location: "Based in Lahore, Pakistan · Open to relocating to Germany or Italy",
    ctaPrimary: "Get in touch",
    ctaSecondary: "See selected work",
  },

  facts: {
    label: "At a glance",
    items: [
      { value: "5+ years", label: "Professional software engineering" },
      { value: "1M+", label: "Google Play downloads across mobile apps I've worked on" },
      { value: "React · React Native", label: "Web and mobile front ends" },
      { value: "UTC+5", label: "3–4 hours ahead of Berlin and Rome" },
    ],
  },

  work: {
    eyebrow: "Selected work",
    heading: "Production products, and my part in them.",
    subheading:
      "All of these were built by teams. Each entry separates what the product is from the part I worked on.",
    labelProduct: "The product",
    labelContribution: "My work",
    labelStack: "Stack",
    opensInNewTab: "opens in a new tab",
    items: <Project[]>[
      {
        id: "arvo",
        name: "ARVO",
        category: "EdTech · Web and mobile",
        role: "React Developer",
        status: "Current role",
        url: "https://arvo.com.pk",
        product:
          "A Pakistani education platform that pairs printed textbooks with a learning management system and campus management tools. ARVO lists 100+ partner campuses.",
        contribution:
          "Front-end work in the team that builds the web platform: role-based dashboards for students, teachers, school admins and parents, digital textbooks, assignment tracking and real-time notifications, connected to the platform's APIs.",
        stack: ["React", "Next.js"],
      },
      {
        id: "graana",
        name: "Graana",
        category: "Real estate · Mobile",
        role: "Mobile Application Developer",
        url: "https://www.graana.com",
        product:
          "A real-estate marketplace for Pakistan with property listings on web and mobile. Its Android app has more than 1 million downloads on Google Play.",
        contribution:
          "Front-end work on the React Native app in the development team, including migrating the codebase from class components to function components with Hooks and integrating the app with its back-end APIs.",
        stack: ["React Native", "React Hooks"],
      },
      {
        id: "supervise",
        name: "Supervise",
        category: "B2B SaaS · Web",
        role: "Frontend Developer",
        url: "https://www.supervise.work",
        product:
          "A productivity tracker from Supervise LTD that brings team activity from tools like GitHub, Figma and Google Docs into one dashboard for managers.",
        contribution:
          "Front end of the activity dashboard with per-person breakdowns and automated reports, including the API integration for the GitHub, Figma and Google Docs data behind it.",
        stack: ["Next.js", "React", "REST APIs", "OAuth"],
      },
      {
        id: "whatever-ai",
        name: "Whatever AI",
        category: "AI · Web",
        role: "Frontend Developer",
        url: "https://www.whatever-ai.com",
        product:
          "An AI tool from Atlas Apps (UK) for generating and editing images, removing backgrounds and creating music.",
        contribution:
          "Front end of the platform: the interfaces for the AI tools, the API and AI integration behind them, and the free-to-paid upgrade flow.",
        stack: ["Next.js", "TypeScript", "OpenAI API", "Stripe"],
      },
    ],
  },

  stack: {
    eyebrow: "Stack",
    heading: "What I work with day to day.",
    groups: [
      { name: "Front end", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Material UI"] },
      { name: "Mobile", items: ["React Native", "Expo"] },
      { name: "Integration", items: ["REST APIs", "OpenAI API", "Stripe", "OAuth"] },
      { name: "Tools", items: ["Git", "GitHub", "Jira", "Postman", "Figma", "Vercel"] },
      { name: "Back end (basic knowledge)", items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
    ],
  },

  about: {
    eyebrow: "About",
    heading: "Started building software in 2018. Still writing the code.",
    photoAlt: "Portrait of Muhammad Ismail",
    paragraphs: [
      "I'm Muhammad Ismail, a frontend software engineer based in Lahore, Pakistan. I started building software on my own in 2018 and have worked professionally since 2020, mostly with React, Next.js and React Native.",
      "I'm currently a React developer at ARVO. Before that I worked at CodeNinja and as a freelance engineer. Across those roles I've worked on a real-estate app, B2B SaaS, AI products and an EdTech platform.",
      "I'm looking for a full-time frontend engineering role with a company in Germany or Italy that I can relocate to.",
    ],
    principlesHeading: "How I work",
    principles: [
      {
        title: "API and AI integration",
        body: "On every product here I connected React and React Native front ends to REST APIs, third-party services and AI features.",
      },
      {
        title: "Working in a team",
        body: "Every product on this page was built by a team. I'm used to working in a shared codebase alongside other engineers.",
      },
      {
        title: "Remote by default",
        body: "I work in writing, across time zones, with people outside Pakistan, including a founder in Milan.",
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
    eyebrow: "Contact",
    heading: "Let's talk.",
    subheading:
      "Email is the fastest way to reach me. I reply to every message myself, usually within a day.",
    emailCta: "Email me",
    linkedin: "LinkedIn",
    github: "GitHub",
    bookCall: "Book a 15-minute call",
    detailsHeading: "For recruiters",
    details: [
      { term: "Location", value: "Lahore, Pakistan (PKT, UTC+5)" },
      { term: "Looking for", value: "Full-time frontend roles (React, Next.js, React Native)" },
      { term: "Countries", value: "Germany or Italy, with relocation" },
      { term: "Work permit", value: "I'll need a work visa, such as the EU Blue Card. I can start remotely while it's processed." },
      { term: "Languages", value: "English (working language) · German A1–A2, currently learning" },
    ],
  },

  footer: {
    tagline: "Based in Lahore, Pakistan · Open to relocating to Germany or Italy",
    languagesLabel: "This site in other languages",
  },

  notFound: {
    title: "Page not found",
    body: "This page doesn't exist or has moved.",
    cta: "Go to the homepage",
  },
};

// Leaf strings widened to `string` so de.ts and it.ts can satisfy the same shape.
type LooseLeaves<T> = T extends string
  ? string
  : T extends ReadonlyArray<infer U>
  ? Array<LooseLeaves<U>>
  : T extends object
  ? { [K in keyof T]: LooseLeaves<T[K]> }
  : T;

export type Dictionary = LooseLeaves<typeof en>;
