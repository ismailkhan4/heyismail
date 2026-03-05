"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FAQS,
  projects,
  testimonials,
  GAP_DATA,
  PROCESS_DAYS,
  WHAT_YOU_OWN,
  STACK,
  AI_TOOLS,
  MVP_CHECKLIST,
  FOUNDER_SERIES,
} from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const heyIsmailLanding = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (
      e: React.MouseEvent<Element, MouseEvent> | MouseEvent,
    ): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white text-dark-text font-sans antialiased">
      {/* Custom Cursor Effect */}
      <div
        className="fixed w-96 h-96 pointer-events-none z-50 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background:
            "radial-gradient(circle, rgba(47, 109, 94, 0.08) 0%, transparent 70%)",
          opacity: 0.6,
        }}
      />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-[#0A0F0D]"
      >
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 201, 107, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 201, 107, 0.05) 1px, transparent 1px)`,
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        <motion.div
          className="absolute top-1/4 -left-48 w-96 h-96 bg-[#00C96B] filter blur-3xl opacity-20"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#00C96B] filter blur-3xl opacity-20"
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Eyebrow badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-[#00C96B] animate-pulse" />
              <span className="text-sm text-gray-300">
                15+ MVPs Shipped · AI-Accelerated · 7 Days
              </span>
            </motion.div>

            {/* ── HEADLINE ── */}
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-white">
              I build SaaS MVPs
              <br />
              <span className="font-display italic text-[#00C96B]">
                in 7 days.
              </span>
              <br />
              <span className="text-gray-400 text-2xl md:text-4xl lg:text-5xl">
                Not 7 months.
              </span>
            </h1>

            {/* ── SUBHEADLINE ── */}
            <p className="text-lg md:text-xl text-gray-400 mb-4 max-w-2xl mx-auto leading-relaxed">
              AI-accelerated development for non-technical founders who need to validate fast.
              <br className="hidden md:block" />
              <span className="text-gray-300">
                {" "}
                Real code, real features, real results — in one week.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <a
                href="https://heyismail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-[#00C96B] text-[#0A0F0D] font-semibold hover:scale-105 transition-all flex items-center gap-2"
              >
                Book Your Free Call
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <button
                onClick={() => scrollToSection("work")}
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                See My Work
              </button>
            </div>

            {/* ── SOCIAL PROOF LINE ── */}
            <p className="text-sm text-[#00C96B]/70 mb-16 max-w-xl mx-auto">
              Next.js · Supabase · Stripe · Vercel · Real code. You own everything.
            </p>

            {/* ── METRICS ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[
                    "/client-1.jpg",
                    "/client-2.jpg",
                    "/client-3.jpg",
                    "/client-4.jpg",
                  ].map((src, i) => (
                    <Image
                      width={32}
                      height={32}
                      key={i}
                      src={src}
                      alt={`Client ${i + 1}`}
                      className="w-8 h-8 border-2 border-[#0A0F0D]"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-400">
                  20+ founders shipped MVPs
                </span>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span>⚡ 7-day delivery</span>
                <span>🚀 Investor-ready code</span>
                <span>💯 100% code ownership</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── THE GAP SECTION ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00C96B]/10 border border-[#00C96B]/20 mb-6">
              <span className="text-sm font-medium text-[#00C96B] tracking-widest uppercase">
                The Gap I Work In
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-[#0A0F0D]">
              Every founder with a validated idea hits the same wall.
            </h2>
          </motion.div>

          {/* Two-column comparison */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Problem Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group bg-red-50/50 border-l-4 border-red-500 p-8 hover:bg-red-50/80 hover:border-red-600 transition-all duration-200"
            >
              <h3 className="text-2xl font-bold mb-6 text-[#0A0F0D]">
                {GAP_DATA.problem.title}
              </h3>
              <ul className="space-y-4">
                {GAP_DATA.problem.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[#0A0F0D]/80"
                  >
                    <span className="text-red-500 text-lg mt-1">•</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solution Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group bg-[#E6FFF3]/50 border-l-4 border-[#00C96B] p-8 hover:bg-[#E6FFF3]/80 hover:border-[#00A855] transition-all duration-200"
            >
              <h3 className="text-2xl font-bold mb-6 text-[#0A0F0D]">
                {GAP_DATA.solution.title}
              </h3>
              <ul className="space-y-4">
                {GAP_DATA.solution.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[#0A0F0D]/80"
                  >
                    <span className="text-[#00C96B] text-lg mt-1">•</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WORK / CASE STUDIES ── */}
      <section
        id="work"
        className="py-32 relative border-t border-emerald-500/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            {/* ── Headline now echoes LinkedIn outcome ── */}
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ideas That Became Paying Products.
            </h2>
            <p className="text-xl text-gray-400">
              Real MVPs. Real traction. Built in under 2 weeks.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-emerald-500/10 p-8 hover:border-emerald-500/30 transition-all cursor-pointer overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold">{project.name}</h3>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </motion.a>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 text-sm">
                    <div>
                      <div className="text-emerald-400 font-semibold">
                        {project.metrics.users}
                      </div>
                      <div className="text-gray-500 text-xs">Users</div>
                    </div>
                    <div>
                      <div className="text-emerald-400 font-semibold">
                        {project.metrics.revenue}
                      </div>
                      <div className="text-gray-500 text-xs">Status</div>
                    </div>
                    <div>
                      <div className="text-emerald-400 font-semibold">
                        {project.metrics.time}
                      </div>
                      <div className="text-gray-500 text-xs">Build Time</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section
        id="process"
        className="py-24 bg-[#F8F7F3]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00C96B]/10 border border-[#00C96B]/20 mb-6">
              <span className="text-sm font-medium text-[#00C96B] tracking-widest uppercase">
                The Process
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-[#0A0F0D]">
              What happens every day of your sprint.
            </h2>
          </motion.div>

          {/* 5 Process Day Cards */}
          <div className="grid md:grid-cols-5 gap-6 mb-16">
            {PROCESS_DAYS.map((processDay, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white border border-[rgba(10,15,13,0.08)] p-6 hover:border-[rgba(0,201,107,0.30)] hover:shadow-[0_4px_16px_rgba(10,15,13,0.08),0_1px_4px_rgba(10,15,13,0.04)] transition-all duration-200"
              >
                <div className="text-center">
                  <div className="text-sm font-medium text-[#00C96B] mb-3 tracking-wide">
                    {processDay.day}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#0A0F0D]">
                    {processDay.title}
                  </h3>
                  <p className="text-[#52665E] leading-relaxed text-sm">
                    {processDay.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dark Ownership Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0A0F0D] p-8 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 text-white">
              At the end of Day 7, you own everything.
            </h3>

            {/* 6 Ownership Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {WHAT_YOU_OWN.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="px-4 py-2 bg-white/10 border border-white/20 text-white text-sm font-medium"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-24 bg-white border-y border-[rgba(10,15,13,0.08)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* The stack that makes 7 days possible */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-[#0A0F0D] text-center">
              The stack that makes 7 days possible
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              {STACK.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group flex items-center gap-3 px-4 py-3 bg-[#EFEFEA] border border-[rgba(10,15,13,0.08)] hover:border-[rgba(0,201,107,0.30)] hover:bg-white transition-all duration-200"
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: tech.color }}
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-[#0A0F0D] text-sm">
                      {tech.name}
                    </span>
                    <span className="text-xs text-[#52665E]">
                      {tech.role}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* The AI that makes it possible */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-[#0A0F0D] text-center">
              The AI that makes it possible
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              {AI_TOOLS.map((tool, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group flex items-center gap-3 px-4 py-3 bg-[#EFEFEA] border border-[rgba(10,15,13,0.08)] hover:border-[rgba(0,201,107,0.30)] hover:bg-white transition-all duration-200"
                >
                  <div className="text-[#00C96B]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-[#0A0F0D] text-sm">
                      {tool.name}
                    </span>
                    <span className="text-xs text-[#52665E]">
                      {tool.role}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MVP CHECKLIST ── */}
      <section className="py-24 bg-[#0A0F0D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00C96B]/10 border border-[#00C96B]/20 mb-6">
              <span className="text-sm font-medium text-[#00C96B] tracking-widest uppercase">
                The 7 Non-Negotiables
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
              Every MVP I build passes this list. Most don't.
            </h2>
          </motion.div>

          {/* 7 Checklist Items in 2-column grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {MVP_CHECKLIST.map((checklistItem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-start gap-4 p-6 bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-200"
              >
                {/* Primary checkmark circle */}
                <div className="flex-shrink-0 w-6 h-6 bg-[#00C96B] flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-[#0A0F0D]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>

                <div className="flex-1">
                  {/* Item text */}
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {checklistItem.item}
                  </h3>
                  {/* Detail text */}
                  <p className="text-white/70 leading-relaxed">
                    {checklistItem.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-white/60 text-lg">
              I've reviewed 40+ founder MVPs. Only 6 passed the real usage test.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FOUNDER SERIES PREVIEW ── */}
      <section className="py-24 bg-[#F8F7F3]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00C96B]/10 border border-[#00C96B]/20 mb-6">
              <span className="text-sm font-medium text-[#00C96B] tracking-widest uppercase">
                Founder Series
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-[#0A0F0D]">
              Built for real founders. Not demos.
            </h2>
          </motion.div>

          {/* Featured Case Study Card - Linkup OS */}
          {FOUNDER_SERIES.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="bg-white border border-[rgba(10,15,13,0.08)] shadow-[0_4px_16px_rgba(10,15,13,0.08),0_1px_4px_rgba(10,15,13,0.04)] hover:border-[rgba(0,201,107,0.30)] hover:shadow-[0_12px_40px_rgba(10,15,13,0.10)] transition-all duration-200 overflow-hidden">
                <div className="grid md:grid-cols-5">
                  {/* Left Panel - 60% (3 columns) */}
                  <div className="md:col-span-3 p-8 md:p-12">
                    {/* Founder Info */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-[#0A0F0D] mb-2">
                        {FOUNDER_SERIES[0].founder}
                      </h3>
                      <p className="text-[#52665E] text-lg">
                        {FOUNDER_SERIES[0].founder_bio}
                      </p>
                    </div>

                    {/* Product Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00C96B]/10 border border-[#00C96B]/20 mb-4">
                      <span className="text-sm font-semibold text-[#00C96B]">
                        {FOUNDER_SERIES[0].product}
                      </span>
                    </div>

                    {/* Tagline */}
                    <h4 className="text-xl font-display font-bold text-[#0A0F0D] mb-4">
                      {FOUNDER_SERIES[0].tagline}
                    </h4>

                    {/* Description */}
                    <p className="text-[#52665E] leading-relaxed mb-6">
                      {FOUNDER_SERIES[0].description}
                    </p>

                    {/* What I Built List */}
                    <div className="mb-8">
                      <h5 className="text-lg font-bold text-[#0A0F0D] mb-4">
                        What I built:
                      </h5>
                      <ul className="space-y-2">
                        {FOUNDER_SERIES[0].built.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-[#52665E]"
                          >
                            <div className="w-1.5 h-1.5 bg-[#00C96B] mt-2.5 flex-shrink-0" />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={`/work/${FOUNDER_SERIES[0].slug}`}
                        className="group px-6 py-3 bg-[#00C96B] text-[#0A0F0D] font-semibold hover:bg-[#00A855] transition-all flex items-center justify-center gap-2"
                      >
                        View Case Study
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>

                      <a
                        href={FOUNDER_SERIES[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-6 py-3 bg-white border border-[rgba(10,15,13,0.12)] text-[#0A0F0D] font-semibold hover:border-[rgba(0,201,107,0.30)] hover:bg-[#F8F7F3] transition-all flex items-center justify-center gap-2"
                      >
                        Live Demo
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Right Panel - 40% (2 columns) */}
                  <div className="md:col-span-2 bg-[#0A0F0D] p-8 md:p-12 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-4xl md:text-6xl font-display font-bold text-white transform -rotate-12">
                        {FOUNDER_SERIES[0].product}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-32 relative border-t border-emerald-500/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Founders Are Saying
            </h2>
            {/* ── More specific than "Real people, real results" ── */}
            <p className="text-xl text-gray-400">
              After they shipped in 7 days — and what happened next
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((test, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-emerald-500/10 p-8 hover:border-emerald-500/30 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center font-bold text-black">
                    {test.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{test.name}</div>
                    <div className="text-sm text-gray-400">{test.role}</div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-4">
                  "{test.quote}"
                </p>

                {/* ── Result badge — makes the outcome visible ── */}
                <div className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 inline-block">
                  {test.company}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Added: nudge to add real LinkedIn proof ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-sm text-gray-600">
              Want to see the products live?{" "}
              <button
                onClick={() => scrollToSection("work")}
                className="text-emerald-400/60 hover:text-emerald-400 transition-colors underline underline-offset-2"
              >
                View our case studies →
              </button>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIAL SECTION ── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Large primary open quote SVG icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <svg
                className="w-16 h-16 mx-auto text-[#00C96B]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>
            </motion.div>

            {/* Quote in large italic serif */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display italic text-[#0A0F0D] mb-8 leading-tight text-balance"
            >
              "I can't believe it's actually real."
            </motion.blockquote>

            {/* Attribution */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-[#52665E] mb-8"
            >
              Founder, after Day 7 of their MVP sprint
            </motion.p>

            {/* Supporting proof line with stats */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-sm text-[#9BB0A7] max-w-2xl mx-auto"
            >
              15+ MVPs Shipped · 4+ Years Building · 500K+ App Downloads · Real Code You Own
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        id="faq"
        className="py-24 bg-[#F8F7F3]"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-[#0A0F0D]">
              Common questions.
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-0">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-[rgba(10,15,13,0.08)] first:rounded-t-none last:rounded-b-none">
                <AccordionTrigger className="text-lg font-bold text-[#0A0F0D] hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#52665E] leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-[#52665E] mb-4">Still have questions?</p>
            <a
              href="https://wa.me/923111961963"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Chat with me on WhatsApp</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-24 bg-[#0A0F0D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Primary eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00C96B]/10 border border-[#00C96B]/20 mb-6">
              <span className="text-sm font-medium text-[#00C96B] tracking-widest uppercase">
                Ready to build?
              </span>
            </div>

            {/* Heading in italic serif */}
            <h2 className="text-4xl md:text-5xl font-display italic font-bold mb-6 text-white text-balance">
              One conversation. Zero commitment. Full clarity.
            </h2>

            {/* Subtext explaining 30-min Idea Call */}
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a free 30-minute Idea Call. We'll map your concept, define the sprint scope, and show you exactly how we'll build it. No pitch. No pressure.
            </p>

            {/* CTAs with sharp corners */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="https://heyismail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-[#00C96B] text-[#0A0F0D] font-semibold hover:bg-[#00A855] transition-all flex items-center gap-2"
              >
                Book Your Free Call →
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <a
                href="https://linkedin.com/in/heyismail"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold hover:bg-white/5 hover:border-white/30 transition-all"
              >
                DM me on LinkedIn
              </a>
            </div>

            {/* Reassurance text below */}
            <p className="text-white/50 text-sm">
              No pressure. No pitch. Just clarity on whether this is right for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-emerald-500/10 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div>
              <div className="text-xl font-semibold mb-2 flex items-center gap-2">
                <span>heyIsmail</span>
                <Image
                  src={"/green-dot.png"}
                  width={12}
                  height={12}
                  alt="heyIsmail"
                  className="mt-2.5 -ml-1.75"
                />
              </div>
              {/* ── Footer tagline now matches LinkedIn positioning ── */}
              <p className="text-sm text-gray-500">
                Idea to live MVP in 7 days.
              </p>
            </div>

            <div className="flex items-center gap-8">
              <button
                onClick={() => scrollToSection("work")}
                className="text-gray-400 hover:text-emerald-400 transition text-sm"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-gray-400 hover:text-emerald-400 transition text-sm"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-400 hover:text-emerald-400 transition text-sm"
              >
                FAQ
              </button>
              <a
                href="https://wa.me/923111961963"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition text-sm"
              >
                Contact
              </a>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center text-gray-600 text-sm pt-8 border-t border-emerald-500/10">
            © {new Date().getFullYear()} heyIsmail. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default heyIsmailLanding;
