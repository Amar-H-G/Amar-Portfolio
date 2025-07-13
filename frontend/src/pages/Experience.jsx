import { motion } from "framer-motion";
import { FaLaptopCode, FaMapMarkerAlt } from "react-icons/fa";

export default function Experience() {
  return (
    <div className="relative z-10 w-full text-white py-24 px-6 bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-8 shadow-2xl"
      >
        <h2 className="text-4xl font-bold text-white mb-6 border-b border-white/20 pb-2">
          Experience
        </h2>

        <div className="flex items-start gap-6">
          <div className="text-white text-5xl">
            <FaLaptopCode />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Full Stack Developer Intern
            </h3>
            <p className="text-lg text-white/90">ZoneValue</p>
            <div className="flex items-center text-sm text-white/70 mt-1">
              <FaMapMarkerAlt className="mr-2" />
              Remote · India
            </div>

            <p className="mt-4 text-white/80 leading-relaxed">
              Currently interning at{" "}
              <a
                href="https://zonevalue.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-300 hover:text-indigo-400 no-underline transition duration-200"
              >
                ZoneValue
              </a>{" "}
              as a Full Stack Developer, working with technologies like{" "}
              <span className="font-medium text-indigo-200">
                Python, Django, React, JavaScript, Bootstrap
              </span>{" "}
              and more. Responsible for building end-to-end features, API
              integration, cloud-based media handling, and modern UI components
              that elevate user experience.
            </p>

            <div className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-xl transition duration-300">
              Present · Since July 2025
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
