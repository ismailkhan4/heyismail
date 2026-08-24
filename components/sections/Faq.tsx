"use client";

import { motion } from "framer-motion";
import FaqAccordion from "@/components/ui/FaqAccordion";
import SectionHeading from "@/components/ui/SectionHeading";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";
import { useTranslation } from "@/lib/i18n/context";

export default function Faq() {
  const { fadeUp } = useMotionVariants();
  const { t } = useTranslation();

  return (
    <section id="faq" className="py-20 md:py-28 bg-light">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow={t.faq.eyebrow}
          heading={t.faq.heading}
          theme="dark"
          className="mb-12"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <FaqAccordion items={t.faq.items} />
        </motion.div>
      </div>
    </section>
  );
}
