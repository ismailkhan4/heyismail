"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { conceptBuilds } from "../data";
import Navigation from "../components/Navigation";

const BuildsPage = () => {
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
              <span className="text-sm text-gray-300">Concept Builds</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              What I build when
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                nobody's watching
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              These aren't client projects. They're skill demonstrations. I study successful creators and entrepreneurs, 
              then build what I think their premium platforms should look like. Each build teaches me something new 
              about turning expertise into software.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <button
                onClick={() => scrollToSection("builds")}
                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-black text-lg font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50"
              >
                <span className="relative z-10">See the builds</span>
              </button>
              <a
                href="/contact"
                className="group relative px-8 py-4 bg-white/5 border border-white/10 text-white text-lg font-semibold overflow-hidden transition-all hover:scale-105 hover:bg-white/10"
              >
                <span className="relative z-10">Build something together</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Concept Builds Section */}
      <section id="builds" className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Three complete builds
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Each build represents weeks of research, analysis, and development. 
              I study how these creators teach, then build platforms that capture their methodology.
            </p>
          </div>

          <div className="space-y-20">
            {conceptBuilds.map((build, index) => (
              <motion.div
                key={index}
                className="grid md:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Content Side */}
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  {/* Creator Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-black font-bold text-lg">
                      {build.creator.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{build.creator.name}</h3>
                      <p className="text-sm text-gray-400">{build.creator.title}</p>
                      <div className="inline-flex items-center gap-1 mt-1 px-2 py-1 bg-white/5 rounded-full text-xs text-gray-300">
                        <span>{build.creator.followers} followers</span>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="mb-6">
                    <h4 className="text-3xl font-bold text-white mb-2">{build.product.name}</h4>
                    <p className="text-lg text-emerald-400 font-medium mb-4">{build.product.tagline}</p>
                    <p className="text-gray-300 leading-relaxed">{build.product.description}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h5 className="font-semibold text-white mb-4">What I built:</h5>
                    <ul className="space-y-3">
                      {build.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Research Note */}
                  <div className="bg-white/5 border border-white/10 p-6 rounded-lg mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0">💡</div>
                      <div>
                        <h6 className="font-medium text-white mb-2">Research approach</h6>
                        <p className="text-gray-300 text-sm leading-relaxed">{build.researchNote}</p>
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    {build.links.demo && (
                      <a
                        href={build.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors"
                      >
                        View demo
                        <span>↗</span>
                      </a>
                    )}
                    <a
                      href={`/builds/${build.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-black text-sm font-medium hover:scale-105 transition-transform"
                    >
                      Read case study
                      <span>→</span>
                    </a>
                  </div>
                </div>

                {/* Visual Side */}
                <div className={`${index % 2 === 1 ? "md:order-1" : ""} flex items-center justify-center`}>
                  <div className="relative w-full max-w-sm">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                      <div className="space-y-4">
                        <div className="h-4 bg-white/20 rounded w-3/4"></div>
                        <div className="h-3 bg-white/10 rounded w-full"></div>
                        <div className="h-3 bg-white/10 rounded w-5/6"></div>
                        <div className="space-y-2 pt-4">
                          <div className="h-8 bg-emerald-500/20 rounded"></div>
                          <div className="h-8 bg-white/5 rounded"></div>
                          <div className="h-8 bg-white/5 rounded"></div>
                        </div>
                        <div className="pt-4">
                          <div className="h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded text-black flex items-center justify-center text-sm font-medium">
                            {build.product.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More Builds Coming Section */}
      <section className="py-20 px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            More builds in progress
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm constantly studying new creators and building platforms around their methodologies. 
            Each build helps me understand different approaches to turning expertise into software products.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Creator OS", desc: "A comprehensive platform for content creators" },
              { name: "Coach Hub", desc: "A platform for business coaches and consultants" },
              { name: "Expert System", desc: "A knowledge management platform for experts" }
            ].map((item, index) => (
              <div key={index} className="p-6 border-2 border-dashed border-white/20 bg-white/5 rounded-lg">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white/40">⚡</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors"
          >
            Get notified of new builds
            <span>→</span>
          </a>
        </div>
      </section>

      {/* Why I Build These Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why I build these
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-8">
                Every expert deserves great software
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="font-semibold text-white mb-3 text-lg">I study before I build</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Most developers build what they think users want. I spend weeks studying how successful 
                    creators actually teach and operate their businesses. The software comes after the understanding.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-3 text-lg">Each build teaches me something new</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Jasmin taught me about community-driven learning. Chris showed me the power of step-by-step systems. 
                    Eric demonstrated how to gamify productivity. Every build expands my toolkit.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-3 text-lg">This is how I stay sharp</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Client work pays the bills, but concept builds keep me learning. They let me experiment with 
                    new technologies, design patterns, and business models without the pressure of deadlines.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-black text-2xl">💡</span>
                  </div>
                  <h4 className="font-bold text-white mb-4 text-xl">The real goal</h4>
                  <p className="text-gray-300 leading-relaxed">
                    When you hire me to build your MVP, you're not just getting a developer. 
                    You're getting someone who has studied dozens of successful business models 
                    and knows how to turn expertise into software that actually works.
                  </p>
                </div>
                
                <div className="pt-6 border-t border-emerald-500/20">
                  <a
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-semibold hover:scale-105 transition-transform"
                  >
                    Let's build your platform
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-t border-emerald-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to build something together?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Tell me your idea. I'll tell you if a 7-day sprint is right for it. 
            Free 30-minute consultation with no sales pitch.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-black text-lg font-semibold hover:scale-105 transition-transform"
            >
              Let's talk about your idea
              <span>→</span>
            </a>
            <a
              href="/process"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              See how it works
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuildsPage;