// pages/Services.jsx
import {
  FaPalette,
  FaMobileAlt,
  FaReact,
  FaServer,
  FaDatabase,
  FaCode,
} from "react-icons/fa";
import {
  SiFigma,
  SiAdobexd,
  SiTailwindcss,
  SiDjango,
  SiMongodb,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="relative z-10 w-full px-4 sm:px-6 py-20 sm:py-24 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 border-b border-white/20 pb-3 text-start">
          My Services
        </h2>

        {/* ================= UI/UX DESIGN ================= */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <FaPalette className="text-3xl text-indigo-400" />
            <h3 className="text-2xl sm:text-3xl font-semibold">
              UI / UX Design
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <ServiceCard
              icon={
                <>
                  <SiFigma />
                  <SiAdobexd />
                </>
              }
              title="Interactive Prototyping"
              points={[
                "Wireframing and high-fidelity mockups using Figma / Adobe XD",
                "User-flow optimization with Java / JavaScript logic",
                "Mobile-first responsive design approach",
              ]}
            />

            <ServiceCard
              icon={<FaMobileAlt />}
              title="Frontend Implementation"
              points={[
                "Pixel-perfect HTML5 / CSS3 implementation",
                "Dynamic UIs using React.js and Tailwind CSS",
                "Cross-browser compatibility and responsiveness",
              ]}
            />

            <ServiceCard
              icon={
                <>
                  <FaPalette />
                  <FaReact />
                </>
              }
              title="Design Systems"
              points={[
                "Reusable component libraries for React / Django",
                "Consistent style guides using modern CSS practices",
                "Accessibility-friendly (WCAG) UI standards",
              ]}
            />
          </div>
        </div>

        {/* ================= WEB DEVELOPMENT ================= */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <FaCode className="text-3xl text-indigo-400" />
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Web Development
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <ServiceCard
              icon={<FaServer />}
              title="Backend Development"
              points={[
                "Django & Express.js REST API development",
                "Business logic using Python and Node.js",
                "Secure JWT-based authentication systems",
              ]}
              tags={["Python", "Django", "Express.js"]}
            />

            <ServiceCard
              icon={<FaDatabase />}
              title="Database Solutions"
              points={[
                "MongoDB schema and data modeling",
                "Optimized MySQL queries and indexing",
                "Scalable database design for production apps",
              ]}
              tags={["MongoDB", "MySQL", "SQL"]}
            />

            <ServiceCard
              icon={
                <>
                  <FaReact />
                  <SiTailwindcss />
                </>
              }
              title="Full-Stack Deployment"
              points={[
                "Frontend deployment using Vercel & GitHub Pages",
                "Backend hosting on PythonAnywhere",
                "CI/CD workflows with GitHub Actions",
              ]}
              tags={["Vercel", "GitHub", "PythonAnywhere"]}
            />
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Have a project in mind?
          </h3>
          <p className="mb-6 max-w-2xl mx-auto text-white/70">
            Leverage my expertise in{" "}
            <span className="text-indigo-300">
              Java, Python, and MERN stack
            </span>{" "}
            combined with{" "}
            <span className="text-indigo-300">Agile development practices</span>{" "}
            to build scalable, production-ready applications.
          </p>

          <a
            href="/contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 transition px-8 py-3 rounded-xl font-medium shadow-lg"
          >
            Let’s Collaborate
          </a>
        </div>
      </motion.div>
    </section>
  );
}

/* ================= CARD ================= */

function ServiceCard({ icon, title, points, tags }) {
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
      <div className="flex items-center gap-3 mb-4 text-indigo-400 text-3xl">
        {icon}
      </div>

      <h4 className="text-xl font-semibold mb-3">{title}</h4>

      <ul className="space-y-2 text-sm sm:text-base text-white/80 mb-4">
        {points.map((point, idx) => (
          <li key={idx} className="flex">
            <span className="mr-2 text-indigo-400">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {tags && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
