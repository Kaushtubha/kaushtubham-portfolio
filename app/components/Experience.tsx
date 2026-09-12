"use client";
import { useEffect, useRef } from "react";

const experiences = [
  {
    role: "Web Developer Intern",
    company: "Zidio Development",
    period: "Jun 2024 – Aug 2024",
    type: "Internship",
    accent: "lavender",
    points: [
      "Built and shipped 3 full-stack features using React + Node.js, reducing load time by 30%",
      "Integrated RESTful APIs with PostgreSQL backend, handling 10k+ daily requests",
      "Collaborated in an agile team of 8 engineers with weekly sprint reviews",
      "Implemented JWT-based auth system improving security posture",
    ],
    tags: ["React", "Node.js", "PostgreSQL", "REST APIs"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Bharat Intern",
    period: "Dec 2023 – Feb 2024",
    type: "Internship",
    accent: "mint",
    points: [
      "Developed a real-time chat application using Socket.io and MongoDB",
      "Built responsive dashboards with React and Tailwind CSS",
      "Implemented file upload/download service with AWS S3 integration",
    ],
    tags: ["Socket.io", "MongoDB", "React", "AWS S3"],
  },
  {
    role: "Frontend Developer Intern",
    company: "CodSoft",
    period: "Aug 2023 – Oct 2023",
    type: "Internship",
    accent: "blush",
    points: [
      "Revamped landing pages increasing conversion rate by 18%",
      "Reduced CSS bundle size by 40% through component extraction",
      "Mentored 2 junior interns on React best practices",
    ],
    tags: ["React", "CSS", "JavaScript", "Figma"],
  },
];

const accentColorMap: Record<string, { dot: string; glow: string; tag: string }> = {
  lavender: { dot: "#C4B5FD", glow: "rgba(196,181,253,0.15)", tag: "tag-lavender" },
  mint: { dot: "#6EE7B7", glow: "rgba(110,231,183,0.12)", tag: "tag-mint" },
  blush: { dot: "#F9A8D4", glow: "rgba(249,168,212,0.12)", tag: "tag-blush" },
};

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const items = section.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-28 px-5 max-w-6xl mx-auto">
      {/* Header */}
      <div className="reveal mb-14">
        <span className="section-label tag-blush rounded-full px-3 py-1 inline-block mb-4">Experience</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Where I&apos;ve <span className="text-gradient">Worked</span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 md:left-8 top-0 bottom-0 w-px timeline-line opacity-30 rounded-full" />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => {
            const colors = accentColorMap[exp.accent] ?? accentColorMap.lavender;
            return (
              <div
                key={exp.company}
                className={`reveal delay-${i + 1} relative pl-16 md:pl-24`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-[13px] md:left-[21px] top-5 w-5 h-5 rounded-full border-2 border-[#0A0A0F] transition-all duration-500"
                  style={{ background: colors.dot, boxShadow: `0 0 16px ${colors.glow}` }}
                />

                {/* Card */}
                <div
                  className="glass-pastel rounded-2xl p-6 md:p-8 card-hover"
                  style={{ borderColor: `rgba(${exp.accent === "lavender" ? "196,181,253" : exp.accent === "mint" ? "110,231,183" : "249,168,212"},0.15)` }}
                >
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white/90">{exp.role}</h3>
                      <p className="text-sm font-medium mt-0.5" style={{ color: colors.dot }}>{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs rounded-full px-3 py-1 font-medium ${colors.tag}`}>{exp.type}</span>
                      <p className="text-xs text-white/35 font-mono mt-1.5">{exp.period}</p>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-5">
                    {exp.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-white/55">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: colors.dot }} />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className={`text-xs px-3 py-1 rounded-full font-mono ${colors.tag}`}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
