import { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact — heyIsmail",
  description:
    "One conversation is enough to know if this is right. Tell me about your audience and what you want to build.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
