"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Copy, Check, Globe, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="relative w-full overflow-hidden pt-24 pb-12 px-5 sm:px-10">
      {/* Background Grid Pattern from reference site */}
      <div className="pointer-events-none absolute -bottom-40 left-0 h-96 w-full opacity-40">
        <Image
          src="/footer-grid.svg"
          alt="Grid"
          width={1260}
          height={863}
          className="h-full w-full object-cover object-bottom"
        />
      </div>

      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-96 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-orange-500/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Section Heading */}
        <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-pink-400">
          Let&apos;s Connect
        </h2>
        <h3 className="mt-3 text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Ready to engineer <span className="gradient-text-vibrant">high-impact systems</span> together?
        </h3>
        <p className="mt-5 max-w-xl mx-auto text-sm sm:text-base text-zinc-300 leading-relaxed">
          I am actively seeking Software Development Engineer (SDE) internships and full-time opportunities. Reach out directly or connect across professional networks.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {/* Copy Email Button with Animated Conic Border */}
          <button
            onClick={handleCopyEmail}
            className="group relative inline-flex h-13 w-full sm:w-60 overflow-hidden rounded-xl p-[1px] focus:outline-none transition hover:scale-[1.02]"
          >
            <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#a855f7_0%,#ec4899_50%,#fb923c_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#0e0b1c] px-6 text-sm font-semibold text-white backdrop-blur-3xl transition group-hover:bg-[#16122d]">
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span className="text-emerald-300">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-pink-400" />
                  <span>Copy My Email</span>
                </>
              )}
            </span>
          </button>

          {/* Mailto Direct Link */}
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="inline-flex h-13 w-full sm:w-60 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 text-sm font-medium text-zinc-200 backdrop-blur-xl transition hover:border-purple-500/50 hover:bg-white/[0.08] hover:text-white"
          >
            <Mail className="h-4 w-4 text-purple-400" />
            <span>Send an Email</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
          </a>
        </div>

        {/* Direct Contact Metadata */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-pink-400" />
            <span>{portfolioData.personal.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-purple-400" />
            <span>{portfolioData.personal.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-orange-400" />
            <span>{portfolioData.personal.location}</span>
          </div>
        </div>

        {/* Social Icons Strip */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2.5 text-zinc-300 backdrop-blur-lg transition hover:border-pink-500/50 hover:bg-pink-500/10 hover:scale-105"
          >
            <Image src="/git.svg" alt="GitHub" width={22} height={22} />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2.5 text-zinc-300 backdrop-blur-lg transition hover:border-purple-500/50 hover:bg-purple-500/10 hover:scale-105"
          >
            <Image src="/link.svg" alt="LinkedIn" width={22} height={22} />
          </a>
          <a
            href={portfolioData.personal.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio Site"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-300 backdrop-blur-lg transition hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-white hover:scale-105"
          >
            <Globe className="h-5 w-5 text-orange-400" />
          </a>
        </div>

        {/* Bottom Line & Copyright */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Engineered with Java, Next.js &amp; Three.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
