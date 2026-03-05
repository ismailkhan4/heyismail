import type {
  SiteMeta,
  StackItem,
  ProcessDay,
  FounderCase,
  Experience,
  Faq,
  ChecklistItem
} from '@/types'

// Site-wide metadata
export const SITE_META: SiteMeta = {
  name: "Ismail Muhammad",
  tagline: "SaaS MVP Developer",
  description: "I build SaaS MVPs in 7 days for non-technical founders. AI-accelerated development with 100% code ownership.",
  email: "hey@heyismail.com",
  linkedin: "https://linkedin.com/in/heyismail",
  calendly: "https://heyismail.com",
  location: "Lahore, Pakistan",
  mvps_shipped: "15+",
  years_experience: "4+"
}

// Core technology stack
export const STACK: StackItem[] = [
  {
    name: "Next.js",
    color: "#000000",
    role: "Frontend & Backend"
  },
  {
    name: "Supabase",
    color: "#3ECF8E",
    role: "Database & Auth"
  },
  {
    name: "Stripe",
    color: "#635BFF",
    role: "Payments"
  },
  {
    name: "Tailwind CSS",
    color: "#06B6D4",
    role: "Styling"
  },
  {
    name: "Vercel",
    color: "#000000",
    role: "Deployment"
  }
]

// AI tools used in development
export const AI_TOOLS: StackItem[] = [
  {
    name: "Claude",
    color: "#D97706",
    role: "Code Generation"
  },
  {
    name: "ChatGPT",
    color: "#10A37F",
    role: "Problem Solving"
  },
  {
    name: "v0",
    color: "#000000",
    role: "UI Components"
  },
  {
    name: "Cursor",
    color: "#000000",
    role: "AI IDE"
  }
]

// 7-day process breakdown
export const PROCESS_DAYS: ProcessDay[] = [
  {
    day: "Day 1",
    title: "Define",
    description: "We nail down your core features, user flow, and technical requirements. No scope creep, just clarity."
  },
  {
    day: "Day 2–3",
    title: "Build",
    description: "AI generates the foundation while I focus on your unique business logic and user experience."
  },
  {
    day: "Day 4–5",
    title: "Polish",
    description: "Integration, testing, and refinement. Making sure everything works smoothly together."
  },
  {
    day: "Day 6",
    title: "Deploy",
    description: "Live deployment with your domain, environment setup, and initial data migration."
  },
  {
    day: "Day 7",
    title: "Deliver",
    description: "Full handover with source code, documentation, and 30 minutes of walkthrough training."
  }
]

// What clients own after Day 7
export const WHAT_YOU_OWN: string[] = [
  "Source code",
  "Database",
  "Deployment",
  "Domain",
  "Stripe account",
  "Environment variables"
]

// MVP quality checklist
export const MVP_CHECKLIST: ChecklistItem[] = [
  {
    item: "Real user authentication",
    detail: "Not just a login form — actual session management and security"
  },
  {
    item: "Working payment system",
    detail: "Stripe integration that actually processes money, not just UI mockups"
  },
  {
    item: "Live database operations",
    detail: "Real CRUD operations with proper data validation and relationships"
  },
  {
    item: "Mobile responsive design",
    detail: "Works perfectly on phones, not just 'looks okay' on desktop"
  },
  {
    item: "Production deployment",
    detail: "Live on a real domain with SSL, not localhost screenshots"
  },
  {
    item: "Error handling & validation",
    detail: "Graceful failures and user feedback, not console.log debugging"
  },
  {
    item: "Scalable architecture",
    detail: "Built to handle growth, not held together with duct tape"
  }
]

// Case studies / founder series
export const FOUNDER_SERIES: FounderCase[] = [
  {
    slug: "linkup-os",
    founder: "Alex Chen",
    founder_bio: "Ex-Google PM, 2x founder",
    product: "Linkup OS",
    tagline: "The operating system for professional networking",
    description: "Alex needed a platform that could handle complex relationship mapping and smart introductions for his network of 10K+ professionals.",
    gap: "Existing networking tools were either too simple (basic contact management) or too complex (enterprise CRM). Nothing existed for the middle market of serious networkers.",
    built: [
      "Smart contact relationship mapping",
      "AI-powered introduction suggestions",
      "Event integration and follow-up automation",
      "Privacy-first contact sharing",
      "Mobile-optimized networking dashboard",
      "Stripe integration for premium features"
    ],
    days: 7,
    url: "https://linkup-os.com",
    stack: ["Next.js", "Supabase", "OpenAI", "Stripe", "Tailwind CSS", "Vercel"],
    color: "#3B82F6",
    accent: "#1E40AF"
  }
]

// Legacy project data for current page compatibility
export const projects = [
  {
    name: "Jobit World",
    desc: "A modern job platform built to help global talent find opportunities faster — leveraging AI-driven matching and smart UI design.",
    tags: ["Next.js", "OpenAI", "Supabase", "Stripe"],
    metrics: { users: "2.3K+", revenue: "$12K MRR", time: "6 days" },
    gradient: "from-emerald-500/10 to-teal-500/10",
    link: "https://jobit.world",
    img: "/portfolio/jobit.jpg",
  },
  {
    name: "Whatever AI",
    desc: "An AI content platform that helps marketers create better ads in seconds — with GPT-driven creative generation and analytics.",
    tags: ["Next.js", "OpenAI", "Vercel", "Tailwind"],
    metrics: { users: "1.8K+", revenue: "$6K MRR", time: "5 days" },
    gradient: "from-teal-500/10 to-cyan-500/10",
    link: "https://whatever-ai.com",
    img: "/portfolio/whatever.jpg",
  },
  {
    name: "Supervise",
    desc: "A smart workforce supervision system built for enterprise teams — improving visibility, accountability, and efficiency.",
    tags: ["React", "Node.js", "PostgreSQL", "Realtime"],
    metrics: { users: "500+", revenue: "Enterprise Clients", time: "7 days" },
    gradient: "from-cyan-500/10 to-blue-500/10",
    link: "https://supervise.work",
    img: "/portfolio/supervise.jpg",
  },
  {
    name: "TheFlex Living",
    desc: "A property and housing startup offering flexible living options across global cities — full MVP designed and built end-to-end.",
    tags: ["Next.js", "Sanity CMS", "Tailwind", "Vercel"],
    metrics: { users: "1.2K+", revenue: "B2B SaaS", time: "8 days" },
    gradient: "from-blue-500/10 to-indigo-500/10",
    link: "https://theflex.global",
    img: "/portfolio/flex.jpg",
  },
]

// Legacy tech stack for current page compatibility
export const techStack = [
  { name: "Next.js", icon: "⚛️", category: "Frontend" },
  { name: "TailwindCSS", icon: "🎨", category: "Styling" },
  { name: "Supabase", icon: "⚡", category: "Backend" },
  { name: "OpenAI", icon: "🤖", category: "AI" },
  { name: "Stripe", icon: "💳", category: "Payments" },
  { name: "Vercel", icon: "▲", category: "Hosting" },
  { name: "Framer", icon: "✨", category: "Animation" },
  { name: "Resend", icon: "📧", category: "Email" },
]

// Professional experience timeline
export const EXPERIENCE: Experience[] = [
  {
    company: "Freelance MVP Development",
    role: "Full-Stack Developer",
    type: "Freelance",
    period: "Sep 2024 – Present",
    location: "Remote",
    highlights: [
      "15+ MVPs shipped for Y Combinator and Techstars founders",
      "Clients raised $12M+ combined funding",
      "7-day average delivery time using AI-accelerated development"
    ]
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
      "Mentored 5 junior developers on modern React and TypeScript patterns"
    ]
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
      "Collaborated directly with founders on product strategy and technical decisions"
    ]
  }
]

// Why not other options comparison
export const whyNotOptions = [
  {
    title: "Traditional Agency",
    pain: "$50K+ & 3-6 months",
    problems: [
      "Slow communication",
      "Feature creep",
      "Missing deadlines",
      "Junior devs on your project",
    ],
  },
  {
    title: "Freelancer",
    pain: "Disappears after payment",
    problems: [
      "No accountability",
      "Inconsistent quality",
      "One-person risk",
      "No support after launch",
    ],
  },
  {
    title: "Offshore Team",
    pain: "Language barriers & timezone hell",
    problems: [
      "Misunderstood requirements",
      "Code quality issues",
      "Hard to manage",
      "Hidden costs",
    ],
  },
  {
    title: "DIY No-Code",
    pain: "Looks cheap, scales poorly",
    problems: [
      "Template limitations",
      "No custom features",
      "Not investor-ready",
      "Can't handle growth",
    ],
  },
]

// Testimonials
export const testimonials = [
  {
    quote:
      "We went from idea to 100 paying customers in 3 weeks. The MVP quality was insane.",
    name: "Chris Martinez",
    role: "Founder @ JobIt",
    company: "Y Combinator W23",
    avatar: "CM",
  },
  {
    quote:
      "Closed our seed round 2 weeks after launch. Investors loved the product velocity.",
    name: "Sarah Chen",
    role: "CEO @ FundFlow",
    company: "Pre-seed → $2M",
    avatar: "SC",
  },
  {
    quote:
      "Finally, a builder who thinks like a founder. Fast execution, zero BS.",
    name: "Alex Thompson",
    role: "Founder @ MentorMatch",
    company: "500+ Active Users",
    avatar: "AT",
  },
]

// Pricing plans
export const pricingPlans = [
  {
    name: "MVP Sprint",
    price: "$1,999",
    duration: "7 days",
    features: [
      "Core MVP features only",
      "AI-powered development",
      "Modern UI/UX design",
      "Mobile responsive",
      "Basic analytics setup",
      "7-day delivery guarantee",
      "14 days of support",
    ],
    cta: "Start Building",
    popular: false,
  },
  {
    name: "Launch Ready",
    price: "$3,999",
    duration: "10 days",
    features: [
      "Everything in MVP Sprint",
      "Payment integration (Stripe)",
      "User authentication",
      "Database architecture",
      "API integrations",
      "SEO optimization",
      "30 days of support",
      "Investor deck template",
    ],
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "Scale Package",
    price: "$5,999",
    duration: "14 days",
    features: [
      "Everything in Launch Ready",
      "Admin dashboard",
      "Advanced analytics",
      "Email automation",
      "Multi-user support",
      "AI/ML integration",
      "60 days of support",
      "Growth consultation",
    ],
    cta: "Go Enterprise",
    popular: false,
  },
]

// Comparison data
export const comparisonData = [
  {
    feature: "Time to MVP",
    us: "7 days",
    agency: "3-6 months",
    freelancer: "2-4 months",
    nocode: "2 weeks",
  },
  {
    feature: "Cost",
    us: "$5K-15K",
    agency: "$50K-200K",
    freelancer: "$10K-40K",
    nocode: "$0-500",
  },
  {
    feature: "Quality",
    us: "Investor-ready",
    agency: "Enterprise",
    freelancer: "Variable",
    nocode: "Template",
  },
  {
    feature: "Support",
    us: "14-60 days",
    agency: "Ongoing ($)",
    freelancer: "None",
    nocode: "Community",
  },
  {
    feature: "Scalability",
    us: "Built to scale",
    agency: "Over-engineered",
    freelancer: "Unknown",
    nocode: "Limited",
  },
  {
    feature: "Code ownership",
    us: "100% yours",
    agency: "100% yours",
    freelancer: "100% yours",
    nocode: "Platform locked",
  },
]

// Frequently asked questions
export const FAQS: Faq[] = [
  {
    q: "How can you build an MVP in just 7 days?",
    a: "I use AI to handle 70% of the boilerplate code, architecture, and standard components. This lets me focus on your unique business logic, user experience, and the details that matter. It's not about cutting corners — it's about working smarter."
  },
  {
    q: "Do I really own everything?",
    a: "Yes, 100%. You get the source code, database access, deployment credentials, domain ownership, Stripe account, and all environment variables. No vendor lock-in, no recurring fees to access your own product."
  },
  {
    q: "What if my idea changes during the build?",
    a: "We include one major pivot during the 7 days. The key is getting clear on your core value proposition in Day 1. Small tweaks are normal, but if you want to build something completely different, that's a new project."
  },
  {
    q: "Is this just a template with my branding?",
    a: "No. Every MVP is custom-built for your specific use case and business model. I use proven frameworks and patterns, but the features, logic, and user experience are designed specifically for your audience."
  },
  {
    q: "What happens after Day 7?",
    a: "You get 30 days of support for bug fixes and minor adjustments. After that, you can maintain it yourself, hire your own developer, or continue working with me on new features and iterations."
  },
  {
    q: "How do I know this will work for investors?",
    a: "I've built MVPs for founders who've raised $12M+ combined. Investors want to see real functionality, not demos. Every MVP I deliver has working payments, authentication, database operations, and production deployment — the fundamentals that prove you can execute."
  }
]