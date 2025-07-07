import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in Leaflet
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const videoRef = useRef(null);
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  // Map configuration (San Francisco coordinates)
  const mapCenter = [37.7749, -122.4194];
  const mapZoom = 13;

  // Initialize map
  useEffect(() => {
    if (typeof window !== "undefined" && !map && mapRef.current) {
      const leafletMap = L.map(mapRef.current, {
        center: mapCenter,
        zoom: mapZoom,
        zoomControl: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(leafletMap);

      L.marker(mapCenter, { icon: DefaultIcon })
        .addTo(leafletMap)
        .bindPopup("Our Office Location");

      setMap(leafletMap);

      return () => leafletMap.remove();
    }
  }, [map]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="/your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-white sm:text-5xl mb-4"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-200 max-w-2xl mx-auto"
            >
              Have a project in mind or want to collaborate? Drop me a message.
            </motion.p>
          </div>

          {/* Contact Form and Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden p-8 border border-white/20"
            >
              <h2 className="text-2xl font-semibold text-white mb-6">
                Send me a message
              </h2>

              {isSubmitted && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-green-500/20 border border-green-400 text-green-100 px-4 py-3 rounded mb-6"
                >
                  Thank you! Your message has been sent.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-200 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-200 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-200 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg shadow hover:shadow-md transition-all duration-300"
                >
                  <FiSend className="mr-2" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden p-8 border border-white/20">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 bg-white/20 p-3 rounded-full text-white">
                      <FiMail className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">Email</h3>
                      <p className="text-gray-200">contact@example.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 bg-white/20 p-3 rounded-full text-white">
                      <FiPhone className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">Phone</h3>
                      <p className="text-gray-200">+1 (555) 123-4567</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 bg-white/20 p-3 rounded-full text-white">
                      <FiMapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">
                        Location
                      </h3>
                      <p className="text-gray-200">San Francisco, CA</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden p-8 border border-white/20">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Connect With Me
                </h2>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ y: -3, scale: 1.05 }}
                    href="#"
                    className="bg-white/20 p-4 rounded-full text-white hover:bg-blue-600 transition-colors duration-300"
                  >
                    <FaLinkedin className="h-6 w-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3, scale: 1.05 }}
                    href="#"
                    className="bg-white/20 p-4 rounded-full text-white hover:bg-gray-700 transition-colors duration-300"
                  >
                    <FaGithub className="h-6 w-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3, scale: 1.05 }}
                    href="#"
                    className="bg-white/20 p-4 rounded-full text-white hover:bg-sky-500 transition-colors duration-300"
                  >
                    <FaTwitter className="h-6 w-6" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Find Us
            </h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden border border-white/20">
              <div
                ref={mapRef}
                className="h-96 w-full z-0"
                style={{ minHeight: "400px" }}
              />
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg text-sm">
                <FiMapPin className="inline mr-1" />
                <span>123 Business Ave, San Francisco, CA</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
