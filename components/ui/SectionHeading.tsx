import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  subheading?: string;
  /** "dark" = dark text for light sections, "light" = light text for dark sections */
  theme?: "dark" | "light";
  asH1?: boolean;
  /** id for the heading, so the section can reference it with aria-labelledby */
  id?: string;
  className?: string;
}

// Eyebrow: accent rule + small caps label. The label uses the bright accent
// only on dark sections; on light sections it uses the darker accent-ink so
// it stays readable (brand-accent on light is 1.36:1).
export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  theme = "dark",
  asH1 = false,
  id,
  className,
}: SectionHeadingProps): React.JSX.Element {
  const onDark = theme === "light";
  const Heading = asH1 ? "h1" : "h2";

  return (
    <div className={cn("flex flex-col gap-3", onDark ? "text-light" : "text-dark", className)}>
      <div className="flex items-center gap-2.5">
        <span className="block h-px w-6 flex-shrink-0 bg-brand-accent" aria-hidden="true" />
        <p
          className={cn(
            "font-body text-xs font-semibold uppercase tracking-[0.18em]",
            onDark ? "text-brand-accent" : "text-accent-ink"
          )}
        >
          {eyebrow}
        </p>
      </div>
      <Heading id={id} className="font-display text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
        {heading}
      </Heading>
      {subheading && (
        <p
          className={cn(
            "max-w-2xl font-body text-base leading-relaxed md:text-lg",
            onDark ? "text-light/70" : "text-dark/70"
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
