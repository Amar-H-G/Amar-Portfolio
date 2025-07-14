// components/Projects.jsx

import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

import projects from "../Data/projects";

export default function Projects() {
  return (
    <section className="relative w-full min-h-screen px-6 py-2 text-white overflow-hidden">
      {/* Background Video */}

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">🚀 My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-2xl shadow-lg backdrop-blur-md border border-white/20 hover:scale-105 transform transition duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm mb-2 text-gray-300 italic">
                {project.duration}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-600 text-white px-3 py-1 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="list-disc list-inside text-gray-200 space-y-1">
                {project.bullets.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              {project.demoLink && (
                <div className="mt-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-700 hover:bg-purple-800 rounded-full transition duration-300"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
