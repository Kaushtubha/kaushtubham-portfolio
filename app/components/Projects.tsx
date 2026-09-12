"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-20 px-5 sm:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            Featured Systems &amp; Code
          </h2>
          <h3 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Production <span className="gradient-text-vibrant">Projects</span>
          </h3>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-zinc-400">
            A showcase of distributed backend systems, computer vision telemetries, and predictive machine learning platforms.
          </p>
        </div>

        {/* Projects Grid with 3D Pin Interactions */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              className="group/pin relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0c0a18]/90 p-6 backdrop-blur-2xl transition-all duration-500 hover:border-purple-500/50 hover:shadow-[0_20px_50px_-15px_rgba(168,85,247,0.3)] hover:-translate-y-2"
            >
              {/* Card Banner / Graphic Preview */}
              <div className="relative mb-6 flex h-48 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#120e24] to-[#1a1435] border border-white/10">
                {/* Background Grid Accent */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.15)_0,transparent_70%)]" />
                
                <Image
                  src={project.image}
                  alt={project.title}
                  width={340}
                  height={180}
                  className="relative z-10 max-h-40 w-auto object-contain transition-transform duration-500 group-hover/pin:scale-105"
                />

                {/* 3D Pin Radar Beam & Concentric Rings Effect */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover/pin:opacity-100">
                  <div className="absolute h-28 w-28 rounded-full border border-purple-400/40 animate-radar-1" />
                  <div className="absolute h-28 w-28 rounded-full border border-pink-400/40 animate-radar-2" />
                  <div className="absolute h-28 w-28 rounded-full border border-orange-400/40 animate-radar-3" />
                  <div className="absolute h-1.5 w-1.5 rounded-full bg-pink-400 shadow-[0_0_12px_#ec4899]" />
                </div>
              </div>

              {/* Title & Subtitle */}
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-bold text-white group-hover/pin:text-purple-300 transition">
                    {project.title}
                  </h4>
                  <span className="text-[11px] font-medium text-zinc-500">
                    {project.period}
                  </span>
                </div>
                <div className="mt-1 text-xs font-semibold text-pink-400">
                  {project.subtitle}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Key Technical Bullets */}
                <div className="mt-4 space-y-2 border-t border-white/10 pt-3">
                  {project.highlights.slice(0, 2).map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-400">
                      <span className="text-purple-400 mt-0.5">•</span>
                      <span className="line-clamp-2">{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-300 transition hover:text-white"
                  >
                    <Image src="/git.svg" alt="GitHub" width={14} height={14} />
                    <span>Source Code</span>
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-xs font-semibold text-pink-300 transition hover:border-pink-400 hover:bg-pink-500/20 hover:text-white"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
