"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import {
  PROCESS_DETAILED,
  TECH_STACK,
  OWNERSHIP_EXPLAINED,
  SITE,
} from "../data";
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
    <span className={`font-body text-xs font-semibold uppercase tracking-[0.18em] block mb-4 ${light ? "text-[#14A714]" : "text-[#14A714]"}`}>
      {children}
    </span>
  );
}

// ─── Comparison data ──────────────────────────────────────────────────────────
const COMPARISON_ROWS = [
  {
    label: "Timeline",
    us: "7 days",
    agency: "8–16 weeks",
    freelancer: "4–8 weeks",
  },
  {
    label: "Cost",
    us: "From $5,000",
    agency: "$30,000–$150,000",
    freelancer: "$10,000–$40,000",
  },
  {
    label: "Ownership",
    us: "100% yours on day 7",
    agency: "Varies — often locked in",
    freelancer: "Depends on contract",
  },
  {
    label: "Support",
    us: "14 days post-launch",
    agency: "Retainer required",
    freelancer: "Hourly, if available",
  },
  {
    label: "Lock-in",
    us: "None",
    agency: "High",
    freelancer: "Medium",
  },
];

export default function ProcessPage() {
  return (
    <div className="bg-[#FBFFFC] text-[#0F0F0F] antialiased">
      <Navigation />

      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative h-[100svh] min-h-[600px] max-h-[1000px] flex flex-col justify-center bg-[#06382C] overflow-hidden">
        {/* Grid texture */}
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

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-10 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 border border-[#FBFFFC]/15 rounded-full px-4 py-2 font-body text-xs font-medium text-[#FBFFFC]/55 tracking-wide">
                <span className="w-1.5 h-1.5 bg-[#14A714] rounded-full animate-pulse" />
                The Process
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-[clamp(2.6rem,6vw,5rem)] font-bold leading-[1.04] text-[#FBFFFC] mb-6 tracking-tight"
            >
              7 days. No surprises.
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(90deg, #14A714 0%, #4fd44f 100%)",
                }}
              >
                Everything yours.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-body text-base sm:text-lg text-[#FBFFFC]/50 max-w-xl mb-10 leading-[1.8]"
            >
              No black boxes. No scope creep. No "two more weeks." Here's exactly what happens across every day of the build — and what you walk away with on day 7.
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

        {/* Bottom fade */}
        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(6,56,44,0.6))" }}
        />
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          7-DAY PROCESS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-28 lg:py-36 bg-[#FBFFFC] overflow-hidden">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">

          <div className="mb-16 sm:mb-20">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <SectionLabel>The 7-Day Sprint</SectionLabel>
              <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.06] text-[#0F0F0F]">
                What happens every day.
              </h2>
            </motion.div>
          </div>

          {/* Vertical rail */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute left-[19px] sm:left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-[#14A714]/40 via-[#14A714]/15 to-transparent"
            />

            <div className="flex flex-col gap-0">
              {PROCESS_DETAILED.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.07 }}
                  className="relative grid grid-cols-[40px_1fr] sm:grid-cols-[48px_1fr] gap-x-6 sm:gap-x-8 pb-12 sm:pb-14 last:pb-0"
                >
                  {/* Step dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#06382C] border border-[rgba(20,167,20,0.3)] flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="font-display text-sm font-bold text-[#14A714]">{i + 1}</span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="bg-[#FBFFFC] border border-[rgba(15,15,15,0.09)] rounded-2xl p-7 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)]">
                    <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#14A714] mb-2">
                      {step.day}
                    </p>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#0F0F0F] mb-3 leading-snug">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm sm:text-base text-[#0F0F0F]/50 leading-[1.8] mb-7">
                      {step.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-[rgba(15,15,15,0.07)]">
                      <div>
                        <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-[#0F0F0F]/35 mb-4">
                          What happens
                        </p>
                        <ul className="space-y-2.5">
                          {step.whatHappens.map((item, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <Check className="w-4 h-4 text-[#14A714] flex-shrink-0 mt-0.5" />
                              <span className="font-body text-sm text-[#0F0F0F]/60 leading-[1.7]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-[#0F0F0F]/35 mb-4">
                          What you get
                        </p>
                        <ul className="space-y-2.5">
                          {step.whatYouGet.map((item, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <Check className="w-4 h-4 text-[#14A714] flex-shrink-0 mt-0.5" />
                              <span className="font-body text-sm text-[#0F0F0F]/60 leading-[1.7] font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          AGENCY COMPARISON
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-28 lg:py-36 bg-[rgba(6,56,44,0.05)] overflow-hidden">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-14 sm:mb-16">
            <SectionLabel>Why Not an Agency</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.06] text-[#0F0F0F]">
              How this compares.
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#FBFFFC] border border-[rgba(15,15,15,0.09)] rounded-2xl overflow-hidden"
          >
            {/* Header row */}
            <div className="grid grid-cols-4 border-b border-[rgba(15,15,15,0.07)]">
              <div className="p-5 sm:p-6" />
              {["This Service", "Agency", "Freelancer"].map((col, i) => (
                <div
                  key={i}
                  className={`p-5 sm:p-6 text-center border-l border-[rgba(15,15,15,0.07)] ${i === 0 ? "bg-[rgba(6,56,44,0.04)]" : ""}`}
                >
                  <span className={`font-body text-sm font-semibold ${i === 0 ? "text-[#14A714]" : "text-[#0F0F0F]/40"}`}>
                    {col}
                  </span>
                </div>
              ))}
            </div>

            {/* Data rows */}
            {COMPARISON_ROWS.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-4 ${i < COMPARISON_ROWS.length - 1 ? "border-b border-[rgba(15,15,15,0.07)]" : ""}`}
              >
                <div className="p-5 sm:p-6 flex items-center">
                  <span className="font-body text-sm font-medium text-[#0F0F0F]/50">{row.label}</span>
                </div>
                {[row.us, row.agency, row.freelancer].map((val, j) => (
                  <div
                    key={j}
                    className={`p-5 sm:p-6 flex items-center justify-center border-l border-[rgba(15,15,15,0.07)] ${j === 0 ? "bg-[rgba(6,56,44,0.04)]" : ""}`}
                  >
                    <div className="flex items-center gap-2">
                      {j === 0 ? (
                        <Check className="w-4 h-4 text-[#14A714] flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-[#0F0F0F]/25 flex-shrink-0" />
                      )}
                      <span className={`font-body text-xs sm:text-sm text-center ${j === 0 ? "text-[#0F0F0F] font-medium" : "text-[#0F0F0F]/40"}`}>
                        {val}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          OWNERSHIP MODEL
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-28 lg:py-36 bg-[#FBFFFC]">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-[#06382C]"
            style={{ boxShadow: "0 40px 80px rgba(6,56,44,0.25)" }}
          >
            {/* Grid texture */}
            <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: "linear-gradient(rgba(251,255,252,1) 1px, transparent 1px), linear-gradient(90deg, rgba(251,255,252,1) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }} />
            {/* Glow */}
            <div aria-hidden className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20"
              style={{ background: "radial-gradient(circle, rgba(20,167,20,0.6) 0%, transparent 70%)" }} />

            <div className="relative p-8 sm:p-10 lg:p-14">
              <SectionLabel>The Ownership Model</SectionLabel>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-semibold leading-[1.08] text-[#FBFFFC] mb-4">
                Everything transfers to you. No exceptions.
              </h2>
              <p className="font-body text-base text-[#FBFFFC]/45 leading-[1.8] max-w-xl mb-12">
                On day 7 you get a live platform and complete ownership of every piece of it. No recurring fees. No dependency on me to keep it running.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {OWNERSHIP_EXPLAINED.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#14A714]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#14A714]" />
                    </div>
                    <div>
                      <p className="font-body text-sm font-semibold text-[#FBFFFC] mb-1">{item.title}</p>
                      <p className="font-body text-sm text-[#FBFFFC]/45 leading-[1.7]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          TECH STACK
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-28 lg:py-36 bg-[rgba(6,56,44,0.05)]">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-14 sm:mb-16">
            <SectionLabel>The Stack</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.06] text-[#0F0F0F]">
              What your platform is built on.
            </h2>
            <p className="font-body text-base sm:text-lg text-[#0F0F0F]/45 leading-[1.8] max-w-xl mt-4">
              No jargon. Here's what each piece does and why it matters to you.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TECH_STACK.map((tech, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-[#FBFFFC] border border-[rgba(15,15,15,0.09)] rounded-2xl p-7"
              >
                <h3 className="font-display text-xl font-semibold text-[#0F0F0F] mb-3">
                  {tech.name}
                </h3>
                <p className="font-body text-sm text-[#0F0F0F]/50 leading-[1.8]">
                  {tech.plainDescription}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-28 lg:py-36 bg-[#06382C] relative overflow-hidden">
        {/* Grid texture */}
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

        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 lg:px-10 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionLabel>Ready to Start</SectionLabel>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.06] text-[#FBFFFC] mb-6">
              Your members deserve a platform that matches your brand.
            </h2>
            <p className="font-body text-base sm:text-lg text-[#FBFFFC]/50 leading-[1.8] mb-10 max-w-xl mx-auto">
              Book a free 15-minute call. I'll look at your current setup and tell you exactly what a custom platform would look like for you. No pitch. No pressure.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={SITE.calLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#14A714] text-[#FBFFFC] font-body font-semibold rounded-xl transition-all duration-200 hover:bg-[#129612] hover:shadow-[0_6px_28px_rgba(20,167,20,0.45)] hover:-translate-y-0.5"
              >
                Let's Talk
                <ArrowRight size={16} />
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-[#FBFFFC]/20 text-[#FBFFFC] font-body font-semibold rounded-xl transition-all duration-200 hover:bg-[#FBFFFC]/08 hover:border-[#FBFFFC]/35"
              >
                Message on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
