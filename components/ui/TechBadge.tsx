import React from "react";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  /** "dark" = sitting on a dark section bg, "light" = sitting on a light section bg */
  theme?: "dark" | "light";
}

export default function TechBadge({ name, theme = "dark" }: TechBadgeProps): React.JSX.Element {
  return (
    <span
      className={cn(
        "inline-block rounded-md border px-2.5 py-1 font-body text-sm font-medium tracking-tight",
        theme === "dark" ? "border-light/15 text-light/80" : "border-dark/15 text-dark/80"
      )}
    >
      {name}
    </span>
  );
}
