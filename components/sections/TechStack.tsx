"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/content/techStack";
import type { TechCategory } from "@/lib/types/content";
import TechBadge from "@/components/ui/TechBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";
import { useTranslation } from "@/lib/i18n/context";

const CATEGORY_ORDER: TechCategory[] = [
  "Frontend",
  "Backend",
  "AI / ML",
  "Cloud & Infra",
  "Payments & Auth",
];

export default function TechStack() {
  const { fadeUp, stagger } = useMotionVariants();
  const { t } = useTranslation();

  return (
    <section id="tech" className="py-20 md:py-28 bg-dark">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow={t.techStack.eyebrow}
          heading={t.techStack.heading}
          theme="light"
          className="mb-12"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8"
        >
          {CATEGORY_ORDER.map((category) => (
            <motion.div key={category} variants={fadeUp}>
              <h3 className="font-body text-xs uppercase tracking-widest text-light/40 mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <TechBadge key={item.id} item={item} theme="dark" />
                  ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
