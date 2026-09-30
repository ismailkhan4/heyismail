import { headers } from "next/headers";
import Button from "@/components/ui/LinkButton";
import Wordmark from "@/components/ui/Wordmark";
import { isLocale, localePath, defaultLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

// not-found doesn't receive route params; the middleware forwards the locale.
export default async function NotFound() {
  const requested = (await headers()).get("x-locale") ?? undefined;
  const locale = isLocale(requested) ? requested : defaultLocale;
  const t = getDictionary(locale).notFound;

  return (
    <main id="main" className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-6 px-4 py-24 sm:px-6">
      <title>{`${t.title} – heyIsmail`}</title>
      <meta name="robots" content="noindex" />
      <a href={localePath(locale)} className="text-dark">
        <Wordmark />
      </a>
      <p className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-accent-ink">404</p>
      <h1 className="font-display text-4xl font-semibold tracking-tight text-dark md:text-5xl">{t.title}</h1>
      <p className="font-body text-lg text-dark/75">{t.body}</p>
      <div>
        <Button href={localePath(locale)}>{t.cta}</Button>
      </div>
    </main>
  );
}
