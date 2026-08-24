"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock, Sparkles } from "lucide-react";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n/context";

type PhaseStatus = "active" | "planned" | "future";

const STATUS_LABEL_STYLE: Record<PhaseStatus, React.CSSProperties> = {
  active:  { backgroundColor: "rgba(197,216,109,0.12)", color: "#C5D86D", border: "1px solid rgba(197,216,109,0.2)" },
  planned: { backgroundColor: "rgba(14,165,233,0.12)",  color: "#0EA5E9", border: "1px solid rgba(14,165,233,0.2)" },
  future:  { backgroundColor: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.3)", border: "1px solid rgba(255,255,255,0.08)" },
};

function StatusIcon({ status }: { status: PhaseStatus }) {
  if (status === "active")  return <Clock  size={12} style={{ color: "#C5D86D" }} />;
  if (status === "planned") return <Circle size={12} style={{ color: "#0EA5E9" }} />;
  return <Circle size={12} className="text-light/20" />;
}

export default function ClimaFlowRoadmap() {
  const { fadeUp, stagger, scaleUp } = useMotionVariants();
  const { t } = useTranslation();
  const cf = t.climaflow;

  return (
    <section className="py-20 md:py-32 bg-light overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
          <SectionHeading eyebrow={cf.roadmapEyebrow} heading={cf.roadmapHeading} subheading={cf.roadmapSubheading} theme="dark" />
        </motion.div>

        {/* Desktop: horizontal */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="hidden md:grid grid-cols-4 gap-5">
          {cf.roadmapPhases.map((phase) => {
            const status = phase.status as PhaseStatus;
            return (
              <motion.div key={phase.version} variants={scaleUp}
                className={cn("rounded-2xl border p-5 flex flex-col gap-4 relative overflow-hidden", status === "active" ? "border-brand-accent/20" : "border-dark/8")}
                style={{ backgroundColor: status === "active" ? "rgba(197,216,109,0.04)" : "white" }}>
                {status === "active" && <div className="absolute top-0 left-0 right-0 h-0.5" style={{ backgroundColor: "#C5D86D" }} aria-hidden="true" />}
                <div className="flex items-start justify-between">
                  <span className="font-display font-bold text-2xl" style={{ color: phase.color, opacity: status === "future" ? 0.35 : 1 }}>{phase.version}</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-body text-xs font-semibold" style={STATUS_LABEL_STYLE[status]}>
                    <StatusIcon status={status} />{phase.label}
                  </span>
                </div>
                <h3 className={cn("font-display font-semibold text-base leading-snug", status === "future" ? "text-dark/30" : "text-dark")}>{phase.title}</h3>
                <div className="flex flex-col gap-1.5 mt-auto">
                  {phase.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2">
                      {status === "future"
                        ? <Circle size={11} className="mt-0.5 flex-shrink-0 text-dark/15" />
                        : <CheckCircle2 size={11} className="mt-0.5 flex-shrink-0" style={{ color: phase.color }} />}
                      <span className={cn("font-body text-xs leading-snug", status === "future" ? "text-dark/30" : "text-dark/65")}>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile: vertical */}
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:hidden flex flex-col gap-4">
          {cf.roadmapPhases.map((phase) => {
            const status = phase.status as PhaseStatus;
            return (
              <motion.div key={phase.version} variants={fadeUp}
                className={cn("rounded-2xl border p-5 relative overflow-hidden", status === "active" ? "border-brand-accent/20" : "border-dark/8")}
                style={{ backgroundColor: status === "active" ? "rgba(197,216,109,0.04)" : "white" }}>
                {status === "active" && <div className="absolute top-0 left-0 right-0 h-0.5" style={{ backgroundColor: "#C5D86D" }} aria-hidden="true" />}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-display font-bold text-xl" style={{ color: phase.color, opacity: status === "future" ? 0.35 : 1 }}>{phase.version}</span>
                    <h3 className={cn("font-display font-semibold text-sm", status === "future" ? "text-dark/30" : "text-dark")}>{phase.title}</h3>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-body text-xs font-semibold" style={STATUS_LABEL_STYLE[status]}>
                    {phase.label}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  {phase.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-1.5">
                      <CheckCircle2 size={10} className="mt-0.5 flex-shrink-0" style={{ color: status === "future" ? "#d4d4d4" : phase.color }} />
                      <span className={cn("font-body text-xs", status === "future" ? "text-dark/30" : "text-dark/60")}>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-10 flex items-center justify-center gap-2">
          <Sparkles size={14} className="text-brand-accent/60" />
          <p className="font-body text-sm text-dark/40 text-center">{cf.roadmapBottomNote}</p>
        </motion.div>
      </div>
    </section>
  );
}
