"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useParallax } from "../hooks/useScrollReveal";

const roles = ["Backend Engineer", "SDE", "Product Builder", "Open Source"];

export default function Hero() {
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const parallaxBg  = useParallax(0.25);

  /* — Rotating subtitle — */
  useEffect(() => {
    let idx = 0;
    const el = subtitleRef.current;
    if (!el) return;
    const cycle = () => {
      el.style.opacity = "0";
      el.style.transform = "translateY(10px)";
      setTimeout(() => {
        idx = (idx + 1) % roles.length;
        el.textContent = roles[idx];
        el.style.transition = "opacity 0.5s, transform 0.5s";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 350);
    };
    const id = setInterval(cycle, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient blob background */}
      <div ref={parallaxBg} className="absolute inset-0 pointer-events-none select-none -z-10">
        <div
          className="blob-1 absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #C4B5FD, transparent 70%)", filter: "blur(60px)" }}
        />
        <div
          className="blob-2 absolute bottom-1/4 right-1/4 w-[420px] h-[420px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #F9A8D4, transparent 70%)", filter: "blur(60px)" }}
        />
        <div
          className="blob-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #6EE7B7, transparent 70%)", filter: "blur(50px)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-5 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* ── Left: Text ── */}
        <div>
          {/* Label */}
          <div
            className="inline-flex items-center gap-2 tag-lavender rounded-full px-4 py-1.5 mb-7"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#6EE7B7] animate-pulse" />
            <span className="section-label text-[#C4B5FD]">Available for opportunities</span>
          </div>

          {/* Headline */}
          <div className="overflow-hidden mb-2">
            <h1
              className="kinetic-text text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight"
              style={{ animationDelay: "0.2s" }}
            >
              Kaushtubham
            </h1>
          </div>
          <div className="overflow-hidden mb-5">
            <h1
              className="kinetic-text text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-gradient"
              style={{ animationDelay: "0.38s" }}
            >
              Shukla
            </h1>
          </div>

          {/* Rotating subtitle */}
          <div className="flex items-center gap-3 mb-7 h-8">
            <div className="w-6 h-px bg-gradient-to-r from-[#C4B5FD] to-[#F9A8D4]" />
            <span
              ref={subtitleRef}
              className="text-lg font-medium text-gradient"
              style={{ opacity: 1, transition: "opacity 0.5s, transform 0.5s" }}
            >
              {roles[0]}
            </span>
          </div>

          {/* Bio */}
          <p
            className="text-white/55 text-base leading-relaxed max-w-lg mb-10 kinetic-text"
            style={{ animationDelay: "0.55s" }}
          >
            B.Tech CSE student at UPES Dehradun — building scalable backends,
            crafting great products, and shipping things that matter.
            Prev: Zidio Development · Intern @ multiple startups.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 kinetic-text"
            style={{ animationDelay: "0.72s" }}
          >
            {/* Primary CTA with conic border */}
            <div className="relative inline-block group">
              <div
                className="conic-spin absolute inset-0 rounded-full opacity-60"
                style={{
                  background: "conic-gradient(from 0deg, #C4B5FD, #F9A8D4, #FCA5A5, #FDE68A, #6EE7B7, #BAE6FD, #C4B5FD)",
                  padding: "1.5px",
                  borderRadius: "9999px",
                }}
              />
              <a
                href="#projects"
                className="relative z-10 flex items-center gap-2 bg-[#0A0A0F] hover:bg-[#0f0f17] text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
              >
                View Projects
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <a
              href="/KaushtubhamShukla_Resume.pdf"
              target="_blank"
              className="flex items-center gap-2 glass-pastel text-white/80 hover:text-white font-medium text-sm px-6 py-3 rounded-full transition-all hover:border-[rgba(196,181,253,0.4)]"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </a>
          </div>

          {/* Social links */}
          <div
            className="flex items-center gap-5 mt-9 kinetic-text"
            style={{ animationDelay: "0.9s" }}
          >
            {[
              { href: "https://github.com/Kaushtubha", icon: "GitHub", label: "GH" },
              { href: "https://linkedin.com/in/kaushtubham-shukla", icon: "LI", label: "LI" },
              { href: "mailto:kaushtubhamshukla@gmail.com", icon: "✉", label: "Mail" },
            ].map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-white/40 hover:text-[#C4B5FD] transition-colors"
              >
                {label}
              </a>
            ))}
            <span className="ml-auto text-xs font-mono text-white/20">© 2025</span>
          </div>
        </div>

        {/* ── Right: Profile Photo ── */}
        <div
          className="flex justify-center lg:justify-end kinetic-text"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 xl:w-96 xl:h-96">
            {/* Conic gradient ring */}
            <div
              className="conic-spin absolute inset-[-3px] rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #C4B5FD, #F9A8D4, #FCA5A5, #FDE68A, #6EE7B7, #BAE6FD, #C4B5FD)",
              }}
            />
            {/* Glow */}
            <div
              className="blob-1 absolute inset-0 rounded-full opacity-30"
              style={{
                background: "radial-gradient(circle at 30% 30%, rgba(196,181,253,0.5), transparent 70%)",
                filter: "blur(20px)",
              }}
            />
            {/* Photo */}
            <div className="absolute inset-[3px] rounded-full overflow-hidden bg-[#0F0F17]">
              <Image
                src="/kaushtubham.jpg"
                alt="Kaushtubham Shukla"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Floating badge: CGPA */}
            <div
              className="absolute -bottom-4 -left-4 glass-pastel rounded-xl px-4 py-2.5 text-center glow-pulse"
            >
              <div className="text-xl font-bold text-gradient">8.79</div>
              <div className="text-xs text-white/40 font-mono">CGPA</div>
            </div>

            {/* Floating badge: YOE */}
            <div className="absolute -top-4 -right-4 glass-pastel rounded-xl px-4 py-2.5 text-center">
              <div className="text-xl font-bold text-gradient-mint">3+</div>
              <div className="text-xs text-white/40 font-mono">Internships</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#C4B5FD] to-transparent" />
      </div>
    </section>
  );
}
