"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Wrench, Map } from "lucide-react";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";
import SectionHeading from "@/components/ui/SectionHeading";
import { useTranslation } from "@/lib/i18n/context";

const SIGNAL_ICONS  = [Users, Wrench, TrendingUp, Map];
const SIGNAL_COLORS = ["#0EA5E9", "#C5D86D", "#8B5CF6", "#F59E0B"];

export default function ClimaFlowMarket() {
  const { fadeUp, stagger, scaleUp } = useMotionVariants();
  const { t } = useTranslation();
  const cf = t.climaflow;

  return (
    <section className="py-20 md:py-32 bg-dark overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
          <SectionHeading eyebrow={cf.marketEyebrow} heading={cf.marketHeading} subheading={cf.marketSubheading} theme="light" />
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {cf.marketSignals.map((signal, i) => {
            const Icon  = SIGNAL_ICONS[i]  ?? Users;
            const color = SIGNAL_COLORS[i] ?? "#0EA5E9";
            return (
              <motion.div key={signal.title} variants={scaleUp} className="rounded-2xl border border-light/8 p-6 flex flex-col gap-4" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${color}14`, border: `1px solid ${color}20` }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-base text-light mb-2">{signal.title}</h3>
                  <p className="font-body text-sm text-light/55 leading-relaxed">{signal.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Personal perspective */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-2xl border border-light/10 bg-surface/60 p-8 md:p-10">
          <div className="flex items-start gap-4">
            <div className="w-1 rounded-full bg-brand-accent flex-shrink-0 self-stretch" aria-hidden="true" />
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-brand-accent font-semibold mb-3">{cf.marketPerspectiveLabel}</p>
                <p className="font-display font-semibold text-xl md:text-2xl text-light leading-[1.3]">{cf.marketPerspectiveQuote}</p>
              </div>
              <p className="font-body text-base text-light/55 leading-relaxed max-w-2xl">{cf.marketPerspectiveBody}</p>
              <p className="font-body text-sm text-light/40">{cf.marketAuthor}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
