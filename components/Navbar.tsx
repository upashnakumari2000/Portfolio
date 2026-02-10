'use client'
import { Heart } from 'lucide-react';

export function Navbar() {

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

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
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("hero")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Heart></Heart>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
