'use client'
import { Heart, Menu, X } from 'lucide-react';
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
    { label: "About", id: "about"},
    { label: "Contact", id: "contact"},
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-lg font-medium hover:text-primary transition-colors"
          >
            Upashna Kumari
          </button>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map(({ label, id }) => (
                <button 
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Heart className="w-5 h-5" />
              </button>
            </div>

            <button
              className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (<div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-4 py-4 flex flex-col gap-4">
        {navLinks.map(({ label, id}) => (
          <button 
            key={id}
            onClick={() => scrollToSection(id)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">
              {label}
            </button>
        ))}
      </div>
        )}
      </div>
    </nav>
  );
}
