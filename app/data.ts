import type {
  FounderBuild,
  ProcessDay,
  StackItem,
  ChecklistItem,
  ExperienceItem,
  Faq,
} from "./types/global";

// Site-wide metadata and constants
export const SITE = {
  name: "Ismail Muhammad",
  tagline: "SaaS MVP Developer",
  description:
    "I build SaaS MVPs in 7 days for non-technical founders. AI-accelerated development with 100% code ownership.",
  email: "hey@heyismail.com",
  linkedin: "https://linkedin.com/in/heyismail",
  calendly: "https://heyismail.com",
  location: "Lahore, Pakistan",
};

// Hero section content
export const HERO = {
  eyebrow: "15+ MVPs Shipped · AI-Accelerated · 7-Day Sprints",
  headline: {
    line1: "I turn your idea into a",
    line2: "live product in 7 days.",
  },
  cta: {
    primary: "Book a Free Idea Call",
    secondary: "See Concept Builds",
  },
};

// Core technology stack
export const STACK: StackItem[] = [
  {
    name: "Next.js",
    color: "#000000",
    role: "Frontend & Backend",
  },
  {
    name: "Supabase",
    color: "#3ECF8E",
    role: "Database & Auth",
  },
  {
    name: "Stripe",
    color: "#635BFF",
    role: "Payments",
  },
  {
    name: "Tailwind CSS",
    color: "#06B6D4",
    role: "Styling",
  },
];

// AI tools used in development
export const AI_TOOLS: StackItem[] = [
  {
    name: "Claude",
    color: "#D97706",
    role: "Code Generation",
  },
  {
    name: "ChatGPT",
    color: "#10A37F",
    role: "Problem Solving",
  },
  {
    name: "v0",
    color: "#000000",
    role: "UI Components",
  },
  {
    name: "Cursor",
    color: "#000000",
    role: "AI IDE",
  },
];

// 7-day process breakdown
export const PROCESS: ProcessDay[] = [
  {
    day: "Day 1",
    title: "Define",
    headline:
      "We nail down your core features, user flow, and technical requirements.",
    description: "No scope creep, just clarity on what we're building and why.",
  },
  {
    day: "Day 2–3",
    title: "Build",
    headline:
      "AI generates the foundation while I focus on your unique business logic.",
    description:
      "The heavy lifting gets done here — database design, authentication, core features.",
  },
  {
    day: "Day 4–5",
    title: "Polish",
    headline: "Integration, testing, and refinement.",
    description:
      "Making sure everything works smoothly together and feels professional.",
  },
  {
    day: "Day 6",
    title: "Deploy",
    headline: "Live deployment with your domain and environment setup.",
    description:
      "Your MVP goes live with proper hosting, SSL, and production configuration.",
  },
  {
    day: "Day 7",
    title: "Deliver",
    headline: "Full handover with source code and documentation.",
    description:
      "You get everything — code, credentials, and 30 minutes of walkthrough training.",
  },
];

// What clients own after Day 7
export const OWNERSHIP: string[] = [
  "Source code",
  "Database",
  "Deployment",
  "Domain",
  "Stripe account",
  "Environment variables",
];

// MVP quality checklist - the 7 non-negotiables
export const CHECKLIST: ChecklistItem[] = [
  {
    item: "Real user authentication",
    detail: "Not just a login form — actual session management and security",
  },
  {
    item: "Working payment system",
    detail:
      "Stripe integration that actually processes money, not just UI mockups",
  },
  {
    item: "Live database operations",
    detail:
      "Real CRUD operations with proper data validation and relationships",
  },
  {
    item: "Mobile responsive design",
    detail: "Works perfectly on phones, not just 'looks okay' on desktop",
  },
  {
    item: "Production deployment",
    detail: "Live on a real domain with SSL, not localhost screenshots",
  },
  {
    item: "Error handling & validation",
    detail: "Graceful failures and user feedback, not console.log debugging",
  },
  {
    item: "Scalable architecture",
    detail: "Built to handle growth, not held together with duct tape",
  },
];

// Concept builds portfolio
export const BUILDS: FounderBuild[] = [
  {
    slug: "linkup-os",
    creator: "Alex Chen",
    creator_bio: "Ex-Google PM, 2x founder",
    product: "Linkup OS",
    tagline: "The operating system for professional networking",
    description:
      "Alex needed a platform that could handle complex relationship mapping and smart introductions for his network of 10K+ professionals.",
    gap: "Existing networking tools were either too simple (basic contact management) or too complex (enterprise CRM). Nothing existed for the middle market of serious networkers.",
    built: [
      "Smart contact relationship mapping",
      "AI-powered introduction suggestions",
      "Event integration and follow-up automation",
      "Privacy-first contact sharing",
      "Mobile-optimized networking dashboard",
      "Stripe integration for premium features",
    ],
    days: 7,
    url: "https://linkup-os.com",
    stack: [
      "Next.js",
      "Supabase",
      "OpenAI",
      "Stripe",
      "Tailwind CSS",
      "Vercel",
    ],
    accent: "#3B82F6",
    bg: "#1E40AF",
  },
];

// Professional experience timeline
export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Freelance MVP Development",
    role: "Full-Stack Developer",
    type: "Freelance",
    period: "Sep 2024 – Present",
    location: "Remote",
    highlights: [
      "15+ MVPs shipped for Y Combinator and Techstars founders",
      "Clients raised $12M+ combined funding",
      "7-day average delivery time using AI-accelerated development",
    ],
  },
  {
    company: "TechFlow Solutions",
    role: "Senior Full-Stack Developer",
    type: "Full-time",
    period: "Jan 2022 – Aug 2024",
    location: "Lahore, Pakistan",
    highlights: [
      "Led development of 3 SaaS products from 0 to 10K+ users",
      "Built scalable Next.js applications handling 100K+ monthly active users",
      "Mentored 5 junior developers on modern React and TypeScript patterns",
    ],
  },
  {
    company: "StartupLab",
    role: "Frontend Developer",
    type: "Full-time",
    period: "Jun 2020 – Dec 2021",
    location: "Lahore, Pakistan",
    highlights: [
      "Developed MVPs for 8 early-stage startups",
      "Specialized in rapid prototyping and user interface development",
      "Collaborated directly with founders on product strategy and technical decisions",
    ],
  },
];

// Frequently asked questions
export const FAQS: Faq[] = [
  {
    q: "How can you build an MVP in just 7 days?",
    a: "I use AI to handle 70% of the boilerplate code, architecture, and standard components. This lets me focus on your unique business logic, user experience, and the details that matter. It's not about cutting corners — it's about working smarter.",
  },
  {
    q: "Do I really own everything?",
    a: "Yes, 100%. You get the source code, database access, deployment credentials, domain ownership, Stripe account, and all environment variables. No vendor lock-in, no recurring fees to access your own product.",
  },
  {
    q: "What if my idea changes during the build?",
    a: "We include one major pivot during the 7 days. The key is getting clear on your core value proposition in Day 1. Small tweaks are normal, but if you want to build something completely different, that's a new project.",
  },
  {
    q: "Is this just a template with my branding?",
    a: "No. Every MVP is custom-built for your specific use case and business model. I use proven frameworks and patterns, but the features, logic, and user experience are designed specifically for your audience.",
  },
  {
    q: "What happens after Day 7?",
    a: "You get 30 days of support for bug fixes and minor adjustments. After that, you can maintain it yourself, hire your own developer, or continue working with me on new features and iterations.",
  },
  {
    q: "How do I know this will work for investors?",
    a: "I've built MVPs for founders who've raised $12M+ combined. Investors want to see real functionality, not demos. Every MVP I deliver has working payments, authentication, database operations, and production deployment — the fundamentals that prove you can execute.",
  },
];
