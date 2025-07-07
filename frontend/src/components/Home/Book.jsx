import React from "react";
import HTMLFlipBook from "react-pageflip";
import { motion } from "framer-motion";

const Book = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="relative"
    >
      <HTMLFlipBook
        className="shadow-2xl"
        height={350}
        width={280}
        maxShadowOpacity={0.3}
        drawShadow={true}
        showCover={true}
        size="fixed"
        style={{
          "--page-shadow-color": "rgba(0,0,0,0.2)",
          "--page-cover-color": "rgba(255,255,255,0.1)",
          "--page-border": "1px solid rgba(255,255,255,0.2)",
        }}
      >
        {/* Cover Page */}
        <div className="page bg-gradient-to-br from-blue-900/80 to-purple-900/80 backdrop-blur-sm">
          <div className="page-content flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">My Diary</h1>
            <p className="text-white/80">Flip to explore</p>
            <div className="absolute bottom-6 right-6 text-xs text-white/50">
              Est. {new Date().getFullYear()}
            </div>
          </div>
        </div>

        {/* Inner Pages */}
        {[1, 2, 3, 4].map((page) => (
          <div key={page} className="page bg-white/90 backdrop-blur-xs">
            <div className="page-content p-6 flex flex-col">
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Page {page}
                  </h2>
                  <p className="text-gray-600">Your content here</p>
                </div>
              </div>
              <div className="text-xs text-gray-400 text-right mt-auto">
                {page} of 4
              </div>
            </div>
          </div>
        ))}
      </HTMLFlipBook>

      {/* Floating action hint */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-white/70 animate-pulse">
        ← Flip me →
      </div>
    </motion.div>
  );
};

export default Book;
