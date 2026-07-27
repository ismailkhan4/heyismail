import type { ProcessStep } from "@/lib/types/content";

export const process: ProcessStep[] = [
  {
    id: "discovery",
    phase: "01",
    title: "Discovery",
    description:
      "We talk through what you're building, who it's for, and what success looks like, no scope guessing.",
  },
  {
    id: "scope",
    phase: "02",
    title: "Scope & Architecture",
    description:
      "You get a clear technical plan and a scoped quote before any code is written.",
  },
  {
    id: "build",
    phase: "03",
    title: "Build, with Regular Checkpoints",
    description:
      "Development happens in the open, regular check-ins so you always know where things stand.",
  },
  {
    id: "qa",
    phase: "04",
    title: "QA & Handoff",
    description:
      "Testing, review, and a clean handoff with full code ownership, nothing held back.",
  },
  {
    id: "support",
    phase: "05",
    title: "Ongoing Support (Optional)",
    description:
      "Move into a retainer for continued development, or take the finished product and run with it.",
  },
];
