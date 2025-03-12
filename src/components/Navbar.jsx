import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const items = ["Home", "About", "Events", "Contact", "Resources"];

  // Prevent background scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Add scroll detection for navbar appearance change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white text-gray-800 shadow-lg py-2"
            : "bg-transparent text-white py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <NavLink to="/" className="flex items-center">
          <img
            src="/logo.jpg"
            alt="Logo"
            className={`h-12 w-auto transition-all duration-300 ${
              scrolled ? "h-10" : "h-12"
            }`}
          />
        </NavLink>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-8">
          {items.map((item, key) => (
            <NavLink
              key={key}
              to={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "-")}`
              }
              className={({ isActive }) =>
                `relative text-lg font-medium tracking-wide transition-all duration-300
                after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] 
                after:bg-emerald-500 after:transition-all after:duration-300
                hover:after:w-full hover:text-emerald-500
                ${isActive ? "text-emerald-500 after:w-full" : ""}`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden focus:outline-none transition-colors duration-300
            ${scrolled ? "text-gray-800" : "text-white"}`}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`md:hidden fixed top-[64px] left-0 w-full backdrop-blur-lg bg-white/90 shadow-xl transition-all duration-300
          ${
            isOpen
              ? "opacity-100 visible max-h-screen"
              : "opacity-0 invisible max-h-0 overflow-hidden"
          }`}
      >
        <div className="flex flex-col items-center gap-6 py-8">
          {items.map((item, key) => (
            <NavLink
              key={key}
              to={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "-")}`
              }
              className={({ isActive }) =>
                `text-lg font-medium text-gray-800 transition-all duration-300
                ${isActive ? "text-emerald-500 font-semibold" : ""}`
              }
              onClick={() => setIsOpen(false)}
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
