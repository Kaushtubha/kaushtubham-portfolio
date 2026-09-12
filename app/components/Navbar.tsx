"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["hero", "about", "skills", "experience", "projects", "education", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-6 z-50 mx-auto flex w-full max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Logo / Personal Brand */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 rounded-full border border-white/10 bg-black/60 px-4 py-2 backdrop-blur-xl transition hover:border-purple-500/40 hover:bg-black/80"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 via-pink-600 to-orange-400 text-white font-bold text-xs shadow-lg shadow-purple-500/30">
            KS
          </div>
          <span className="text-sm font-semibold tracking-wide text-white transition group-hover:text-purple-300">
            Kaushtubham
          </span>
        </a>

        {/* Desktop Floating Pill Navigation */}
        <nav
          className={`hidden md:flex items-center gap-1 rounded-full border transition-all duration-300 px-3 py-1.5 backdrop-blur-2xl ${
            isScrolled
              ? "border-white/15 bg-[#0a0814]/85 shadow-[0_10px_35px_-5px_rgba(168,85,247,0.25)]"
              : "border-white/10 bg-[#0a0814]/60"
          }`}
        >
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium transition-colors duration-200 rounded-full ${
                  isActive
                    ? "text-white"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-purple-500/25 via-pink-500/25 to-orange-500/25 border border-purple-500/40" />
                )}
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA / Socials */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/60 p-2 text-zinc-300 backdrop-blur-xl transition hover:border-pink-500/40 hover:scale-105"
          >
            <Image src="/git.svg" alt="GitHub" width={18} height={18} className="brightness-90 hover:brightness-100" />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/60 p-2 text-zinc-300 backdrop-blur-xl transition hover:border-purple-500/40 hover:scale-105"
          >
            <Image src="/link.svg" alt="LinkedIn" width={18} height={18} className="brightness-90 hover:brightness-100" />
          </a>
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full p-[1px] text-xs font-medium focus:outline-none"
          >
            <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#a855f7_0%,#ec4899_50%,#fb923c_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#0a0814] px-3.5 py-1.5 text-white backdrop-blur-3xl transition group-hover:bg-[#120e24]">
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-pink-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/60 text-zinc-300 backdrop-blur-xl transition md:hidden hover:border-purple-500/40"
        >
          {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-50 rounded-2xl border border-white/15 bg-[#090712]/95 p-5 shadow-2xl backdrop-blur-3xl md:hidden">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-white transition"
              >
                {item.name}
              </a>
            ))}
            <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-4">
              <div className="flex gap-3">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 p-2"
                >
                  <Image src="/git.svg" alt="GitHub" width={16} height={16} />
                </a>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 p-2"
                >
                  <Image src="/link.svg" alt="LinkedIn" width={16} height={16} />
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1.5 text-xs font-semibold text-white shadow-lg shadow-purple-500/20"
              >
                Get in Touch
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
