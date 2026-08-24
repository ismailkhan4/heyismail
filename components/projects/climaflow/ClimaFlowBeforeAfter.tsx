"use client";

import React from "react";
import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";
import SectionHeading from "@/components/ui/SectionHeading";
import { useTranslation } from "@/lib/i18n/context";

export default function ClimaFlowBeforeAfter() {
  const { fadeUp, stagger } = useMotionVariants();
  const { t } = useTranslation();
  const cf = t.climaflow;

  return (
    <section className="py-20 md:py-32 bg-dark overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
          <SectionHeading eyebrow={cf.beforeAfterEyebrow} heading={cf.beforeAfterHeading} subheading={cf.beforeAfterSubheading} theme="light" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-start">
          {/* Before */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full flex items-center justify-center bg-red-500/15">
                <X size={12} className="text-red-400" />
              </div>
              <p className="font-body text-xs uppercase tracking-widest text-red-400 font-semibold">{cf.beforeAfterBeforeLabel}</p>
            </div>
            <div className="rounded-2xl border border-red-500/12 overflow-hidden" style={{ backgroundColor: "rgba(239,68,68,0.04)" }}>
              {cf.beforeItems.map((item) => (
                <motion.div key={item} variants={fadeUp} className="flex items-start gap-3 px-5 py-3.5 border-b border-red-500/8 last:border-0">
                  <X size={13} className="text-red-400/60 flex-shrink-0 mt-0.5" />
                  <p className="font-body text-sm text-light/55 leading-snug">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Center arrow — desktop */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="hidden md:flex flex-col items-center justify-start pt-12 gap-2" aria-hidden="true">
            <div className="w-px h-8 bg-light/10" />
            <div className="w-8 h-8 rounded-full border border-brand-accent/30 flex items-center justify-center">
              <ArrowRight size={14} style={{ color: "#C5D86D" }} />
            </div>
            <div className="w-px flex-1 bg-light/10" />
          </motion.div>

          {/* After */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full flex items-center justify-center bg-brand-accent/15">
                <Check size={12} style={{ color: "#C5D86D" }} />
              </div>
              <p className="font-body text-xs uppercase tracking-widest text-brand-accent font-semibold">{cf.beforeAfterAfterLabel}</p>
            </div>
            <div className="rounded-2xl border overflow-hidden" style={{ backgroundColor: "rgba(197,216,109,0.04)", borderColor: "rgba(197,216,109,0.12)" }}>
              {cf.afterItems.map((item) => (
                <motion.div key={item} variants={fadeUp} className="flex items-start gap-3 px-5 py-3.5 border-b last:border-0" style={{ borderColor: "rgba(197,216,109,0.08)" }}>
                  <Check size={13} className="flex-shrink-0 mt-0.5" style={{ color: "#C5D86D" }} />
                  <p className="font-body text-sm text-light/80 leading-snug font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Arrow — mobile */}
        <div className="md:hidden flex justify-center my-4" aria-hidden="true">
          <div className="w-8 h-8 rounded-full border border-brand-accent/30 flex items-center justify-center">
            <ArrowRight size={14} style={{ color: "#C5D86D" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
