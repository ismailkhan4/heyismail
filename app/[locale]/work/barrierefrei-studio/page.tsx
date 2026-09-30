import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import CaseStudy from "@/components/case-study/CaseStudy";
import { SITE_URL, languageAlternates, localePath, locales, ogLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Dictionary } from "@/lib/i18n/en";
import { profile, routes } from "@/lib/site";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale).caseStudy.meta;
  const url = `${SITE_URL}${localePath(locale, routes.caseStudy)}`;

  return {
    title: t.title,
    description: t.description,
    alternates: { canonical: url, languages: languageAlternates(routes.caseStudy) },
    openGraph: {
      type: "article",
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

export default async function CaseStudyPage({ params }: Props) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <PageShell locale={locale} dict={dict} path={routes.caseStudy}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(locale, dict)) }} />
      <CaseStudy dict={dict} homeHref={localePath(locale)} />
    </PageShell>
  );
}

// An article about a project in progress, written by the person on the homepage.
function structuredData(locale: Locale, dict: Dictionary) {
  const url = `${SITE_URL}${localePath(locale, routes.caseStudy)}`;
  const home = `${SITE_URL}${localePath(locale)}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        url,
        headline: dict.caseStudy.meta.title,
        description: dict.caseStudy.meta.description,
        inLanguage: locale,
        datePublished: "2026-09-30",
        dateModified: "2026-09-30",
        creativeWorkStatus: "Incomplete",
        author: { "@id": `${SITE_URL}/#person`, "@type": "Person", name: profile.name, url: `${SITE_URL}/` },
        isPartOf: { "@id": `${SITE_URL}/#website` },
        image: `${SITE_URL}/og/${locale}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: profile.brand, item: home },
          { "@type": "ListItem", position: 2, name: dict.building.name, item: url },
        ],
      },
    ],
  };
}
