import type { CaseStudy } from "@/lib/types/content";

// Real, named case studies go here once a client roster exists. Not yet
// wired into app/page.tsx — CaseStudyCard and ClientLogo (components/ui) are
// built and ready, so adding the first real entry below and rendering a
// <CaseStudies> section is a drop-in, not a redesign.
export const caseStudies: CaseStudy[] = [
  // TODO: replace with the first real client case study, e.g.:
  // {
  //   id: "acme-inc",
  //   clientName: "Acme Inc.",
  //   clientLogoUrl: "/logos/acme.svg",
  //   industry: "B2B SaaS",
  //   summary: "Rebuilt Acme's onboarding flow and billing system end to end.",
  //   metrics: ["40% faster onboarding", "99.98% billing uptime"],
  //   testimonialId: "acme-testimonial",
  // },
];
