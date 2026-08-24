"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Thermometer, Droplets, Calendar, CheckCircle2, Wrench, FileText, ChevronRight } from "lucide-react";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n/context";

type EquipTab = "overview" | "history" | "docs";

const SPEC_ICONS = [Calendar, Droplets, Thermometer, Calendar];
const SPEC_COLORS = ["#0EA5E9", "#8B5CF6", "#10B981", "#F59E0B"];
const SPEC_VALUES = ["14/06/2024", "R32 · 2.5 kg", "12/05/2026", "12/05/2027"];
const VALUE_PROP_ICONS = [Wrench, Calendar, FileText, Droplets];
const VALUE_PROP_COLORS = ["#0EA5E9", "#C5D86D", "#8B5CF6", "#F59E0B"];

const DOCS = [
  { name: "Report_12052026.pdf", size: "128 KB" },
  { name: "Report_04022026.pdf", size: "96 KB" },
  { name: "Warranty_Daikin.pdf", size: "2.1 MB" },
  { name: "Manual_FTXM35R.pdf",  size: "4.8 MB" },
];

export default function ClimaFlowEquipment() {
  const [tab, setTab] = useState<EquipTab>("overview");
  const { fadeUp, stagger, fadeIn } = useMotionVariants();
  const { t } = useTranslation();
  const cf = t.climaflow;

  const TABS = [
    { id: "overview" as EquipTab, label: cf.equipmentTabOverview },
    { id: "history"  as EquipTab, label: cf.equipmentTabHistory },
    { id: "docs"     as EquipTab, label: cf.equipmentTabDocs },
  ];

  return (
    <section className="py-20 md:py-32 bg-dark overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
          <SectionHeading eyebrow={cf.equipmentEyebrow} heading={cf.equipmentHeading} subheading={cf.equipmentSubheading} theme="light" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Card mockup */}
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="rounded-2xl border border-light/10 overflow-hidden" style={{ backgroundColor: "#0F1A0F" }}>
              {/* Header */}
              <div className="px-5 py-4 border-b border-light/8" style={{ backgroundColor: "#0A140A" }}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-body text-xs text-light/35 uppercase tracking-widest mb-1">{cf.equipmentUnitLabel}</p>
                    <p className="font-display font-semibold text-lg text-light">Daikin FTXM35R</p>
                    <p className="font-body text-xs text-light/45 mt-0.5">{cf.equipmentUnitType}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-body font-semibold" style={{ backgroundColor: "rgba(16,185,129,0.12)", color: "#10B981", border: "1px solid rgba(16,185,129,0.2)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />{cf.equipmentActiveLabel}
                  </span>
                </div>
              </div>
              {/* Tabs */}
              <div className="flex border-b border-light/8">
                {TABS.map((tp) => (
                  <button key={tp.id} onClick={() => setTab(tp.id)}
                    className={cn("flex-1 py-2.5 font-body text-xs font-semibold transition-all duration-200 border-b-2",
                      tab === tp.id ? "border-brand-accent text-brand-accent" : "border-transparent text-light/35 hover:text-light/55")}>
                    {tp.label}
                  </button>
                ))}
              </div>
              {/* Tab body */}
              <div className="p-5 min-h-[280px]">
                {tab === "overview" && (
                  <motion.div key="overview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} className="flex flex-col gap-4">
                    <div className="rounded-xl border border-light/8 p-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
                      <p className="font-body text-xs text-light/35 mb-1">{cf.equipmentClientLabel}</p>
                      <p className="font-display font-semibold text-sm text-light">Mario Rossi</p>
                      <p className="font-body text-xs text-light/45">Via Roma 42, Milano</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {SPEC_VALUES.map((val, i) => {
                        const Icon = SPEC_ICONS[i];
                        return (
                          <div key={i} className="rounded-xl border border-light/8 p-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
                            <div className="flex items-center gap-1.5 mb-1.5">
                              <Icon size={11} style={{ color: SPEC_COLORS[i] }} />
                              <span className="font-body text-xs text-light/35">{cf.equipmentSpecLabels[i]}</span>
                            </div>
                            <p className="font-body text-sm font-semibold text-light/80">{val}</p>
                          </div>
                        );
                      })}
                    </div>
                    <div className="rounded-xl border border-light/8 p-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
                      <p className="font-body text-xs text-light/35 mb-1">{cf.equipmentNoteLabel}</p>
                      <p className="font-body text-xs text-light/55 leading-relaxed">SN: DK-2024-038471 · FTXM35R2V1B · 3.5 kW</p>
                    </div>
                  </motion.div>
                )}
                {tab === "history" && (
                  <motion.div key="history" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} className="flex flex-col gap-2">
                    <p className="font-body text-xs text-light/30 mb-2">{cf.equipmentHistoryCount}</p>
                    {cf.equipmentHistoryItems.map((h, i) => (
                      <div key={h.date} className="flex gap-3 items-start">
                        <div className="flex flex-col items-center flex-shrink-0 pt-1">
                          <CheckCircle2 size={14} className="text-brand-accent" />
                          {i < cf.equipmentHistoryItems.length - 1 && <div className="w-px flex-1 bg-light/8 mt-1" style={{ minHeight: "28px" }} aria-hidden="true" />}
                        </div>
                        <div className="pb-3 flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="font-body text-xs font-semibold" style={{ color: "#C5D86D" }}>{h.type}</span>
                            <span className="font-body text-xs text-light/30">{h.date}</span>
                          </div>
                          <p className="font-body text-xs text-light/50 leading-snug">{h.notes}</p>
                          <p className="font-body text-xs text-light/30 mt-0.5">{cf.equipmentTechnicianLabel}: {h.tech}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
                {tab === "docs" && (
                  <motion.div key="docs" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} className="flex flex-col gap-2">
                    {DOCS.map((doc) => (
                      <button key={doc.name} className="flex items-center gap-3 p-3 rounded-xl border border-light/8 hover:border-light/15 transition-colors text-left" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(14,165,233,0.12)" }}>
                          <FileText size={14} style={{ color: "#0EA5E9" }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-body text-xs font-semibold text-light/75 truncate">{doc.name}</p>
                          <p className="font-body text-xs text-light/30">{doc.size}</p>
                        </div>
                        <ChevronRight size={12} className="text-light/20 flex-shrink-0" />
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Value props */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-6">
            {cf.equipmentValueProps.map((item, i) => {
              const Icon = VALUE_PROP_ICONS[i] ?? Wrench;
              const color = VALUE_PROP_COLORS[i] ?? "#0EA5E9";
              return (
                <motion.div key={item.title} variants={fadeUp} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${color}14`, border: `1px solid ${color}20` }}>
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-light mb-1">{item.title}</p>
                    <p className="font-body text-sm text-light/50 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
