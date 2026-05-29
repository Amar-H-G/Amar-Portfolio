import { motion } from "framer-motion";
import { FaLaptopCode, FaMapMarkerAlt } from "react-icons/fa";
import SEO from "../components/SEO";

const experiences = [
  {
    role: "Mid-Level React Native Developer",
    company: "OriginateSoft Pvt. Ltd.",
    duration: "Feb 2026 – Present",
    location: "Onsite · India",
    isCurrent: true,
    description: (
      <>
        Currently working as a{" "}
        <span className="text-indigo-300 font-medium">
          Mid-Level React Native Developer
        </span>{" "}
        building high-performance cross-platform mobile applications. Leading
        the integration of{" "}
        <span className="text-indigo-300 font-medium">
          real-time communication systems
        </span>{" "}
        using{" "}
        <span className="text-indigo-300 font-medium">
          Pusher and Socket.io
        </span>
        , enabling live data sync and event-driven features across the app.
        Implemented{" "}
        <span className="text-indigo-300 font-medium">
          OneSignal push notifications
        </span>{" "}
        for targeted, real-time user engagement and alerts. Also integrated{" "}
        <span className="text-indigo-300 font-medium">
          Video SDK
        </span>{" "}
        to deliver seamless in-app video calling and conferencing experiences.
        Focused on scalable architecture, clean component design, and smooth
        native performance across both iOS and Android platforms.
      </>
    ),
  },
  {
    role: "Full Stack Developer",
    company: "RiiTii",
    duration: "Oct 2025 – Jan 2026",
    location: "Remote · India",
    description: (
      <>
        Worked as a Full Stack Developer focusing on building{" "}
        <span className="text-indigo-300 font-medium">
          cross-platform mobile and web applications
        </span>{" "}
        using{" "}
        <span className="text-indigo-300 font-medium">
          React, React Native, Redux, and TypeScript
        </span>
        . Implemented REST API integrations, authentication flows, and optimized
        rendering pipelines for improved performance. Also contributed to
        backend development using{" "}
        <span className="text-indigo-300 font-medium">
          Node.js, Express, and MongoDB
        </span>{" "}
        to deliver scalable and reliable features.
      </>
    ),
  },
  {
    role: "Full Stack Developer (Intern → Full-Time)",
    company: "ZoneValue Pvt. Ltd.",
    duration: "Jul 2025 – Oct 2025",
    location: "Remote · India",
    description: (
      <>
        Developed production-ready features for the ZoneValue website and
        internal CRM systems. Built reusable and maintainable{" "}
        <span className="text-indigo-300 font-medium">React.js</span> components
        and designed RESTful APIs using{" "}
        <span className="text-indigo-300 font-medium">
          Node.js, Express, and MongoDB
        </span>
        . Collaborated closely with engineering teams in Agile sprints, resolved
        critical bugs, and improved overall application performance and code
        quality.
      </>
    ),
  },
];

export default function Experience() {
  return (
    <section className="relative z-10 w-full text-white px-4 sm:px-6 py-20 sm:py-24">
      <SEO
        title="Experience | Amar Patra – React Native & Full Stack Developer"
        description="Professional experience of Amar Patra: Mid-Level React Native Developer at OriginateSoft, Full Stack Developer at RiiTii and ZoneValue — building real-time mobile and web apps."
        url="https://amarpatra.vercel.app/experience"
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 border-b border-white/20 pb-3">
          Professional Experience
        </h2>

        <div className="grid gap-6 sm:gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`bg-[#12172b] rounded-2xl p-6 sm:p-8 shadow-xl transition duration-300 ${
                exp.isCurrent
                  ? "border border-emerald-500/50 hover:border-emerald-400/70 shadow-emerald-900/20"
                  : "border border-white/15 hover:border-indigo-400/40"
              }`}
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                {/* Icon */}
                <div className="text-indigo-400 text-3xl sm:text-4xl shrink-0">
                  <FaLaptopCode />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-3 flex-wrap">
                        <p className="text-base sm:text-lg text-white/90">
                          {exp.company}
                        </p>
                        {exp.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-xs px-3 py-1 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Currently Working
                          </span>
                        )}
                      </div>
                    </div>

                    <span className={`inline-block w-fit text-xs sm:text-sm text-white px-4 py-2 rounded-xl ${
                      exp.isCurrent ? "bg-emerald-600/80" : "bg-indigo-600/90"
                    }`}>
                      {exp.duration}
                    </span>
                  </div>

                  <div className="flex items-center text-xs sm:text-sm text-white/60 mt-2">
                    <FaMapMarkerAlt className="mr-2" />
                    {exp.location}
                  </div>

                  <p className="mt-4 sm:mt-5 text-sm sm:text-base text-white/80 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
