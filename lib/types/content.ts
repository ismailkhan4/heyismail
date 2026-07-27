// Anonymized project type shown in the Portfolio section — no real client
// names or logos, just concrete, specific technical detail.
export type ProjectType = {
  id: string;
  category: string;
  client: string;
  url: string;
  problem: string;
  build: string;
  outcome: string;
  stack: string[];
};

export type Testimonial = {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  company?: string;
  companyUrl?: string;
  isPlaceholder?: boolean;
};

export type Stat = {
  id: string;
  value: string;
  label: string;
};

export type TechCategory =
  | "Frontend"
  | "Backend"
  | "AI / ML"
  | "Cloud & Infra"
  | "Payments & Auth";

export type TechItem = {
  id: string;
  name: string;
  category: TechCategory;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  tech: string[];
};

export type ProcessStep = {
  id: string;
  phase: string;
  title: string;
  description: string;
};

export type Differentiator = {
  id: string;
  title: string;
  description: string;
};

export type PricingTier = {
  id: string;
  name: string;
  whoFor: string;
  includes: string[];
  highlighted?: boolean;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

// Real client case study — not yet populated. Structured so the first real
// client can be dropped in without touching the component. See
// lib/content/caseStudies.ts for the commented-out placeholder slot.
export type CaseStudy = {
  id: string;
  clientName: string;
  clientLogoUrl?: string;
  industry: string;
  summary: string;
  metrics: string[];
  testimonialId?: string;
};
