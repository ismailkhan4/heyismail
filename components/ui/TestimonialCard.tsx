import React from "react";
import { ExternalLink } from "lucide-react";
import type { Testimonial } from "@/lib/types/content";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps): React.JSX.Element {
  return (
    <div className="border border-dark/10 rounded-xl p-7 md:p-8 flex flex-col gap-5 bg-light h-full">
      {/* Stars */}
      <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 fill-brand-accent"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="font-body text-base text-dark/80 leading-relaxed flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center justify-between gap-4 pt-1 border-t border-dark/8">
        <div className="font-body text-sm">
          <span className="font-semibold text-dark block">{testimonial.authorName}</span>
          <span className="text-dark/50 text-xs">
            {testimonial.authorRole}
            {testimonial.company && ` · ${testimonial.company}`}
          </span>
        </div>
        {testimonial.companyUrl && (
          <a
            href={testimonial.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${testimonial.company}`}
            className="flex items-center justify-center w-8 h-8 rounded-lg border border-dark/10 text-dark/40 hover:text-brand-accent hover:border-brand-accent/40 transition-colors duration-200 flex-shrink-0"
          >
            <ExternalLink size={13} />
          </a>
        )}
      </div>
    </div>
  );
}
