import { ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";
import type { Dictionary, Project } from "@/lib/i18n/en";

export default function Work({ t }: { t: Dictionary["work"] }) {
  return (
    <Section id="work" heading={t.heading} intro={t.subheading}>
      <ul className="border-t border-line">
        {t.items.map((project) => (
          <li key={project.id} className="border-b border-line">
            <ProjectEntry project={project} t={t} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

function ProjectEntry({ project, t }: { project: Project; t: Dictionary["work"] }) {
  const host = new URL(project.url).host.replace(/^www\./, "");

  return (
    <article className="grid gap-4 py-8 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-8">
      <header>
        <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
        <p className="mt-1 text-[15px]">{project.role}</p>
        <p className="text-[15px] text-ink-2">{project.engagement}</p>
        <p className="mt-2 text-sm text-ink-3">{project.category}</p>
      </header>

      <div className="flex flex-col gap-4">
        <dl className="flex flex-col gap-4">
          <div>
            <dt className="text-sm text-ink-3">{t.labelProduct}</dt>
            <dd className="mt-1 leading-relaxed text-ink-2">{project.product}</dd>
          </div>
          <div>
            <dt className="text-sm text-ink-3">{t.labelContribution}</dt>
            <dd className="mt-1 leading-relaxed">{project.contribution}</dd>
          </div>
          <div>
            <dt className="sr-only">{t.labelStack}</dt>
            <dd className="text-sm text-ink-3">{project.stack.join(" · ")}</dd>
          </div>
        </dl>
        <p className="text-sm font-medium">
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1">
            {host}
            <ArrowUpRight size={14} aria-hidden="true" />
            <span className="sr-only">({t.opensInNewTab})</span>
          </a>
        </p>
      </div>
    </article>
  );
}
