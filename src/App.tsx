import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import CaseStudies from "./components/CaseStudies";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground font-inter">
        <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero />
        <About />
        <HowItWorks />
        <CaseStudies />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
