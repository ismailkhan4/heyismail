"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";
import { testimonials } from "@/lib/content/testimonials";
import { calLink } from "@/lib/content/siteConfig";

export default function Testimonials() {
  const { fadeUp, stagger, scaleUp } = useMotionVariants();

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-light">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="CLIENT RESULTS"
            heading="Trusted by founders who ship."
            theme="dark"
            className="mb-12"
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
        >
          {/* Real testimonials */}
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={scaleUp}
              className="h-full"
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}

          {/* Open slot CTA card */}
          <motion.a
            href={calLink}
            target="_blank"
            rel="noopener noreferrer"
            variants={scaleUp}
            whileHover={{
              y: -5,
              boxShadow: "0 20px 40px -12px rgba(197,216,109,0.15)",
              transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
            }}
            className="group border border-dashed border-dark/20 hover:border-brand-accent/50 rounded-xl p-7 md:p-8 flex flex-col items-start justify-between gap-6 transition-colors duration-300 cursor-pointer"
            style={{ willChange: "transform" }}
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 fill-dark/15 group-hover:fill-brand-accent/40 transition-colors duration-300"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="font-display text-xl font-semibold text-dark tracking-tight leading-snug">
                Your review could be next.
              </p>
              <p className="font-body text-sm text-dark/55 leading-relaxed max-w-xs">
                If you&apos;ve worked with me and found the experience worth talking
                about, I&apos;d love to hear it. Real words from real clients
                matter more than any pitch.
              </p>
            </div>

            <div className="flex items-center gap-2 font-body text-sm font-semibold text-dark/50 group-hover:text-brand-accent transition-colors duration-200">
              <span>Book a call to get started</span>
              <ArrowUpRight
                size={15}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
