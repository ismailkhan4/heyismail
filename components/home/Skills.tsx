import Section from "@/components/ui/Section";
import type { Dictionary } from "@/lib/i18n/en";

export default function Skills({ t }: { t: Dictionary["skills"] }) {
  return (
    <Section id="skills" heading={t.heading}>
      <dl className="border-t border-line">
        {t.groups.map((group) => (
          <div key={group.name} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6">
            <dt className="text-sm text-ink-3 sm:pt-0.5">{group.name}</dt>
            <dd className="leading-relaxed">{group.items.join(" · ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
