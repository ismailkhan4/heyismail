"use client";

import { motion } from "framer-motion";
import { pricingTiers } from "@/lib/content/pricing";
import PricingCard from "@/components/ui/PricingCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";

export default function Pricing() {
  const { stagger } = useMotionVariants();

  return (
    <section id="pricing" className="py-20 md:py-28 bg-dark">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="ENGAGEMENT MODELS"
          heading="Three ways to engage, no flat number upfront."
          subheading="Every premium engagement is scoped after a call, here's the shape each one typically takes."
          theme="light"
          className="mb-12"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
