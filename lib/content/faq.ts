import type { FaqItem } from "@/lib/types/content";

export const faq: FaqItem[] = [
  {
    id: "who",
    question: "Who do you typically work with?",
    answer:
      "Founders, funded startups, and established businesses who need production-grade software built by a senior engineer, not a slow agency or a scattered freelancer bench.",
  },
  {
    id: "ownership",
    question: "How does IP and code ownership work?",
    answer:
      "You own everything on handoff, full source code, infrastructure access, and documentation. No vendor lock-in.",
  },
  {
    id: "timeline",
    question: "What's a realistic timeline?",
    answer:
      "It depends on scope. A focused feature might take a couple of weeks; a full 0→1 product build is typically measured in months. You'll get a clear estimate after the scoping call.",
  },
  {
    id: "stack",
    question: "Are you flexible on tech stack?",
    answer:
      "I default to the stack listed on this site because it's what I know best and can move fastest in, but I'll work within an existing codebase or a required stack when the project calls for it.",
  },
  {
    id: "communication",
    question: "How does communication work during the build?",
    answer:
      "Direct, regular check-ins with me, not a project manager relaying updates. Typical response time is under 24 hours.",
  },
  {
    id: "premium",
    question: "What does \"premium\" mean in scope?",
    answer:
      "Production-grade code, thoughtful architecture, and a build that's meant to be maintained and scaled, not a proof-of-concept meant to be thrown away.",
  },
];
