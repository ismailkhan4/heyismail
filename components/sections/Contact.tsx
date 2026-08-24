"use client";

import { motion } from "framer-motion";
import { calLink } from "@/lib/content/siteConfig";
import Button from "@/components/ui/LinkButton";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";
import { useTranslation } from "@/lib/i18n/context";

export default function Contact() {
  const { fadeUp, stagger } = useMotionVariants();
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 md:py-28 bg-light">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp}>
            <SectionHeading
              eyebrow={t.contact.eyebrow}
              heading={t.contact.heading}
              subheading={t.contact.subheading}
              theme="dark"
              className="mb-10"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
            <Button href={calLink} external variant="primary" size="md">
              {t.contact.bookCall}
            </Button>
          </motion.div>

          <motion.div variants={fadeUp}>
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
