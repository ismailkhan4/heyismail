// The heyIsmail wordmark: the name followed by the lime brand dot.
// Inherits text color from its parent.
export default function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline text-lg font-semibold tracking-tight ${className ?? ""}`}>
      heyIsmail
      <span className="ml-0.5 inline-block size-[7px] rounded-full bg-brand" aria-hidden="true" />
    </span>
  );
}
