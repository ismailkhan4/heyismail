"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const heyIsmailLanding = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleMouseMove = (
      e: React.MouseEvent<Element, MouseEvent> | MouseEvent
    ): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      name: "JobIt AI",
      desc: "Intelligent job matching using semantic search and AI recommendations. Built in 6 days, live users in 48 hours.",
      tags: ["Next.js", "OpenAI", "Supabase", "Stripe"],
      metrics: { users: "2.3K", revenue: "$12K MRR", time: "6 days" },
      gradient: "from-emerald-500/10 to-teal-500/10",
      link: "#",
    },
    {
      name: "FundFlow",
      desc: "Real-time portfolio tracking dashboard with predictive analytics. Helped close $2M seed round.",
      tags: ["React", "D3.js", "PostgreSQL"],
      metrics: { users: "500+", revenue: "Seed funded", time: "7 days" },
      gradient: "from-teal-500/10 to-cyan-500/10",
      link: "#",
    },
    {
      name: "MentorMatch",
      desc: "AI-powered founder-mentor matching platform. 500+ active connections in first month.",
      tags: ["Next.js", "Firebase", "OpenAI"],
      metrics: { users: "1.2K", revenue: "Pre-rev", time: "5 days" },
      gradient: "from-cyan-500/10 to-blue-500/10",
      link: "#",
    },
    {
      name: "PitchDeck AI",
      desc: "Generate investor-ready pitch decks from natural language. 1000+ decks created.",
      tags: ["OpenAI GPT-4", "Next.js", "PDF.js"],
      metrics: { users: "3.5K", revenue: "$8K MRR", time: "6 days" },
      gradient: "from-blue-500/10 to-indigo-500/10",
      link: "#",
    },
  ];

  const testimonials = [
    {
      quote:
        "We went from idea to 100 paying customers in 3 weeks. The MVP quality was insane.",
      name: "Chris Martinez",
      role: "Founder @ JobIt",
      company: "Y Combinator W23",
      avatar: "CM",
    },
    {
      quote:
        "Closed our seed round 2 weeks after launch. Investors loved the product velocity.",
      name: "Sarah Chen",
      role: "CEO @ FundFlow",
      company: "Pre-seed → $2M",
      avatar: "SC",
    },
    {
      quote:
        "Finally, a builder who thinks like a founder. Fast execution, zero BS.",
      name: "Alex Thompson",
      role: "Founder @ MentorMatch",
      company: "500+ Active Users",
      avatar: "AT",
    },
  ];

  const pricingPlans = [
    {
      name: "MVP Sprint",
      price: "$4,999",
      duration: "7 days",
      features: [
        "Core MVP features only",
        "AI-powered development",
        "Modern UI/UX design",
        "Mobile responsive",
        "Basic analytics setup",
        "7-day delivery guarantee",
        "14 days of support",
      ],
      cta: "Start Building",
      popular: false,
    },
    {
      name: "Launch Ready",
      price: "$8,999",
      duration: "10 days",
      features: [
        "Everything in MVP Sprint",
        "Payment integration (Stripe)",
        "User authentication",
        "Database architecture",
        "API integrations",
        "SEO optimization",
        "30 days of support",
        "Investor deck template",
      ],
      cta: "Most Popular",
      popular: true,
    },
    {
      name: "Scale Package",
      price: "$14,999",
      duration: "14 days",
      features: [
        "Everything in Launch Ready",
        "Admin dashboard",
        "Advanced analytics",
        "Email automation",
        "Multi-user support",
        "AI/ML integration",
        "60 days of support",
        "Growth consultation",
      ],
      cta: "Go Enterprise",
      popular: false,
    },
  ];

  const whyNotOptions = [
    {
      title: "Traditional Agency",
      pain: "$50K+ & 3-6 months",
      problems: [
        "Slow communication",
        "Feature creep",
        "Missing deadlines",
        "Junior devs on your project",
      ],
    },
    {
      title: "Freelancer",
      pain: "Disappears after payment",
      problems: [
        "No accountability",
        "Inconsistent quality",
        "One-person risk",
        "No support after launch",
      ],
    },
    {
      title: "Offshore Team",
      pain: "Language barriers & timezone hell",
      problems: [
        "Misunderstood requirements",
        "Code quality issues",
        "Hard to manage",
        "Hidden costs",
      ],
    },
    {
      title: "DIY No-Code",
      pain: "Looks cheap, scales poorly",
      problems: [
        "Template limitations",
        "No custom features",
        "Not investor-ready",
        "Can't handle growth",
      ],
    },
  ];

  const techStack = [
    { name: "Next.js", icon: "⚛️", category: "Frontend" },
    { name: "TailwindCSS", icon: "🎨", category: "Styling" },
    { name: "Supabase", icon: "⚡", category: "Backend" },
    { name: "OpenAI", icon: "🤖", category: "AI" },
    { name: "Stripe", icon: "💳", category: "Payments" },
    { name: "Vercel", icon: "▲", category: "Hosting" },
    { name: "Framer", icon: "✨", category: "Animation" },
    { name: "Resend", icon: "📧", category: "Email" },
  ];

  const faqs = [
    {
      q: "How can you build an MVP in just 7 days?",
      a: "We use AI to generate 70% of the boilerplate code, architecture, and UI components. Our human developers focus on the unique logic, polish, and business-critical features. This hybrid approach gives you the speed of AI with the quality of expert development.",
    },
    {
      q: "What if my idea changes during development?",
      a: "We include one major pivot or feature swap during the build. After that, we can discuss scope adjustments. Our goal is a working MVP, not a feature-complete product — we can always add more after launch.",
    },
    {
      q: "Do I own the code?",
      a: "Yes, 100%. You get full source code access, documentation, and deploy credentials. No vendor lock-in, no recurring fees for the code itself.",
    },
    {
      q: "What happens after the 7 days?",
      a: "You get 14-30 days of support (depending on package) for bug fixes and minor tweaks. After that, you can either maintain it yourself, hire your own dev, or work with us on a retainer for iterations and new features.",
    },
    {
      q: "Is this just a template with my logo?",
      a: "No. Every MVP is custom-built for your specific use case. We use modern frameworks and best practices, but the features, logic, and design are unique to your business model.",
    },
    {
      q: "What if I need investor-ready documentation?",
      a: "Our Launch Ready and Scale packages include technical documentation and an investor deck template. We help you articulate your tech stack, scalability plan, and development roadmap.",
    },
  ];

  const comparisonData = [
    {
      feature: "Time to MVP",
      us: "7 days",
      agency: "3-6 months",
      freelancer: "2-4 months",
      nocode: "2 weeks",
    },
    {
      feature: "Cost",
      us: "$5K-15K",
      agency: "$50K-200K",
      freelancer: "$10K-40K",
      nocode: "$0-500",
    },
    {
      feature: "Quality",
      us: "Investor-ready",
      agency: "Enterprise",
      freelancer: "Variable",
      nocode: "Template",
    },
    {
      feature: "Support",
      us: "14-60 days",
      agency: "Ongoing ($$)",
      freelancer: "None",
      nocode: "Community",
    },
    {
      feature: "Scalability",
      us: "Built to scale",
      agency: "Over-engineered",
      freelancer: "Unknown",
      nocode: "Limited",
    },
    {
      feature: "Code ownership",
      us: "100% yours",
      agency: "100% yours",
      freelancer: "100% yours",
      nocode: "Platform locked",
    },
  ];

  const metrics = [
    { value: "7", label: "Days Average", suffix: "" },
    { value: "20", label: "MVPs Shipped", suffix: "+" },
    { value: "70", label: "AI-Powered", suffix: "%" },
    { value: "$12M", label: "Raised by Clients", suffix: "+" },
  ];

  const clients = [
    { name: "Y Combinator", logo: "/logos/yc.png" },
    { name: "Techstars", logo: "/logos/techstars.png" },
    { name: "500 Startups", logo: "/logos/500startups.png" },
    { name: "AngelPad", logo: "/logos/angelpad.png" },
  ];

  return (
    <div className="bg-black text-white font-sans antialiased">
      {/* Custom Cursor Effect */}
      <div
        className="fixed w-96 h-96 pointer-events-none z-50 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
          opacity: 0.6,
        }}
      />

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-emerald-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
          <motion.div
            className="text-xl font-semibold tracking-tight flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl">👋</span>
            <span>The MVP OS</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-1">
            {["Work", "Process", "Pricing", "FAQ"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="px-4 py-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors rounded-lg hover:bg-emerald-500/5"
              >
                {item}
              </button>
            ))}
          </div>

          <a
            href="https://cal.com/heyismail/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-black text-sm font-semibold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50"
          >
            <span className="relative z-10">Book Free Call</span>
          </a>
        </div>
      </motion.nav>

      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.05) 1px, transparent 1px)`,
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        <motion.div
          className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">
                Available for new projects
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] tracking-tight">
              Ship Your MVP in
              <br />
              <span className="bg-gradient-to-r from-[#d9e8d5] via-white to-[#1e473d] bg-clip-text text-transparent">
                7 Days or Less
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Turn your idea into an investor-ready product. AI builds 70%, we
              perfect the rest. No agencies, no freelancers — just results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://cal.com/heyismail/idea-call"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white text-black font-medium rounded-lg hover:scale-105 transition-all flex items-center gap-2"
              >
                Schedule Free Call
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <button
                onClick={() => scrollToSection("work")}
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-all"
              >
                View Our Work
              </button>
            </div>

            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16 flex flex-col items-center gap-4"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[
                    "/client-1.jpg",
                    "/client-2.jpg",
                    "/client-3.jpg",
                    "/client-4.jpg",
                  ].map((src, i) => (
                    <Image
                      width={32}
                      height={32}
                      key={i}
                      src={src}
                      alt={`Client ${i + 1}`}
                      className={`w-8 h-8 rounded-full border-2 border-black`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-400">
                  20+ founders shipped MVPs
                </span>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span>⚡ 7-day delivery</span>
                <span>🚀 $12M+ raised</span>
                <span>💯 100% satisfaction</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative border-t border-emerald-500/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Founders Choose Us
            </h2>
            <p className="text-xl text-gray-400">
              Because the traditional options suck
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyNotOptions.map((option, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all group"
              >
                <div className="text-red-400 text-4xl mb-4">❌</div>
                <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                <div className="text-red-400 text-sm font-semibold mb-4">
                  {option.pain}
                </div>
                <ul className="space-y-2">
                  {option.problems.map((problem, j) => (
                    <li
                      key={j}
                      className="text-sm text-gray-400 flex items-start gap-2"
                    >
                      <span className="text-red-400">•</span>
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-8">
              <div className="text-emerald-400 text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-3">Our Way</h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Fixed price. Fixed timeline. Real results. No surprises.
              </p>
              <a
                href="https://cal.com/heyismail/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-black font-semibold rounded-lg hover:scale-105 transition-all"
              >
                Let's Build
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="work"
        className="py-32 relative border-t border-emerald-500/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real MVPs. Real Traction.
            </h2>
            <p className="text-xl text-gray-400">
              From concept to paying customers in one week
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-emerald-500/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-all cursor-pointer overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold">{project.name}</h3>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </motion.a>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs text-emerald-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 text-sm">
                    <div>
                      <div className="text-emerald-400 font-semibold">
                        {project.metrics.users}
                      </div>
                      <div className="text-gray-500 text-xs">Users</div>
                    </div>
                    <div>
                      <div className="text-emerald-400 font-semibold">
                        {project.metrics.revenue}
                      </div>
                      <div className="text-gray-500 text-xs">Status</div>
                    </div>
                    <div>
                      <div className="text-emerald-400 font-semibold">
                        {project.metrics.time}
                      </div>
                      <div className="text-gray-500 text-xs">Build Time</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="process"
        className="py-32 relative border-t border-emerald-500/10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your 7-Day Journey
            </h2>
            <p className="text-xl text-gray-400">
              From scribbles on a napkin to a live product
            </p>
          </motion.div>

          <div className="space-y-24 max-w-4xl mx-auto">
            {[
              {
                day: "Day 1",
                title: "Discovery & Scope",
                desc: "We hop on a call, map your idea, define must-have features, and nail down your MVP scope. No fluff — just what you need to validate and launch.",
                icon: "🎯",
                deliverable: "Scope doc + timeline",
              },
              {
                day: "Day 2-3",
                title: "AI-Powered Build",
                desc: "Our AI system generates the foundation: database schema, API routes, UI components. We handle the architecture while you focus on your launch strategy.",
                icon: "⚡",
                deliverable: "Working prototype",
              },
              {
                day: "Day 4-5",
                title: "Polish & Integration",
                desc: "We add the human touch: custom logic, integrations (Stripe, auth, etc.), and polish. This is where your MVP becomes investor-ready.",
                icon: "✨",
                deliverable: "Beta version",
              },
              {
                day: "Day 6-7",
                title: "Deploy & Launch",
                desc: "Your MVP goes live. We set up hosting, analytics, monitoring, and give you the keys. You own everything — code, deploy access, docs.",
                icon: "🚀",
                deliverable: "Live MVP + handoff",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-start gap-8">
                  <motion.div
                    className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-2xl flex items-center justify-center text-3xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {step.icon}
                  </motion.div>

                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs text-emerald-400 font-semibold">
                        {step.day}
                      </span>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed mb-4">
                      {step.desc}
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm text-emerald-400">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{step.deliverable}</span>
                    </div>
                  </div>
                </div>

                {i < 3 && (
                  <div className="absolute left-10 top-24 w-0.5 h-24 bg-gradient-to-b from-emerald-500/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative border-t border-emerald-500/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built With Modern Tech
            </h2>
            <p className="text-xl text-gray-400">
              Enterprise-grade stack, startup speed
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-white/5 border border-emerald-500/10 rounded-xl p-6 hover:border-emerald-500/30 transition-all text-center group cursor-pointer"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <div className="font-semibold mb-1">{tech.name}</div>
                <div className="text-xs text-gray-500">{tech.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative border-t border-emerald-500/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How We Stack Up
            </h2>
            <p className="text-xl text-gray-400">
              Honest comparison with your alternatives
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-emerald-500/20">
                  <th className="text-left py-4 px-6 text-gray-400 font-medium">
                    Feature
                  </th>
                  <th className="py-4 px-6 text-emerald-400 font-semibold bg-emerald-500/5">
                    The MVP OS
                  </th>
                  <th className="py-4 px-6 text-gray-400 font-medium">
                    Agency
                  </th>
                  <th className="py-4 px-6 text-gray-400 font-medium">
                    Freelancer
                  </th>
                  <th className="py-4 px-6 text-gray-400 font-medium">
                    No-Code
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-4 px-6 font-medium">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-emerald-400 font-semibold bg-emerald-500/5">
                      {row.us}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-400">
                      {row.agency}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-400">
                      {row.freelancer}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-400">
                      {row.nocode}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="py-32 relative border-t border-emerald-500/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400">
              No hourly rates. No surprise fees. Just results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-white/5 border rounded-2xl p-8 hover:border-emerald-500/30 transition-all ${
                  plan.popular
                    ? "border-emerald-500/40 bg-gradient-to-b from-emerald-500/10 to-transparent"
                    : "border-emerald-500/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-black text-xs font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-emerald-400">
                      {plan.price}
                    </span>
                    <span className="text-gray-500">/ {plan.duration}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://cal.com/heyismail/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 rounded-lg font-semibold text-center transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-black hover:scale-105 shadow-lg shadow-emerald-500/50"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12 text-gray-400"
          >
            <p>
              All packages include source code ownership, deployment, and
              documentation.
            </p>
            <p className="mt-2">
              Need custom features?{" "}
              <a
                href="https://cal.com/heyismail/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline"
              >
                Let's talk
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 relative border-t border-emerald-500/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Founders Are Saying
            </h2>
            <p className="text-xl text-gray-400">Real people, real results</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((test, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-emerald-500/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center font-bold text-black">
                    {test.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{test.name}</div>
                    <div className="text-sm text-gray-400">{test.role}</div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-4">
                  "{test.quote}"
                </p>

                <div className="text-xs text-emerald-400 font-semibold">
                  {test.company}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="py-32 relative border-t border-emerald-500/10"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-gray-400">Everything you need to know</p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-emerald-500/10 rounded-xl p-6 hover:border-emerald-500/30 transition-all"
              >
                <h3 className="text-xl font-bold mb-3 text-emerald-400">
                  {faq.q}
                </h3>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-4">Still have questions?</p>
            <a
              href="https://wa.me/923159807707"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Chat with me on WhatsApp</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden border-t border-emerald-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm text-emerald-400">
                Limited slots available
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Move Fast?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Book a free 15-minute call. We'll map your idea, estimate
              timeline, and show you exactly how we'll build it. No pitch. No
              pressure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://cal.com/heyismail/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-black text-lg font-bold rounded-lg hover:scale-105 transition-all shadow-2xl shadow-emerald-500/50 flex items-center gap-2"
              >
                Book Your Free Call
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <a
                href="https://wa.me/923159807707"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-white/5 border border-emerald-500/20 text-white text-lg font-semibold rounded-lg hover:bg-white/10 hover:border-emerald-500/40 transition-all"
              >
                Message on WhatsApp
              </a>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              ⚡ Response time: Under 2 hours
            </p>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-emerald-500/10 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div>
              <div className="text-xl font-semibold mb-2 flex items-center gap-2">
                <span className="text-2xl">👋</span>
                <span>The MVP OS</span>
              </div>
              <p className="text-sm text-gray-500">
                Built for founders, not freelancers.
              </p>
            </div>

            <div className="flex items-center gap-8">
              <button
                onClick={() => scrollToSection("work")}
                className="text-gray-400 hover:text-emerald-400 transition text-sm"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-gray-400 hover:text-emerald-400 transition text-sm"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-400 hover:text-emerald-400 transition text-sm"
              >
                FAQ
              </button>
              <a
                href="https://wa.me/923159807707"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition text-sm"
              >
                Contact
              </a>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center text-gray-600 text-sm pt-8 border-t border-emerald-500/10">
            © {new Date().getFullYear()} heyIsmail. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default heyIsmailLanding;
