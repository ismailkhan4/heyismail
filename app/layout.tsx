import type { Metadata } from "next";
import "./styles/globals.css";
import { Mona_Sans } from "next/font/google";
import PageLayout from "./components/PageLayout";
import Script from "next/script";

const monaSans = Mona_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "heyIsmail | Ship Your MVP in 7 Days - AI-Powered Development",
  description:
    "Turn your idea into an investor-ready product. AI builds 70%, we perfect the rest. $5K-15K fixed price. No agencies, no freelancers — just results.",
  openGraph: {
    title: "heyIsmail | Ship Your MVP in 7 Days",
    description: "AI-powered MVP development for founders",
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
