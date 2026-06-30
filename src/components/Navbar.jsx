import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const items = ["Home", "About", "Events", "Opportunities", "Contact", "Admin Login"];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center">
      <div
        className={`flex items-center justify-between transition-all duration-500 ease-in-out
          ${
            scrolled
              ? "max-w-5xl w-full mt-4 mx-4 px-6 py-2.5 rounded-full bg-white shadow-lg"
              : "max-w-full w-full px-6 py-4 bg-white/80 backdrop-blur-md"
          }`}
      >
        <NavLink to="/" className="flex items-center">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="h-9 w-auto rounded-full shrink-0"
          />
        </NavLink>

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
                `relative text-sm font-semibold tracking-wider transition-all duration-300 uppercase font-body
                after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] 
                after:bg-gray-900 after:transition-all after:duration-300
                hover:after:w-full
                ${isActive ? "text-gray-900 after:w-full" : "text-gray-700 hover:text-gray-900"}`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-gray-700"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-md transition-all duration-400
          ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-gray-700"
            aria-label="Close Menu"
          >
            <FiX size={28} />
          </button>
          {items.map((item, key) => (
            <NavLink
              key={key}
              to={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "-")}`
              }
              className={({ isActive }) =>
                `text-lg font-semibold uppercase tracking-widest transition-all duration-300 font-body
                ${isActive ? "text-gray-900" : "text-gray-700 hover:text-gray-900"}`
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
