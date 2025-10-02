import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Check,
  Calendar,
  MessageCircle,
  Star,
  AlertTriangle,
  DollarSign,
} from "lucide-react";

const Pricing = () => {
  const packages = [
    {
      name: "MVP Sprint",
      price: "$0,000",
      duration: "40 days",
      description: "Perfect for validated ideas ready for execution",
      features: [
        "Complete MVP development",
        "Strategic planning & validation",
        "Vetted development team",
        "Weekly progress demos",
        "Launch strategy & deployment",
        "2 weeks post-launch support",
        "Full source code ownership",
      ],
      popular: true,
      cta: "Start Your Sprint",
      savings: "vs $50K+ with agencies",
    },
    {
      name: "Validation + MVP",
      price: "$0,000",
      duration: "50 days",
      description: "For early-stage ideas that need market validation first",
      features: [
        "Everything in MVP Sprint",
        "Market research & validation",
        "Customer discovery interviews",
        "Business model refinement",
        "Go-to-market strategy",
        "Investor-ready documentation",
        "4 weeks post-launch support",
      ],
      popular: false,
      cta: "Validate & Build",
      savings: "vs 6+ months solo",
    },
    {
      name: "Strategy Consulting",
      price: "$000",
      duration: "1 week",
      description: "Strategic guidance when you need direction, not execution",
      features: [
        "Deep strategy session (4 hours)",
        "Technical architecture review",
        "Feature prioritization workshop",
        "Development roadmap",
        "Team hiring guidance",
        "30-day Slack support",
        "Implementation checklist",
      ],
      popular: false,
      cta: "Book Strategy Session",
      savings: "vs months of uncertainty",
    },
  ];

  const guarantee = [
    "On-time delivery or 50% refund",
    "Unlimited revisions during development",
    "30-day money-back guarantee",
    "Full IP and source code ownership",
  ];

  const comparison = [
    {
      scenario: "Traditional Agency",
      cost: "$50K - $150K",
      timeline: "6-12 months",
      problems: [
        "Scope creep",
        "Communication hell",
        "Junior developers",
        "No strategic input",
      ],
    },
    {
      scenario: "Hiring In-House",
      cost: "$200K+ per year",
      timeline: "3-6 months hiring + 6+ months building",
      problems: [
        "Recruitment nightmare",
        "Management overhead",
        "Skills gaps",
        "Retention risk",
      ],
    },
    {
      scenario: "Going Solo",
      cost: "Your sanity",
      timeline: "Forever (maybe never)",
      problems: [
        "Technical overwhelm",
        "Analysis paralysis",
        "No accountability",
        "Opportunity cost",
      ],
    },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20">
          <Badge variant="outline" className="text-sm px-4 py-2 rounded-2xl">
            Investment Options
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Stop bleeding money on{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              failed attempts
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            You've probably already spent more on failed developers and agencies
            than my entire fee. Here's how to finally get it right.
          </p>
        </div>

        {/* Cost Comparison */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            The real cost of getting this wrong
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {comparison.map((option, index) => (
              <Card
                key={index}
                className="border-destructive/30 bg-destructive/5 dark:bg-destructive/10"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="w-6 h-6 text-destructive" />
                      <h4 className="font-bold text-lg">{option.scenario}</h4>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-destructive" />
                        <span className="font-semibold">{option.cost}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-destructive" />
                        <span className="text-sm text-muted-foreground">
                          {option.timeline}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {option.problems.map((problem, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {problem}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`border-border/50 hover:shadow-xl transition-all duration-300 relative h-full ${
                pkg.popular
                  ? "border-blue-500/50 shadow-lg scale-105 lg:scale-110"
                  : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-2xl shadow-lg">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center space-y-4 pb-6">
                <CardTitle className="text-xl sm:text-2xl font-bold">
                  {pkg.name}
                </CardTitle>
                <div className="space-y-2">
                  <div className="text-3xl sm:text-4xl font-bold">
                    {pkg.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {pkg.duration} delivery
                  </div>
                  {pkg.savings && (
                    <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                      Saves you {pkg.savings}
                    </div>
                  )}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {pkg.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6 flex-1 flex flex-col">
                <ul className="space-y-3 flex-1">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-4 sm:py-6 rounded-2xl font-semibold text-base sm:text-lg ${
                    pkg.popular
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  } transition-all duration-300`}
                  onClick={scrollToContact}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  {pkg.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guarantee */}
        <div className="bg-muted/30 dark:bg-muted/20 rounded-3xl p-8 sm:p-12 mb-12 sm:mb-16">
          <div className="text-center space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Zero-risk guarantee
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm so confident in my process that I put my money where my mouth
              is. Your success is guaranteed, or you get your money back.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {guarantee.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 justify-center sm:justify-start"
                >
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-sm font-medium text-center sm:text-left">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold">
            Still have questions?
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book a free 30-minute strategy call. I'll answer all your questions
            and show you exactly how to turn your idea into a working MVP that
            customers love.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-2xl border-2 hover:bg-muted/50 transition-all duration-300"
            onClick={scrollToContact}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Schedule Free Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
