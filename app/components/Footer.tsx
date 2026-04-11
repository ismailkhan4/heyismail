import { Briefcase, Calendar, ExternalLink } from "lucide-react";
import { SITE } from "../data";

export default function Footer() {
  return (
    <footer className="bg-[#04271e] pt-14 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 pb-10 sm:pb-12 border-b border-[#FBFFFC]/06">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <a href="/" className="font-display text-2xl font-semibold text-[#FBFFFC] block mb-3">
              heyIsmail
            </a>
            <p className="font-body text-sm text-[#FBFFFC]/35 leading-[1.75] max-w-xs">
              Custom platforms for LinkedIn creators. Live in 7 days. Full ownership on day 7.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FBFFFC]/20 mb-5">
              Navigate
            </p>
            <ul className="space-y-3">
              {[
                { label: "How It Works", href: "/process" },
                { label: "Builds", href: "/builds" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-[#FBFFFC]/40 hover:text-[#FBFFFC] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FBFFFC]/20 mb-5">
              Connect
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 font-body text-sm text-[#FBFFFC]/40 hover:text-[#FBFFFC] transition-colors"
                >
                  <ExternalLink size={13} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={SITE.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 font-body text-sm text-[#FBFFFC]/40 hover:text-[#FBFFFC] transition-colors"
                >
                  <Briefcase size={13} />
                  Upwork
                </a>
              </li>
              <li>
                <a
                  href={SITE.calLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 font-body text-sm text-[#FBFFFC]/40 hover:text-[#FBFFFC] transition-colors"
                >
                  <Calendar size={13} />
                  Book a Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-[#FBFFFC]/20">
            © 2025 Ismail Muhammad · heyismail.com
          </p>
          <p className="font-body text-xs text-[#FBFFFC]/12">
            Built with Next.js · Deployed on Cloudflare
          </p>
        </div>
      </div>
    </footer>
  );
}
