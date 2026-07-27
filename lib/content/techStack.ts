import type { TechItem } from "@/lib/types/content";

export const techStack: TechItem[] = [
  // Frontend
  { id: "react", name: "React", category: "Frontend" },
  { id: "nextjs", name: "Next.js", category: "Frontend" },
  { id: "typescript", name: "TypeScript", category: "Frontend" },
  { id: "react-native", name: "React Native + Expo", category: "Frontend" },
  { id: "tailwind", name: "Tailwind CSS", category: "Frontend" },
  { id: "zustand", name: "Zustand / Redux", category: "Frontend" },
  { id: "framer-motion", name: "Framer Motion", category: "Frontend" },

  // Backend
  { id: "nodejs", name: "Node.js", category: "Backend" },
  { id: "nestjs", name: "Express / NestJS", category: "Backend" },
  { id: "graphql", name: "REST & GraphQL", category: "Backend" },
  { id: "postgres", name: "PostgreSQL", category: "Backend" },
  { id: "mongodb", name: "MongoDB", category: "Backend" },
  { id: "prisma", name: "Prisma / Drizzle", category: "Backend" },

  // AI / ML
  { id: "openai", name: "OpenAI API", category: "AI / ML" },
  { id: "ai-features", name: "AI-Assisted Product Features", category: "AI / ML" },
  { id: "agents", name: "Agentic Workflows", category: "AI / ML" },
  { id: "llm-automation", name: "LLM-Powered Automation", category: "AI / ML" },

  // Cloud & Infra
  { id: "aws", name: "AWS", category: "Cloud & Infra" },
  { id: "vercel", name: "Vercel", category: "Cloud & Infra" },
  { id: "cloudflare", name: "Cloudflare", category: "Cloud & Infra" },
  { id: "docker", name: "Docker", category: "Cloud & Infra" },
  { id: "github-actions", name: "GitHub Actions", category: "Cloud & Infra" },

  // Payments & Auth
  { id: "stripe", name: "Stripe", category: "Payments & Auth" },
  { id: "auth", name: "Auth.js / Clerk / Supabase Auth", category: "Payments & Auth" },
];
