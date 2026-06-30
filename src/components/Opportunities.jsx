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
    const fetchOpportunities = async () => {
      const data = [
        {
          id: 3,
          title: "Core Team Hiring 2K26",
          description: `
            🚀 CodeOholics — student-led dev community turning theory into real-world skills through learning-by-doing.

            🛠️ Project-based learning, peer mentorship & open-source collabs
            🏆 Hackathons, bootcamps & workshops at scale
            🌐 1000s of student devs, pan-India presence
            🎯 Vision: Democratize tech education, build a global developer ecosystem
            💡 Mission: Help students build real portfolios, networks & get industry-ready
            `,
          date: "TBD",
          location: "Online",
          applyLink: "https://forms.gle/dUxfQyTAep6hTxSQ9",
          status: true,
        },
        {
          id: 2,
          title: "Code Titans - CodeOholics Executive Hiring",
          description: `
            About the Opportunity: Join CODE TITANS — the executive team of Codeoholics at CMR Technical Campus! Lead, create, and innovate across content, design, dev/CP, PR/events, and tech teams. Only 20 spots left—apply before slots run out or by 5th August 2025!
            `,
          date: "August 5, 2025",
          location: "Hybrid",
          applyLink: "https://forms.gle/B5Fbyt4zyjZVEhc87",
          status: false,
        },
        {
          id: 1,
          title: "Hack-4-Mini 2.0 Campus Ambassador",
          description: `
            About the Opportunity: The Hack-4-Mini 2.0 Campus Ambassador Program is a unique opportunity for students to become the face of one of India's leading national-level hackathons, organized by CodeOholics. As a Campus Ambassador, you'll play a pivotal role in promoting Hack-4-Mini 2.0 within your institution.
            `,
          date: "May 19, 2025",
          location: "Online",
          applyLink:
            "https://unstop.com/internships/campus-ambassador-internship-cmr-technical-campus-cmrctc-telangana-1480982",
          status: false,
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
    <div className="bg-white min-h-screen pt-32 pb-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Apply Now</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3">Opportunities</h1>
          <p className="text-gray-500 text-sm max-w-md mx-auto">Current openings and recruitment drives.</p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-xs">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search opportunities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2.5 pl-10 pr-4 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 rounded-full text-sm focus:outline-none focus:border-gray-400 transition-all duration-300"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredOpportunities.length > 0 ? (
            filteredOpportunities.map((opp) => (
              <motion.div
                key={opp.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                        opp.status
                          ? "bg-gray-900 text-white border-gray-900"
                          : "bg-gray-100 text-gray-500 border-gray-200"
                      }`}>
                        {opp.status ? "Live" : "Closed"}
                      </span>
                      <h2 className="text-lg font-semibold text-gray-900 truncate">{opp.title}</h2>
                    </div>
                    <p className="text-sm text-gray-500 whitespace-pre-line line-clamp-2">{opp.description}</p>
                    <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-400">
                      <span><strong className="text-gray-600">Date:</strong> {opp.date}</span>
                      <span><strong className="text-gray-600">Location:</strong> {opp.location}</span>
                    </div>
                  </div>
                  <div className="shrink-0">
                    {opp.status ? (
                      <button
                        onClick={() => openModal(opp)}
                        className="w-full sm:w-auto px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all duration-300"
                      >
                        View Details
                      </button>
                    ) : (
                      <span className="inline-block px-5 py-2 bg-gray-100 text-gray-400 text-sm font-medium rounded-full cursor-not-allowed">
                        Closed
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500">No opportunities found.</p>
              <p className="text-gray-400 text-sm mt-1">Try a different search term.</p>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && selectedOpportunity && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-lg w-full relative shadow-xl">
            <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-lg" onClick={closeModal}>&times;</button>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{selectedOpportunity.title}</h2>
            <p className="text-sm text-gray-600 whitespace-pre-line mb-6">{selectedOpportunity.description}</p>
            <div className="space-y-1 text-sm text-gray-500 mb-6">
              <p><strong className="text-gray-700">Date:</strong> {selectedOpportunity.date}</p>
              <p><strong className="text-gray-700">Location:</strong> {selectedOpportunity.location}</p>
            </div>
            <a
              href={selectedOpportunity.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all duration-300"
            >
              Apply Now
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Opportunities;
