"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/content/stats";
import StatItem from "@/components/ui/StatItem";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";

export default function ProofBar() {
  const { fadeUp, stagger } = useMotionVariants();

  return (
    <section id="proof" className="py-14 md:py-16 bg-dark border-y border-light/8">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={fadeUp}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <StatItem stat={stat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
