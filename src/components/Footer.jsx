import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaDiscord
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
    <footer className="bg-gradient-to-r from-emerald-950 via-green-900 to-emerald-950 text-white mt-auto py-12 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Top section with logo and social icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 pb-8 border-b border-emerald-700/30">
          <div className="text-3xl font-extrabold mb-6 sm:mb-0 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">
            CodeOholics
          </div>
          <div className="flex space-x-5">
            <a
              href="https://github.com/CodeHalcyon"
              target="_blank"
              className="text-emerald-300/70 hover:text-white transition-colors duration-300"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/company/codeoholics-club-cmrtc/"
              target="_blank"
              className="text-emerald-300/70 hover:text-white transition-colors duration-300"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://discord.gg/rcgAfpuP"
              target="_blank"
              className="text-emerald-300/70 hover:text-white transition-colors duration-300"
            >
              <FaDiscord size={22} />
            </a>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Section 1: Join Our Newsletter */}
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-5 text-white">
              Join Our Newsletter
            </h2>
            <p className="text-emerald-100/80 mb-6 text-sm">
              Get the latest updates, resources, and exclusive opportunities
              from the CodeOholics community.
            </p>
            <div className="w-full">
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  value={Newsletter}
                  onChange={(e) => {
                    setnewsLetter(e.target.value);
                    console.log(e.target.value);
                  }}
                  type="email"
                  className="outline-none p-3 w-full rounded-md bg-emerald-950/50 border border-emerald-700/40 text-white placeholder-emerald-200/50
                                    focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                />
                <button
                  onClick={handleOnSubmit}
                  className="py-3 px-6 rounded-md bg-green-600 hover:bg-green-500 text-white font-medium transition-all duration-300
                                    shadow-lg shadow-green-600/20 hover:shadow-green-500/30"
                >
                  Subscribe
                </button>
              </div>
              <div className="text-xs text-emerald-200/60 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </div>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-5 text-white">Explore</h2>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Events", path: "/events" },
                { name: "Resources", path: "/resources" },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-emerald-100/80 text-sm py-1 transition-all duration-300 hover:text-green-400 
                                        ${
                                          isActive
                                            ? "text-green-400 font-medium"
                                            : ""
                                        }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Section 3: Contact Information */}
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-5 text-white">
              Contact Us
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-green-800/50 flex items-center justify-center">
                  <FaPhone className="text-green-400" size={16} />
                </div>
                <a
                  href="tel:+917989842906"
                  className="text-emerald-100/80 transition-all duration-300 hover:text-green-400"
                >
                  Chetan Sirigiri (+91 7989842906)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-green-800/50 flex items-center justify-center">
                  <FaEnvelope className="text-green-400" size={16} />
                </div>
                <a
                  href="mailto:codeoholics@cmrtc.ac.in"
                  className="text-emerald-100/80 transition-all duration-300 hover:text-green-400"
                >
                  codeoholics@cmrtc.ac.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-green-800/50 flex items-center justify-center">
                  <FaLinkedin className="text-green-400" size={16} />
                </div>
                <a
                  href="https://linkedin.com/in/codeoholics"
                  target="_blank"
                  className="text-emerald-100/80 transition-all duration-300 hover:text-green-400"
                >
                  Codeoholics Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="mt-12 pt-6 border-t border-emerald-700/30 flex flex-col sm:flex-row justify-between items-center text-sm text-emerald-200/60">
          <div>
            © {new Date().getFullYear()} CodeOholics. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
