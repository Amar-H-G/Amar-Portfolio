import React from "react";
import Picture from "../components/Home/Picture";
import MyBook from "../components/Home/Book";
import Header from "../components/Home/Header";
import HomeIntroduction from "../components/Home/HomeIntroduction";
import Footer from "../components/Home/Footer"; // Import the new Footer component

const Home = () => {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden">
      {/* Fixed header at top */}

      {/* Introduction Section */}
      <section className="pt-20">
        <HomeIntroduction />
      </section>

      <main className="flex-grow flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
            {/* Picture - Hidden on mobile, visible on desktop with floating effect */}
            <div className="hidden lg:flex lg:w-1/2 transform transition-all duration-500 hover:translate-y-[-10px] justify-center">
              <div className="relative max-w-md w-full">
                <Picture />
                <div className="absolute inset-0 rounded-2xl border-2 border-white/20 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-2xl pointer-events-none"></div>
              </div>
            </div>

            {/* Book component with glass card effect */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="backdrop-blur-lg bg-white/10 rounded-2xl overflow-hidden border border-white/20 shadow-xl max-w-md w-full">
                <div className="p-6 sm:p-8">
                  <MyBook />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
