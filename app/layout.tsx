import type { Metadata } from "next";
import "./styles/globals.css";
import { Inter } from "next/font/google";
import PageLayout from "./components/PageLayout";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://heyismail.com'),
  title: "Ismail Muhammad — SaaS MVP Developer",
  description:
    "I build SaaS MVPs in 7 days for non-technical founders. AI-accelerated development with 100% code ownership. Real products, not demos.",
  keywords: ["SaaS MVP", "AI development", "7-day sprint", "startup MVP", "Next.js developer"],
  authors: [{ name: "Ismail Muhammad" }],
  creator: "Ismail Muhammad",
  publisher: "Ismail Muhammad",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://heyismail.com",
    title: "Ismail Muhammad — SaaS MVP Developer",
    description: "I build SaaS MVPs in 7 days for non-technical founders. AI-accelerated development with 100% code ownership.",
    siteName: "heyismail.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ismail Muhammad - SaaS MVP Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ismail Muhammad — SaaS MVP Developer",
    description: "I build SaaS MVPs in 7 days for non-technical founders",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans bg-light text-dark antialiased`}
      >
        <PageLayout>{children}</PageLayout>
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
