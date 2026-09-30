"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyEmailProps {
  email: string;
  label: string;
  copiedLabel: string;
}

/** Copies the address for visitors without a mail client. Announces the result politely. */
export default function CopyEmail({ email, label, copiedLabel }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 3000);
    return () => clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard blocked: the address is visible and selectable next to the button.
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={copy}
        aria-label={label}
        className="inline-flex size-10 items-center justify-center rounded-lg border border-line-night text-on-night-2 transition-colors duration-150 hover:border-on-night-2 hover:text-on-night"
      >
        {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
      </button>
      <span role="status" className="text-sm text-brand">
        {copied ? copiedLabel : ""}
      </span>
    </>
  );
}
