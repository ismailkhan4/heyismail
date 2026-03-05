import Link from 'next/link'
import { SITE_META } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-dark-text border-t border-white/[0.08]">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Top row: Navigation + CTA */}
        <div className="py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-8">
            <Link
              href="/work"
              className="text-white/70 hover:text-white transition-colors duration-150"
            >
              Work
            </Link>
            <Link
              href="/process"
              className="text-white/70 hover:text-white transition-colors duration-150"
            >
              Process
            </Link>
            <Link
              href="/about"
              className="text-white/70 hover:text-white transition-colors duration-150"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white/70 hover:text-white transition-colors duration-150"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            href={SITE_META.calendly}
            className="bg-primary text-light px-6 py-3 font-medium hover:bg-dark-primary transition-colors duration-150"
          >
            Book a Call
          </Link>
        </div>

        {/* Bottom row: Copyright + Social */}
        <div className="py-6 border-t border-white/[0.08] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Copyright */}
          <p className="text-white/50 text-sm">
            © 2025 {SITE_META.name} · {SITE_META.location}
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <Link
              href={SITE_META.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white/70 transition-colors duration-150 text-sm"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}