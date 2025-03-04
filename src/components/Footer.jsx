// import React from 'react'
// import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa'
// import { NavLink } from "react-router-dom";
// const Footer = () => {
//     return (
//         <footer className="flex flex-row gap-10 p-8 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white mt-auto items-start justify-between">

//             {/* Section 1: Join Our Coding Community */}
//             <div className="flex flex-col justify-evenly max-w-[350px]">
//                 <h1 className="text-3xl font-bold transition-all duration-300">
//                     Join Our Coding Community
//                 </h1>
//                 <p className="text-gray-300">
//                     Stay updated with the latest news, events, and opportunities in the CodeOholics community.
//                 </p>
//                 <div className="mt-5">
//                     <div className="flex gap-4">
//                         <input
//                             type="email"
//                             className="outline-none p-2 w-[250px] bg-gray-800 text-white rounded-md transition-all duration-300 
//                             focus:ring-2 focus:ring-purple-400 focus:scale-105"
//                             placeholder="Enter your email"
//                         />
//                         <a
//                             className="border-2 p-2 w-[110px] block text-center bg-cyan-500 text-black font-bold rounded-md 
//                             transition-all duration-300 hover:bg-purple-400 hover:border-purple-600 shadow-lg"
//                             target="_blank"
//                             href="#"
//                         >
//                             Sign Up
//                         </a>
//                     </div>
//                     <div className="text-sm text-gray-400 mt-2">
//                         By clicking Sign Up, you agree to our <span className="text-cyan-400 cursor-pointer hover:underline">Terms and Conditions</span>.
//                     </div>
//                 </div>
//             </div>

//             {/* Section 2: Quick Links */}
//             <div className="flex flex-col">
//                 <h2 className="text-2xl font-bold mb-4 text-cyan-400">Quick Links</h2>
//                 <ul className="flex flex-col gap-2">
//                     {[
//                         { name: "Home", path: "/" },
//                         { name: "About Us", path: "/about" },
//                         { name: "Events", path: "/events" },
//                         { name: "Resources", path: "/resources" },
//                         { name: "Contact", path: "/contact" }
//                     ].map((link, index) => (
//                         <li key={index}>
//                             <NavLink
//                                 to={link.path}
//                                 className={({ isActive }) =>
//                                     `text-gray-300 transition-all duration-300 hover:text-purple-400 hover:translate-x-1 
//                         ${isActive ? "text-purple-400 font-bold" : ""}`
//                                 }
//                             >
//                                 {link.name}
//                             </NavLink>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Section 3: Contact Information */}
//             <div className="flex flex-col">
//                 <h2 className="text-2xl font-bold mb-4 text-lime-400">Contact</h2>
//                 <ul className="flex flex-col gap-3">
//                     <li className="flex items-center gap-2">
//                         <FaPhone className="text-lime-400" />
//                         <a href="tel:+1234567890" className="text-gray-300 transition-all duration-300 hover:text-lime-400">
//                             +123 456 7890
//                         </a>
//                     </li>
//                     <li className="flex items-center gap-2">
//                         <FaEnvelope className="text-lime-400" />
//                         <a href="mailto:codeoholics@example.com" className="text-gray-300 transition-all duration-300 hover:text-lime-400">
//                             codeoholics@example.com
//                         </a>
//                     </li>
//                     <li className="flex items-center gap-2">
//                         <FaLinkedin className="text-lime-400" />
//                         <a href="https://linkedin.com/in/codeoholics" target="_blank" className="text-gray-300 transition-all duration-300 hover:text-lime-400">
//                             LinkedIn Profile
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//         </footer>
//     )
// }

// export default Footer


import React from 'react'
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="flex flex-col sm:flex-row gap-6 sm:gap-10 p-6 sm:p-8 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white mt-auto items-center sm:items-start justify-between">
            
            {/* Section 1: Join Our Coding Community */}
            <div className="flex flex-col items-center sm:items-start justify-evenly max-w-[350px] text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold transition-all duration-300">
                    Join Our Coding Community
                </h1>
                <p className="text-gray-300">
                    Stay updated with the latest news, events, and opportunities in the CodeOholics community.
                </p>
                <div className="mt-5 w-full">
                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                        <input
                            type="email"
                            className="outline-none p-2 w-full sm:w-[250px] bg-gray-800 text-white rounded-md transition-all duration-300 
                            focus:ring-2 focus:ring-purple-400 focus:scale-105"
                            placeholder="Enter your email"
                        />
                        <a
                            className="border-2 p-2 w-full sm:w-[110px] block text-center bg-cyan-500 text-black font-bold rounded-md 
                            transition-all duration-300 hover:bg-purple-400 hover:border-purple-600 shadow-lg"
                            target="_blank"
                            href="#"
                        >
                            Sign Up
                        </a>
                    </div>
                    <div className="text-sm text-gray-400 mt-2">
                        By clicking Sign Up, you agree to our <span className="text-cyan-400 cursor-pointer hover:underline">Terms and Conditions</span>.
                    </div>
                </div>
            </div>

            {/* Section 2: Quick Links */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Quick Links</h2>
                <ul className="flex flex-col gap-2">
                    {[
                        { name: "Home", path: "/" },
                        { name: "About Us", path: "/about" },
                        { name: "Events", path: "/events" },
                        { name: "Resources", path: "/resources" },
                        { name: "Contact", path: "/contact" }
                    ].map((link, index) => (
                        <li key={index}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-gray-300 transition-all duration-300 hover:text-purple-400 hover:translate-x-1 
                        ${isActive ? "text-purple-400 font-bold" : ""}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Section 3: Contact Information */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <h2 className="text-2xl font-bold mb-4 text-lime-400">Contact</h2>
                <ul className="flex flex-col gap-3">
                    <li className="flex items-center justify-center sm:justify-start gap-2">
                        <FaPhone className="text-lime-400" />
                        <a href="tel:+1234567890" className="text-gray-300 transition-all duration-300 hover:text-lime-400">
                            +123 456 7890
                        </a>
                    </li>
                    <li className="flex items-center justify-center sm:justify-start gap-2">
                        <FaEnvelope className="text-lime-400" />
                        <a href="mailto:codeoholics@example.com" className="text-gray-300 transition-all duration-300 hover:text-lime-400">
                            codeoholics@example.com
                        </a>
                    </li>
                    <li className="flex items-center justify-center sm:justify-start gap-2">
                        <FaLinkedin className="text-lime-400" />
                        <a href="https://linkedin.com/in/codeoholics" target="_blank" className="text-gray-300 transition-all duration-300 hover:text-lime-400">
                            LinkedIn Profile
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
