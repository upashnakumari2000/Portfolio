import { Linkedin, Github, Mail, Award } from 'lucide-react';
import Image from 'next/image';
import { SOCIAL_LINKS } from '@/constants';
import { ScrollReveal } from '@/components/ScrollReveal';

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[0.95fr_1.05fr] md:items-center">
        <ScrollReveal>
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-[#F0A0B5]/20 bg-[#F4E0E1]/35 p-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/80">
              <Image src="/me.png" alt="Upashna Kumari" fill className="object-cover" />
            </div>
            <div className="mt-4 rounded-2xl bg-white/90 p-4 text-sm text-gray-700">
              <p className="inline-flex items-center gap-2 text-[#97A53E]">
                <Award className="h-4 w-4" />
                Full-stack Engineer
              </p>
              <p className="mt-2">Building customer-facing products with clean code and strong UX details.</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <div>
            <p className="text-xs tracking-[0.24em] text-[#97A53E]">ABOUT</p>
            <h2 className="mt-3 text-4xl text-[#F0A0B5] md:text-5xl">Product-minded engineer, team-first collaborator</h2>

            <div className="mt-6 space-y-4 text-gray-700">
              <p>
                I&apos;m a full-stack engineer with professional experience building and maintaining
                React, TypeScript, and Node.js applications in startup environments.
              </p>
              <p>
                My work often sits at the intersection of UI polish and backend reliability:
                improving user flows, refactoring systems for scale, and delivering features that
                move business metrics.
              </p>
              <p>
                I&apos;m at my best in collaborative teams where ownership, velocity, and thoughtful
                product decisions matter.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center gap-2 rounded-full border border-[#F0A0B5]/30 px-4 py-2 text-sm text-[#F0A0B5] transition-colors hover:bg-[#F0A0B5]/10"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={SOCIAL_LINKS.email}
                aria-label="Email"
                className="inline-flex items-center gap-2 rounded-full border border-[#97A53E]/30 px-4 py-2 text-sm text-[#97A53E] transition-colors hover:bg-[#D7DE8C]/20"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}