"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ui/ServiceCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";
import { useTranslation } from "@/lib/i18n/context";

export default function Services() {
  const { fadeUp, stagger } = useMotionVariants();
  const { t } = useTranslation();

  return (
    <section id="services" className="py-20 md:py-28 bg-light">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow={t.services.eyebrow}
          heading={t.services.heading}
          theme="dark"
          className="mb-12"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {t.services.items.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
