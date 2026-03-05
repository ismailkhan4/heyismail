import Link from 'next/link'
import { SITE } from '@/app/data'

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/[0.08]">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Top row: Navigation + CTA */}
        <div className="py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-8">
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
            <Link
              href="/contact"
              className="text-white/70 hover:text-white transition-colors duration-150 font-sans"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <a
            href={SITE.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-primary px-6 py-3 font-sans font-bold text-sm rounded-xl hover:bg-accent-hover transition-all duration-150"
          >
            Book a Call
          </a>
        </div>

        {/* Bottom row: Copyright + Social */}
        <div className="py-6 border-t border-white/[0.08] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Copyright */}
          <p className="text-white/50 text-sm font-sans">
            © 2025 {SITE.name} · {SITE.location}
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white/70 transition-colors duration-150 text-sm font-sans"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}