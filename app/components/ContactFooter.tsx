"use client";
import { useState } from "react";

const contacts = [
  { label: "Email",    value: "kaushtubhamshukla@gmail.com", icon: "✉", href: "mailto:kaushtubhamshukla@gmail.com", accent: "lavender" },
  { label: "GitHub",   value: "github.com/Kaushtubha",       icon: "⌥", href: "https://github.com/Kaushtubha", accent: "mint" },
  { label: "LinkedIn", value: "linkedin.com/in/kaushtubham-shukla", icon: "⤴", href: "https://linkedin.com/in/kaushtubham-shukla", accent: "blush" },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <button
      onClick={copy}
      className="ml-2 text-[10px] font-mono glass px-2.5 py-1 rounded-full text-white/40 hover:text-white transition-colors"
    >
      {copied ? "✓ copied" : "copy"}
    </button>
  );
}

export default function ContactFooter() {
  return (
    <section id="contact" className="py-28 px-5 max-w-6xl mx-auto">
      {/* Ambient glow */}
      <div className="relative">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none -z-10"
          style={{
            background: "radial-gradient(ellipse, rgba(196,181,253,0.06) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label tag-lavender rounded-full px-3 py-1 inline-block mb-4">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-white/45 max-w-md mx-auto text-sm leading-relaxed">
            Open to internship opportunities, full-time roles, freelance projects,
            and interesting collaborations. Say hi!
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-16">
          {contacts.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`reveal delay-${i + 1} glass-pastel rounded-2xl p-6 card-hover group text-center`}
            >
              <div className="text-3xl mb-3">{c.icon}</div>
              <div className="text-xs font-mono text-white/35 mb-1">{c.label}</div>
              <div className="text-xs text-white/65 group-hover:text-white transition-colors truncate">{c.value}</div>
              <div className="mt-3 flex justify-center">
                <CopyButton text={c.value} />
              </div>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px mb-12" style={{ background: "linear-gradient(to right, transparent, rgba(196,181,253,0.2), rgba(249,168,212,0.15), transparent)" }} />

        {/* Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30 font-mono">
          <div>
            Crafted with <span className="text-[#F9A8D4]">♡</span> by Kaushtubham Shukla — 2025
          </div>
          <div className="flex items-center gap-6">
            <span>Next.js 15</span>
            <span className="text-white/15">·</span>
            <span>TypeScript</span>
            <span className="text-white/15">·</span>
            <span>Tailwind CSS 4</span>
          </div>
          <a
            href="https://github.com/Kaushtubha/kaushtubham-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors"
          >
            View source ↗
          </a>
        </div>
      </div>
    </section>
  );
}
