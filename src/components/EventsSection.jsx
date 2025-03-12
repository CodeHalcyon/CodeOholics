import React, { useEffect } from "react";
import Card from "./Card";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EventsSection = () => {
  useEffect(() => {
    // Title animation
    gsap.fromTo(
      ".section-title",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".events-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Event card animations
    gsap.fromTo(
      ".event-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.3,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".events-container",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Button animation
    gsap.fromTo(
      ".view-all-btn",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".view-all-btn",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="events-section relative py-20 px-5 md:px-10 bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <div className="section-title text-center mb-16">
          <h2 className="text-4xl font-bold">
            Our <span className="text-emerald-400">Past Events</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-teal-300 mt-4 mx-auto rounded-full"></div>
          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Explore workshops, bootcamps, and hackathons designed for you.
          </p>
        </div>

        {/* Events Cards */}
        <div className="events-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <div className="event-card bg-gray-800/80 rounded-xl overflow-hidden shadow-xl transform hover:translate-y-[-8px] transition-all duration-300 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              <Card src="/htv.png" heading="Hack The Verse" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-emerald-300 mb-2">
                Nationwide 24-Hour Hackathon
              </h3>
              <p className="text-gray-300 text-sm">
                Join us for a nationwide 24-hour hackathon exclusively for
                B.Tech students from across India! Innovate, collaborate, and
                create nonstop as you tackle challenging problems, develop
                innovative solutions, and compete for exciting prizes.
              </p>
              <div className="flex mt-4 justify-between items-center">
                <span className="text-xs text-gray-400">April 2025</span>
                <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs">
                  Hackathon
                </span>
              </div>
            </div>
          </div>

          <div className="event-card bg-gray-800/80 rounded-xl overflow-hidden shadow-xl transform hover:translate-y-[-8px] transition-all duration-300 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              <Card
                src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/decentralized-i8Lx7Wyq6y1jcr0y2GFKWRXa2xD8OP.JPG"
                heading="Decentralized Dreamscape"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-emerald-300 mb-2">
                A Web3 & Blockchain Event
              </h3>
              <p className="text-gray-300 text-sm">
                Join us for Decentralized Dreamscape, where we delve into the
                world of Web3 and blockchain. Hear from expert speakers Mr.
                Rajashekar and Mr. Siv Ram Shastri.
              </p>
              <div className="flex mt-4 justify-between items-center">
                <span className="text-xs text-gray-400">February 2025</span>
                <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs">
                  Workshop
                </span>
              </div>
            </div>
          </div>

          <div className="event-card bg-gray-800/80 rounded-xl overflow-hidden shadow-xl transform hover:translate-y-[-8px] transition-all duration-300 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              <Card src="/gfe.JPG" heading="Gemini For Everything" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-emerald-300 mb-2">
                Simplify Your AI Application Development
              </h3>
              <p className="text-gray-300 text-sm">
                Join our one-day event to explore Google AI technologies like
                Gemini, Gemma, GenKit, and PaLM! Gain hands-on experience in
                creating AI-powered applications, guided by expert speakers.
              </p>
              <div className="flex mt-4 justify-between items-center">
                <span className="text-xs text-gray-400">January 2025</span>
                <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs">
                  Bootcamp
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-16">
          <NavLink
            to="/events"
            className="view-all-btn relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-semibold text-emerald-400 transition-all duration-300 ease-out border-2 border-emerald-400 rounded-full group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-y-full bg-emerald-500 group-hover:translate-y-0 ease"></span>
            <span className="relative transition-colors duration-300 group-hover:text-white ease">
              View All Events
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
