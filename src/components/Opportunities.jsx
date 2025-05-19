import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Opportunities = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [opportunities, setOpportunities] = useState([]);
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (opportunity) => {
    setSelectedOpportunity(opportunity);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOpportunity(null);
  };

  useEffect(() => {
    // Replace with actual data fetching logic
    const fetchOpportunities = async () => {
      const data = [
        {
          id: 1,
          title: "Hack-4-Mini 2.0 Campus Ambassador",
          description: `
            About the Opportunity: The Hack-4-Mini 2.0 Campus Ambassador Program is a unique opportunity for students to become the face of one of India’s leading national-level hackathons, organized by CodeOholics. As a Campus Ambassador, you'll play a pivotal role in promoting Hack-4-Mini 2.0 within your institution, helping us reach passionate tech enthusiasts, and driving participation. It’s a chance to develop leadership, communication, and marketing skills — while building valuable networks across campuses.
            `,
          date: "May 19, 2025",
          location: "Online",
          applyLink: "https://unstop.com/internships/campus-ambassador-internship-cmr-technical-campus-cmrctc-telangana-1480982",
        },
      ];
      setOpportunities(data);
    };

    fetchOpportunities();
  }, []);

  const filteredOpportunities = opportunities.filter((opp) =>
    opp.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-950 min-h-screen text-gray-200">
      <motion.div
        className="flex flex-col items-center pt-24 pb-16 px-5 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-2 mb-8">
          <h1 className="font-bold text-4xl text-emerald-400">Opportunities</h1>
          <div className="h-1 w-24 bg-emerald-500 rounded-full"></div>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-md mb-8">
          <input
            type="text"
            placeholder="Search opportunities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pl-4 rounded-md border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Opportunity Cards */}
        <div className="grid gap-6 w-full max-w-5xl">
          {filteredOpportunities.map((opp) => (
            <motion.div
              key={opp.id}
              className="bg-gray-800/80 border border-gray-700 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
                {opp.title}
              </h2>
              <p className="mb-3 text-gray-300">{opp.description}</p>
              <div className="flex flex-col gap-1 text-sm text-gray-400 mb-4">
                <span>
                  <strong>Date:</strong> {opp.date}
                </span>
                <span>
                  <strong>Location:</strong> {opp.location}
                </span>
              </div>
              <button
                onClick={() => openModal(opp)}
                className="inline-block px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md transition duration-300"
              >
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {isModalOpen && selectedOpportunity && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-gray-900 text-white p-6 rounded-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-3 text-gray-400 hover:text-white text-xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-2 text-emerald-400">
              {selectedOpportunity.title}
            </h2>
            <p className="mb-4">{selectedOpportunity.description}</p>
            <p>
              <strong>Date:</strong> {selectedOpportunity.date}
            </p>
            <p>
              <strong>Location:</strong> {selectedOpportunity.location}
            </p>
            <a
              href={selectedOpportunity.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md transition duration-300"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Opportunities;
