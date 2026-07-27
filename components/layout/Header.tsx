"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollY } from "@/lib/hooks/useScrollY";
import Button from "@/components/ui/LinkButton";
import { calLink } from "@/lib/content/siteConfig";

const NAV_ITEMS = [
  { label: "Work", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Tech Stack", href: "#tech" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Header(): React.JSX.Element {
  const scrolled = useScrollY(60);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Body scroll lock
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Escape key closes mobile menu
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [mobileOpen]);

  const headerBg = scrolled
    ? "bg-light/96 backdrop-blur-md border-b border-dark/7 shadow-sm"
    : "bg-transparent";

  // Hero is a light section — use dark text when transparent, switch to dark on scroll too
  const textColor = "text-dark";

  function handleMobileNavClick(href: string) {
    setMobileOpen(false);
    // Allow the menu close animation to start before scrolling
    const target = document.querySelector(href);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Wordmark */}
            <a
              href="#hero"
              className={`font-display font-semibold text-lg tracking-tight transition-colors duration-300 inline-flex items-end gap-0.5 ${textColor}`}
            >
              heyIsmail
              <span
                className="text-brand-accent leading-none mb-[2px]"
                aria-hidden="true"
              >
                •
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-body font-medium transition-colors duration-300 hover:opacity-70 ${textColor}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button
                href={calLink}
                external={true}
                variant="primary"
                size="sm"
              >
                Book a call
              </Button>
            </div>

            {/* Hamburger button (tablet/mobile) */}
            <button
              className={`lg:hidden flex items-center justify-center w-10 h-10 transition-colors duration-300 ${textColor}`}
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={
                mobileOpen ? "Close navigation menu" : "Open navigation menu"
              }
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              className="fixed inset-0 z-50 flex flex-col lg:hidden"
              style={{ height: "100svh", backgroundColor: "#E8F1F2" }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-dark/10 flex-shrink-0">
                <a
                  href="#hero"
                  className="font-display font-semibold text-lg tracking-tight text-dark"
                  onClick={() => setMobileOpen(false)}
                >
                  heyIsmail
                  <span
                    className="text-brand-accent leading-none mb-[2px]"
                    aria-hidden="true"
                  >
                    •
                  </span>
                </a>
                <button
                  className="flex items-center justify-center w-10 h-10 text-dark/60 hover:text-dark transition-colors"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col flex-1 px-6 pt-6 pb-8 overflow-y-auto">
                <ul className="flex flex-col gap-1">
                  {NAV_ITEMS.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.28,
                        delay: 0.06 + 0.05 * i,
                        ease: "easeOut",
                      }}
                    >
                      <a
                        href={item.href}
                        className="flex items-center py-3.5 font-display font-semibold text-2xl text-dark hover:text-brand-accent transition-colors border-b border-dark/8 last:border-0"
                        onClick={() => handleMobileNavClick(item.href)}
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.28,
                    delay: 0.06 + 0.05 * NAV_ITEMS.length,
                    ease: "easeOut",
                  }}
                  className="mt-auto pt-8"
                >
                  <Button
                    href={calLink}
                    external={true}
                    size="md"
                    className="w-full justify-center"
                    onClick={() => setMobileOpen(false)}
                  >
                    Book a call
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
