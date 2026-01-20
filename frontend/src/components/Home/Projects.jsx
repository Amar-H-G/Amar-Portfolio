// components/Projects.jsx
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import projects from "../Data/projects";

/* ================= FEATURED PROJECTS (FROM RESUME) ================= */

const featuredProjects = [
  {
    title: "VYRA Connect",
    duration: "Ongoing",
    tech: ["React.js", "Node.js", "WebRTC", "Socket.io"],
    bullets: [
      "Building an advanced real-time video calling and chat platform.",
      "Implemented private and public rooms with scalable architecture.",
      "Designed real-time signaling using WebRTC and Socket.io.",
    ],
    demoLink: null,
  },
  {
    title: "Event Scheduler",
    duration: "Completed",
    tech: ["Node.js", "Cheerio", "Cron Jobs"],
    bullets: [
      "Automated event discovery and aggregation platform.",
      "Implemented web scraping using Cheerio for real-time updates.",
      "Scheduled background jobs using Cron for periodic data refresh.",
    ],
    demoLink: null,
  },
];

export default function Projects() {
  return (
    <section className="relative w-full px-4 sm:px-6  text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        {/* ================= HEADING ================= */}
        <h2 className="text-3xl sm:text-4xl font-bold text-start sm:pb-4   border-b border-white/20">
          Projects
        </h2>

        {/* ================= FEATURED PROJECTS ================= */}
        <div className="mb-14">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6">
            Featured Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* ================= OTHER PROJECTS ================= */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-6">
            Other Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ================= PROJECT CARD ================= */

function ProjectCard({ project }) {
  return (
    <motion.div
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
      <h4 className="text-xl font-semibold mb-1">{project.title}</h4>

      <p className="text-sm text-white/60 mb-3">{project.duration}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, idx) => (
          <span
            key={idx}
            className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10"
          >
            {tech}
          </span>
        ))}
      </div>

      <ul className="space-y-2 text-sm sm:text-base text-white/80 mb-4">
        {project.bullets.map((point, idx) => (
          <li key={idx} className="flex">
            <span className="mr-2 text-indigo-400">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {project.demoLink && (
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition"
        >
          <FaExternalLinkAlt />
          Live Demo
        </a>
      )}
    </motion.div>
  );
}
