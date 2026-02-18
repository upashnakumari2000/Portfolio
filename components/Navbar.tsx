'use client'
import { BriefcaseBusiness, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };
  const navLinks = [
    { label: "Projects", id: "projects" },
    { label: "About", id: "about" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[#F0A0B5]/20 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-sm tracking-[0.2em] text-[#97A53E] transition-colors hover:text-[#F0A0B5]"
        >
          UPASHNA KUMARI
        </button>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="rounded-full px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-[#F0A0B5]/10 hover:text-[#F0A0B5]"
            >
              {label}
            </button>
          ))}
          <a
            href="#contact"
            className="ml-1 inline-flex items-center gap-2 rounded-full bg-[#97A53E] px-4 py-2 text-sm text-white transition-transform hover:-translate-y-0.5"
          >
            <BriefcaseBusiness className="h-4 w-4" />
            Hire Me
          </a>
        </div>

        <button
          className="text-gray-700 transition-colors hover:text-[#F0A0B5] md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#F0A0B5]/20 bg-white/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="rounded-lg px-3 py-2 text-left text-sm text-gray-700 transition-colors hover:bg-[#F0A0B5]/10 hover:text-[#F0A0B5]"
              >
                {label}
              </button>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#97A53E] px-4 py-2 text-sm text-white"
            >
              <BriefcaseBusiness className="h-4 w-4" />
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
