import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "The 7-Day Sprint Process | Ismail Muhammad",
    description: "See exactly what happens each day of the 7-day MVP sprint. From idea to live product in one week.",
};

export default function ProcessLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}