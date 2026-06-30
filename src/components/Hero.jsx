import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./Card";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const headingContainerRef = useRef(null);
  const descRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingContainerRef.current,
        { width: "0%" },
        {
          width: "100%",
          duration: 1.2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: 0.5,
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        descRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: descRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        cardsRef.current,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const heading = "Empowering Coders Through Hands-On Experiences";

  return (
    <div ref={sectionRef} className="flex flex-col gap-12 py-24 px-5 md:px-10 bg-gray-50 items-center overflow-x-hidden">
      <div className="text-center max-w-3xl">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">
          About Us
        </span>
        <div className="flex justify-center">
          <div
            ref={headingContainerRef}
            className="overflow-hidden"
            style={{ width: "0%" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 leading-tight whitespace-nowrap md:whitespace-normal">
              {heading}
            </h2>
          </div>
        </div>
        <p
          ref={descRef}
          className="mt-4 text-gray-600 text-lg"
        >
          At CodeOholics, we believe in learning by doing. Our community thrives
          on interactive workshops, intensive bootcamps, and exhilarating
          hackathons that foster collaboration and innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {[
          {
            src: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/aleph-rTSU91imq3RwqWkPY9EEdeHeQTtWpW.JPG",
            heading: "Dynamic Workshops for Skill Development",
            desc: "Join our workshops to enhance your coding skills and gain practical knowledge.",
          },
          {
            src: "/gemini.JPG",
            heading: "Intensive Bootcamps for Career Growth",
            desc: "Enroll in our bootcamps to level up your career and unlock new opportunities.",
          },
          {
            src: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/hackathon-Uc5t7qoWPpI2I0Ymd7PYsv9zH8P2Nu.JPG",
            heading: "Exciting Hackathons for Team Building",
            desc: "Participate in our hackathons to collaborate with others and build amazing projects.",
          },
        ].map((card, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <Card {...card} />
          </div>
        ))}
      </div>

      <a
        href="https://instagram.com/codeoholics"
        className="inline-flex items-center px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        Join us
        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
      </a>
    </div>
  );
};

export default Hero;
