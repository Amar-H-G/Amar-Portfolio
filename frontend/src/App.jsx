import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/Video/BGVIDEO.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground Content */}

      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30">
        <div className="container mx-auto  flex justify-end">
          <Header />
        </div>
      </div>
      <div className="relative z-10 w-full min-h-screen text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>

      <Footer />

      <div className="fixed inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.6)] z-[-1]"></div>
    </div>
  );
}

export default App;
