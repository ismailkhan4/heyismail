"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { aboutContent } from "../data";
import Navigation from "../components/Navigation";

export default function AboutPage() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        
        const handleMouseMove = (
            e: React.MouseEvent<Element, MouseEvent> | MouseEvent
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
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
                            {aboutContent.originStory.title}
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                            That failure taught me the most important lesson of my career. Now I help non-technical founders build MVPs that actually ship — and succeed.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="https://cal.com/heyismail/15min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group px-8 py-4 bg-white text-black font-medium hover:scale-105 transition-all flex items-center gap-2"
                            >
                                Let's talk about your idea
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
                                href="/builds"
                                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
                            >
                                See My Work
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Origin Story Section */}
            <section className="py-32 relative border-t border-emerald-500/10">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                            The project that changed everything
                        </h2>

                        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-emerald-500/10 rounded-2xl p-8">
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    {aboutContent.originStory.content}
                                </p>

                                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-6 mt-8">
                                    <p className="text-emerald-100 font-semibold text-lg italic text-center">
                                        "{aboutContent.originStory.lesson}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Who I Am Section */}
            <section className="py-32 relative border-t border-emerald-500/10">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Who I am
                        </h2>
                        <p className="text-xl text-gray-400">
                            4+ years building products that founders actually need
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-emerald-500/10 rounded-2xl p-6">
                                <h3 className="text-xl font-bold mb-3 text-emerald-100">Ismail Muhammad</h3>
                                <p className="text-gray-400 mb-4">
                                    AI-accelerated SaaS MVP developer based in Lahore, Pakistan. I help non-technical founders turn their ideas into production-ready products in 7 days.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs text-emerald-400">
                                        Next.js Expert
                                    </span>
                                    <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs text-emerald-400">
                                        AI-Accelerated Development
                                    </span>
                                    <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs text-emerald-400">
                                        MVP Specialist
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/5 border border-emerald-500/10 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-emerald-400">15+</div>
                                    <div className="text-sm text-gray-400">MVPs Shipped</div>
                                </div>
                                <div className="bg-white/5 border border-emerald-500/10 rounded-lg p-4 text-center">
                                    <div className="text-2xl font-bold text-emerald-400">500K+</div>
                                    <div className="text-sm text-gray-400">App Downloads</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <div className="w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-2xl flex items-center justify-center">
                                <div className="text-6xl font-bold text-emerald-400">IM</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Work With Me Section */}
            <section className="py-32 relative border-t border-emerald-500/10">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Why work with me
                        </h2>
                        <p className="text-xl text-gray-400">
                            3 things that set me apart from agencies and other developers
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {aboutContent.differentiators.map((diff, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-emerald-500/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-all"
                            >
                                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">
                                    {i === 0 ? "🧠" : i === 1 ? "⚡" : "🔓"}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-emerald-100 transition-colors">
                                    {diff.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {diff.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 text-center"
                    >
                        <div className="inline-block bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-4">Ready to build your MVP?</h3>
                            <p className="text-gray-300 mb-6 max-w-md mx-auto">
                                Let's turn your idea into a real product that customers will pay for. No sales pitch, just an honest conversation about what you're building.
                            </p>
                            <a
                                href="https://cal.com/heyismail/15min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-black font-semibold hover:scale-105 transition-all"
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
        </div>
    );
};