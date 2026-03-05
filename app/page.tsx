import type { Metadata } from "next";
import React from "react";
import {
  SITE,
  HERO,
  STACK,
  AI_TOOLS,
  PROCESS,
  OWNERSHIP,
  CHECKLIST,
  BUILDS,
  FAQS,
} from "@/app/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Ismail Muhammad — SaaS MVP Developer",
  description: "I build SaaS MVPs in 7 days for non-technical founders. AI-accelerated development with 100% code ownership. Real products, not demos.",
};

export default function HomePage() {
  return (
    <div className="bg-dark text-dark font-sans antialiased">
      {/* ── HERO SECTION ── */}
      <section className="min-h-screen relative overflow-hidden bg-primary">
        {/* Subtle background elements */}
        <div className="absolute inset-0">
          {/* Simple geometric accent */}
          <div className="absolute top-20 right-20 w-2 h-32 bg-accent opacity-20" />
          <div className="absolute bottom-40 left-20 w-32 h-2 bg-accent opacity-20" />
        </div>

        {/* Main content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left column - Main content */}
              <div>
                {/* Professional badge */}
                {/* <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/10 border border-accent/20 mb-8">
                  <div className="w-2 h-2 bg-accent animate-pulse" />
                  <span className="text-accent font-semibold text-sm tracking-wide uppercase">
                    15+ MVPs Shipped • $12M+ Raised
                  </span>
                </div> */}

                {/* Powerful headline */}
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-14 mb-6">
                  {/* <span className="block"> */}
                  Turn your SaaS idea into reality in just 7 days
                  {/* </span> */}
                  {/* <span className="block text-accent">SaaS idea</span>
                  <span className="block">into reality</span> */}
                </h1>

                {/* <p className="text-2xl md:text-3xl font-light text-white/70 mb-8">
                  in just <span className="text-accent font-bold">7 days</span>
                </p> */}

                {/* Value proposition */}
                <p className="text-lg text-white/80 mb-10 max-w-xl leading-relaxed">
                  AI-accelerated MVP development for non-technical founders.
                  <span className="text-white font-semibold">
                    {" "}
                    Fixed price, complete ownership, proven results.
                  </span>
                </p>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={SITE.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-8 py-4 bg-accent text-primary font-bold text-lg hover:bg-accent/90 transition-all duration-200 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
                  >
                    Book Free Strategy Call
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
                    href="/builds"
                    className="group px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-200 flex items-center justify-center gap-3"
                  >
                    View Portfolio
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
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

              {/* Right column - Simple showcase */}
              <div className="relative">
                {/* Clean showcase card */}
                <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8">
                  {/* Simple process */}
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-xl font-bold text-white mb-2">
                        7-Day Process
                      </h3>
                      <p className="text-white/60">From idea to live product</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-accent flex items-center justify-center text-primary font-bold text-sm">
                        1
                      </div>
                      <div className="text-white">Define & Plan</div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-accent flex items-center justify-center text-primary font-bold text-sm">
                        2
                      </div>
                      <div className="text-white">Build & Develop</div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-accent flex items-center justify-center text-primary font-bold text-sm">
                        3
                      </div>
                      <div className="text-white">Deploy & Deliver</div>
                    </div>
                  </div>

                  {/* Simple guarantee */}
                  <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <div className="text-accent font-semibold">
                      100% Code Ownership
                    </div>
                    <div className="text-white/60 text-sm">
                      Complete handover on Day 7
                    </div>
                  </div>
                </div>

                {/* Simple floating accent */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ── */}
      <section className="py-12 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                15+
              </div>
              <div className="text-sm text-muted-foreground">MVPs Shipped</div>
            </div>

            <div className="flex flex-col items-center md:border-l border-border md:pl-8">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                7
              </div>
              <div className="text-sm text-muted-foreground">
                Days Per Sprint
              </div>
            </div>

            <div className="flex flex-col items-center md:border-l border-border md:pl-8">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                4+
              </div>
              <div className="text-sm text-muted-foreground">
                Years Building
              </div>
            </div>

            <div className="flex flex-col items-center md:border-l border-border md:pl-8">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                500K+
              </div>
              <div className="text-sm text-muted-foreground">App Downloads</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM/SOLUTION SECTION ── */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="text-label text-primary">The Gap I Work In</span>
            </div>

            {/* Heading */}
            <h2 className="text-section text-dark mb-4">
              Every founder with a validated idea hits the same wall.
            </h2>
          </div>

          {/* Two-column comparison */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Problem Card */}
            <div className="group bg-white border-l-4 border-danger p-8 rounded-2xl hover:shadow-card-md transition-all duration-200">
              <h3 className="text-card text-dark mb-6">The old way</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-dark/80">
                  <span className="text-danger text-lg mt-1">•</span>
                  <span className="leading-relaxed">
                    Hire a dev team for $50K+ and wait 6 months
                  </span>
                </li>
                <li className="flex items-start gap-3 text-dark/80">
                  <span className="text-danger text-lg mt-1">•</span>
                  <span className="leading-relaxed">
                    Build the wrong thing because requirements changed
                  </span>
                </li>
                <li className="flex items-start gap-3 text-dark/80">
                  <span className="text-danger text-lg mt-1">•</span>
                  <span className="leading-relaxed">
                    Run out of money before you validate product-market fit
                  </span>
                </li>
              </ul>
            </div>

            {/* Solution Card */}
            <div className="group bg-white border-l-4 border-accent p-8 rounded-2xl hover:shadow-card-md transition-all duration-200">
              <h3 className="text-card text-dark mb-6">The sprint way</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-dark/80">
                  <span className="text-accent text-lg mt-1">•</span>
                  <span className="leading-relaxed">
                    Get a working MVP in 7 days for a fraction of the cost
                  </span>
                </li>
                <li className="flex items-start gap-3 text-dark/80">
                  <span className="text-accent text-lg mt-1">•</span>
                  <span className="leading-relaxed">
                    Start validating with real users while competitors are still
                    planning
                  </span>
                </li>
                <li className="flex items-start gap-3 text-dark/80">
                  <span className="text-accent text-lg mt-1">•</span>
                  <span className="leading-relaxed">
                    Iterate based on real feedback, not assumptions
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7-DAY PROCESS SECTION ── */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
              <span className="text-label text-accent">The Process</span>
            </div>

            {/* Heading */}
            <h2 className="text-section text-white mb-4">
              What happens every day of your sprint.
            </h2>
          </div>

          {/* 5 Process Day Cards */}
          <div className="grid md:grid-cols-5 gap-6 mb-16">
            {PROCESS.map((processDay, i) => (
              <div
                key={i}
                className="group bg-white/10 border border-white/20 rounded-2xl p-6 hover:border-accent hover:bg-white/20 transition-all duration-200"
              >
                <div className="text-center">
                  <div className="text-label text-accent mb-3">
                    {processDay.day}
                  </div>
                  <h3 className="text-card text-white mb-4">
                    {processDay.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    {processDay.headline}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Ownership Strip */}
          <div className="bg-dark rounded-2xl p-8 text-center">
            <h3 className="text-section text-white mb-6">
              At the end of Day 7, you own everything.
            </h3>

            {/* 6 Ownership Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {OWNERSHIP.map((item, i) => (
                <div
                  key={i}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STACK SECTION ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="text-label text-primary">The Stack</span>
            </div>

            {/* Heading */}
            <h2 className="text-section text-dark mb-12">
              Four tools. One week. Live product.
            </h2>
          </div>

          {/* Core Stack */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {STACK.map((tech, i) => (
              <div
                key={i}
                className="group flex items-center gap-3 px-6 py-4 bg-light border border-border rounded-2xl hover:border-accent hover:shadow-card-md transition-all duration-200"
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: tech.color }}
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-dark text-sm">
                    {tech.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {tech.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* AI Tools */}
          <div className="text-center mb-8">
            <h3 className="text-card text-dark mb-8">
              The AI that makes it possible
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {AI_TOOLS.map((tool, i) => (
              <div
                key={i}
                className="group flex items-center gap-3 px-6 py-4 bg-light border border-border rounded-2xl hover:border-accent hover:shadow-card-md transition-all duration-200"
              >
                <div className="text-accent">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-dark text-sm">
                    {tool.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {tool.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MVP CHECKLIST SECTION ── */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="text-label text-primary">
                The 7 Non-Negotiables
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-section text-dark mb-4">
              Every MVP I build passes this test. Most don't.
            </h2>
          </div>

          {/* 7 Checklist Items in 2-column grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {CHECKLIST.map((checklistItem, i) => (
              <div
                key={i}
                className="group flex items-start gap-4 p-6 bg-white border border-border rounded-2xl hover:shadow-card-md hover:border-accent transition-all duration-200"
              >
                {/* Primary checkmark circle */}
                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>

                <div className="flex-1">
                  {/* Item text */}
                  <h3 className="text-lg font-semibold text-dark mb-2">
                    {checklistItem.item}
                  </h3>
                  {/* Detail text */}
                  <p className="text-muted-foreground leading-relaxed">
                    {checklistItem.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Subtext */}
          <div className="text-center">
            <p className="text-muted-foreground text-lg">
              I've reviewed 40+ founder MVPs in the past year. Only 6 passed the
              real usage test.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONCEPT BUILDS PREVIEW SECTION ── */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
              <span className="text-label text-accent">Concept Builds</span>
            </div>

            {/* Heading */}
            <h2 className="text-section text-white mb-4">
              What I build to demonstrate what's possible.
            </h2>
          </div>

          {/* Featured Build Card - Using BUILDS[0] */}
          {BUILDS.length > 0 && (
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl shadow-card-lg hover:shadow-card-lg transition-all duration-200 overflow-hidden">
                <div className="grid md:grid-cols-5">
                  {/* Left Panel - Content (60% - 3 columns) */}
                  <div className="md:col-span-3 p-8 md:p-12">
                    {/* Creator Info */}
                    <div className="mb-6">
                      <h3 className="text-card text-dark mb-2">
                        {BUILDS[0].creator}
                      </h3>
                      <p className="text-muted-foreground text-lg">
                        {BUILDS[0].creator_bio}
                      </p>
                    </div>

                    {/* Product Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4">
                      <span className="text-sm font-semibold text-primary">
                        {BUILDS[0].product}
                      </span>
                    </div>

                    {/* Tagline */}
                    <h4 className="text-xl font-bold text-dark mb-4">
                      {BUILDS[0].tagline}
                    </h4>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {BUILDS[0].description}
                    </p>

                    {/* What I Built List */}
                    <div className="mb-8">
                      <h5 className="text-lg font-bold text-dark mb-4">
                        What I built:
                      </h5>
                      <ul className="space-y-2">
                        {BUILDS[0].built.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={`/builds/${BUILDS[0].slug}`}
                        className="group px-6 py-3 bg-primary text-white font-bold text-sm rounded-xl hover:bg-primary-mid transition-all duration-150 flex items-center justify-center gap-2"
                      >
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
                      </a>

                      <a
                        href={BUILDS[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-6 py-3 bg-white border border-border text-dark font-bold text-sm rounded-xl hover:border-accent hover:bg-light transition-all duration-150 flex items-center justify-center gap-2"
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

                  {/* Right Panel - Product Name (40% - 2 columns) */}
                  <div
                    className="md:col-span-2 p-8 md:p-12 flex items-center justify-center"
                    style={{ backgroundColor: BUILDS[0].bg }}
                  >
                    <div className="text-center">
                      <h3
                        className="text-4xl md:text-6xl font-bold transform -rotate-12"
                        style={{ color: BUILDS[0].accent }}
                      >
                        {BUILDS[0].product}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── TESTIMONIAL SECTION ── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          {/* Large quote icon */}
          <div className="mb-8">
            <svg
              className="w-16 h-16 text-accent mx-auto"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
            </svg>
          </div>

          {/* Quote text */}
          <blockquote className="text-3xl md:text-4xl font-bold text-dark mb-8 text-balance">
            "I can't believe it's actually real."
          </blockquote>

          {/* Attribution */}
          <p className="text-lg text-muted-foreground mb-8">
            — Founder, after Day 7 of their MVP sprint
          </p>

          {/* Supporting stats */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <span>✓ Live product in 7 days</span>
            <span>✓ Real users, real feedback</span>
            <span>✓ 100% code ownership</span>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="py-24 bg-light">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="text-label text-primary">FAQ</span>
            </div>

            {/* Heading */}
            <h2 className="text-section text-dark mb-4">
              Questions founders ask before we start.
            </h2>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white border border-border rounded-2xl px-6 hover:border-accent transition-all duration-200"
              >
                <AccordionTrigger className="text-left font-semibold text-dark hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── BOTTOM CTA SECTION ── */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
            <span className="text-label text-accent">Ready to build?</span>
          </div>

          {/* Heading */}
          <h2 className="text-section text-white mb-6">
            One conversation. Zero commitment. Full clarity on whether this is
            right for you.
          </h2>

          {/* Subtext */}
          <p className="text-body-lg text-white/80 mb-8 max-w-2xl mx-auto">
            30-min Idea Call → We'll map out your MVP, discuss timeline, and see
            if we're a good fit. No sales pitch, just clarity.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={SITE.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-accent text-primary font-bold text-sm rounded-xl hover:bg-accent-hover transition-all duration-150 flex items-center justify-center gap-2"
            >
              Book Your Free Idea Call
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
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-white/10 border border-white/20 text-white font-bold text-sm rounded-xl hover:bg-white/20 transition-all duration-150 flex items-center justify-center gap-2"
            >
              DM me on LinkedIn
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          {/* Reassurance text */}
          <p className="text-sm text-white/60">
            No pressure, no commitment. Just an honest conversation about your
            idea.
          </p>
        </div>
      </section>
    </div>
  );
}
