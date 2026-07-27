import React from "react";
import Image from "next/image";

interface ClientLogoProps {
  name: string;
  logoUrl?: string;
}

/**
 * Scaffolded for when a real client roster exists. Renders a wordmark
 * fallback until a logoUrl is provided, so it can be dropped into a trust
 * row or case study without a redesign.
 */
export default function ClientLogo({ name, logoUrl }: ClientLogoProps): React.JSX.Element {
  if (logoUrl) {
    return (
      <div className="relative h-8 w-28 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-200">
        <Image src={logoUrl} alt={name} fill className="object-contain object-left" />
      </div>
    );
  }

  return (
    <span className="font-display text-sm font-semibold text-dark/40 tracking-wide">
      {name}
    </span>
  );
}
