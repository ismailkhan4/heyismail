"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-mobile-menu]")) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("click", handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-primary/90 backdrop-blur-md border-b border-white/[0.08]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-white font-sans text-xl font-bold">
              heyIsmail
              <span className="text-green-500 font-bold text-3xl">.</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/builds"
              className="text-white/70 hover:text-white transition-colors duration-150 font-sans"
            >
              Builds
            </Link>
            <Link
              href="/process"
              className="text-white/70 hover:text-white transition-colors duration-150 font-sans"
            >
              Process
            </Link>
            <Link
              href="/about"
              className="text-white/70 hover:text-white transition-colors duration-150 font-sans"
            >
              About
            </Link>
          </div>

          {/* Desktop CTA Button */}
          <a
            href="/contact"
            rel="noopener noreferrer"
            className="hidden md:inline-flex px-6 py-3 bg-accent text-primary font-sans font-bold text-sm hover:bg-accent-hover transition-all duration-150"
          >
            Book a Call
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-white hover:text-accent transition-colors duration-150"
            aria-label="Toggle mobile menu"
            data-mobile-menu
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                animate={
                  isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                }
                className="w-6 h-0.5 bg-current mb-1.5 origin-center transition-all duration-200"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-current mb-1.5 transition-all duration-200"
              />
              <motion.span
                animate={
                  isMobileMenuOpen
                    ? { rotate: -45, y: -6 }
                    : { rotate: 0, y: 0 }
                }
                className="w-6 h-0.5 bg-current origin-center transition-all duration-200"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 bg-primary border-b border-white/[0.08] z-50 md:hidden"
            data-mobile-menu
          >
            <div className="px-6 py-6 space-y-6">
              {/* Mobile Navigation Links */}
              <div className="space-y-4">
                <Link
                  href="/builds"
                  onClick={closeMobileMenu}
                  className="block text-white/70 hover:text-white transition-colors duration-150 font-sans text-lg py-2"
                >
                  Builds
                </Link>
                <Link
                  href="/process"
                  onClick={closeMobileMenu}
                  className="block text-white/70 hover:text-white transition-colors duration-150 font-sans text-lg py-2"
                >
                  Process
                </Link>
                <Link
                  href="/about"
                  onClick={closeMobileMenu}
                  className="block text-white/70 hover:text-white transition-colors duration-150 font-sans text-lg py-2"
                >
                  About
                </Link>
              </div>

              {/* Mobile CTA Button */}
              <div className="pt-4 border-t border-white/[0.08]">
                <a
                  href="/contact"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="block w-full px-6 py-3 bg-accent text-primary font-sans font-bold text-center hover:bg-accent-hover transition-all duration-150"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
