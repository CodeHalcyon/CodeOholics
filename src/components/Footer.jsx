import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const top = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-ink text-paper border-t-4 border-ink overflow-hidden">
      <span
        aria-hidden="true"
        className="absolute -bottom-[0.24em] left-0 right-0 font-display text-[24vw] leading-none text-transparent pointer-events-none select-none"
        style={{ WebkitTextStroke: "1px rgba(255,255,255,.10)" }}
      >
        CODEHOLICS
      </span>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-8">
        <p className="label-mono text-acid flex items-center gap-3 mb-4">
          <span className="inline-block w-12 h-1 bg-punk" aria-hidden="true" />
          // TRANSMISSION — CMRTC, HYDERABAD
        </p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase mb-8">
          Talk to <span className="text-zing">the club</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div>
            <h4 className="label-mono text-paper/50 border-b-2 border-paper/25 pb-2 mb-4">
              Channels
            </h4>
            <div className="flex flex-col">
              {[
                {
                  label: "Instagram",
                  hint: "@codeoholics ↗",
                  href: "https://instagram.com/codeoholics",
                  external: true,
                },
                {
                  label: "LinkedIn",
                  hint: "company/codeoholics-club-cmrtc ↗",
                  href: "https://www.linkedin.com/company/codeoholics-club-cmrtc/",
                  external: true,
                },
                { label: "Home", hint: "/", to: "/" },
                { label: "Events", hint: "/events", to: "/events" },
                { label: "Opportunities", hint: "/opportunities", to: "/opportunities" },
              ].map((link, i) =>
                link.external ? (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center gap-4 py-3 border-b border-paper/15 font-bold text-lg hover:text-zing transition-colors"
                  >
                    {link.label}
                    <span className="font-mono text-xs font-normal text-paper/50">
                      {link.hint}
                    </span>
                  </a>
                ) : (
                  <NavLink
                    key={i}
                    to={link.to}
                    className="flex justify-between items-center gap-4 py-3 border-b border-paper/15 font-bold text-lg hover:text-zing transition-colors"
                  >
                    {link.label}
                    <span className="font-mono text-xs font-normal text-paper/50">
                      {link.hint}
                    </span>
                  </NavLink>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="label-mono text-paper/50 border-b-2 border-paper/25 pb-2 mb-4">
              Base
            </h4>
            <div className="flex flex-col gap-4 font-mono font-bold text-sm tracking-wide">
              <span>
                <span className="text-punk">WHERE</span> · CMRTC, Hyderabad, IN
              </span>
              <span>
                <span className="text-punk">COORD</span> · N17.50 / E78.53
              </span>
              <span className="flex items-center gap-3">
                <FaPhone className="text-punk shrink-0" size={13} />
                <a href="tel:+917989842906" className="font-body font-bold text-base text-paper hover:text-zing transition-colors">
                  +91 7989842906
                </a>
              </span>
              <span className="flex items-center gap-3">
                <FaEnvelope className="text-punk shrink-0" size={13} />
                <a href="mailto:codeoholics@cmrtc.ac.in" className="font-body font-bold text-base text-paper hover:text-zing transition-colors">
                  codeoholics@cmrtc.ac.in
                </a>
              </span>
            </div>
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com/codeoholics"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-11 w-11 grid place-items-center border-2 border-paper/40 text-paper hover:bg-zing hover:text-ink hover:border-zing transition-colors"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://www.linkedin.com/company/codeoholics-club-cmrtc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-11 w-11 grid place-items-center border-2 border-paper/40 text-paper hover:bg-zing hover:text-ink hover:border-zing transition-colors"
              >
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        <p className="font-mono font-bold text-sm tracking-wider border-t-2 border-paper/20 pt-5 mb-8">
          <span className="text-acid">member@codeoholics:~$</span> ./join — pick a lane, build with us
          <span aria-hidden="true" className="inline-block w-3 h-[1.1em] bg-acid ml-1 align-middle animate-blink" />
        </p>

        <div className="flex flex-col sm:flex-row justify-between gap-4 items-baseline sm:items-center font-mono font-bold text-[11px] tracking-[0.13em] uppercase text-paper/45 border-t-2 border-paper/20 pt-4">
          <span>© {new Date().getFullYear()} CodeOholics</span>
          <span className="hidden sm:inline">Built by the community</span>
          <button
            onClick={top}
            className="text-acid hover:underline cursor-pointer"
          >
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;