import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
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

  const featuredEvent = events?.find((event) => event.is_featured) || null;

  const dateLabel = (d) => {
    if (!d) return "";
    const opts = { year: "numeric", month: "short", day: "numeric" };
    return new Date(d + "T00:00:00").toLocaleDateString("en-IN", opts);
  };

  return (
    <div className="bg-paper min-h-screen">
      {/* ─── FEATURED / HIRING ─── */}
      <section className="border-b-4 border-ink overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="label-mono flex items-center gap-3 mb-4">
              <span className="inline-block w-12 h-1 bg-punk" aria-hidden="true" />
              {featuredEvent ? "Featured" : "Apply now"}
            </p>
            <h1 className="font-display text-4xl sm:text-6xl uppercase leading-none">
              {featuredEvent ? "Upcoming event" : "Core team hiring 2K26"}
            </h1>
            <p className="mt-4 max-w-xl font-medium text-ink/75">
              {featuredEvent
                ? "What's next on the calendar."
                : "Student-led dev community turning theory into real-world skills. Applications are open."}
            </p>
          </motion.div>

          {featuredEvent ? (
            <motion.div
              className="grid lg:grid-cols-2 border-[3px] border-ink bg-paper shadow-[10px_10px_0_0_var(--color-ink)] mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="relative overflow-hidden border-b-[3px] lg:border-r-[3px] lg:border-b-0 border-ink bg-acid">
                <img
                  src={featuredEvent.img}
                  alt={featuredEvent.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col">
                <span className="chip self-start !bg-zing !shadow-none">★ FEATURED</span>
                <h2 className="font-display text-3xl sm:text-4xl uppercase leading-none mt-4">
                  {featuredEvent.title}
                </h2>
                <p className="mt-4 font-medium text-ink/75 leading-relaxed whitespace-pre-line line-clamp-5">
                  {featuredEvent.description}
                </p>
                <div className="mt-6 space-y-2 label-mono text-[11px] text-ink/70">
                  {featuredEvent.venue && (
                    <p><span className="text-punk">VENUE</span> · {featuredEvent.venue}</p>
                  )}
                  {featuredEvent.date && (
                    <p><span className="text-punk">DATE</span> · {dateLabel(featuredEvent.date)}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="mt-8 border-[3px] border-ink bg-zing shadow-[10px_10px_0_0_var(--color-ink)] p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div>
                <span className="chip self-start !bg-paper">★ OPEN APPLICATIONS</span>
                <h2 className="font-display text-3xl sm:text-4xl uppercase leading-none mt-4">
                  Core team hiring 2K26
                </h2>
                <p className="mt-4 font-medium text-ink/80 max-w-xl whitespace-pre-line">
                  {"Project-based learning, peer mentorship & open-source collabs\nHackathons, bootcamps & workshops at scale\n1,000s of student devs, pan-India presence"}
                </p>
              </div>
              <a
                href="https://forms.gle/dUxfQyTAep6hTxSQ9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-solid !bg-ink !text-paper !shadow-[6px_6px_0_0_var(--color-signal)] hover:!bg-paper hover:!text-ink hover:!shadow-[6px_6px_0_0_var(--color-volt)] shrink-0"
              >
                Apply now →
              </a>
            </motion.div>
          )}
        </div>
      </section>

      {/* ─── ARCHIVE ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-24">
        <div className="sec-head">
          <h2 className="font-display text-4xl sm:text-5xl uppercase">Past events</h2>
          <span className="label-mono hidden sm:block text-ink/60">ARCHIVE / SEARCHABLE</span>
        </div>

        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-xs">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/50 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-hard input-search label-mono !text-xs"
              aria-label="Search events"
            />
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-ink border-t-acid animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="col-span-full flex flex-col items-center text-center py-20 border-[3px] border-dashed border-ink/40">
                <span className="font-display text-4xl uppercase text-ink/40">Empty</span>
                <p className="font-mono font-bold text-sm text-ink/60 mt-2">
                  No events found. Try a different search term.
                </p>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default Events;