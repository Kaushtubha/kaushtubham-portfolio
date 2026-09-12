import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutBento from "./components/AboutBento";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import EducationAchievements from "./components/EducationAchievements";
import ContactFooter from "./components/ContactFooter";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0F]">
      {/* Global UI Chrome */}
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      {/* Page Sections */}
      <Hero />
      <AboutBento />
      <Skills />
      <Experience />
      <Projects />
      <EducationAchievements />
      <ContactFooter />
    </main>
  );
}
