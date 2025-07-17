import React from "react";
import HTMLFlipBook from "react-pageflip";
import { motion } from "framer-motion";
import { FaUserTie } from "react-icons/fa";

const Book = () => {
  const pageContents = [
    {
      id: 1,
      title: "",
      content: (
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Amar's Portfolio</h1>
          <p className="mt-4 text-xl">Interactive Technical Showcase</p>
        </div>
      ),
    },
    {
      id: 2,
      title: "Professional Profile",
      content: (
        <div className="space-y-4 text-center">
          <div className="flex flex-col items-center">
            <FaUserTie className="text-4xl text-blue-700 mb-2" />
            <h3 className="font-bold text-lg">Full Stack Developer</h3>
            <p className="text-xs text-gray-600">React | Node.js | Django</p>
          </div>
          <div className="flex justify-center gap-2 flex-wrap">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
              React
            </span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
              Node.js
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
              Django
            </span>
          </div>
          <p className="italic text-xs text-gray-500">
            "Clean code, reliable systems."
          </p>
        </div>
      ),
      bgColor: "bg-white",
    },
    {
      id: 3,
      title: "Experience",
      content: (
        <div className="space-y-4 text-sm">
          <div className="border-l-4 border-indigo-500 pl-3">
            <h3 className="font-semibold text-gray-800">
              Full Stack Developer Intern – ZoneValue
            </h3>
            <p className="text-gray-600 mt-1">
              Worked on a real-estate booking platform. Built interactive UI,
              integrated Google Calendar API for meetings, and used AWS S3 for
              image storage.
            </p>
          </div>

          <a
            href="/experience"
            className="inline-block mt-3 text-indigo-600 hover:underline text-xs"
          >
            → View full experience
          </a>
        </div>
      ),
      bgColor: "bg-gray-50",
    },
    {
      id: 4,
      title: "My Projects",
      content: (
        <div className="space-y-4">
          {/* Project 1 - Minimal */}
          <div className="border-l-2 border-blue-400 pl-3">
            <h3 className="font-medium">Questa</h3>
            <p className="text-xs text-gray-500">Quiz Platform with Nextjs</p>
          </div>

          {/* Project 2 - Minimal */}
          <div className="border-l-2 border-green-400 pl-3 mt-3">
            <h3 className="font-medium">FundMate</h3>
            <p className="text-xs text-gray-500">Mutual Fund Tracker</p>
          </div>

          <div className="border-l-2 border-green-400 pl-3 mt-3">
            <h3 className="font-medium">LocalShop</h3>
            <p className="text-xs text-gray-500">
              E-commerce Platform with Python & Django
            </p>
          </div>

          {/* Explore Button */}
          <a
            href="/work"
            className="mt-4 px-3 py-1.5 text-xs bg-transparent border border-gray-300 rounded hover:bg-gray-100 transition"
          >
            View All Projects →
          </a>
        </div>
      ),
      bgColor: "bg-gray-50",
    },

    {
      id: 5,
      title: "Resume",
      content: (
        <div className="text-center">
          <p className="mb-4 text-sm">
            Download my latest resume and explore my professional profile.
          </p>
          <a
            href="/Amar_Patra(N).pdf"
            download
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>
      ),
      bgColor: "bg-white",
    },
    {
      id: 6,
      title: "Certifications",
      content: (
        <div className="space-y-2 text-sm">
          <div className="border-l-4 border-blue-500 pl-3">
            <p>
              <strong>Cyber Security</strong> – Ardent Computech
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-3">
            <p>
              <strong>IOT</strong> – Ardent Computech
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-3">
            <p>
              <strong>Python With Django</strong> – Ardent Computech
            </p>
          </div>
          <div className="border-l-4 border-green-500 pl-3">
            <p>
              <strong>Access web data using python</strong> – Coursera
            </p>
          </div>
          <div className="border-l-4 border-green-500 pl-3">
            <p>
              <strong>Programming in Python</strong> – Coursera
            </p>
          </div>
        </div>
      ),
      bgColor: "bg-white",
    },
    {
      id: 7,
      title: "Hobbies",
      content: (
        <ul className="list-disc pl-5 text-sm space-y-2">
          <li>⚽ Playing Football – teaches discipline & teamwork</li>
          <li>🎬 Watching Movies – storytelling inspires design thinking</li>
          <li>
            🧭 Traveling – sharpens observation and cultural understanding
          </li>
          <li>💻 Coding – hobby & profession!</li>
        </ul>
      ),
      bgColor: "bg-gray-50",
    },

    {
      id: 8,
      title: "Explore My Portfolio",
      content: (
        <div className="space-y-2 text-sm">
          {[
            { name: "Home", href: "/" },
            { name: "Experience", href: "/experience" },
            { name: "Skills", href: "/skills" },
            { name: "Work", href: "/work" },
            { name: "Services", href: "/services" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
            >
              🔗 {link.name}
            </a>
          ))}
          <p className="text-xs text-gray-500 pt-4">Click a section to view</p>
        </div>
      ),
      bgColor: "bg-gray-100",
    },
    {
      id: 9,
      title: "",
      content: (
        <div className="text-center h-full flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Let's Connect</h2>
          <p className="mb-6 text-white">Interested in working together?</p>
          <div className="space-y-2 text-white">
            <div>amarpatra932@gmail.com</div>
            <div>+91 8927426099</div>
            <div className="pt-2">
              <a
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                href="/contact"
              >
                Schedule Meeting
              </a>
            </div>
          </div>
        </div>
      ),
      bgColor: "bg-gradient-to-br from-gray-800 to-gray-600 text-white",
    },
  ];

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="relative"
    >
      <HTMLFlipBook
        className="shadow-2xl"
        height={350}
        width={280}
        maxShadowOpacity={0.3}
        drawShadow={true}
        showCover={true}
        size="fixed"
        style={{
          "--page-shadow-color": "rgba(0,0,0,0.2)",
          "--page-cover-color": "rgba(255,255,255,0.1)",
          "--page-border": "1px solid rgba(255,255,255,0.2)",
        }}
      >
        {/* Cover Page */}
        <div className="page bg-gradient-to-br from-blue-900/80 to-purple-900/80 backdrop-blur-sm">
          <div className="page-content flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">My Diary</h1>
            <p className="text-white/80">Flip to explore</p>
            <div className="absolute bottom-6 right-6 text-xs text-white/50">
              <div>Amar Patra</div>
              <div>Est. {new Date().getFullYear()}</div>
            </div>
          </div>
        </div>

        {/* Content Pages */}
        {pageContents.map((page) => (
          <div
            key={page.id}
            className={`page ${page.bgColor} backdrop-blur-xs`}
          >
            <div className="page-content p-6 flex flex-col h-full">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {page.title}
                </h2>
                <div className="text-gray-700">{page.content}</div>
              </div>
              <div className="text-xs text-gray-400 text-right mt-auto">
                Page {page.id} of {pageContents.length}
              </div>
            </div>
          </div>
        ))}

        {/* Back Cover */}
        <div className="page bg-gradient-to-br from-gray-900/80 to-gray-700/80 backdrop-blur-sm">
          <div className="page-content flex flex-col items-center justify-center p-6 text-center text-white">
            <h1 className="text-3xl font-bold mb-4">The End</h1>
            <p>Thanks for reading!</p>
            <div className="absolute bottom-6 right-6 text-xs text-white/50">
              Amar Patra
            </div>
          </div>
        </div>
      </HTMLFlipBook>

      {/* Floating action hint */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-white/70 animate-pulse">
        ← Flip me →
      </div>
    </motion.div>
  );
};

export default Book;
