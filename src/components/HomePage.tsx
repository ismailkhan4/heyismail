import Hero from "./Hero";
import About from "./About";
import HowItWorks from "./HowItWorks";
import CaseStudies from "./CaseStudies";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
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
