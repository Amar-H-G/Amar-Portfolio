// components/CaseStudies.jsx
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
    <section className="w-full px-4 sm:px-6 pb-2  text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        {/* ================= HEADING ================= */}
        <h2 className="text-3xl sm:text-4xl font-bold text-start pb-3 mb-2 sm:mb-6 border-b border-white/20">
          Case Studies
        </h2>

        <div className="space-y-10">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                bg-[#12172b]
                border border-white/15
                rounded-2xl
                p-6 sm:p-8
                shadow-xl
                transition duration-300
                hover:border-indigo-400/40
              "
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* ================= LEFT ================= */}
                <div className="lg:w-1/3">
                  {/* Icon Preview */}
                  <div className="aspect-video rounded-xl border border-white/10 flex items-center justify-center mb-4">
                    {getIcon(study.title)}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white/60 mb-3">
                      Technologies
                    </h4>

                    {study.technologies.map((tech, idx) => (
                      <div key={idx} className="mb-4">
                        <p className="text-xs text-white/70 mb-2">
                          {tech.name}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {tech.items.map((item, i) => (
                            <span
                              key={i}
                              className="text-xs px-3 py-1 rounded bg-white/10 border border-white/10"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {study.links.demo && study.links.demo !== "#" && (
                      <a
                        href={study.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}

                    <a
                      href={study.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition"
                    >
                      <FaGithub /> View Code
                    </a>
                  </div>
                </div>

                {/* ================= RIGHT ================= */}
                <div className="lg:w-2/3">
                  <h3 className="text-2xl sm:text-3xl font-semibold mb-2">
                    {study.title}
                  </h3>

                  <p className="text-white/70 mb-6">{study.description}</p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/80">
                      {study.features.map((feature, idx) => (
                        <li key={idx} className="flex">
                          <span className="mr-2 text-indigo-400">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenges / Solutions / Results */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <InfoBlock title="Challenges" items={study.challenges} />
                    <InfoBlock title="Solutions" items={study.solutions} />
                    <InfoBlock title="Results" items={study.results} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ================= HELPERS ================= */

function InfoBlock({ title, items }) {
  return (
    <div className="border border-white/10 rounded-xl p-4">
      <h4 className="font-semibold mb-3 text-indigo-400">{title}</h4>
      <ul className="space-y-2 text-sm text-white/80">
        {items.map((item, idx) => (
          <li key={idx} className="flex">
            <span className="mr-2 text-white/40">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function getIcon(title) {
  const iconClass = "text-5xl text-indigo-400";
  if (title.includes("Uber")) return <FaCar className={iconClass} />;
  if (title.includes("Book")) return <FaBook className={iconClass} />;
  if (title.includes("Quiz") || title.includes("Questa"))
    return <FaQuestionCircle className={iconClass} />;
  if (title.includes("Fund")) return <FaMoneyBillWave className={iconClass} />;
  if (title.includes("Chat")) return <FaComments className={iconClass} />;
  if (title.includes("Shop")) return <FaStore className={iconClass} />;

  return <span className="text-white/50">Project Preview</span>;
}
