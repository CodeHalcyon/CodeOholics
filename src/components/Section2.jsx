import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".L",
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".L",
            start: "top 75%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".R",
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".R",
            start: "top 75%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Add animation for the skill badges
      gsap.fromTo(
        ".skill-badge",
        {
          opacity: 0,
          y: 20,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".skill-badges",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="py-20 px-5 md:px-10 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="L flex flex-col justify-center items-start text-left max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold">
              Unlock your potential with{" "}
              <span className="text-emerald-400">CodeOholics</span>
            </h2>

            <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 to-teal-300 mt-4 rounded-full"></div>

            <p className="mt-8 text-gray-300 text-lg leading-relaxed">
              Join our thriving community and enhance your skills through
              hands-on experiences, mentorship, and real-world challenges.
            </p>

            <div className="skill-badges flex flex-wrap gap-3 mt-8">
              <span className="skill-badge bg-gray-700 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium">
                Web Development
              </span>
              <span className="skill-badge bg-gray-700 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium">
                Mobile Apps
              </span>
              <span className="skill-badge bg-gray-700 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium">
                AI & ML
              </span>
              <span className="skill-badge bg-gray-700 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium">
                Blockchain
              </span>
              <span className="skill-badge bg-gray-700 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium">
                Cloud Computing
              </span>
            </div>

            <div className="mt-10">
              <a
                className="group relative inline-flex items-center justify-center px-8 py-3 font-medium overflow-hidden bg-emerald-600 rounded-full transition-all duration-300 ease-out hover:bg-emerald-500"
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative text-white font-semibold">
                  Join our community
                </span>
              </a>
            </div>
          </div>

          <div className="R relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg blur opacity-30"></div>
            <img
              src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/join-4bPsUvUTVAcVbaYH6W2mBcSzyecrej.jpg"
              alt="Codeoholics"
              className="relative rounded-lg shadow-lg w-full max-w-xl h-auto md:h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
