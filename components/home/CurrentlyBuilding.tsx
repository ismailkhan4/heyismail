import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import StatusTag from "@/components/ui/StatusTag";
import type { Dictionary } from "@/lib/i18n/en";

interface CurrentlyBuildingProps {
  t: Dictionary["building"];
  status: Dictionary["status"];
  caseStudyHref: string;
}

export default function CurrentlyBuilding({ t, status, caseStudyHref }: CurrentlyBuildingProps) {
  return (
    <Section id="building" heading={t.heading}>
      <article className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
        <p className="flex items-center gap-2 text-sm font-semibold text-brand-ink">
          <span className="size-2 rounded-full bg-brand ring-1 ring-brand-ink/50" aria-hidden="true" />
          {t.label}
        </p>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight">
          {t.name} <span className="text-base font-normal text-ink-3">({t.nameNote})</span>
        </h3>
        <p className="mt-2 text-lg leading-snug">{t.summary}</p>
        <p className="measure mt-4 leading-relaxed text-ink-2">{t.body}</p>

        <div className="mt-8 grid gap-6 border-t border-line pt-6 md:grid-cols-[minmax(0,1fr)_14rem]">
          <div>
            <p className="text-sm text-ink-3">{t.progressLabel}</p>
            <ul className="mt-3 flex flex-col gap-3">
              {t.progress.map((item) => (
                <li key={item.text} className="grid gap-1 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-3">
                  <StatusTag status={item.status} label={status[item.status]} />
                  <span className="text-[15px] leading-snug">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm text-ink-3">{t.stackLabel}</p>
            <p className="mt-3 text-[15px] leading-snug">{t.stack.join(" · ")}</p>
          </div>
        </div>

        <a href={caseStudyHref} className="group mt-8 inline-flex items-center gap-1.5 font-semibold link">
          {t.cta}
          <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-150 group-hover:translate-x-0.5" />
        </a>
      </article>
    </Section>
  );
}
