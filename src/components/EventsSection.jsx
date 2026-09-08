import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const rows = [
  {
    img: "/htv.png",
    day: "04",
    month: "Apr'25",
    title: "Hack The Verse",
    desc: "Our flagship 24-hour hackathon — 36 hours of ideas, code and way too much caffeine.",
    tags: ["Hackathon", "24H"],
    alt: "Hack The Verse 2025 — participants building at the 24-hour hackathon.",
  },
  {
    img: "https://etvqaruci3mfadph.public.blob.vercel-storage.com/decentralized-i8Lx7Wyq6y1jcr0y2GFKWRXa2xD8OP.JPG",
    day: "02",
    month: "Feb'25",
    title: "Decentralized Dreamscape",
    desc: "A Web3 & blockchain event where we explore what comes after the standard stack.",
    tags: ["Workshop", "Web3"],
    alt: "Decentralized Dreamscape workshop — blockchain session.",
  },
  {
    img: "/gfe.JPG",
    day: "01",
    month: "Jan'25",
    title: "Gemini For Everything",
    desc: "A bootcamp that demystified AI app building — from API basics to shipped projects.",
    tags: ["Bootcamp", "AI"],
    alt: "Gemini For Everything bootcamp — students building AI apps.",
  },
];

const EventsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="sec-head">
        <h2 className="font-display text-4xl sm:text-5xl uppercase">The drop zone</h2>
        <span className="label-mono hidden sm:block text-ink/60">MOST RECENT FIRST / NO REGRETS</span>
      </div>

      <div className="flex flex-col">
        {rows.map((e, i) => (
          <motion.article
            key={e.title}
            className="flip-row grid grid-cols-1 sm:grid-cols-[92px_84px_1fr_36px] sm:items-center gap-x-5 gap-y-4 border-[3px] border-ink bg-paper p-5 -mt-[3px] sm:p-6 sm:py-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
          >
            <img
              src={e.img}
              alt={e.alt}
              className="w-full sm:w-23 h-44 sm:h-23 object-cover border-2 border-ink shadow-[5px_5px_0_0_var(--color-punk)]"
              loading="lazy"
            />
            <div className="border-2 border-current text-center font-mono font-bold leading-snug py-3 px-1 justify-self-start sm:justify-self-auto">
              <span className="block text-xl">{e.day}</span>
              <span className="block text-[10px] tracking-[0.18em] uppercase">{e.month}</span>
            </div>
            <div>
              <h3 className="font-display text-2xl sm:text-3xl uppercase leading-none">{e.title}</h3>
              <p className="font-medium text-sm opacity-85 mt-1.5 max-w-xl">{e.desc}</p>
              <div className="flex gap-2 mt-2.5">
                {e.tags.map((t) => (
                  <span key={t} className="chip !bg-transparent !shadow-none !text-[10px]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <span aria-hidden="true" className="font-display text-3xl justify-self-end sm:justify-self-center transition-transform duration-150 group-hover:translate-x-1">
              →
            </span>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link to="/events" className="btn btn-solid">
          View all events
        </Link>
      </div>
    </section>
  );
};

export default EventsSection;