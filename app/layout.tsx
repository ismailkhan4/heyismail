import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { LangProvider } from "@/lib/i18n/context";

// Inter Tight for headings — a tighter-tracked cut of Inter that reads more
// deliberate/display than default Inter at heading sizes.
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteTitle =
  "Muhammad Ismail — Full-Stack Software Engineer";
const siteDescription =
  "Full-stack software engineer with 5+ years of professional experience building production web, mobile, and AI products. React, Next.js, TypeScript, Node.js, and React Native. Available for project collaboration, contract engineering, and full-time opportunities.";

export const metadata: Metadata = {
  metadataBase: new URL("https://heyismail.com"),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "full-stack software engineer",
    "React Next.js developer",
    "React Native mobile developer",
    "software engineer for hire",
    "full-stack engineer for startups",
    "contract software engineer",
    "software engineer Italy",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Ismail",
  jobTitle: "Full-Stack Software Engineer",
  url: "https://heyismail.com",
  description: siteDescription,
  knowsAbout: [
    "Web Development",
    "Mobile App Development",
    "AI Integration",
    "Next.js",
    "React Native",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interTight.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <LangProvider>
          {children}
        </LangProvider>
        <Script
          id="tawkto-chat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),
                    s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/62b9971ab0d10b6f3e797f52/1g6ifcg8b';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
