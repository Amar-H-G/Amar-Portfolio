// pages/Services.jsx
import {
  FaPalette,
  FaMobileAlt,
  FaReact,
  FaServer,
  FaDatabase,
  FaCode,
  FaBell,
  FaVideo,
  FaPlug,
} from "react-icons/fa";
import {
  SiFigma,
  SiAdobexd,
  SiTailwindcss,
  SiMongodb,
  SiSocketdotio,
  SiPusher,
  SiNginx,
} from "react-icons/si";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

export default function Services() {
  return (
    <section className="relative z-10 w-full px-4 sm:px-6 py-20 sm:py-24 text-white">
      <SEO
        title="Services | Amar Patra – Mobile App, Real-Time & Web Dev"
        description="Services offered by Amar Patra: Cross-platform React Native apps, Real-time integrations (Pusher, Socket.io, OneSignal, Video SDK), MERN web development, and Nginx deployment."
        url="https://amarpatra.vercel.app/services"
      />
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

        {/* ================= MOBILE APP DEVELOPMENT ================= */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <FaMobileAlt className="text-3xl text-indigo-400" />
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Mobile App Development
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <ServiceCard
              icon={<FaReact />}
              title="Cross-Platform Apps"
              points={[
                "Build iOS & Android apps from a single codebase using React Native",
                "Smooth native performance with optimized rendering pipelines",
                "Navigation, state management (Redux / Context API), and deep linking",
              ]}
              tags={["React Native", "Redux", "TypeScript"]}
            />

            <ServiceCard
              icon={<FaMobileAlt />}
              title="Service & Marketplace Apps"
              points={[
                "Customer-facing and provider-facing app architecture",
                "Role-based flows for booking, tracking, and management",
                "Real-world experience: Maidfort, Urban, GroceryWalle apps",
              ]}
              tags={["React Native", "REST API", "Role-Based"]}
            />

            <ServiceCard
              icon={<FaCode />}
              title="App UI/UX Implementation"
              points={[
                "Pixel-perfect mobile UI from Figma/Adobe XD designs",
                "Responsive layouts for all screen sizes and orientations",
                "Smooth animations and gesture-based interactions",
              ]}
              tags={["React Native", "Figma", "Animations"]}
            />
          </div>
        </div>

        {/* ================= REAL-TIME INTEGRATIONS ================= */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <FaPlug className="text-3xl text-indigo-400" />
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Real-Time & Third-Party Integrations
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <ServiceCard
              icon={
                <>
                  <SiSocketdotio />
                  <SiPusher />
                </>
              }
              title="Real-Time Messaging"
              points={[
                "Live chat and messaging using Socket.io & Pusher channels",
                "Typing indicators, read receipts, and presence detection",
                "Scalable event-driven architecture for multi-user systems",
              ]}
              tags={["Socket.io", "Pusher", "WebSockets"]}
            />

            <ServiceCard
              icon={<FaBell />}
              title="Push Notifications"
              points={[
                "OneSignal integration for targeted push notifications",
                "Order alerts, booking updates, and marketing campaigns",
                "Segment-based and triggered notification workflows",
              ]}
              tags={["OneSignal", "FCM", "Push API"]}
            />

            <ServiceCard
              icon={<FaVideo />}
              title="Video Calling & Conferencing"
              points={[
                "Video SDK integration for in-app video calling",
                "1-on-1 and group video conferencing support",
                "Real-world implementation in Truties dating & Urban apps",
              ]}
              tags={["Video SDK", "WebRTC", "React Native"]}
            />
          </div>
        </div>

        {/* ================= WEB DEVELOPMENT ================= */}
        <div className="mb-16">
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
                "REST API development using Node.js & Express.js",
                "Business logic, middleware, and secure auth flows",
                "JWT-based authentication and role-based access control",
              ]}
              tags={["Node.js", "Express.js", "JWT"]}
            />

            <ServiceCard
              icon={<FaDatabase />}
              title="Database Solutions"
              points={[
                "MongoDB schema design and data modeling",
                "Optimized queries, indexing, and aggregation pipelines",
                "Scalable database architecture for production apps",
              ]}
              tags={["MongoDB", "MySQL", "Atlas"]}
            />

            <ServiceCard
              icon={
                <>
                  <SiNginx />
                </>
              }
              title="Deployment & DevOps"
              points={[
                "Production deployment with Nginx as reverse proxy",
                "Frontend hosting on Vercel & backend on Render",
                "Environment config, CORS, and CI/CD setup",
              ]}
              tags={["Nginx", "Vercel", "Render"]}
            />
          </div>
        </div>

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
                "User-flow optimization and mobile-first design approach",
                "Prototype handoff ready for development",
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
                "Reusable component libraries for React / React Native",
                "Consistent style guides using modern CSS practices",
                "Accessibility-friendly (WCAG) UI standards",
              ]}
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
              React Native, MERN Stack, and real-time integrations
            </span>{" "}
            combined with{" "}
            <span className="text-indigo-300">Agile development practices</span>{" "}
            to build scalable, production-ready mobile and web applications.
          </p>

          <a
            href="/contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 transition px-8 py-3 rounded-xl font-medium shadow-lg"
          >
            Let's Collaborate
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
