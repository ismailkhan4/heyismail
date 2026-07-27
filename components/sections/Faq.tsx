"use client";

import { motion } from "framer-motion";
import { faq } from "@/lib/content/faq";
import FaqAccordion from "@/components/ui/FaqAccordion";
import SectionHeading from "@/components/ui/SectionHeading";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";

export default function Faq() {
  const { fadeUp } = useMotionVariants();

  return (
    <section id="faq" className="py-20 md:py-28 bg-light">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="QUESTIONS"
          heading="Before you book a call."
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
          <FaqAccordion items={faq} />
        </motion.div>
      </div>
    </section>
  );
}
