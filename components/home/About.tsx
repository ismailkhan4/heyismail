import Section from "@/components/ui/Section";
import type { Dictionary } from "@/lib/i18n/en";

export default function About({ t }: { t: Dictionary["about"] }) {
  return (
    <Section id="about" heading={t.heading}>
      <div className="measure flex flex-col gap-4">
        {t.paragraphs.map((paragraph) => (
          <p key={paragraph} className="leading-relaxed sm:text-lg">
            {paragraph}
          </p>
        ))}
      </div>

      <h3 className="mt-12 text-lg font-semibold tracking-tight">{t.principlesHeading}</h3>
      <ul className="mt-5 grid gap-6 md:grid-cols-3">
        {t.principles.map((principle) => (
          <li key={principle.title} className="border-t border-line pt-4">
            <p className="font-semibold">{principle.title}</p>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{principle.body}</p>
          </li>
        ))}
      </ul>

      <figure className="mt-12 rounded-2xl bg-sunken p-6 sm:p-8">
        <blockquote lang="en" className="measure text-lg leading-relaxed">
          “{t.testimonial.quote}”
        </blockquote>
        <figcaption className="mt-4 text-sm text-ink-2">
          <span className="font-semibold text-ink">{t.testimonial.author}</span>
          {" · "}
          <a href={t.testimonial.url} target="_blank" rel="noopener noreferrer" className="link">
            {t.testimonial.role}
          </a>
        </figcaption>
      </figure>
    </Section>
  );
}
