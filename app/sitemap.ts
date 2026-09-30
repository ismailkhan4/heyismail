import type { MetadataRoute } from "next";
import { SITE_URL, languageAlternates, localePath, locales } from "@/lib/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${SITE_URL}${localePath(locale)}`,
    alternates: { languages: languageAlternates("/") },
  }));
}
