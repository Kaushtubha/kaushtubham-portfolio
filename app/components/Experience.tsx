"use client";

import Image from "next/image";
import { ExternalLink, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-20 px-5 sm:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
            Work History
          </h2>
          <h3 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Engineering <span className="gradient-text-vibrant">Experience</span>
          </h3>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-zinc-400">
            Real-world software engineering internships delivering enterprise ERP automation, WMS architectures, and full-stack platforms.
          </p>
        </div>

        {/* Experience Cards Grid with Moving Border Effect */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {portfolioData.experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative group overflow-hidden rounded-3xl p-[1.5px] transition-all duration-300 hover:scale-[1.01]"
            >
              {/* Rotating Illuminated Moving Border Beam */}
              <div className="absolute inset-[-100%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#8b5cf6_0%,#ec4899_50%,#fb923c_100%)] opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Inner Card Content */}
              <div className="relative flex h-full flex-col justify-between rounded-3xl bg-[#0c0a18]/95 p-6 sm:p-8 backdrop-blur-2xl border border-white/10">
                <div>
                  {/* Card Header Row */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-orange-500/20 border border-white/10 p-2.5">
                        <Image
                          src={exp.icon}
                          alt={exp.company}
                          width={48}
                          height={48}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition">
                          {exp.role}
                        </h4>
                        <div className="text-sm font-semibold text-pink-400">
                          {exp.company}
                        </div>
                      </div>
                    </div>

                    {/* Verified Certificate Link */}
                    {exp.certificateUrl && (
                      <a
                        href={exp.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-200 transition hover:border-purple-400 hover:bg-purple-500/20 hover:text-white"
                      >
                        <span>Certificate</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>

                  {/* Meta Details Strip */}
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-zinc-400 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-zinc-500" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-zinc-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="mt-5 space-y-3 text-sm text-zinc-300">
                    {exp.highlights.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-pink-400 mt-0.5" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
