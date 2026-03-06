import type { Metadata } from "next";
import "./styles/globals.css";
import { Mona_Sans } from "next/font/google";
import PageLayout from "./components/PageLayout";
import Script from "next/script";
import { seoData } from "./data";

const monaSans = Mona_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://heyismail.com'),
  title: seoData.pages.home.title,
  description: seoData.pages.home.description,
  keywords: seoData.pages.home.keywords,
  openGraph: {
    title: seoData.pages.home.openGraph.title,
    description: seoData.pages.home.openGraph.description,
    url: seoData.pages.home.openGraph.url,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Person JSON-LD Schema */}
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoData.schemas.person),
          }}
        />
      </head>
      <body
        className={`${monaSans.variable} font-sans bg-background text-foreground`}
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
