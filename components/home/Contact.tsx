import { Github, Linkedin, Mail, CalendarDays, FileText } from "lucide-react";
import Button from "@/components/ui/LinkButton";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/lib/i18n/en";
import { profile } from "@/lib/site";

export default function Contact({ t }: { t: Dictionary["contact"] }) {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-dark py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            id="contact-heading"
            eyebrow={t.eyebrow}
            heading={t.heading}
            subheading={t.subheading}
            theme="light"
            className="mb-10"
          />

          <Button href={`mailto:${profile.email}`}>
            <Mail size={18} aria-hidden="true" />
            {t.emailCta}
          </Button>
          <p className="mt-3 font-body text-sm text-light/70">{profile.email}</p>

          <ul className="mt-8 flex flex-wrap gap-3">
            <li>
              <Button href={profile.linkedin} external variant="outlineOnDark" size="sm">
                <Linkedin size={16} aria-hidden="true" />
                {t.linkedin}
              </Button>
            </li>
            <li>
              <Button href={profile.github} external variant="outlineOnDark" size="sm">
                <Github size={16} aria-hidden="true" />
                {t.github}
              </Button>
            </li>
            {profile.cv && (
              <li>
                <Button href={profile.cv} variant="outlineOnDark" size="sm">
                  <FileText size={16} aria-hidden="true" />
                  CV (PDF)
                </Button>
              </li>
            )}
          </ul>

          <a
            href={profile.calendar}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-body text-sm font-medium text-light/80 underline decoration-light/30 underline-offset-4 hover:text-light hover:decoration-light"
          >
            <CalendarDays size={16} aria-hidden="true" />
            {t.bookCall}
          </a>
        </div>

        <div className="rounded-xl border border-light/10 bg-surface p-6 md:p-8">
          <h3 className="font-display text-xl font-semibold tracking-tight text-light">{t.detailsHeading}</h3>
          <dl className="mt-6 flex flex-col divide-y divide-light/10">
            {t.details.map((item) => (
              <div key={item.term} className="grid grid-cols-1 gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[9rem_1fr] sm:gap-4">
                <dt className="font-body text-xs font-semibold uppercase tracking-widest text-light/70 sm:pt-0.5">
                  {item.term}
                </dt>
                <dd className="font-body text-[15px] leading-relaxed text-light">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
