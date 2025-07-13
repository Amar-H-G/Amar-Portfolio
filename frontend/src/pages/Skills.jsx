import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaGitAlt,
  FaUserCheck,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaReact,
  FaBootstrap,
  FaNode,
} from "react-icons/fa";
import {
  SiDjango,
  SiMongodb,
  SiMysql,
  SiVercel,
  SiC,
  SiRender,
} from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";

export default function Skills() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-4 py-24 text-white overflow-hidden">
      {/* 🔹 Background Video with Dark Overlay */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/skills-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* 🔹 Main Skills Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-10 shadow-2xl mx-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard
            title="Languages"
            icon={<FaCode className="text-indigo-300" />}
            items={[
              { name: "Java", icon: <FaJava /> },
              { name: "JavaScript", icon: <FaJs /> },
              { name: "HTML5", icon: <FaHtml5 /> },
              { name: "CSS3", icon: <FaCss3Alt /> },
              { name: "Python", icon: <FaPython /> },
              { name: "SQL", icon: <FaDatabase /> },
              { name: "C", icon: <SiC /> },
            ]}
          />

          <SkillCard
            title="Frameworks"
            icon={<FaServer className="text-purple-300" />}
            items={[
              { name: "Django", icon: <SiDjango /> },
              { name: "React.js", icon: <FaReact /> },
              { name: "Express.js", icon: <FaNode /> },
              { name: "Bootstrap", icon: <FaBootstrap /> },
              { name: "Tailwind", icon: <RiTailwindCssLine /> },
            ]}
          />

          <SkillCard
            title="Databases"
            icon={<FaDatabase className="text-emerald-300" />}
            items={[
              { name: "MongoDB", icon: <SiMongodb /> },
              { name: "MySQL", icon: <SiMysql /> },
            ]}
          />

          <SkillCard
            title="Cloud & Hosting"
            icon={<FaCloud className="text-cyan-300" />}
            items={[
              { name: "Vercel", icon: <SiVercel /> },
              { name: "PythonAnywhere", icon: <FaPython /> },
              { name: "GitHub Pages", icon: <FaGitAlt /> },
              { name: "Render", icon: <SiRender /> },
            ]}
          />

          <SkillCard
            title="Version Control"
            icon={<FaGitAlt className="text-amber-300" />}
            items={[
              { name: "Git", icon: <FaGitAlt /> },
              { name: "GitHub", icon: <FaGitAlt /> },
            ]}
          />

          <SkillCard
            title="Soft Skills"
            icon={<FaUserCheck className="text-pink-300" />}
            items={[
              { name: "Problem Solving" },
              { name: "DSA" },
              { name: "Team Collaboration" },
              { name: "Agile Development" },
            ]}
          />
        </div>
      </motion.div>
    </div>
  );
}

function SkillCard({ title, items, icon }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/5 border border-white/20 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 shadow-lg h-full"
    >
      <div className="flex items-center gap-3 mb-4 text-xl font-semibold">
        <span className="text-2xl">{icon}</span>
        <h3>{title}</h3>
      </div>
      <ul className="space-y-2.5">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 text-white/90">
            {item.icon && <span className="text-white">{item.icon}</span>}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
