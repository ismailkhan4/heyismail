"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { PricingTier } from "@/lib/types/content";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";
import Button from "@/components/ui/LinkButton";
import { calLink } from "@/lib/content/siteConfig";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  tier: PricingTier;
}

export default function PricingCard({ tier }: PricingCardProps): React.JSX.Element {
  const { fadeUp } = useMotionVariants();

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -4,
        transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
      }}
      className={cn(
        "rounded-xl p-6 md:p-7 flex flex-col gap-5 border cursor-default",
        tier.highlighted
          ? "border-brand-accent/60 bg-brand-accent/[0.08]"
          : "border-light/10 bg-surface"
      )}
    >
      <div>
        {tier.highlighted && (
          <span className="inline-block text-xs font-semibold font-body text-brand-accent uppercase tracking-widest mb-2">
            Most common
          </span>
        )}
        <h3 className="font-display text-xl font-semibold text-light tracking-tight">
          {tier.name}
        </h3>
        <p className="font-body text-sm text-light/60 mt-2 leading-relaxed">{tier.whoFor}</p>
      </div>

      <ul className="flex flex-col gap-2.5">
        {tier.includes.map((item) => (
          <li key={item} className="flex items-start gap-2 font-body text-sm text-light/75">
            <Check className="mt-0.5 shrink-0 text-brand-accent" size={16} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <Button
        href={calLink}
        external
        variant={tier.highlighted ? "primary" : "outline"}
        size="sm"
        className={cn("mt-auto", !tier.highlighted && "text-light border-light/25")}
      >
        Book a call
      </Button>
    </motion.div>
  );
}
