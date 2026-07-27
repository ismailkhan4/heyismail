"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ProjectType } from "@/lib/types/content";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";
import TechBadge from "@/components/ui/TechBadge";

interface PortfolioCardProps {
  project: ProjectType;
}

export default function PortfolioCard({ project }: PortfolioCardProps): React.JSX.Element {
  const { scaleUp } = useMotionVariants();

  return (
    <motion.div
      variants={scaleUp}
      whileHover={{
        y: -5,
        boxShadow: "0 24px 48px -12px rgba(0,0,0,0.35)",
        borderColor: "rgba(197,216,109,0.3)",
        transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
      }}
      className="border border-light/10 rounded-xl p-6 md:p-7 flex flex-col gap-5 bg-surface cursor-default"
      style={{ willChange: "transform" }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-body text-xs uppercase tracking-widest text-brand-accent font-semibold mb-1">
            {project.category}
          </p>
          <h3 className="font-display text-xl md:text-2xl font-semibold text-light tracking-tight">
            {project.client}
          </h3>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.client}`}
          className="flex items-center justify-center w-9 h-9 rounded-lg border border-light/15 text-light/50 hover:text-brand-accent hover:border-brand-accent/40 transition-colors duration-200 flex-shrink-0 mt-0.5"
          onClick={(e) => e.stopPropagation()}
        >
          <ArrowUpRight size={16} />
        </a>
      </div>

      {/* Details */}
      <dl className="flex flex-col gap-4">
        <div>
          <dt className="font-body text-xs uppercase tracking-widest text-light/40 mb-1.5">
            Problem
          </dt>
          <dd className="font-body text-sm text-light/75 leading-relaxed">{project.problem}</dd>
        </div>
        <div>
          <dt className="font-body text-xs uppercase tracking-widest text-light/40 mb-1.5">
            Built
          </dt>
          <dd className="font-body text-sm text-light/75 leading-relaxed">{project.build}</dd>
        </div>
        <div>
          <dt className="font-body text-xs uppercase tracking-widest text-brand-accent/70 mb-1.5">
            Outcome
          </dt>
          <dd className="font-body text-sm font-semibold text-brand-accent leading-relaxed">
            {project.outcome}
          </dd>
        </div>
      </dl>

      {/* Stack */}
      {project.stack.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-1">
          {project.stack.map((tech) => (
            <TechBadge key={tech} item={{ name: tech }} theme="dark" />
          ))}
        </div>
      )}
    </motion.div>
  );
}
