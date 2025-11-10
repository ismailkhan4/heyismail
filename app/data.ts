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
];

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
];

export const techStack = [
  { name: "Next.js", icon: "⚛️", category: "Frontend" },
  { name: "TailwindCSS", icon: "🎨", category: "Styling" },
  { name: "Supabase", icon: "⚡", category: "Backend" },
  { name: "OpenAI", icon: "🤖", category: "AI" },
  { name: "Stripe", icon: "💳", category: "Payments" },
  { name: "Vercel", icon: "▲", category: "Hosting" },
  { name: "Framer", icon: "✨", category: "Animation" },
  { name: "Resend", icon: "📧", category: "Email" },
];

export const faqs = [
  {
    q: "How can you build an MVP in just 7 days?",
    a: "We use AI to generate 70% of the boilerplate code, architecture, and UI components. Our human developers focus on the unique logic, polish, and business-critical features. This hybrid approach gives you the speed of AI with the quality of expert development.",
  },
  {
    q: "What if my idea changes during development?",
    a: "We include one major pivot or feature swap during the build. After that, we can discuss scope adjustments. Our goal is a working MVP, not a feature-complete product — we can always add more after launch.",
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

const metrics = [
  { value: "7", label: "Days Average", suffix: "" },
  { value: "20", label: "MVPs Shipped", suffix: "+" },
  { value: "70", label: "AI-Powered", suffix: "%" },
  { value: "$12M", label: "Raised by Clients", suffix: "+" },
];

const clients = [
  { name: "Y Combinator", logo: "/logos/yc.png" },
  { name: "Techstars", logo: "/logos/techstars.png" },
  { name: "500 Startups", logo: "/logos/500startups.png" },
  { name: "AngelPad", logo: "/logos/angelpad.png" },
];
