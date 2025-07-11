import {
  Calendar,
  Mail,
  MessageCircle,
  Linkedin,
  Twitter,
  ArrowUp,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { name: "MVP Development", href: "#how-it-works" },
      { name: "Strategy Consulting", href: "#pricing" },
      { name: "Technical Due Diligence", href: "#contact" },
      { name: "Team Building Guidance", href: "#contact" },
    ],
    resources: [
      { name: "Case Studies", href: "#case-studies" },
      { name: "Founder's Guide to MVPs", href: "#" },
      { name: "MVP Readiness Checklist", href: "#" },
      { name: "Blog", href: "#" },
    ],
    contact: [
      {
        name: "Book Strategy Call",
        href: "https://calendly.com/your-calendly-link",
        icon: Calendar,
        external: true,
      },
      {
        name: "Send Message",
        href: "mailto:hello@yourname.com?subject=MVP Project Inquiry",
        icon: MessageCircle,
      },
      {
        name: "Email Direct",
        href: "mailto:hello@yourname.com",
        icon: Mail,
      },
    ],
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/yourprofile",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/yourhandle",
      icon: Twitter,
    },
  ];

  const handleLinkClick = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, "_blank");
    } else if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href.startsWith("mailto:")) {
      window.location.href = href;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main footer content */}
        <div className="py-12 sm:py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold">
                Your MVP Partner
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Helping non-technical founders escape development hell and
                launch successful SaaS MVPs in 40 days.
              </p>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(social.href, true)}
                  className="w-10 h-10 bg-muted hover:bg-muted/80 rounded-xl flex items-center justify-center transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </button>
              ))}
            </div>

            <Badge
              variant="outline"
              className="text-xs px-3 py-1 rounded-full w-fit"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Available for Q1 2024
            </Badge>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="space-y-3">
              {links.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground">Resources</h4>
            <ul className="space-y-3">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground">Get Started</h4>
            <ul className="space-y-3">
              {links.contact.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href, link.external)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-2"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA in footer */}
            <div className="pt-4">
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl text-xs"
                onClick={() =>
                  handleLinkClick(
                    "https://calendly.com/your-calendly-link",
                    true
                  )
                }
              >
                <Calendar className="w-3 h-3 mr-1" />
                Book Free Call
              </Button>
            </div>
          </div>
        </div>

        <Separator className="opacity-20" />

        {/* Bottom section */}
        <div className="py-6 sm:py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Your Name. All rights reserved. Building the future,
            one MVP at a time.
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <button className="hover:text-foreground transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-foreground transition-colors">
              Terms of Service
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-foreground transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
