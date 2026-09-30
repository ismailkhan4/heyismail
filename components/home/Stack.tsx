import SectionHeading from "@/components/ui/SectionHeading";
import TechBadge from "@/components/ui/TechBadge";
import type { Dictionary } from "@/lib/i18n/en";

export default function Stack({ t }: { t: Dictionary["stack"] }) {
  return (
    <section id="stack" aria-labelledby="stack-heading" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="stack-heading" eyebrow={t.eyebrow} heading={t.heading} theme="dark" className="mb-12" />

        <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.groups.map((group) => (
            <div key={group.name}>
              <h3 className="mb-3 font-body text-xs font-semibold uppercase tracking-widest text-dark/70">
                {group.name}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <TechBadge name={item} theme="light" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
