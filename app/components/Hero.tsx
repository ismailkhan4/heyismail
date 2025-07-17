import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Lightbulb,
  Play,
} from "lucide-react";
import { cn } from "../lib/utils";
import Link from "next/link";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCaseStudies = () => {
    const caseStudiesSection = document.getElementById("case-studies");
    if (caseStudiesSection) {
      caseStudiesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openCrispChat = () => {
    if (window.$crisp) {
      window.$crisp.push(["do", "chat:open"]);
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 z-50 transition-all duration-300 ease-in-out px-6 py-4",
          scrolled
            ? "w-1/2 left-1/2 -translate-x-1/2 mt-4 rounded-xl shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur"
            : "w-3/4 left-1/2 -translate-x-1/2 mt-4 bg-transparent"
        )}
      >
        <div className="flex justify-between items-center text-sm font-semibold text-slate-900 dark:text-white">
          <div className="text-lg font-bold">
            <Link href="#">heyIsmail</Link>
          </div>
          <div className="flex gap-6">
            <Link href="#about" className="hover:underline">
              About
            </Link>
            <a href="#how-it-works" className="hover:underline">
              How it works?
            </a>
            <a href="#case-studies" className="hover:underline">
              Case Studies
            </a>
            <a href="#pricing" className="hover:underline">
              Pricing
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </nav>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-purple-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-full text-sm text-emerald-700 dark:text-emerald-400 font-medium">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Taking new projects for Q1 2025
              </div>

              {/* Headline */}
              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl xl:text-6xl leading-tight tracking-tight">
                  Stop getting stuck in{" "}
                  <span className="bg-gradient-to-r from-emerald-500 via-green-400 to-green-600 bg-clip-text text-transparent">
                    development hell
                  </span>
                </h1>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-600 dark:text-slate-300 leading-relaxed">
                  I turn your startup idea into a{" "}
                  <span className="text-slate-900 dark:text-white font-bold">
                    working SaaS MVP
                  </span>{" "}
                  in 40 days—without the technical overwhelm
                </h2>

                <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  You're not a developer. You shouldn't have to become one. Get
                  your MVP built by vetted experts while you focus on what
                  matters: your customers.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button
                  size="lg"
                  className="group text-lg px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  onClick={scrollToContact}
                >
                  <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Book Free Strategy Call
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 group"
                  onClick={openCrispChat}
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Quick Chat
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium">
                  Trusted by founders from
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-8 text-slate-400 dark:text-slate-500">
                  <div className="text-lg font-bold hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-default">
                    Y Combinator
                  </div>
                  <div className="text-lg font-bold hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-default">
                    Techstars
                  </div>
                  <div className="text-lg font-bold hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-default">
                    500 Startups
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Dashboard */}
            <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-full max-w-md">
                {/* Main Dashboard Card */}
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 shadow-2xl backdrop-blur-sm relative z-10">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center">
                        <Lightbulb className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                          40-Day MVP Sprint
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Idea → Working Product
                        </p>
                      </div>
                    </div>

                    {/* Progress Steps */}
                    <div className="space-y-4">
                      {[
                        {
                          week: "Week 1",
                          task: "Strategy & Validation",
                          status: "complete",
                        },
                        {
                          week: "Week 2-3",
                          task: "MVP Development",
                          status: "complete",
                        },
                        {
                          week: "Week 4",
                          task: "Testing & Polish",
                          status: "current",
                        },
                        {
                          week: "Week 5-6",
                          task: "Launch & Optimization",
                          status: "pending",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
                        >
                          <div
                            className={`w-3 h-3 rounded-full flex-shrink-0 ${
                              item.status === "complete"
                                ? "bg-emerald-500"
                                : item.status === "current"
                                ? "bg-blue-500 animate-pulse"
                                : "bg-slate-300 dark:bg-slate-600"
                            }`}
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-sm text-slate-900 dark:text-white">
                              {item.week}
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                              {item.task}
                            </p>
                          </div>
                          {item.status === "complete" && (
                            <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          )}
                          {item.status === "current" && (
                            <Clock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl opacity-20 animate-bounce" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl opacity-20 animate-bounce delay-1000" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
