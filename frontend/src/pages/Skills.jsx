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
  SiPostman,
  SiSocketdotio,
} from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { MdSecurity, MdApi } from "react-icons/md";

export default function Skills() {
  return (
    <section className="relative z-10 w-full px-4 sm:px-6 py-20 sm:py-24 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 border-b border-white/20 pb-3">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <SkillCard
            title="Languages"
            icon={<FaCode />}
            items={[
              { name: "JavaScript", icon: <FaJs /> },
              { name: "HTML5", icon: <FaHtml5 /> },
              { name: "CSS3", icon: <FaCss3Alt /> },
              { name: "Python", icon: <FaPython /> },
              { name: "Java", icon: <FaJava /> },
              { name: "SQL", icon: <FaDatabase /> },
              { name: "C", icon: <SiC /> },
            ]}
          />

          <SkillCard
            title="Frameworks & Libraries"
            icon={<FaServer />}
            items={[
              { name: "React.js", icon: <FaReact /> },
              { name: "React Native", icon: <FaReact /> },
              { name: "Redux" },
              { name: "Express.js", icon: <FaNode /> },
              { name: "Django", icon: <SiDjango /> },
              { name: "Bootstrap", icon: <FaBootstrap /> },
              { name: "Tailwind CSS", icon: <RiTailwindCssLine /> },
            ]}
          />

          <SkillCard
            title="Databases"
            icon={<FaDatabase />}
            items={[
              { name: "MongoDB", icon: <SiMongodb /> },
              { name: "MySQL", icon: <SiMysql /> },
            ]}
          />

          <SkillCard
            title="Cloud & Hosting"
            icon={<FaCloud />}
            items={[
              { name: "Vercel", icon: <SiVercel /> },
              { name: "Render", icon: <SiRender /> },
              { name: "PythonAnywhere", icon: <FaPython /> },
              { name: "GitHub Pages", icon: <FaGitAlt /> },
            ]}
          />

          <SkillCard
            title="Version Control"
            icon={<FaGitAlt />}
            items={[
              { name: "Git", icon: <FaGitAlt /> },
              { name: "GitHub", icon: <FaGitAlt /> },
            ]}
          />

          <SkillCard
            title="Tools & APIs"
            icon={<MdApi />}
            items={[
              { name: "REST APIs", icon: <MdApi /> },
              { name: "JWT Authentication", icon: <MdSecurity /> },
              { name: "Multer (File Uploads)" },
              { name: "Socket.io", icon: <SiSocketdotio /> },
              { name: "Postman", icon: <SiPostman /> },
            ]}
          />

          <SkillCard
            title="Soft Skills"
            icon={<FaUserCheck />}
            items={[
              { name: "Problem Solving" },
              { name: "Team Collaboration" },
              { name: "Agile Development" },
            ]}
          />
        </div>
      </motion.div>
    </section>
  );
}

function SkillCard({ title, items, icon }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="
        bg-[#12172b]
        border border-white/15
        rounded-2xl
        p-5 sm:p-6
        shadow-xl
        transition duration-300
        hover:border-indigo-400/40
      "
    >
      <div className="flex items-center gap-3 mb-4 text-lg sm:text-xl font-semibold">
        <span className="text-2xl text-indigo-400">{icon}</span>
        <h3>{title}</h3>
      </div>

      <ul className="space-y-2.5 text-sm sm:text-base text-white/85">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            {item.icon && <span className="text-white/70">{item.icon}</span>}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
