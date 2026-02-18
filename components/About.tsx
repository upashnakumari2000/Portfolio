import { Linkedin, Github, Mail } from 'lucide-react';
import Image from 'next/image';
import { SOCIAL_LINKS } from '@/constants';
import { ScrollReveal } from '@/components/ScrollReveal'

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={0.08}>
          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl text-[#F0A0B5] mb-2">I&apos;m Upashna!</h2>
              <p className="text-sm text-gray-500 uppercase tracking-wide">THE PERSON FOR YOU</p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              I am a junior software engineer with hands on experience building and
              maintaining full stack web applicaitons using React, TypeScript and Node.js.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Currently I work as a Full Stack Engineer at a startup, where i contribute
              to an automation platfom used for web testing; improving UI flow, refactoring
              configuration systems and collaborating in an agile engineering team.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Outside of work, I spend my time building projects from the ground up,
              exploring new technologies, and refining my engineering skills through
              practical, end-to-end development.
            </p>
            
            <div className="flex gap-6 pt-4">
              <a 
                href={SOCIAL_LINKS.linkedin}
                target="blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#F0A0B5] hover:scale-110 transtion-transform"
                >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href={SOCIAL_LINKS.github}
                target="blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[#F0A0B5] hover:scale-110 transition-transform">
                <Github className="w-6 h-6" />
              </a>
              <a 
                href={SOCIAL_LINKS.email}
                aria-label="Email"
                className="text-[#F0A0B5] hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
          <div className="relative">
            <div className="bg-[#F0A0B5] rounded-3xl p-8 shadow-xl">
              <Image
                src="/me.png"
                alt="Upashna"
                height={400}
                width={400}
                className="w-full h-96 object-cover rounded-2xl mb-6"
              />
              <div className="text-center">
                <p className="text-white text-sm italic">this is the</p>
                <p className="text-white text-lg font-medium">CREATIVE SOUL</p>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}