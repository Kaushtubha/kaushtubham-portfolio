"use client";
import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Home",        href: "#hero" },
  { label: "About",       href: "#about" },
  { label: "Skills",      href: "#skills" },
  { label: "Experience",  href: "#experience" },
  { label: "Projects",    href: "#projects" },
  { label: "Education",   href: "#education" },
  { label: "Contact",     href: "#contact" },
];

export default function Navbar() {
  const [active, setActive]     = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pillRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  /* — scroll spy + shrink — */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = links
        .map((l) => document.querySelector<HTMLElement>(l.href))
        .filter(Boolean) as HTMLElement[];
      for (let i = sections.length - 1; i >= 0; i--) {
        if (window.scrollY + 120 >= sections[i].offsetTop) {
          setActive(links[i].label);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* — animate pill indicator — */
  useEffect(() => {
    const idx = links.findIndex((l) => l.label === active);
    const el  = itemRefs.current[idx];
    const pill = pillRef.current;
    if (!el || !pill) return;
    const parent = el.closest("nav")?.getBoundingClientRect();
    const rect   = el.getBoundingClientRect();
    if (!parent) return;
    pill.style.left  = rect.left - parent.left + "px";
    pill.style.width = rect.width + "px";
  }, [active, scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
        scrolled ? "pt-3" : "pt-5"
      }`}
    >
      {/* Desktop nav */}
      <nav
        className={`relative hidden md:flex items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-500 glass-pastel ${
          scrolled
            ? "shadow-[0_8px_40px_rgba(196,181,253,0.2)] scale-95"
            : "shadow-[0_4px_20px_rgba(196,181,253,0.1)]"
        }`}
      >
        {/* Sliding pill */}
        <div
          ref={pillRef}
          className="absolute top-1/2 -translate-y-1/2 h-8 rounded-full transition-all duration-500 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(196,181,253,0.28), rgba(249,168,212,0.2))",
            boxShadow: "0 0 14px rgba(196,181,253,0.25)",
          }}
        />
        {links.map((l, i) => (
          <a
            key={l.label}
            ref={(el) => { itemRefs.current[i] = el; }}
            href={l.href}
            onClick={() => setActive(l.label)}
            className={`relative z-10 px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-300 ${
              active === l.label
                ? "text-white"
                : "text-white/50 hover:text-white/80"
            }`}
          >
            {l.label}
          </a>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <div className="md:hidden w-full px-5 flex items-center justify-between">
        <span className="text-sm font-mono text-gradient opacity-80">KS.</span>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="glass-pastel rounded-full w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Menu"
        >
          <span className={`block h-0.5 rounded bg-white/70 transition-all duration-300 ${menuOpen ? "w-5 rotate-45 translate-y-2" : "w-5"}`} />
          <span className={`block h-0.5 rounded bg-white/70 transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : "w-3.5"}`} />
          <span className={`block h-0.5 rounded bg-white/70 transition-all duration-300 ${menuOpen ? "w-5 -rotate-45 -translate-y-2" : "w-5"}`} />
        </button>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`md:hidden absolute top-full left-4 right-4 mt-2 glass-pastel rounded-2xl overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            onClick={() => { setActive(l.label); setMenuOpen(false); }}
            className={`block px-5 py-3.5 text-sm font-medium border-b border-white/5 last:border-0 transition-colors ${
              active === l.label ? "text-gradient" : "text-white/60 hover:text-white"
            }`}
          >
            {l.label}
          </a>
        ))}
      </div>
    </header>
  );
}
