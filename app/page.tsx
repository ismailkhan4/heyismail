"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const brand = {
  primary: "#1e473d",
  secondary: "#d9e8d5",
};

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden"
        style={{ backgroundColor: brand.primary, color: "white" }}
      >
        {/* Hero Background Overlay */}
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight"
          >
            Build Your MVP. Launch Fast. Scale Smart.
          </motion.h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200">
            I help startups and founders turn ideas into market-ready products
            with speed, clarity, and reliability.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-semibold shadow-md"
              style={{ backgroundColor: brand.secondary, color: brand.primary }}
            >
              View Portfolio <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-semibold border-2"
              style={{ borderColor: brand.secondary }}
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/me.png"
            alt="About Me"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
          <div>
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: brand.primary }}
            >
              About Me
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm Ismail, a developer passionate about helping startups build
              <span className="font-semibold">
                {" "}
                MVPs that impress investors and users alike
              </span>
              . I've worked across industries delivering scalable and
              well-designed products.
              <br />
              <br />
              With 5+ years of product-building experience, I focus on speed,
              quality, and usability.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-gray-50">
        <h2
          className="text-3xl font-bold mb-12 text-center"
          style={{ color: brand.primary }}
        >
          Services I Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "MVP Development",
              desc: "Launch-ready MVPs tailored to your startup vision.",
              img: "/services-1.png",
            },
            {
              title: "Product Strategy",
              desc: "Feature prioritization and roadmap for success.",
              img: "/services-2.jpg",
            },
            {
              title: "UI/UX & Branding",
              desc: "Trustworthy, modern design that users love.",
              img: "/services-3.png",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white shadow-md rounded-2xl overflow-hidden"
            >
              <Image
                src={s.img}
                alt={s.title}
                width={500}
                height={300}
                className="object-cover h-40 w-full"
              />
              <div className="p-6 text-center">
                <h3
                  className="font-semibold text-xl mb-3"
                  style={{ color: brand.primary }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6">
        <h2
          className="text-3xl font-bold mb-12 text-center"
          style={{ color: brand.primary }}
        >
          My Portfolio
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Jobit",
              url: "https://jobit.world",
              img: "/1.png",
            },
            {
              name: "Supervise",
              url: "https://supervise.work",
              img: "/2.png",
            },
            {
              name: "Whatever AI",
              url: "https://whatever-ai.com",
              img: "/3.png",
            },
            {
              name: "TheFlex",
              url: "https://theflex.global",
              img: "/4.png",
            },
            {
              name: "Graana",
              url: "https://graana.com",
              img: "/5.png",
            },
          ].map((site, i) => (
            <a
              key={i}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-50 hover:bg-gray-100 transition rounded-xl shadow overflow-hidden"
            >
              <Image
                src={site.img}
                alt={site.name}
                width={500}
                height={300}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3
                  className="font-semibold text-lg"
                  style={{ color: brand.primary }}
                >
                  {site.name}
                </h3>
                <p className="text-gray-500 text-sm">{site.url}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Why Choose Me */}
      <section id="why" className="py-24 px-6 bg-gray-50">
        <h2
          className="text-3xl font-bold mb-12 text-center"
          style={{ color: brand.primary }}
        >
          Why Work With Me?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Trusted by fast-growing startups",
            "Fast delivery without cutting corners",
            "Focus on investor-ready MVPs",
          ].map((point, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 flex items-center gap-3"
            >
              <CheckCircle2
                className="text-green-600 flex-shrink-0"
                size={24}
              />
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6">
        <h2
          className="text-3xl font-bold mb-12 text-center"
          style={{ color: brand.primary }}
        >
          Testimonials
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {[
            {
              quote:
                "Working with Ismail was seamless. He delivered a polished MVP faster than expected.",
              name: "Chris",
              role: "Founder, Jobit",
              img: "/1.jpeg",
            },
            {
              quote:
                "His product insights helped us secure funding and scale confidently.",
              name: "Kerem",
              role: "Co Founder, The Flex Living",
              img: "/2.jpg",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl shadow p-8 flex gap-4"
            >
              <Image
                src={t.img}
                alt={t.name}
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
              <div>
                <p className="italic text-gray-700 mb-3">“{t.quote}”</p>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-6 text-center"
        style={{ backgroundColor: brand.primary, color: "white" }}
      >
        <h2 className="text-3xl font-bold mb-6">Let’s Build Your MVP</h2>
        <p className="max-w-xl mx-auto text-gray-200 mb-8">
          Ready to bring your idea to life? Let’s talk about your project and
          make it happen.
        </p>
        <a
          href="https://wa.me/+923159807707"
          className="inline-block px-8 py-4 rounded-2xl font-semibold shadow-md"
          style={{ backgroundColor: brand.secondary, color: brand.primary }}
          target="_blank"
        >
          Contact Me
        </a>
      </section>

      {/* Footer */}
      <footer
        className="py-8 text-center text-sm"
        style={{ backgroundColor: brand.primary, color: "white" }}
      >
        © {new Date().getFullYear()} Muhammad Ismail — MVP Development Services
      </footer>
    </main>
  );
}
