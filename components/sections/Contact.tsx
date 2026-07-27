"use client";

import { motion } from "framer-motion";
import { calLink, responseTimeCopy } from "@/lib/content/siteConfig";
import Button from "@/components/ui/LinkButton";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";

export default function Contact() {
  const { fadeUp, stagger } = useMotionVariants();

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
              eyebrow="GET IN TOUCH"
              heading="Have a project in mind?"
              subheading={`Book a short call, or send a few details below. ${responseTimeCopy}`}
              theme="dark"
              className="mb-10"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
            <Button href={calLink} external variant="primary" size="md">
              Book a call
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
