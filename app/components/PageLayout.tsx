"use client";

import { ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Footer from "./Footer";

const PageLayout = ({ children }: { children: ReactNode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* <nav
        className={cn(
          "fixed top-0 z-50 transition-all duration-300 ease-in-out px-6 py-4",
          scrolled
            ? "w-1/2 left-1/2 -translate-x-1/2 mt-4 rounded-xl shadow-lg bg-teal-900/80 dark:bg-white/80 backdrop-blur"
            : "w-3/4 left-1/2 -translate-x-1/2 mt-4 bg-transparent"
        )}
      >
        <div className="flex justify-between items-center text-sm font-semibold text-white dark:text-teal-900">
          <div className="text-lg font-bold">
            <Link href="/">heyIsmail</Link>
          </div>
          <div className="flex gap-6">
            <Link href="/#about" className="hover:underline">
              About
            </Link>
            <Link href="/#testimonials" className="hover:underline">
              Testimonials
            </Link>
            <Link href="/#portfolio" className="hover:underline">
              Portfolio
            </Link>
            <Link
              href="https://wa.me/+923159807707"
              className="hover:underline"
              target="_blank"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </nav> */}
      {children}
    </>
  );
};

export default PageLayout;
