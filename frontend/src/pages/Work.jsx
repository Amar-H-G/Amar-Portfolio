// pages/Work.jsx
import { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import Projects from "../components/Home/Projects";
import CaseStudies from "../components/Home/Casestudies";
import { motion } from "framer-motion";

export default function Work() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("projects");
  const [isHoveringProjects, setIsHoveringProjects] = useState(false);
  const [isHoveringCaseStudies, setIsHoveringCaseStudies] = useState(false);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash === "case-studies") {
      setActiveTab("case-studies");
    } else {
      setActiveTab("projects");
    }
  }, [location.hash]);

  // Animation variants
  const tabVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.98 },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen w-full text-white px-4 sm:px-6 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header with subtle animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
            My Professional Work
          </h1>
          <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto">
            Explore my projects and case studies that showcase my skills and
            experience.
          </p>
        </motion.div>

        {/* Tab Switcher with improved design */}
        <div className="flex justify-center mb-8 md:mb-16">
          <div className="flex rounded-full p-1 shadow-lg border bg-black border-gray-700">
            <motion.button
              whileHover="hover"
              whileTap="tap"
              variants={tabVariants}
              onClick={() => setActiveTab("projects")}
              onMouseEnter={() => setIsHoveringProjects(true)}
              onMouseLeave={() => setIsHoveringProjects(false)}
              className={`relative px-6 py-3 text-lg font-medium rounded-full transition-all duration-300 ${
                activeTab === "projects"
                  ? "bg-purple-600 text-white shadow-purple-glow"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Projects
              {isHoveringProjects && activeTab !== "projects" && (
                <motion.span
                  layoutId="tabHoverIndicator"
                  className="absolute inset-0 bg-gray-700 rounded-full -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.button>

            <motion.button
              whileHover="hover"
              whileTap="tap"
              variants={tabVariants}
              onClick={() => setActiveTab("case-studies")}
              onMouseEnter={() => setIsHoveringCaseStudies(true)}
              onMouseLeave={() => setIsHoveringCaseStudies(false)}
              className={`relative px-6 py-3 text-lg font-medium rounded-full transition-all duration-300 ${
                activeTab === "case-studies"
                  ? "bg-purple-600 text-white shadow-purple-glow"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Case Studies
              {isHoveringCaseStudies && activeTab !== "case-studies" && (
                <motion.span
                  layoutId="tabHoverIndicator"
                  className="absolute inset-0 bg-gray-700 rounded-full -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.button>
          </div>
        </div>

        {/* Content Switch with smooth transition */}
        <motion.div
          key={activeTab}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className={`mt-6 ${
            activeTab === "projects"
              ? "bg-gray-800 bg-opacity-50 rounded-xl p-6"
              : ""
          }`}
        >
          {activeTab === "projects" ? <Projects /> : <CaseStudies />}
        </motion.div>
      </div>

      {/* Global styles for this component */}
      <style jsx global>{`
        .shadow-purple-glow {
          box-shadow: 0 0 15px rgba(168, 85, 247, 0.5);
        }
      `}</style>
    </div>
  );
}
