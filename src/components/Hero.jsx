import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const chips = ["WEB", "MOBILE", "AI & ML", "BLOCKCHAIN", "CLOUD", "DESIGN"];

const Hero = () => {
  return (
    <section className="relative border-b-4 border-ink overflow-hidden">
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 gridpaper opacity-[0.07] pointer-events-none"
      />

      {/* Decorative elements */}
      <span
        aria-hidden="true"
        className="absolute top-6 left-5 font-mono font-bold text-lg text-ink select-none"
      >
        +
      </span>

      <span
        aria-hidden="true"
        className="absolute bottom-6 right-5 font-mono font-bold text-lg text-ink select-none"
      >
        +
      </span>

      <span
        aria-hidden="true"
        className="label-mono absolute top-5 right-5 bg-ink text-paper px-2 py-1.5 hidden md:block"
      >
        N17.50 / E78.53
      </span>

      {/* Hero */}
      <div className="relative w-full px-4 sm:px-6 pt-32 pb-16 grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-10 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="label-mono flex items-center gap-3 mb-5 text-ink">
            <span
              className="inline-block w-12 h-1 bg-punk"
              aria-hidden="true"
            />
            Student-led tech community — CMRTC Hyderabad
          </p>

          <h1 className="font-display uppercase leading-[0.92] text-[clamp(3.5rem,11vw,9.4rem)]">
            <span className="hl-box">We are</span>
            {"\u00A0"}
            <br />
            CodeOholics<span className="text-punk">.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg font-semibold text-ink/80">
            A <span className="hl-acid">1,000+ member</span> crew running
            workshops, bootcamps and a nationwide 24-hour hackathon. We learn
            loud, build fast, and ship for real.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="https://instagram.com/codeoholics"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid"
            >
              Join the club →
            </a>

            <Link to="/events" className="btn btn-outline">
              See the events
            </Link>
          </div>

          <div className="flex flex-wrap gap-2.5 mt-8">
            {chips.map((c, i) => (
              <span
                key={c}
                className={`chip ${i % 3 === 1 ? "!bg-acid" : ""}`}
                style={{
                  transform:
                    i % 2
                      ? "rotate(1.4deg)"
                      : "rotate(-1.6deg)",
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT / IMAGE */}
        <motion.figure
          initial={{ opacity: 0, rotate: 3 }}
          animate={{ opacity: 1, rotate: 2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative w-full justify-self-center lg:justify-self-end mt-10 lg:mt-0"
        >
          <div className="border-[3px] border-ink bg-paper p-3 shadow-[12px_12px_0_0_var(--color-ink)] transition-transform duration-200 hover:shadow-[18px_18px_0_0_var(--color-punk)] hover:-translate-x-1 hover:-translate-y-1">

            <img
              src="/hero_image.webp"
              alt="CodeOholics community at a company meet — members gathered for a talk."
              className="w-full h-[280px] sm:h-[380px] md:h-[460px] lg:h-[520px] border-2 border-ink object-cover"
            />

            <figcaption className="flex justify-between items-center gap-3 pt-2.5 label-mono text-[10px] text-ink">
              <span>File: HACK_THE_VERSE.webp</span>
              <span>Scale: 9:16</span>
            </figcaption>

          </div>

          {/* Stamps */}
          <span className="stamp absolute -top-5 -left-6 rotate-[-8deg]">
            24hrs hackathon
          </span>

          <span className="stamp absolute bottom-8 -right-4 rotate-[6deg] !bg-volt !shadow-[5px_5px_0_0_var(--color-zing)] text-center leading-none">
            1K+
            <br />
            MEMBERS
          </span>
        </motion.figure>

      </div>
    </section>
  );
};

export default Hero;