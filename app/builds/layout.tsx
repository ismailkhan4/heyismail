import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Builds — heyIsmail",
  description:
    "Three custom creator platforms built in 7 days. Full case studies for LinkUp OS, Motiv8, and LinkedIn Growth OS — live, owned, and serving real members.",
  openGraph: {
    title: "Builds — heyIsmail",
    description:
      "Three custom creator platforms built in 7 days. Full case studies for LinkUp OS, Motiv8, and LinkedIn Growth OS — live, owned, and serving real members.",
    url: "https://heyismail.com/builds",
  },
};

export default function BuildsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}