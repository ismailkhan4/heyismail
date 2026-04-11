import type { Metadata } from "next";
import "./styles/globals.css";
import { Inter } from "next/font/google";
import PageLayout from "./components/PageLayout";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://heyismail.com"),
  title: "Ismail Muhammad — Creator Platform Builder",
  description:
    "I build custom platforms for LinkedIn creators in 7 days. Courses, community, coaching — one branded home. Full ownership transferred on day 7.",
  keywords: [
    "creator platform builder",
    "LinkedIn creator platform",
    "custom platform for creators",
    "course platform development",
    "community platform builder",
  ],
  openGraph: {
    title: "Ismail Muhammad — Creator Platform Builder",
    description:
      "I build custom platforms for LinkedIn creators in 7 days. Courses, community, coaching — one branded home. Full ownership transferred on day 7.",
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
      <head />
      <body
        className={`${inter.variable} bg-[#FBFFFC] text-[#0F0F0F]`}
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
