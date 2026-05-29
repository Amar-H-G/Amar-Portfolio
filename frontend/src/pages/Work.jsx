// pages/Work.jsx
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Projects from "../components/Home/Projects";
import CaseStudies from "../components/Home/Casestudies";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

export default function Work() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("projects");

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash === "case-studies") {
      setActiveTab("case-studies");
    } else {
      setActiveTab("projects");
    }
  }, [location.hash]);

  const tabVariants = {
    hover: { y: -2 },
    tap: { scale: 0.98 },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="relative z-10 w-full px-4 sm:px-6 py-20 sm:py-24 text-white">
      <SEO
        title={activeTab === "case-studies"
          ? "Case Studies | Amar Patra – React Native & MERN Projects"
          : "Projects | Amar Patra – Mobile Apps, Web Platforms"}
        description="Explore Amar Patra's professional projects: Maidfort, Truties, GroceryWalle, Urban (React Native apps), NBD Fashion (MERN), VYRA Connect, and more."
        url={`https://amarpatra.vercel.app/work${activeTab === "case-studies" ? "#case-studies" : ""}`}
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="max-w-7xl mx-auto"
      >
        {/* ================= HEADER ================= */}
        <div className="text-start mb-4 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold border-b border-white/20  text-start">
            Professional Work
          </h2>
          <p className="mt-1 text-white  mx-auto text-sm sm:text-base">
            A selection of projects and in-depth case studies showcasing my
            experience in building scalable, production-ready applications.
          </p>
        </div>

        {/* ================= TABS ================= */}
        <div className="flex justify-center mb-2 sm:mb-8">
          <div className="flex gap-2 bg-[#12172b] border border-white/15 rounded-full p-1 shadow-xl">
            <motion.button
              variants={tabVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setActiveTab("projects")}
              className={`px-5 sm:px-6 py-2.5 rounded-full text-sm sm:text-base font-medium transition ${
                activeTab === "projects"
                  ? "bg-indigo-600 text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Projects
            </motion.button>

            <motion.button
              variants={tabVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setActiveTab("case-studies")}
              className={`px-5 sm:px-6 py-0 rounded-full text-sm sm:text-base font-medium transition ${
                activeTab === "case-studies"
                  ? "bg-indigo-600 text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Case Studies
            </motion.button>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <motion.div
          key={activeTab}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="
            p-2 sm:p-3 md:p-4
            shadow-xl
          "
        >
          {activeTab === "projects" ? <Projects /> : <CaseStudies />}
        </motion.div>
      </motion.div>
    </section>
  );
}
