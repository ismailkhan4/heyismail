"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";
import { Check, ArrowRight, ExternalLink, ArrowLeft } from "lucide-react";
import { ConceptBuild, SITE } from "../../data";
import Navigation from "../../components/Navigation";

interface BuildDetailClientProps {
  build: ConceptBuild;
}

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

// ─── Section label ────────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-body text-xs font-semibold uppercase tracking-[0.18em] block mb-4 text-[#14A714]">
      {children}
    </span>
  );
}

const BuildDetailClient: React.FC<BuildDetailClientProps> = ({ build }) => {
  return (
    <div className="bg-[#FBFFFC] text-[#0F0F0F] antialiased">
      <Navigation />

      {/* ══════════════════════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] flex flex-col justify-center bg-[#06382C] overflow-hidden">
        {/* Background texture */}
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
                "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(20,167,20,0.07) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-10 w-full py-32 sm:py-40">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl">
            {/* Back button */}
            <motion.div variants={fadeUp} className="mb-7">
              <a
                href="/builds"
                className="inline-flex items-center gap-2 text-[#FBFFFC]/70 hover:text-[#FBFFFC] transition-colors font-body text-sm font-medium"
              >
                <ArrowLeft size={16} />
                Back to All Builds
              </a>
            </motion.div>

            {/* Creator badge */}
            <motion.div variants={fadeUp} className="mb-7">
              <div className="inline-flex items-center gap-3 border border-[#FBFFFC]/15 rounded-full px-4 py-2 font-body text-xs font-medium text-[#FBFFFC]/70">
                <div className="w-6 h-6 bg-[#14A714] rounded-full flex items-center justify-center text-[#FBFFFC] font-bold text-xs">
                  {build.creator.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <span>{build.creator.name} · {build.creator.title}</span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-[clamp(2.6rem,6vw,5rem)] font-bold leading-[1.04] text-[#FBFFFC] mb-6 tracking-tight"
            >
              {build.product.name}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-body text-xl text-[#14A714] font-semibold mb-6"
            >
              {build.product.tagline}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-body text-base sm:text-lg text-[#FBFFFC]/60 max-w-2xl mb-10 leading-[1.8]"
            >
              {build.product.description}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              {build.links.demo && (
                <a
                  href={build.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-[#14A714] text-[#FBFFFC] font-body font-semibold rounded-xl transition-all duration-200 hover:bg-[#129612] hover:shadow-[0_6px_28px_rgba(20,167,20,0.45)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  View Live Platform
                  <ExternalLink size={16} />
                </a>
              )}
              <a
                href={SITE.calLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 border border-[#FBFFFC]/20 text-[#FBFFFC] font-body font-semibold rounded-xl transition-all duration-200 hover:bg-[#FBFFFC]/10 hover:-translate-y-0.5 active:translate-y-0"
              >
                Build Something Similar
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(6,56,44,0.7))" }}
        />
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          WHAT WAS BUILT SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-28 lg:py-36 bg-[#FBFFFC]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            {/* Left - Features */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionLabel>Platform Features</SectionLabel>
              <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-bold leading-[1.04] text-[#0F0F0F] mb-8 tracking-tight">
                What I built
              </h2>

              <div className="space-y-4">
                {build.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Check className="w-5 h-5 text-[#14A714] flex-shrink-0 mt-0.5" />
                    <span className="font-body text-base text-[#0F0F0F]/70 leading-[1.7]">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Live badge */}
              <div className="flex items-center gap-2 mt-8 pt-8 border-t border-[rgba(15,15,15,0.08)]">
                <span className="w-2 h-2 bg-[#14A714] rounded-full" />
                <span className="font-body text-sm font-semibold text-[#14A714]">Live in 7 days</span>
              </div>
            </motion.div>

            {/* Right - Platform Preview */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:pt-14"
            >
              <div className="bg-[#FBFFFC] border border-[rgba(15,15,15,0.09)] rounded-2xl p-8 sm:p-10"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)" }}>

                {build.product.image ? (
                  <div className="relative rounded-xl overflow-hidden mb-6">
                    <img
                      src={build.product.image}
                      alt={`${build.product.name} Platform`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-[#06382C]/5 to-[#14A714]/5 rounded-xl p-8 mb-6">
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="h-6 bg-[#14A714] rounded w-32"></div>
                        <div className="w-8 h-8 bg-[#0F0F0F]/10 rounded-full"></div>
                      </div>

                      {/* Content blocks */}
                      <div className="space-y-4">
                        <div className="h-4 bg-[#0F0F0F]/10 rounded w-full"></div>
                        <div className="h-4 bg-[#0F0F0F]/5 rounded w-4/5"></div>
                        <div className="h-4 bg-[#0F0F0F]/5 rounded w-3/4"></div>
                      </div>

                      {/* Feature cards */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-16 bg-[#14A714]/10 rounded-lg"></div>
                        <div className="h-16 bg-[#06382C]/10 rounded-lg"></div>
                        <div className="h-16 bg-[#0F0F0F]/5 rounded-lg"></div>
                        <div className="h-16 bg-[#0F0F0F]/5 rounded-lg"></div>
                      </div>

                      {/* CTA */}
                      <div className="h-12 bg-[#14A714] rounded-lg flex items-center justify-center">
                        <span className="text-[#FBFFFC] font-semibold text-sm">{build.product.name}</span>
                      </div>
                    </div>
                  </div>
                )}

                <h3 className="font-display text-lg font-semibold text-[#0F0F0F] mb-4">
                  Platform Overview
                </h3>
                <p className="font-body text-sm text-[#0F0F0F]/60 leading-[1.7] mb-6">
                  A comprehensive platform built specifically around {build.creator.name}'s methodology and teaching style.
                </p>

                {build.links.demo && (
                  <a
                    href={build.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-body text-sm font-semibold text-[#0F0F0F]/50 hover:text-[#0F0F0F] transition-colors group"
                  >
                    Explore live platform
                    <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          RESEARCH PROCESS SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-28 lg:py-36 bg-[rgba(6,56,44,0.05)]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <SectionLabel>Research Process</SectionLabel>
            <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-bold leading-[1.04] text-[#0F0F0F] mb-6 tracking-tight">
              How I studied {build.creator.name}'s approach
            </h2>
            <p className="font-body text-base text-[#0F0F0F]/50 max-w-2xl mx-auto leading-[1.8]">
              Before writing a single line of code, I spent weeks analyzing their methodology to capture the essence of their teaching style.
            </p>
          </motion.div>

          {/* Research note */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#FBFFFC] border border-[rgba(15,15,15,0.09)] rounded-2xl p-8 sm:p-10 mb-12"
            style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)" }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#14A714] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#FBFFFC] text-xl">💡</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-[#0F0F0F] mb-4">Deep Analysis</h3>
                <p className="font-body text-base text-[#0F0F0F]/70 leading-[1.8]">
                  {build.researchNote}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Research steps */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Content Analysis",
                description: "Studied months of content, posts, and teaching materials to understand core methodologies"
              },
              {
                step: "02",
                title: "Pattern Recognition",
                description: "Identified recurring frameworks, teaching styles, and unique approaches to the subject matter"
              },
              {
                step: "03",
                title: "Platform Design",
                description: "Translated insights into software features that capture the essence of their teaching style"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-[#FBFFFC] border border-[rgba(15,15,15,0.09)] rounded-xl"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-display font-bold text-[#14A714] mb-3">{item.step}</div>
                <h4 className="font-body font-semibold text-[#0F0F0F] mb-3">{item.title}</h4>
                <p className="font-body text-sm text-[#0F0F0F]/60 leading-[1.7]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CREATOR PROFILE SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-28 lg:py-36 bg-[#FBFFFC]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <SectionLabel>Creator Profile</SectionLabel>
            <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-bold leading-[1.04] text-[#0F0F0F] mb-6 tracking-tight">
              About {build.creator.name}
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#FBFFFC] border border-[rgba(15,15,15,0.09)] rounded-2xl p-8 sm:p-10"
            style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)" }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 bg-[#14A714] rounded-full flex items-center justify-center text-[#FBFFFC] font-bold text-xl flex-shrink-0">
                {build.creator.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-display text-2xl font-bold text-[#0F0F0F] mb-2">{build.creator.name}</h3>
                <p className="font-body text-lg font-semibold text-[#14A714] mb-4">{build.creator.title}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(15,15,15,0.05)] rounded-full">
                  <span className="font-body text-sm text-[#0F0F0F]/60">{build.creator.followers}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CTA SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-28 lg:py-36 bg-[rgba(6,56,44,0.05)]">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-[#06382C] px-8 sm:px-12 lg:px-16 py-14 sm:py-16 text-center"
            style={{ boxShadow: "0 40px 80px rgba(6,56,44,0.25)" }}
          >
            {/* Grid texture */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(251,255,252,1) 1px, transparent 1px), linear-gradient(90deg, rgba(251,255,252,1) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
            {/* Glow */}
            <div
              aria-hidden
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(20,167,20,0.6) 0%, transparent 70%)" }}
            />

            <div className="relative z-10">
              <p className="font-display text-[clamp(1.6rem,4vw,2.8rem)] font-semibold text-[#FBFFFC] leading-[1.2] mb-6 max-w-2xl mx-auto">
                Want me to build your platform?
              </p>

              <p className="font-body text-base text-[#FBFFFC]/50 mb-10 leading-[1.8]">
                I can study your methodology and build a platform that captures your unique approach. Let's turn your expertise into software.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={SITE.calLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-[#14A714] text-[#FBFFFC] font-body font-semibold rounded-xl transition-all duration-200 hover:bg-[#129612] hover:shadow-[0_6px_28px_rgba(20,167,20,0.45)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  Let's Talk About Your Idea
                  <ArrowRight size={16} />
                </a>
                <a
                  href="/builds"
                  className="inline-flex items-center gap-2 px-7 py-4 border border-[#FBFFFC]/20 text-[#FBFFFC] font-body font-semibold rounded-xl transition-all duration-200 hover:bg-[#FBFFFC]/10 hover:-translate-y-0.5 active:translate-y-0"
                >
                  See More Builds
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BuildDetailClient;