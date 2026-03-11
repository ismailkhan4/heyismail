"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavigationProps {
  onSectionScroll?: (section: string) => void;
  isHomePage?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  onSectionScroll,
  isHomePage = false,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "How It Works", href: "/process" },
    { name: "Builds", href: "/builds" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavClick = (item: { name: string; href: string }) => {
    if (isHomePage && onSectionScroll) {
      if (item.name === "How It Works") {
        onSectionScroll("work");
        return;
      }
      window.location.href = item.href;
    } else {
      window.location.href = item.href;
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-[#2f6d5e]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2 flex items-center justify-between">
        <motion.div
          className="text-xl font-semibold tracking-tight flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <a href="/" className="flex items-center gap-1">
            <span>heyIsmail</span>
            <span className="w-2 h-2 bg-[#2f6d5e] rounded-full animate-pulse mt-2" />
          </a>
        </motion.div>

        <div className="hidden md:flex items-center gap-1">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item)}
              className={`px-4 py-2 text-sm transition-colors cursor-pointer  ${
                pathname === item.href
                  ? "text-[#2f6d5e]"
                  : "text-gray-400 hover:text-[#2f6d5e]"
              }`}
            >
              {item.name}
            </button>
          ))}
          <a
            href="https://www.linkedin.com/in/heyismail"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm text-gray-400 hover:text-[#2f6d5e] transition-colors hover:bg-[#2f6d5e]/5"
          >
            I post on LinkedIn
          </a>
          <a
            href="https://upwork.com/freelancers/ismailm16"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm text-gray-400 hover:text-[#2f6d5e] transition-colors hover:bg-[#2f6d5e]/5"
          >
            Hire me on Upwork
          </a>
        </div>

        <a
          href="https://cal.com/heyismail/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-6 py-2.5 bg-[#2f6d5e] text-white text-sm font-semibold overflow-hidden transition-all border-2 border-transparent hover:border-[#0d3a2f]"
        >
          <span className="relative z-10 uppercase">Let's talk</span>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navigation;
