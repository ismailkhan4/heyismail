"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone, Navigation2, Play, CheckSquare, Square, Camera, Mic,
  PenLine, ChevronLeft, MapPin, Clock, Wrench, Package, FileCheck,
} from "lucide-react";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n/context";

type Screen = "jobs" | "detail" | "checklist" | "report";
const SCREEN_ORDER: Screen[] = ["jobs", "detail", "checklist", "report"];

export default function ClimaFlowTechnician() {
  const [screen, setScreen] = useState<Screen>("jobs");
  const { fadeUp, stagger } = useMotionVariants();
  const { t } = useTranslation();
  const cf = t.climaflow;

  const [checklist, setChecklist] = useState(
    cf.technicianChecklistItems.map((i) => ({ ...i }))
  );

  // Reset checklist when language changes (items reloaded from dictionary)
  const checklistItems = cf.technicianChecklistItems;

  const [checkStates, setCheckStates] = useState<Record<string, boolean>>(
    () => Object.fromEntries(checklistItems.map((i) => [i.id, i.done]))
  );

  function toggleCheck(id: string) {
    setCheckStates((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  const currentIdx = SCREEN_ORDER.indexOf(screen);
  const doneCount  = Object.values(checkStates).filter(Boolean).length;

  const SCREEN_LABELS: Record<Screen, string> = {
    jobs:      cf.technicianScreenLabels.jobs,
    detail:    cf.technicianScreenLabels.detail,
    checklist: cf.technicianScreenLabels.checklist,
    report:    cf.technicianScreenLabels.report,
  };

  return (
    <section className="py-20 md:py-32 bg-light overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
          <SectionHeading eyebrow={cf.technicianEyebrow} heading={cf.technicianHeading} subheading={cf.technicianSubheading} theme="dark" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Steps */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5 order-2 lg:order-1">
            {cf.technicianSteps.map((item) => {
              const scrKey = (["jobs", "detail", "checklist", "report"] as Screen[])[
                cf.technicianSteps.indexOf(item)
              ];
              return (
                <motion.button key={item.step} variants={fadeUp} onClick={() => setScreen(scrKey)}
                  className={cn("text-left flex gap-4 rounded-xl p-4 border transition-all duration-200",
                    screen === scrKey ? "border-dark/20 bg-dark/4 shadow-sm" : "border-transparent hover:border-dark/8 hover:bg-dark/2")}>
                  <span className={cn("font-display font-bold text-xs flex-shrink-0 pt-0.5 transition-colors", screen === scrKey ? "text-brand-accent" : "text-dark/25")}>
                    {item.step}
                  </span>
                  <div>
                    <p className={cn("font-display font-semibold text-sm mb-1 transition-colors", screen === scrKey ? "text-dark" : "text-dark/70")}>{item.title}</p>
                    <p className="font-body text-sm text-dark/50 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Phone mockup */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="flex justify-center order-1 lg:order-2">
            <div className="relative w-[280px] md:w-[300px]">
              <div className="w-full rounded-[40px] overflow-hidden shadow-2xl border-4" style={{ borderColor: "#1a1a1a", backgroundColor: "#0F1A0F", boxShadow: "0 40px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.05)" }}>
                {/* Status bar */}
                <div className="flex items-center justify-between px-6 pt-4 pb-2" style={{ backgroundColor: "#0A140A" }}>
                  <span className="font-body text-xs text-light/50">9:41</span>
                  <div className="w-20 h-5 rounded-full bg-dark" aria-hidden="true" />
                  <div className="flex gap-1" aria-hidden="true"><div className="w-3 h-3 rounded-sm bg-light/20" /></div>
                </div>
                {/* App header */}
                <div className="px-4 py-3 flex items-center gap-2 border-b border-light/8" style={{ backgroundColor: "#0A140A" }}>
                  {currentIdx > 0 && (
                    <button onClick={() => setScreen(SCREEN_ORDER[currentIdx - 1])} className="text-light/50 hover:text-light/80 transition-colors" aria-label={cf.technicianBackLabel}>
                      <ChevronLeft size={16} />
                    </button>
                  )}
                  <div className="flex items-center gap-2 flex-1">
                    <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ backgroundColor: "#0EA5E9" }}>
                      <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 2C7 2 4 4.5 4 7.5a3 3 0 0 0 6 0C10 4.5 7 2 7 2Z" fill="white" opacity="0.9" /></svg>
                    </div>
                    <span className="font-display font-semibold text-sm text-light">{SCREEN_LABELS[screen]}</span>
                  </div>
                </div>

                {/* Screens */}
                <div className="min-h-[480px] overflow-hidden">
                  <AnimatePresence mode="wait">
                    {screen === "jobs" && (
                      <motion.div key="jobs" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }} className="p-4 flex flex-col gap-3">
                        <p className="font-body text-xs text-light/35 mb-1">{cf.technicianTodayLabel}</p>
                        {cf.technicianJobsList.map((job) => (
                          <button key={job.time} onClick={() => setScreen("detail")} className="text-left rounded-xl p-3 border border-light/8 hover:border-brand-accent/30 transition-colors" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                            <div className="flex items-center justify-between mb-1.5">
                              <div className="flex items-center gap-2">
                                <Clock size={11} className="text-brand-accent" />
                                <span className="font-body text-xs text-brand-accent font-semibold">{job.time}</span>
                              </div>
                              {job.status === "active" && <span className="text-xs font-body text-amber-400 font-semibold">{cf.technicianInProgressLabel}</span>}
                            </div>
                            <p className="font-display font-semibold text-sm text-light">{job.client}</p>
                            <p className="font-body text-xs text-light/50 mt-0.5">{job.issue}</p>
                            <div className="flex items-center gap-1 mt-2">
                              <MapPin size={10} className="text-light/30" />
                              <span className="font-body text-xs text-light/30">{job.addr}</span>
                            </div>
                          </button>
                        ))}
                      </motion.div>
                    )}

                    {screen === "detail" && (
                      <motion.div key="detail" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }} className="p-4 flex flex-col gap-4">
                        <div className="rounded-xl border border-light/8 p-3" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                          <p className="font-body text-xs text-light/35 mb-1">{cf.technicianClientLabel}</p>
                          <p className="font-display font-semibold text-base text-light">Mario Rossi</p>
                          <p className="font-body text-xs text-light/45 mt-0.5">mario.rossi@example.it · +39 333 1234567</p>
                        </div>
                        <div className="rounded-xl border border-light/8 p-3" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                          <p className="font-body text-xs text-light/35 mb-1">{cf.technicianEquipmentLabel}</p>
                          <p className="font-display font-semibold text-sm text-light">Daikin FTXM35R</p>
                          <p className="font-body text-xs text-light/45 mt-0.5">14/06/2024 · R32 · 2.5 kg</p>
                          <p className="font-body text-xs text-brand-accent mt-1">12/05/2026</p>
                        </div>
                        <div className="rounded-xl border border-amber-500/20 p-3" style={{ backgroundColor: "rgba(245,158,11,0.06)" }}>
                          <p className="font-body text-xs text-amber-400/70 mb-0.5">{cf.technicianProblemLabel}</p>
                          <p className="font-body text-sm text-light/80">{cf.technicianProblemText}</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-light/10 font-body text-xs text-light/70 hover:border-light/20 transition-colors">
                            <Phone size={13} />{cf.technicianCallBtn}
                          </button>
                          <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-light/10 font-body text-xs text-light/70 hover:border-light/20 transition-colors">
                            <Navigation2 size={13} />{cf.technicianNavigateBtn}
                          </button>
                          <button onClick={() => setScreen("checklist")} className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-body text-xs font-semibold" style={{ backgroundColor: "rgba(197,216,109,0.15)", color: "#C5D86D", border: "1px solid rgba(197,216,109,0.2)" }}>
                            <Play size={11} />{cf.technicianStartBtn}
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {screen === "checklist" && (
                      <motion.div key="checklist" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }} className="p-4 flex flex-col gap-3">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-body text-xs text-light/35">{cf.technicianChecklistLabel}</p>
                          <span className="font-body text-xs text-brand-accent font-semibold">{doneCount}/{checklistItems.length}</span>
                        </div>
                        <div className="w-full h-1 rounded-full bg-light/8 overflow-hidden">
                          <div className="h-full rounded-full transition-all duration-500" style={{ width: `${(doneCount / checklistItems.length) * 100}%`, backgroundColor: "#C5D86D" }} />
                        </div>
                        <div className="flex flex-col gap-2">
                          {checklistItems.map((item) => (
                            <button key={item.id} onClick={() => toggleCheck(item.id)} className="flex items-center gap-3 p-3 rounded-xl border border-light/8 text-left hover:border-light/15 transition-colors" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
                              {checkStates[item.id]
                                ? <CheckSquare size={16} className="text-brand-accent flex-shrink-0" />
                                : <Square size={16} className="text-light/25 flex-shrink-0" />}
                              <span className={cn("font-body text-xs", checkStates[item.id] ? "text-light/50 line-through" : "text-light/80")}>{item.label}</span>
                            </button>
                          ))}
                        </div>
                        <div className="flex gap-2 pt-1">
                          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-light/10 font-body text-xs text-light/50"><Camera size={12} />{cf.technicianPhotoBtn}</button>
                          <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-light/10 font-body text-xs text-light/50"><Mic size={12} />{cf.technicianVoiceBtn}</button>
                          <button onClick={() => setScreen("report")} className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl font-body text-xs font-semibold" style={{ backgroundColor: "rgba(197,216,109,0.15)", color: "#C5D86D", border: "1px solid rgba(197,216,109,0.2)" }}>
                            <FileCheck size={12} />{cf.technicianCloseBtn}
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {screen === "report" && (
                      <motion.div key="report" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }} className="p-4 flex flex-col gap-3">
                        <div className="rounded-xl border border-light/8 p-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
                          <p className="font-body text-xs text-light/35 mb-2">{cf.technicianMaterialsLabel}</p>
                          {[{ name: "Filter", qty: 1 }, { name: "Gas R32", qty: "0.2 kg" }].map((m) => (
                            <div key={m.name} className="flex items-center justify-between mb-1">
                              <div className="flex items-center gap-2"><Package size={11} className="text-light/30" /><span className="font-body text-xs text-light/65">{m.name}</span></div>
                              <span className="font-body text-xs text-light/40">×{m.qty}</span>
                            </div>
                          ))}
                        </div>
                        <div className="rounded-xl border border-light/8 p-3" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
                          <p className="font-body text-xs text-light/35 mb-1.5">{cf.technicianNotesLabel}</p>
                          <div className="flex items-start gap-2">
                            <PenLine size={11} className="text-light/25 mt-0.5 flex-shrink-0" />
                            <p className="font-body text-xs text-light/55 leading-relaxed">{cf.technicianNotesText}</p>
                          </div>
                        </div>
                        <div className="rounded-xl border border-dashed border-light/15 p-3 text-center">
                          <p className="font-body text-xs text-light/30 mb-2">{cf.technicianSignatureLabel}</p>
                          <div className="w-full h-14 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
                            <svg width="80" height="32" viewBox="0 0 80 32" fill="none" aria-label={cf.technicianSignatureAriaLabel}>
                              <path d="M8 24 C14 8, 20 20, 28 16 C36 12, 40 22, 48 18 C56 14, 60 20, 72 22" stroke="#C5D86D" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
                            </svg>
                          </div>
                        </div>
                        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-display font-semibold text-sm" style={{ backgroundColor: "rgba(197,216,109,0.15)", color: "#C5D86D", border: "1px solid rgba(197,216,109,0.25)" }}>
                          <Wrench size={14} />{cf.technicianSendBtn}
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="flex justify-center py-3" style={{ backgroundColor: "#0A140A" }}>
                  <div className="w-24 h-1 rounded-full bg-light/20" aria-hidden="true" />
                </div>
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-4 rounded-full blur-xl opacity-20" style={{ backgroundColor: "#0EA5E9" }} aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
