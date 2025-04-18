import React from "react";
import Hero from "./Hero";
import Section2 from "./Section2";
import EventsSection from "./EventsSection";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <div className="relative h-screen w-screen flex items-center justify-center bg-gray-900">
        {/* Background Image with Green Overlay */}
        <img
          src="/hero_image.webp"
          loading="lazy"
          className="absolute h-full w-full object-cover opacity-70"
          alt="Hero Background"
        />

        {/* Dark Overlay with Green Tint */}
        <div className="absolute h-full w-full bg-gradient-to-b from-black/60 to-emerald-900/40"></div>

        {/* Centered Content */}
        <div className="hero-class relative text-center text-white p-10 bg-gray-900/80 backdrop-blur-md rounded-lg shadow-2xl border border-emerald-500/20">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide">
            Unleash Your{" "}
            <span className="text-emerald-400">Coding Potential</span> with{" "}
            <span className="text-teal-300">CodeOholics</span>
          </h1>
          <p className="text-lg md:text-xl mt-4 text-gray-300 max-w-2xl mx-auto">
            Dive into a world of innovation, collaboration, and cutting-edge
            technology.
          </p>
          <a
            href="#"
            className="inline-block mt-6 bg-emerald-500 text-white font-semibold px-8 py-4 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:bg-emerald-400 hover:shadow-emerald-400/50"
          >
            Join our network
          </a>
        </div>
      </div>
      <Hero />
      <Section2 />
      <EventsSection />
    </>
  );
};

export default Home;
