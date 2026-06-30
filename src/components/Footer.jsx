import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import supabase from "../config/supabaseConfig";
import validator from 'validator';

const Footer = () => {
  const [Newsletter, setnewsLetter] = useState("");
  const handleOnSubmit = async () => {
    if (!validator.isEmail(Newsletter)) {
      alert("Please enter a valid email");
      return;
    } else {
      const { data, error } = await supabase
        .from("newsletter")
        .insert([{ email: Newsletter }]);
      if (error) {
        alert("Some error occured :(...");
        console.log(error);
      } else {
        alert("Newsletter subscribed successfully :...");
      }
    }
  };

  return (
    <footer className="bg-white border-t border-gray-100 text-gray-600 mt-auto py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 pb-8 border-b border-gray-100">
          <div className="text-2xl font-bold text-gray-900 mb-6 sm:mb-0">
            CodeOholics
          </div>
          <div className="flex space-x-6">
            <a
              href="https://instagram.com/codeoholics"
              target="_blank"
              className="text-gray-400 hover:text-gray-900 transition-colors duration-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/codeoholics-club-cmrtc/"
              target="_blank"
              className="text-gray-400 hover:text-gray-900 transition-colors duration-300"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col">
            <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
              Newsletter
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Get the latest updates, resources, and exclusive opportunities
              from the CodeOholics community.
            </p>
            <div className="w-full">
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  value={Newsletter}
                  onChange={(e) => setnewsLetter(e.target.value)}
                  type="email"
                  className="outline-none p-3 w-full rounded-md bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition-all duration-300"
                  placeholder="Enter your email"
                />
                <button
                  onClick={handleOnSubmit}
                  className="py-3 px-6 rounded-md bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium transition-all duration-300"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
              Explore
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Events", path: "/events" },
                { name: "Opportunities", path: "/opportunities" },
                { name: "Instagram", path: "https://instagram.com/codeoholics", external: true },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (
                link.external ? (
                  <a
                    key={index}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 text-sm py-1 transition-all duration-300 hover:text-gray-900"
                  >
                    {link.name}
                  </a>
                ) : (
                  <NavLink
                    key={index}
                    to={link.path}
                    className="text-gray-500 text-sm py-1 transition-all duration-300 hover:text-gray-900"
                  >
                    {link.name}
                  </NavLink>
                )
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
              Contact Us
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <FaPhone className="text-gray-400 shrink-0" size={14} />
                <a
                  href="tel:+917989842906"
                  className="text-sm text-gray-500 transition-all duration-300 hover:text-gray-900"
                >
                  Chetan Sirigiri (+91 7989842906)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-gray-400 shrink-0" size={14} />
                <a
                  href="mailto:codeoholics@cmrtc.ac.in"
                  className="text-sm text-gray-500 transition-all duration-300 hover:text-gray-900"
                >
                  codeoholics@cmrtc.ac.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaInstagram className="text-gray-400 shrink-0" size={14} />
                <a
                  href="https://instagram.com/codeoholics"
                  target="_blank"
                  className="text-sm text-gray-500 transition-all duration-300 hover:text-gray-900"
                >
                  @codeoholics
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
          <div>© {new Date().getFullYear()} CodeOholics. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
