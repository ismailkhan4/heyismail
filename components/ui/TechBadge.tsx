import React from "react";
import type { TechItem } from "@/lib/types/content";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  item: Pick<TechItem, "name"> & Partial<Omit<TechItem, "name">>;
  /** "dark" = sitting on a dark section bg, "light" = sitting on a light section bg */
  theme?: "dark" | "light";
}

export default function TechBadge({ item, theme = "dark" }: TechBadgeProps): React.JSX.Element {
  return (
    <span
      className={cn(
        "inline-block rounded-md px-3.5 py-1.5",
        "border text-sm font-body font-medium tracking-tight",
        theme === "dark"
          ? "border-light/12 bg-light/[0.04] text-light/80"
          : "border-dark/12 bg-dark/[0.03] text-dark/80"
      )}
    >
      {item.name}
    </span>
  );
}
