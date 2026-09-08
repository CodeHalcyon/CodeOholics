import React from "react";
import Hero from "./Hero";
import Section2 from "./Section2";
import EventsSection from "./EventsSection";

const TICK_OPTS = [
  ["CODEHOLICS", "EST. 2022", "CMRTC HYDERABAD", "1,000+ MEMBERS", "20+ EVENTS", "NOW HIRING CORE TEAM 2K26"],
  ["WEB DEV", "MOBILE", "AI & ML", "BLOCKCHAIN", "CLOUD", "DESIGN", "OPEN SOURCE"],
];

const receipts = [
  { val: "2022", lbl: "Founded", tone: "bg-ink text-paper" },
  { val: "1000+", lbl: "Members", tone: "bg-zing text-ink" },
  { val: "20+", lbl: "Events run", tone: "bg-punk text-paper" },
  { val: "24H", lbl: "Hackathons", tone: "bg-volt text-paper" },
];

const Ticker = ({ lines, tone }) => (
  <div className={`ticker ${tone}`} aria-hidden="true">
    <div className="ticker-track">
      <span>
        {lines.map((t, i) => (
          <React.Fragment key={i}>
            {t}
            <span className="sep">★</span>
          </React.Fragment>
        ))}
      </span>
      <span>
        {lines.map((t, i) => (
          <React.Fragment key={`b-${i}`}>
            {t}
            <span className="sep">★</span>
          </React.Fragment>
        ))}
      </span>
    </div>
  </div>
);

const Home = () => {
  return (
    <div>
      <Hero />

      <Ticker lines={TICK_OPTS[0]} tone="ticker-ink" />

      {/* RECEIPTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="sec-head">
          <h2 className="font-display text-4xl sm:text-5xl uppercase">The receipts</h2>
          <span className="label-mono hidden sm:block text-ink/60">NO FLUFF / COLD HARD NUMBERS</span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {receipts.map((r, i) => (
            <div
              key={r.lbl}
              className={`border-[3px] border-ink shadow-[8px_8px_0_0_var(--color-ink)] p-8 flex flex-col items-center justify-center gap-1 text-center aspect-[4/4.5] transition-transform duration-150 hover:-translate-x-1 hover:-translate-y-1 ${r.tone} ${i % 2 ? "rotate-[0.8deg]" : "rotate-[-0.8deg]"}`}
            >
              <div className="font-display text-6xl sm:text-7xl leading-none">{r.val}</div>
              <div className="label-mono text-[10px] opacity-90">{r.lbl}</div>
            </div>
          ))}
        </div>
      </section>

      <Section2 />

      <Ticker lines={TICK_OPTS[1]} tone="ticker-acid" />

      <EventsSection />

      {/* HIRING */}
      <section className="bg-zing border-t-4 border-b-4 border-ink overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl uppercase leading-[0.92]">
              Now recruiting
              <span className="outline-word block">Core Team 2K26</span>
            </h2>
            <p className="label-mono mt-4 flex items-center gap-3 text-ink">
              <span className="inline-block w-3 h-3 bg-punk border-2 border-ink animate-blink" aria-hidden="true" />
              Applications open · every discipline · no prior experience needed
            </p>
          </div>
          <a
            href="https://forms.gle/dUxfQyTAep6hTxSQ9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-solid !bg-ink !text-paper !shadow-[6px_6px_0_0_var(--color-signal)] hover:!bg-paper hover:!text-ink hover:!shadow-[6px_6px_0_0_var(--color-volt)]"
          >
            Apply to join →
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;