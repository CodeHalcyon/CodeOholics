import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import EventCard from "./EventCard";
import getEvents from "../Helper/getEvents";
const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const eventData = await getEvents();
      if (eventData) setEvents(eventData);
      setLoading(false);
    };
    fetchData();
  }, []);

  const filteredEvents =
    events?.filter((event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  const featuredEvent =
    events?.find((event) => event.is_featured) || null;

  const dateLabel = (d) => {
    const opts = { year: "numeric", month: "short", day: "numeric" };
    return new Date(d + "T00:00:00").toLocaleDateString("en-IN", opts);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Upcoming Event Section */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-5 pt-28 pb-16">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Featured</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              {featuredEvent ? "Upcoming Event" : "Featured Program"}
            </h1>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {featuredEvent ? (
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative overflow-hidden min-h-[300px]">
                  <img
                    src={featuredEvent.img}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    alt={featuredEvent.title}
                  />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <span className="inline-block self-start px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded mb-4">
                    ★ Featured
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {featuredEvent.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-5 whitespace-pre-line">
                    {featuredEvent.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span><strong className="text-gray-700">Venue:</strong> {featuredEvent.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span><strong className="text-gray-700">Date:</strong> {dateLabel(featuredEvent.date)}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative overflow-hidden min-h-[300px]">
                  <img
                    src="https://mp9tsgpvqxlsrfiz.public.blob.vercel-storage.com/Hiring.png"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    alt="Core Team Hiring 2K26"
                  />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <span className="inline-block self-start px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded mb-4">
                    Open Applications
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Core Team Hiring 2K26
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 whitespace-pre-line">
                    🚀 CodeOholics — student-led dev community turning theory into real-world skills through learning-by-doing.
                    {"\n"}{"\n"}
                    🛠️ Project-based learning, peer mentorship & open-source collabs
                    {"\n"}
                    🏆 Hackathons, bootcamps & workshops at scale
                    {"\n"}
                    🌐 1000s of student devs, pan-India presence
                    {"\n"}
                    🎯 Vision: Democratize tech education, build a global developer ecosystem
                    {"\n"}
                    💡 Mission: Help students build real portfolios, networks & get industry-ready
                  </p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span><strong className="text-gray-700">Venue:</strong> Online</span>
                </div>
                <a
                  href="https://forms.gle/dUxfQyTAep6hTxSQ9"
                  className="inline-flex items-center self-start px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Past Events Section */}
      <div className="container mx-auto px-5 pt-16 pb-24">
        <div className="text-center mb-12">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Archive</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Past <span className="underline decoration-gray-300 underline-offset-4">Events</span>
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
            Browse through our workshop, bootcamp, and hackathon history.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-xs">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2.5 pl-10 pr-4 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 rounded-full text-sm focus:outline-none focus:border-gray-400 transition-all duration-300"
            />
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
                <motion.div
                  key={event.title + index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index * 0.06) % 0.5 }}
                >
                  <EventCard
                    img={event.img}
                    title={event.title}
                    description={event.description}
                    venue={event.venue}
                    date={event.date}
                  />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center text-center py-20">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <p className="text-gray-500">No events found.</p>
                <p className="text-gray-400 text-sm mt-1">Try a different search term.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
