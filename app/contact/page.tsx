import { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";
import { seoData } from "../data";

export const metadata: Metadata = {
  title: seoData.pages.contact.title,
  description: seoData.pages.contact.description,
  keywords: seoData.pages.contact.keywords,
  openGraph: {
    title: seoData.pages.contact.openGraph.title,
    description: seoData.pages.contact.openGraph.description,
    url: seoData.pages.contact.openGraph.url,
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}