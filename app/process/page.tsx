"use client";

import { motion } from "framer-motion";
import { PROCESS } from "../data";

export default function ProcessPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Primary hero section */}
            <section className="pt-32 pb-20 bg-[#19453A]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        {/* Eyebrow "The 7-Day Sprint" */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#79CEB8]/10 border border-[#79CEB8]/20 rounded-full mb-6">
                            <span className="text-xs font-bold text-[#79CEB8] tracking-[0.14em] uppercase">
                                The 7-Day Sprint
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-balance leading-[0.95]">
                            How a validated idea becomes a live product in one week.
                        </h1>

                        {/* Subtext */}
                        <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                            Every day has a clear purpose. Every step builds toward launch. No wasted time, no scope creep, just focused execution from concept to deployment.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Process days section */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="space-y-20">
                        {PROCESS.map((day, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                            >
                                {/* Large day number on left */}
                                <div className="lg:col-span-3">
                                    <div className="text-8xl md:text-9xl font-bold text-[#19453A]/20 leading-none">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Title and description on right */}
                                <div className="lg:col-span-9">
                                    <div className="space-y-4">
                                        <div className="text-xs font-bold text-[#79CEB8] tracking-[0.14em] uppercase">
                                            {day.day}
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-bold text-[#000807]">
                                            {day.title}
                                        </h3>
                                        <h4 className="text-xl font-bold text-[#000807] leading-tight">
                                            {day.headline}
                                        </h4>
                                        <p className="text-lg text-[#000807]/70 leading-relaxed max-w-2xl">
                                            {day.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scope call explanation section */}
            <section className="py-24 bg-[#FBF9FF]">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#000807]">
                            It all starts with the Idea Call.
                        </h2>
                        <p className="text-xl text-[#000807]/70 max-w-2xl mx-auto leading-relaxed">
                            Before Day 1, we spend 30 minutes getting crystal clear on what we're building and why.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#19453A] rounded-2xl p-8 md:p-12"
                    >
                        <h3 className="text-2xl font-bold text-white mb-8">
                            30-Minute Idea Call Timeline
                        </h3>

                        <div className="space-y-6">
                            {[
                                {
                                    time: "0-5 min",
                                    title: "Problem & Vision",
                                    description: "What problem are you solving? Who's your target user? What's the end goal?"
                                },
                                {
                                    time: "5-15 min",
                                    title: "Core Features",
                                    description: "What are the 3-5 features that make this an MVP? What can we skip for v1?"
                                },
                                {
                                    time: "15-25 min",
                                    title: "Technical Scope",
                                    description: "Authentication needs, payment requirements, integrations, and deployment preferences."
                                },
                                {
                                    time: "25-30 min",
                                    title: "Sprint Planning",
                                    description: "Timeline confirmation, deliverables overview, and next steps if we're a good fit."
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-[#79CEB8] text-[#19453A] font-bold text-sm flex items-center justify-center rounded-full">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <div className="text-[#79CEB8] text-sm font-medium mb-1">
                                            {item.time}
                                        </div>
                                        <h4 className="text-white font-semibold mb-2">
                                            {item.title}
                                        </h4>
                                        <p className="text-white/70 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Bottom CTA section */}
            <section className="py-24 bg-[#19453A]">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Simple heading */}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                            Ready to start your 7-day sprint?
                        </h2>

                        {/* Simple subtext */}
                        <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
                            Book a free 30-minute call to discuss your idea.
                        </p>

                        {/* Single CTA */}
                        <a
                            href="https://heyismail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#79CEB8] text-[#19453A] font-bold text-sm rounded-xl hover:bg-[#6bbfaa] transition-all duration-150"
                        >
                            Book Your Free Call
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
        </div>
    );
}