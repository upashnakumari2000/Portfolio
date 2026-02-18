import { Linkedin, Github, Mail, FileText } from 'lucide-react';
import { CONTACT_EMAIL, SOCIAL_LINKS } from '@/constants';
import { ScrollReveal } from '@/components/ScrollReveal';

export function Footer() {
  return (
    <footer className="bg-[#F0A0B5]/10 border-t border-[#F0A0B5]/20 py-10">
      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center gap-6">
        <ScrollReveal>
        <div className="flex items-center gap-6">
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#F0A0B5] hover:scale-110 transition-transform"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#F0A0B5] hover:scale-110 transition-transform"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            aria-label="Email"
            className="text-[#F0A0B5] hover:scale-110 transition-transform"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="/Upashna_Kumari_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            className="text-[#F0A0B5] hover:scale-110 transition-transform"
          >
            <FileText className="w-5 h-5" />
          </a>
        </div>
        </ScrollReveal>

        <ScrollReveal>
        <a
          href="/Upashna_Kumari_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#F0A0B5] hover:text-[#E08FA3] underline underline-offset-4 transition-colors"
        >
          View Resume ↗
        </a>
        </ScrollReveal>

        <ScrollReveal>
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Upashna Kumari. Built with Next.js & Tailwind CSS.
        </p>
        </ScrollReveal>
      </div>
    </footer>
  );
}