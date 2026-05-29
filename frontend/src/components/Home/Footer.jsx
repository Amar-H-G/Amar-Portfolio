import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Simple copyright text */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Amar's Portfolio. All rights reserved.
            </p>
          </div>

          {/* Minimal social links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/Amar-H-G"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/amarpatra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:amarpatra932@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Simple credit line */}
        <div className="mt-4 text-center">
          {/* <p className="text-xs text-gray-500">
            Built with React and Tailwind CSS
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
