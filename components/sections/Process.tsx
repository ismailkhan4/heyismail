"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/content/process";
import ProcessStepCard from "@/components/ui/ProcessStepCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";

export default function Process() {
  const { stagger } = useMotionVariants();

  return (
    <section id="process" className="py-20 md:py-28 bg-light">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="HOW WE'D WORK TOGETHER"
          heading="A clear process, scoped to what you're actually building."
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
          {process.map((step, i) => (
            <ProcessStepCard key={step.id} step={step} isLast={i === process.length - 1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
