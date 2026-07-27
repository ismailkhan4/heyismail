"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Service } from "@/lib/types/content";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps): React.JSX.Element {
  const { scaleUp } = useMotionVariants();

  return (
    <motion.div
      variants={scaleUp}
      whileHover={{
        y: -6,
        boxShadow: "0 20px 40px -12px rgba(197,216,109,0.18), 0 4px 16px -4px rgba(7,7,7,0.08)",
        borderColor: "rgba(197,216,109,0.5)",
        transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
      }}
      className="border border-dark/10 rounded-xl p-6 md:p-7 flex flex-col gap-3 bg-light cursor-default"
      style={{ willChange: "transform" }}
    >
      <h3 className="font-display text-xl font-semibold text-dark tracking-tight">
        {service.title}
      </h3>
      <p className="font-body text-sm text-dark/70 leading-relaxed">{service.description}</p>
      <p className="font-body text-xs uppercase tracking-widest text-brand-accent mt-auto pt-2">
        {service.tech.join(" · ")}
      </p>
    </motion.div>
  );
}
