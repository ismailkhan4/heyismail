"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/content/services";
import ServiceCard from "@/components/ui/ServiceCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";

export default function Services() {
  const { fadeUp, stagger } = useMotionVariants();

  return (
    <section id="services" className="py-20 md:py-28 bg-light">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="WHAT I BUILD"
          heading="Four ways to work with a senior engineer, not an agency queue."
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
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
