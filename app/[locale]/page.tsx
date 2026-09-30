import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LanguageSuggestion from "@/components/layout/LanguageSuggestion";
import Hero from "@/components/home/Hero";
import Work from "@/components/home/Work";
import Stack from "@/components/home/Stack";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import { SITE_URL, languageAlternates, localePath, locales, ogLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Dictionary } from "@/lib/i18n/en";
import { profile, skills } from "@/lib/site";

type Props = { params: Promise<{ locale: Locale }> };

const languagePaths = Object.fromEntries(locales.map((l) => [l, localePath(l)])) as Record<Locale, string>;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale).meta;
  const url = `${SITE_URL}${localePath(locale)}`;

  return {
    title: t.title,
    description: t.description,
    alternates: { canonical: url, languages: languageAlternates("/") },
    openGraph: {
      type: "profile",
      url,
      title: t.title,
      description: t.description,
      siteName: profile.brand,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      images: [{ url: `/og/${locale}`, width: 1200, height: 630, alt: t.title }],
    },
    twitter: { card: "summary_large_image", title: t.title, description: t.description, images: [`/og/${locale}`] },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const homeHref = localePath(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(locale, dict)) }}
      />
      <Header locale={locale} dict={dict} homeHref={homeHref} languagePaths={languagePaths} />
      <main id="main">
        <Hero t={dict.hero} />
        <Work t={dict.work} facts={dict.facts} />
        <Stack t={dict.stack} />
        <About t={dict.about} />
        <Contact t={dict.contact} />
      </main>
      <Footer locale={locale} dict={dict} homeHref={homeHref} languagePaths={languagePaths} />
      <LanguageSuggestion current={locale} paths={languagePaths} />
    </>
  );
}

// Only facts that are visible on the page. Projects are not marked up as the
// person's works: they are other companies' products he contributed to.
function structuredData(locale: Locale, dict: Dictionary) {
  const url = `${SITE_URL}${localePath(locale)}`;
  const personId = `${SITE_URL}/#person`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: profile.brand,
        inLanguage: [...locales],
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${url}#profilepage`,
        url,
        name: dict.meta.title,
        description: dict.meta.description,
        inLanguage: locale,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        alternateName: "Ismail",
        url: `${SITE_URL}/`,
        image: `${SITE_URL}${profile.photo}`,
        jobTitle: dict.meta.jobTitle,
        description: dict.meta.description,
        email: `mailto:${profile.email}`,
        worksFor: { "@type": "Organization", name: profile.employer.name, url: profile.employer.url },
        homeLocation: {
          "@type": "Place",
          address: { "@type": "PostalAddress", addressLocality: profile.city, addressCountry: profile.countryCode },
        },
        knowsAbout: [...skills],
        knowsLanguage: ["en", "de"],
        sameAs: [profile.github, profile.linkedin],
      },
    ],
  };
}
