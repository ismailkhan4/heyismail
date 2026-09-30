import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  heading: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
}

// Homepage section. On large screens the heading sits in a left rail and the
// content in a reading column, so sections read like one document.
export default function Section({ id, heading, intro, children, className }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className={cn("border-t border-line py-16 sm:py-20", className)}>
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-16">
        <h2 id={headingId} className="text-2xl font-semibold tracking-tight lg:text-xl">
          {heading}
        </h2>
        <div>
          {intro && <p className="mb-10 max-w-2xl leading-relaxed text-ink-2 sm:text-lg">{intro}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
