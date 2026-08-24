"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare, FileSpreadsheet, Phone, FileText, ImageIcon, CalendarX,
  ArrowDown, AlertTriangle,
} from "lucide-react";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";
import SectionHeading from "@/components/ui/SectionHeading";
import { useTranslation } from "@/lib/i18n/context";

// Icon map — order must match dictionary toolList
const TOOL_ICONS = [MessageSquare, FileSpreadsheet, Phone, FileText, ImageIcon, CalendarX];

export default function ClimaFlowProblem() {
  const { fadeUp, stagger, fadeIn, scaleUp } = useMotionVariants();
  const { t } = useTranslation();
  const cf = t.climaflow;

  return (
    <section className="py-20 md:py-32 bg-dark overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
          <SectionHeading
            eyebrow={cf.problemEyebrow}
            heading={cf.problemHeading}
            subheading={cf.problemSubheading}
            theme="light"
          />
        </motion.div>

        {/* Fragmented tools grid */}
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-12"
        >
          {cf.problemTools.map((tool, idx) => {
            const Icon = TOOL_ICONS[idx] ?? MessageSquare;
            return (
              <motion.div
                key={tool.label}
                variants={scaleUp}
                className="relative rounded-xl border border-light/8 p-4 md:p-5 bg-surface/60 group overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                  style={{ background: `radial-gradient(circle at 20% 20%, ${tool.color}12, transparent 70%)` }}
                  aria-hidden="true"
                />
                <div className="relative">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: `${tool.color}18` }}>
                    <Icon size={16} style={{ color: tool.color }} />
                  </div>
                  <p className="font-display font-semibold text-sm text-light mb-1">{tool.label}</p>
                  <p className="font-body text-xs text-light/45 leading-snug">{tool.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Arrow + friction badge */}
        <motion.div
          variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex flex-col items-center gap-2 mb-12" aria-hidden="true"
        >
          <div className="w-px h-8 bg-light/10" />
          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/8">
            <AlertTriangle size={14} className="text-red-400" />
            <span className="font-body text-sm font-semibold text-red-400">{cf.problemFrictionLabel}</span>
          </div>
          <div className="w-px h-8 bg-light/10" />
          <ArrowDown size={16} className="text-light/20" />
        </motion.div>

        {/* Pain points */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-2xl mx-auto">
          <p className="font-body text-xs uppercase tracking-[0.18em] text-brand-accent font-semibold mb-6 text-center">
            {cf.problemOutcomeLabel}
          </p>
          <div className="flex flex-col gap-3">
            {cf.problemPainPoints.map((point) => (
              <motion.div key={point} variants={fadeUp} className="flex items-start gap-3 rounded-lg border border-light/7 px-4 py-3 bg-surface/40">
                <span className="mt-0.5 w-4 h-4 flex-shrink-0 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(239,68,68,0.12)" }} aria-hidden="true">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                </span>
                <p className="font-body text-sm text-light/65 leading-snug">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
