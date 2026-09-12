import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutBento from "./components/AboutBento";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import EducationAchievements from "./components/EducationAchievements";
import ContactFooter from "./components/ContactFooter";
import BackgroundCanvas from "./components/BackgroundCanvas";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#07070b] text-slate-100 overflow-x-hidden selection:bg-pink-500/30 selection:text-white">
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Interactive Three.js WebGL Constellation & Geometry */}
      <BackgroundCanvas />

      {/* Floating Pill Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="relative z-10 flex flex-col items-center">
        <Hero />
        <AboutBento />
        <Skills />
        <Experience />
        <Projects />
        <EducationAchievements />
      </main>

      {/* High-Impact Contact Footer */}
      <ContactFooter />
    </div>
  );
}
