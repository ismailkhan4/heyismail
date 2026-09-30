import React from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/LinkButton";
import StatusTag from "@/components/ui/StatusTag";
import type { Dictionary, Status } from "@/lib/i18n/en";
import { cn } from "@/lib/utils";

interface CaseStudyProps {
  dict: Dictionary;
  homeHref: string;
}

type T = Dictionary["caseStudy"];

// The Barrierefrei Studio case study. Every roadmap item carries a Done / Next /
// Planned label, so nothing planned reads as built.
export default function CaseStudy({ dict, homeHref }: CaseStudyProps) {
  const t = dict.caseStudy;
  const status = dict.status;

  const sections: { id: string; heading: string; body: React.ReactNode }[] = [
    { id: "overview", heading: t.overview.heading, body: <Paragraphs items={t.overview.body} /> },
    { id: "problem", heading: t.problem.heading, body: <Paragraphs items={t.problem.body} /> },
    { id: "users", heading: t.users.heading, body: <TitledList items={t.users.items} /> },
    { id: "why", heading: t.why.heading, body: <Paragraphs items={t.why.body} /> },
    { id: "status", heading: t.status.heading, body: <CurrentStatus t={t.status} labels={status} /> },
    { id: "role", heading: t.role.heading, body: <Paragraphs items={t.role.body} /> },
    {
      id: "architecture",
      heading: t.architecture.heading,
      body: (
        <>
          <StatusTag status="planned" label={status.planned} />
          <p className="mt-3 leading-relaxed text-ink-2">{t.architecture.intro}</p>
          <dl className="mt-6 grid gap-3 sm:grid-cols-2">
            {t.architecture.items.map((item) => (
              <div key={item.title} className="rounded-xl border border-line bg-surface p-4">
                <dt className="font-semibold">{item.title}</dt>
                <dd className="mt-1 text-[15px] leading-relaxed text-ink-2">{item.body}</dd>
              </div>
            ))}
          </dl>
        </>
      ),
    },
    {
      id: "decisions",
      heading: t.decisions.heading,
      body: (
        <>
          <p className="leading-relaxed text-ink-2">{t.decisions.intro}</p>
          <TitledList items={t.decisions.items} numbered />
        </>
      ),
    },
    { id: "ai", heading: t.ai.heading, body: <AiSplit t={t.ai} /> },
    { id: "verification", heading: t.verification.heading, body: <Verification t={t.verification} /> },
    { id: "accessibility", heading: t.accessibility.heading, body: <Paragraphs items={t.accessibility.body} /> },
    {
      id: "challenges",
      heading: t.challenges.heading,
      body: (
        <>
          <p className="leading-relaxed text-ink-2">{t.challenges.intro}</p>
          <TitledList items={t.challenges.items} />
        </>
      ),
    },
    { id: "next", heading: t.next.heading, body: <StatusList items={t.next.items} labels={status} /> },
  ];
  const toc = [...sections, { id: "sources", heading: t.sourcesHeading }];

  return (
    <article>
      <header className="mx-auto max-w-6xl px-4 pt-8 pb-12 sm:px-6 sm:pt-12">
        <a href={`${homeHref}#work`} className="link inline-flex items-center gap-1.5 text-sm font-medium text-ink-2">
          <ArrowLeft size={15} aria-hidden="true" />
          {t.back}
        </a>

        <p className="mt-10 flex items-center gap-2 text-sm font-semibold text-brand-ink">
          <span className="size-2 rounded-full bg-brand ring-1 ring-brand-ink/50" aria-hidden="true" />
          {t.label}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">{dict.building.name}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-2 sm:text-xl">{t.subtitle}</p>

        <dl className="mt-10 grid gap-5 border-y border-line py-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.facts.map((fact) => (
            <div key={fact.term}>
              <dt className="text-sm text-ink-3">{fact.term}</dt>
              <dd className="mt-1 text-[15px] leading-snug">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-16">
        <div>
          {/* Collapsed on phones so the story starts right away; always visible beside it on large screens. */}
          <details className="rounded-xl border border-line bg-surface p-4 lg:hidden">
            <summary className="cursor-pointer text-sm font-semibold text-ink-2">{t.tocLabel}</summary>
            <nav aria-label={t.tocLabel}>
              <TocList items={toc} />
            </nav>
          </details>
          <nav aria-label={t.tocLabel} className="sticky top-24 hidden lg:block">
            <p className="text-sm font-semibold text-ink-2">{t.tocLabel}</p>
            <TocList items={toc} />
          </nav>
        </div>

        <div className="measure flex flex-col gap-14">
          {sections.map((s) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-heading`} className="scroll-mt-8 lg:scroll-mt-24">
              <h2 id={`${s.id}-heading`} className="mb-4 text-2xl font-semibold tracking-tight">
                {s.heading}
              </h2>
              {s.body}
            </section>
          ))}

          <section id="sources" aria-labelledby="sources-heading" className="scroll-mt-8 border-t border-line pt-8 lg:scroll-mt-24">
            <h2 id="sources-heading" className="text-lg font-semibold tracking-tight">
              {t.sourcesHeading}
            </h2>
            <ul className="mt-4 flex flex-col gap-2 text-[15px]">
              {t.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer" className="link inline-flex items-start gap-1 text-ink-2">
                    {source.label}
                    <ArrowUpRight size={14} aria-hidden="true" className="mt-1 flex-shrink-0" />
                    <span className="sr-only">({dict.work.opensInNewTab})</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <aside aria-labelledby="cta-heading" className="rounded-2xl bg-sunken p-6 sm:p-8">
            <h2 id="cta-heading" className="text-xl font-semibold tracking-tight">
              {t.contactHeading}
            </h2>
            <p className="mt-2 leading-relaxed text-ink-2">{t.contactBody}</p>
            <Button href={`${homeHref}#contact`} className="mt-5">
              {t.contactCta}
            </Button>
          </aside>
        </div>
      </div>
    </article>
  );
}

function TocList({ items }: { items: { id: string; heading: string }[] }) {
  return (
    <ol className="mt-3 flex flex-col border-l border-line">
      {items.map((s) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            className="-ml-px block border-l border-transparent py-1.5 pl-3 text-sm text-ink-2 transition-colors duration-150 hover:border-ink hover:text-ink"
          >
            {s.heading}
          </a>
        </li>
      ))}
    </ol>
  );
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((p) => (
        <p key={p} className="leading-relaxed">
          {p}
        </p>
      ))}
    </div>
  );
}

function TitledList({ items, numbered }: { items: { title: string; body: string }[]; numbered?: boolean }) {
  const List = numbered ? "ol" : "ul";
  return (
    <List className="mt-2 flex flex-col">
      {items.map((item, i) => (
        <li key={item.title} className="flex gap-4 border-b border-line py-4 last:border-b-0">
          {numbered && (
            <span className="w-5 flex-shrink-0 pt-px text-sm font-semibold tabular-nums text-ink-3" aria-hidden="true">
              {i + 1}
            </span>
          )}
          <div>
            <p className="font-semibold">{item.title}</p>
            <p className="mt-1 leading-relaxed text-ink-2">{item.body}</p>
          </div>
        </li>
      ))}
    </List>
  );
}

function StatusList({ items, labels }: { items: { status: Status; text: string }[]; labels: Dictionary["status"] }) {
  return (
    <ul className="flex flex-col">
      {items.map((item) => (
        <li key={item.text} className="grid gap-1 border-b border-line py-3 last:border-b-0 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-4">
          <StatusTag status={item.status} label={labels[item.status]} className="sm:pt-0.5" />
          <span className="leading-relaxed">{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

function CurrentStatus({ t, labels }: { t: T["status"]; labels: Dictionary["status"] }) {
  return (
    <>
      <p className="mb-2 leading-relaxed text-ink-2">{t.intro}</p>
      <StatusList items={t.items} labels={labels} />
      <p className="mt-4 rounded-xl border border-line bg-surface p-4 text-[15px] leading-relaxed">{t.outcome}</p>
    </>
  );
}

function AiSplit({ t }: { t: T["ai"] }) {
  return (
    <>
      <p className="leading-relaxed">{t.intro}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="rounded-xl border border-line bg-surface p-5">
          <h3 className="font-semibold">{t.helpsHeading}</h3>
          <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 text-[15px] leading-relaxed text-ink-2 marker:text-ink-3">
            {t.helps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-ink/80 bg-surface p-5">
          <h3 className="font-semibold">{t.notHeading}</h3>
          <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 text-[15px] leading-relaxed text-ink-2 marker:text-ink-3">
            {t.not.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

function Verification({ t }: { t: T["verification"] }) {
  return (
    <>
      <p className="leading-relaxed text-ink-2">{t.intro}</p>
      <ol className="mt-6 flex flex-col">
        {t.steps.map((step, i) => {
          const ai = step.kind === "ai";
          return (
            <li key={step.title} className="relative flex gap-4 pb-6 last:pb-0">
              {/* Connector line between steps. */}
              {i < t.steps.length - 1 && <span className="absolute top-8 bottom-0 left-[15px] w-px bg-line" aria-hidden="true" />}
              <span
                className={cn(
                  "relative flex size-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold tabular-nums",
                  ai ? "border border-dashed border-brand-ink bg-surface text-brand-ink" : "bg-ink text-canvas"
                )}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div className="pt-1">
                <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-semibold">{step.title}</span>
                  <span className={cn("text-sm", ai ? "text-brand-ink" : "text-ink-3")}>
                    {ai ? t.kinds.ai : t.kinds.deterministic}
                  </span>
                </p>
                <p className="mt-1 leading-relaxed text-ink-2">{step.body}</p>
              </div>
            </li>
          );
        })}
      </ol>
      <p className="mt-6 rounded-xl border border-line bg-surface p-4 text-[15px] leading-relaxed">{t.note}</p>
    </>
  );
}
