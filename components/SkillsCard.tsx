"use client";

import { useEffect, useState, useRef } from "react";

const SKILLS = [
  { label: "React / Next.js",     pct: 92, color: "#F0A0B5" },
  { label: "TypeScript / JS",     pct: 88, color: "#F0A0B5" },
  { label: "Tailwind CSS",        pct: 85, color: "#F0A0B5" },
  { label: "Node.js / Express",   pct: 82, color: "#97A53E" },
  { label: "REST APIs",           pct: 80, color: "#97A53E" },
  { label: "PostgreSQL / MongoDB",pct: 75, color: "#97A53E" },
  { label: "AWS / Docker",        pct: 68, color: "#D7DE8C" },
  { label: "Python",              pct: 78, color: "#D7DE8C" },
];

const LEGEND = [
  { label: "Frameworks", color: "#F0A0B5" },
  { label: "Backend",    color: "#97A53E" },
  { label: "Tools",      color: "#D7DE8C" },
];

export function SkillsCard() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full rounded-3xl border border-white/60 bg-white/80 p-5 shadow-2xl backdrop-blur-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <p className="text-[10px] uppercase tracking-[0.22em] text-gray-500 font-medium">
          Proficiency
        </p>
        <div className="flex items-center gap-2">
          {LEGEND.map((l) => (
            <span key={l.label} className="flex items-center gap-1 text-[9px] text-gray-400 font-medium">
              <span className="inline-block h-1.5 w-3 rounded-full" style={{ backgroundColor: l.color }} />
              {l.label}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {SKILLS.map((skill, i) => (
          <div key={skill.label}>
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-xs text-gray-600 font-medium">{skill.label}</span>
              <span
                className="text-[10px] font-semibold tabular-nums transition-opacity duration-700"
                style={{ color: skill.color, opacity: animated ? 1 : 0 }}
              >
                {skill.pct}%
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-900 ease-out"
                style={{
                  width: animated ? `${skill.pct}%` : "0%",
                  backgroundColor: skill.color,
                  transitionDelay: `${i * 90}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-[9px] text-gray-300 text-right tracking-wide">self-assessed</p>
    </div>
  );
}