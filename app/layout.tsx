import type { Metadata } from "next";
import "./styles/globals.css";
import { Mona_Sans } from "next/font/google";
import PageLayout from "./components/PageLayout";

const monaSans = Mona_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "heyIsmail - Developer for Startups",
  description:
    "Helping startups build MVPs that impress investors and users alike.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monaSans.variable} font-sans bg-background text-foreground`}
      >
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
