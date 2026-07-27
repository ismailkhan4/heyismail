"use client";

import React from "react";
import { Github, Linkedin } from "lucide-react";
import { githubLink, linkedinLink } from "@/lib/content/siteConfig";

const NAV_LINKS = [
  { label: "Work", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Tech Stack", href: "#tech" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

const SOCIAL_LINKS = [
  { label: "GitHub", href: githubLink, icon: Github },
  { label: "LinkedIn", href: linkedinLink, icon: Linkedin },
] as const;

export default function Footer(): React.JSX.Element {
  return (
    <footer className="w-full bg-light border-t border-dark/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Copyright */}
          <p className="text-sm text-dark/60 font-body">
            © {new Date().getFullYear()} Ismail Muhammad
          </p>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-body text-dark/70 hover:text-brand-accent transition-colors duration-150"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-dark/60 hover:text-brand-accent transition-colors duration-150"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <p className="text-sm text-dark/50 font-body">
          Based in Lahore, Pakistan · Working with clients globally.
        </p>
      </div>
    </footer>
  );
}
