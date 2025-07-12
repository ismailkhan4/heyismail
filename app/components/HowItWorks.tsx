import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, FileText, Code2, Rocket, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      phase: "Week 1",
      title: "Discover & Validate",
      icon: Search,
      description:
        "We dive deep into your vision, validate your assumptions, and create a strategic roadmap that ensures we're building something people actually want to buy.",
      deliverables: [
        "Market validation research",
        "User persona definition",
        "Feature prioritization matrix",
        "Technical architecture plan",
      ],
      painPoint: "No more building in the dark—we validate before we code.",
    },
    {
      phase: "Week 2",
      title: "Design & Plan",
      icon: FileText,
      description:
        "Transform insights into actionable blueprints. Every wireframe, user flow, and technical decision is designed to get you to market faster.",
      deliverables: [
        "Complete wireframes & mockups",
        "User journey optimization",
        "Sprint planning & timeline",
        "Resource allocation strategy",
      ],
      painPoint: "Crystal clear roadmap—no scope creep, no surprises.",
    },
    {
      phase: "Week 3-4",
      title: "Build & Test",
      icon: Code2,
      description:
        "My vetted team executes while I oversee quality and timeline. You get daily updates and weekly demos so you're always in control.",
      deliverables: [
        "MVP development execution",
        "Quality assurance testing",
        "Performance optimization",
        "Security implementation",
      ],
      painPoint: "You stay focused on customers while we handle the code.",
    },
    {
      phase: "Week 5-6",
      title: "Launch & Optimize",
      icon: Rocket,
      description:
        "Deploy your MVP with confidence. Includes user testing, launch strategy, and immediate optimization based on real user feedback.",
      deliverables: [
        "Production deployment",
        "User onboarding optimization",
        "Analytics implementation",
        "Growth strategy foundation",
      ],
      painPoint:
        "Launch day becomes your competitive advantage, not your nightmare.",
    },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-20 lg:py-24 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20">
          <Badge variant="outline" className="text-sm px-4 py-2 rounded-2xl">
            Proven Process
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            From chaos to launch in{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              40 days
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My battle-tested methodology eliminates guesswork and ensures your
            MVP launches on time, on budget, and ready to win real customers
            from day one.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-32 left-1/2 w-0.5 h-16 bg-gradient-to-b from-border to-transparent transform -translate-x-1/2 z-0" />
              )}

              <Card className="border-border/50 hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
                <CardContent className="p-6 sm:p-8 lg:p-12">
                  <div
                    className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                      index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`space-y-6 ${
                        index % 2 === 1 ? "lg:col-start-2" : ""
                      }`}
                    >
                      {/* Phase & Icon */}
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <Badge
                            variant="secondary"
                            className="text-xs px-3 py-1 rounded-full mb-2"
                          >
                            {step.phase}
                          </Badge>
                          <h3 className="text-2xl sm:text-3xl font-bold">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>

                      {/* Pain Point Solution */}
                      <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-2xl p-4">
                        <p className="text-green-700 dark:text-green-400 font-medium">
                          ✓ {step.painPoint}
                        </p>
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div
                      className={`${
                        index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                      }`}
                    >
                      <div className="bg-muted/30 dark:bg-muted/20 rounded-3xl p-6 sm:p-8">
                        <h4 className="font-semibold text-lg mb-6 text-center">
                          Key Deliverables
                        </h4>
                        <ul className="space-y-4">
                          {step.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm sm:text-base leading-relaxed">
                                {deliverable}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16 space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Ready to escape development hell?
            </h3>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Book a free strategy call and I'll show you exactly how to turn
              your idea into a working MVP that customers love.
            </p>
          </div>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
            onClick={scrollToContact}
          >
            Start Your 40-Day Sprint
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
