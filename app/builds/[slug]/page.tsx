"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BUILDS } from "@/app/data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface BuildPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BuildPage({ params }: BuildPageProps) {
  const { slug } = await params;
  const build = BUILDS.find((b) => b.slug === slug);

  if (!build) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-light">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            {/* Creator Info */}
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-dark mb-2">
                {build.creator}
              </h1>
              <p className="text-dark/70 text-lg">
                {build.creator_bio}
              </p>
            </div>

            {/* Product Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-4">
              <span className="text-sm font-bold text-accent tracking-[0.14em] uppercase">
                {build.product}
              </span>
            </div>

            {/* Tagline */}
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6 text-balance">
              {build.tagline}
            </h2>

            {/* Description */}
            <p className="text-xl text-dark/70 leading-relaxed max-w-3xl mx-auto">
              {build.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-dark mb-4">
              The Challenge
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-8 h-full bg-red-50 border-red-100">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-red-900 mb-3">
                    The Problem
                  </h4>
                </div>
                <p className="text-red-800 leading-relaxed">
                  {build.description}
                </p>
              </Card>
            </motion.div>

            {/* Solution Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-8 h-full bg-green-50 border-green-100">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-green-900 mb-3">
                    The Gap
                  </h4>
                </div>
                <p className="text-green-800 leading-relaxed">
                  {build.gap}
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What I Built Section */}
      <section className="py-16 bg-light">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-dark mb-4">
              What I Built
            </h3>
            <p className="text-dark/70 text-lg">
              6 core features that solve the real problem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {build.built.slice(0, 6).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-card-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ backgroundColor: build.accent }}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-dark leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-dark mb-4">
              Tech Stack
            </h3>
            <p className="text-dark/70 text-lg">
              Modern, scalable technologies for production-ready apps
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {build.stack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-light border border-primary/10 rounded-full hover:border-accent/40 transition-colors"
              >
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: build.accent }}
                />
                <span className="text-sm font-medium text-dark">
                  {tech}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Build Stats Section */}
      <section className="py-16 bg-light">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-dark mb-4">
              Build Stats
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Days to Build */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-8 text-center hover:shadow-card-md transition-shadow">
                <div className="text-4xl font-bold text-primary mb-2">
                  {build.days}
                </div>
                <div className="text-dark/70 font-medium">
                  Days to Build
                </div>
              </Card>
            </motion.div>

            {/* Features Built */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-8 text-center hover:shadow-card-md transition-shadow">
                <div className="text-4xl font-bold text-primary mb-2">
                  {build.built.length}
                </div>
                <div className="text-dark/70 font-medium">
                  Core Features
                </div>
              </Card>
            </motion.div>

            {/* Tech Stack Size */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-8 text-center hover:shadow-card-md transition-shadow">
                <div className="text-4xl font-bold text-primary mb-2">
                  {build.stack.length}
                </div>
                <div className="text-dark/70 font-medium">
                  Technologies
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-light mb-6">
              Ready to build something like this?
            </h3>
            <p className="text-light/80 text-lg mb-8 max-w-2xl mx-auto">
              See how {build.product} works in production, or book a free call to discuss your own MVP idea.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-accent text-primary font-bold hover:bg-[#6bbfaa] transition-colors"
              >
                <a 
                  href={build.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              </Button>
              
              <Button 
                asChild
                variant="ghost"
                className="text-light border-light/20 hover:bg-light/10 hover:text-light"
              >
                <Link href="/contact">
                  Book a Free Idea Call
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}