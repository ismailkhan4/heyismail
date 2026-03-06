import { Metadata } from "next";
import { seoData } from "../data";

export const metadata: Metadata = {
  title: seoData.pages.process.title,
  description: seoData.pages.process.description,
  keywords: seoData.pages.process.keywords,
  openGraph: {
    title: seoData.pages.process.openGraph.title,
    description: seoData.pages.process.openGraph.description,
    url: seoData.pages.process.openGraph.url,
  },
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}