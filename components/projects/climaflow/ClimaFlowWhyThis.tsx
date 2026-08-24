"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Wrench, Zap, Brain } from "lucide-react";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";
import SectionHeading from "@/components/ui/SectionHeading";
import { useTranslation } from "@/lib/i18n/context";

const PILLAR_ICONS  = [Smartphone, Wrench, Zap, Brain];
const PILLAR_COLORS = ["#0EA5E9", "#C5D86D", "#F59E0B", "#8B5CF6"];

export default function ClimaFlowWhyThis() {
  const { fadeUp, stagger, scaleUp } = useMotionVariants();
  const { t } = useTranslation();
  const cf = t.climaflow;

  return (
    <section className="py-20 md:py-32 bg-light overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
          <SectionHeading eyebrow={cf.whyThisEyebrow} heading={cf.whyThisHeading} subheading={cf.whyThisSubheading} theme="dark" />
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {cf.whyThisPillars.map((pillar, i) => {
            const Icon  = PILLAR_ICONS[i]  ?? Smartphone;
            const color = PILLAR_COLORS[i] ?? "#0EA5E9";
            return (
              <motion.div key={pillar.title} variants={scaleUp}
                className="rounded-2xl border border-dark/8 p-6 md:p-7 flex flex-col gap-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${color}14`, border: `1px solid ${color}20` }}>
                  <Icon size={22} style={{ color }} />
                </div>
                <div>
                  <span className="font-body text-xs uppercase tracking-widest font-semibold" style={{ color }}>{pillar.title}</span>
                  <h3 className="font-display font-semibold text-lg text-dark mt-1 leading-snug">{pillar.headline}</h3>
                </div>
                <p className="font-body text-sm text-dark/60 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
