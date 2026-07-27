import type { PricingTier } from "@/lib/types/content";

export const pricingTiers: PricingTier[] = [
  {
    id: "project",
    name: "Project Engagement",
    whoFor: "A defined product or feature with a clear finish line.",
    includes: [
      "Fixed-scope build",
      "Custom quote after a scoping call",
      "Full code ownership on handoff",
    ],
  },
  {
    id: "partnership",
    name: "Ongoing Partnership",
    whoFor: "Continued development, iteration, and feature work post-launch.",
    includes: [
      "Monthly retainer",
      "Priority response time",
      "Direct access, no account manager",
    ],
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise / Complex Builds",
    whoFor: "Multi-platform, AI-heavy, or compliance-sensitive builds.",
    includes: [
      "Custom scope and timeline",
      "Architecture-first engagement",
      "Web, mobile, and AI in one build",
    ],
  },
];
