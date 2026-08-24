"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileDown, CheckCircle2, Camera, PenLine, User, Wrench, Package, Clock } from "lucide-react";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";
import SectionHeading from "@/components/ui/SectionHeading";
import { useTranslation } from "@/lib/i18n/context";

const FIELD_ICONS  = [User, Wrench, User, Clock, Clock, Clock];
const FIELD_COLORS = ["#0EA5E9", "#8B5CF6", "#C5D86D", "#F59E0B", "#10B981", "#10B981"];
const FIELD_VALUES = ["Mario Rossi", "Daikin FTXM35R", "Marco Esposito", "22 Aug 2026", "09:05", "11:18"];
const MATERIALS    = [{ code: "DAI-KF001", qty: "1 pc." }, { code: "REF-R32", qty: "0.2 kg" }];
const MATERIAL_NAMES = ["Daikin air filter", "R32 gas"];

export default function ClimaFlowReports() {
  const { fadeUp, stagger, fadeIn } = useMotionVariants();
  const { t } = useTranslation();
  const cf = t.climaflow;

  return (
    <section className="py-20 md:py-32 bg-light overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
          <SectionHeading eyebrow={cf.reportsEyebrow} heading={cf.reportsHeading} subheading={cf.reportsSubheading} theme="dark" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-16 items-start">
          {/* Report mockup */}
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="rounded-2xl border border-dark/10 overflow-hidden shadow-sm" style={{ backgroundColor: "#fafcfa" }}>
              {/* Header */}
              <div className="px-6 py-5 border-b border-dark/8 flex items-center justify-between" style={{ backgroundColor: "#f0f5f0" }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#0EA5E9" }}>
                    <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 2C7 2 4 4.5 4 7.5a3 3 0 0 0 6 0C10 4.5 7 2 7 2Z" fill="white" opacity="0.9" /></svg>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-dark">ClimaFlow</p>
                    <p className="font-body text-xs text-dark/40">{cf.reportsTitleLabel}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-body text-xs font-semibold text-dark/60">#INT-2026-0847</p>
                  <p className="font-body text-xs text-dark/40">22/08/2026</p>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-5">
                {/* Fields grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {FIELD_VALUES.map((val, i) => {
                    const Icon = FIELD_ICONS[i];
                    return (
                      <div key={i} className="rounded-xl border border-dark/8 p-3 bg-white">
                        <div className="flex items-center gap-1.5 mb-1">
                          <Icon size={11} style={{ color: FIELD_COLORS[i] }} />
                          <span className="font-body text-xs text-dark/40">{cf.reportsFieldLabels[i]}</span>
                        </div>
                        <p className="font-body text-sm font-semibold text-dark/80">{val}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Work done */}
                <div className="rounded-xl border border-dark/8 p-4 bg-white">
                  <p className="font-body text-xs uppercase tracking-widest text-dark/40 font-semibold mb-3">{cf.reportsWorkDoneLabel}</p>
                  <div className="flex flex-col gap-2">
                    {cf.reportsWorkItems.map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 size={13} className="mt-0.5 flex-shrink-0" style={{ color: "#10B981" }} />
                        <span className="font-body text-sm text-dark/70">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Materials */}
                <div className="rounded-xl border border-dark/8 p-4 bg-white">
                  <p className="font-body text-xs uppercase tracking-widest text-dark/40 font-semibold mb-3">{cf.reportsMaterialsLabel}</p>
                  <div className="flex flex-col gap-2">
                    {MATERIALS.map((m, i) => (
                      <div key={m.code} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Package size={12} className="text-dark/30" />
                          <span className="font-body text-sm text-dark/70">{MATERIAL_NAMES[i]}</span>
                          <span className="font-body text-xs text-dark/35">({m.code})</span>
                        </div>
                        <span className="font-body text-sm font-semibold text-dark/60">{m.qty}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Photos */}
                <div className="rounded-xl border border-dark/8 p-4 bg-white">
                  <p className="font-body text-xs uppercase tracking-widest text-dark/40 font-semibold mb-3">{cf.reportsPhotosLabel} (3)</p>
                  <div className="flex gap-2">
                    {[1,2,3].map((n) => (
                      <div key={n} className="w-16 h-16 rounded-lg border border-dark/10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#f0f5f0" }}>
                        <Camera size={16} className="text-dark/25" />
                      </div>
                    ))}
                    <div className="w-16 h-16 rounded-lg border border-dashed border-dark/15 flex items-center justify-center flex-shrink-0">
                      <span className="font-body text-xs text-dark/30">+1</span>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div className="rounded-xl border border-dark/8 p-4 bg-white">
                  <p className="font-body text-xs uppercase tracking-widest text-dark/40 font-semibold mb-2">{cf.reportsNotesLabel}</p>
                  <div className="flex items-start gap-2">
                    <PenLine size={12} className="text-dark/25 mt-0.5 flex-shrink-0" />
                    <p className="font-body text-sm text-dark/60 leading-relaxed">{cf.reportsNotesText}</p>
                  </div>
                </div>

                {/* Signature */}
                <div className="rounded-xl border border-dark/10 p-4 bg-white">
                  <p className="font-body text-xs uppercase tracking-widest text-dark/40 font-semibold mb-3">{cf.reportsSignatureLabel}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex-1 h-12 rounded-lg border border-dark/8 flex items-center px-4 mr-4" style={{ backgroundColor: "#f8faf8" }}>
                      <svg width="120" height="30" viewBox="0 0 120 30" fill="none" aria-label={cf.reportsSignatureLabel}>
                        <path d="M10 22 C18 6, 28 22, 38 16 C48 10, 55 20, 70 18 C82 16, 90 22, 110 20" stroke="#070707" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
                      </svg>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-body text-xs text-dark/50 font-semibold">Mario Rossi</p>
                      <p className="font-body text-xs text-dark/35">22/08/2026 11:18</p>
                    </div>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-display font-semibold text-sm transition-all hover:-translate-y-0.5" style={{ backgroundColor: "#0EA5E9", color: "white" }}>
                  <FileDown size={16} />{cf.reportsGeneratePdfBtn}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Value props */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-6 lg:pt-4">
            <motion.div variants={fadeUp} className="rounded-2xl border border-dark/10 p-6 bg-dark text-light">
              <p className="font-body text-xs uppercase tracking-widest text-brand-accent font-semibold mb-3">{cf.reportsZeroPaperTitle}</p>
              <p className="font-display font-semibold text-lg leading-snug mb-2">{cf.reportsZeroPaperHeadline}</p>
              <p className="font-body text-sm text-light/55 leading-relaxed">{cf.reportsZeroPaperBody}</p>
            </motion.div>
            {cf.reportsValueProps.map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="flex gap-3">
                <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#C5D86D" }} />
                <div>
                  <p className="font-display font-semibold text-sm text-dark mb-0.5">{item.title}</p>
                  <p className="font-body text-sm text-dark/55 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
