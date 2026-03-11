"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ConceptBuild } from "../../data";
import Navigation from "../../components/Navigation";

interface BuildDetailClientProps {
  build: ConceptBuild;
}

const BuildDetailClient: React.FC<BuildDetailClientProps> = ({ build }) => {
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
          className="absolute top-1/4 -left-48 w-96 h-96 bg-[#2f6d5e] rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#1e473d] rounded-full filter blur-3xl opacity-20"
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
            {/* Creator Badge */}
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-[#2f6d5e] to-[#1e473d] rounded-full flex items-center justify-center text-black font-bold text-sm">
                {build.creator.picture ? (
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src={build.creator.picture}
                      alt={build.creator.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-8 h-8 bg-gradient-to-br from-[#2f6d5e] to-[#1e473d] rounded-full flex items-center justify-center text-black font-bold text-lg">
                    {build.creator.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-white">{build.creator.name}</div>
                <div className="text-xs text-gray-400">{build.creator.followers} followers</div>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2f6d5e] to-[#2f6d5e]">
                {build.product.name}
              </span>
            </motion.h1>

            <motion.p
              className="text-2xl text-[#2f6d5e] font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {build.product.tagline}
            </motion.p>

            <motion.p
              className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {build.product.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {build.links.demo && (
                <a
                  href={build.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-gradient-to-r from-[#2f6d5e] to-[#1e473d] text-black text-lg font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#2f6d5e]/50"
                >
                  <span className="relative z-10">View Live Demo</span>
                </a>
              )}
              <a
                href="/builds"
                className="group relative px-8 py-4 bg-white/5 border border-white/10 text-white text-lg font-semibold rounded-lg overflow-hidden transition-all hover:scale-105 hover:bg-white/10"
              >
                <span className="relative z-10">← Back to All Builds</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Features List */}
            <div>
              <h2 className="text-4xl font-bold mb-8">What I built</h2>
              <div className="space-y-6">
                {build.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-[#2f6d5e] to-[#1e473d] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-black text-sm font-bold">✓</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Dashboard Image */}
            <div className="flex items-center justify-center">
              <motion.div
                className="relative w-full max-w-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {build.product.image ? (
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={build.product.image}
                      alt={`${build.product.name} Dashboard`}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 transform hover:scale-105 transition-transform duration-300">
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="h-6 bg-gradient-to-r from-[#2f6d5e] to-[#1e473d] rounded w-32"></div>
                        <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                      </div>

                      {/* Content blocks */}
                      <div className="space-y-4">
                        <div className="h-4 bg-white/20 rounded w-full"></div>
                        <div className="h-4 bg-white/10 rounded w-4/5"></div>
                        <div className="h-4 bg-white/10 rounded w-3/4"></div>
                      </div>

                      {/* Feature cards */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-16 bg-[#2f6d5e]/20 rounded-lg"></div>
                        <div className="h-16 bg-[#1e473d]/20 rounded-lg"></div>
                        <div className="h-16 bg-white/10 rounded-lg"></div>
                        <div className="h-16 bg-white/10 rounded-lg"></div>
                      </div>

                      {/* CTA */}
                      <div className="h-12 bg-gradient-to-r from-[#2f6d5e] to-[#1e473d] rounded-lg flex items-center justify-center">
                        <span className="text-black font-semibold text-sm">{build.product.name}</span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Process Section */}
      <section className="py-20 px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">My research process</h2>
            <p className="text-xl text-gray-400">
              How I studied {build.creator.name}'s methodology before writing a single line of code
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#2f6d5e]/10 to-[#1e473d]/10 border border-[#2f6d5e]/20 p-8 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2f6d5e] to-[#1e473d] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-black text-xl">💡</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Deep dive analysis</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {build.researchNote}
                </p>
              </div>
            </div>
          </div>

          {/* Research steps */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
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
                className="text-center p-6 bg-white/5 border border-white/10 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-[#2f6d5e] mb-3">{item.step}</div>
                <h4 className="font-semibold text-white mb-3">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Profile Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">About {build.creator.name}</h2>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 rounded-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 bg-gradient-to-br from-[#2f6d5e] to-[#1e473d] rounded-full flex items-center justify-center text-black font-bold text-2xl flex-shrink-0">
                {build.creator.picture ? (
                  <div className="w-24 h-24 rounded-full overflow-hidden">
                    <Image
                      src={build.creator.picture}
                      alt={build.creator.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 bg-gradient-to-br from-[#2f6d5e] to-[#1e473d] rounded-full flex items-center justify-center text-black font-bold text-lg">
                    {build.creator.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">{build.creator.name}</h3>
                <p className="text-lg text-[#2f6d5e] mb-4">{build.creator.title}</p>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full">
                    <span className="text-sm text-gray-300">{build.creator.followers} followers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-[#2f6d5e]/10 to-[#1e473d]/10 border-t border-[#2f6d5e]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Want me to build your platform?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I can study your methodology and build a platform that captures your unique teaching style.
            Let's turn your expertise into software.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2f6d5e] to-[#1e473d] text-black text-lg font-semibold hover:scale-105 transition-transform"
            >
              Let's talk about your idea
              <span>→</span>
            </a>
            <a
              href="/builds"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white text-lg font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              See more builds
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuildDetailClient;