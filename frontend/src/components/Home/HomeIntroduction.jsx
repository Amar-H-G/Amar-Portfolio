import { motion } from "framer-motion"; // For animations (optional)

const HomeIntroduction = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 right-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-400">
            Hi, I'm <span className="text-white">Amar Patra</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            A passionate{" "}
            <span className="text-indigo-300 font-medium">Web Developer</span>{" "}
            creating digital experiences that are{" "}
            <span className="text-purple-300 font-medium">beautiful</span>,{" "}
            <span className="text-pink-300 font-medium">functional</span>, and{" "}
            <span className="text-blue-300 font-medium">user-focused</span>.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-indigo-400 hover:bg-indigo-900/30 rounded-lg font-medium text-lg transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        {/* Stats or quick facts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16">
          {[
            { number: "1.5+", label: "Years Experience" },
            { number: "10+", label: "Projects Completed" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "∞", label: "Passion for Design" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-indigo-400/30 transition-all"
            >
              <p className="text-3xl font-bold text-indigo-300 mb-2">
                {stat.number}
              </p>
              <p className="text-sm text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeIntroduction;
