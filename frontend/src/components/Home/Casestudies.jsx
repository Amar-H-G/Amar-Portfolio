import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaCar,
  FaBook,
  FaMoneyBillWave,
  FaQuestionCircle,
  FaComments,
  FaStore,
} from "react-icons/fa";

import caseStudies from "../Data/caseStudies";

export default function CaseStudies() {
  return (
    <section className="w-full min-h-screen px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1f1f47] to-[#181818]  text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          📚 Case Studies
        </motion.h2>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="bg-gray-700 rounded-lg aspect-video flex items-center justify-center text-gray-400 mb-4">
                      {study.title.includes("Uber") ? (
                        <FaCar className="text-5xl text-purple-400" />
                      ) : study.title.includes("Book") ? (
                        <FaBook className="text-5xl text-purple-400" />
                      ) : study.title.includes("Questa") ||
                        study.title.includes("Quiz") ? (
                        <FaQuestionCircle className="text-5xl text-purple-400" />
                      ) : study.title.includes("FundMate") ||
                        study.title.includes("Fund") ? (
                        <FaMoneyBillWave className="text-5xl text-purple-400" />
                      ) : study.title.includes("Chat") ? (
                        <FaComments className="text-5xl text-purple-400" />
                      ) : study.title.includes("LocalShop") ||
                        study.title.includes("Shop") ? (
                        <FaStore className="text-5xl text-purple-400" />
                      ) : (
                        <span className="text-xl text-purple-300">
                          Project Preview
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-purple-600/20 text-purple-300 px-3 py-1 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">
                          Technologies
                        </h4>
                        {study.technologies.map((tech, idx) => (
                          <div key={idx} className="mb-3">
                            <p className="text-xs text-gray-300 mb-1">
                              {tech.name}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {tech.items.map((item, i) => (
                                <span
                                  key={i}
                                  className="bg-gray-700 text-gray-200 px-2 py-1 text-xs rounded"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        {study.links.demo && study.links.demo !== "#" && (
                          <a
                            href={study.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm transition"
                          >
                            <FaExternalLinkAlt /> Live Demo
                          </a>
                        )}
                        <a
                          href={study.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-sm transition"
                        >
                          <FaGithub /> View Code
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <h3 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-2">
                      {study.title}
                    </h3>
                    <p className="text-lg text-gray-300 mb-6">
                      {study.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-xl font-semibold mb-3">
                        Key Features
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {study.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-gray-900/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3 text-purple-300">
                          Challenges
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                          {study.challenges.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-gray-500 mr-2">→</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gray-900/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3 text-purple-300">
                          Solutions
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                          {study.solutions.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-gray-500 mr-2">→</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gray-900/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3 text-purple-300">
                          Results
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                          {study.results.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-gray-500 mr-2">→</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
