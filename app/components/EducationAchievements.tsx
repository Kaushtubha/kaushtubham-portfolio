"use client";
import { useEffect, useRef } from "react";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    school: "University of Petroleum & Energy Studies (UPES)",
    period: "2022 – 2026",
    cgpa: "8.79",
    accent: "lavender",
  },
  {
    degree: "Senior Secondary (Class XII)",
    school: "Central Board of Secondary Education",
    period: "2022",
    cgpa: "85%",
    accent: "mint",
  },
];

const certifications = [
  { name: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services", year: "2024", accent: "lemon" },
  { name: "Meta Back-End Developer", issuer: "Meta (Coursera)", year: "2024", accent: "blush" },
  { name: "Python for Everybody Specialization", issuer: "University of Michigan", year: "2023", accent: "sky" },
  { name: "The Complete Web Developer", issuer: "Udemy", year: "2023", accent: "peach" },
];

const achievements = [
  { emoji: "🏆", title: "Hackathon Winner", desc: "Smart India Hackathon 2023 — AI Track" },
  { emoji: "⭐", title: "Open Source", desc: "10+ PRs merged across public repos" },
  { emoji: "📚", title: "Technical Writing", desc: "Published 5+ articles on dev.to" },
  { emoji: "🎤", title: "Tech Talk", desc: "Speaker at UPES TechFest 2024" },
];

const accentMap: Record<string, { tag: string; dot: string }> = {
  lavender: { tag: "tag-lavender", dot: "#C4B5FD" },
  mint:     { tag: "tag-mint",     dot: "#6EE7B7" },
  blush:    { tag: "tag-blush",    dot: "#F9A8D4" },
  sky:      { tag: "tag-sky",      dot: "#BAE6FD" },
  lemon:    { tag: "tag-lemon",    dot: "#FDE68A" },
  peach:    { tag: "tag-peach",    dot: "#FCA5A5" },
};

export default function EducationAchievements() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const items = section.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );
    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="education" ref={sectionRef} className="py-28 px-5 max-w-6xl mx-auto">
      {/* Header */}
      <div className="reveal mb-14">
        <span className="section-label tag-lemon rounded-full px-3 py-1 inline-block mb-4">Education</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Academic <span className="text-gradient-warm">Journey</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Education */}
        <div>
          <div className="space-y-4 mb-10">
            {education.map((e, i) => {
              const ac = accentMap[e.accent];
              return (
                <div key={e.school} className={`reveal delay-${i + 1} glass-pastel rounded-2xl p-6 card-hover`}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `rgba(${ac.dot.replace("#","").match(/.{2}/g)?.map(h=>parseInt(h,16)).join(",")},0.12)` }}>
                      <span className="text-lg">🎓</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-white/85 leading-snug mb-1">{e.degree}</h3>
                      <p className="text-xs text-white/45 mb-2">{e.school}</p>
                      <div className="flex items-center gap-3">
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-mono ${ac.tag}`}>{e.period}</span>
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${ac.tag}`}>
                          CGPA: {e.cgpa}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Achievements */}
          <h3 className="reveal text-xl font-bold text-white/80 mb-5">Achievements</h3>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((a, i) => (
              <div key={a.title} className={`reveal delay-${i + 1} glass-pastel rounded-xl p-4 card-hover`}>
                <span className="text-2xl block mb-2">{a.emoji}</span>
                <h4 className="text-xs font-semibold text-white/80 mb-1">{a.title}</h4>
                <p className="text-[11px] text-white/40 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="reveal text-xl font-bold text-white/80 mb-5">Certifications</h3>
          <div className="space-y-3">
            {certifications.map((c, i) => {
              const ac = accentMap[c.accent];
              return (
                <div key={c.name} className={`reveal delay-${i + 1} glass-pastel rounded-xl p-5 card-hover flex items-center gap-4`}>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `rgba(${ac.dot.replace("#","").match(/.{2}/g)?.map(h=>parseInt(h,16)).join(",")},0.1)` }}
                  >
                    <svg className="w-5 h-5" style={{ color: ac.dot }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-white/80 truncate">{c.name}</h4>
                    <p className="text-xs text-white/40">{c.issuer}</p>
                  </div>
                  <span className={`text-xs font-mono px-2 py-0.5 rounded-full flex-shrink-0 ${ac.tag}`}>{c.year}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
