import React from "react";
import Card from "./Card";
import { NavLink } from "react-router-dom";

const EventsSection = () => {
  return (
    <div className="relative py-24 px-5 md:px-10 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Highlights</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Our <span className="underline decoration-gray-300 underline-offset-4">Past Events</span>
          </h2>
          <p className="text-gray-500 text-sm mt-4 max-w-xl mx-auto">
            Explore workshops, bootcamps, and hackathons designed for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative w-full rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg bg-white border border-gray-200">
            <div className="relative h-48 overflow-hidden">
              <Card src="/htv.png" heading="Hack The Verse" />
            </div>
            <div className="px-5 pb-5 -mt-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-gray-400">April 2025</span>
                <span className="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded text-xs border border-gray-200">
                  Hackathon
                </span>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                Nationwide 24-Hour Hackathon
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                Join us for a nationwide 24-hour hackathon exclusively for B.Tech students from across India!
              </p>
            </div>
          </div>

          <div className="group relative w-full rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg bg-white border border-gray-200">
            <div className="relative h-48 overflow-hidden">
              <Card
                src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/decentralized-i8Lx7Wyq6y1jcr0y2GFKWRXa2xD8OP.JPG"
                heading="Decentralized Dreamscape"
              />
            </div>
            <div className="px-5 pb-5 -mt-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-gray-400">February 2025</span>
                <span className="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded text-xs border border-gray-200">
                  Workshop
                </span>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                A Web3 & Blockchain Event
                </h3>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                Join us for Decentralized Dreamscape, where we delve into the world of Web3 and blockchain.
              </p>
            </div>
          </div>

          <div className="group relative w-full rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg bg-white border border-gray-200">
            <div className="relative h-48 overflow-hidden">
              <Card src="/gfe.JPG" heading="Gemini For Everything" />
            </div>
            <div className="px-5 pb-5 -mt-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-gray-400">January 2025</span>
                <span className="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded text-xs border border-gray-200">
                  Bootcamp
                </span>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                Simplify Your AI Application Development
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                Join our one-day event to explore Google AI technologies like Gemini, Gemma, GenKit, and PaLM!
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <NavLink
            to="/events"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all duration-300"
          >
            View All Events
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
