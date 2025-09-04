import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import Section2 from "./Section2";
import EventsSection from "./EventsSection";
import PopupModal from "./PopupModal";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {
  // Popup Modal State
  const [showModal, setShowModal] = useState(false);
  const popupImage = "";
  const redirectUrl = "";
  
  // Featured Event Data - You can replace with actual event data or fetch from API
  const featuredEvent = {
    title: "",
    date: "",
    location: "",
    description: ``,
    registerLink: "",
    image: "" // Replace with your actual image path
  };

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  // GSAP animation for the featured event banner
  useGSAP(() => {
    gsap.fromTo(
      ".featured-event",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
    
    gsap.fromTo(
      ".event-details",
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.6, delay: 0.3, ease: "power2.out" }
    );
    
    gsap.fromTo(
      ".event-image",
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.6, delay: 0.3, ease: "power2.out" }
    );
    
    gsap.fromTo(
      ".register-btn",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.5, delay: 0.6, ease: "back.out(1.7)" }
    );
  });

  return (
    <>
        
      {/* Featured Event Section */}
      {/* <div id="featured-event-section" className="bg-gray-900 py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="event-details space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium">
                Featured Event
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                {featuredEvent.title}
              </h2>
              
              <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
                <div className="flex items-center text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {featuredEvent.date}
                </div>
                
                <div className="flex items-center text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {featuredEvent.location}
                </div>
              </div>
              
              <p className="text-gray-300 text-lg">
                {featuredEvent.description}
              </p>
              
              <a
                href={featuredEvent.registerLink}
                className="register-btn inline-block bg-emerald-500 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:bg-emerald-400 hover:shadow-emerald-400/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </a>
            </div>
            
            <div className="event-image">
              <div className="relative overflow-hidden rounded-lg shadow-xl group">
                <img
                  src={featuredEvent.image || "/api/placeholder/600/400"}
                  alt={featuredEvent.title}
                  className="w-full h-[500px] object-cover bg-bottom transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-emerald-500/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                    <span className="text-white font-medium">Limited spots available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      
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