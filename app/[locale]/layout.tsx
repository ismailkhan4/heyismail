import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Inter, Inter_Tight } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL, isLocale, locales } from "@/lib/i18n/config";
import "../globals.css";

// Variable fonts: one file per family instead of one per weight.
const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export const viewport: Viewport = {
  themeColor: "#E8F1F2",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale} className={`${interTight.variable} ${inter.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
