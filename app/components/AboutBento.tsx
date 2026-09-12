"use client";

import { useState } from "react";
import { Check, Copy, Server, Zap, ShieldCheck, Database, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function AboutBento() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="about" className="relative w-full py-20 px-5 sm:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
            About My Work
          </h2>
          <h3 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Engineering Driven by{" "}
            <span className="gradient-text-vibrant">Reliability &amp; Scale</span>
          </h3>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-zinc-400">
            A look into my engineering philosophy, technical specialties, and distributed systems design approach.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Card 1: 3 Cols - Distributed Architecture */}
          <div className="glass-card glass-card-hover group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 sm:p-8 lg:col-span-3 min-h-[340px] border border-white/10">
            {/* Background Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/15 blur-3xl transition duration-500 group-hover:bg-purple-600/25" />

            <div>
              <div className="flex items-center gap-3 text-purple-400 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <Server className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                  System Architecture
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Production-Style Distributed Scheduling &amp; Backend Engineering
              </h4>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                Specialized in building fault-tolerant backend architectures. Designed custom priority-based job schedulers supporting 7 distinct states, exponential retry strategies, and Redis heartbeats to eliminate worker stalling in high-throughput environments.
              </p>
            </div>

            {/* Interactive Code Preview Box */}
            <div className="mt-6 rounded-xl border border-white/10 bg-[#090713]/90 p-4 font-mono text-xs text-zinc-300 shadow-inner">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2 text-zinc-500 text-[11px]">
                <span>OptiQueueWorker.java</span>
                <span className="text-emerald-400 font-semibold">● Heartbeat Active</span>
              </div>
              <div className="text-pink-400">@Scheduled<span className="text-zinc-300">(fixedRate = 1000)</span></div>
              <div className="text-purple-300">public void <span className="text-yellow-300">pollAndExecute</span>() &#123;</div>
              <div className="pl-4 text-zinc-400">redisCoordinator.<span className="text-blue-300">acquireLock</span>(jobId);</div>
              <div className="pl-4 text-zinc-400">scheduler.<span className="text-blue-300">dispatchWithBackoff</span>(job);</div>
              <div className="text-purple-300">&#125;</div>
            </div>
          </div>

          {/* Card 2: 2 Cols - Real-time AI & Telemetry */}
          <div className="glass-card glass-card-hover group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 sm:p-8 lg:col-span-2 min-h-[340px] border border-white/10">
            <div className="pointer-events-none absolute -left-10 -bottom-10 h-64 w-64 rounded-full bg-pink-600/15 blur-3xl transition duration-500 group-hover:bg-pink-600/25" />

            <div>
              <div className="flex items-center gap-3 text-pink-400 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/10 border border-pink-500/20">
                  <Zap className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-pink-300">
                  Computer Vision &amp; AI
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Computer Vision Telemetry &amp; ML Pipelines
              </h4>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                Hands-on with real-time video detection pipelines using YOLOv8n, centroid tracking algorithms, CatBoost demand forecasting, and predictive congestion modeling for dynamic signal control.
              </p>
            </div>

            {/* Micro Badge Tag Cloud */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["YOLOv8", "CatBoost", "scikit-learn", "Flask REST", "Dynamic Timers"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-pink-500/20 bg-pink-500/10 px-2.5 py-1 text-xs font-medium text-pink-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: 2 Cols - Engineering Philosophy & CS Foundations */}
          <div className="glass-card glass-card-hover group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 sm:p-8 lg:col-span-2 min-h-[300px] border border-white/10">
            <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-orange-600/15 blur-3xl" />

            <div>
              <div className="flex items-center gap-3 text-orange-400 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-300">
                  Core Principles
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Rigorous CS Foundations
              </h4>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                Firm grounding in Object-Oriented Programming, relational schema normalization (DBMS), Data Structures &amp; Algorithms, and OS concurrency controls. Focused on writing self-documenting, maintainable code.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-orange-300/90">
              <Sparkles className="h-4 w-4" />
              <span>Clean Code &bull; Modular Abstractions &bull; Idempotency</span>
            </div>
          </div>

          {/* Card 4: 3 Cols - The Inside Scoop & Direct Collaboration */}
          <div className="glass-card glass-card-hover group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 sm:p-8 lg:col-span-3 min-h-[300px] border border-white/10">
            <div className="pointer-events-none absolute left-1/2 bottom-0 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-t from-purple-600/20 via-pink-600/15 to-transparent blur-3xl" />

            <div>
              <div className="flex items-center gap-3 text-purple-400 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <Database className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                  Inside Scoop &amp; Collaboration
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Currently Building &amp; Available for New Challenges
              </h4>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                Currently diving deeper into cloud-native microservices, event-driven message brokers, and enterprise ERP automation. Eager to contribute to forward-thinking engineering teams.
              </p>
            </div>

            {/* Interactive Email Copy Button */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={handleCopyEmail}
                className="group/btn relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-xl border border-white/15 bg-purple-950/40 px-5 text-sm font-semibold text-white transition hover:border-pink-500/50 hover:bg-purple-900/50 focus:outline-none"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-emerald-300">Email Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-pink-400 transition group-hover/btn:scale-110" />
                    <span>Copy My Email Address</span>
                  </>
                )}
              </button>

              <span className="text-xs text-zinc-400">
                {portfolioData.personal.email}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
