"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, RefreshCw, CheckCircle2, AlertCircle, Clock, ArrowRight } from "lucide-react";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n/context";

type GenerateState = "idle" | "generating" | "done";

const UPCOMING = [
  { client: "Mario Rossi",                    equipment: "Daikin FTXM35R",        due: "28 Aug", days: 6,  urgency: "critical" },
  { client: "Hotel Milano — Floor 1",          equipment: "Mitsubishi MSZ-LN50",   due: "30 Aug", days: 8,  urgency: "critical" },
  { client: "Hotel Milano — Floor 2",          equipment: "Mitsubishi MSZ-LN25",   due: "30 Aug", days: 8,  urgency: "critical" },
  { client: "Studio Ferretti",                 equipment: "LG S12EQ Artcool",      due: "02 Sep", days: 11, urgency: "soon" },
  { client: "Farmacia Centrale",               equipment: "Daikin FTXM25R",        due: "05 Sep", days: 14, urgency: "soon" },
  { client: "Condominio Verde — Apt. 1",        equipment: "Mitsubishi MSZ-HR25VF", due: "08 Sep", days: 17, urgency: "normal" },
  { client: "TechCo Srl",                      equipment: "Daikin FTXM50R",        due: "10 Sep", days: 19, urgency: "normal" },
];

const GENERATED_JOBS = [
  { tech: "Marco", time: "09:00", client: "Mario Rossi" },
  { tech: "Marco", time: "11:30", client: "Hotel Milano F.1" },
  { tech: "Paolo", time: "09:00", client: "Studio Ferretti" },
  { tech: "Paolo", time: "11:00", client: "Hotel Milano F.2" },
  { tech: "Sofia", time: "10:00", client: "Farmacia Centrale" },
];

const URGENCY_COLOR: Record<string, string> = { critical: "#EF4444", soon: "#F59E0B", normal: "#10B981" };

export default function ClimaFlowMaintenance() {
  const [genState, setGenState] = useState<GenerateState>("idle");
  const { fadeUp, stagger, fadeIn } = useMotionVariants();
  const { t } = useTranslation();
  const cf = t.climaflow;

  function handleGenerate() {
    if (genState !== "idle") return;
    setGenState("generating");
    setTimeout(() => setGenState("done"), 1800);
  }

  return (
    <section className="py-20 md:py-32 bg-dark overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
          <SectionHeading eyebrow={cf.maintenanceEyebrow} heading={cf.maintenanceHeading} subheading={cf.maintenanceSubheading} theme="light" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* List */}
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="rounded-2xl border border-light/10 overflow-hidden" style={{ backgroundColor: "#0F1A0F" }}>
              <div className="px-5 py-4 border-b border-light/8 flex items-center justify-between" style={{ backgroundColor: "#0A140A" }}>
                <div className="flex items-center gap-2">
                  <RefreshCw size={14} className="text-brand-accent" />
                  <p className="font-display font-semibold text-sm text-light">{cf.maintenanceCardTitle}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-body font-semibold" style={{ backgroundColor: "rgba(239,68,68,0.12)", color: "#EF4444", border: "1px solid rgba(239,68,68,0.2)" }}>
                  <AlertCircle size={10} />{cf.maintenanceTotalBadge}
                </span>
              </div>
              <div className="p-4 flex flex-col gap-2">
                {UPCOMING.map((item) => (
                  <div key={item.client} className="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-light/8" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: URGENCY_COLOR[item.urgency] }} aria-hidden="true" />
                    <div className="flex-1 min-w-0">
                      <p className="font-body text-xs font-semibold text-light/80 truncate">{item.client}</p>
                      <p className="font-body text-xs text-light/35 truncate">{item.equipment}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-body text-xs text-light/45">{item.due}</p>
                      <p className="font-body text-xs font-semibold" style={{ color: URGENCY_COLOR[item.urgency] }}>{item.days}d</p>
                    </div>
                  </div>
                ))}
                <p className="font-body text-xs text-light/25 text-center py-1">{cf.maintenanceMoreClients}</p>
                <button onClick={handleGenerate} disabled={genState !== "idle"}
                  className={cn("w-full flex items-center justify-center gap-2 py-3 mt-1 rounded-xl font-display font-semibold text-sm transition-all duration-300",
                    genState === "done" ? "opacity-50 cursor-default" : "hover:-translate-y-0.5")}
                  style={{ backgroundColor: genState === "done" ? "rgba(16,185,129,0.15)" : "rgba(197,216,109,0.15)", color: genState === "done" ? "#10B981" : "#C5D86D", border: `1px solid ${genState === "done" ? "rgba(16,185,129,0.25)" : "rgba(197,216,109,0.25)"}` }}>
                  {genState === "generating" ? <><RefreshCw size={14} className="animate-spin" />{cf.maintenanceGeneratingLabel}</>
                    : genState === "done" ? <><CheckCircle2 size={14} />{cf.maintenanceGeneratedLabel}</>
                    : <><Zap size={14} />{cf.maintenanceGenerateBtn}</>}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right panel */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-4">
            <motion.div variants={fadeUp} className="flex items-center gap-3" aria-hidden="true">
              <div className="w-8 h-px bg-brand-accent/30" />
              <ArrowRight size={14} className="text-brand-accent/50" />
              <p className="font-body text-xs text-light/30 uppercase tracking-widest">{cf.maintenanceSystemAutoLabel}</p>
            </motion.div>

            <AnimatePresence>
              {genState === "done" && (
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} className="rounded-2xl border border-light/10 overflow-hidden" style={{ backgroundColor: "#0F1A0F" }}>
                  <div className="px-5 py-4 border-b border-light/8 flex items-center gap-2" style={{ backgroundColor: "#0A140A" }}>
                    <CheckCircle2 size={14} style={{ color: "#10B981" }} />
                    <p className="font-display font-semibold text-sm text-light">{cf.maintenanceCreatedLabel}</p>
                  </div>
                  <div className="p-4 flex flex-col gap-2">
                    {GENERATED_JOBS.map((job) => (
                      <div key={job.tech + job.time} className="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-light/8" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
                        <div className="w-7 h-7 rounded-full bg-brand-accent/15 flex items-center justify-center flex-shrink-0">
                          <span className="font-display font-bold text-xs text-brand-accent">{job.tech[0]}</span>
                        </div>
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <Clock size={11} className="text-light/30 flex-shrink-0" />
                          <span className="font-body text-xs text-light/45">{job.time}</span>
                          <span className="font-body text-xs font-semibold text-light/75 truncate">{job.client}</span>
                        </div>
                        <span className="font-body text-xs text-emerald-400 flex-shrink-0">{cf.maintenanceScheduledLabel}</span>
                      </div>
                    ))}
                    <p className="font-body text-xs text-light/25 text-center py-1">{cf.maintenanceMoreDistributed}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {cf.maintenanceValueProps.map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="flex gap-3 rounded-xl border border-light/8 p-4" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
                <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: "#C5D86D" }} />
                <div>
                  <p className="font-display font-semibold text-sm text-light mb-0.5">{item.title}</p>
                  <p className="font-body text-sm text-light/45 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
