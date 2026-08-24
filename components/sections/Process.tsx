"use client";

import { motion } from "framer-motion";
import ProcessStepCard from "@/components/ui/ProcessStepCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";
import { useTranslation } from "@/lib/i18n/context";

export default function Process() {
  const { stagger } = useMotionVariants();
  const { t } = useTranslation();

  return (
    <section id="process" className="py-20 md:py-28 bg-light">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow={t.process.eyebrow}
          heading={t.process.heading}
          theme="dark"
          className="mb-14"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          {t.process.items.map((step, i) => (
            <ProcessStepCard
              key={step.id}
              step={step}
              isLast={i === t.process.items.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
