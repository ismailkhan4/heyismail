import React from "react";
import type { Stat } from "@/lib/types/content";

interface StatItemProps {
  stat: Stat;
}

export default function StatItem({ stat }: StatItemProps): React.JSX.Element {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-display text-xl md:text-2xl font-semibold text-light tracking-tight">
        {stat.value}
      </span>
      <span className="font-body text-sm text-light/55">{stat.label}</span>
    </div>
  );
}
