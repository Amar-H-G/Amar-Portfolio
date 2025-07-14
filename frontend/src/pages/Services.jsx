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
export default function Services() {
  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
          My Services
        </h1>

        {/* UI/UX Design Section */}
        <div className="mb-20 bg-gray-900 py-10 px-10 rounded-xl">
          <div className="flex items-center justify-center gap-3 mb-8">
            <FaPalette className="text-4xl text-purple-400" />
            <h2 className="text-3xl font-bold">UI/UX Design</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-4">
                <SiFigma className="text-3xl text-purple-400" />
                <SiAdobexd className="text-3xl text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Interactive Prototyping
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>
                    Wireframing and high-fidelity mockups in Figma/Adobe XD
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>
                    User flow optimization with Java/JavaScript logic
                    integration
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>
                    Mobile-first responsive designs (Bootstrap expertise)
                  </span>
                </li>
              </ul>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all hover:scale-[1.02]">
              <FaMobileAlt className="text-3xl mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-2">
                Frontend Implementation
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Pixel-perfect HTML5/CSS3 conversions from designs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Dynamic interfaces with React.js + Tailwind CSS</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Cross-browser compatibility solutions</span>
                </li>
              </ul>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-4">
                <FaPalette className="text-3xl text-purple-400" />
                <FaReact className="text-3xl text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Design Systems</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Component libraries for React/Django projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Style guides with CSS3 variables</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Accessibility (WCAG) compliant designs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Web Development Section */}
        <div className="bg-gray-900 py-10 px-10 rounded-xl">
          <div className="flex items-center justify-center gap-3 mb-8 ">
            <FaCode className="text-4xl text-purple-400" />
            <h2 className="text-3xl font-bold">Web Development</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {/* Service Card 1 */}
            <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all hover:scale-[1.02]">
              <FaServer className="text-3xl mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-2">Backend Development</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Django/Express.js API development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Python/Node.js business logic implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>JWT authentication systems</span>
                </li>
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="bg-gray-700 text-xs px-2 py-1 rounded">
                  Python
                </span>
                <span className="bg-gray-700 text-xs px-2 py-1 rounded">
                  Django
                </span>
                <span className="bg-gray-700 text-xs px-2 py-1 rounded">
                  Express.js
                </span>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all hover:scale-[1.02]">
              <FaDatabase className="text-3xl mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-2">Database Solutions</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>MongoDB schema design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>MySQL query optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Data modeling for complex applications</span>
                </li>
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="bg-gray-700 text-xs px-2 py-1 rounded">
                  MongoDB
                </span>
                <span className="bg-gray-700 text-xs px-2 py-1 rounded">
                  MySQL
                </span>
                <span className="bg-gray-700 text-xs px-2 py-1 rounded">
                  SQL
                </span>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-4">
                <FaReact className="text-3xl text-purple-400" />
                <SiTailwindcss className="text-3xl text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Full-Stack Deployment</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Vercel/GitHub Pages for frontend</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>PythonAnywhere for Django backends</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>CI/CD pipelines with GitHub Actions</span>
                </li>
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="bg-gray-700 text-xs px-2 py-1 rounded">
                  Vercel
                </span>
                <span className="bg-gray-700 text-xs px-2 py-1 rounded">
                  GitHub
                </span>
                <span className="bg-gray-700 text-xs px-2 py-1 rounded">
                  PythonAnywhere
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Have a project in mind?</h3>
          <p className="mb-6 max-w-2xl mx-auto text-gray-300">
            Leverage my expertise in{" "}
            <span className="text-purple-300">
              Java, Python, and MERN stack
            </span>{" "}
            combined with{" "}
            <span className="text-purple-300">Agile methodologies</span> for
            your next project.
          </p>
          <a
            className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 px-8 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-purple-500/20"
            href="/contact"
          >
            Let's Collaborate
          </a>
        </div>
      </div>
    </section>
  );
}
