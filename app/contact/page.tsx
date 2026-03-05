import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_META } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Book a Free Idea Call | Ismail Muhammad',
  description: 'Book a free 30-minute Idea Call to discuss your SaaS MVP. No pressure, no pitch — just clarity on whether the 7-day sprint is right for you.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-light">
      {/* Primary Hero Section */}
      <section className="bg-primary pt-32 pb-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Heading */}
            <h1 className="text-hero text-white mb-8 text-balance">
              Let's talk about your idea.
            </h1>

            {/* Explanatory subtext */}
            <div className="max-w-2xl mx-auto">
              <p className="text-body-lg text-white/70 mb-6">
                In 30 minutes, we'll figure out if your idea is ready for a 7-day sprint, 
                what features matter most, and whether we're a good fit to work together.
              </p>
              <p className="text-body-lg text-white/70">
                No pressure, no pitch. Just an honest conversation about your vision 
                and the fastest way to validate it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Contact Options */}
      <section className="py-24 bg-light">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Option 1: Book a Free Idea Call - Recommended with accent glow */}
            <div className="relative bg-white p-10 border border-border shadow-card hover:shadow-card-md transition-all duration-200 rounded-xl">
              {/* Recommended Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-accent text-accent-foreground px-4 py-1 text-sm font-semibold rounded-full">
                  Recommended
                </div>
              </div>

              {/* Accent glow effect */}
              <div className="absolute inset-0 bg-accent/5 rounded-xl -z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 rounded-xl -z-10"></div>

              <div className="text-center">
                <h3 className="text-card text-foreground mb-6">
                  Book a Free Idea Call
                </h3>

                {/* 3 Bullet Points */}
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-body text-foreground">
                      30-minute conversation about your idea and timeline
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-body text-foreground">
                      Honest assessment of whether 7 days is realistic for your scope
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-body text-foreground">
                      Clear next steps if we decide to move forward together
                    </span>
                  </li>
                </ul>

                {/* Primary CTA */}
                <Link 
                  href={SITE_META.calendly}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold hover:bg-accent-hover transition-colors duration-150 w-full justify-center rounded-xl"
                >
                  Book Your Free Call →
                </Link>
              </div>
            </div>

            {/* Option 2: DM me on LinkedIn */}
            <div className="bg-dark p-10 border border-white/[0.08] rounded-xl">
              <div className="text-center">
                <h3 className="text-card text-white mb-6">
                  DM me on LinkedIn
                </h3>

                {/* Instructions */}
                <div className="mb-8 text-left">
                  <p className="text-body text-white/70 mb-4">
                    Prefer to start with a message? Send me a DM with:
                  </p>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-start gap-3">
                      <span className="text-white font-semibold">1.</span>
                      <span className="text-body">What you're building (1-2 sentences)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-white font-semibold">2.</span>
                      <span className="text-body">Your timeline and any constraints</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-white font-semibold">3.</span>
                      <span className="text-body">Whether you've validated the idea with users</span>
                    </li>
                  </ul>
                </div>

                {/* LinkedIn CTA */}
                <Link 
                  href={SITE_META.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-colors duration-150 w-full justify-center rounded-xl"
                >
                  Message on LinkedIn →
                </Link>
              </div>
            </div>
          </div>

          {/* Reassurance Text Below Options */}
          <div className="text-center mt-12">
            <p className="text-body text-foreground/70 max-w-2xl mx-auto">
              Either way works. The goal is the same: understand your vision, 
              assess the scope, and figure out if the 7-day sprint approach 
              makes sense for your specific situation.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}