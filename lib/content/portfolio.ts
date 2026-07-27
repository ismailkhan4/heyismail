import type { ProjectType } from "@/lib/types/content";

export const portfolio: ProjectType[] = [
  {
    id: "arvo",
    category: "EdTech LMS Platform",
    client: "ARVO",
    url: "https://arvo.com.pk",
    problem:
      "Pakistan's education sector lacked a unified digital platform that could serve students, teachers, schools, and parents in one place without the complexity of enterprise tools.",
    build:
      "Full-stack LMS with role-based dashboards for students, teachers, school admins, and parents. Digital textbooks, assignment management, progress tracking, and real-time notifications — all in a single product.",
    outcome: "Deployed across schools in Pakistan, actively engaging students in 11th and 12th grade curricula through a modern digital learning experience.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "React Native"],
  },
  {
    id: "whatever-ai",
    category: "AI Creative Suite",
    client: "Whatever AI",
    url: "https://www.whatever-ai.com",
    problem:
      "Creators and everyday users needed a single tool to generate images, edit photos, remove backgrounds, and create music — without juggling five separate AI apps.",
    build:
      "All-in-one AI platform with multiple content generation tools under one roof: AI image generation, photo editing, background removal, and music creation. Built for fast, simple UX with no learning curve.",
    outcome: "Live and serving users globally, with a growing suite of free AI tools and a clear freemium-to-paid conversion path.",
    stack: ["Next.js", "TypeScript", "OpenAI API", "Stripe"],
  },
  {
    id: "supervise",
    category: "Team Productivity SaaS",
    client: "Supervise",
    url: "https://www.supervise.work",
    problem:
      "Engineering and remote teams were wasting hours on manual standups and check-ins with no factual data on who was actually doing what across GitHub, Figma, Google Docs, and other tools.",
    build:
      "Multi-app productivity tracker that integrates with the tools teams already use. Unified activity dashboard, per-person performance breakdowns, productivity timelines, and cost-per-project analytics — all automated.",
    outcome: "Used by teams to replace standups entirely, with clear visibility into output across every integrated app without manual reporting.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "OAuth Integrations"],
  },
  {
    id: "graana",
    category: "Real Estate Marketplace",
    client: "Graana",
    url: "https://www.graana.com",
    problem:
      "Pakistan's real estate market was opaque, fragmented, and driven by word-of-mouth — buyers and investors had no reliable digital platform to search, compare, and transact on properties.",
    build:
      "Pakistan's first large-scale online real estate marketplace with property listings across all major cities, smart search, investment project showcases, and a mobile app delivering the full experience natively.",
    outcome: "One of Pakistan's most trusted property portals, with listings in every major city and a mobile app rated highly on the App Store.",
    stack: ["React", "Node.js", "PostgreSQL", "React Native", "Maps API"],
  },
];
