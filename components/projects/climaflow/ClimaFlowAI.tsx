"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, Sparkles, Send, Bot, User, RefreshCw } from "lucide-react";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n/context";

type AIDemo = "transcription" | "assistant";

export default function ClimaFlowAI() {
  const [activeDemo, setActiveDemo] = useState<AIDemo>("transcription");
  const [showReport, setShowReport]   = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const { fadeUp, stagger, fadeIn } = useMotionVariants();
  const { t } = useTranslation();
  const cf = t.climaflow;

  function handleGenerate() {
    if (isGenerating || showReport) return;
    setIsGenerating(true);
    setTimeout(() => { setIsGenerating(false); setShowReport(true); }, 1600);
  }

  // Reset demo when tab changes
  function switchDemo(demo: AIDemo) {
    setActiveDemo(demo);
    setShowReport(false);
    setIsGenerating(false);
  }

  return (
    <section className="py-20 md:py-32 bg-dark overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-4">
          <SectionHeading eyebrow={cf.aiEyebrow} heading={cf.aiHeading} subheading={cf.aiSubheading} theme="light" />
        </motion.div>

        <motion.p variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-body text-xs text-light/30 mb-12 max-w-lg">
          {cf.aiDisclaimer}
        </motion.p>

        {/* Demo tabs */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex gap-2 mb-8">
          <button onClick={() => switchDemo("transcription")}
            className={cn("flex items-center gap-2 px-4 py-2 rounded-lg font-body text-sm font-semibold transition-all duration-200", activeDemo === "transcription" ? "" : "text-light/40 hover:text-light/60")}
            style={activeDemo === "transcription" ? { backgroundColor: "rgba(197,216,109,0.15)", color: "#C5D86D", border: "1px solid rgba(197,216,109,0.25)" } : { border: "1px solid rgba(255,255,255,0.08)" }}>
            <Mic size={14} />{cf.aiTab1}
          </button>
          <button onClick={() => switchDemo("assistant")}
            className={cn("flex items-center gap-2 px-4 py-2 rounded-lg font-body text-sm font-semibold transition-all duration-200", activeDemo === "assistant" ? "" : "text-light/40 hover:text-light/60")}
            style={activeDemo === "assistant" ? { backgroundColor: "rgba(14,165,233,0.15)", color: "#0EA5E9", border: "1px solid rgba(14,165,233,0.25)" } : { border: "1px solid rgba(255,255,255,0.08)" }}>
            <Bot size={14} />{cf.aiTab2}
          </button>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeDemo === "transcription" && (
            <motion.div key="transcription" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Voice note */}
              <div className="rounded-2xl border border-light/10 overflow-hidden" style={{ backgroundColor: "#0F1A0F" }}>
                <div className="px-5 py-3.5 border-b border-light/8 flex items-center gap-2" style={{ backgroundColor: "#0A140A" }}>
                  <Mic size={13} style={{ color: "#C5D86D" }} />
                  <p className="font-body text-xs font-semibold text-light/60">{cf.aiVoiceNoteLabel}</p>
                  <span className="ml-auto font-body text-xs text-light/25">0:12</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-0.5 mb-4" aria-hidden="true">
                    {Array.from({ length: 40 }).map((_, i) => {
                      // Deterministic heights — no Math.random(), safe for SSR
                      const h = 8 + Math.sin(i * 0.6) * 7 + Math.abs(Math.sin(i * 1.3)) * 5;
                      return (
                        <div key={i} className="w-1 rounded-full" style={{ height: `${h.toFixed(1)}px`, backgroundColor: i < 30 ? "#C5D86D" : "rgba(197,216,109,0.2)" }} />
                      );
                    })}
                  </div>
                  <blockquote className="font-body text-sm text-light/65 leading-relaxed italic border-l-2 border-brand-accent/30 pl-4">
                    &ldquo;{cf.aiVoiceText}&rdquo;
                  </blockquote>
                  <button onClick={handleGenerate} disabled={isGenerating || showReport}
                    className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-body text-sm font-semibold transition-all"
                    style={{ backgroundColor: showReport ? "rgba(16,185,129,0.1)" : "rgba(197,216,109,0.15)", color: showReport ? "#10B981" : "#C5D86D", border: `1px solid ${showReport ? "rgba(16,185,129,0.2)" : "rgba(197,216,109,0.2)"}` }}>
                    {isGenerating ? <><RefreshCw size={13} className="animate-spin" />{cf.aiGeneratingLabel}</>
                      : showReport ? <><Sparkles size={13} />{cf.aiGeneratedLabel}</>
                      : <><Sparkles size={13} />{cf.aiGenerateBtn}</>}
                  </button>
                </div>
              </div>

              {/* Generated report */}
              <div className="rounded-2xl border border-light/10 overflow-hidden" style={{ backgroundColor: "#0F1A0F" }}>
                <div className="px-5 py-3.5 border-b border-light/8 flex items-center gap-2" style={{ backgroundColor: "#0A140A" }}>
                  <Sparkles size={13} style={{ color: "#0EA5E9" }} />
                  <p className="font-body text-xs font-semibold text-light/60">{cf.aiGeneratedReportLabel}</p>
                </div>
                <div className="p-5 min-h-[200px] flex flex-col justify-center">
                  {!showReport && !isGenerating && (
                    <p className="font-body text-xs text-light/25 text-center">{cf.aiClickPrompt}</p>
                  )}
                  {isGenerating && (
                    <div className="flex flex-col gap-2">
                      {[80,65,90,55,70].map((w, i) => (
                        <div key={i} className="h-3 rounded-full animate-pulse" style={{ width: `${w}%`, backgroundColor: "rgba(255,255,255,0.06)" }} />
                      ))}
                    </div>
                  )}
                  {showReport && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-4">
                      <div>
                        <p className="font-body text-xs text-light/35 uppercase tracking-widest mb-2">{cf.aiWorkLabel}</p>
                        {cf.aiReportLines.map((line) => (
                          <p key={line} className="font-body text-sm text-light/70 leading-relaxed">• {line}</p>
                        ))}
                      </div>
                      <div>
                        <p className="font-body text-xs text-light/35 uppercase tracking-widest mb-2">{cf.aiMaterialsLabel}</p>
                        {cf.aiMaterials.map((m) => <p key={m} className="font-body text-sm text-light/70">• {m}</p>)}
                      </div>
                      <p className="font-body text-xs text-light/25 italic">{cf.aiEditableNote}</p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {activeDemo === "assistant" && (
            <motion.div key="assistant" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
              <div className="rounded-2xl border border-light/10 overflow-hidden max-w-2xl mx-auto" style={{ backgroundColor: "#0F1A0F" }}>
                <div className="px-5 py-3.5 border-b border-light/8 flex items-center gap-2" style={{ backgroundColor: "#0A140A" }}>
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#0EA5E9" }}>
                    <Bot size={13} className="text-white" />
                  </div>
                  <p className="font-body text-xs font-semibold text-light/60">{cf.aiAssistantTitle}</p>
                  <span className="ml-auto inline-flex items-center gap-1 font-body text-xs text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />{cf.aiOnlineLabel}
                  </span>
                </div>
                <div className="p-5 flex flex-col gap-4">
                  {cf.aiChatMessages.map((msg, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.3 }}
                      className={cn("flex gap-3", msg.role === "user" ? "justify-end" : "justify-start")}>
                      {msg.role === "ai" && (
                        <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "#0EA5E9" }}>
                          <Bot size={13} className="text-white" />
                        </div>
                      )}
                      <div className={cn("rounded-2xl px-4 py-3 max-w-[80%]", msg.role === "user" ? "rounded-tr-sm" : "rounded-tl-sm")}
                        style={msg.role === "user" ? { backgroundColor: "rgba(197,216,109,0.12)", border: "1px solid rgba(197,216,109,0.15)" } : { backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                        <p className="font-body text-sm text-light/80 leading-relaxed">{msg.text}</p>
                      </div>
                      {msg.role === "user" && (
                        <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "rgba(197,216,109,0.2)" }}>
                          <User size={13} style={{ color: "#C5D86D" }} />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
                <div className="px-5 py-4 border-t border-light/8" style={{ backgroundColor: "#0A140A" }}>
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-light/10" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                    <p className="font-body text-sm text-light/25 flex-1">{cf.aiInputPlaceholder}</p>
                    <Send size={14} className="text-light/20" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
