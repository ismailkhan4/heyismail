"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";
import { Check, ArrowRight, ExternalLink } from "lucide-react";
import { CASE_STUDIES, SITE } from "../data";
import Navigation from "../components/Navigation";

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.0, 0.0, 0.2, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Section label ────────────────────────────────────────────────────────────
function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={`font-body text-xs font-semibold uppercase tracking-[0.18em] block mb-4 ${light ? "text-[#14A714]" : "text-[#14A714]"
        }`}
    >
      {children}
    </span>
  );
}

// ─── Builds Page ──────────────────────────────────────────────────────────────
export default function BuildsPage() {
  return (
    <div className="bg-[#FBFFFC] text-[#0F0F0F] antialiased">
      <Navigation />

      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] flex flex-col justify-center bg-[#06382C] overflow-hidden">
        {/* Background texture */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(251,255,252,1) 1px, transparent 1px), linear-gradient(90deg, rgba(251,255,252,1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(20,167,20,0.07) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-10 w-full py-32 sm:py-40">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            {/* Overline pill */}
            <motion.div variants={fadeUp} className="mb-7">
              <span className="inline-flex items-center gap-2 border border-[#FBFFFC]/15 rounded-full px-4 py-2 font-body text-xs font-medium text-[#FBFFFC]/55 tracking-wide">
                <span className="w-1.5 h-1.5 bg-[#14A714] rounded-full" />
                The Work
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-[clamp(2.6rem,6vw,5rem)] font-bold leading-[1.04] text-[#FBFFFC] mb-6 tracking-tight"
            >
              Built for creators who were done compromising.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-body text-base sm:text-lg text-[#FBFFFC]/50 max-w-xl mb-10 leading-[1.8]"
            >
              Three platforms. Three creators. All live in 7 days. All owned completely by the people who built their audiences.
            </motion.p>

            <motion.div variants={fadeUp}>
              <a
                href={SITE.calLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 bg-[#14A714] text-[#FBFFFC] font-body font-semibold rounded-xl transition-all duration-200 hover:bg-[#129612] hover:shadow-[0_6px_28px_rgba(20,167,20,0.45)] hover:-translate-y-0.5 active:translate-y-0"
              >
                Book a Free Call
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(6,56,44,0.7))" }}
        />
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CASE STUDIES - Dynamic rendering
      ══════════════════════════════════════════════════════════════════════ */}
      {CASE_STUDIES.map((caseStudy, index) => {
        const isEven = index % 2 === 0;
        const bgColor = isEven ? "bg-[#FBFFFC]" : "bg-[rgba(6,56,44,0.05)]";
        
        return (
          <section key={caseStudy.slug} className={`py-24 sm:py-28 lg:py-36 ${bgColor} overflow-hidden`}>
            <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
              <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

                {/* Content column */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={isEven ? "" : "lg:order-last"}
                >
                  <SectionLabel>Case Study {String(index + 1).padStart(2, '0')}</SectionLabel>
                  <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-bold leading-[1.04] text-[#0F0F0F] mb-3 tracking-tight">
                    {caseStudy.product}
                  </h2>
                  <p className="font-body text-base font-semibold text-[#14A714] mb-1">
                    {caseStudy.creator}
                  </p>
                  <p className="font-body text-sm text-[#0F0F0F]/40 mb-8">
                    {caseStudy.creator_title}
                  </p>

                  <p className="font-body text-base text-[#0F0F0F]/50 leading-[1.8] mb-6">
                    {caseStudy.problem}
                  </p>

                  <p className="font-body text-base text-[#0F0F0F]/70 leading-[1.8] mb-10">
                    {caseStudy.outcome}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[rgba(15,15,15,0.08)]">
                    {caseStudy.stats.map((stat, i) => {
                      const parts = stat.split(" ");
                      const num = parts[0];
                      const label = parts.slice(1).join(" ");
                      return (
                        <div key={i}>
                          <p className="font-display text-2xl sm:text-3xl font-bold text-[#0F0F0F] leading-none mb-1">
                            {num}
                          </p>
                          <p className="font-body text-xs text-[#0F0F0F]/40 leading-snug">{label}</p>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Features column */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`lg:pt-14 ${isEven ? "" : "lg:order-first"}`}
                >
                  <div className="bg-[#FBFFFC] border border-[rgba(15,15,15,0.09)] rounded-2xl p-8 sm:p-10"
                    style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)" }}>
                    <h3 className="font-display text-lg font-semibold text-[#0F0F0F] mb-6">
                      What was built
                    </h3>
                    <ul className="space-y-3 mb-8">
                      {caseStudy.whatWasBuilt.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-[#14A714] flex-shrink-0 mt-0.5" />
                          <span className="font-body text-sm text-[#0F0F0F]/70 leading-[1.7]">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Live in 7 days badge */}
                    <div className="flex items-center gap-2 mb-6 pt-6 border-t border-[rgba(15,15,15,0.07)]">
                      <span className="w-2 h-2 bg-[#14A714] rounded-full" />
                      <span className="font-body text-sm font-semibold text-[#14A714]">Live in 7 days</span>
                    </div>

                    {/* Live link */}
                    <a
                      href={caseStudy.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-body text-sm font-semibold text-[#0F0F0F]/50 hover:text-[#0F0F0F] transition-colors group"
                    >
                      View live platform
                      <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </motion.div>

              </div>
            </div>
          </section>
        );
      })}

      {/* ══════════════════════════════════════════════════════════════════════
          CLOSING STATEMENT
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-28 lg:py-36 bg-[#FBFFFC]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-[#06382C] px-8 sm:px-12 lg:px-16 py-14 sm:py-16 text-center"
            style={{ boxShadow: "0 40px 80px rgba(6,56,44,0.25)" }}
          >
            {/* Grid texture */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(251,255,252,1) 1px, transparent 1px), linear-gradient(90deg, rgba(251,255,252,1) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
            {/* Glow */}
            <div
              aria-hidden
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(20,167,20,0.6) 0%, transparent 70%)" }}
            />

            <div className="relative z-10">
              <p className="font-display text-[clamp(1.6rem,4vw,2.8rem)] font-semibold text-[#FBFFFC] leading-[1.2] mb-6 max-w-2xl mx-auto">
                Every build is live. Owned by the creator. Serving real paying members.
              </p>

              <p className="font-body text-base text-[#FBFFFC]/50 mb-10 leading-[1.8]">
                Ready to see what yours looks like?
              </p>

              <a
                href={SITE.calLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 bg-[#14A714] text-[#FBFFFC] font-body font-semibold rounded-xl transition-all duration-200 hover:bg-[#129612] hover:shadow-[0_6px_28px_rgba(20,167,20,0.45)] hover:-translate-y-0.5 active:translate-y-0"
              >
                Book a Free Call
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
