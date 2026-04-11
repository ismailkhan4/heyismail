import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — heyIsmail",
  description:
    "I build custom platforms for LinkedIn creators who've outgrown the tools they started with. Not templates. Not builders. Custom platforms — designed around your brand.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
