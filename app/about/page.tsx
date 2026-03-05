import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SITE, EXPERIENCE } from '@/app/data'

export const metadata: Metadata = {
  title: 'About | Ismail Muhammad',
  description: 'Learn about Ismail Muhammad, an AI-accelerated MVP developer who builds SaaS products in 7 days for non-technical founders.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Split Layout */}
      <section className="min-h-screen relative overflow-hidden bg-[#19453A]">
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-[55%_45%] gap-16 items-center">
              {/* Left column - Text content */}
              <div>
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#79CEB8]/10 border border-[#79CEB8]/20 mb-8">
                  <span className="text-[11px] font-bold text-[#79CEB8] tracking-[0.14em] uppercase">
                    About
                  </span>
                </div>

                {/* Headline */}
                <h1 className="text-white mb-8 leading-[0.95] font-[800]" 
                    style={{ fontSize: 'clamp(44px, 6.5vw, 88px)' }}>
                  I build things that founders said couldn't be built in a week.
                </h1>

                {/* Body text */}
                <div className="max-w-2xl">
                  <p className="text-[18px] text-white/80 leading-[1.7] mb-6">
                    Most developers either move too slow or cut too many corners. I found a third way: 
                    AI handles the boilerplate, I focus on what makes your product unique.
                  </p>
                  <p className="text-[18px] text-white/80 leading-[1.7]">
                    The result? Investor-ready MVPs in 7 days that founders actually want to iterate on, 
                    not rebuild from scratch.
                  </p>
                </div>
              </div>

              {/* Right column - Hero photo */}
              <div className="relative">
                <div className="relative">
                  <Image
                    src="/images/ismail.png"
                    alt="Ismail Muhammad"
                    width={500}
                    height={600}
                    className="w-full h-auto"
                    style={{ mixBlendMode: 'lighten' }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-24 bg-[#FBF9FF]">
        <div className="max-w-4xl mx-auto px-6">
          {/* Pull Quote */}
          <div className="text-center mb-16">
            <blockquote className="text-[#19453A] mb-8 leading-[1.05] font-[700]" 
                        style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}>
              "I almost became the developer who ruins startups."
            </blockquote>
          </div>

          {/* Story Paragraphs */}
          <div className="max-w-none">
            <p className="text-[18px] text-[#000807] leading-[1.7] mb-6">
              Early in my career, I was that guy who spent 3 months "perfecting" the architecture 
              while the founder's runway burned. I thought good code meant complex code. 
              I thought MVP meant "barely functional demo."
            </p>
            
            <p className="text-[18px] text-[#000807] leading-[1.7] mb-6">
              Then I watched a founder run out of money waiting for me to finish. 
              Their idea was solid, their market was ready, but I was too busy 
              over-engineering to ship something people could actually use.
            </p>
            
            <p className="text-[18px] text-[#000807] leading-[1.7] mb-6">
              That's when I learned the difference between building software and building businesses. 
              Software can be perfect later. Businesses need to validate and iterate now.
            </p>
            
            <p className="text-[18px] text-[#000807] leading-[1.7]">
              AI gave me the final piece: a way to ship fast without cutting corners. 
              Now I build MVPs that founders are proud to show investors, 
              not embarrassed to iterate on.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-[#000807] mb-16 leading-[1.05] font-[700]"
              style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}>
            Experience
          </h2>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <div key={index} className="border-l-2 border-[#19453A]/20 pl-8 relative">
                {/* Timeline dot */}
                <div className="absolute -left-2 top-0 w-4 h-4 bg-[#19453A] rounded-full"></div>
                
                <div className="space-y-4">
                  {/* Period */}
                  <div className="text-[11px] font-bold text-[#19453A]/70 tracking-[0.14em] uppercase">
                    {exp.period}
                  </div>
                  
                  {/* Company & Role */}
                  <div>
                    <h3 className="text-[20px] font-[700] text-[#000807] mb-1 leading-[1.2]">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-3 text-[#000807]/60">
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span>{exp.type}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  {exp.highlights && (
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-[15px] text-[#000807] leading-[1.65]">
                          <div className="w-1.5 h-1.5 bg-[#79CEB8] rounded-full mt-2.5 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lesson Callout Section */}
      <section className="py-24 bg-[#19453A]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-white mb-8 leading-[1.05] font-[700]"
                style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}>
              The Lesson
            </h2>
            <p className="text-[18px] text-white/80 leading-[1.7] max-w-2xl mx-auto">
              Speed isn't about cutting corners. It's about knowing which corners don't need to exist. 
              AI helps me eliminate the unnecessary so I can focus on what makes your product unique.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-24 bg-[#19453A]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#79CEB8]/10 border border-[#79CEB8]/20 mb-8">
            <span className="text-[11px] font-bold text-[#79CEB8] tracking-[0.14em] uppercase">
              Ready to build?
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-white mb-8 leading-[1.05] font-[700]"
              style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}>
            One conversation. Zero commitment. Full clarity on whether this is right for you.
          </h2>

          {/* Subtext */}
          <p className="text-[18px] text-white/80 leading-[1.7] mb-12 max-w-2xl mx-auto">
            Let's spend 30 minutes understanding your idea, your timeline, and whether 
            the 7-day sprint is right for you. No pressure, no pitch.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href={SITE.calendly}
              className="bg-[#79CEB8] text-[#19453A] font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#6bbfaa] transition-all duration-150"
            >
              Book Your Free Idea Call
            </Link>
            <Link 
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white/70 hover:text-white hover:border-white/50 font-bold text-sm px-6 py-3 rounded-xl transition-all duration-150"
            >
              DM me on LinkedIn
            </Link>
          </div>

          {/* Reassurance */}
          <p className="text-sm text-white/50 mt-8">
            No pressure. No pitch. Just clarity on whether this is right for you.
          </p>
        </div>
      </section>
    </div>
  )
}