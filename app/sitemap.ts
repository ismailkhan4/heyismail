import type { MetadataRoute } from "next";
import { SITE_URL, languageAlternates, localePath, locales } from "@/lib/i18n/config";
import { routes } from "@/lib/site";

const PAGES = ["/", routes.caseStudy];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap((path) =>
    locales.map((locale) => ({
      url: `${SITE_URL}${localePath(locale, path)}`,
      alternates: { languages: languageAlternates(path) },
    }))
  );
}
