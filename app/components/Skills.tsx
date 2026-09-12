"use client";
import { useEffect, useRef, useState } from "react";

const categories = [
  {
    label: "Languages",
    accent: "lavender",
    skills: ["Python", "TypeScript", "JavaScript", "Go (learning)", "SQL", "Bash"],
  },
  {
    label: "Backend",
    accent: "mint",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT Auth", "WebSockets"],
  },
  {
    label: "Frontend",
    accent: "blush",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "shadcn/ui"],
  },
  {
    label: "Databases",
    accent: "sky",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "Supabase", "Firebase"],
  },
  {
    label: "DevOps & Cloud",
    accent: "lemon",
    skills: ["Docker", "GitHub Actions", "Vercel", "AWS (basics)", "Nginx", "Linux"],
  },
  {
    label: "Tools",
    accent: "peach",
    skills: ["Git", "Postman", "Figma", "VS Code", "Notion", "Jira"],
  },
];

const accentMap: Record<string, string> = {
  lavender: "tag-lavender",
  mint: "tag-mint",
  peach: "tag-peach",
  blush: "tag-blush",
  sky: "tag-sky",
  lemon: "tag-lemon",
};

const marqueeSkills = [
  "Python", "TypeScript", "React", "Node.js", "PostgreSQL", "Docker",
  "Next.js", "MongoDB", "FastAPI", "Redis", "Prisma", "Tailwind",
  "Go", "GitHub Actions", "REST APIs", "Supabase", "AWS", "Nginx",
];

export default function Skills() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const items = section.querySelectorAll<HTMLElement>(".reveal, .reveal-scale");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );
    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const cat = categories[active];

  return (
    <section id="skills" ref={sectionRef} className="py-28 overflow-hidden">
      <div className="px-5 max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal mb-14">
          <span className="section-label tag-mint rounded-full px-3 py-1 inline-block mb-4">Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Tech <span className="text-gradient-mint">Stack</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="reveal flex flex-wrap gap-2 mb-8">
          {categories.map((c, i) => (
            <button
              key={c.label}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === i
                  ? `${accentMap[c.accent]} scale-105`
                  : "glass text-white/45 hover:text-white/70"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="reveal-scale visible grid grid-cols-2 sm:grid-cols-3 gap-3 min-h-[200px]">
          {cat.skills.map((sk, i) => (
            <div
              key={sk}
              className={`glass-pastel rounded-xl px-5 py-4 flex items-center gap-3 card-hover reveal delay-${Math.min(i + 1, 6)}`}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: `var(--${cat.accent})` }}
              />
              <span className="text-sm font-medium text-white/80">{sk}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee strip */}
      <div className="mt-20 relative">
        <div className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0A0A0F, transparent)" }} />
        <div className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0A0A0F, transparent)" }} />
        <div className="overflow-hidden py-4">
          <div className="marquee-track">
            {[...marqueeSkills, ...marqueeSkills].map((sk, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 mx-4 glass-pastel rounded-full px-5 py-2 text-sm font-mono text-white/40"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C4B5FD] opacity-60" />
                {sk}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
