import { Metadata } from "next";
import { seoData } from "../data";

export const metadata: Metadata = {
  title: seoData.pages.about.title,
  description: seoData.pages.about.description,
  keywords: seoData.pages.about.keywords,
  openGraph: {
    title: seoData.pages.about.openGraph.title,
    description: seoData.pages.about.openGraph.description,
    url: seoData.pages.about.openGraph.url,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}