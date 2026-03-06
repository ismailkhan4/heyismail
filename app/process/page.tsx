"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { detailedProcessSteps, scopeCallStages } from "../data";
import Navigation from "../components/Navigation";

const ProcessPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  return (
    <div className="bg-black text-white font-sans antialiased">
      {/* Custom Cursor Effect */}
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

      {/* Navbar */}
      <Navigation />

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
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">
                Complete transparency, no surprises
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              You'll know exactly what's happening
              <br />
              <span className="bg-gradient-to-r from-[#d9e8d5] via-white to-[#1e473d] bg-clip-text text-transparent">
                every single day
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              No black boxes. No "we'll figure it out as we go." Here's the
              exact 7-day process that turns your idea into a live product that
              real customers can use and pay for.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://cal.com/heyismail/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white text-black font-medium rounded-lg hover:scale-105 transition-all flex items-center gap-2"
              >
                Book a Free Idea Call
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
                href="#scope-call"
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-all"
              >
                See the Process
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scope Call Section */}
      <section
        id="scope-call"
        className="py-32 relative border-t border-emerald-500/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Before we start: The 30-minute scope call
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              This isn't a sales pitch. It's a working session where we turn
              your idea into a buildable plan. Here's exactly what happens in
              those 30 minutes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {scopeCallStages.map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-emerald-500/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {stage.icon}
                </div>
                <div className="text-xs text-emerald-400 font-semibold mb-2 uppercase tracking-wide">
                  {stage.stage} • {stage.duration}
                </div>
                <h3 className="text-lg font-bold mb-3">{stage.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-block bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-3">
                What you get after the call
              </h3>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">
                Within 24 hours, you'll receive a detailed scope document with
                exactly what we're building, what we're not building, and why.
                No surprises, no scope creep.
              </p>
              <a
                href="https://cal.com/heyismail/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-black font-semibold rounded-lg hover:scale-105 transition-all"
              >
                Book Your Scope Call
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

      {/* Detailed Process Steps */}
      <section className="py-32 relative border-t border-emerald-500/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The 7-day sprint breakdown
            </h2>
            <p className="text-xl text-gray-400">
              Here's what happens each day, what you can expect, and what you'll
              receive
            </p>
          </motion.div>

          <div className="space-y-16">
            {detailedProcessSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-gradient-to-br ${step.color} backdrop-blur-sm border ${step.borderColor} rounded-3xl p-8 lg:p-12 hover:border-opacity-50 transition-all group`}
              >
                {/* Day indicator */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <div>
                    <div className="text-sm text-emerald-400 font-semibold uppercase tracking-wide">
                      {step.day}
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {step.subtitle}
                    </div>
                  </div>
                </div>

                {/* Title and description */}
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white leading-tight">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {step.description}
                </p>

                {/* Two column layout for activities and deliverables */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Activities */}
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-white">
                      What happens
                    </h4>
                    <ul className="space-y-3">
                      {step.activities.map((activity, j) => (
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
                              d="M9 12l2 2 4-4"
                            />
                          </svg>
                          <span className="text-gray-300 text-sm leading-relaxed">
                            {activity}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-white">
                      What you get
                    </h4>
                    <ul className="space-y-3">
                      {step.deliverables.map((deliverable, j) => (
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
                          <span className="text-gray-300 text-sm leading-relaxed font-semibold">
                            {deliverable}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-32 relative border-t border-emerald-500/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to turn your idea into reality?
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Book a free 30-minute call. I'll tell you exactly what it would
                take to build your MVP and whether a 7-day sprint is right for
                your idea.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="https://cal.com/heyismail/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-black text-lg font-semibold rounded-xl hover:scale-105 transition-all flex items-center gap-3 shadow-lg shadow-emerald-500/25"
                >
                  Book a Free Idea Call
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

                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-2">
                    Or message me directly
                  </p>
                  <a
                    href="https://www.linkedin.com/in/heyismail"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
                  >
                    LinkedIn: @heyismail
                  </a>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-white/10">
                <p className="text-gray-500 text-sm">
                  No sales pitch. No pressure. Just an honest conversation about
                  your idea and whether I can help you build it.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;
