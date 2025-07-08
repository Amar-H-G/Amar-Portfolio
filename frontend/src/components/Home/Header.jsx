import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiCode,
  FiBriefcase,
  FiMail,
  FiHome,
} from "react-icons/fi";
import { SiHyperskill } from "react-icons/si";
import { FaUserTie } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "Experience", path: "/experience", icon: <FaUserTie /> },
    { name: "Skills", path: "/skills", icon: <SiHyperskill /> },
    {
      name: "Work",
      path: "/work",
      icon: <FiCode />,
      subItems: [
        { name: "Projects", path: "/projects" },
        { name: "Case Studies", path: "/case-studies" },
      ],
    },
    {
      name: "Services",
      path: "/services",
      icon: <FiBriefcase />,
      subItems: [
        { name: "Web Development", path: "/web-dev" },
        { name: "UI/UX Design", path: "/ui-ux" },
      ],
    },
    { name: "Contact", path: "/contact", icon: <FiMail /> },
  ];

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        isScrolled && `bg-gray-900/80 backdrop-blur-md shadow-sm py-2`
      }`}
    >
      <div className="container mx-auto py-2 px-4 sm:px-6 flex justify-between items-center">
        {/* Logo/Branding */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Amar
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg"
                      : isScrolled
                      ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100/50"
                      : "text-gray-200 hover:text-white hover:bg-white/10"
                  }`
                }
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
                {item.subItems && (
                  <svg
                    className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </NavLink>

              {item.subItems && activeDropdown === item.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={`absolute left-0 mt-2 min-w-[200px] rounded-xl shadow-xl overflow-hidden z-50 ${
                    isScrolled
                      ? "bg-white/95 backdrop-blur-lg border border-white/20"
                      : "bg-gray-900/95 backdrop-blur-lg border border-gray-700/20"
                  }`}
                >
                  <div className="py-1">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className={`block px-4 py-3 transition-all duration-200 group/item ${
                          isScrolled
                            ? "text-gray-700 hover:bg-gradient-to-r from-blue-50 to-purple-50 hover:text-blue-600"
                            : "text-gray-200 hover:bg-gradient-to-r from-blue-900/50 to-purple-900/50 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center">
                          <span className="group-hover/item:translate-x-1 transition-transform duration-200">
                            {subItem.name}
                          </span>
                          <svg
                            className={`ml-auto opacity-0 group-hover/item:opacity-100 w-4 h-4 transition-opacity duration-200 ${
                              isScrolled ? "text-blue-500" : "text-blue-400"
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isScrolled
              ? "bg-gray-100 hover:bg-gray-200 text-gray-700"
              : "bg-white/10 hover:bg-white/20 text-white"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              className="md:hidden fixed inset-0 bg-gray-900 z-50 h-screen w-64 right-0 top-0 shadow-2xl"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <Link
                    to="/"
                    className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Amar Patra
                  </Link>
                  <button onClick={() => setMobileMenuOpen(false)}>
                    <FiX size={24} className="text-gray-400" />
                  </button>
                </div>

                <nav className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `flex items-center px-4 py-3 rounded-lg transition-colors ${
                            isActive
                              ? "text-white bg-gradient-to-r from-blue-500 to-purple-500"
                              : "text-gray-300 hover:bg-gray-800"
                          }`
                        }
                        onClick={() =>
                          !item.subItems && setMobileMenuOpen(false)
                        }
                      >
                        <span className="mr-3">{item.icon}</span>
                        {item.name}
                      </NavLink>

                      {item.subItems && (
                        <div className="ml-8 mt-1 space-y-1">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-800 rounded-lg"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
