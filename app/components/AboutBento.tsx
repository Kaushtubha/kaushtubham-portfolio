"use client";
import { useEffect, useRef } from "react";

const facts = [
  { label: "University", value: "UPES Dehradun", accent: "lavender" },
  { label: "Degree",     value: "B.Tech CSE",    accent: "mint" },
  { label: "CGPA",       value: "8.79 / 10",     accent: "blush" },
  { label: "Location",   value: "India 🇮🇳",      accent: "sky" },
];

const qualities = [
  "System Design",
  "REST APIs",
  "Scalable Architecture",
  "Product Thinking",
  "Open Source",
  "Developer Experience",
];

export default function AboutBento() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const items = section.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-28 px-5 max-w-6xl mx-auto">
      {/* Header */}
      <div className="reveal mb-14">
        <span className="section-label tag-lavender rounded-full px-3 py-1 inline-block mb-4">About</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Who <span className="text-gradient">I am</span>
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Bio — large card */}
        <div className="reveal reveal-scale delay-1 lg:col-span-2 glass-pastel rounded-2xl p-7 card-hover">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: "rgba(196,181,253,0.15)" }}>
              <span className="text-sm">👨‍💻</span>
            </div>
            <span className="text-sm font-mono text-white/40">bio.txt</span>
          </div>
          <p className="text-white/70 text-base leading-relaxed mb-5">
            I&apos;m a passionate software engineer focused on building high-performance
            backends and products people love. Currently pursuing B.Tech CSE at UPES
            Dehradun, I&apos;ve interned at <span className="text-[#C4B5FD]">Zidio Development</span> and
            multiple growth-stage startups.
          </p>
          <p className="text-white/55 text-sm leading-relaxed">
            I thrive at the intersection of engineering and product — shipping fast,
            iterating faster, and always thinking about impact at scale.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {qualities.map((q) => (
              <span key={q} className="tag-lavender text-xs px-3 py-1 rounded-full font-medium">{q}</span>
            ))}
          </div>
        </div>

        {/* Stats column */}
        <div className="flex flex-col gap-4">
          {facts.map((f, i) => (
            <div
              key={f.label}
              className={`reveal delay-${i + 2} glass-pastel rounded-2xl p-5 card-hover flex items-center justify-between`}
            >
              <span className="text-sm text-white/45">{f.label}</span>
              <span className={`text-sm font-semibold text-gradient${f.accent === "mint" ? "-mint" : f.accent === "blush" ? "" : f.accent === "sky" ? "-cool" : ""}`}>
                {f.value}
              </span>
            </div>
          ))}
        </div>

        {/* Currently reading / listening */}
        <div className="reveal delay-3 glass-pastel rounded-2xl p-7 card-hover">
          <div className="text-lg mb-2">🎧</div>
          <h3 className="text-sm font-semibold text-white/80 mb-1">Currently building</h3>
          <p className="text-xs text-white/45 leading-relaxed">
            Vaultix — encrypted financial journal app<br/>
            Backend in Go + PostgreSQL + Redis
          </p>
          <div className="mt-4 w-full h-1 rounded-full overflow-hidden bg-white/5">
            <div className="h-full rounded-full w-3/5" style={{ background: "var(--grad-mint)" }} />
          </div>
          <span className="text-xs text-white/30 mt-1 block">60% complete</span>
        </div>

        {/* Funfact */}
        <div className="reveal delay-4 glass-pastel rounded-2xl p-7 card-hover flex flex-col justify-between"
          style={{ background: "linear-gradient(135deg, rgba(196,181,253,0.06), rgba(249,168,212,0.04))" }}>
          <div className="text-3xl mb-2">⚡</div>
          <div>
            <h3 className="text-sm font-semibold text-white/80 mb-2">Fun fact</h3>
            <p className="text-xs text-white/45 leading-relaxed">
              I read more git commit messages than novels — and I&apos;m proud of it.
            </p>
          </div>
        </div>

        {/* Open source */}
        <div className="reveal delay-5 glass-pastel rounded-2xl p-7 card-hover">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(110,231,183,0.12)" }}>
              <span>🌿</span>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white/80">Open Source</h3>
              <span className="text-xs text-white/35">Active contributor</span>
            </div>
          </div>
          <a
            href="https://github.com/Kaushtubha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs tag-mint rounded-full px-3 py-1.5 font-mono hover:opacity-80 transition-opacity"
          >
            github.com/Kaushtubha ↗
          </a>
        </div>
      </div>
    </section>
  );
}
