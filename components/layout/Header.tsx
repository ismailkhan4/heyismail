"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollY } from "@/lib/hooks/useScrollY";
import Button from "@/components/ui/LinkButton";
import { calLink } from "@/lib/content/siteConfig";
import { useTranslation } from "@/lib/i18n/context";
import type { Lang } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

// ── Types ─────────────────────────────────────────────────────────────────────

interface NavItem {
  label: string;
  /** href used on the homepage (hash anchor) */
  anchor: string;
  /** href used on any other page (full path + hash) */
  fullHref: string;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function Header(): React.JSX.Element {
  const scrolled   = useScrollY(60);
  const pathname   = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useTranslation();

  // True when we are on the homepage
  const isHome = pathname === "/";
  // True when we are on a project sub-page — dims the main nav links slightly
  // to signal they link back to the main site.
  const isClimaFlow = pathname === "/projects/climaflow";

  const NAV_ITEMS: NavItem[] = [
    { label: t.nav.work,      anchor: "#portfolio", fullHref: "/#portfolio" },
    { label: t.nav.services,  anchor: "#services",  fullHref: "/#services" },
    { label: t.nav.process,   anchor: "#process",   fullHref: "/#process" },
    { label: t.nav.techStack, anchor: "#tech",      fullHref: "/#tech" },
    { label: t.nav.about,     anchor: "#about",     fullHref: "/#about" },
    { label: t.nav.contact,   anchor: "#contact",   fullHref: "/#contact" },
  ];

  // Body scroll lock while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Escape key closes mobile menu
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [mobileOpen]);

  const headerBg = scrolled
    ? "bg-light/96 backdrop-blur-md border-b border-dark/7 shadow-sm"
    : "bg-transparent";

  function toggleLang() {
    setLang(lang === "en" ? "it" : "en");
  }

  // On homepage, use smooth-scroll anchors; on other pages, use full hrefs
  function navHref(item: NavItem) {
    return isHome ? item.anchor : item.fullHref;
  }

  function handleMobileNavClick(item: NavItem) {
    setMobileOpen(false);
    if (isHome) {
      const target = document.querySelector(item.anchor);
      if (target) setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 50);
    }
    // If not home, the Link href already navigates to the right page+hash
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
          <div className="flex items-center justify-between h-16 md:h-[72px]">

            {/* ── Wordmark — always navigates home ── */}
            <Link
              href="/"
              className="font-display font-semibold text-lg tracking-tight transition-colors duration-200 inline-flex items-end gap-0.5 text-dark hover:opacity-80"
            >
              heyIsmail
              <span className="text-brand-accent leading-none mb-[2px]" aria-hidden="true">•</span>
            </Link>

            {/* ── Desktop nav ── */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.anchor}
                  href={navHref(item)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-sm font-body font-medium transition-colors duration-200",
                    "text-dark/70 hover:text-dark hover:bg-dark/4",
                    isClimaFlow && "text-dark/45 hover:text-dark/80"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* ── Desktop right: lang toggle + CTA ── */}
            <div className="hidden lg:flex items-center gap-3">
              <LangToggle lang={lang} onToggle={toggleLang} ariaLabel={t.nav.langToggleLabel} />
              <Button href={calLink} external variant="primary" size="sm">
                {t.nav.bookCall}
              </Button>
            </div>

            {/* ── Mobile: lang toggle + hamburger ── */}
            <div className="lg:hidden flex items-center gap-2">
              <LangToggle lang={lang} onToggle={toggleLang} ariaLabel={t.nav.langToggleLabel} />
              <button
                className="flex items-center justify-center w-10 h-10 transition-colors duration-300 text-dark"
                onClick={() => setMobileOpen((p) => !p)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
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
                <Link
                  href="/"
                  className="font-display font-semibold text-lg tracking-tight text-dark"
                  onClick={() => setMobileOpen(false)}
                >
                  heyIsmail
                  <span className="text-brand-accent" aria-hidden="true">•</span>
                </Link>
                <button
                  className="flex items-center justify-center w-10 h-10 text-dark/60 hover:text-dark"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col flex-1 px-6 pt-6 pb-8 overflow-y-auto">
                <ul className="flex flex-col gap-1">
                  {/* nav items */}
                  {NAV_ITEMS.map((item, i) => (
                    <motion.li
                      key={item.anchor}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.28, delay: 0.06 + 0.05 * i, ease: "easeOut" }}
                    >
                      <Link
                        href={navHref(item)}
                        className="flex items-center py-3.5 font-display font-semibold text-2xl text-dark hover:text-brand-accent transition-colors border-b border-dark/8"
                        onClick={() => handleMobileNavClick(item)}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, delay: 0.06 + 0.05 * NAV_ITEMS.length, ease: "easeOut" }}
                  className="mt-auto pt-8"
                >
                  <Button
                    href={calLink}
                    external
                    size="md"
                    className="w-full justify-center"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t.nav.bookCall}
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

// ── Language toggle pill ──────────────────────────────────────────────────────

function LangToggle({
  lang,
  onToggle,
  ariaLabel,
}: {
  lang: Lang;
  onToggle: () => void;
  ariaLabel: string;
}) {
  return (
    <button
      onClick={onToggle}
      aria-label={ariaLabel}
      className="relative flex items-center h-7 rounded-full border border-dark/15 hover:border-dark/30 bg-transparent transition-colors duration-200 select-none"
      style={{ width: "64px", padding: "2px" }}
    >
      {/* Sliding highlight */}
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
        className="absolute top-[2px] bottom-[2px] w-[28px] rounded-full bg-dark/8"
        style={{ left: lang === "en" ? "2px" : "calc(100% - 30px)" }}
        aria-hidden="true"
      />
      <span
        className={cn(
          "relative z-10 flex-1 text-center font-body text-[11px] font-semibold tracking-wide transition-colors duration-150",
          lang === "en" ? "text-dark" : "text-dark/35"
        )}
      >
        EN
      </span>
      <span
        className={cn(
          "relative z-10 flex-1 text-center font-body text-[11px] font-semibold tracking-wide transition-colors duration-150",
          lang === "it" ? "text-dark" : "text-dark/35"
        )}
      >
        IT
      </span>
    </button>
  );
}
