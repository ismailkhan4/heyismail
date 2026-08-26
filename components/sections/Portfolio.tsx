"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";
import { useTranslation } from "@/lib/i18n/context";
import PortfolioCard from "@/components/ui/PortfolioCard";

export default function Portfolio() {
  const { slideInLeft, stagger } = useMotionVariants();
  const { t } = useTranslation();

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-dark">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow={t.portfolio.eyebrow}
            heading={t.portfolio.heading}
            subheading={t.portfolio.subheading}
            theme="light"
            className="mb-12"
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {t.portfolio.items.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              labelProblem={t.portfolio.labelProblem}
              labelBuild={t.portfolio.labelBuild}
              labelOutcome={t.portfolio.labelOutcome}
              labelRole={t.portfolio.labelRole}
              labelStatus={t.portfolio.labelStatus}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
