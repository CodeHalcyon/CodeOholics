import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./Hero";
import Section2 from "./Section2";
import EventsSection from "./EventsSection";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const stackRef = useRef(null);

  const words = ["Coding", "Design", "Problem Solving"];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? current.substring(0, displayText.length - 1)
              : current.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 50 : 100
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  useEffect(() => {
    const panels = stackRef.current?.querySelectorAll(".stack-panel");
    if (!panels) return;

    const ctx = gsap.context(() => {
      panels.forEach((panel, i) => {
        if (i === 0) return;
        gsap.fromTo(panel,
          { borderRadius: "0rem", boxShadow: "0 0 0 0 rgba(0,0,0,0)" },
          {
            borderRadius: "1.5rem",
            boxShadow: "0 -4px 24px rgba(0,0,0,0.12)",
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "top top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );
      });
    }, stackRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={stackRef} className="relative">
      {/* Section 1: Main Hero */}
      <section className="stack-panel sticky top-0 min-h-screen z-10 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero_image.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/80 to-white/90"></div>
        </div>
        <div className="relative min-h-screen flex items-center px-6 md:px-20">
          <div className="max-w-4xl">
            <span className="inline-block text-xs font-medium text-gray-400 uppercase tracking-[0.2em] mb-6 font-body">
              Student-Led Tech Community
            </span>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-gray-900">
              Unleash Your
              <br />
              <span className="inline-block min-w-[6ch] relative">
                {displayText}
                <span className="inline-block w-[3px] h-[0.8em] bg-gray-900 ml-1 align-middle animate-blink"></span>
              </span>
              {" "}Potential
              <br />
              <span className="text-gray-400">with </span>
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gray-900 rounded-[4px_20px_20px_20px] -skew-x-6 scale-105"></span>
                <span className="relative text-white">CodeOholics</span>
              </span>
            </h1>
            <p className="font-body text-base md:text-lg mt-6 text-gray-500 max-w-xl leading-relaxed font-medium">
              Dive into a world of innovation, collaboration, and cutting-edge
              technology. Build real projects, ship real work.
            </p>
            <div className="flex gap-4 mt-10">
              <a
                href="https://instagram.com/codeoholics"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all duration-300 font-body"
              >
                Join our network
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a
                href="/events"
                className="inline-flex items-center px-8 py-3.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-full hover:border-gray-900 hover:text-gray-900 transition-all duration-300 font-body"
              >
                View Events
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Empowering Coders */}
      <section className="stack-panel sticky top-0 min-h-[80vh] max-md:min-h-screen z-20 bg-gray-50 overflow-hidden">
        <Hero />
      </section>

      {/* Section 3: Unlock Potential */}
      <section className="stack-panel sticky top-0 min-h-[80vh] max-md:min-h-screen z-30 bg-gray-50 overflow-hidden">
        <Section2 />
      </section>

      {/* Section 4: Past Events */}
      <section className="stack-panel sticky top-0 min-h-[80vh] max-md:min-h-screen z-40 bg-white overflow-hidden">
        <EventsSection />
      </section>
    </div>
  );
};

export default Home;
