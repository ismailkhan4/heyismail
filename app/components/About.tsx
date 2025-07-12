import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Users,
  Zap,
  Target,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

const About = () => {
  const painPoints = [
    {
      icon: AlertTriangle,
      title: "Technical Paralysis",
      description:
        "You know what to build, but hiring developers feels like gambling with your future.",
    },
    {
      icon: Target,
      title: "Endless Delays",
      description:
        '"Just two more weeks" turns into months while your competition moves ahead.',
    },
    {
      icon: TrendingUp,
      title: "Budget Blackhole",
      description:
        "Development costs spiral out of control with no end in sight and nothing to show for it.",
    },
  ];

  const solutions = [
    {
      icon: Target,
      title: "Strategic Partnership",
      description:
        "I'm your technical co-pilot, not just another dev shop. I think like a founder because I am one.",
    },
    {
      icon: Zap,
      title: "Proven 40-Day Process",
      description:
        "Battle-tested methodology that's launched 50+ MVPs. No more guessing—just results.",
    },
    {
      icon: Users,
      title: "Pre-Vetted Team",
      description:
        "Hand-picked developers, designers, and specialists who've been through my process 100+ times.",
    },
  ];

  const achievements = [
    "50+ MVPs launched successfully",
    "95% on-time delivery rate",
    "$2M+ raised by my clients",
    "4.9/5 founder satisfaction",
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-muted/20 dark:bg-muted/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20">
          <Badge variant="outline" className="text-sm px-4 py-2 rounded-2xl">
            The Problem & Solution
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Stop wrestling with{" "}
            <span className="text-destructive">technical chaos</span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            You're a brilliant founder with a game-changing idea. But you're
            stuck in technical quicksand, watching opportunities slip away while
            you hunt for the right developers.
          </p>
        </div>

        {/* Pain Points */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Sound familiar?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {painPoints.map((pain, index) => (
              <Card
                key={index}
                className="border-destructive/20 bg-destructive/5 dark:bg-destructive/10 hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-destructive/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <pain.icon className="w-6 h-6 text-destructive" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold">
                      {pain.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {pain.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Solution */}
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Here's how I{" "}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  solve this
                </span>
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  After watching too many brilliant founders get stuck in
                  development hell, I created a system that eliminates the
                  chaos.
                </p>

                <p>
                  I'm not here to write code—I'm here to be your strategic
                  technical partner. While my vetted team handles the
                  development, I ensure you're building the right thing, the
                  right way, for the right customers.
                </p>

                <p className="font-semibold text-foreground">
                  You get a working MVP that real customers actually want to pay
                  for.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 justify-center lg:justify-start"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="font-medium text-sm sm:text-base">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Solutions */}
          <div className="space-y-6">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="border-border/50 hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-3 flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold">
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
