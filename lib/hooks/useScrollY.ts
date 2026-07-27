"use client";
import { useState, useEffect } from "react";

/**
 * Returns true when the page has scrolled past `threshold` pixels.
 * Registers a passive scroll listener; cleans up on unmount.
 */
export function useScrollY(threshold: number = 60): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    // Sync on mount in case page loads mid-scroll
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
