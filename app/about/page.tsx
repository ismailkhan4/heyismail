"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ABOUT, SITE } from "../data";
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
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-body text-xs font-semibold uppercase tracking-[0.18em] block mb-4 text-[#14A714]">
      {children}
    </span>
  );
}

// ─── About Page ───────────────────────────────────────────────────────────────
export default function AboutPage() {
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
                "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(20,167,20,0.08) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-10 w-full py-32 sm:py-40">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            {/* Overline pill */}
            <motion.div variants={fadeUp} className="mb-7">
              <span className="inline-flex items-center gap-2 border border-[#FBFFFC]/15 rounded-full px-4 py-2 font-body text-xs font-medium text-[#FBFFFC]/55 tracking-wide">
                <span className="w-1.5 h-1.5 bg-[#14A714] rounded-full" />
                The Builder
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-[clamp(2.4rem,6vw,4.8rem)] font-bold leading-[1.04] text-[#FBFFFC] mb-6 tracking-tight max-w-3xl"
            >
              {ABOUT.intro[0]}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-body text-base sm:text-lg text-[#FBFFFC]/50 max-w-xl mb-10 leading-[1.8]"
            >
              {ABOUT.intro[1]}
            </motion.p>

            <motion.div variants={fadeUp}>
              <a
                href={SITE.calLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 bg-[#14A714] text-[#FBFFFC] font-body font-semibold rounded-xl transition-all duration-200 hover:bg-[#129612] hover:shadow-[0_6px_28px_rgba(20,167,20,0.45)] hover:-translate-y-0.5 active:translate-y-0"
              >
                Let's Talk
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          ORIGIN STORY
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-28 lg:py-36 bg-[#FBFFFC]">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionLabel>How This Started</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-semibold leading-[1.08] text-[#0F0F0F] mb-8">
              The problem I decided to solve
            </h2>
            <div className="font-body text-base sm:text-lg text-[#0F0F0F]/55 leading-[1.8] space-y-5">
              <p>{ABOUT.originStory}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          PRINCIPLES
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-28 lg:py-36 bg-[rgba(6,56,44,0.05)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <SectionLabel>What I Believe</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-semibold leading-[1.08] text-[#0F0F0F]">
              Three principles that guide every build
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {ABOUT.principles.map((principle, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-[#FBFFFC] border border-[rgba(15,15,15,0.09)] rounded-2xl p-8 overflow-hidden group hover:border-[rgba(15,15,15,0.14)] transition-colors"
              >
                {/* Ghost number */}
                <span
                  aria-hidden
                  className="absolute -top-2 -right-1 font-display font-bold text-[#0F0F0F] select-none leading-none"
                  style={{ fontSize: "4.5rem", opacity: 0.04 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="w-8 h-px bg-[#14A714] mb-6" />
                <h3 className="font-display text-xl font-semibold text-[#0F0F0F] mb-4 leading-snug">
                  {principle.title}
                </h3>
                <p className="font-body text-sm text-[#0F0F0F]/50 leading-[1.75]">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          PROOF
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-24 bg-[#06382C]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT.proof.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`text-center py-10 px-4 ${
                  i < 3 ? "border-r border-[#FBFFFC]/08" : ""
                } ${i >= 2 ? "border-t border-[#FBFFFC]/08 lg:border-t-0" : ""}`}
              >
                <p className="font-display text-3xl sm:text-4xl font-semibold text-[#FBFFFC] mb-2">
                  {item.stat}
                </p>
                <p className="font-body text-[10px] sm:text-xs text-[#FBFFFC]/40 uppercase tracking-widest">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          WHO I WORK BEST WITH
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-28 lg:py-36 bg-[#FBFFFC]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionLabel>The Ideal Client</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-semibold leading-[1.08] text-[#0F0F0F] mb-8">
              Who I work best with
            </h2>
            <div className="font-body text-base sm:text-lg text-[#0F0F0F]/55 leading-[1.8]">
              <p>{ABOUT.idealClient}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 bg-[#06382C] overflow-hidden">
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
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-10 text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.06] text-[#FBFFFC] mb-6"
            >
              Ready to build a platform that matches your brand?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-body text-base sm:text-lg text-[#FBFFFC]/50 mb-10 max-w-2xl mx-auto leading-[1.8]"
            >
              Book a 15-minute call. You tell me where you are. I'll tell you honestly whether I can help — and what it would look like if I did.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a
                href={SITE.calLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 bg-[#14A714] text-[#FBFFFC] font-body font-semibold rounded-xl transition-all duration-200 hover:bg-[#129612] hover:shadow-[0_6px_28px_rgba(20,167,20,0.45)] hover:-translate-y-0.5"
              >
                Let's Talk
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
