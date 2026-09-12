"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowDown, Terminal } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import CommandTerminal from "./CommandTerminal";

export default function Hero() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-5 pt-28 pb-16 sm:px-10"
    >
      {/* Interactive Command Terminal */}
      <CommandTerminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />

      {/* Background Spotlights (Violet / Magenta / Peach) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-20 -top-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-purple-700/25 via-violet-600/15 to-transparent blur-[140px] animate-aurora" />
        <div className="absolute right-0 top-10 h-[550px] w-[550px] rounded-full bg-gradient-to-bl from-pink-600/20 via-magenta-600/15 to-transparent blur-[150px] animate-aurora" />
        <div className="absolute left-1/3 bottom-10 h-[380px] w-[380px] rounded-full bg-gradient-to-t from-orange-500/15 via-pink-500/10 to-transparent blur-[130px]" />

        {/* Subtle Cybernetic Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_70%,transparent_100%)]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Authentic Profile Photo with Animated Conic Gradient Ring */}
        <div className="relative mb-6 flex items-center justify-center">
          <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full p-[2.5px]">
            <div className="absolute inset-0 rounded-full animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#a855f7_0%,#ec4899_50%,#fb923c_100%)] blur-[1px]" />
            <div className="relative h-full w-full rounded-full overflow-hidden border-2 border-[#07070b] bg-[#0c0a18]">
              <Image
                src="/kaushtubham.jpg"
                alt="Kaushtubham Shukla"
                width={128}
                height={128}
                priority
                className="h-full w-full object-cover object-top hover:scale-110 transition duration-500"
              />
            </div>
            {/* Active Status Beacon */}
            <div className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#07070b] border-2 border-emerald-500 shadow-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Status Pill */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-4 py-1.5 backdrop-blur-xl shadow-[0_0_15px_-3px_rgba(168,85,247,0.3)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-semibold tracking-wider uppercase text-purple-200">
            Open for Software Engineering Internships &amp; Roles
          </span>
        </div>

        {/* Dynamic Positioning Badge */}
        <h2 className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-pink-300/90">
          Java &bull; Spring Boot &bull; Distributed Systems &bull; AI Pipelines
        </h2>

        {/* Main Headline */}
        <h1 className="max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
          Architecting{" "}
          <span className="gradient-text-vibrant">
            Scalable Backend Systems
          </span>{" "}
          &amp; Intelligent Applications.
        </h1>

        {/* Intro Paragraph */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
          Hi, I&apos;m <span className="text-white font-semibold">{portfolioData.personal.name}</span>, a backend-focused software engineering student graduating in 2027 from{" "}
          <span className="text-purple-300">VIT Bhopal University</span>. Experienced in engineering production-grade distributed schedulers, Redis coordination layers, and real-time computer vision systems.
        </p>

        {/* CTA Buttons Row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {/* Primary CTA: Conic Gradient Border */}
          <a
            href="#projects"
            className="group relative inline-flex h-13 w-full sm:w-56 overflow-hidden rounded-xl p-[1px] focus:outline-none transition hover:scale-[1.02]"
          >
            <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#a855f7_0%,#ec4899_50%,#fb923c_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#0d0a18] px-6 text-sm font-semibold text-white backdrop-blur-3xl transition group-hover:bg-[#150f28]">
              <span>Explore Projects</span>
              <ArrowDown className="h-4 w-4 text-pink-400 transition group-hover:translate-y-1" />
            </span>
          </a>

          {/* Interactive Terminal Trigger CTA */}
          <button
            onClick={() => setTerminalOpen(true)}
            className="inline-flex h-13 w-full sm:w-56 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 text-sm font-medium text-zinc-200 backdrop-blur-xl transition hover:border-purple-500/50 hover:bg-white/[0.08] hover:text-white"
          >
            <Terminal className="h-4 w-4 text-purple-400" />
            <span>Interactive Terminal</span>
            <span className="hidden sm:inline text-[10px] text-zinc-500 font-mono border border-white/10 rounded px-1 py-0.5">
              ⌘K
            </span>
          </button>
        </div>

        {/* Metrics / Key Stats Strip */}
        <div className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {portfolioData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-4 sm:p-5 text-center transition-all duration-300 hover:border-purple-500/40 hover:-translate-y-1"
            >
              <div className="text-2xl sm:text-3xl font-extrabold gradient-text-vibrant tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm font-medium text-zinc-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
