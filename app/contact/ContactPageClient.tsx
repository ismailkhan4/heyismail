"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { contactOptions, contactFinePrint } from "../data";
import Navigation from "../components/Navigation";

export default function ContactPageClient() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
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
      {/* Custom Cursor Effect */}
      {isMounted && (
        <div
          className="fixed w-96 h-96 pointer-events-none z-50 transition-opacity duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
            opacity: 0.6,
          }}
        />
      )}

      {/* Navbar */}
      <Navigation onSectionScroll={scrollToSection} isHomePage={false} />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.05) 1px, transparent 1px)`,
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        <motion.div
          className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
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
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">
                No pressure, just honest advice
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              Tell me your idea.
              <br />
              <span className="bg-gradient-to-r from-[#d9e8d5] via-white to-[#1e473d] bg-clip-text text-transparent">
                I'll tell you if a sprint is right for it.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Not every idea needs a 7-day sprint. Some need more research, some
              need different approaches, and some aren't ready yet. Let's figure
              out what's right for yours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-32 relative border-t border-emerald-500/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Two ways to get started
            </h2>
            <p className="text-xl text-gray-400">
              Choose what feels right for you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {contactOptions.map((option, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative bg-gradient-to-br ${
                  option.primary
                    ? "from-emerald-500/10 to-teal-500/10 border-emerald-500/30"
                    : "from-white/5 to-white/[0.02] border-white/10"
                } backdrop-blur-sm border rounded-3xl p-8 hover:border-emerald-500/50 transition-all`}
              >
                {option.primary && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-1 bg-emerald-500 text-black text-xs font-semibold rounded-full">
                      Recommended
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                    {option.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {option.title}
                  </h3>

                  <p className="text-gray-300 mb-8 leading-relaxed">
                    {option.description}
                  </p>

                  {/* Benefits or Instructions */}
                  <div className="mb-8">
                    {option.benefits ? (
                      <div>
                        <h4 className="font-semibold text-white mb-4 text-left">
                          What you'll get:
                        </h4>
                        <ul className="space-y-3 text-left">
                          {option.benefits.map((benefit, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <svg
                                className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5"
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
                              <span className="text-gray-300 text-sm leading-relaxed">
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div>
                        <h4 className="font-semibold text-white mb-4 text-left">
                          How it works:
                        </h4>
                        <ol className="space-y-3 text-left">
                          {option.instructions?.map((instruction, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <div className="w-6 h-6 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-emerald-400 text-xs font-semibold">
                                  {j + 1}
                                </span>
                              </div>
                              <span className="text-gray-300 text-sm leading-relaxed">
                                {instruction}
                              </span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </div>

                  <a
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-8 py-4 font-semibold transition-all ${
                      option.primary
                        ? "bg-emerald-500 text-black hover:scale-105"
                        : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                    }`}
                  >
                    {option.cta}
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
            ))}
          </div>
        </div>
      </section>

      {/* Fine Print Section */}
      <section className="py-16 relative border-t border-emerald-500/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              The fine print (it's actually good news)
            </h3>

            <div className="space-y-4 text-gray-300">
              {contactFinePrint.map((point, i) => (
                <div key={i} className="flex items-start gap-3 justify-center">
                  <svg
                    className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5"
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
                  <p className="text-left max-w-2xl">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-gray-500 text-sm italic">
                "I'd rather have an honest conversation that doesn't lead to
                work than waste both our time with a bad fit."
              </p>
              <p className="text-gray-400 text-sm mt-2">— Ismail Muhammad</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
