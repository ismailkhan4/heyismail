"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";
import { useTranslation } from "@/lib/i18n/context";
import { Check } from "lucide-react";
import Button from "@/components/ui/LinkButton";
import { calLink } from "@/lib/content/siteConfig";
import { cn } from "@/lib/utils";

export default function Pricing() {
  const { stagger, fadeUp } = useMotionVariants();
  const { t } = useTranslation();

  return (
    <section id="pricing" className="py-20 md:py-28 bg-dark">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow={t.pricing.eyebrow}
          heading={t.pricing.heading}
          subheading={t.pricing.subheading}
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
          {t.pricing.items.map((tier) => (
            <motion.div
              key={tier.id}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] } }}
              className={cn(
                "rounded-xl p-6 md:p-7 flex flex-col gap-5 border cursor-default",
                tier.highlighted
                  ? "border-brand-accent/60 bg-brand-accent/[0.08]"
                  : "border-light/10 bg-surface"
              )}
            >
              <div>
                {tier.highlighted && (
                  <span className="inline-block text-xs font-semibold font-body text-brand-accent uppercase tracking-widest mb-2">
                    {t.pricing.mostCommon}
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold text-light tracking-tight">
                  {tier.name}
                </h3>
                <p className="font-body text-sm text-light/60 mt-2 leading-relaxed">{tier.whoFor}</p>
              </div>

              <ul className="flex flex-col gap-2.5">
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 font-body text-sm text-light/75">
                    <Check className="mt-0.5 shrink-0 text-brand-accent" size={16} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                href={calLink}
                external
                variant={tier.highlighted ? "primary" : "outline"}
                size="sm"
                className={cn("mt-auto", !tier.highlighted && "text-light border-light/25")}
              >
                {t.pricing.bookCall}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
