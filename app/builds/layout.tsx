import { Metadata } from "next";
import { seoData } from "../data";

export const metadata: Metadata = {
  title: seoData.pages.builds.title,
  description: seoData.pages.builds.description,
  keywords: seoData.pages.builds.keywords,
  openGraph: {
    title: seoData.pages.builds.openGraph.title,
    description: seoData.pages.builds.openGraph.description,
    url: seoData.pages.builds.openGraph.url,
  },
};

export default function BuildsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}