import React, { useEffect, useRef } from 'react';
import Card from './Card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  // Create refs to use for cleanup
  const component = useRef(null);
  const timeline = useRef(null);

  useEffect(() => {
    // Store the context for proper cleanup
    const ctx = gsap.context(() => {
      // Create animations

      // Animation for main section
      gsap.fromTo(
        ".smtg",
        { opacity: 0, y: 50 }, // Start position
        {
          opacity: 1,
          y: 0, // Animate back to original position
          duration: 0.8,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".smtg",
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
            markers: false, // Set to false in production
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
          stagger: 0.3, // Stagger effect for sequential animation
          scrollTrigger: {
            trigger: ".cards-container",
            start: "top 50%", // Adjusted for better visibility
            end: "top 30%",
            toggleActions: "play none none reverse",
            markers: false, // Set to false in production
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
            markers: false, // Set to false in production
          },
        }
      );
    }, component); // Scope animations to component

    // Cleanup function
    return () => {
      ctx.revert(); // This kills all animations and ScrollTriggers created by the context
    };
  }, []);

  return (
    <div ref={component} className="flex flex-col gap-5 p-5 justify-center items-center bg-gray-900 text-white">
      <div className="smtg text-center">
        <h1 className="text-3xl font-bold text-purple-400">
          Empowering Coders Through Hands-On Experiences
        </h1>
        <p className="mt-5 text-gray-300">
          At CodeOholics, we believe in learning by doing. Our community thrives on interactive workshops, <br />
          intensive bootcamps, and exhilarating hackathons that foster collaboration and innovation.
        </p>
      </div>

      {/* Cards Section with Row-wise Animations */}
      <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className='card-item'><Card  src="/aleph.JPG" heading="Dynamic Workshops for Skill Development" desc="Join our workshops to enhance your coding skills and gain practical knowledge." /></div>
        <div className='card-item'><Card  heading="Intensive Bootcamps for Career Growth" src="/gemini.JPG" desc="Enroll in our bootcamps to level up your career and unlock new opportunities." /></div>
        <div className='card-item'><Card  heading="Exciting Hackathons for Team Building" src="/hackathon.JPG" desc="Participate in our hackathons to collaborate with others and build amazing projects." /></div>
      </div>

      <div>
        <a
          href="https://instagram.com/codeoholics"
          className="join-btn border-2 p-2 w-[100px] block text-center hover:bg-blue-500 hover:text-white transition-all hover:w-[120px] hover:border-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join us
        </a>
      </div>
    </div>
  );
};

export default Hero;