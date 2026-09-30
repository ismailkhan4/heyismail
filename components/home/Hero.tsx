import Button from "@/components/ui/LinkButton";
import type { Dictionary } from "@/lib/i18n/en";

export default function Hero({ t }: { t: Dictionary["hero"] }) {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(197,216,109,0.14) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="block h-px w-8 bg-brand-accent" aria-hidden="true" />
            <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-accent-ink">
              {t.eyebrow}
            </p>
          </div>

          <h1
            id="hero-heading"
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-dark sm:text-5xl lg:text-6xl"
          >
            {t.headline}
          </h1>

          <p className="mt-7 max-w-2xl font-body text-lg leading-relaxed text-dark/75">{t.body}</p>

          <p className="mt-6 flex items-center gap-2.5 font-body text-sm font-medium text-dark/75">
            <span className="h-2 w-2 flex-shrink-0 rounded-full bg-brand-accent ring-2 ring-dark/10" aria-hidden="true" />
            {t.location}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="#contact">{t.ctaPrimary}</Button>
            <Button href="#work" variant="outline">
              {t.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
