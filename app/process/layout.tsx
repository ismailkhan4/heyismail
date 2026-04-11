import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — heyIsmail",
  description:
    "The exact 7-day process that turns your idea into a live platform. No surprises, no scope creep — everything yours on day 7.",
  openGraph: {
    title: "How It Works — heyIsmail",
    description:
      "The exact 7-day process that turns your idea into a live platform. No surprises, no scope creep — everything yours on day 7.",
    url: "https://heyismail.com/process",
  },
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}