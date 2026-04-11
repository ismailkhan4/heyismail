"use client";

import { motion, type Variants } from "framer-motion";
import { MessageCircle, Calendar, Mail, ArrowRight } from "lucide-react";
import { CONTACT, SITE } from "../data";
import Navigation from "../components/Navigation";

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.0, 0.0, 0.2, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Contact channels ─────────────────────────────────────────────────────────
const CHANNELS = [
  {
    icon: Calendar,
    label: "Book a call",
    description:
      "15 minutes. I'll tell you honestly whether I can help and what it would look like.",
    cta: "Schedule on Cal.com",
    href: SITE.calLink,
    primary: true,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    description:
      "Prefer async? Send me a voice note or message. I respond within 2 hours.",
    cta: "Open WhatsApp",
    href: SITE.whatsapp,
    primary: false,
  },
  {
    icon: Mail,
    label: "Email",
    description:
      "Rather write it out? Send me an email and I'll get back to you same day.",
    cta: "ismaeel.kheshgi@gmail.com",
    href: "mailto:ismaeel.kheshgi@gmail.com",
    primary: false,
  },
  {
    icon: ({ size, className }: { size: number; className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    label: "LinkedIn",
    description:
      "Follow my work, see what I'm building, or just send a connection request.",
    cta: "Connect on LinkedIn",
    href: SITE.linkedin,
    primary: false,
  },
];

export default function ContactPageClient() {
  return (
    <div className="bg-[#FBFFFC] text-[#0F0F0F] antialiased">
      <Navigation />

      {/* ══════════════════════════════════════════════════════════════════════
          HERO — dark
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative h-[100svh] min-h-[600px] max-h-[900px] flex flex-col justify-center bg-[#06382C] overflow-hidden">
        {/* Grid texture */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(251,255,252,1) 1px, transparent 1px), linear-gradient(90deg, rgba(251,255,252,1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 55% at 65% 45%, rgba(20,167,20,0.09) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-10 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="mb-7">
              <span className="inline-flex items-center gap-2 border border-[#FBFFFC]/15 rounded-full px-4 py-2 font-body text-xs font-medium text-[#FBFFFC]/55 tracking-wide">
                <span className="w-1.5 h-1.5 bg-[#14A714] rounded-full animate-pulse" />
                Get in Touch
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-[clamp(2.6rem,6vw,5rem)] font-bold leading-[1.04] text-[#FBFFFC] mb-6 tracking-tight"
            >
              {CONTACT.headline}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-body text-base sm:text-lg text-[#FBFFFC]/50 max-w-xl mb-10 leading-[1.8]"
            >
              {CONTACT.intro}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a
                href={SITE.calLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#14A714] text-[#FBFFFC] font-body font-semibold rounded-xl transition-all duration-200 hover:bg-[#129612] hover:shadow-[0_6px_28px_rgba(20,167,20,0.45)] hover:-translate-y-0.5 text-sm"
              >
                <Calendar size={15} />
                Let&apos;s Talk
              </a>
              <a
                href="mailto:ismaeel.kheshgi@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#FBFFFC]/20 text-[#FBFFFC] font-body font-semibold rounded-xl transition-all duration-200 hover:bg-[#FBFFFC]/08 hover:border-[#FBFFFC]/35 text-sm"
              >
                <Mail size={15} />
                Send an Email
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(6,56,44,0.5))",
          }}
        />
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CHANNELS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-14 sm:mb-16">
              <span className="font-body text-xs font-semibold uppercase tracking-[0.18em] block mb-4 text-[#14A714]">
                Ways to Reach Me
              </span>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-semibold leading-[1.08] text-[#0F0F0F]">
                Pick what works for you.
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-5">
              {CHANNELS.map((channel, i) => {
                const Icon = channel.icon;
                return (
                  <motion.a
                    key={i}
                    href={channel.href}
                    target={channel.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={channel.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    variants={fadeUp}
                    className={`group relative flex flex-col gap-5 p-8 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 ${
                      channel.primary
                        ? "bg-[#06382C] border-transparent hover:shadow-[0_12px_40px_rgba(6,56,44,0.25)]"
                        : "bg-[#FBFFFC] border-[rgba(15,15,15,0.09)] hover:border-[rgba(15,15,15,0.16)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
                    }`}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                        channel.primary ? "bg-[#14A714]/20" : "bg-[rgba(20,167,20,0.08)]"
                      }`}
                    >
                      <Icon
                        size={20}
                        className={channel.primary ? "text-[#14A714]" : "text-[#14A714]"}
                      />
                    </div>

                    <div className="flex-1">
                      <p
                        className={`font-display text-lg font-semibold mb-2 ${
                          channel.primary ? "text-[#FBFFFC]" : "text-[#0F0F0F]"
                        }`}
                      >
                        {channel.label}
                      </p>
                      <p
                        className={`font-body text-sm leading-[1.75] ${
                          channel.primary ? "text-[#FBFFFC]/50" : "text-[#0F0F0F]/50"
                        }`}
                      >
                        {channel.description}
                      </p>
                    </div>

                    <div
                      className={`inline-flex items-center gap-2 font-body text-sm font-semibold group-hover:gap-3 transition-all duration-200 ${
                        channel.primary ? "text-[#14A714]" : "text-[#14A714]"
                      }`}
                    >
                      {channel.cta}
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          RESPONSE PROMISE
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[rgba(6,56,44,0.05)]">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-3 gap-px bg-[rgba(15,15,15,0.07)] rounded-2xl overflow-hidden"
          >
            {[
              { stat: "< 2 hrs", label: "Response time" },
              { stat: "15 min", label: "Intro call length" },
              { stat: "Honest", label: "If it's not a fit, I'll say so" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-[#FBFFFC] px-8 py-10 text-center"
              >
                <p className="font-display text-2xl sm:text-3xl font-semibold text-[#0F0F0F] mb-2">
                  {item.stat}
                </p>
                <p className="font-body text-xs text-[#0F0F0F]/45 uppercase tracking-widest">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 bg-[#06382C] overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(251,255,252,1) 1px, transparent 1px), linear-gradient(90deg, rgba(251,255,252,1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 lg:px-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-[#14A714] mb-5"
            >
              No pressure
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[1.06] text-[#FBFFFC] mb-6"
            >
              Not every idea needs a 7-day sprint. Let&apos;s figure out what yours needs.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-body text-base sm:text-lg text-[#FBFFFC]/50 mb-10 max-w-xl mx-auto leading-[1.8]"
            >
              I&apos;d rather have an honest conversation that doesn&apos;t lead to work than waste both our time with a bad fit.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a
                href={SITE.calLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 bg-[#14A714] text-[#FBFFFC] font-body font-semibold rounded-xl transition-all duration-200 hover:bg-[#129612] hover:shadow-[0_6px_28px_rgba(20,167,20,0.45)] hover:-translate-y-0.5"
              >
                Let&apos;s Talk
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
