"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Script from "next/script";
import {
  newFAQs,
  projects,
  whyNotOptions,
  processPreview,
  ownershipDetails,
  homepageStack,
  aiTools,
  mvpChecklist,
  conceptBuilds,
} from "./data";
import Navigation from "./components/Navigation";

const heyIsmailLanding = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);

    // if ("ontouchstart" in window) return;
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
    <div className="bg-black text-white font-sans antialiased">
      <Navigation onSectionScroll={scrollToSection} isHomePage={true} />
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.05) 1px, transparent 1px)`,
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-[#2f6d5e] rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">
                Available for new projects
              </span>
            </motion.div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
              You have the idea. Let's build the product.{" "}
              <span className="bg-gradient-to-r from-[#2f6d5e] via-[#d9e8d5] to-[#1e473d] bg-clip-text text-transparent">
                In 7 days.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              You're a non-technical founder with a validated idea. You need
              someone who can turn your vision into a real, working product that
              customers will pay for. That's exactly what I do.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://cal.com/heyismail/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-[#2f6d5e] text-white font-medium transition-all flex items-center gap-2"
              >
                Tell me about your idea
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
                href="#work"
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
              >
                See My Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative border-t border-[#2f6d5e]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              You've been stuck for longer than you should be
            </h2>
            <p className="text-xl text-gray-400">
              You know exactly why the other options haven't worked
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {whyNotOptions.map((option, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all group"
              >
                <div className="text-red-400 text-4xl mb-4">❌</div>
                <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                <div className="text-red-400 text-sm font-semibold mb-4">
                  {option.pain}
                </div>
                <ul className="space-y-2">
                  {option.problems.map((problem, j) => (
                    <li
                      key={j}
                      className="text-sm text-gray-400 flex items-start gap-2"
                    >
                      <span className="text-red-400">•</span>
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-[#2f6d5e]/10 to-[#1e473d]/10 border border-[#2f6d5e]/20 rounded-2xl p-8">
              <div className="text-[#2f6d5e] text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-3">
                Here's what you actually need
              </h3>
              <p className="text-gray-400 mb-6 max-w-md">
                A 7-day sprint that gives you a real product you own completely.
                No surprises, no disappearing acts, no learning curves.
              </p>
              <a
                href="https://cal.com/heyismail/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#2f6d5e] text-white font-semibold transition-all"
              >
                Let's talk about your idea
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Preview Section */}
      <section className="py-32 relative border-t border-[#2f6d5e]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Here's exactly how we'll build it
            </h2>
            <p className="text-xl text-gray-400">
              5 focused days. No surprises. Complete ownership.
            </p>
          </motion.div>

          {/* Process Cards */}
          <div className="grid md:grid-cols-5 gap-6 mb-16">
            {processPreview.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-[#2f6d5e]/10 rounded-2xl p-6 hover:border-[#2f6d5e]/30 transition-all group text-center"
              >
                <div className="text-4xl mb-4 transition-transform">
                  {step.icon}
                </div>
                <div className="text-xs text-[#2f6d5e] font-semibold mb-2 uppercase tracking-wide">
                  {step.day}
                </div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Ownership Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#2f6d5e]/10 to-[#1e473d]/10 border border-[#2f6d5e]/20 rounded-2xl p-8 mb-16"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              What you receive on Day 8
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              {ownershipDetails.slice(0, 4).map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#2f6d5e] flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-4 gap-4 mt-4">
              {ownershipDetails.slice(4).map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#2f6d5e] flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stack Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-xl font-bold mb-6">Built with modern tech</h3>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {homepageStack.map((tech, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${tech.color} cursor-default`}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>

            <h4 className="text-lg font-semibold mb-4 text-gray-300">
              Powered by AI
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {aiTools.map((tool, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${tool.color} cursor-default`}
                >
                  {tool.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MVP Checklist Section */}
      <section className="py-32 relative border-t border-[#2f6d5e]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The 7 non-negotiables
            </h2>
            <p className="text-xl text-gray-400">
              Every MVP I ship includes these essentials. No exceptions.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {mvpChecklist.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white/5 border border-[#2f6d5e]/10 rounded-2xl p-6 hover:border-[#2f6d5e]/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="flex-shrink-0 w-8 h-8 bg-[#2f6d5e]/20 border border-[#2f6d5e]/30 rounded-lg flex items-center justify-center group-hover:bg-[#2f6d5e]/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <svg
                        className="w-5 h-5 text-[#2f6d5e]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 text-white group-hover:text-[#d9e8d5] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <div className="inline-block bg-gradient-to-r from-[#2f6d5e]/10 to-[#1e473d]/10 border border-[#2f6d5e]/20 rounded-2xl p-6">
                <p className="text-gray-300 mb-4">
                  These aren't nice-to-haves. They're the foundation of every
                  successful MVP.
                </p>
                <a
                  href="https://cal.com/heyismail/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#2f6d5e] text-black font-semibold transition-all"
                >
                  Let's talk about your idea
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="py-32 relative border-t border-[#2f6d5e]/10"
        id="work"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What I build when nobody's watching
            </h2>
            <p className="text-xl text-gray-400">
              I study successful creators and build what I think their platforms
              should look like
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-[#2f6d5e]/10 rounded-2xl p-8 hover:border-[#2f6d5e]/30 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2f6d5e]/20 to-[#1e473d]/20 border border-[#2f6d5e]/30 rounded-full flex items-center justify-center text-2xl font-bold overflow-hidden">
                  {conceptBuilds[0].creator.picture ? (
                    <Image
                      src={conceptBuilds[0].creator.picture}
                      height={64}
                      width={64}
                      alt={conceptBuilds[0].creator.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <span className="text-[#2f6d5e]">
                      {conceptBuilds[0].creator.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {conceptBuilds[0].creator.name}
                  </h3>
                  <p className="text-gray-400">
                    {conceptBuilds[0].creator.title}
                  </p>
                  <p className="text-[#2f6d5e] text-sm font-semibold">
                    {conceptBuilds[0].creator.followers} followers
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-2xl font-bold mb-2 text-[#d9e8d5]">
                  {conceptBuilds[0].product.name}
                </h4>
                <p className="text-lg text-gray-300 mb-4">
                  {conceptBuilds[0].product.tagline}
                </p>
                <p className="text-gray-400 leading-relaxed">
                  {conceptBuilds[0].product.description}
                </p>
              </div>

              {/* Features Preview */}
              <div className="mb-6">
                <h5 className="text-lg font-semibold mb-3 text-white">
                  What I built:
                </h5>
                <div className="grid md:grid-cols-2 gap-3">
                  {conceptBuilds[0].features.slice(0, 4).map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-[#2f6d5e] flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research Note */}
              <div className="bg-[#2f6d5e]/5 border border-[#2f6d5e]/20 rounded-lg p-4 mb-6">
                <p className="text-sm text-[#d9e8d5] italic">
                  "{conceptBuilds[0].researchNote}"
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/builds"
                  className="group px-6 py-3 bg-[#2f6d5e] text-black font-semibold transition-all flex items-center justify-center gap-2"
                >
                  See All Builds
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
                  href="https://cal.com/heyismail/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  Let's chat about it
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-400 max-w-2xl mx-auto">
              These aren't client projects. They're skill demonstrations. I
              study how successful people teach and build what I think their
              premium platforms should look like.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="faq" className="py-32 relative border-t border-[#2f6d5e]/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Questions you're probably asking
            </h2>
            <p className="text-xl text-gray-400">
              The honest answers to what you really want to know
            </p>
          </motion.div>

          <div className="space-y-6">
            {newFAQs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-[#2f6d5e]/10 rounded-xl p-6 hover:border-[#2f6d5e]/30 transition-all"
              >
                <h3 className="text-xl font-bold mb-3 text-[#2f6d5e]">
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-4">Still have questions?</p>
            <a
              href="https://cal.com/heyismail/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#2f6d5e] hover:text-[#d9e8d5] transition-colors"
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

      <section className="py-32 relative overflow-hidden border-t border-[#2f6d5e]/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2f6d5e]/10 via-transparent to-[#1e473d]/10" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2f6d5e]/10 border border-[#2f6d5e]/20 rounded-full mb-8">
              <span className="w-2 h-2 bg-[#2f6d5e] rounded-full animate-pulse" />
              <span className="text-sm text-[#2f6d5e]">
                Limited slots available
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Move Fast?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Book a free 15-minute call. We'll map your idea, estimate
              timeline, and show you exactly how we'll build it. No pitch. No
              pressure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://cal.com/heyismail/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-5 bg-[#2f6d5e] text-black text-lg font-bold transition-all flex items-center gap-2"
              >
                Tell me about your idea
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                href="https://wa.me/923111961963"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-white/5 border border-[#2f6d5e]/20 text-white text-lg font-semibold hover:bg-white/10 hover:border-[#2f6d5e]/40 transition-all"
              >
                Message on WhatsApp
              </a>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              ⚡ Response time: Under 2 hours
            </p>
          </motion.div>
        </div>
      </section>

      {/* JSON-LD FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: newFAQs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
};

export default heyIsmailLanding;
