import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = ["Home", "About", "Events", "Opportunities", "Contact"];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const pathFor = (item) =>
    item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-ink text-paper border-b-4 border-ink">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 h-16 px-4 sm:px-6">
        <NavLink to="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/logo.jpg"
            alt="CodeOholics logo"
            className="h-10 w-10 object-cover border-2 border-paper"
          />
          <span className="font-display text-xl sm:text-2xl leading-none tracking-wide">
            CodeOholics
            <sup className="font-mono text-[10px] text-acid ml-1">EST.2022</sup>
          </span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {items.map((item, i) => (
            <NavLink
              key={i}
              to={pathFor(item)}
              className={({ isActive }) =>
                `px-4 py-2 font-mono font-bold text-xs tracking-[0.14em] uppercase transition-colors duration-150 border-2 border-transparent hover:bg-zing hover:text-ink hover:border-zing ${
                  isActive ? "text-zing bg-ink" : "text-paper/85 hover:text-ink"
                }`
              }
            >
              {item}
            </NavLink>
          ))}
          <NavLink
            to="/opportunities"
            className="ml-2 px-4 py-2 font-mono font-bold text-xs tracking-[0.14em] uppercase bg-punk !border-transparent text-paper hover:bg-paper hover:text-ink transition-colors duration-150"
          >
            Apply ★
          </NavLink>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden h-11 w-11 grid place-items-center bg-zing text-ink text-lg font-bold"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 top-16 bg-ink text-paper transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col justify-start h-full px-6 py-8 overflow-y-auto">
          {items.map((item, i) => (
            <NavLink
              key={i}
              to={pathFor(item)}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `font-display text-4xl uppercase py-3 border-b-2 border-paper/20 hover:text-zing hover:border-zing transition-colors ${
                  isActive ? "text-zing" : "text-paper"
                }`
              }
            >
              {item}
            </NavLink>
          ))}
          <a
            href="https://forms.gle/dUxfQyTAep6hTxSQ9"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-8 bg-zing text-ink text-center font-display text-2xl uppercase py-4 border-2 border-zing hover:bg-punk hover:text-paper hover:border-punk transition-colors"
          >
            Join the club →
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;