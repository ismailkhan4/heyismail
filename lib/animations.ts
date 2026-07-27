import type { Variants } from "framer-motion";

// ─── Primary entrance — smooth upward fade with deceleration ────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

// ─── Stagger container — tighter, snappier child delay ──────────────────────
export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

// ─── Fade in only (no Y movement) — for horizontal layouts, badges ──────────
export const fadeIn: Variants = {
  hidden: { opacity: 0, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

// ─── Slide in from left — for section headings / eyebrow text ───────────────
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// ─── Scale up — for cards / stat numbers ────────────────────────────────────
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

// ─── Reduced motion — no movement, instant fade ─────────────────────────────
export const fadeUpReduced: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
};

export const staggerReduced: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0 } },
};
