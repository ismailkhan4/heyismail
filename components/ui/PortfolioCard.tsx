"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ProjectType } from "@/lib/types/content";
import { useMotionVariants } from "@/lib/hooks/useMotionVariants";
import TechBadge from "@/components/ui/TechBadge";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  project: ProjectType;
  labelProblem?: string;
  labelBuild?: string;
  labelOutcome?: string;
  labelRole?: string;
  labelStatus?: string;
}

export default function PortfolioCard({
  project,
  labelProblem = "Problem",
  labelBuild = "Built",
  labelOutcome = "Outcome",
  labelRole = "Role",
  labelStatus = "Status",
}: PortfolioCardProps): React.JSX.Element {
  const { scaleUp } = useMotionVariants();

  // Detect internal vs external URL
  const isInternal = project.url.startsWith("/");

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
        <div className="flex-1 min-w-0">
          <p className="font-body text-xs uppercase tracking-widest text-brand-accent font-semibold mb-1">
            {project.category}
          </p>
          <h3 className="font-display text-xl md:text-2xl font-semibold text-light tracking-tight">
            {project.client}
          </h3>

          {/* Role + Status row — only rendered when at least one is present */}
          {(project.role || project.status) && (
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
              {project.role && (
                <span className="font-body text-xs text-light/50">
                  <span className="text-light/30 uppercase tracking-widest mr-1">{labelRole}:</span>
                  {project.role}
                </span>
              )}
              {project.status && (
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 font-body text-xs font-medium",
                    project.status.toLowerCase().includes("development") ||
                    project.status.toLowerCase().includes("sviluppo")
                      ? "text-[#0EA5E9]"
                      : "text-brand-accent"
                  )}
                >
                  {/* Animated pulse dot */}
                  <span className="relative flex h-1.5 w-1.5 shrink-0" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-current" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-current" />
                  </span>
                  {project.status}
                </span>
              )}
            </div>
          )}
        </div>

        {/* External link or internal link arrow */}
        {isInternal ? (
          <Link
            href={project.url}
            aria-label={`View ${project.client} case study`}
            className="flex items-center justify-center w-9 h-9 rounded-lg border border-light/15 text-light/50 hover:text-[#0EA5E9] hover:border-[#0EA5E9]/40 transition-colors duration-200 flex-shrink-0 mt-0.5"
          >
            <ArrowUpRight size={16} />
          </Link>
        ) : (
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
        )}
      </div>

      {/* Details */}
      <dl className="flex flex-col gap-4">
        <div>
          <dt className="font-body text-xs uppercase tracking-widest text-light/40 mb-1.5">
            {labelProblem}
          </dt>
          <dd className="font-body text-sm text-light/75 leading-relaxed">{project.problem}</dd>
        </div>
        <div>
          <dt className="font-body text-xs uppercase tracking-widest text-light/40 mb-1.5">
            {labelBuild}
          </dt>
          <dd className="font-body text-sm text-light/75 leading-relaxed">{project.build}</dd>
        </div>
        <div>
          <dt className="font-body text-xs uppercase tracking-widest text-brand-accent/70 mb-1.5">
            {labelOutcome}
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
