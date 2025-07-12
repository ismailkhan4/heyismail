import Hero from "./Hero";
import About from "./About";
import HowItWorks from "./HowItWorks";
import CaseStudies from "./CaseStudies";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Footer from "./Footer";
import "../styles/globals.css";
import "../styles/index.css";

const HomePage = () => {
  return (
    <div className="font-sans min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <HowItWorks />
      <CaseStudies />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
