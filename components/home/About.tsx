import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/lib/i18n/en";
import { profile } from "@/lib/site";

export default function About({ t }: { t: Dictionary["about"] }) {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-t border-dark/10 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <Image
            src={profile.photo}
            alt={t.photoAlt}
            width={600}
            height={400}
            sizes="(min-width: 1024px) 420px, (min-width: 640px) 560px, 100vw"
            className="h-auto w-full max-w-xl rounded-2xl border border-dark/10"
          />

          <div>
            <SectionHeading id="about-heading" eyebrow={t.eyebrow} heading={t.heading} theme="dark" className="mb-8" />
            <div className="flex max-w-2xl flex-col gap-4">
              {t.paragraphs.map((paragraph) => (
                <p key={paragraph} className="font-body text-lg leading-relaxed text-dark/80">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <h3 className="mb-6 font-display text-xl font-semibold tracking-tight text-dark">{t.principlesHeading}</h3>
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {t.principles.map((principle) => (
              <li key={principle.title} className="border-t border-dark/15 pt-5">
                <p className="font-body font-semibold text-dark">{principle.title}</p>
                <p className="mt-2 font-body leading-relaxed text-dark/75">{principle.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <figure className="mt-16 max-w-3xl border-l-2 border-brand-accent pl-6 md:mt-20 md:pl-8">
          <blockquote lang="en" className="font-display text-xl leading-snug tracking-tight text-dark md:text-2xl">
            “{t.testimonial.quote}”
          </blockquote>
          <figcaption className="mt-5 font-body text-sm text-dark/75">
            <span className="font-semibold text-dark">{t.testimonial.author}</span>
            {" · "}
            <a
              href={t.testimonial.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dark/30 underline-offset-4 hover:decoration-dark"
            >
              {t.testimonial.role}
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
