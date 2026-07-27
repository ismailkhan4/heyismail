"use client";

import React from "react";
import { motion } from "framer-motion";
import type { ProcessStep } from "@/lib/types/content";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";

interface ProcessStepCardProps {
  step: ProcessStep;
  isLast?: boolean;
}

export default function ProcessStepCard({ step, isLast }: ProcessStepCardProps): React.JSX.Element {
  const { fadeUp } = useMotionVariants();

  return (
    <motion.div variants={fadeUp} className="relative flex gap-5 md:gap-6">
      <div className="flex flex-col items-center">
        <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full border border-brand-accent/40 bg-brand-accent/10 font-display text-sm font-semibold text-brand-accent">
          {step.phase}
        </span>
        {!isLast && <span className="w-px flex-1 bg-dark/10 mt-2" aria-hidden="true" />}
      </div>
      <div className="pb-10">
        <h3 className="font-display text-lg font-semibold text-dark tracking-tight mb-1.5">
          {step.title}
        </h3>
        <p className="font-body text-sm text-dark/70 leading-relaxed max-w-md">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
