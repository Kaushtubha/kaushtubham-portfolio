"use client";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    name: "Vaultix",
    tagline: "Encrypted Financial Journal",
    description:
      "End-to-end encrypted personal finance tracker with AI-powered insights. Zero-knowledge architecture — the server never sees your data.",
    stack: ["Go", "PostgreSQL", "Redis", "React", "AES-256"],
    accent: "lavender",
    status: "In Progress",
    links: { github: "#", live: "#" },
    metrics: ["AES-256 encryption", "< 50ms API p95", "Zero-knowledge"],
  },
  {
    name: "DevConnect",
    tagline: "Real-time Dev Collaboration",
    description:
      "A GitHub-inspired platform where developers showcase projects and collaborate in real-time with WebSocket-based live code review.",
    stack: ["Node.js", "Socket.io", "MongoDB", "React", "JWT"],
    accent: "mint",
    status: "Live",
    links: { github: "https://github.com/Kaushtubha", live: "#" },
    metrics: ["10k+ messages/day", "Real-time sync", "OAuth2 login"],
  },
  {
    name: "ShopBot AI",
    tagline: "Conversational E-Commerce",
    description:
      "Intelligent shopping assistant with NLP-driven product recommendations, cart management, and payment integration.",
    stack: ["Python", "FastAPI", "OpenAI API", "PostgreSQL", "Stripe"],
    accent: "blush",
    status: "Live",
    links: { github: "https://github.com/Kaushtubha", live: "#" },
    metrics: ["35% conv. uplift", "GPT-4 powered", "Stripe checkout"],
  },
  {
    name: "TaskFlow",
    tagline: "Kanban + AI Prioritization",
    description:
      "Smart project management tool with drag-and-drop kanban, AI-driven task prioritization, and team collaboration features.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Tailwind", "OpenAI"],
    accent: "sky",
    status: "Live",
    links: { github: "https://github.com/Kaushtubha", live: "#" },
    metrics: ["Drag-and-drop", "AI priorities", "Team spaces"],
  },
  {
    name: "LinkForge",
    tagline: "Smart URL Shortener",
    description:
      "Feature-rich URL shortener with custom domains, click analytics, QR generation, and A/B testing for redirect targets.",
    stack: ["Node.js", "Redis", "PostgreSQL", "React", "Chart.js"],
    accent: "lemon",
    status: "Live",
    links: { github: "https://github.com/Kaushtubha", live: "#" },
    metrics: ["1M+ redirects", "< 5ms latency", "QR export"],
  },
  {
    name: "WeatherAtlas",
    tagline: "Beautiful Weather Dashboard",
    description:
      "Cinematic weather app with animated backgrounds based on conditions, hourly forecasts, and air quality monitoring.",
    stack: ["React", "OpenWeatherMap API", "GSAP", "Tailwind"],
    accent: "peach",
    status: "Live",
    links: { github: "https://github.com/Kaushtubha", live: "#" },
    metrics: ["5-day forecast", "AQI monitor", "Animated UI"],
  },
];

const accentMap: Record<string, { tag: string; dot: string; grad: string }> = {
  lavender: { tag: "tag-lavender", dot: "#C4B5FD", grad: "135deg, rgba(196,181,253,0.08), rgba(249,168,212,0.04)" },
  mint:     { tag: "tag-mint",     dot: "#6EE7B7", grad: "135deg, rgba(110,231,183,0.07), rgba(186,230,253,0.04)" },
  blush:    { tag: "tag-blush",    dot: "#F9A8D4", grad: "135deg, rgba(249,168,212,0.08), rgba(252,165,165,0.04)" },
  sky:      { tag: "tag-sky",      dot: "#BAE6FD", grad: "135deg, rgba(186,230,253,0.07), rgba(196,181,253,0.04)" },
  lemon:    { tag: "tag-lemon",    dot: "#FDE68A", grad: "135deg, rgba(253,230,138,0.07), rgba(252,165,165,0.04)" },
  peach:    { tag: "tag-peach",    dot: "#FCA5A5", grad: "135deg, rgba(252,165,165,0.07), rgba(253,230,138,0.04)" },
};

function ProjectCard({ p, i }: { p: typeof projects[0]; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ac = accentMap[p.accent] ?? accentMap.lavender;

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width  - 0.5;
    const cy = (e.clientY - rect.top)  / rect.height - 0.5;
    setTilt({ x: cy * -10, y: cx * 10 });
  };
  const onLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onLeave}
      className={`reveal delay-${(i % 3) + 1} glass-pastel rounded-2xl p-6 flex flex-col group cursor-pointer`}
      style={{
        background: `linear-gradient(${ac.grad})`,
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(0)`,
        transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease",
        boxShadow: tilt.x !== 0 || tilt.y !== 0
          ? `0 25px 60px -12px rgba(0,0,0,0.4), 0 0 30px rgba(${ac.dot.replace("#","").match(/.{2}/g)?.map(h=>parseInt(h,16)).join(",") ?? "196,181,253"},0.12)`
          : undefined,
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-base font-bold text-white/90">{p.name}</h3>
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${ac.tag}`}
            >
              {p.status}
            </span>
          </div>
          <p className="text-xs text-white/40">{p.tagline}</p>
        </div>
        {/* Links */}
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href={p.links.github} target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 rounded-full glass flex items-center justify-center text-white/60 hover:text-white transition-colors">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href={p.links.live} target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 rounded-full glass flex items-center justify-center text-white/60 hover:text-white transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-white/50 leading-relaxed flex-1 mb-5">{p.description}</p>

      {/* Metrics */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {p.metrics.map((m) => (
          <span key={m} className="text-[10px] font-mono text-white/35 glass rounded-full px-2.5 py-0.5">{m}</span>
        ))}
      </div>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <span key={s} className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full ${ac.tag}`}>{s}</span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const items = section.querySelectorAll<HTMLElement>(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );
    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-28 px-5 max-w-6xl mx-auto">
      {/* Header */}
      <div className="reveal mb-14">
        <span className="section-label tag-sky rounded-full px-3 py-1 inline-block mb-4">Projects</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Things I&apos;ve <span className="text-gradient-cool">Built</span>
        </h2>
        <p className="text-white/40 text-sm mt-3 max-w-md">
          A curated selection of projects — hover cards for 3D tilt effect.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p, i) => <ProjectCard key={p.name} p={p} i={i} />)}
      </div>

      {/* GitHub CTA */}
      <div className="reveal mt-12 text-center">
        <a
          href="https://github.com/Kaushtubha"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 glass-pastel text-white/70 hover:text-white px-6 py-3 rounded-full text-sm font-medium transition-all hover:border-[rgba(196,181,253,0.3)]"
        >
          View all projects on GitHub
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
