import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TechBadge from "@/components/ui/TechBadge";
import type { Dictionary, Project } from "@/lib/i18n/en";

interface WorkProps {
  t: Dictionary["work"];
  facts: Dictionary["facts"];
}

// One dark block: headline numbers first, then the projects they come from.
export default function Work({ t, facts }: WorkProps) {
  return (
    <section id="work" aria-labelledby="work-heading" className="bg-dark">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <dl aria-label={facts.label} className="grid grid-cols-2 gap-x-6 gap-y-8 border-b border-light/10 py-12 md:grid-cols-4 md:gap-12 md:py-14">
          {facts.items.map((fact) => (
            <div key={fact.value} className="flex flex-col gap-1.5">
              {/* Value is shown first but stays after its label in the markup, so it reads "label: value". */}
              <dt className="order-2 font-body text-sm leading-snug text-light/70">{fact.label}</dt>
              <dd className="order-1 font-display text-xl font-semibold tracking-tight text-light md:text-2xl">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="py-20 md:py-28">
          <SectionHeading
            id="work-heading"
            eyebrow={t.eyebrow}
            heading={t.heading}
            subheading={t.subheading}
            theme="light"
            className="mb-12"
          />

          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {t.items.map((project) => (
              <li key={project.id}>
                <ProjectCard project={project} t={t} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, t }: { project: Project; t: Dictionary["work"] }) {
  const host = new URL(project.url).host.replace(/^www\./, "");

  return (
    <article className="flex h-full flex-col gap-6 rounded-xl border border-light/10 bg-surface p-6 md:p-8">
      <header className="flex flex-col gap-2">
        <p className="font-body text-xs font-semibold uppercase tracking-widest text-light/70">{project.category}</p>
        <h3 className="font-display text-2xl font-semibold tracking-tight text-light">{project.name}</h3>
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-body text-sm text-light/80">
          <span>{project.role}</span>
          {project.status && (
            <span className="inline-flex items-center gap-1.5 text-light/70">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" aria-hidden="true" />
              {project.status}
            </span>
          )}
        </p>
      </header>

      <dl className="grid gap-5">
        <div>
          <dt className="mb-1.5 font-body text-xs uppercase tracking-widest text-light/60">{t.labelProduct}</dt>
          <dd className="font-body text-[15px] leading-relaxed text-light/80">{project.product}</dd>
        </div>
        <div>
          <dt className="mb-1.5 font-body text-xs uppercase tracking-widest text-brand-accent">{t.labelContribution}</dt>
          <dd className="font-body text-[15px] leading-relaxed text-light">{project.contribution}</dd>
        </div>
      </dl>

      <div className="mt-auto flex flex-col gap-5">
        <ul aria-label={t.labelStack} className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech}>
              <TechBadge name={tech} theme="dark" />
            </li>
          ))}
        </ul>

        <p className="border-t border-light/10 pt-5 font-body text-sm font-medium">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-light/80 underline decoration-light/30 underline-offset-4 hover:text-light hover:decoration-light"
          >
            {host}
            <ArrowUpRight size={14} aria-hidden="true" />
            <span className="sr-only">({t.opensInNewTab})</span>
          </a>
        </p>
      </div>
    </article>
  );
}
