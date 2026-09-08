import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import getOpportunities from "../Helper/getOpportunities";

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
      const data = await getOpportunities();
      setOpportunities(data);
    };
    fetchOpportunities();
  }, []);

  const filteredOpportunities = opportunities.filter((opp) =>
    opp.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-paper min-h-screen pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="sec-head">
          <h1 className="font-display text-4xl sm:text-6xl uppercase">Opportunities</h1>
          <span className="label-mono hidden sm:block text-ink/60">APPLY NOW / HIRING</span>
        </div>
        <p className="mb-8 font-medium text-ink/70 -mt-3">
          Current openings and recruitment drives.
        </p>

        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-xs">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/50 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search opportunities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-hard input-search label-mono !text-xs"
              aria-label="Search opportunities"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredOpportunities.length > 0 ? (
            filteredOpportunities.map((opp) => (
              <motion.div
                key={opp.id}
                className="flip-row border-[3px] border-ink bg-paper p-5 sm:p-6 hover:shadow-[8px_8px_0_0_var(--color-zing)] transition-shadow"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span
                        className={`chip !shadow-none !border-ink ${
                          opp.status ? "!bg-acid" : "!bg-paper text-ink/50"
                        }`}
                      >
                        {opp.status ? "▲ Live" : "■ Closed"}
                      </span>
                      <h2 className="font-display text-xl sm:text-2xl uppercase truncate">
                        {opp.title}
                      </h2>
                    </div>
                    <p className="font-medium text-sm text-ink/70 whitespace-pre-line line-clamp-2">
                      {opp.description}
                    </p>
                    <div className="flex flex-wrap gap-4 mt-3 label-mono text-[10px] text-ink/60">
                      <span><span className="text-punk">DATE</span> · {opp.date}</span>
                      <span><span className="text-punk">WHERE</span> · {opp.location}</span>
                    </div>
                  </div>
                  <div className="shrink-0">
                    {opp.status ? (
                      <button onClick={() => openModal(opp)} className="btn btn-solid !py-2.5 !px-5 !text-xs">
                        View details
                      </button>
                    ) : (
                      <span className="chip !shadow-none cursor-not-allowed text-ink/40">Closed</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-16 border-[3px] border-dashed border-ink/40">
              <p className="font-display text-3xl uppercase text-ink/40">Empty</p>
              <p className="font-mono font-bold text-sm text-ink/60 mt-2">
                No opportunities found. Try a different search term.
              </p>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && selectedOpportunity && createPortal(
        <div className="fixed inset-0 bg-ink/70 flex items-center justify-center z-[150] p-4" role="dialog" aria-modal="true">
          <div className="relative w-full max-w-lg bg-paper border-[3px] border-ink shadow-[12px_12px_0_0_var(--color-zing)] p-7 sm:p-8">
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-3 right-3 h-10 w-10 grid place-items-center border-[3px] border-ink bg-paper text-xl font-bold hover:bg-punk hover:text-paper transition-colors"
            >
              ×
            </button>
            <span className="chip !bg-zing !shadow-none">DETAILS</span>
            <h2 className="font-display text-2xl sm:text-3xl uppercase leading-none mt-4">
              {selectedOpportunity.title}
            </h2>
            <p className="mt-4 font-medium text-sm text-ink/75 whitespace-pre-line">
              {selectedOpportunity.description}
            </p>
            <div className="mt-5 space-y-1 label-mono text-[11px] text-ink/70">
              <p><span className="text-punk">DATE</span> · {selectedOpportunity.date}</p>
              <p><span className="text-punk">WHERE</span> · {selectedOpportunity.location}</p>
            </div>
            <div className="mt-6 flex justify-end">
              <a
                href={selectedOpportunity.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-solid"
              >
                Apply now →
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default Opportunities;