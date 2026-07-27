"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/lib/content/portfolio";
import PortfolioCard from "@/components/ui/PortfolioCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";

export default function Portfolio() {
  const { slideInLeft, stagger, scaleUp } = useMotionVariants();

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
            eyebrow="SELECTED WORK"
            heading="What gets built when scope is real."
            subheading="Anonymized by design, a real client roster is on the way. Every project below reflects the kind of work actually shipped: problem, build, and outcome."
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
          {portfolio.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
