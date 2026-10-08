import { CalendarDays, Facebook, FileText, Github, Instagram, Linkedin, Mail } from "lucide-react";
import Button from "@/components/ui/LinkButton";
import CopyEmail from "@/components/home/CopyEmail";
import type { Dictionary } from "@/lib/i18n/en";
import { profile } from "@/lib/site";

// The one dark band on the page: the next step, and the facts a recruiter needs to take it.
export default function Contact({ t }: { t: Dictionary["contact"] }) {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-night py-16 text-on-night sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
        <div>
          <h2 id="contact-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.heading}
          </h2>
          <p className="mt-3 max-w-md leading-relaxed text-on-night-2 sm:text-lg">{t.subheading}</p>

          <div className="mt-8">
            <Button href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden="true" />
              {t.emailCta}
            </Button>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="text-[15px] text-on-night">{profile.email}</span>
            <CopyEmail email={profile.email} label={t.copyEmail} copiedLabel={t.copied} />
          </div>

          <ul className="mt-8 flex flex-wrap gap-3">
            <li>
              <Button href={profile.linkedin} external rel="me noopener" variant="secondaryOnNight" size="sm">
                <Linkedin size={16} aria-hidden="true" />
                {t.linkedin}
              </Button>
            </li>
            <li>
              <Button href={profile.github} external rel="me noopener" variant="secondaryOnNight" size="sm">
                <Github size={16} aria-hidden="true" />
                {t.github}
              </Button>
            </li>
            <li>
              <Button href={profile.instagram} external rel="me noopener" variant="secondaryOnNight" size="sm">
                <Instagram size={16} aria-hidden="true" />
                {t.instagram}
              </Button>
            </li>
            <li>
              <Button href={profile.facebook} external rel="me noopener" variant="secondaryOnNight" size="sm">
                <Facebook size={16} aria-hidden="true" />
                {t.facebook}
              </Button>
            </li>
            {profile.cv && (
              <li>
                <Button href={profile.cv} variant="secondaryOnNight" size="sm">
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
            className="link mt-6 inline-flex items-center gap-2 text-sm font-medium text-on-night-2 hover:text-on-night"
          >
            <CalendarDays size={16} aria-hidden="true" />
            {t.bookCall}
          </a>
        </div>

        <div className="rounded-2xl border border-line-night p-6 sm:p-8">
          <h3 className="text-lg font-semibold tracking-tight">{t.detailsHeading}</h3>
          <dl className="mt-5 flex flex-col divide-y divide-line-night">
            {t.details.map((item) => (
              <div key={item.term} className="grid gap-1 py-3.5 first:pt-0 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-4">
                <dt className="text-sm text-on-night-2 sm:pt-0.5">{item.term}</dt>
                <dd className="text-[15px] leading-relaxed">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
