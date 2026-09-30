// The heyIsmail wordmark: name set in the display face, followed by the
// brand-accent dot. Inherits text color from its parent.
export default function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-end gap-0.5 font-display text-lg font-semibold tracking-tight ${className ?? ""}`}>
      heyIsmail
      <span className="mb-[2px] leading-none text-brand-accent" aria-hidden="true">
        •
      </span>
    </span>
  );
}
