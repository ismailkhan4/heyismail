import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { profile } from "@/lib/site";

// Social preview image per language, rendered once at build time.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#16180F",
          color: "#F3F4EC",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", fontSize: 36, fontWeight: 600 }}>
          {profile.brand}
          <span style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: "#C5D86D", marginLeft: 4 }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ display: "flex", fontSize: 40, color: "#C5D86D", marginTop: 12 }}>{t.meta.jobTitle}</div>
          <div style={{ display: "flex", fontSize: 30, color: "#B8BCAB", marginTop: 28 }}>
            React · Next.js · React Native
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#B8BCAB" }}>{t.footer.tagline}</div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
