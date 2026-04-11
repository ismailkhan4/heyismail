"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { SITE } from "../data";

const navItems = [
  { name: "How It Works", href: "/process" },
  { name: "Builds", href: "/builds" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Transparent with white text by default; switch to light bg once scrolled.
  const useDarkBg = scrolled;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.0, 0.0, 0.2, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          useDarkBg
            ? "bg-[#FBFFFC]/96 backdrop-blur-md border-b border-[rgba(15,15,15,0.07)] shadow-[0_1px_0_rgba(15,15,15,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className={`font-display text-xl font-semibold tracking-tight transition-colors ${
              useDarkBg ? "text-[#0F0F0F]" : "text-[#FBFFFC]"
            }`}
          >
            heyIsmail
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-body rounded-lg transition-colors ${
                  pathname === item.href
                    ? useDarkBg
                      ? "text-[#0F0F0F] font-medium"
                      : "text-[#FBFFFC] font-medium"
                    : useDarkBg
                      ? "text-[#0F0F0F]/50 hover:text-[#0F0F0F]"
                      : "text-[#FBFFFC]/55 hover:text-[#FBFFFC]"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">
            <span
              className={`hidden lg:flex items-center gap-1.5 text-xs font-body border rounded-full px-3 py-1.5 transition-colors ${
                useDarkBg
                  ? "text-[#0F0F0F]/50 border-[rgba(15,15,15,0.1)]"
                  : "text-[#FBFFFC]/45 border-[#FBFFFC]/15"
              }`}
            >
              <span className="w-1.5 h-1.5 bg-[#14A714] rounded-full animate-pulse" />
              Available for new projects
            </span>

            <a
              href={SITE.calLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center px-5 py-2.5 bg-[#14A714] text-[#FBFFFC] text-sm font-body font-semibold rounded-lg transition-all duration-200 hover:bg-[#129612] hover:shadow-[0_2px_12px_rgba(20,167,20,0.35)]"
            >
              Let's Talk
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <span className={`block w-5 h-px transition-colors ${useDarkBg ? "bg-[#0F0F0F]" : "bg-[#FBFFFC]"}`} />
              <span className={`block w-5 h-px transition-colors ${useDarkBg ? "bg-[#0F0F0F]" : "bg-[#FBFFFC]"}`} />
              <span className={`block w-3.5 h-px transition-colors ${useDarkBg ? "bg-[#0F0F0F]" : "bg-[#FBFFFC]"}`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-[#06382C] flex flex-col px-6 sm:px-8 py-10"
          >
            <div className="flex items-center justify-between mb-16">
              <a
                href="/"
                className="font-display text-xl font-semibold text-[#FBFFFC]"
                onClick={() => setMobileOpen(false)}
              >
                heyIsmail
              </a>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="text-[#FBFFFC]/50 hover:text-[#FBFFFC] transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col gap-1 flex-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-3xl font-semibold text-[#FBFFFC]/70 hover:text-[#FBFFFC] py-4 border-b border-[#FBFFFC]/08 transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-auto pt-8"
            >
              <a
                href={SITE.calLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-4 bg-[#14A714] text-[#FBFFFC] font-body font-semibold rounded-xl text-base hover:bg-[#129612] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Let's Talk
              </a>
              <p className="text-center text-[#FBFFFC]/30 text-xs font-body mt-4">
                Response under 2 hours · Based in Lahore
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
