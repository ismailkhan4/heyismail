import type { Metadata } from "next";
import "./styles/globals.css";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import PageLayout from "./components/PageLayout";
import Script from "next/script";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://heyismail.com'),
  title: "Ismail Muhammad | SaaS MVP Developer",
  description:
    "I build SaaS MVPs in 7 days for non-technical founders. AI-accelerated development with 100% code ownership. Real products, not demos.",
  openGraph: {
    title: "Ismail Muhammad | SaaS MVP Developer",
    description: "I build SaaS MVPs in 7 days for non-technical founders",
    url: "https://heyismail.com",
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
      <body
        className={`${dmSans.variable} ${dmSerifDisplay.variable} font-sans bg-white text-dark-text`}
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
