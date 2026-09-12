"use client";

import { useState } from "react";
import { Code2, Server, Database, Cpu, Cloud, Layout, CheckCircle2, Layers } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const iconMap: Record<string, React.ReactNode> = {
    Languages: <Code2 className="h-5 w-5 text-violet-400" />,
    "Backend & APIs": <Server className="h-5 w-5 text-pink-400" />,
    Databases: <Database className="h-5 w-5 text-purple-400" />,
    "CS Fundamentals": <Cpu className="h-5 w-5 text-orange-400" />,
    "DevOps & Cloud": <Cloud className="h-5 w-5 text-fuchsia-400" />,
    Frontend: <Layout className="h-5 w-5 text-rose-400" />,
  };

  const categories = ["All", ...portfolioData.skillCategories.map((c) => c.category)];

  const filteredCategories =
    selectedCategory === "All"
      ? portfolioData.skillCategories
      : portfolioData.skillCategories.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="relative w-full py-20 px-5 sm:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            Technical Arsenal
          </h2>
          <h3 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Skills &amp; <span className="gradient-text-vibrant">Core Competencies</span>
          </h3>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-zinc-400">
            A verified inventory of technologies, frameworks, databases, and computer science foundations from my resume.
          </p>
        </div>

        {/* Filter Pill Tabs */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white shadow-[0_0_20px_-3px_rgba(217,70,239,0.4)]"
                  : "glass-card text-zinc-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((catGroup) => (
            <div
              key={catGroup.category}
              className="glass-card glass-card-hover group relative rounded-3xl p-6 border border-white/10 transition-all duration-300"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                    {iconMap[catGroup.category] || <Layers className="h-5 w-5 text-purple-400" />}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition">
                      {catGroup.category}
                    </h4>
                    <span className="text-[11px] text-zinc-500 font-medium">
                      {catGroup.skills.length} competencies
                    </span>
                  </div>
                </div>
              </div>

              {/* Skills Tag Cloud */}
              <div className="flex flex-wrap gap-2.5">
                {catGroup.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-200 transition-all duration-200 hover:border-pink-500/40 hover:bg-pink-500/10 hover:text-white"
                  >
                    <CheckCircle2 className="h-3 w-3 text-pink-400/80" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
