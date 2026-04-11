"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Check, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import Script from "next/script";
import {
  FAQS,
  HERO,
  PROCESS_STEPS,
  OWNERSHIP_ITEMS,
  BUILDS,
  PAIN_CARDS,
  SITE,
  TECH_STACK,
} from "./data";
import Navigation from "./components/Navigation";

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.0, 0.0, 0.2, 1] },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Section label ────────────────────────────────────────────────────────────
function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={`font-body text-xs font-semibold uppercase tracking-[0.18em] block mb-4 ${light ? "text-[#14A714]" : "text-[#14A714]"}`}
    >
      {children}
    </span>
  );
}

// ─── FAQ Item ─────────────────────────────────────────────────────────────────
function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="border border-[rgba(15,15,15,0.08)] rounded-2xl bg-white overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 px-6 sm:px-7 py-6 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-[#0F0F0F] text-lg sm:text-xl font-medium leading-snug">
          {faq.q}
        </span>
        <span className="mt-1 flex-shrink-0 text-[#0F0F0F]/30">
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            <p className="font-body text-[#0F0F0F]/60 leading-[1.8] text-base px-6 sm:px-7 pb-7">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div className="bg-[#FBFFFC] text-[#0F0F0F] antialiased">
      <Navigation />

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative h-[100svh] min-h-[600px] max-h-[1000px] flex flex-col justify-center bg-[#06382C] overflow-hidden">
        {/* Background layers */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 100% 80% at 70% 50%, rgba(20,167,20,0.09) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 5% 85%, rgba(251,255,252,0.04) 0%, transparent 50%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(251,255,252,1) 1px, transparent 1px), linear-gradient(90deg, rgba(251,255,252,1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 w-full">
          <div className="grid lg:grid-cols-[1fr_440px] gap-10 lg:gap-16 items-center">
            {/* Left — copy */}
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              {/* Overline pill */}
              <motion.div variants={fadeUp} className="mb-6 sm:mb-8">
                <span className="inline-flex items-center gap-2 border border-[#FBFFFC]/15 rounded-full px-4 py-2 font-body text-xs font-medium text-[#FBFFFC]/55 tracking-wide">
                  <span className="w-1.5 h-1.5 bg-[#14A714] rounded-full animate-pulse" />
                  Platform Builder for LinkedIn Creators
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[1.04] text-[#FBFFFC] mb-5 sm:mb-7 tracking-tight"
              >
                Your audience
                <br />
                is premium.
                <br />
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #14A714 0%, #4fd44f 100%)",
                  }}
                >
                  Your platform should be too.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="font-body text-base sm:text-lg text-[#FBFFFC]/50 max-w-[520px] mb-8 sm:mb-10 leading-[1.8]"
              >
                {HERO.subheadline}
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-3 mb-10 sm:mb-12"
              >
                <a
                  href={SITE.calLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-4 bg-[#14A714] text-[#FBFFFC] font-body font-semibold rounded-xl transition-all duration-200 hover:bg-[#129612] hover:shadow-[0_6px_28px_rgba(20,167,20,0.45)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  {HERO.primaryCTA}
                  <ArrowRight size={16} />
                </a>
                <a
                  href="/builds"
                  className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-4 bg-[#FBFFFC]/5 border border-[#FBFFFC]/20 text-[#FBFFFC] font-body font-semibold rounded-xl transition-all duration-200 hover:bg-[#FBFFFC]/10 hover:border-[#FBFFFC]/35"
                >
                  {HERO.secondaryCTA}
                </a>
              </motion.div>

              {/* Brand study bar — reframed as "Studied & built on" */}
              <motion.div variants={fadeUp}>
                <p className="font-body text-[10px] text-[#FBFFFC]/25 uppercase tracking-[0.2em] mb-3">
                  Studied & built on top of
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:divide-x sm:divide-[#FBFFFC]/10">
                  {[
                    "Jasmin Alić · #1 LinkedIn Creator · 358K followers",
                    "Jaime Brenkus · Fitness Hall of Fame · 10,000+ members",
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 sm:px-5 first:sm:pl-0"
                    >
                      <span className="w-1.5 h-1.5 bg-[#14A714] rounded-full flex-shrink-0" />
                      <span className="font-body text-sm text-[#FBFFFC]/45">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right — dashboard card */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.35,
                ease: [0.0, 0.0, 0.2, 1],
              }}
              className="hidden lg:block"
            >
              <HeroDashboardCard />
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(6,56,44,0.6))",
          }}
        />
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 2 — SOCIAL PROOF BAR
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#06382C] border-t border-[#FBFFFC]/06">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { stat: "2", label: "Platforms Built" },
              { stat: "10,000+", label: "Active Members Served" },
              { stat: "$2.3M+", label: "Revenue Tracked" },
              { stat: "7 Days", label: "Every Time" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`text-center py-8 px-4 ${i < 3 ? "border-r border-[#FBFFFC]/08" : ""
                  } ${i >= 2 ? "border-t border-[#FBFFFC]/08 md:border-t-0" : ""}`}
              >
                <p className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-[#FBFFFC] mb-1">
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
          SECTION 3 — THE PROBLEM
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-28 lg:py-36 bg-[#FBFFFC] overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
          {/* Split header */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-16 sm:mb-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionLabel>The Gap</SectionLabel>
              <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.06] text-[#0F0F0F]">
                Your brand is premium.
                <br />
                The moment your member
                <br />
                logs in — it isn't.
              </h2>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 lg:pb-2"
            >
              <p className="font-body text-base sm:text-lg text-[#0F0F0F]/50 leading-[1.8]">
                You've built a real audience. They pay for your courses. Join
                your community. Book your coaching. But when they log in? They
                get Kajabi's interface. Notion's chaos. A Gumroad page that
                looks nothing like the brand they just paid to be part of.
              </p>
              <p className="font-body text-base text-[#0F0F0F]/40 leading-[1.8]">
                Every click after the sale is part of your product. Right now,
                that part is quietly failing you.
              </p>
            </motion.div>
          </div>

          {/* Pain cards — numbered editorial style */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-[rgba(15,15,15,0.06)] rounded-2xl overflow-hidden mb-5">
            {PAIN_CARDS.filter((c) => !c.callout).map((card, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative bg-[#FBFFFC] p-8 sm:p-9 group hover:bg-[#fafffe] transition-colors duration-200 overflow-hidden"
              >
                {/* Ghost number */}
                <span
                  aria-hidden
                  className="absolute -top-3 -right-1 font-display font-bold text-[#0F0F0F] select-none leading-none"
                  style={{ fontSize: "5rem", opacity: 0.04 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-8 h-px bg-[#14A714] mb-6" />
                <h3 className="font-display text-lg sm:text-xl font-semibold text-[#0F0F0F] mb-4 leading-snug">
                  {card.title}
                </h3>
                <p className="font-body text-[#0F0F0F]/50 text-sm leading-[1.8]">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Callout — full-width statement */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl bg-[#06382C]"
            style={{ boxShadow: "0 24px 60px rgba(6,56,44,0.18)" }}
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(251,255,252,1) 1px, transparent 1px), linear-gradient(90deg, rgba(251,255,252,1) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 px-8 sm:px-10 py-8 sm:py-9">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#14A714]/15 border border-[#14A714]/25 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-[#14A714]" />
              </div>
              <p className="font-display text-xl sm:text-2xl font-medium text-[#FBFFFC] leading-snug">
                There is a better option. A custom platform built around your
                brand, delivered in 7 days, owned completely by you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 4 — THE SOLUTION / WHO I AM
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-28 lg:py-36 bg-[#06382C]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-start">
            {/* Left */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionLabel>The Builder</SectionLabel>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.08] text-[#FBFFFC] mb-8">
                I build the platform behind creator brands.
              </h2>
              <div className="font-body text-base sm:text-lg text-[#FBFFFC]/55 leading-[1.8] space-y-5">
                <p>
                  Hi. I'm Ismail. I build custom community platforms, course
                  portals, and coaching hubs for LinkedIn creators who have
                  outgrown their current tech.
                </p>
                <p>
                  Not templates. Not page builders. Real platforms — custom
                  branded, built around your specific content structure — with
                  everything transferred to you on day 7. Source code.
                  Deployment credentials. Database access. Everything.
                </p>
                <p className="text-[#FBFFFC]/80 font-medium">
                  No monthly fees. No vendor lock-in. No disappearing after
                  launch.
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
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
                  href="/builds"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#FBFFFC]/5 border border-[#FBFFFC]/20 text-[#FBFFFC] font-body font-semibold rounded-xl transition-all duration-200 hover:bg-[#FBFFFC]/10"
                >
                  See My Builds
                </a>
              </div>
            </motion.div>

            {/* Right — proof cards */}
            <div className="flex flex-col gap-4 sm:gap-5">
              {BUILDS.map((build) => (
                <motion.div
                  key={build.slug}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-[#FBFFFC]/05 border border-[#FBFFFC]/10 rounded-2xl p-6 sm:p-7 hover:bg-[#FBFFFC]/08 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <p className="font-body text-xs text-[#14A714] font-semibold uppercase tracking-widest mb-1">
                        {build.product}
                      </p>
                      <h3 className="font-display text-lg sm:text-xl font-semibold text-[#FBFFFC]">
                        {build.creator.split(" · ")[0]}
                      </h3>
                      <p className="font-body text-xs text-[#FBFFFC]/35 mt-0.5">
                        {build.creator.split(" · ").slice(1).join(" · ")}
                      </p>
                    </div>
                    <span className="flex-shrink-0 font-body text-xs font-semibold text-[#14A714] bg-[rgba(20,167,20,0.12)] rounded-full px-3 py-1.5">
                      {build.badge}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {build.features.map((f, j) => (
                      <span
                        key={j}
                        className="font-body text-xs text-[#FBFFFC]/45 bg-[#FBFFFC]/06 rounded-full px-3 py-1"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4 border-t border-[#FBFFFC]/08">
                    {build.stats.map((s, j) => (
                      <p
                        key={j}
                        className="font-body text-sm font-semibold text-[#FBFFFC]/70"
                      >
                        {s}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 5 — HOW IT WORKS
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 sm:py-28 lg:py-36 bg-[#FBFFFC] overflow-hidden"
        id="how-it-works"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
          {/* Header — split layout */}
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-20 items-end mb-20 sm:mb-24">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionLabel>The Process</SectionLabel>
              <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.04] text-[#0F0F0F]">
                7 days.
                <br />
                No surprises.
              </h2>
            </motion.div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-body text-base sm:text-lg text-[#0F0F0F]/45 leading-[1.8] lg:pb-2"
            >
              No scope creep. No "two more weeks." Every build follows the same
              focused process — refined across every platform I've shipped.
            </motion.p>
          </div>

          {/* Steps — vertical rail */}
          <div className="relative">
            {/* Vertical line */}
            <div
              aria-hidden
              className="absolute left-[19px] sm:left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-[#14A714]/40 via-[#14A714]/15 to-transparent"
            />

            <div className="flex flex-col gap-0">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.08 }}
                  className="relative grid grid-cols-[40px_1fr] sm:grid-cols-[48px_1fr] lg:grid-cols-[48px_200px_1fr] gap-x-6 sm:gap-x-8 lg:gap-x-12 pb-12 sm:pb-14 last:pb-0 group"
                >
                  {/* Step dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#06382C] border border-[rgba(20,167,20,0.3)] flex items-center justify-center flex-shrink-0 relative z-10 group-hover:border-[#14A714] transition-colors duration-300">
                      <span className="font-display text-sm font-bold text-[#14A714]">
                        {i + 1}
                      </span>
                    </div>
                  </div>

                  {/* Day label — desktop only */}
                  <div className="hidden lg:flex items-start pt-2.5">
                    <span className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#0F0F0F]/30">
                      {step.day}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-1.5 pb-0">
                    <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#14A714] mb-2 lg:hidden">
                      {step.day}
                    </p>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#0F0F0F] mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm sm:text-base text-[#0F0F0F]/50 leading-[1.75] max-w-xl">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Ownership transfer — premium card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20 sm:mt-24 relative overflow-hidden rounded-3xl bg-[#06382C]"
            style={{ boxShadow: "0 40px 80px rgba(6,56,44,0.25)" }}
          >
            {/* Subtle grid texture */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(251,255,252,1) 1px, transparent 1px), linear-gradient(90deg, rgba(251,255,252,1) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            {/* Glow */}
            <div
              aria-hidden
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20"
              style={{
                background:
                  "radial-gradient(circle, rgba(20,167,20,0.6) 0%, transparent 70%)",
              }}
            />

            <div className="relative p-8 sm:p-10 lg:p-14">
              <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-start">
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#14A714] mb-4">
                    Day 7 Handoff
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#FBFFFC] mb-3 leading-snug">
                    Everything transfers to you. No exceptions.
                  </h3>
                  <p className="font-body text-sm sm:text-base text-[#FBFFFC]/45 leading-[1.8] max-w-lg">
                    On day 7 you get a live platform and complete ownership of
                    every piece of it. No recurring fees. No dependency on me to
                    keep it running.
                  </p>
                </div>
                <a
                  href={SITE.calLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-[#14A714] text-[#FBFFFC] font-body font-semibold text-sm rounded-xl hover:bg-[#129612] hover:shadow-[0_4px_20px_rgba(20,167,20,0.4)] transition-all duration-200 whitespace-nowrap"
                >
                  Start the process
                  <ArrowRight size={15} />
                </a>
              </div>

              <div className="mt-10 pt-10 border-t border-[#FBFFFC]/08 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {OWNERSHIP_ITEMS.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#14A714]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#14A714]" />
                    </div>
                    <span className="font-body text-sm text-[#FBFFFC]/60 leading-[1.6]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 6 — BUILDS / CASE STUDIES
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-24 sm:py-28 lg:py-36 bg-[#06382C] overflow-hidden"
        id="builds"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
          {/* Header */}
          <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end mb-16 sm:mb-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionLabel>The Work</SectionLabel>
              <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.06] text-[#FBFFFC]">
                Built for creators who were
                <br className="hidden sm:block" /> done compromising.
              </h2>
            </motion.div>
            <motion.a
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              href="/builds"
              className="flex-shrink-0 inline-flex items-center gap-2 font-body text-sm font-semibold text-[#FBFFFC]/50 hover:text-[#FBFFFC] transition-colors group"
            >
              View all builds
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
          </div>

          {/* Build cards */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {BUILDS.map((build, i) => (
              <motion.div
                key={build.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="group relative rounded-3xl overflow-hidden border border-[#FBFFFC]/08 hover:border-[#FBFFFC]/18 transition-colors duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                }}
              >
                <div className="grid lg:grid-cols-[1fr_420px]">
                  {/* Left — identity + stats */}
                  <div className="relative p-8 sm:p-10 lg:p-14 flex flex-col justify-between min-h-[300px] overflow-hidden">
                    {/* Large ghost number */}
                    <span
                      aria-hidden
                      className="absolute -bottom-4 -left-2 font-display font-bold text-[#FBFFFC] select-none pointer-events-none leading-none"
                      style={{
                        fontSize: "clamp(7rem,18vw,14rem)",
                        opacity: 0.03,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="inline-flex items-center gap-1.5 font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-[#14A714] bg-[#14A714]/10 rounded-full px-3 py-1.5">
                          <span className="w-1.5 h-1.5 bg-[#14A714] rounded-full" />
                          {build.badge}
                        </span>
                      </div>
                      <h3 className="font-display text-[clamp(2rem,5vw,3.2rem)] font-bold text-[#FBFFFC] leading-[1.0] mb-3 tracking-tight">
                        {build.product}
                      </h3>
                      <p className="font-body text-sm text-[#FBFFFC]/35 mb-1">
                        {build.creator.split(" · ")[0]}
                      </p>
                      <p className="font-body text-xs text-[#FBFFFC]/25">
                        {build.creator.split(" · ").slice(1).join(" · ")}
                      </p>
                    </div>

                    {/* Stats row */}
                    <div className="relative z-10 flex gap-8 mt-10 pt-8 border-t border-[#FBFFFC]/08">
                      {build.stats.map((s, j) => (
                        <div key={j}>
                          <p className="font-display text-2xl sm:text-3xl font-bold text-[#FBFFFC] leading-none mb-1">
                            {s.split(" ")[0]}
                          </p>
                          <p className="font-body text-xs text-[#FBFFFC]/35 leading-[1.5]">
                            {s.split(" ").slice(1).join(" ")}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right — details */}
                  <div className="bg-[#FBFFFC] p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                    <div>
                      <p className="font-body text-sm text-[#0F0F0F]/50 leading-[1.8] mb-8 border-l-2 border-[#14A714]/30 pl-4">
                        {build.creator_bio}
                      </p>

                      <p className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0F0F0F]/30 mb-4">
                        What was built
                      </p>
                      <ul className="space-y-2.5">
                        {build.features.map((f, j) => (
                          <li key={j} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-[rgba(20,167,20,0.08)] flex items-center justify-center flex-shrink-0">
                              <Check className="w-3 h-3 text-[#14A714]" />
                            </div>
                            <span className="font-body text-sm text-[#0F0F0F]/70">
                              {f}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={`/builds/${build.slug}`}
                      className="mt-8 inline-flex items-center justify-between w-full px-5 py-4 rounded-xl border border-[rgba(15,15,15,0.08)] hover:border-[#14A714]/40 hover:bg-[rgba(20,167,20,0.03)] transition-all duration-200 group/btn"
                    >
                      <span className="font-body text-sm font-semibold text-[#0F0F0F]">
                        View full case study
                      </span>
                      <ArrowRight
                        size={15}
                        className="text-[#0F0F0F]/30 group-hover/btn:text-[#14A714] group-hover/btn:translate-x-1 transition-all duration-200"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 7 — WHO THIS IS FOR
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-28 lg:py-36 bg-[#FBFFFC]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 sm:mb-16"
          >
            <SectionLabel>The Right Fit</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,5vw,3.8rem)] font-semibold leading-[1.08] text-[#0F0F0F] max-w-2xl">
              I work best with creators who already have something real.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-10">
            {[
              {
                title: "Real audience",
                body: "You have 25,000+ followers who engage, trust your voice, and have already paid for something you've made.",
              },
              {
                title: "Real revenue",
                body: "You're earning $30K+/month from courses, coaching, or community. You're not validating. You're scaling.",
              },
              {
                title: "Real platform pain",
                body: "You know your tech doesn't match your brand. You've felt it. Your members have felt it. You're done duct-taping.",
              },
              {
                title: "Ready to move",
                body: "You're not in research mode. You want a decision and a timeline. You can commit one week to getting this done right.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white border border-[rgba(15,15,15,0.08)] rounded-2xl p-7 sm:p-8 hover:shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-[rgba(20,167,20,0.08)] flex items-center justify-center mb-5">
                  <Check className="w-4 h-4 text-[#14A714]" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-[#0F0F0F] mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-sm sm:text-base text-[#0F0F0F]/55 leading-[1.75]">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-body text-sm text-[#0F0F0F]/35 text-center"
          >
            If you're still building your audience or validating your offer, I'm
            not the right builder yet. Come back when you're ready.
          </motion.p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 8 — FAQ
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-28 lg:py-36 bg-[#06382C]" id="faq">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-14"
          >
            <SectionLabel>The Honest Answers</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.08] text-[#FBFFFC]">
              Questions serious creators ask before they book.
            </h2>
          </motion.div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 9 — TECH STACK
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-28 bg-[#06382C] overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-14 sm:mb-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionLabel>The Stack</SectionLabel>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-[1.06] text-[#FBFFFC]">
                Technology your next developer will respect.
              </h2>
            </motion.div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-body text-base text-[#FBFFFC]/40 leading-[1.8] lg:pb-1"
            >
              No proprietary tools. No platforms you'll be locked into. Every
              piece is industry standard — and fully yours on day 7.
            </motion.p>
          </div>

          {/* Stack items — horizontal scrollable on mobile, grid on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[#FBFFFC]/06 rounded-2xl overflow-hidden mb-10">
            {TECH_STACK.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative bg-[#06382C] p-7 sm:p-8 group hover:bg-[#FBFFFC]/04 transition-colors duration-200 overflow-hidden"
              >
                {/* Accent line top */}
                <div className="w-6 h-px bg-[#14A714]/50 mb-6 group-hover:w-10 group-hover:bg-[#14A714] transition-all duration-300" />
                <p className="font-display text-lg sm:text-xl font-semibold text-[#FBFFFC] mb-3">
                  {item.name}
                </p>
                <p className="font-body text-xs text-[#FBFFFC]/35 leading-[1.7]">
                  {item.plainDescription}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="h-px flex-1 bg-[#FBFFFC]/06" />
            <p className="font-body text-xs text-[#FBFFFC]/25 text-center px-4">
              All credentials, repos, and API keys transferred to you on day 7
            </p>
            <div className="h-px flex-1 bg-[#FBFFFC]/06" />
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 10 — WHAT YOU GET
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-28 lg:py-32 bg-[#FBFFFC] overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-end mb-14 sm:mb-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionLabel>The Deliverables</SectionLabel>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-[1.06] text-[#0F0F0F]">
                Everything you receive on day 7. No ambiguity.
              </h2>
            </motion.div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-body text-base text-[#0F0F0F]/45 leading-[1.8] lg:pb-1"
            >
              Most builders hand you a link and disappear. You get a live
              platform and complete ownership of every piece of it — documented,
              transferred, and yours.
            </motion.p>
          </div>

          {/* Deliverable grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(15,15,15,0.06)] rounded-2xl overflow-hidden mb-6">
            {[
              {
                icon: "01",
                title: "Custom branded platform",
                body: "Designed around your visual identity — typography, colors, layout. Not a template with your logo dropped in.",
              },
              {
                icon: "02",
                title: "Complete source code",
                body: "Your entire codebase transferred to a GitHub repo under your account. Every file, every commit — yours.",
              },
              {
                icon: "03",
                title: "Production database",
                body: "Your Supabase project transferred to your account. All member data and content with full admin access.",
              },
              {
                icon: "04",
                title: "Live deployment",
                body: "Your platform live on your custom domain via Vercel. Scales automatically — no action needed from you.",
              },
              {
                icon: "05",
                title: "All credentials & API keys",
                body: "Every password, every API key, every secret — documented and handed over. You can log in to every service independently.",
              },
              {
                icon: "06",
                title: "Technical documentation",
                body: "A plain-English guide to managing your platform: adding content, managing members, updating settings.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative bg-white p-7 sm:p-8 group hover:bg-[#fafffe] transition-colors duration-200 overflow-hidden"
              >
                <span
                  aria-hidden
                  className="absolute -top-2 -right-1 font-display font-bold text-[#0F0F0F] select-none leading-none pointer-events-none"
                  style={{ fontSize: "4.5rem", opacity: 0.04 }}
                >
                  {item.icon}
                </span>
                <div className="w-6 h-px bg-[#14A714]/50 mb-5 group-hover:w-10 group-hover:bg-[#14A714] transition-all duration-300" />
                <h3 className="font-display text-base sm:text-lg font-semibold text-[#0F0F0F] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-[#0F0F0F]/45 leading-[1.75]">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Plus 14-day support callout */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[rgba(20,167,20,0.05)] border border-[rgba(20,167,20,0.12)] rounded-xl px-6 py-5"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[rgba(20,167,20,0.1)] flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-[#14A714]" />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-[#0F0F0F]">
                  14 days post-launch support included
                </p>
                <p className="font-body text-xs text-[#0F0F0F]/40 mt-0.5">
                  Fixes, tweaks, and questions — covered. No extra charge.
                </p>
              </div>
            </div>
            <a
              href={SITE.calLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 font-body text-sm font-semibold text-[#14A714] hover:gap-3 transition-all duration-200 group"
            >
              Let's Talk
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 11 — FINAL CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-[#FBFFFC]">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-5 lg:px-8">
          {/* Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden bg-[#06382C]"
            style={{
              boxShadow:
                "0 32px 80px rgba(6,56,44,0.22), 0 0 0 1px rgba(20,167,20,0.08)",
            }}
          >
            {/* Grid texture */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(251,255,252,1) 1px, transparent 1px), linear-gradient(90deg, rgba(251,255,252,1) 1px, transparent 1px)",
                backgroundSize: "64px 64px",
              }}
            />
            {/* Top-right glow */}
            <div
              aria-hidden
              className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(20,167,20,0.18) 0%, transparent 70%)",
              }}
            />

            <div className="relative grid lg:grid-cols-[1fr_auto] gap-0">
              {/* Left — content */}
              <div className="p-8 sm:p-10 lg:p-14">
                {/* Label + availability */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#14A714]">
                    Let's Build
                  </span>
                  <div className="h-px w-8 bg-[#FBFFFC]/10" />
                  <span className="inline-flex items-center gap-1.5 font-body text-[11px] text-[#FBFFFC]/30 border border-[#FBFFFC]/08 rounded-full px-2.5 py-1">
                    <span className="w-1.5 h-1.5 bg-[#14A714] rounded-full animate-pulse" />
                    Available now
                  </span>
                </div>

                {/* Headline */}
                <h2 className="font-display text-[clamp(2rem,4.5vw,3.6rem)] font-bold leading-[1.06] text-[#FBFFFC] tracking-tight mb-6 max-w-lg">
                  Your members deserve a platform that matches your brand.
                </h2>

                {/* Body */}
                <p className="font-body text-sm sm:text-base text-[#FBFFFC]/40 leading-[1.85] max-w-md mb-8">
                  Book a free 15-minute call. I'll look at your current setup
                  and tell you exactly what a custom platform would look like
                  for you. No pitch. No deck. No pressure.
                </p>

                {/* Trust signals */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
                  {[
                    "Response under 2 hours",
                    "Available for new projects",
                    "Based in Lahore · Working globally",
                  ].map((item, i) => (
                    <span
                      key={i}
                      className="font-body text-xs text-[#FBFFFC]/20 flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 bg-[#14A714]/50 rounded-full" />
                      {item}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={SITE.calLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#14A714] text-[#FBFFFC] font-body font-semibold text-sm rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_rgba(20,167,20,0.45)] hover:-translate-y-0.5"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Let's Talk
                      <ArrowRight size={15} />
                    </span>
                    <span className="absolute inset-0 bg-[#129612] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </a>
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#FBFFFC]/05 border border-[#FBFFFC]/12 text-[#FBFFFC]/60 font-body font-semibold text-sm rounded-xl transition-all duration-200 hover:bg-[#FBFFFC]/10 hover:border-[#FBFFFC]/25 hover:text-[#FBFFFC]"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Right — stats panel */}
              <div className="lg:w-56 flex lg:flex-col justify-around lg:justify-center gap-0 border-t lg:border-t-0 lg:border-l border-[#FBFFFC]/06 px-8 py-8 lg:py-14">
                {[
                  { n: "7", label: "days to\nlaunch" },
                  { n: "100%", label: "ownership\ntransferred" },
                  { n: "$0", label: "monthly\nfees" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className={`text-center lg:py-6 ${i > 0 ? "border-t border-[#FBFFFC]/06" : ""}`}
                  >
                    <p className="font-display text-3xl sm:text-4xl font-bold text-[#FBFFFC] leading-none mb-2">
                      {s.n}
                    </p>
                    <p className="font-body text-[10px] text-[#FBFFFC]/25 uppercase tracking-widest leading-[1.6] whitespace-pre-line">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* JSON-LD FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
    </div>
  );
}

// ─── Hero Dashboard Card ──────────────────────────────────────────────────────
function HeroDashboardCard() {
  return (
    <div className="relative">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-3xl blur-2xl opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(20,167,20,0.25) 0%, transparent 65%)",
        }}
      />

      {/* Card shell */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
          border: "1px solid rgba(251,255,252,0.12)",
          boxShadow:
            "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(251,255,252,0.04) inset",
          backdropFilter: "blur(2px)",
        }}
      >
        {/* Top bar */}
        <div
          className="px-6 py-4 flex items-center justify-between border-b"
          style={{ borderColor: "rgba(251,255,252,0.08)" }}
        >
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FBFFFC]/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FBFFFC]/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#14A714]/60" />
            </div>
            <span className="font-body text-xs text-[#FBFFFC]/30 tracking-wide">
              linkup-os.com/dashboard
            </span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#14A714]/15 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 bg-[#14A714] rounded-full animate-pulse" />
            <span className="font-body text-[11px] text-[#14A714] font-semibold">
              Live
            </span>
          </div>
        </div>

        <div className="p-6">
          {/* Platform name */}
          <div className="mb-5">
            <p className="font-body text-[10px] text-[#FBFFFC]/30 uppercase tracking-[0.18em] mb-1">
              LinkUp OS · Member Dashboard
            </p>
            <p className="font-display text-xl font-semibold text-[#FBFFFC]">
              Welcome back, Ismail
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2.5 mb-5">
            {[
              { label: "Members", value: "2,500+", delta: "+12%" },
              { label: "Revenue", value: "$2.3M+", delta: "+8%" },
              { label: "Completion", value: "94%", delta: "+3%" },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-xl p-3 text-center"
                style={{ background: "rgba(251,255,252,0.05)" }}
              >
                <p className="font-display text-lg font-bold text-[#FBFFFC] leading-none mb-1">
                  {s.value}
                </p>
                <p className="font-body text-[10px] text-[#FBFFFC]/35 mb-1">
                  {s.label}
                </p>
                <p className="font-body text-[10px] text-[#14A714] font-semibold">
                  {s.delta}
                </p>
              </div>
            ))}
          </div>

          {/* Activity feed */}
          <div
            className="rounded-xl overflow-hidden mb-5"
            style={{ border: "1px solid rgba(251,255,252,0.07)" }}
          >
            <div
              className="px-4 py-2.5 flex items-center justify-between"
              style={{
                borderBottom: "1px solid rgba(251,255,252,0.06)",
                background: "rgba(251,255,252,0.03)",
              }}
            >
              <span className="font-body text-[10px] text-[#FBFFFC]/35 uppercase tracking-widest">
                Recent Activity
              </span>
              <span className="font-body text-[10px] text-[#14A714]">
                View all →
              </span>
            </div>
            {[
              { name: "Sarah K.", action: "completed Module 4", time: "2m" },
              { name: "Marcus T.", action: "joined the community", time: "8m" },
              { name: "Priya M.", action: "submitted for review", time: "15m" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3"
                style={{
                  borderBottom:
                    i < 2 ? "1px solid rgba(251,255,252,0.05)" : undefined,
                }}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-body text-[10px] font-bold text-[#14A714]"
                  style={{ background: "rgba(20,167,20,0.15)" }}
                >
                  {item.name[0]}
                </div>
                <p className="font-body text-xs text-[#FBFFFC]/60 flex-1 truncate">
                  <span className="text-[#FBFFFC]/80 font-medium">
                    {item.name}
                  </span>{" "}
                  {item.action}
                </p>
                <span className="font-body text-[10px] text-[#FBFFFC]/25 flex-shrink-0">
                  {item.time}
                </span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <span className="font-body text-[10px] text-[#FBFFFC]/25">
              Delivered in 7 days · Full ownership transferred
            </span>
            <span className="font-body text-[10px] font-semibold text-[#14A714]">
              ✓
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
