import React, { useState } from "react";
import { motion } from "framer-motion";
import EventCard from "./EventCard"; // Ensure you have this component

const Events = () => {
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const events = [
    {
      name: "Decentralized Dreamscape: A Web3 & Blockchain Event",
      desc: "A Web3 & Blockchain Event Join us for Decentralized Dreamscape, where we delve into the world of Web3 and blockchain. Hear from expert speakers Mr. Rajashekar and Mr. Siv Ram Shastri.",
    },
    {
      name: "Gemini for everything",
      desc: "Simplify Your AI Application Development Join our one-day event to explore Google AI technologies like Gemini, Gemma, GenKit, and PaLM! Gain hands-on experience in creating AI-powered applications, guided by expert speakers, without the need for extensive training."
    },
    {
      name: "Tech Genesis",
      desc: "Join us for Tech Genesis, where two expert speakers share their valuable insights on securing job placements and overcoming startup challenges."
    },
    {
      name: "Hack the Verse",
      desc: "Nationwide 24-Hour Hackathon Join us for a nationwide 24-hour hackathon exclusively for B.Tech students from across India! Innovate, collaborate, and create nonstop as you tackle challenging problems, develop innovative solutions, and compete for exciting prizes."
    },
    {
      name: "Techpreneurship",
      desc: "Unveiling the World of Technology & Entrepreneurship Join us for an exciting 1-day workshop organized by CodeOholics and Knowvation! Dive into key topics like web development, IT industry trends, generative AI, and the startup ecosystem, all while learning tools to enhance your skills and advance your career."
    },
    {
      name: "DSA Bootcamp",
      desc: "Master Data Structures and Algorithms Join the DSA Bootcamp led by Gate Asprint and former VP Mohd Ibrahim! This transformative event offers intensive sessions to sharpen your skills in data structures, algorithms, and problem-solving techniques, with expert guidance and strategic insights."
    },
    {
      name: "Codeignite",
      desc: "Codeoholics hosted Codeignite 2k23, a dynamic event featuring keynote speaker Sai Krishna Alishala, Founder of Elitceler Technologies. With insightful sessions on career growth, APIs, and Prompt Engineering"
    },
    {
      name: "Club Orientation",
      desc: "A Gateway to Coding & Tech Careers Kickstart your journey with the Codeoholics Club! This dynamic event featured engaging sessions on coding challenges, career opportunities, and placement strategies, led by experts like Ibrahim, Astha Sharma, and Sourabh."
    },
    {
      name: "Aarambh",
      desc: "A Three-Round Challenge Join us for a thrilling three-round coding contest hosted by CodeOholics Club! Designed to foster a coding culture and prepare students for industry-level competitions, this contest will test your problem-solving skills and coding expertise."
    },
    {
      name: "Chapter Induction",
      desc: "Core Team Introduction & Competitive Programming Focus Join us for an exciting event where we'll introduce our core team, unveil our mission, and highlight the importance of competitive programming in shaping future tech leaders. Don't miss out on this opportunity to get involved!"
    },
    {
      name: "6 Companies 6 Days",
      desc: "Problem-Solving Mastery with Arsh Goyal Join us for an exclusive workshop with Arsh Goyal to master problem-solving techniques and gain insights into cracking interviews at top product-based companies like FAANG! Learn strategies and tips from an industry expert to level up your coding skills."
    },
    {
      name: "Kick Starter",
      desc: "Enhance Problem-Solving & Critical Thinking Skills Join us for an exciting event designed to enhance your problem-solving and critical thinking skills. Compete with fellow chapter members and challenge yourself to think outside the box in a series of engaging tasks that foster a spirit of competition and collaboration."
    }
  ]

  // Filter events based on search query
  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const eventVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };


  return (
    <div className="p-5 bg-gray-900">
      {/* Upcoming Events Section */}
      <motion.div
        className="flex flex-col items-center gap-4 text-center"
        variants={eventVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1
          className="font-bold text-center text-3xl w-full text-cyan-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Upcoming Event
        </motion.h1>

        <motion.div
          className="my-5 bg-gray-800 p-4 rounded-lg shadow-lg"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <EventCard
            name="Hack The Verse 2.0"
            desc="Nationwide 24-Hour Hackathon Join us for a nationwide 24-hour hackathon exclusively for B.Tech students from across India! Innovate, collaborate, and create nonstop as you tackle challenging problems, develop innovative solutions, and compete for exciting prizes."
          />
          <div className="flex flex-col gap-2 items-start text-gray-300">
            <div>
              <strong>Date: </strong> 3rd April, 2025
            </div>
            <div>
              <strong>Venue: </strong> CMRTC Auditorium, Hyderabad
            </div>
            <div>
              <a
                href="https://www.google.com"
                className="italic underline text-blue-400 hover:text-blue-300 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book your spot here
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Past Events Section */}
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-bold text-3xl text-purple-400">Past Events</h1>
      </motion.div>

      {/* 🔎 Search Bar */}
      <div className="flex justify-center mt-4">
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md p-2 border border-gray-300 rounded-md text-white"
        />
      </div>

      {/* Past Events Grid */}
      <motion.div
        className="flex flex-wrap gap-6 justify-center items-center p-4"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5 } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <EventCard key={index} name={event.name} desc={event.desc} />
          ))
        ) : (
          <p className="text-gray-500">No events found.</p>
        )}
      </motion.div>
    </div>
  );
};

export default Events;
