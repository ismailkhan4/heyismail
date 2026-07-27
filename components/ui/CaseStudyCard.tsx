import React from "react";
import type { CaseStudy } from "@/lib/types/content";
import ClientLogo from "@/components/ui/ClientLogo";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

/**
 * Scaffolded for the first real client case study — not yet rendered in
 * app/page.tsx. See lib/content/caseStudies.ts for where to add the entry;
 * once populated, a <CaseStudies> section can map over it with this card
 * as-is.
 */
export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps): React.JSX.Element {
  return (
    <div className="border border-dark/10 rounded-xl p-6 md:p-7 flex flex-col gap-4 bg-light">
      <ClientLogo name={caseStudy.clientName} logoUrl={caseStudy.clientLogoUrl} />

      <p className="font-body text-xs uppercase tracking-widest text-dark/40">
        {caseStudy.industry}
      </p>

      <p className="font-body text-dark/80 leading-relaxed">{caseStudy.summary}</p>

      {caseStudy.metrics.length > 0 && (
        <ul className="flex flex-wrap gap-x-4 gap-y-1 mt-auto pt-1">
          {caseStudy.metrics.map((metric) => (
            <li key={metric} className="font-body text-sm font-semibold text-brand-accent">
              {metric}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
