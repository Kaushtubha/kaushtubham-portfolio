"use client";

import { useState, useEffect, useRef } from "react";
import { X, CornerDownLeft } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

interface CommandTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface HistoryItem {
  command: string;
  output: string | string[];
}

export default function CommandTerminal({ isOpen, onClose }: CommandTerminalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "welcome",
      output: [
        "Welcome to Kaushtubham's interactive terminal v2.0",
        "Type 'help' to see available commands or click any quick command below.",
      ],
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    let output: string | string[] = "";

    switch (trimmed) {
      case "help":
        output = [
          "Available commands:",
          "  whoami       - Quick overview of Kaushtubham Shukla",
          "  skills       - Technical skills and stack",
          "  projects     - Featured production projects",
          "  experience   - Internship work history",
          "  education    - Degree and university credentials",
          "  contact      - Direct email and phone info",
          "  github       - Open GitHub profile in new tab",
          "  linkedin     - Open LinkedIn profile in new tab",
          "  clear        - Clear terminal history",
          "  exit         - Close terminal",
        ];
        break;
      case "whoami":
        output = [
          `Name: ${portfolioData.personal.name}`,
          `Role: ${portfolioData.personal.role}`,
          `Education: ${portfolioData.education.degree}, ${portfolioData.education.institution}`,
          `Specialization: Distributed Systems, Java/Spring Boot, Redis, Computer Vision`,
          `Status: Open for Software Engineering roles (Graduating 2027)`,
        ];
        break;
      case "skills":
        output = portfolioData.skillCategories.map(
          (c) => `${c.category}: ${c.skills.join(", ")}`
        );
        break;
      case "projects":
        output = portfolioData.projects.map(
          (p) => `[${p.title}] - ${p.subtitle} (${p.tags.join(", ")})`
        );
        break;
      case "experience":
        output = portfolioData.experiences.map(
          (e) => `[${e.role}] @ ${e.company} (${e.period}, ${e.location})`
        );
        break;
      case "education":
        output = [
          `${portfolioData.education.institution} (${portfolioData.education.period})`,
          `${portfolioData.education.degree}`,
          `Coursework: ${portfolioData.education.coursework.join(", ")}`,
        ];
        break;
      case "contact":
        output = [
          `Email: ${portfolioData.personal.email}`,
          `Phone: ${portfolioData.personal.phone}`,
          `Location: ${portfolioData.personal.location}`,
          `LinkedIn: ${portfolioData.personal.linkedin}`,
          `GitHub: ${portfolioData.personal.github}`,
        ];
        break;
      case "github":
        window.open(portfolioData.personal.github, "_blank");
        output = "Opening GitHub profile in a new tab...";
        break;
      case "linkedin":
        window.open(portfolioData.personal.linkedin, "_blank");
        output = "Opening LinkedIn profile in a new tab...";
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "exit":
      case "close":
      case "quit":
        onClose();
        return;
      default:
        output = `Command not recognized: '${trimmed}'. Type 'help' for valid commands.`;
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output }]);
    setInput("");
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-purple-500/30 bg-[#0c0a18]/95 shadow-[0_20px_60px_-15px_rgba(168,85,247,0.4)] backdrop-blur-2xl">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between border-b border-white/10 bg-[#07060e] px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-rose-500/80" />
            <div className="h-3 w-3 rounded-full bg-amber-500/80" />
            <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-xs text-zinc-400">
              kaushtubham@portfolio ~ terminal
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close terminal"
            className="rounded-lg p-1 text-zinc-400 hover:bg-white/10 hover:text-white transition"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Quick Command Pills */}
        <div className="flex flex-wrap gap-1.5 border-b border-white/10 bg-[#090714] px-4 py-2 text-xs">
          <span className="text-zinc-500 self-center mr-1">Quick:</span>
          {["whoami", "skills", "projects", "experience", "contact", "clear"].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-pink-300 hover:border-pink-500/40 hover:bg-pink-500/10 hover:text-white transition"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Output Body */}
        <div className="h-80 overflow-y-auto p-4 font-mono text-xs text-zinc-300 space-y-3">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-pink-400">
                <span className="text-purple-400">❯</span>
                <span className="font-semibold">{item.command}</span>
              </div>
              <div className="pl-4 text-zinc-300 whitespace-pre-wrap">
                {Array.isArray(item.output) ? (
                  item.output.map((line, lIdx) => (
                    <div key={lIdx} className="leading-relaxed">
                      {line}
                    </div>
                  ))
                ) : (
                  <div>{item.output}</div>
                )}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Prompt Form */}
        <form onSubmit={onSubmit} className="flex items-center border-t border-white/10 bg-[#07060e] px-4 py-2.5">
          <span className="text-pink-400 font-mono text-sm mr-2">❯</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type 'help', 'whoami', 'projects'..."
            className="flex-1 bg-transparent font-mono text-xs text-white placeholder-zinc-500 focus:outline-none"
          />
          <button type="submit" className="text-zinc-400 hover:text-white transition">
            <CornerDownLeft className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
