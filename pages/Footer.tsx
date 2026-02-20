import { Linkedin, Github, Mail, FileText } from 'lucide-react';
import { CONTACT_EMAIL, SOCIAL_LINKS } from '@/constants';
import { ScrollReveal } from '@/components/ScrollReveal';

export function Footer() {
  return (
    <footer className="border-t border-[#F0A0B5]/20 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
        <ScrollReveal>
        <div>
            <p className="text-xs tracking-[0.2em] text-[#97A53E]">UPASHNA KUMARI</p>
            <p className="mt-2 max-w-md text-sm text-gray-600">
              Full-stack engineer focused on shipping reliable, user-friendly products.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="flex items-center gap-4">
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full border border-[#F0A0B5]/30 p-2 text-[#F0A0B5] transition-colors hover:bg-[#F0A0B5]/10">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full border border-gray-300 p-2 text-gray-700 transition-colors hover:bg-gray-100">
              <Github className="h-4 w-4" />
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} aria-label="Email" className="rounded-full border border-[#97A53E]/35 p-2 text-[#97A53E] transition-colors hover:bg-[#D7DE8C]/20">
              <Mail className="h-4 w-4" />
            </a>
            <a href="/Upashna_Kumari_Resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume" className="rounded-full border border-[#F0A0B5]/30 p-2 text-[#F0A0B5] transition-colors hover:bg-[#F0A0B5]/10">
              <FileText className="h-4 w-4" />
            </a>
          </div>
        </ScrollReveal>
        </div>

        <ScrollReveal>
          <p className="mt-8 text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Upashna Kumari. Built with Next.js & Tailwind CSS.
          </p>
        </ScrollReveal>
    </footer>
  );
}