import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".L", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.8, scrollTrigger: { trigger: ".L", start: "top 75%", end: "top 60%", toggleActions: "play none none reverse" } });
      gsap.fromTo(".R", { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.8, scrollTrigger: { trigger: ".R", start: "top 75%", end: "top 60%", toggleActions: "play none none reverse" } });
      gsap.fromTo(".skill-badge", { opacity: 0, y: 15, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.1, scrollTrigger: { trigger: ".skill-badges", start: "top 80%", toggleActions: "play none none reverse" } });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="py-24 px-5 md:px-10 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
          <div className="L flex flex-col justify-center items-start text-left max-w-2xl">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Community</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Unlock your potential with <span className="text-gray-900 underline decoration-gray-300 underline-offset-4">CodeOholics</span>
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Join our thriving community and enhance your skills through
              hands-on experiences, mentorship, and real-world challenges.
            </p>
            <div className="skill-badges flex flex-wrap gap-2 mt-8">
              {["Web Development", "Mobile Apps", "AI & ML", "Blockchain", "Cloud Computing"].map((skill) => (
                <span key={skill} className="skill-badge px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium border border-gray-200">
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-10">
              <a
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all duration-300"
                href="https://instagram.com/codeoholics"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join our community
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
          <div className="R relative w-full max-w-xl">
            <img
              src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/join-4bPsUvUTVAcVbaYH6W2mBcSzyecrej.jpg"
              alt="Codeoholics"
              className="rounded-xl w-full h-auto md:h-96 object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
