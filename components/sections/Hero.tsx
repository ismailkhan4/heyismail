"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/LinkButton";
import { calLink } from "@/lib/content/siteConfig";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";
import { useTranslation } from "@/lib/i18n/context";

export default function Hero() {
  const { fadeUp, stagger, slideInLeft } = useMotionVariants();
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative pt-40 pb-28 md:pt-52 md:pb-40 overflow-hidden">
      {/* Ambient background glow */}
      <motion.div
        className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(197,216,109,0.08) 0%, transparent 70%)" }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div variants={slideInLeft} className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-brand-accent" />
            <p className="font-body uppercase tracking-[0.18em] text-xs text-brand-accent font-semibold">
              {t.hero.eyebrow}
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl leading-[1.04] tracking-tight text-dark"
          >
            {t.hero.headline}
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            variants={fadeUp}
            className="font-body text-lg text-dark/60 max-w-2xl mt-7 leading-relaxed"
          >
            {t.hero.body}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-10">
            <Button href={calLink} external variant="primary" size="md">
              {t.hero.ctaPrimary}
            </Button>
            <Button href="#portfolio" variant="outline" size="md" className="text-dark border-dark/20">
              {t.hero.ctaSecondary}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
