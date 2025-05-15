import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import EventCard from "./EventCard";
import getEvents from "../Helper/getEvents";
const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      const eventData = await getEvents();
      if (eventData) setEvents(eventData); // Ensure data is an array
      setLoading(false); // Stop loading
    };

    fetchData();
  }, []);
  const filteredEvents =
    events?.filter((event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  console.log(filteredEvents);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-950 min-h-screen">
      {/* Hero Section with Background Pattern */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-emerald-900 opacity-30"></div>
          <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMzAgMzAgTDYwIDMwIEw2MCA2MCBMMzAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzEyYjk4MSIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+Cjwvc3ZnPg==')]"></div>
        </div>

        {/* Upcoming Event Section */}
        <motion.div
          className="flex flex-col items-center pt-24 pb-16 px-5 relative z-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center gap-2 mb-8">
            <h1 className="font-bold text-4xl text-emerald-400">
              Upcoming Event
            </h1>
            <div className="h-1 w-24 bg-emerald-500 rounded-full"></div>
          </div>

          <motion.div
            className="w-full max-w-4xl bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-gray-700"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Featured Event Image */}
              <div className="w-full lg:w-1/2 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/Instagram%20Post-JcHLJvTQ8XHJpNHfo3bLJtxzSyoMW6.png"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  alt="Hack The Verse 2.0"
                />
              </div>

              {/* Featured Event Details */}
              <div className="w-full lg:w-1/2 text-left">
                <h2 className="text-2xl font-bold text-emerald-400 mb-3">
                  Hack-4-Mini 2.0
                </h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Hack-4-Mini 2.0 is the second edition of CodeOholics' flagship national-level online hackathon, designed to celebrate innovation, collaboration, and real-world problem solving. Hosted on Unstop, this event brings together bright minds from across India in a battle of brains, creativity, and coding.

Hack-4-Mini is a premier 24-hour national-level online hackathon that brings together over 2000 brilliant minds from 28 states and 7 union territories, creating a digital arena where innovation knows no boundaries.
                </p>
                <div className="flex flex-col gap-2 text-gray-300 mb-6">
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>
                      <strong>Date:</strong> 26th May, 2025
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>
                      <strong>Venue:</strong> Online (WhatsApp)
                    </span>
                  </div>
                </div>
                <a
                  href="https://unstop.com/p/hack-4-mini-2nd-edition-cmr-technical-campus-cmrctc-telangana-1477021"
                  className="inline-block px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md transition-colors duration-300 shadow-lg hover:shadow-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book your spot
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Past Events Section */}
      <div className="container mx-auto px-5 pt-8 pb-16">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-bold text-3xl text-emerald-400 mb-2">
            Past Events
          </h1>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Search Bar */}
        <div className="flex justify-center mb-8 px-2">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 pl-10 border border-gray-700 bg-gray-800/80 text-white rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
            />
            <svg
              className="h-5 w-5 text-gray-400 absolute left-3 top-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Past Events Grid with Animation Stagger */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index * 0.1) % 0.5 }}
              >
                <EventCard
                  img={event.src}
                  title={event.title}
                  description={event.description}
                  venue={event.location}
                  date={event.date}
                />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center text-center py-10">
              <svg
                className="h-16 w-16 text-gray-600 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <p className="text-gray-400 text-xl">No events found.</p>
              <p className="text-gray-500 mt-2">Try a different search term.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Events;
