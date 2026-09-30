import Image from "next/image";
import { ArrowDown } from "lucide-react";
import Button from "@/components/ui/LinkButton";
import type { Dictionary } from "@/lib/i18n/en";
import { profile } from "@/lib/site";

export default function Hero({ t }: { t: Dictionary["hero"] }) {
  return (
    <section aria-labelledby="hero-heading" className="pt-8 pb-16 sm:pt-16 sm:pb-20 lg:pt-20">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16">
        {/* Small avatar above the name on phones, portrait beside it on large screens. */}
        <div className="relative size-16 overflow-hidden rounded-full border border-line bg-sunken lg:order-last lg:aspect-[4/5] lg:h-auto lg:w-full lg:rounded-2xl">
          <Image
            src={profile.photo}
            alt={t.photoAlt}
            fill
            priority
            sizes="(min-width: 1024px) 256px, 64px"
            className="object-cover"
          />
        </div>

        <div>
          <h1 id="hero-heading" className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-2xl text-xl leading-snug sm:text-2xl">{t.role}</p>
          <p className="measure mt-5 leading-relaxed text-ink-2 sm:text-lg">{t.summary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Button href="#contact">{t.ctaPrimary}</Button>
            <a href="#work" className="link inline-flex items-center gap-1.5 font-semibold">
              {t.ctaSecondary}
              <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
          <dl className="mt-10 grid gap-4 border-t border-line pt-6 sm:grid-cols-3 sm:gap-6">
            {t.facts.map((fact) => (
              <div key={fact.term}>
                <dt className="text-sm text-ink-3">{fact.term}</dt>
                <dd className="mt-1 text-[15px] leading-snug">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
