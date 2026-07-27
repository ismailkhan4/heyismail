"use client";

import { motion } from "framer-motion";
import { differentiators } from "@/lib/content/differentiators";
import SectionHeading from "@/components/ui/SectionHeading";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";

export default function Differentiators() {
  const { scaleUp, stagger, slideInLeft } = useMotionVariants();

  return (
    <section id="why" className="py-20 md:py-28 bg-dark">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="WHY IT'S DIFFERENT"
            heading="One senior engineer. No layers."
            theme="light"
            className="mb-12"
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {differentiators.map((item, i) => (
            <motion.div
              key={item.id}
              variants={scaleUp}
              whileHover={{ y: -4, transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] } }}
              className="flex flex-col gap-3 border border-light/6 rounded-xl p-6 bg-surface/50 cursor-default"
            >
              <span className="font-display text-sm text-brand-accent font-semibold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-semibold text-light tracking-tight">
                {item.title}
              </h3>
              <p className="font-body text-sm text-light/60 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
