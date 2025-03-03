import React, { useEffect } from 'react';
import Card from './Card';
import { NavLink } from "react-router-dom";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EventsSection = () => {
    useEffect(() => {
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
                    start: "top 80%",
                    end: "top 50%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    return (
        <div className="relative bg-gray-900 text-white py-10 px-5">
            {/* Background Glow Effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-800/30 to-gray-900 opacity-30 pointer-events-none"></div>

            {/* Section Title */}
            <div className="text-center mb-8 relative z-10">
                <h1 className="text-4xl font-extrabold text-purple-400 tracking-wide">Our Past Events</h1>
                <p className="text-gray-300 text-lg mt-2">Explore workshops, bootcamps, and hackathons designed for you.</p>
            </div>

            {/* Events Cards */}
            <div className="events-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center relative z-10">
                <div className="event-card bg-gray-800 p-5 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                    <Card src="/htv.png" heading="Hack The Verse" />
                    <p className="text-gray-300 text-sm mt-2">Nationwide 24-Hour Hackathon Join us for a nationwide 24-hour hackathon exclusively for B.Tech students from across India! Innovate, collaborate, and create nonstop as you tackle challenging problems, develop innovative solutions, and compete for exciting prizes.</p>
                </div>
                <div className="event-card bg-gray-800 p-5 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                    <Card src="/decentralized.JPG" heading="Decentralized Dreamscape" />
                    <p className="text-gray-300 text-sm mt-2">A Web3 & Blockchain Event Join us for Decentralized Dreamscape, where we delve into the world of Web3 and blockchain. Hear from expert speakers Mr. Rajashekar and Mr. Siv Ram Shastri.</p>
                </div>
                <div className="event-card bg-gray-800 p-5 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                    <Card src="/gfe.JPG" heading="Gemini For Everything" />
                    <p className="text-gray-300 text-sm mt-2">Simplify Your AI Application Development Join our one-day event to explore Google AI technologies like Gemini, Gemma, GenKit, and PaLM! Gain hands-on experience in creating AI-powered applications, guided by expert speakers, without the need for extensive training.</p>
                </div>
            </div>

            {/* View All Events Button */}
            <div className="text-center mt-8 relative z-10">
                <NavLink
                    to="/events"
                    className="relative inline-block px-5 py-2 text-purple-400 text-lg font-semibold transition-all duration-300 ease-in-out 
    border-2 border-purple-400 rounded-lg overflow-hidden hover:bg-purple-400 hover:text-white 
    before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-purple-600 
    before:transition-all before:duration-500 before:z-0 hover:before:w-full"
                >
                    <span className="relative z-10">View All Events</span>
                </NavLink>

            </div>
        </div>
    );
};

export default EventsSection;
