"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n/context";

export default function ClimaFlowHero() {
  const { fadeUp, stagger, slideInLeft, fadeIn } = useMotionVariants();
  const { t } = useTranslation();
  const cf = t.climaflow;

  const META = [
    { label: cf.metaRoleLabel,     value: cf.metaRoleValue },
    { label: cf.metaMarketLabel,   value: cf.metaMarketValue },
    { label: cf.metaIndustryLabel, value: cf.metaIndustryValue },
    { label: cf.metaStatusLabel,   value: cf.metaStatusValue },
  ] as const;

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-light">
      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute -top-40 right-0 w-[700px] h-[700px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(197,216,109,0.07) 0%, transparent 65%)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Back link */}
        <motion.div variants={fadeIn} initial="hidden" animate="visible" className="mb-10">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 font-body text-sm text-dark/50 hover:text-dark transition-colors duration-200 group"
          >
            <ArrowLeft size={14} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
            {t.climaflow.backToWork}
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-start">
          {/* Left — title block */}
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-2xl">
            {/* Eyebrow */}
            <motion.div variants={slideInLeft} className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-brand-accent" />
              <p className="font-body uppercase tracking-[0.18em] text-xs text-brand-accent font-semibold">
                {cf.heroEyebrow}
              </p>
            </motion.div>

            {/* Product name */}
            <motion.div variants={fadeUp} className="mb-2">
              <span className="inline-flex items-center gap-3">
                <span
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl"
                  style={{ backgroundColor: "#0EA5E9" }}
                  aria-hidden="true"
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <path d="M11 3C11 3 6 7 6 12a5 5 0 0 0 10 0c0-5-5-9-5-9Z" fill="white" opacity="0.9" />
                    <path d="M8 14.5c1 1 4 1.5 6 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                  </svg>
                </span>
                <h1 className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl tracking-tight text-dark leading-none">
                  ClimaFlow
                </h1>
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              className="font-display font-semibold text-2xl md:text-3xl text-dark/70 mt-4 mb-6 leading-[1.2] tracking-tight"
            >
              {cf.heroTaglinePart1}{" "}
              <span className="text-dark">{cf.heroTaglinePart2}</span>
            </motion.p>

            {/* Description */}
            <motion.p variants={fadeUp} className="font-body text-base md:text-lg text-dark/60 leading-relaxed max-w-xl">
              {cf.heroDescription}
            </motion.p>

            {/* Status badges */}
            <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark/6 border border-dark/10 font-body text-xs font-semibold text-dark/60 tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" aria-hidden="true" />
                {cf.metaStatusValue}
              </span>
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-body text-xs font-semibold tracking-wide uppercase"
                style={{ backgroundColor: "rgba(14,165,233,0.1)", color: "#0EA5E9", border: "1px solid rgba(14,165,233,0.2)" }}
              >
                Field Service SaaS
              </span>
            </motion.div>
          </motion.div>

          {/* Right — meta grid */}
          <motion.div variants={stagger} initial="hidden" animate="visible" className="lg:pt-6">
            <dl className="flex flex-row lg:flex-col gap-6 lg:gap-0 flex-wrap">
              {META.map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className={cn(
                    "min-w-[120px] lg:min-w-0",
                    i < META.length - 1 && "lg:pb-5 lg:border-b lg:border-dark/10 lg:mb-5"
                  )}
                >
                  <dt className="font-body text-xs uppercase tracking-[0.15em] text-dark/40 font-semibold mb-1">
                    {label}
                  </dt>
                  <dd className="font-body text-sm font-semibold text-dark">{value}</dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="mt-16 hidden md:flex items-center gap-3 text-dark/30"
          aria-hidden="true"
        >
          <div className="w-px h-10 bg-dark/15" />
          <span className="font-body text-xs uppercase tracking-widest">
            {t.climaflow.scrollIndicator}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
