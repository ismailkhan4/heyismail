"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";
import { contactEmail } from "@/lib/content/siteConfig";
import { useTranslation } from "@/lib/i18n/context";

export default function ClimaFlowCTA() {
  const { fadeUp, stagger } = useMotionVariants();
  const { t } = useTranslation();
  const cf = t.climaflow;

  // mailto subject differs by language
  const mailSubject = encodeURIComponent(
    t.climaflow.ctaPrimary + " — ClimaFlow"
  );

  return (
    <section className="py-20 md:py-32 bg-dark overflow-hidden relative">
      {/* Ambient glow */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(197,216,109,0.06) 0%, transparent 70%)",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <span className="block w-8 h-px bg-brand-accent/50" aria-hidden="true" />
            <p className="font-body uppercase tracking-[0.18em] text-xs text-brand-accent font-semibold">
              {cf.ctaEyebrow}
            </p>
            <span className="block w-8 h-px bg-brand-accent/50" aria-hidden="true" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="font-display font-semibold text-4xl md:text-5xl text-light leading-[1.1] tracking-tight"
          >
            {cf.ctaHeadline}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="font-body text-base md:text-lg text-light/55 leading-relaxed"
          >
            {cf.ctaDescription}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href={`mailto:${contactEmail}?subject=${mailSubject}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-display font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(197,216,109,0.2)]"
              style={{ backgroundColor: "#C5D86D", color: "#070707" }}
            >
              {cf.ctaPrimary}
              <ArrowUpRight size={16} />
            </a>
            <Link
              href="/#portfolio"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-display font-semibold text-base border border-light/15 text-light/60 hover:border-light/25 hover:text-light/80 transition-all duration-200 group"
            >
              <ArrowLeft
                size={16}
                className="transition-transform duration-200 group-hover:-translate-x-0.5"
              />
              {cf.ctaSecondary}
            </Link>
          </motion.div>

          {/* Divider */}
          <motion.div variants={fadeUp} className="w-full h-px bg-light/8" aria-hidden="true" />

          {/* Footer note — supports \n line breaks */}
          <motion.p variants={fadeUp} className="font-body text-sm text-light/30 text-center">
            {cf.ctaFooterNote.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < cf.ctaFooterNote.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
