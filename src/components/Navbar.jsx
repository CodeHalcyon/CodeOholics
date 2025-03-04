// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const items = ["Home", "About", "Events", "Contact", "Resources"];

//   return (
//     <nav className="bg-black text-white shadow-md fixed w-full top-0 left-0 z-50 h-[64px]">
//       <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
//         {/* LOGO */}
//         <NavLink to="/" className="flex items-center">
//           <img src="/logo.jpg" alt="Logo" className="h-12 w-auto" />
//         </NavLink>

//         {/* DESKTOP NAV */}
//         <div className="hidden md:flex gap-6">
//           {items.map((item, key) => (
//             <NavLink
//               key={key}
//               to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
//               className={({ isActive }) =>
//                 `relative text-lg font-medium transition-all duration-300 ease-in-out
//                 before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-pink-400
//                 before:transition-all before:duration-300 before:ease-in-out 
//                 hover:before:w-full hover:before:left-0 hover:scale-105 hover:text-pink-400
//                 ${isActive ? "text-pink-400 font-bold" : ""}`
//               }
//             >
//               {item}
//             </NavLink>
//           ))}
//         </div>

//         {/* MOBILE MENU BUTTON */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-white focus:outline-none"
//           aria-label="Toggle Menu"
//         >
//           {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
//         </button>
//       </div>

//       {/* MOBILE MENU DROPDOWN */}
//       <div
//         className={`md:hidden bg-black fixed top-16 left-0 w-full transition-transform duration-300 ${
//           isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
//         }`}
//       >
//         <div className="flex flex-col items-center gap-4 py-6">
//           {items.map((item, key) => (
//             <NavLink
//               key={key}
//               to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
//               className="text-lg font-medium hover:text-pink-400 transition-all duration-300"
//               onClick={() => setIsOpen(false)}
//             >
//               {item}
//             </NavLink>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const items = ["Home", "About", "Events", "Contact", "Resources"];

//   // Prevent background scrolling when menu is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [isOpen]);

//   return (
//     <nav className="bg-black text-white shadow-md w-full top-0 left-0 z-50 h-[64px]">
//       <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
//         {/* LOGO */}
//         <NavLink to="/" className="flex items-center">
//           <img src="/logo.jpg" alt="Logo" className="h-12 w-auto" />
//         </NavLink>

//         {/* DESKTOP NAV */}
//         <div className="hidden md:flex gap-6">
//           {items.map((item, key) => (
//             <NavLink
//               key={key}
//               to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
//               className={({ isActive }) =>
//                 `relative text-lg font-medium transition-all duration-300 ease-in-out
//                 before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-pink-400
//                 before:transition-all before:duration-300 before:ease-in-out 
//                 hover:before:w-full hover:before:left-0 hover:scale-105 hover:text-pink-400
//                 ${isActive ? "text-pink-400 font-bold" : ""}`
//               }
//             >
//               {item}
//             </NavLink>
//           ))}
//         </div>

//         {/* MOBILE MENU BUTTON */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-white focus:outline-none"
//           aria-label="Toggle Menu"
//         >
//           {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
//         </button>
//       </div>

//       {/* MOBILE MENU DROPDOWN */}
//       <div
//         className={`md:hidden absolute top-[64px] left-0 w-full bg-black transition-all duration-300
//           ${isOpen ? "opacity-100 visible h-screen overflow-y-auto" : "opacity-0 invisible h-0"}`}
//       >
//         <div className="flex flex-col items-center gap-6 py-6">
//           {items.map((item, key) => (
//             <NavLink
//               key={key}
//               to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
//               className="text-lg font-medium hover:text-pink-400 transition-all duration-300"
//               onClick={() => setIsOpen(false)}
//             >
//               {item}
//             </NavLink>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = ["Home", "About", "Events", "Contact", "Resources"];

  // Prevent background scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="bg-black text-white shadow-md w-full fixed top-0 left-0 z-50 h-[64px]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* LOGO */}
        <NavLink to="/" className="flex items-center">
          <img src="/logo.jpg" alt="Logo" className="h-12 w-auto" />
        </NavLink>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-6">
          {items.map((item, key) => (
            <NavLink
              key={key}
              to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
              className={({ isActive }) =>
                `relative text-lg font-medium transition-all duration-300 ease-in-out
                before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-[2px] before:bg-pink-400
                before:transition-all before:duration-300 before:ease-in-out 
                hover:before:w-full hover:before:left-0 hover:scale-105 hover:text-pink-400
                ${isActive ? "text-pink-400 font-bold" : ""}`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`md:hidden fixed top-[64px] left-0 w-full bg-black transition-all duration-300 ease-in-out
          ${isOpen ? "opacity-100 visible max-h-screen" : "opacity-0 invisible max-h-0 overflow-hidden"}`}
      >
        <div className="flex flex-col items-center gap-6 py-6">
          {items.map((item, key) => (
            <NavLink
              key={key}
              to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
              className="text-lg font-medium hover:text-pink-400 transition-all duration-300"
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
