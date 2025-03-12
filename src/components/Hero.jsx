import React, { useEffect, useRef } from "react";
import Card from "./Card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  // Create refs to use for cleanup
  const component = useRef(null);

  useEffect(() => {
    // Store the context for proper cleanup
    const ctx = gsap.context(() => {
      // Animation for main section
      gsap.fromTo(
        ".smtg",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".smtg",
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );

      // Animation for Cards appearing one by one
      gsap.fromTo(
        ".card-item",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power1.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".cards-container",
            start: "top 50%",
            end: "top 30%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );

      // Animation for Join Us button
      gsap.fromTo(
        ".join-btn",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power1.in",
          scrollTrigger: {
            trigger: ".join-btn",
            start: "top 90%",
            end: "top 80%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );
    }, component);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={component}
      className="flex flex-col gap-5 p-10 justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="smtg text-center max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-400">
          Empowering Coders Through Hands-On Experiences
        </h1>
        <p className="mt-5 text-gray-300 text-lg">
          At CodeOholics, we believe in learning by doing. Our community thrives
          on interactive workshops, intensive bootcamps, and exhilarating
          hackathons that foster collaboration and innovation.
        </p>
        <div className="mt-8 w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto rounded-full"></div>
      </div>

      {/* Cards Section with Row-wise Animations */}
      <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div className="card-item bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-emerald-500/20 hover:shadow-lg">
          <Card
            src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/aleph-rTSU91imq3RwqWkPY9EEdeHeQTtWpW.JPG"
            heading="Dynamic Workshops for Skill Development"
            desc="Join our workshops to enhance your coding skills and gain practical knowledge."
          />
        </div>
        <div className="card-item bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-emerald-500/20 hover:shadow-lg">
          <Card
            heading="Intensive Bootcamps for Career Growth"
            src="/gemini.JPG"
            desc="Enroll in our bootcamps to level up your career and unlock new opportunities."
          />
        </div>
        <div className="card-item bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-emerald-500/20 hover:shadow-lg">
          <Card
            heading="Exciting Hackathons for Team Building"
            src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/hackathon-Uc5t7qoWPpI2I0Ymd7PYsv9zH8P2Nu.JPG"
            desc="Participate in our hackathons to collaborate with others and build amazing projects."
          />
        </div>
      </div>

      <div className="mt-12">
        <a
          href="https://instagram.com/codeoholics"
          className="join-btn relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-emerald-400 border-2 border-emerald-400 rounded-full group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-emerald-500 rounded-full group-hover:w-full group-hover:h-56"></span>
          <span className="relative group-hover:text-white transition-colors duration-300 ease-out">
            Join us
          </span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
