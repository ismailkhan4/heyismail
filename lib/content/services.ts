import type { Service } from "@/lib/types/content";

export const services: Service[] = [
  {
    id: "web",
    title: "Web Application Development",
    description:
      "Production-grade web apps built for scale from day one, not a prototype that needs a rewrite in six months.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description:
      "Native-feel apps shipped to iOS and Android from a single codebase, without sacrificing performance.",
    tech: ["React Native", "Expo"],
  },
  {
    id: "ai",
    title: "AI & Automation Integration",
    description:
      "Agentic workflows and AI-powered product features that actually ship to production and hold up under real usage.",
    tech: ["OpenAI API", "Agentic Workflows"],
  },
  {
    id: "full-build",
    title: "Full Product Builds (0→1)",
    description:
      "Idea to launched product, architecture, implementation, and handoff, built and owned by one engineer throughout.",
    tech: ["Full stack", "Your choice of infra"],
  },
];
