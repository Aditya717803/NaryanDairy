import React from "react";
import { motion } from "framer-motion";
import logo from "./Logo.png"; // Adjust path as necessary

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative flex items-center justify-center h-[60vh] md:h-[50vh] bg-gradient-to-r from-[#0023c3] to-[#05197d] text-white overflow-hidden">
      {/* Animated Background Effects */}
      <motion.div
        className="absolute w-full h-full"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
          clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 100%)",
          zIndex: -1,
        }}
        animate={{
          y: [-10, 10, -10],
          x: [-10, 10, -10],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-full h-full"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
          clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0 80%)",
          zIndex: -1,
        }}
        animate={{
          y: [10, -10, 10],
          x: [10, -10, 10],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="text-center p-5 relative z-10">
        {/* Logo */}
        <motion.img
          src={logo}
          alt="Logo"
          className="w-[300px] mx-auto mb-5"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4 transform hover:scale-105 transition-transform duration-300"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          Fresh Milk & Milk Products
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-yellow-400"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          Since 1960
        </motion.p>
        <motion.button
          className="mt-6 bg-yellow-500 text-white py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
          Explore
        </motion.button>
      </div>

      {/* SVG Wave */}
      <div className="absolute left-0 bottom-0 overflow-hidden leading-none">
        <svg
          className="block w-full h-[100px] md:h-[200px] md:w-auto lg:w-screen"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,48 C150,90 300,30 450,80 C600,130 750,50 900,90 C1050,130 1200,60 1200,60 L1200,120 L0,120 Z"
            fill="#fff"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
