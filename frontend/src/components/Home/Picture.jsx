import React from "react";
import { motion } from "framer-motion";

const Picture = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      {/* Main Image with elegant frame */}
      <div className="relative z-10 overflow-hidden rounded-2xl border-4 border-white/20 shadow-2xl">
        <img
          src="/Image/image.jpg.png"
          alt="Amar"
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -rotate-45 origin-center scale-150"></div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute -inset-4 -z-10">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/20 to-purple-500/20 blur-md group-hover:blur-lg transition-all duration-500"></div>
        <div className="absolute top-2 left-2 w-10 h-10 rounded-full bg-blue-400/30 blur-sm"></div>
        <div className="absolute bottom-2 right-2 w-16 h-16 rounded-full bg-purple-500/30 blur-sm"></div>
      </div>
    </motion.div>
  );
};

export default Picture;
