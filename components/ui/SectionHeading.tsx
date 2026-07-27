import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  subheading?: string;
  /** "dark" = light-bg section, "light" = dark-bg section */
  theme?: "dark" | "light";
  asH1?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  theme = "dark",
  asH1 = false,
  className,
}: SectionHeadingProps): React.JSX.Element {
  const colorClass = theme === "light" ? "text-light" : "text-dark";
  const Heading = asH1 ? "h1" : "h2";

  return (
    <div className={cn("flex flex-col gap-3", colorClass, className)}>
      <div className="flex items-center gap-2.5">
        <span className="block w-6 h-px bg-brand-accent flex-shrink-0" />
        <p className="font-body text-xs uppercase tracking-[0.18em] text-brand-accent font-semibold">
          {eyebrow}
        </p>
      </div>
      <Heading className="font-display font-semibold text-4xl md:text-5xl leading-[1.1] tracking-tight">
        {heading}
      </Heading>
      {subheading && (
        <p className={cn("font-body text-base md:text-lg leading-relaxed max-w-2xl", theme === "light" ? "text-light/65" : "text-dark/60")}>
          {subheading}
        </p>
      )}
    </div>
  );
}
