import { ArrowRight, Check, CircleDashed } from "lucide-react";
import type { Status } from "@/lib/i18n/en";
import { cn } from "@/lib/utils";

// Progress label for roadmap items. Text, icon and color all carry the status,
// so it never depends on color alone.
const STYLES: Record<Status, { icon: typeof Check; className: string }> = {
  done: { icon: Check, className: "text-success" },
  next: { icon: ArrowRight, className: "text-brand-ink" },
  planned: { icon: CircleDashed, className: "text-ink-3" },
};

export default function StatusTag({ status, label, className }: { status: Status; label: string; className?: string }) {
  const { icon: Icon, className: tone } = STYLES[status];

  return (
    <span className={cn("inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold", tone, className)}>
      <Icon size={15} strokeWidth={2.25} aria-hidden="true" />
      {label}
    </span>
  );
}
