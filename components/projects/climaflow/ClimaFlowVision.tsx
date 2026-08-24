"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Wrench, ClipboardList, UserCheck, FileCheck, RefreshCw } from "lucide-react";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";
import SectionHeading from "@/components/ui/SectionHeading";
import { useTranslation } from "@/lib/i18n/context";

const STEP_ICONS = [Users, Wrench, ClipboardList, UserCheck, FileCheck, RefreshCw];
const STEP_COLORS = ["#0EA5E9", "#8B5CF6", "#F59E0B", "#C5D86D", "#10B981", "#0EA5E9"];

export default function ClimaFlowVision() {
  const { fadeUp, stagger, fadeIn } = useMotionVariants();
  const { t } = useTranslation();
  const cf = t.climaflow;

  return (
    <section className="py-20 md:py-32 bg-light overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
          <SectionHeading eyebrow={cf.visionEyebrow} heading={cf.visionHeading} subheading={cf.visionSubheading} theme="dark" />
        </motion.div>

        <div className="relative">
          {/* Desktop: horizontal */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="hidden md:flex items-center gap-0 justify-between">
            {cf.visionSteps.map((step, i) => {
              const Icon = STEP_ICONS[i] ?? Users;
              const color = STEP_COLORS[i] ?? "#0EA5E9";
              const isLast = i === cf.visionSteps.length - 1;
              return (
                <React.Fragment key={step.label}>
                  <motion.div variants={fadeUp} className="flex flex-col items-center text-center gap-3 flex-1 min-w-0">
                    <span className="font-body text-xs text-dark/30 font-semibold tracking-widest">{String(i + 1).padStart(2, "0")}</span>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border border-dark/8" style={{ backgroundColor: `${color}14` }}>
                      <Icon size={22} style={{ color }} />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-sm text-dark mb-0.5">{step.label}</p>
                      <p className="font-body text-xs text-dark/45 leading-snug max-w-[90px]">{step.desc}</p>
                    </div>
                  </motion.div>
                  {!isLast && (
                    <motion.div variants={fadeIn} className="flex-shrink-0 flex flex-col items-center gap-1 mx-1" aria-hidden="true">
                      <div className="w-8 h-px bg-brand-accent/30" />
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent/50" style={{ marginLeft: "6px" }} />
                    </motion.div>
                  )}
                </React.Fragment>
              );
            })}
          </motion.div>

          {/* Mobile: vertical */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:hidden flex flex-col max-w-sm mx-auto">
            {cf.visionSteps.map((step, i) => {
              const Icon = STEP_ICONS[i] ?? Users;
              const color = STEP_COLORS[i] ?? "#0EA5E9";
              const isLast = i === cf.visionSteps.length - 1;
              return (
                <React.Fragment key={step.label}>
                  <motion.div variants={fadeUp} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border border-dark/8" style={{ backgroundColor: `${color}14` }}>
                      <Icon size={20} style={{ color }} />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-sm text-dark">{step.label}</p>
                      <p className="font-body text-xs text-dark/50">{step.desc}</p>
                    </div>
                  </motion.div>
                  {!isLast && <div className="ml-6 w-px h-6 bg-brand-accent/25 my-1" aria-hidden="true" />}
                </React.Fragment>
              );
            })}
          </motion.div>
        </div>

        {/* Callout */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16 rounded-2xl border border-dark/10 bg-dark px-8 py-8 md:py-10 text-center">
          <p className="font-display font-semibold text-xl md:text-2xl text-light leading-[1.3] max-w-2xl mx-auto">
            &ldquo;{cf.visionCalloutQuote}{" "}
            <span className="text-brand-accent">{cf.visionCalloutEmphasis}</span>&rdquo;
          </p>
          <p className="font-body text-sm text-light/45 mt-3 max-w-md mx-auto">{cf.visionCalloutSub}</p>
        </motion.div>
      </div>
    </section>
  );
}
