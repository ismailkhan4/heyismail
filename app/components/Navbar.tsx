"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/95 backdrop-blur-md border-b border-light/30 shadow-sm"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2 flex items-center justify-between">
                {/* Logo - Original Style */}
                <motion.div
                    className="text-xl font-semibold tracking-tight flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                >
                    <span className="text-dark-text">heyIsmail</span>
                    <Image
                        src="/green-dot.png"
                        width={12}
                        height={12}
                        alt="heyIsmail"
                        className="mt-2.5 -ml-1.75"
                    />
                </motion.div>

                {/* Navigation Links - Hidden on mobile */}
                <div className="hidden md:flex items-center gap-1">
                    <Link
                        href="/work"
                        className="px-4 py-2 text-sm text-primary hover:text-dark-primary transition-colors uppercase font-bold"
                    >
                        Work
                    </Link>
                    <Link
                        href="/process"
                        className="px-4 py-2 text-sm text-primary hover:text-dark-primary transition-colors uppercase font-bold"
                    >
                        Process
                    </Link>
                    <Link
                        href="/about"
                        className="px-4 py-2 text-sm text-primary hover:text-dark-primary transition-colors uppercase font-bold"
                    >
                        About
                    </Link>
                </div>

                {/* CTA Button */}
                <a
                    href="https://heyismail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-primary text-white text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
                >
                    Book a Call
                </a>
            </div>
        </motion.nav>
    );
}