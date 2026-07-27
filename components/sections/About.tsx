"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/content/about";
import SectionHeading from "@/components/ui/SectionHeading";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";

export default function About() {
  const { fadeUp, stagger } = useMotionVariants();

  return (
    <section id="about" className="py-20 md:py-28 bg-light">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div variants={fadeUp}>
            <SectionHeading
              eyebrow="ABOUT"
              heading="Started self-taught in 2018. Still writing every line."
              theme="dark"
              className="mb-8"
            />
          </motion.div>
          {about.paragraphs.map((para, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="font-body text-dark/75 text-lg leading-relaxed max-w-2xl mb-4"
            >
              {para}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
