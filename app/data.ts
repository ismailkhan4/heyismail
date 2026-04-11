// ─────────────────────────────────────────────
// TypeScript Interfaces
// ─────────────────────────────────────────────

export interface SiteConfig {
  name: string;
  url: string;
  calLink: string;
  whatsapp: string;
  linkedin: string;
  upwork: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  primaryCTA: string;
  primaryCTALink: string;
  secondaryCTA: string;
  secondaryCTALink: string;
  trustBadge: string;
}

export interface PainCard {
  title: string;
  body: string;
  callout?: boolean;
}

export interface ProcessStep {
  day: string;
  title: string;
  description: string;
}

export interface ProcessStepDetailed extends ProcessStep {
  whatHappens: string[];
  whatYouGet: string[];
}

export interface OwnershipItem {
  title: string;
  description: string;
}

export interface Build {
  slug: string;
  product: string;
  creator: string;
  creator_bio: string;
  features: string[];
  stats: string[];
  badge: string;
  url: string;
}

export interface ConceptBuild {
  slug: string;
  product: {
    name: string;
    tagline: string;
    description: string;
    image?: string;
  };
  creator: {
    name: string;
    title: string;
    followers: string;
    picture?: string;
  };
  features: string[];
  links: {
    demo?: string;
  };
  researchNote: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface TechItem {
  name: string;
  plainDescription: string;
}

export interface CaseStudy {
  slug: string;
  product: string;
  creator: string;
  creator_title: string;
  problem: string;
  whatWasBuilt: string[];
  outcome: string;
  stats: string[];
  url: string;
}

export interface Principle {
  title: string;
  description: string;
}

export interface ProofStat {
  stat: string;
  label: string;
  creator: string;
}

export interface AboutContent {
  intro: string[];
  originStory: string;
  principles: Principle[];
  proof: ProofStat[];
  idealClient: string;
}

export interface ContactContent {
  headline: string;
  intro: string;
}

// ─────────────────────────────────────────────
// Site Config
// ─────────────────────────────────────────────

export const SITE: SiteConfig = {
  name: "heyIsmail",
  url: "https://heyismail.com",
  calLink: "https://cal.com/heyismail/15min",
  whatsapp: "https://wa.me/923001234567",
  linkedin: "https://www.linkedin.com/in/heyismail",
  upwork: "https://www.upwork.com/freelancers/~heyismail",
};

export const NAV_LINKS: NavLink[] = [
  { label: "How It Works", href: "/process" },
  { label: "Builds", href: "/builds" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// ─────────────────────────────────────────────
// Homepage — Hero
// ─────────────────────────────────────────────

export const HERO: HeroContent = {
  headline: "Your audience is premium. Your platform should be too.",
  subheadline:
    "I build custom platforms for LinkedIn creators in 7 days. Courses, community, coaching, one branded home your members actually trust. Full ownership on day 7.",
  primaryCTA: "Let's Talk",
  primaryCTALink: "https://cal.com/heyismail/15min",
  secondaryCTA: "See My Builds",
  secondaryCTALink: "/builds",
  trustBadge:
    "Built for Jasmin Alic · 358K followers · $2.3M+ revenue · and Jaime Brenkus · National Fitness Hall of Fame · 10,000+ members",
};

// ─────────────────────────────────────────────
// Homepage — Pain Cards
// ─────────────────────────────────────────────

export const PAIN_CARDS: PainCard[] = [
  {
    title: "Your tech doesn't match your brand",
    body: "You've built something real. But members log in and get Kajabi's UI, Notion's chaos, or a Gumroad page that looks nothing like you. Every click after the sale is part of your product. Right now that part is quietly failing.",
  },
  {
    title: "You're paying to rent someone else's platform",
    body: "Kajabi. Circle. Mighty Networks. You're paying $300–$1,200/month to live inside their brand constraints, their feature limits, and their pricing decisions. You own none of it.",
  },
  {
    title: "Agencies want 8 weeks and $30K before they start",
    body: "You've had the conversations. They want a discovery call, a proposal, a deposit, and two months before anything exists. Meanwhile your next launch happens on the wrong platform again.",
  },
  {
    title:
      "What you actually need: A platform built around your brand, your members, and your content structure. Custom. Delivered in 7 days. Owned completely by you from day one.",
    body: "",
    callout: true,
  },
];

// ─────────────────────────────────────────────
// Homepage — Process Steps (abbreviated)
// ─────────────────────────────────────────────

export const PROCESS_STEPS: ProcessStep[] = [
  {
    day: "Day 1",
    title: "We talk.",
    description: "I learn your brand, your members, your current platform pain.",
  },
  {
    day: "Day 2",
    title: "I map.",
    description:
      "Every page, every flow, every interaction. You approve it before I build.",
  },
  {
    day: "Days 3–5",
    title: "I build.",
    description: "You get daily updates. You test as I go.",
  },
  {
    day: "Day 6",
    title: "We test.",
    description: "Full end-to-end. I fix anything that feels off.",
  },
  {
    day: "Day 7",
    title: "We deploy.",
    description:
      "Source code, credentials, database, everything transferred to you.",
  },
];

// ─────────────────────────────────────────────
// Homepage — Ownership Items
// ─────────────────────────────────────────────

export const OWNERSHIP_ITEMS: string[] = [
  "Custom branded member experience",
  "Complete source code repository",
  "Production database with admin access",
  "Live deployment on your domain",
  "Stripe connected to your bank",
  "All API keys and credentials",
  "Full technical documentation",
  "14 days post-launch support",
];

// ─────────────────────────────────────────────
// Homepage — Builds
// ─────────────────────────────────────────────

export const BUILDS: Build[] = [
  {
    slug: "linkup-os",
    product: "LinkUp OS",
    creator: "Jasmin Alic · #1 LinkedIn Creator · 358,000 followers",
    creator_bio:
      "The most-followed LinkedIn creator in the world. Built a $2.3M+ community business on top of scattered tools.",
    features: [
      "Community feed",
      "Course vault",
      "AI coaching trained on his methodology",
      "Expert feedback system",
      "Leaderboard",
    ],
    stats: ["2,500+ paying members", "$2.3M+ in tracked revenue"],
    badge: "Live in 7 days",
    url: "https://linkup-os.vercel.app",
  },
  {
    slug: "motiv8",
    product: "Motiv8",
    creator:
      "Jaime Brenkus · National Fitness Hall of Fame · 100M YouTube views",
    creator_bio:
      "Hall of Fame fitness coach with a decade of online community building. Needed a platform that matched his reputation.",
    features: [
      "Daily workouts",
      "AI meal planning",
      "Coach check-ins",
      "Two membership tiers",
      "Stripe billing",
    ],
    stats: ["10,000+ members", "94% program completion rate"],
    badge: "Live in 7 days",
    url: "https://motiv8-jaime.vercel.app",
  },
];

// ─────────────────────────────────────────────
// Homepage — FAQs
// ─────────────────────────────────────────────

export const FAQS: FAQ[] = [
  {
    q: "What kind of creators do you build for?",
    a: "LinkedIn creators with an established audience selling courses, coaching, or running paid communities who are embarrassed by the gap between their brand and their current tech.",
  },
  {
    q: "What does the platform actually include?",
    a: "Custom branded UI, course or content delivery, community feed, coaching portal, member onboarding, Stripe billing, and admin access. Built around your specific structure, not a template dropped into a builder.",
  },
  {
    q: "Do I really own everything?",
    a: "Yes. Source code, database, deployment credentials, domain, all transferred to you on day 7. No recurring fees. No lock-in. No dependency on me to keep it running.",
  },
  {
    q: "How is 7 days actually possible?",
    a: "I've built a delivery system specifically around creator platforms. Pre-built foundations for what every platform shares. Custom work for everything that makes yours distinct. It's not magic, it's a focused process refined across every build.",
  },
  {
    q: "What's the investment?",
    a: "Starts at $5,000. Scope determines the final number. Book a call and I'll give you a clear figure in the first 15 minutes.",
  },
  {
    q: "What happens after day 7?",
    a: "14 days of support for fixes and tweaks. After that you can maintain it yourself, bring in your own developer, or retain me for ongoing improvements.",
  },
];

// ─────────────────────────────────────────────
// /process Page — Detailed Steps
// ─────────────────────────────────────────────

export const PROCESS_DETAILED: ProcessStepDetailed[] = [
  {
    day: "Day 1",
    title: "We talk.",
    description:
      "This isn't a sales call. It's a working session. I learn everything about your brand, your members, and the platform you're currently embarrassed by.",
    whatHappens: [
      "60-minute deep-dive call covering your brand, your audience, your content structure",
      "I audit your current platform and identify exactly what's failing",
      "We define what your members actually need vs. what you've been told they need",
      "I ask the questions no agency ever asks: what does your member's first 7 days look like?",
    ],
    whatYouGet: [
      "A clear brief I'll build from, not a vague scope document",
      "Honest assessment of what's worth keeping from your current setup",
      "Confidence that I understand your world before I touch a line of code",
    ],
  },
  {
    day: "Day 2",
    title: "I map.",
    description:
      "Every page, every flow, every interaction mapped before a single line of code is written. You approve it before I build.",
    whatHappens: [
      "Full sitemap and user flow for every member journey",
      "Page-by-page wireframe of the entire platform",
      "Content structure mapped to your actual courses, community, and coaching",
      "You review and approve, nothing gets built without your sign-off",
    ],
    whatYouGet: [
      "Complete visual blueprint of your platform",
      "Zero surprises during the build, you've already seen everything",
      "A document you can share with your team or VA",
    ],
  },
  {
    day: "Days 3–5",
    title: "I build.",
    description:
      "Three focused days of building. You get daily updates and test access as features go live.",
    whatHappens: [
      "Day 3: Core platform structure, authentication, member onboarding",
      "Day 4: Content delivery (courses, community feed, coaching portal), Stripe billing",
      "Day 5: Admin dashboard, member management, final feature integrations",
      "Daily Loom update so you see exactly what's been built",
      "Staging link so you can test as I go",
    ],
    whatYouGet: [
      "A working platform you've been testing for 3 days before launch",
      "No black-box delivery, you're involved the whole way",
      "Feedback incorporated in real time, not after the fact",
    ],
  },
  {
    day: "Day 6",
    title: "We test.",
    description:
      "Full end-to-end test of every flow. I fix anything that feels off before your members ever see it.",
    whatHappens: [
      "Complete walkthrough of every member journey from signup to content access",
      "Payment flow tested with real Stripe test transactions",
      "Mobile and desktop review across multiple devices",
      "I fix every bug, every rough edge, every moment of friction",
    ],
    whatYouGet: [
      "A platform that's been stress-tested before it goes live",
      "Confidence that your members' first experience will be smooth",
      "A punch list of anything you want adjusted before launch",
    ],
  },
  {
    day: "Day 7",
    title: "We deploy.",
    description:
      "Your platform goes live on your domain. Everything transfers to you: source code, database, credentials, all of it.",
    whatHappens: [
      "Production deployment to your custom domain",
      "Full credential transfer: GitHub repo, Supabase, Stripe, Vercel, all API keys",
      "Walkthrough call so you know how to manage everything",
      "Documentation handed over: how to add content, manage members, run reports",
    ],
    whatYouGet: [
      "A live platform your members can access today",
      "Complete ownership of everything, no dependency on me to keep it running",
      "14 days of post-launch support for fixes and tweaks",
    ],
  },
];

// ─────────────────────────────────────────────
// /process Page — Tech Stack
// ─────────────────────────────────────────────

export const TECH_STACK: TechItem[] = [
  {
    name: "Next.js",
    plainDescription:
      "The framework your platform runs on: fast, reliable, and used by the biggest sites on the internet.",
  },
  {
    name: "Supabase",
    plainDescription:
      "Your database and user authentication: stores all your member data securely, with a dashboard you can access anytime.",
  },
  {
    name: "Stripe",
    plainDescription:
      "Payments connected directly to your bank account so money goes to you, not through me.",
  },
  {
    name: "OpenAI API",
    plainDescription:
      "The AI layer that powers any coaching, content, or personalization features in your platform.",
  },
  {
    name: "Vercel",
    plainDescription:
      "Where your platform lives: instant global deployment, automatic scaling, zero maintenance.",
  },
];

// ─────────────────────────────────────────────
// /process Page — Ownership Explained
// ─────────────────────────────────────────────

export const OWNERSHIP_EXPLAINED: OwnershipItem[] = [
  {
    title: "Source code repository",
    description:
      "Your entire codebase transferred to a GitHub repo under your account. Every file, every commit, every line of code is yours.",
  },
  {
    title: "Production database",
    description:
      "Your Supabase project transferred to your account. All member data, content, and records with full admin access.",
  },
  {
    title: "Live deployment",
    description:
      "Your Vercel project transferred to your account. Your platform stays live and scales automatically, no action needed from you.",
  },
  {
    title: "Payment infrastructure",
    description:
      "Stripe connected directly to your bank account. Revenue flows to you from day one, no intermediary, no delay.",
  },
  {
    title: "All credentials and API keys",
    description:
      "Every password, every API key, every secret documented and handed over. You can log in to every service independently.",
  },
  {
    title: "Technical documentation",
    description:
      "A plain-English guide to managing your platform: adding content, managing members, updating settings, running reports.",
  },
];

// ─────────────────────────────────────────────
// /builds Page — Case Studies
// ─────────────────────────────────────────────

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "linkup-os",
    product: "LinkUp OS",
    creator: "Jasmin Alic",
    creator_title: "#1 LinkedIn Creator · 358,000 followers",
    problem:
      "Jasmin had built one of the most-followed LinkedIn presences in the world: 358K followers, a proven methodology, and a community of serious creators willing to pay for access. But his platform was a patchwork of Kajabi, Notion, and Google Docs. Members were paying premium prices for a non-premium experience. The gap between his brand and his tech was costing him credibility and retention.",
    whatWasBuilt: [
      "Custom branded member portal matching his visual identity exactly",
      "Course vault with his complete LinkedIn growth curriculum",
      "Community feed for member interaction and accountability",
      "AI coaching assistant trained on his methodology and 1,000+ of his posts",
      "Expert feedback system for members to get post reviews",
      "Leaderboard and gamification to drive engagement",
      "Stripe billing with annual and monthly membership tiers",
      "Admin dashboard for content management and member oversight",
    ],
    outcome:
      "LinkUp OS launched to his existing audience on day 7. Members who had been on the Kajabi version migrated within the first week. The platform now reflects the quality of his brand and gives him a foundation to scale without platform constraints.",
    stats: ["2,500+ paying members", "$2.3M+ in tracked revenue", "7 days to launch"],
    url: "https://linkup-os.vercel.app",
  },
  {
    slug: "motiv8",
    product: "Motiv8",
    creator: "Jaime Brenkus",
    creator_title: "National Fitness Hall of Fame · 100M YouTube views",
    problem:
      "Jaime had spent decades building one of the most respected fitness brands in the world: Hall of Fame recognition, 100M YouTube views, and a loyal community of members who had followed him for years. His online platform didn't come close to matching that reputation. He needed something that felt as premium as his coaching and that he actually owned.",
    whatWasBuilt: [
      "Custom branded fitness platform with his visual identity throughout",
      "Daily workout delivery system with video and structured programming",
      "AI meal planning tool personalized to member goals",
      "Coach check-in system for accountability and progress tracking",
      "Two membership tiers (standard and premium) with different access levels",
      "Stripe billing with automatic tier management",
      "Member progress dashboard with streak tracking",
      "Admin portal for content scheduling and member management",
    ],
    outcome:
      "Motiv8 launched with Jaime's existing community migrating from his previous platform. The 94% program completion rate, compared to the industry average of 15%, reflects what happens when the platform is built around the coach's actual methodology rather than a generic template.",
    stats: [
      "10,000+ members",
      "94% program completion rate",
      "7 days to launch",
    ],
    url: "https://motiv8-jaime.vercel.app",
  },
  {
    slug: "linkedin-growth-by-fatima",
    product: "LinkedIn Growth OS",
    creator: "Fatima Khan",
    creator_title: "LinkedIn Growth Strategist · Community Builder",
    problem:
      "Fatima had developed a comprehensive LinkedIn growth methodology and built a thriving community around it. However, her educational content was scattered across multiple platforms, making it difficult for members to follow the structured learning path she had designed. She needed a cohesive platform that could deliver her pyramid learning system while fostering community engagement and tracking member progress.",
    whatWasBuilt: [
      "5-level pyramid learning system with progressive skill building",
      "Interactive dashboard with personal analytics and progress tracking",
      "Community hub with social feed, challenges, and leaderboards",
      "Resource library with curated materials organized by learning level",
      "Events management system with live sessions and recordings",
      "Admin dashboard for member management and content curation",
      "Multi-tier membership system (Free, Pro, Annual) with role-based access",
      "Mobile-responsive design with premium user experience",
    ],
    outcome:
      "LinkedIn Growth OS launched as a comprehensive learning management system that combines educational content with community features. The platform successfully guides members through structured LinkedIn growth while maintaining engagement through gamification and social features. The clean, modern interface reflects the premium nature of the content and methodology.",
    stats: [
      "5-level learning system",
      "Full community features",
      "7 days to launch",
    ],
    url: "https://linkedin-growth-by-fatima.vercel.app",
  },
];

// ─────────────────────────────────────────────
// /about Page
// ─────────────────────────────────────────────

export const ABOUT: AboutContent = {
  intro: [
    "I build custom platforms for LinkedIn creators who've outgrown the tools they started with.",
    "Not templates. Not builders. Custom platforms designed around your brand, your content structure, and your members.",
  ],
  originStory:
    "I spent three years building products for founders. Good work, fast delivery, happy clients. Then I started paying attention to a different problem. The creators I followed, people with 100K, 300K, 500K followers, were selling premium access to communities and courses on platforms that looked nothing like them. Kajabi pages with default themes. Notion docs with broken links. Gumroad checkout flows that felt like 2014. These people had built real audiences and real trust. Their tech was quietly undermining both. That's the problem I decided to solve. I rebuilt my entire practice around it. Every build since has been for creators who've earned a platform that matches what they've built.",
  principles: [
    {
      title: "Ownership is non-negotiable",
      description:
        "Every platform I build transfers completely to you on day 7. Source code, database, credentials, all of it. I don't believe in building things people don't own.",
    },
    {
      title: "Speed without shortcuts",
      description:
        "7 days is possible because I've built a focused delivery system, not because I cut corners. The foundations are solid. The custom work is real. The timeline is just what happens when you eliminate everything that doesn't matter.",
    },
    {
      title: "The platform is part of the product",
      description:
        "Your members' experience after they pay is as important as the content you give them. A platform that feels off-brand, slow, or confusing is a retention problem. I build platforms that make your members feel like they made the right decision.",
    },
  ],
  proof: [
    {
      stat: "358K",
      label: "followers on Jasmin Alic's platform",
      creator: "Jasmin Alic",
    },
    {
      stat: "$2.3M+",
      label: "in tracked revenue through LinkUp OS",
      creator: "Jasmin Alic",
    },
    {
      stat: "10,000+",
      label: "members on Motiv8",
      creator: "Jaime Brenkus",
    },
    {
      stat: "94%",
      label: "program completion rate on Motiv8",
      creator: "Jaime Brenkus",
    },
  ],
  idealClient:
    "You're a LinkedIn creator with an established audience of 50K followers or more. You're selling courses, coaching, or running a paid community. You're currently on Kajabi, Circle, Notion, or some combination of tools that don't talk to each other. You're embarrassed by the gap between your brand and your tech. You want to fix it without spending 3 months and $50K on an agency.",
};

// ─────────────────────────────────────────────
// /contact Page
// ─────────────────────────────────────────────

export const CONTACT: ContactContent = {
  headline: "One conversation is enough to know if this is right.",
  intro:
    "Tell me about your audience, your current platform, and what you want to change. I respond to every message within 2 hours.",
};

// ─────────────────────────────────────────────
// Homepage — Tech Stack Badges
// ─────────────────────────────────────────────

export const homepageStack: { name: string; color: string }[] = [
  { name: "Next.js", color: "bg-black text-white" },
  { name: "React", color: "bg-blue-100 text-blue-800" },
  { name: "TypeScript", color: "bg-blue-600 text-white" },
  { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-800" },
  { name: "Supabase", color: "bg-green-100 text-green-800" },
  { name: "Stripe", color: "bg-purple-100 text-purple-800" },
  { name: "Vercel", color: "bg-gray-100 text-gray-800" },
];

export const aiTools: { name: string; color: string }[] = [
  { name: "OpenAI", color: "bg-emerald-100 text-emerald-800" },
  { name: "Claude", color: "bg-orange-100 text-orange-800" },
  { name: "Cursor", color: "bg-pink-100 text-pink-800" },
];

// ─────────────────────────────────────────────
// Concept Builds Data
// ─────────────────────────────────────────────

export const CONCEPT_BUILDS: ConceptBuild[] = [
  {
    slug: "linkup-os",
    product: {
      name: "LinkUp OS",
      tagline: "The complete LinkedIn growth system",
      description: "A comprehensive platform for LinkedIn creators to build their audience, engage with their community, and monetize their expertise through structured courses and AI-powered coaching.",
    },
    creator: {
      name: "Jasmin Alic",
      title: "#1 LinkedIn Creator",
      followers: "358K",
    },
    features: [
      "Community feed with real-time interactions",
      "Course vault with structured LinkedIn curriculum",
      "AI coaching assistant trained on methodology",
      "Expert feedback system for post reviews",
      "Leaderboard and gamification features",
      "Multi-tier membership management",
      "Admin dashboard for content oversight"
    ],
    links: {
      demo: "https://linkup-os.vercel.app"
    },
    researchNote: "I studied Jasmin's content strategy across hundreds of LinkedIn posts, analyzing his unique approach to audience building, engagement tactics, and monetization methods. The platform captures his systematic methodology for LinkedIn growth."
  },
  {
    slug: "motiv8",
    product: {
      name: "Motiv8",
      tagline: "Premium fitness coaching platform",
      description: "A comprehensive fitness platform that delivers personalized workout programs, AI-powered meal planning, and direct coach accountability to help members achieve their fitness goals.",
    },
    creator: {
      name: "Jaime Brenkus",
      title: "National Fitness Hall of Fame",
      followers: "100M+ YouTube views",
    },
    features: [
      "Daily workout delivery with video programming",
      "AI meal planning personalized to goals",
      "Coach check-in system for accountability",
      "Two-tier membership structure",
      "Progress tracking with streak monitoring",
      "Mobile-responsive workout interface",
      "Admin portal for content scheduling"
    ],
    links: {
      demo: "https://motiv8-jaime.vercel.app"
    },
    researchNote: "I analyzed Jaime's decades of fitness expertise, studying his training methodologies, nutritional approaches, and member engagement strategies to create a platform that reflects his Hall of Fame coaching standards."
  },
  {
    slug: "linkedin-growth-by-fatima",
    product: {
      name: "LinkedIn Growth OS",
      tagline: "Systematic LinkedIn growth through structured learning",
      description: "A comprehensive learning management system that guides users through a 5-level pyramid of LinkedIn growth skills, combining educational content with community engagement and progress tracking.",
    },
    creator: {
      name: "Fatima Khan",
      title: "LinkedIn Growth Strategist",
      followers: "Community Builder",
    },
    features: [
      "5-level pyramid learning system with progressive unlocks",
      "Interactive dashboard with personal analytics",
      "Community hub with social feed and challenges",
      "Resource library organized by skill level",
      "Events management with live sessions",
      "Multi-tier membership system (Free/Pro/Annual)",
      "Admin dashboard for member and content management"
    ],
    links: {
      demo: "https://linkedin-growth-by-fatima.vercel.app"
    },
    researchNote: "I studied Fatima's systematic approach to LinkedIn growth, analyzing her educational frameworks, community building strategies, and progressive skill development methodology to create a platform that captures her structured learning philosophy."
  }
];

// ─────────────────────────────────────────────
// Helper Functions for Individual Build Pages
// ─────────────────────────────────────────────

export function getAllBuildSlugs(): string[] {
  return CONCEPT_BUILDS.map(build => build.slug);
}

export function getBuildBySlug(slug: string): ConceptBuild | null {
  return CONCEPT_BUILDS.find(build => build.slug === slug) || null;
}

// ─────────────────────────────────────────────
// Homepage — MVP Checklist
// ─────────────────────────────────────────────

export interface ChecklistItem {
  title: string;
  description: string;
}

export const mvpChecklist: ChecklistItem[] = [
  {
    title: "Custom branded UI",
    description: "Designed around your identity, not a template with your logo dropped in.",
  },
  {
    title: "Member authentication",
    description: "Secure login, onboarding flow, and role-based access from day one.",
  },
  {
    title: "Content delivery",
    description: "Courses, community feed, or coaching portal structured around how you actually work.",
  },
  {
    title: "Stripe billing",
    description: "Payments connected directly to your bank. Monthly, annual, or one-time, your call.",
  },
  {
    title: "Admin dashboard",
    description: "Manage members, content, and settings without touching code.",
  },
  {
    title: "Mobile-responsive",
    description: "Looks and works perfectly on every device your members use.",
  },
  {
    title: "Full ownership transfer",
    description: "Source code, database, credentials, everything handed over on day 7.",
  },
];
