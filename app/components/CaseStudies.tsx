import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Star,
  ExternalLink,
  Calendar,
  TrendingUp,
  DollarSign,
  Users,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder",
      company: "TaskFlow (YC W23)",
      content:
        "I was stuck for months trying to find the right developers. In exactly 40 days, he delivered our MVP and kept me sane throughout the process. We're now at $15K MRR and growing fast.",
      metrics: { users: "2.5K+", revenue: "$15K MRR", timeline: "40 days" },
      rating: 5,
      beforeAfter: "From idea paralysis to paying customers",
      avatar: "SC",
    },
    {
      name: "Marcus Rodriguez",
      role: "CEO",
      company: "DevTools Pro (Techstars)",
      content:
        "Finally found someone who speaks both founder and developer language. No technical overwhelm, just clear execution and strategic guidance. Our beta has 500+ signups already.",
      metrics: { users: "500+", growth: "+120% MoM", timeline: "38 days" },
      rating: 5,
      beforeAfter: "From technical confusion to market ready",
      avatar: "MR",
    },
    {
      name: "Emily Watson",
      role: "Founder",
      company: "HealthTrack (500 Startups)",
      content:
        "Best investment we made was hiring him as our MVP strategist. His team delivered while he kept us focused on what actually mattered. Raised our $500K seed round 2 months after launch.",
      metrics: { raised: "$500K", users: "1.2K+", timeline: "42 days" },
      rating: 5,
      beforeAfter: "From funding struggles to successful seed round",
      avatar: "EW",
    },
  ];

  const caseStudies = [
    {
      id: 1,
      title: "SaaS Analytics Platform",
      industry: "B2B Software",
      client: "TechStartup Inc.",
      challenge:
        "Founder overwhelmed by complex data visualization requirements and integration needs",
      solution:
        "Simplified MVP focusing on core analytics with strategic feature prioritization",
      result: "$25K MRR in 3 months",
      timeline: "40 days",
      metrics: ["1K+ users", "94% retention", "4.8★ rating"],
      image: "📊",
      problem: "Technical complexity paralysis",
      detailedStory: {
        background:
          "A non-technical founder with 15+ years in sales analytics wanted to build a SaaS platform but was overwhelmed by technical requirements and feature creep.",
        approach: [
          "Week 1: User research and feature prioritization workshop",
          "Week 2-3: MVP development with core analytics features",
          "Week 4: User testing and feedback integration",
          "Week 5-6: Launch preparation and onboarding flow",
        ],
        outcome:
          "Launched with 50 beta users, reached $25K MRR within 3 months, and raised $1.2M seed round.",
        technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
        testimonial:
          "I went from technical paralysis to having a working product that customers love. The strategic approach made all the difference.",
      },
    },
    {
      id: 2,
      title: "E-learning Marketplace",
      industry: "EdTech",
      client: "EduConnect",
      challenge:
        "Two-sided marketplace complexity causing endless development delays",
      solution: "Instructor-first approach with streamlined student experience",
      result: "1K+ courses, $50K revenue",
      timeline: "35 days",
      metrics: ["500+ instructors", "5K+ students", "$50K revenue"],
      image: "🎓",
      problem: "Marketplace complexity overwhelm",
      detailedStory: {
        background:
          "Education entrepreneur wanted to create a marketplace but was stuck in development hell for 8 months with previous developers.",
        approach: [
          "Week 1: Marketplace strategy and user flow simplification",
          "Week 2: Instructor portal development",
          "Week 3: Student experience and payment integration",
          "Week 4: Testing with real instructors and students",
          "Week 5: Launch and initial marketing",
        ],
        outcome:
          "Successfully onboarded 500+ instructors, 5K+ students, and generated $50K revenue in first quarter.",
        technologies: ["Next.js", "Stripe", "AWS", "Prisma"],
        testimonial:
          "From 8 months of development hell to a working marketplace in 35 days. Incredible transformation.",
      },
    },
    {
      id: 3,
      title: "FinTech Mobile App",
      industry: "Financial Services",
      client: "MoneyWise",
      challenge: "Regulatory compliance fears blocking progress for 8 months",
      solution: "Compliant MVP with core features and clear regulatory roadmap",
      result: "10K downloads, Series A prep",
      timeline: "45 days",
      metrics: ["10K+ downloads", "Series A ready", "SOC2 compliant"],
      image: "💳",
      problem: "Regulatory compliance paralysis",
      detailedStory: {
        background:
          "Former banking executive wanted to build a personal finance app but was paralyzed by regulatory requirements and compliance concerns.",
        approach: [
          "Week 1-2: Compliance research and MVP scope definition",
          "Week 3-4: Core app development with security focus",
          "Week 5: Security audit and compliance documentation",
          "Week 6: Beta testing and Series A preparation",
        ],
        outcome:
          "Launched compliant app with 10K+ downloads, passed SOC2 audit, and began Series A fundraising.",
        technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
        testimonial:
          "Turned my compliance fears into a competitive advantage. Now we're Series A ready.",
      },
    },
  ];

  const openCaseStudy = (caseId: number) => {
    setSelectedCase(caseId);
  };

  const closeCaseStudy = () => {
    setSelectedCase(null);
  };

  const selectedCaseData = caseStudies.find((cs) => cs.id === selectedCase);

  return (
    <section
      id="case-studies"
      className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20">
          <Badge
            variant="outline"
            className="text-sm px-4 py-2 rounded-2xl border-slate-200 dark:border-slate-700"
          >
            Success Stories
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900 dark:text-white">
            Real founders,{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              real results
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            These founders were exactly where you are now—stuck, overwhelmed,
            and watching competitors move ahead. Here's what happened when they
            stopped struggling alone.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20 lg:mb-24">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group h-full bg-white dark:bg-slate-800"
            >
              <CardContent className="p-6 sm:p-8 space-y-6 h-full flex flex-col">
                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Before/After */}
                <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-3">
                  <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                    ✓ {testimonial.beforeAfter}
                  </p>
                </div>

                {/* Content */}
                <blockquote className="text-slate-600 dark:text-slate-300 leading-relaxed italic flex-1">
                  "{testimonial.content}"
                </blockquote>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 text-center text-sm border-t border-slate-200 dark:border-slate-700 pt-4">
                  {Object.entries(testimonial.metrics).map(([key, value]) => (
                    <div key={key}>
                      <div className="font-bold text-slate-900 dark:text-white text-base">
                        {value}
                      </div>
                      <div className="text-slate-500 dark:text-slate-400 capitalize text-xs">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Author */}
                <div className="border-t border-slate-200 dark:border-slate-700 pt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case Studies */}
        <div className="space-y-8 sm:space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Featured Case Studies
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Deep dives into how we transformed founder frustration into market
              success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 group cursor-pointer h-full bg-white dark:bg-slate-800"
                onClick={() => openCaseStudy(study.id)}
              >
                <CardContent className="p-6 sm:p-8 space-y-6 h-full flex flex-col">
                  {/* Icon & Problem */}
                  <div className="space-y-4">
                    <div className="text-4xl mb-4">{study.image}</div>
                    <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-3">
                      <p className="text-red-700 dark:text-red-400 text-sm font-medium">
                        Problem: {study.problem}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 flex-1">
                    <div>
                      <h4 className="font-bold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-slate-900 dark:text-white">
                        {study.title}
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {study.industry}
                      </p>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">
                          Challenge:
                        </span>
                        <p className="text-slate-600 dark:text-slate-300 mt-1">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <span className="font-medium text-slate-900 dark:text-white">
                          Solution:
                        </span>
                        <p className="text-slate-600 dark:text-slate-300 mt-1">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-1 gap-2">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <TrendingUp className="w-3 h-3 text-emerald-500" />
                          <span className="text-xs text-slate-600 dark:text-slate-400">
                            {metric}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-3">
                    <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="w-4 h-4 text-emerald-500" />
                        <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                          {study.result}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          Delivered in {study.timeline}
                        </span>
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      className="w-full group-hover:bg-slate-100 dark:group-hover:bg-slate-700 transition-colors"
                    >
                      View Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Case Study Modal */}
        {selectedCase && selectedCaseData && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeCaseStudy}
          >
            <div
              className="bg-white dark:bg-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {selectedCaseData.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {selectedCaseData.industry} • {selectedCaseData.client}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={closeCaseStudy}
                    className="rounded-full"
                  >
                    ✕
                  </Button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">
                      Background
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      {selectedCaseData.detailedStory.background}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">
                      Our Approach
                    </h4>
                    <ul className="space-y-2">
                      {selectedCaseData.detailedStory.approach.map(
                        (step, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-slate-600 dark:text-slate-300">
                              {step}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCaseData.detailedStory.technologies.map(
                          (tech, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="bg-slate-100 dark:bg-slate-700"
                            >
                              {tech}
                            </Badge>
                          )
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">
                        Key Metrics
                      </h4>
                      <div className="space-y-2">
                        {selectedCaseData.metrics.map((metric, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-emerald-500" />
                            <span className="text-slate-600 dark:text-slate-300">
                              {metric}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">
                      Outcome
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {selectedCaseData.detailedStory.outcome}
                    </p>
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-slate-600 dark:text-slate-300">
                      "{selectedCaseData.detailedStory.testimonial}"
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudies;
