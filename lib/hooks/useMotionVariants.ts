"use client";
import { useReducedMotion } from "framer-motion";
import {
  fadeUp,
  fadeIn,
  slideInLeft,
  scaleUp,
  stagger,
  fadeUpReduced,
  staggerReduced,
} from "@/lib/animations";

export function useMotionVariants() {
  const reduce = useReducedMotion();
  return {
    fadeUp:       reduce ? fadeUpReduced : fadeUp,
    fadeIn:       reduce ? fadeUpReduced : fadeIn,
    slideInLeft:  reduce ? fadeUpReduced : slideInLeft,
    scaleUp:      reduce ? fadeUpReduced : scaleUp,
    stagger:      reduce ? staggerReduced : stagger,
  };
}
