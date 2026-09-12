"use client";

import { GraduationCap, Award, ExternalLink, BookOpen, Calendar, MapPin, Trophy } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function EducationAchievements() {
  const { education, achievements, certifications } = portfolioData;

  return (
    <section id="education" className="relative w-full py-20 px-5 sm:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
            Background &amp; Recognition
          </h2>
          <h3 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Education &amp; <span className="gradient-text-vibrant">Achievements</span>
          </h3>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-zinc-400">
            Formal engineering degree credentials, competitive hackathon recognitions, and verified university certifications.
          </p>
        </div>

        {/* Top Split: Education & Hackathon / Leadership Highlights */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-12">
          {/* Education Card */}
          <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">
                    {education.institution}
                  </h4>
                  <div className="text-sm font-semibold text-purple-400">
                    {education.degree}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-zinc-400 border-b border-white/10 pb-4 mb-5">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-zinc-500" />
                  {education.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-zinc-500" />
                  {education.location}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                  <BookOpen className="h-3.5 w-3.5 text-pink-400" />
                  <span>Relevant Coursework</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <span
                      key={course}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-zinc-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hackathons & Club Leadership */}
          <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-pink-500/10 border border-pink-500/20 text-pink-400">
                  <Trophy className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">
                    Honors &amp; Hackathons
                  </h4>
                  <div className="text-sm font-semibold text-pink-400">
                    Competitive Distinctions
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {achievements.map((ach, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-pink-500/30"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="font-bold text-sm text-white">
                        {ach.title}
                      </div>
                      <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-pink-300">
                        {ach.tag}
                      </span>
                    </div>
                    <div className="mt-1 text-xs font-medium text-zinc-400">
                      {ach.event}
                    </div>
                    <p className="mt-2 text-xs text-zinc-300 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Sub-Section */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="h-5 w-5 text-orange-400" />
              <span>Verified Certifications</span>
            </h4>
            <span className="text-xs text-zinc-400">Official Credentials</span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, idx) => (
              <a
                key={idx}
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover group rounded-2xl p-5 border border-white/10 transition-all duration-300 flex flex-col justify-between hover:border-orange-500/40"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-semibold text-orange-400 mb-2">
                    <span>{cert.badgeText}</span>
                    <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition" />
                  </div>
                  <h5 className="text-sm font-bold text-white group-hover:text-orange-300 transition line-clamp-2">
                    {cert.title}
                  </h5>
                </div>
                <div className="mt-4 text-xs text-zinc-400">
                  {cert.issuer}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
