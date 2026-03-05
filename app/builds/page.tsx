"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BUILDS } from "@/app/data";
import { Button } from "@/components/ui/button";

// Note: Metadata should be added to layout.tsx or a separate metadata file for this route
// For now, keeping as client component for animations

export default function BuildsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Primary hero section */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <span className="text-xs font-bold text-accent tracking-[0.14em] uppercase">
                Concept Builds
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-balance leading-[0.95]">
              Real platforms built for real audiences.
            </h1>

            {/* Subtext */}
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Every case study represents a real founder with a real problem. No demos, no templates — just custom MVPs that solve actual business challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Builds grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {/* Render build cards */}
            {BUILDS.map((build, index) => (
              <motion.div
                key={build.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="max-w-6xl mx-auto"
              >
                <div className="bg-light border border-[rgba(25,69,58,0.10)] rounded-2xl shadow-card hover:shadow-card-md hover:border-[rgba(121,206,184,0.40)] transition-all duration-200 overflow-hidden">
                  <div className="grid md:grid-cols-5">
                    {/* Left Panel - Content (60% - 3 columns) */}
                    <div className="md:col-span-3 p-8 md:p-12">
                      {/* Creator Info */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-dark mb-2">
                          {build.creator}
                        </h3>
                        <p className="text-dark/70 text-lg">
                          {build.creator_bio}
                        </p>
                      </div>

                      {/* Product Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full mb-4">
                        <span className="text-sm font-semibold text-accent">
                          {build.product}
                        </span>
                      </div>

                      {/* Tagline */}
                      <h4 className="text-xl font-bold text-dark mb-4">
                        {build.tagline}
                      </h4>

                      {/* Description */}
                      <p className="text-dark/70 leading-relaxed mb-6">
                        {build.description}
                      </p>

                      {/* What I Built List */}
                      <div className="mb-8">
                        <h5 className="text-lg font-bold text-dark mb-4">
                          What I built:
                        </h5>
                        <ul className="space-y-2">
                          {build.built.map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-dark/70"
                            >
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button asChild variant="primary">
                          <Link href={`/builds/${build.slug}`}>
                            View Full Build
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
                          </Link>
                        </Button>

                        <Button asChild variant="secondary">
                          <a
                            href={build.url}
                            target="_blank"
                            rel="noopener noreferrer"
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
                        </Button>
                      </div>
                    </div>

                    {/* Right Panel - Product Name (40% - 2 columns) */}
                    <div 
                      className="md:col-span-2 p-8 md:p-12 flex items-center justify-center"
                      style={{ backgroundColor: build.bg }}
                    >
                      <div className="text-center">
                        <h3 
                          className="text-4xl md:text-6xl font-bold transform -rotate-12"
                          style={{ color: build.accent }}
                        >
                          {build.product}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* More Coming Soon card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: BUILDS.length * 0.1 }}
              className="max-w-6xl mx-auto"
            >
              <div className="bg-light border-2 border-dashed border-[rgba(25,69,58,0.15)] rounded-2xl p-8 md:p-12 text-center">
                <h3 className="text-2xl font-bold text-dark mb-4">
                  More Coming Soon
                </h3>
                <p className="text-dark/70 leading-relaxed mb-6">
                  Currently building MVPs for these founders. Case studies will be published as they go live.
                </p>
                
                {/* Upcoming founders list */}
                <div className="flex flex-wrap justify-center gap-4">
                  {["Eric Partaker", "Chris Donnelly", "Matt Gray"].map((founder, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-light border border-[rgba(25,69,58,0.08)] rounded-lg text-dark/70 font-medium"
                    >
                      {founder}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}