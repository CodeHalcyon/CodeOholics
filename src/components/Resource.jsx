import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const flickerVariants = {
  flicker: {
    opacity: [0.7, 1, 0.6, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Resource = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-6xl font-extrabold text-cyan-300 relative overflow-hidden">
      {/* Background Glow */}
      <motion.div
        className="absolute w-[200px] h-[200px] bg-cyan-500 blur-3xl opacity-20"
        animate={{ x: [0, 100, -100, 0], y: [0, -50, 50, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Main Text */}
      <motion.span variants={textVariants} initial="hidden" animate="visible">
        LET ME COOK
      </motion.span>

      {/* Flickering Subtitle */}
      <motion.span
        className="text-xl text-gray-400 mt-2"
        variants={flickerVariants}
        animate="flicker"
      >
        something amazing is coming...
      </motion.span>

      {/* Animated Dots */}
      <motion.div className="flex mt-4">
        {[0.2, 0.4, 0.6].map((delay, index) => (
          <motion.span
            key={index}
            className="text-5xl mx-1"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay }}
          >
            •
          </motion.span>
        ))}
      </motion.div>

      {/* Subtle Shake Effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        animate={{ x: [0, -1, 1, 0], y: [0, -1, 1, 0] }}
        transition={{ duration: 0.1, repeat: Infinity }}
      />
    </div>
  );
};

export default Resource;
