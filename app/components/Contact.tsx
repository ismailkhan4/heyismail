import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  MessageCircle,
  Mail,
  Clock,
  CheckCircle,
  Phone,
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Calendar,
      title: "Free Strategy Call",
      description:
        "30-min consultation to discuss your project and see if we're a good fit",
      action: "Book Call",
      primary: true,
      href: "https://calendly.com/your-calendly-link",
    },
    {
      icon: MessageCircle,
      title: "Quick Message",
      description:
        "Send me your project details and I'll respond within 24 hours",
      action: "Send Message",
      primary: false,
      href: "#crisp-chat",
    },
    {
      icon: Mail,
      title: "Direct Email",
      description: "Prefer email? Drop me a line with your project details",
      action: "hello@yourname.com",
      primary: false,
      href: "mailto:hello@yourname.com",
    },
  ];

  const processSteps = [
    "Free 30-min strategy call (no sales pitch)",
    "Custom proposal within 24 hours",
    "Start within 1 week of agreement",
    "Weekly demos & direct access to me",
    "Working MVP in 40 days guaranteed",
  ];

  const handleContactClick = (href: string) => {
    if (href === "#crisp-chat") {
      // Open Crisp chat widget
      if (window.$crisp) {
        window.$crisp.push(["do", "chat:open"]);
      }
    } else if (href.startsWith("mailto:")) {
      window.location.href = href;
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-muted/20 dark:bg-muted/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 lg:mb-20">
          <Badge variant="outline" className="text-sm px-4 py-2 rounded-2xl">
            Let's Talk
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Ready to stop struggling{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              alone?
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Book a free strategy call and I'll show you exactly how to turn your
            idea into a working MVP. No sales pitch—just honest advice about
            your specific situation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-start">
          {/* Left column - Contact methods */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className={`border-border/50 hover:shadow-lg transition-all duration-300 group cursor-pointer ${
                    method.primary
                      ? "border-blue-500/50 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20"
                      : ""
                  }`}
                  onClick={() => handleContactClick(method.href)}
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                          method.primary
                            ? "bg-gradient-to-br from-blue-500 to-purple-600 group-hover:scale-110"
                            : "bg-muted group-hover:bg-muted/80"
                        } transition-all duration-300`}
                      >
                        <method.icon
                          className={`w-6 h-6 ${
                            method.primary ? "text-white" : "text-foreground"
                          }`}
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg">
                          {method.title}
                        </h3>
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                          {method.description}
                        </p>
                      </div>

                      <Button
                        variant={method.primary ? "default" : "outline"}
                        className={`rounded-xl whitespace-nowrap ${
                          method.primary
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                            : ""
                        }`}
                      >
                        {method.action}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Calendly embed placeholder */}
            <Card className="border-border/50">
              <CardContent className="p-6 sm:p-8">
                <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-2xl p-8 sm:p-12 text-center">
                  <Calendar className="w-16 h-16 mx-auto mb-4 text-blue-500" />
                  <h3 className="font-semibold text-lg mb-2">
                    Schedule Your Free Strategy Call
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                    Pick a time that works for you. I'll call you directly.
                  </p>
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() =>
                      window.open(
                        "https://calendly.com/your-calendly-link",
                        "_blank"
                      )
                    }
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Open Calendar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right column - Process & guarantees */}
          <div className="space-y-6 sm:space-y-8">
            {/* What happens next */}
            <Card className="border-border/50">
              <CardContent className="p-6 sm:p-8 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <h3 className="font-semibold text-lg">
                      What happens on our call?
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    I'll spend 30 minutes understanding your idea, challenges,
                    and goals. Then I'll give you a clear roadmap—whether we
                    work together or not.
                  </p>
                </div>

                <ul className="space-y-4">
                  {processSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                          {index + 1}
                        </span>
                      </div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Quick facts */}
            <Card className="border-border/50">
              <CardContent className="p-6 sm:p-8 space-y-6">
                <h3 className="font-semibold text-lg">You're in good hands</h3>

                <div className="space-y-4">
                  {[
                    "No high-pressure sales tactics",
                    "Honest advice even if we're not a fit",
                    "Custom proposal within 24 hours",
                    "Money-back guarantee if you're not satisfied",
                    "Direct access to me throughout the project",
                  ].map((fact, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm sm:text-base">{fact}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-6 border border-green-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-semibold text-green-700 dark:text-green-400">
                  Available for new projects
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Currently booking for Q1 2024. Limited spots available—let's see
                if your project is a good fit.
              </p>
            </div>

            {/* Alternative contact */}
            <div className="text-center p-6 border border-border/30 rounded-2xl">
              <h4 className="font-semibold mb-2">
                Prefer to start with email?
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Send me your project details and I'll respond personally within
                24 hours.
              </p>
              <Button
                variant="outline"
                className="rounded-xl"
                onClick={() =>
                  (window.location.href =
                    "mailto:hello@yourname.com?subject=MVP Project Inquiry")
                }
              >
                <Mail className="w-4 h-4 mr-2" />
                hello@yourname.com
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
