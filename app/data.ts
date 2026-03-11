export const projects = [
  {
    name: "Jobit World",
    desc: "A modern job platform built to help global talent find opportunities faster , leveraging AI-driven matching and smart UI design.",
    tags: ["Next.js", "OpenAI", "Supabase", "Stripe"],
    metrics: { users: "2.3K+", revenue: "$12K MRR", time: "6 days" },
    gradient: "from-[#2f6d5e]/10 to-[#1e473d]/10",
    link: "https://jobit.world",
    img: "/portfolio/jobit.jpg",
  },
  {
    name: "Whatever AI",
    desc: "An AI content platform that helps marketers create better ads in seconds , with GPT-driven creative generation and analytics.",
    tags: ["Next.js", "OpenAI", "Vercel", "Tailwind"],
    metrics: { users: "1.8K+", revenue: "$6K MRR", time: "5 days" },
    gradient: "from-[#1e473d]/10 to-cyan-500/10",
    link: "https://whatever-ai.com",
    img: "/portfolio/whatever.jpg",
  },
  {
    name: "Supervise",
    desc: "A smart workforce supervision system built for enterprise teams , improving visibility, accountability, and efficiency.",
    tags: ["React", "Node.js", "PostgreSQL", "Realtime"],
    metrics: { users: "500+", revenue: "Enterprise Clients", time: "7 days" },
    gradient: "from-cyan-500/10 to-blue-500/10",
    link: "https://supervise.work",
    img: "/portfolio/supervise.jpg",
  },
  {
    name: "TheFlex Living",
    desc: "A property and housing startup offering flexible living options across global cities , full MVP designed and built end-to-end.",
    tags: ["Next.js", "Sanity CMS", "Tailwind", "Vercel"],
    metrics: { users: "1.2K+", revenue: "B2B SaaS", time: "8 days" },
    gradient: "from-blue-500/10 to-indigo-500/10",
    link: "https://theflex.global",
    img: "/portfolio/flex.jpg",
  },
];

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
];

export const whyNotOptions = [
  {
    title: "Agencies cost too much",
    pain: "You're looking at $50K+ and 6 months minimum",
    problems: [
      "You don't have that kind of cash to burn on an unproven idea",
      "By the time they finish, your market opportunity is gone",
      "They pad the timeline because they're inefficient, not thorough",
      "You end up paying for their learning curve, not your product",
    ],
  },
  {
    title: "Freelancers disappear",
    pain: "They take your money and vanish into thin air",
    problems: [
      "You pay 50% upfront and never hear from them again",
      "No accountability, no recourse, no way to get your money back",
      "Even the good ones disappear when the project gets complicated",
      "You're left with half-built code that nobody else can understand",
    ],
  },
  {
    title: "DIY has a brutal learning curve",
    pain: "You'll spend 6 months learning what takes me 6 hours",
    problems: [
      "Every tutorial assumes you already know things you don't know",
      "You waste weeks on problems that have 5-minute solutions",
      "Your 'simple' idea turns into a technical nightmare",
      "You end up with something that works on your laptop but breaks everywhere else",
    ],
  },
];

export const faqs = [
  {
    q: "How can you build an MVP in just 7 days?",
    a: "We use AI to generate 70% of the boilerplate code, architecture, and UI components. Our human developers focus on the unique logic, polish, and business-critical features. This hybrid approach gives you the speed of AI with the quality of expert development.",
  },
  {
    q: "What if my idea changes during development?",
    a: "We include one major pivot or feature swap during the build. After that, we can discuss scope adjustments. Our goal is a working MVP, not a feature-complete product , we can always add more after launch.",
  },
  {
    q: "Do I own the code?",
    a: "Yes, 100%. You get full source code access, documentation, and deploy credentials. No vendor lock-in, no recurring fees for the code itself.",
  },
  {
    q: "What happens after the 7 days?",
    a: "You get 14-30 days of support (depending on package) for bug fixes and minor tweaks. After that, you can either maintain it yourself, hire your own dev, or work with us on a retainer for iterations and new features.",
  },
  {
    q: "Is this just a template with my logo?",
    a: "No. Every MVP is custom-built for your specific use case. We use modern frameworks and best practices, but the features, logic, and design are unique to your business model.",
  },
  {
    q: "What if I need investor-ready documentation?",
    a: "Our Launch Ready and Scale packages include technical documentation and an investor deck template. We help you articulate your tech stack, scalability plan, and development roadmap.",
  },
];

const comparisonData = [
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
    agency: "Ongoing ($$)",
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
];

// TypeScript interfaces for new content types
export interface ConceptBuild {
  slug: string;
  creator: {
    name: string;
    title: string;
    followers: string;
    picture?: string;
  };
  product: {
    name: string;
    tagline: string;
    description: string;
    image?: string;
  };
  features: string[];
  researchNote: string;
  links: {
    demo?: string;
    case_study?: string;
  };
}

export interface ProcessStep {
  day: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  type: "full-time" | "freelance" | "contract";
  achievements: string[];
}

export interface FAQ {
  question: string;
  answer: string;
  category?: "process" | "pricing" | "technical" | "business";
}

export interface SEOPage {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    url: string;
  };
}

// Concept builds data
export const conceptBuilds: ConceptBuild[] = [
  {
    slug: "linkup-os",
    creator: {
      name: "Jasmin Alić",
      title: "LinkedIn writing and personal brand expert",
      followers: "350K+",
      picture: "/creators/1.jpeg",
    },
    product: {
      name: "linkupOS",
      tagline:
        "The premium LinkedIn growth platform Jasmin should have built himself",
      description:
        "I spent 3 months obsessively studying Jasmin Alić , one of LinkedIn's most followed creators with 350K+ followers. I analyzed every framework, every post structure, every teaching pattern. Then I built what I believed his premium platform should look like , before he ever launched one. This isn't just another LinkedIn course. It's a complete operating system for LinkedIn mastery, built from reverse-engineering how the best actually think and create.",
      image: "/builds/linkupos-dashboard.png",
    },
    features: [
      "The Jasmin Method , his complete LinkedIn growth framework digitized into actionable modules",
      "JayAI, an AI writing coach trained on 1000+ of Jasmin's highest-performing posts (coming soon)",
      "Content DNA Analysis , upload your posts and get Jasmin-style feedback on what works and what doesn't",
      "The Creator's Vault , 200+ templates, hooks, and frameworks organized by content type and industry",
      "Weekly Strategy Sessions , live calls breaking down viral posts and emerging LinkedIn trends",
      "Growth Tracking Dashboard , monitor your follower growth, engagement rates, and content performance",
      "The Inner Circle , private community of serious creators implementing the Jasmin Method",
      "Post Scheduler with AI optimization , schedule content when your audience is most active"
    ],
    researchNote:
      "I didn't just study Jasmin's content , I reverse-engineered his entire approach. 3 months of analyzing post structures, engagement patterns, and teaching methodologies. This platform captures not just what he teaches, but how he thinks about LinkedIn growth. It's the course he would build if he had unlimited time and resources.",
    links: {
      demo: "https://linkup-os.vercel.app/",
      case_study: "/builds/linkup-os",
    },
  },
  // {
  //   slug: "step-by-step-os",
  //   creator: {
  //     name: "Chris Donnelly",
  //     title: "Step-by-step business systems expert",
  //     followers: "200K+"
  //   },
  //   product: {
  //     name: "Step by Step OS",
  //     tagline: "A comprehensive business systems platform based on Chris's proven frameworks",
  //     description: "Chris has built multiple 7-figure businesses by creating step-by-step systems for everything. I analyzed his approach to breaking down complex business processes and built a platform that teaches his methodology."
  //   },
  //   features: [
  //     "Interactive step-by-step business building modules",
  //     "Template library with 50+ proven business documents",
  //     "Progress tracking for each business system implementation",
  //     "Community access to other system builders",
  //     "Weekly implementation calls with Chris",
  //     "Custom business system builder tool"
  //   ],
  //   researchNote: "I spent weeks studying how Chris breaks down complex business concepts into simple, actionable steps. This platform mirrors his teaching style perfectly.",
  //   links: {
  //     demo: "https://stepbystep-os-demo.com",
  //     case_study: "/builds/step-by-step-os"
  //   }
  // },
  // {
  //   slug: "3-alarms-lab",
  //   creator: {
  //     name: "Eric Partaker",
  //     title: "Peak performance and productivity expert",
  //     followers: "150K+"
  //   },
  //   product: {
  //     name: "The 3 Alarms Lab",
  //     tagline: "A peak performance system built around Eric's 3 Alarms methodology",
  //     description: "Eric's 3 Alarms system has helped thousands of high performers optimize their days. I studied his methodology and built a comprehensive platform that brings his coaching system to life digitally."
  //   },
  //   features: [
  //     "Daily 3 Alarms planning and tracking system",
  //     "Performance analytics and habit tracking",
  //     "Library of Eric's peak performance frameworks",
  //     "Personalized coaching recommendations",
  //     "Integration with calendar and productivity tools",
  //     "Community challenges and accountability groups"
  //   ],
  //   researchNote: "I analyzed Eric's approach to peak performance and built a system that captures the essence of his 3 Alarms methodology in a digital format.",
  //   links: {
  //     demo: "https://3alarms-lab-demo.com",
  //     case_study: "/builds/3-alarms-lab"
  //   }
  // }
];

// Process steps data
export const processSteps: ProcessStep[] = [
  {
    day: "Day 1",
    title: "We decide what to build , and what to cut",
    description:
      "This is not a day for writing code. This is a day for making decisions. We'll take your idea and turn it into a specific, buildable product. We'll identify the core user action that proves your concept works, then ruthlessly cut everything else. By the end of Day 1, we have a clear scope document that both of us can point to.",
    deliverables: [
      "Scope document with exact features",
      "User flow wireframes",
      "Technical architecture plan",
      "Timeline confirmation",
    ],
    icon: "🎯",
  },
  {
    day: "Days 2-3",
    title: "We build the core that proves your idea works",
    description:
      "These are the heavy coding days. We start with the most important user action , the thing that makes your product valuable. If you're building a marketplace, we build the core matching system. If it's a SaaS tool, we build the main workflow. No fancy features yet, just the essential functionality that proves your concept.",
    deliverables: [
      "Core functionality working",
      "Basic user interface",
      "Database structure",
      "Authentication system",
    ],
    icon: "⚡",
  },
  {
    day: "Days 4-5",
    title: "We connect everything and make it feel real",
    description:
      "Now we make it feel like a real product. We add user accounts, connect your payment system, set up email notifications, and build the admin dashboard you'll need to manage everything. This is where your MVP starts feeling like something you could actually launch.",
    deliverables: [
      "Payment integration",
      "Email system",
      "Admin dashboard",
      "User management",
    ],
    icon: "🔗",
  },
  {
    day: "Day 6",
    title: "We harden everything for real users",
    description:
      "Polish day. We fix bugs, optimize performance, add error handling, and make sure everything works smoothly. We also set up analytics so you can track what users are doing. This is the day we turn your working prototype into something that can handle real traffic.",
    deliverables: [
      "Bug fixes and optimization",
      "Analytics setup",
      "Error handling",
      "Performance testing",
    ],
    icon: "🛡️",
  },
  {
    day: "Day 7",
    title: "We ship your product to the world",
    description:
      "Launch day. We deploy your MVP to a live URL, set up your custom domain, configure your production database, and hand over all the credentials. You wake up on Day 8 with a live product that real users can sign up for and pay you money to use.",
    deliverables: [
      "Live production deployment",
      "Custom domain setup",
      "All credentials and documentation",
      "Launch checklist",
    ],
    icon: "🚀",
  },
];

// About content data
export const aboutContent = {
  originStory: {
    title: "I almost became the developer who ruins startups",
    content:
      "Early in my career, a founder hired me to build his MVP. He had a clear vision, a tight timeline, and paying customers waiting. I spent 3 months building what I thought was the perfect solution , beautiful code, scalable architecture, every edge case handled. When I finally showed him the product, he said: 'This isn't what I asked for.' He was right. I had built my version of his idea, not his actual idea. The startup failed. That failure taught me the most important lesson of my career: ship first, perfect later. The product that ships wins.",
    lesson: "Ship first. Perfect later. The product that ships wins.",
  },
  experience: [
    {
      period: "2024 – Present",
      role: "MVP Development Specialist",
      company: "Independent",
      location: "Lahore, Pakistan",
      type: "freelance",
      achievements: [
        "Built 15+ production-ready MVPs for non-technical founders",
        "Helped clients raise $2M+ in funding with working prototypes",
        "Achieved average 7-day delivery time using AI-accelerated development",
        "Generated 500K+ app downloads across client products",
      ],
    },
    {
      period: "2023 – 2024",
      role: "Full Stack Developer",
      company: "Jobit Technologies",
      location: "Remote",
      type: "full-time",
      achievements: [
        "Built job matching platform from 0 to 2.3K+ active users",
        "Implemented AI-powered candidate screening system",
        "Achieved $12K MRR within 6 months of launch",
        "Led product development and technical architecture decisions",
      ],
    },
    {
      period: "2021 – 2023",
      role: "Frontend Developer",
      company: "Various Startups",
      location: "Lahore, Pakistan",
      type: "contract",
      achievements: [
        "Developed 20+ client projects using React and Next.js",
        "Specialized in rapid prototyping and MVP development",
        "Maintained 98% client satisfaction rate",
        "Learned the hard way: ship first, perfect later",
      ],
    },
  ],
  differentiators: [
    {
      title: "I think like a founder, not a developer",
      description:
        "Most developers build what you ask for. I build what your business actually needs. I've been in your shoes , I know the difference between features that matter and features that don't.",
    },
    {
      title: "I ship fast because I cut smart",
      description:
        "Agencies pad timelines to cover their inefficiencies. I cut features that don't prove your core hypothesis. You get a working product in 7 days because we focus on what matters most.",
    },
    {
      title: "You own everything, no strings attached",
      description:
        "No vendor lock-in, no recurring fees, no proprietary platforms. You get the source code, the database, the deployment credentials , everything. If you never want to work with me again, you can walk away with a complete product.",
    },
  ],
};

// Updated FAQs focused on 7-day process and ownership
export const newFAQs: FAQ[] = [
  {
    question: "What do I actually get at the end of 7 days?",
    answer:
      "A fully live, production-ready web application on your own domain. You get the complete source code, database access, deployment credentials, admin dashboard, payment system integration, and documentation. Everything you need to run and grow your business.",
    category: "process",
  },
  {
    question: "How can you build a real product in just 7 days?",
    answer:
      "I use AI to handle 70% of the boilerplate code and focus human effort on your unique business logic. More importantly, I ruthlessly cut features that don't prove your core hypothesis. You get an MVP that validates your idea, not a feature-complete product.",
    category: "process",
  },
  {
    question: "Do I really own everything, or is there a catch?",
    answer:
      "You own everything. Source code, database, domain, Stripe account, deployment credentials , it all transfers to you. No recurring fees, no vendor lock-in, no proprietary platforms. If you want to hire another developer tomorrow, you can.",
    category: "business",
  },
  {
    question: "Is this investor-ready or just a prototype?",
    answer:
      "It's investor-ready. You get a live product with real user authentication, working payments, persistent data storage, mobile responsiveness, and analytics. I've helped clients raise over $2M with these MVPs because they demonstrate real traction, not just potential.",
    category: "business",
  },
  {
    question: "What if my idea changes during the 7 days?",
    answer:
      "We handle one major pivot or feature swap during the build. The key is getting clear on Day 1 about what we're building. After that, small tweaks are fine, but major changes push the timeline. Remember: ship first, perfect later.",
    category: "process",
  },
  {
    question: "What happens after the 7 days are up?",
    answer:
      "You get 14-30 days of support for bug fixes and minor tweaks (depending on your package). After that, you can maintain it yourself, hire your own developer, or work with me on a monthly retainer for new features and improvements.",
    category: "technical",
  },
];

// SEO metadata for all pages
export const seoData = {
  pages: {
    home: {
      title: "Build Your SaaS MVP in 7 Days | Ismail Muhammad",
      description:
        "I help non-technical founders build production-ready SaaS MVPs in 7 days using AI-accelerated development. Real code. Real product. You own everything.",
      keywords: [
        "SaaS MVP developer",
        "build MVP in 7 days",
        "MVP development for founders",
        "AI-accelerated development",
        "startup MVP",
      ],
      openGraph: {
        title: "Build Your SaaS MVP in 7 Days | Ismail Muhammad",
        description:
          "I help non-technical founders build production-ready SaaS MVPs in 7 days using AI-accelerated development.",
        url: "https://heyismail.com",
      },
    },
    process: {
      title: "How I Build Your MVP in 7 Days | Process Breakdown",
      description:
        "See exactly what happens each day of the 7-day MVP sprint. From scope definition to live deployment, here's the complete day-by-day breakdown.",
      keywords: [
        "MVP development process",
        "7-day sprint methodology",
        "startup development timeline",
        "MVP building process",
      ],
      openGraph: {
        title: "How I Build Your MVP in 7 Days | Process Breakdown",
        description:
          "See exactly what happens each day of the 7-day MVP sprint. From scope definition to live deployment.",
        url: "https://heyismail.com/process",
      },
    },
    builds: {
      title: "Concept Builds | What I Build When Nobody's Watching",
      description:
        "See examples of SaaS products I build to study successful creators and entrepreneurs. These aren't client projects , they're skill demonstrations.",
      keywords: [
        "SaaS examples",
        "MVP portfolio",
        "concept builds",
        "startup ideas",
        "product development examples",
      ],
      openGraph: {
        title: "Concept Builds | What I Build When Nobody's Watching",
        description:
          "See examples of SaaS products I build to study successful creators and entrepreneurs.",
        url: "https://heyismail.com/builds",
      },
    },
    about: {
      title: "About Ismail Muhammad | The Developer Who Ships Fast",
      description:
        "Learn about the failure that taught me to ship first and perfect later. 4+ years building MVPs for founders who need to move fast.",
      keywords: [
        "Ismail Muhammad",
        "MVP developer",
        "startup developer",
        "SaaS developer Pakistan",
        "AI-accelerated development",
      ],
      openGraph: {
        title: "About Ismail Muhammad | The Developer Who Ships Fast",
        description:
          "Learn about the failure that taught me to ship first and perfect later. 4+ years building MVPs for founders.",
        url: "https://heyismail.com/about",
      },
    },
    contact: {
      title: "Let's Talk About Your Idea | MVP Development in 7 Days",
      description:
        "Tell me your idea. I'll tell you if a 7-day sprint is right for it. Free 30-minute consultation with no sales pitch.",
      keywords: [
        "book MVP consultation",
        "startup development call",
        "MVP development consultation",
        "free startup advice",
      ],
      openGraph: {
        title: "Let's Talk About Your Idea | MVP Development in 7 Days",
        description:
          "Tell me your idea. I'll tell you if a 7-day sprint is right for it. Free 30-minute consultation.",
        url: "https://heyismail.com/contact",
      },
    },
  },
  schemas: {
    person: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Ismail Muhammad",
      jobTitle: "SaaS MVP Developer",
      description:
        "AI-accelerated SaaS MVP developer helping non-technical founders build production-ready products in 7 days",
      url: "https://heyismail.com",
      sameAs: [
        "https://www.linkedin.com/in/heyismail",
        "https://www.upwork.com/freelancers/~ismail",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressCountry: "PK",
      },
      knowsAbout: [
        "SaaS Development",
        "MVP Development",
        "AI-Accelerated Development",
        "Next.js",
        "React",
        "TypeScript",
        "Startup Development",
      ],
    },
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [], // Will be populated dynamically with FAQ data
    },
  },
};

// Updated social proof metrics for new messaging
export const updatedMetrics = [
  { value: "15", label: "MVPs Shipped", suffix: "+" },
  { value: "7", label: "Days", suffix: "" },
  { value: "4", label: "Years Building", suffix: "+" },
  { value: "500K", label: "App Downloads", suffix: "+" },
];

// MVP checklist - the 7 non-negotiables
export const mvpChecklist = [
  {
    title: "Core action proof",
    description:
      "The main thing your users do actually works and creates value",
  },
  {
    title: "Real authentication",
    description: "Users can sign up, log in, and maintain secure sessions",
  },
  {
    title: "Working payments",
    description: "Money can flow from customers to your bank account",
  },
  {
    title: "Persistent data",
    description:
      "Information saves, loads, and stays consistent across sessions",
  },
  {
    title: "Mobile responsive",
    description: "Works perfectly on phones, tablets, and desktops",
  },
  {
    title: "Admin view",
    description: "You can see and manage what's happening in your product",
  },
  {
    title: "Live URL",
    description: "Real users can access it at your own custom domain",
  },
];

// Ownership transfer details
export const ownershipDetails = [
  "Complete source code repository",
  "Production database with admin access",
  "Live deployment on your domain",
  "Stripe account connected to your bank",
  "Email system (Resend) in your name",
  "All API keys and credentials",
  "Technical documentation",
  "Deployment instructions",
];

// Process preview data for homepage
export const processPreview = [
  {
    day: "Day 1",
    title: "Define",
    description: "We decide what to build , and what to cut",
    icon: "🎯",
  },
  {
    day: "Days 2-3",
    title: "Build",
    description: "We build the core that proves your idea works",
    icon: "⚡",
  },
  {
    day: "Days 4-5",
    title: "Connect",
    description: "We connect everything and make it feel real",
    icon: "🔗",
  },
  {
    day: "Day 6",
    title: "Harden",
    description: "We harden everything for real users",
    icon: "🛡️",
  },
  {
    day: "Day 7",
    title: "Ship",
    description: "We ship your product to the world",
    icon: "🚀",
  },
];

// Technology stack for homepage
export const homepageStack = [
  { name: "Next.js", color: "bg-gray-800 text-white" },
  { name: "Supabase", color: "bg-[#2f6d5e] text-white" },
  { name: "Stripe", color: "bg-blue-600 text-white" },
  { name: "Resend", color: "bg-black text-white" },
  { name: "Vercel", color: "bg-black text-white" },
];

// AI tools for homepage
export const aiTools = [
  { name: "Claude", color: "bg-orange-500 text-white" },
  { name: "ChatGPT", color: "bg-[#2f6d5e] text-white" },
  { name: "v0", color: "bg-black text-white" },
  { name: "Cursor", color: "bg-blue-600 text-white" },
];

// Contact page data
export const contactOptions = [
  {
    type: "call",
    title: "Tell me about your idea",
    description:
      "Let's talk through your idea and see if a 7-day sprint is right for it",
    benefits: [
      "I'll tell you honestly if your idea is ready for an MVP",
      "We'll identify the core feature that proves your concept works",
      "You'll get a clear scope and timeline (even if we don't work together)",
    ],
    cta: "Let's talk about it",
    link: "https://cal.com/heyismail/15min",
    icon: "📞",
    primary: true,
  },
  {
    type: "message",
    title: "Prefer to message first?",
    description:
      "Send me a LinkedIn message with your idea and I'll respond within 24 hours",
    instructions: [
      "Go to linkedin.com/in/heyismail",
      "Click 'Message' and tell me about your idea",
      "Include: what problem you're solving and who for",
      "I'll respond with initial thoughts and next steps",
    ],
    cta: "Message on LinkedIn",
    link: "https://www.linkedin.com/in/heyismail",
    icon: "💬",
    primary: false,
  },
];

export const contactFinePrint = [
  "This is not a sales call. I'll tell you honestly if I think a 7-day sprint is right for your idea.",
  "If it's not a good fit, I'll suggest better alternatives (other developers, no-code tools, etc.).",
  "You'll get value from the call even if we don't work together.",
];

// Scope call breakdown for process page
export const scopeCallStages = [
  {
    stage: "Stage 1",
    title: "Understand your vision",
    duration: "5 minutes",
    description:
      "You tell me your idea, your target users, and what success looks like. I ask clarifying questions to understand the core value proposition.",
    icon: "💡",
  },
  {
    stage: "Stage 2",
    title: "Identify the core action",
    duration: "10 minutes",
    description:
      "We identify the one thing users must be able to do for your product to work. Everything else is secondary. This becomes our north star.",
    icon: "🎯",
  },
  {
    stage: "Stage 3",
    title: "Cut ruthlessly",
    duration: "10 minutes",
    description:
      "We go through your feature list and cut everything that doesn't directly support the core action. This is where most founders struggle, but it's essential.",
    icon: "✂️",
  },
  {
    stage: "Stage 4",
    title: "Confirm the scope",
    duration: "5 minutes",
    description:
      "I summarize exactly what we're building and what we're not. You get a clear scope document within 24 hours. No surprises, no scope creep.",
    icon: "📋",
  },
];

// Detailed process steps for process page
export const detailedProcessSteps = [
  {
    day: "Day 1",
    title: "We decide what to build , and what to cut",
    subtitle: "Define",
    description:
      "This is not a day for writing code. This is a day for making decisions. We'll take your idea and turn it into a specific, buildable product. We'll identify the core user action that proves your concept works, then ruthlessly cut everything else. By the end of Day 1, we have a clear scope document that both of us can point to.",
    activities: [
      "Review scope call notes and finalize feature list",
      "Create detailed user flow wireframes",
      "Design database schema and API structure",
      "Set up development environment and repositories",
      "Confirm timeline and daily check-in schedule",
    ],
    deliverables: [
      "Scope document with exact features",
      "User flow wireframes",
      "Technical architecture plan",
      "Timeline confirmation",
    ],
    icon: "🎯",
    color: "from-blue-500/10 to-indigo-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    day: "Days 2-3",
    title: "We build the core that proves your idea works",
    subtitle: "Build",
    description:
      "These are the heavy coding days. We start with the most important user action , the thing that makes your product valuable. If you're building a marketplace, we build the core matching system. If it's a SaaS tool, we build the main workflow. No fancy features yet, just the essential functionality that proves your concept.",
    activities: [
      "Set up Next.js project with TypeScript and Tailwind",
      "Build core user interface components",
      "Implement main user workflow and business logic",
      "Set up Supabase database with proper schemas",
      "Create API routes for core functionality",
    ],
    deliverables: [
      "Core functionality working",
      "Basic user interface",
      "Database structure",
      "Authentication system",
    ],
    icon: "⚡",
    color: "from-[#2f6d5e]/10 to-[#1e473d]/10",
    borderColor: "border-[#2f6d5e]/20",
  },
  {
    day: "Days 4-5",
    title: "We connect everything and make it feel real",
    subtitle: "Connect",
    description:
      "Now we make it feel like a real product. We add user accounts, connect your payment system, set up email notifications, and build the admin dashboard you'll need to manage everything. This is where your MVP starts feeling like something you could actually launch.",
    activities: [
      "Integrate Stripe for payment processing",
      "Set up Resend for transactional emails",
      "Build user dashboard and account management",
      "Create admin panel for content management",
      "Implement user onboarding flow",
    ],
    deliverables: [
      "Payment integration",
      "Email system",
      "Admin dashboard",
      "User management",
    ],
    icon: "🔗",
    color: "from-[#1e473d]/10 to-cyan-500/10",
    borderColor: "border-[#1e473d]/20",
  },
  {
    day: "Day 6",
    title: "We harden everything for real users",
    subtitle: "Harden",
    description:
      "Polish day. We fix bugs, optimize performance, add error handling, and make sure everything works smoothly. We also set up analytics so you can track what users are doing. This is the day we turn your working prototype into something that can handle real traffic.",
    activities: [
      "Comprehensive testing and bug fixes",
      "Performance optimization and caching",
      "Error handling and user feedback systems",
      "Analytics setup with proper event tracking",
      "Security review and vulnerability testing",
    ],
    deliverables: [
      "Bug fixes and optimization",
      "Analytics setup",
      "Error handling",
      "Performance testing",
    ],
    icon: "🛡️",
    color: "from-cyan-500/10 to-blue-500/10",
    borderColor: "border-cyan-500/20",
  },
  {
    day: "Day 7",
    title: "We ship your product to the world",
    subtitle: "Ship",
    description:
      "Launch day. We deploy your MVP to a live URL, set up your custom domain, configure your production database, and hand over all the credentials. You wake up on Day 8 with a live product that real users can sign up for and pay you money to use.",
    activities: [
      "Deploy to Vercel with production configuration",
      "Configure custom domain and SSL certificates",
      "Set up production database and backups",
      "Transfer all accounts and credentials to you",
      "Create documentation and handover materials",
    ],
    deliverables: [
      "Live production deployment",
      "Custom domain setup",
      "All credentials and documentation",
      "Launch checklist",
    ],
    icon: "🚀",
    color: "from-purple-500/10 to-pink-500/10",
    borderColor: "border-purple-500/20",
  },
];

// Helper functions
export const getBuildBySlug = (slug: string): ConceptBuild | undefined => {
  return conceptBuilds.find((build) => build.slug === slug);
};

export const getAllBuildSlugs = (): string[] => {
  return conceptBuilds.map((build) => build.slug);
};
