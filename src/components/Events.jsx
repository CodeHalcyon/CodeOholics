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
  // Same events array as before
  // const events = [
  //   {
  //     name: "Decentralized Dreamscape: A Web3 & Blockchain Event",
  //     desc: "A Web3 & Blockchain Event Join us for Decentralized Dreamscape, where we delve into the world of Web3 and blockchain. Hear from expert speakers Mr. Rajashekar and Mr. Siv Ram Shastri.",
  //     img: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/decentralized-i8Lx7Wyq6y1jcr0y2GFKWRXa2xD8OP.JPG",
  //   },
  //   {
  //     name: "Gemini for everything",
  //     desc: "Simplify Your AI Application Development Join our one-day event to explore Google AI technologies like Gemini, Gemma, GenKit, and PaLM! Gain hands-on experience in creating AI-powered applications, guided by expert speakers, without the need for extensive training.",
  //     img: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/gemini-405g56fUwi5rWLVXPR7zRqxCHKvtsl.webp",
  //   },
  //   {
  //     name: "Tech Genesis",
  //     desc: "Join us for Tech Genesis, where two expert speakers share their valuable insights on securing job placements and overcoming startup challenges.",
  //     img: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/tech%20genesis-jFaRxUyczl7nGhFYnjlr33A4sf7duX.webp",
  //   },
  //   {
  //     name: "Hack the Verse",
  //     desc: "Nationwide 24-Hour Hackathon Join us for a nationwide 24-hour hackathon exclusively for B.Tech students from across India! Innovate, collaborate, and create nonstop as you tackle challenging problems, develop innovative solutions, and compete for exciting prizes.",
  //     img: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/htvimage-XGXEreJJ9t2tXoqgve6wScKPkkedeD.webp",
  //   },
  //   {
  //     name: "Techpreneurship",
  //     desc: "Unveiling the World of Technology & Entrepreneurship Join us for an exciting 1-day workshop organized by CodeOholics and Knowvation! Dive into key topics like web development, IT industry trends, generative AI, and the startup ecosystem, all while learning tools to enhance your skills and advance your career.",
  //     img: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/techpreunership-JUS5X8ld2GHiXvzFciUfpiZpd2bqdT.webp",
  //   },
  //   {
  //     name: "DSA Bootcamp",
  //     desc: "Master Data Structures and Algorithms Join the DSA Bootcamp led by Gate Asprint and former VP Mohd Ibrahim! This transformative event offers intensive sessions to sharpen your skills in data structures, algorithms, and problem-solving techniques, with expert guidance and strategic insights.",
  //     img: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/dsa-ghyxBeUN7SXrdHDZfK1o46m2CEmRA1.webp",
  //   },
  //   {
  //     name: "Codeignite",
  //     desc: "Codeoholics hosted Codeignite 2k23, a dynamic event featuring keynote speaker Sai Krishna Alishala, Founder of Elitceler Technologies. With insightful sessions on career growth, APIs, and Prompt Engineering",
  //     img: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/codeignite-zoopKUKNJoXyKfiIN8eruBzVbMZt62.webp",
  //   },
  //   {
  //     name: "Club Orientation",
  //     desc: "A Gateway to Coding & Tech Careers Kickstart your journey with the Codeoholics Club! This dynamic event featured engaging sessions on coding challenges, career opportunities, and placement strategies, led by experts like Ibrahim, Astha Sharma, and Sourabh.",
  //     img: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/club%20orientation-SXCxB1u0EDkmu9VW4pgllm1K3atwFB.webp ",
  //   },
  //   {
  //     name: "Aarambh",
  //     desc: "A Three-Round Challenge Join us for a thrilling three-round coding contest hosted by CodeOholics Club! Designed to foster a coding culture and prepare students for industry-level competitions, this contest will test your problem-solving skills and coding expertise.",
  //     img: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/code1-0iFgQ8r3ziwU5kVAQE3GJJlCo0RSA4.jpg",
  //   },
  //   {
  //     name: "Chapter Induction",
  //     desc: "Core Team Introduction & Competitive Programming Focus Join us for an exciting event where we'll introduce our core team, unveil our mission, and highlight the importance of competitive programming in shaping future tech leaders. Don't miss out on this opportunity to get involved!",
  //     img: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/induction-wMLzbfOYwbj5vJpvFDmw0dNljuwTeC.webp",
  //   },
  //   {
  //     name: "6 Companies 6 Days",
  //     desc: "Problem-Solving Mastery with Arsh Goyal Join us for an exclusive workshop with Arsh Goyal to master problem-solving techniques and gain insights into cracking interviews at top product-based companies like FAANG! Learn strategies and tips from an industry expert to level up your coding skills.",
  //     img: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/logo-knQ3WyR3K86P02WpLwXGMssY4STQze.jpg",
  //   },
  //   {
  //     name: "Kick Starter",
  //     desc: "Enhance Problem-Solving & Critical Thinking Skills Join us for an exciting event designed to enhance your problem-solving and critical thinking skills. Compete with fellow chapter members and challenge yourself to think outside the box in a series of engaging tasks that foster a spirit of competition and collaboration.",
  //     img: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/kick-WHD1Lxlmb4i7Tmx5KDDjlHoPNhlevn.webp",
  //   },
  // ];

  // Filter events based on search query
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
                  src="https://etvqaruci3mfadph.public.blob.vercel-storage.com/htv2.0-1iDA8XkmSGzThFeAbG1U12qee6z6jV.webp"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  alt="Hack The Verse 2.0"
                />
              </div>

              {/* Featured Event Details */}
              <div className="w-full lg:w-1/2 text-left">
                <h2 className="text-2xl font-bold text-emerald-400 mb-3">
                  Hack The Verse 2.0
                </h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Nationwide 24-Hour Hackathon exclusively for B.Tech students!
                  Innovate, collaborate, and compete for exciting prizes.
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
                      <strong>Date:</strong> 3rd April, 2025
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
                      <strong>Venue:</strong> CMRTC Auditorium, Hyderabad
                    </span>
                  </div>
                </div>
                <a
                  href="https://www.google.com"
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
