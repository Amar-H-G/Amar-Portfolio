// components/Projects.jsx
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaMobileAlt, FaGlobe } from "react-icons/fa";
import projects from "../Data/projects";

/* ================= PROFESSIONAL APPS (OriginateSoft) ================= */

const professionalApps = [
  {
    title: "Maidfort – Service Provider App",
    type: "mobile",
    duration: "2026 · OriginateSoft Pvt. Ltd.",
    tech: ["React Native", "Pusher", "Socket.io", "OneSignal", "REST API"],
    bullets: [
      "Service provider-facing mobile app for managing bookings and tasks.",
      "Real-time job notifications via OneSignal push notifications.",
      "Live chat & status updates powered by Pusher and Socket.io.",
    ],
    demoLink: null,
  },
  {
    title: "Maidfort – Customer App",
    type: "mobile",
    duration: "2026 · OriginateSoft Pvt. Ltd.",
    tech: ["React Native", "Pusher", "Socket.io", "OneSignal", "REST API"],
    bullets: [
      "Customer-facing app to browse, book, and track home services.",
      "Real-time booking status with live provider tracking.",
      "Integrated OneSignal for order and delivery alerts.",
    ],
    demoLink: null,
  },
  {
    title: "Urban – Service Marketplace (Customer)",
    type: "mobile",
    duration: "2026 · OriginateSoft Pvt. Ltd.",
    tech: ["React Native", "Socket.io", "OneSignal", "Video SDK", "REST API"],
    bullets: [
      "Customer-side app for urban home services marketplace.",
      "In-app video consultation using Video SDK integration.",
      "Real-time service tracking and push notification alerts.",
    ],
    demoLink: null,
  },
  {
    title: "Urban – Service Marketplace (Provider)",
    type: "mobile",
    duration: "2026 · OriginateSoft Pvt. Ltd.",
    tech: ["React Native", "Socket.io", "OneSignal", "Video SDK", "REST API"],
    bullets: [
      "Provider-side app to manage and accept service requests.",
      "Live order queue with real-time Socket.io event sync.",
      "Video SDK for virtual consultations with customers.",
    ],
    demoLink: null,
  },
  {
    title: "Truties – Dating App",
    type: "mobile",
    duration: "2026 · OriginateSoft Pvt. Ltd.",
    tech: ["React Native", "Pusher", "Socket.io", "OneSignal", "Video SDK"],
    bullets: [
      "Feature-rich dating platform with real-time match & chat.",
      "Live messaging and typing indicators using Pusher channels.",
      "Video calling functionality via Video SDK for connected users.",
    ],
    demoLink: null,
  },
  {
    title: "GroceryWalle – Grocery Delivery App",
    type: "mobile",
    duration: "2026 · OriginateSoft Pvt. Ltd.",
    tech: ["React Native", "Socket.io", "OneSignal", "REST API"],
    bullets: [
      "On-demand grocery delivery app with live order tracking.",
      "Push notifications for order confirmation and delivery updates.",
      "Real-time delivery status sync via Socket.io.",
    ],
    demoLink: null,
  },
];

/* ================= WEB PROJECTS ================= */

const webProjects = [
  {
    title: "NBD Fashion – NearByDress",
    type: "web",
    duration: "2026 – 1st phase completed",
    tech: ["React.js", "Node.js", "MongoDB", "Redux", "Nginx", "Express.js"],
    bullets: [
      "Full-stack fashion e-commerce platform with role-based architecture.",
      "Integrated Seller CRM and Admin CRM with separate dashboards.",
      "Production-deployed with Nginx reverse proxy and MongoDB Atlas.",
    ],
    demoLink: "https://near-by-dress.vercel.app/",
    badge: "Live",
  },
  {
    title: "VYRA Connect – Video Platform",
    type: "web",
    duration: "Ongoing",
    tech: ["React.js", "Node.js", "WebRTC", "Socket.io", "MongoDB"],
    bullets: [
      "Real-time video calling and group chat platform.",
      "Public and private rooms with scalable WebRTC signaling.",
      "Socket.io powered live messaging and room management.",
    ],
    demoLink: null,
  },
];

/* ================= OTHER PERSONAL PROJECTS ================= */

export default function Projects() {
  return (
    <section className="relative w-full px-4 sm:px-6 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        {/* ================= HEADING ================= */}
        <h2 className="text-3xl sm:text-4xl font-bold text-start sm:pb-4 border-b border-white/20">
          Projects
        </h2>

        {/* ================= PROFESSIONAL APPS ================= */}
        <div className="mt-8 mb-14">
          <div className="flex items-center gap-3 mb-6">
            <FaMobileAlt className="text-indigo-400 text-xl" />
            <h3 className="text-xl sm:text-2xl font-semibold">
              Professional Mobile Apps
            </h3>
            <span className="text-xs bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 px-3 py-1 rounded-full">
              OriginateSoft Pvt. Ltd.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {professionalApps.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* ================= WEB PROJECTS ================= */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <FaGlobe className="text-indigo-400 text-xl" />
            <h3 className="text-xl sm:text-2xl font-semibold">
              Web Projects
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {webProjects.map((project, index) => (
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
        flex flex-col
      "
    >
      {/* Title + badge row */}
      <div className="flex items-start justify-between gap-2 mb-1">
        <h4 className="text-xl font-semibold">{project.title}</h4>
        {project.badge && (
          <span className="shrink-0 text-xs bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 px-2 py-0.5 rounded-full">
            {project.badge}
          </span>
        )}
      </div>

      <p className="text-sm text-white/50 mb-3">{project.duration}</p>

      {/* Tech tags */}
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

      {/* Bullets */}
      <ul className="space-y-2 text-sm sm:text-base text-white/80 mb-4 flex-1">
        {project.bullets.map((point, idx) => (
          <li key={idx} className="flex">
            <span className="mr-2 text-indigo-400">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* Demo link */}
      {project.demoLink && (
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition mt-auto"
        >
          <FaExternalLinkAlt />
          Live Demo
        </a>
      )}
    </motion.div>
  );
}
