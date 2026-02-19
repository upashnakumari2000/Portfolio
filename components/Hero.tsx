import {
  ArrowRight,
  Code2,
  Layers,
  Rocket,
  Sparkles,
  Stars,
  Wrench,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SkillsCard } from "@/components/SkillsCard";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-24 pb-16"
    >
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#D4E5F3_0%,#e8f2fa_40%,#f9fafb_60%,#ffffff_100%)]" />
      <div className="pointer-events-none absolute -top-16 left-0 -z-10 h-72 w-72 rounded-full bg-[#F0A0B5]/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 -z-10 h-72 w-72 rounded-full bg-[#D7DE8C]/35 blur-3xl" />

      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 px-4 md:grid-cols-[1fr_auto]">

        <div className="relative flex flex-col gap-8">
          <div className="absolute right-0 top-0 hidden animate-pulse md:block">
            <Sparkles className="h-6 w-6 text-[#F0A0B5]" />
          </div>

          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F0A0B5]/30 bg-white/80 px-4 py-2 text-xs tracking-[0.22em] text-[#97A53E] backdrop-blur-sm">
              <Stars className="h-3.5 w-3.5" />
              OPEN TO FULL-TIME ROLES
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="rounded-3xl border border-white/80 bg-white/78 p-5 shadow-xl backdrop-blur-sm md:p-7">
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
                <span className="block text-gray-800">Hi, I&apos;m Upashna.</span>
                <span className="block text-[#F0A0B5]">Full-stack engineer</span>
                <span className="block text-[#97A53E]">who designs for outcomes.</span>
              </h1>
              <p className="mt-5 text-sm leading-relaxed text-gray-700 md:text-base">
                I build reliable React + TypeScript + Node.js products that are
                fast, intuitive, and genuinely enjoyable to use. I care about
                conversion-focused UX, scalable architecture, and shipping work
                that helps teams move confidently.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#F0A0B5] px-6 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:-translate-y-0.5"
              >
                See Case Studies
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#97A53E]/40 bg-white/90 px-6 py-3 text-sm font-medium text-[#97A53E] shadow-sm transition-transform hover:-translate-y-0.5"
              >
                Let&apos;s Work Together
                <Rocket className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.18}>
            <div className="grid grid-cols-1 gap-3 min-[520px]:grid-cols-3">

              <div className="min-w-0 rounded-2xl border border-[#F0A0B5]/30 bg-white/85 p-4 text-left shadow-sm backdrop-blur-sm">
                <div className="flex items-center gap-2 text-[#F0A0B5]">
                  <Code2 className="h-4 w-4 shrink-0" />
                  <p className="text-xs uppercase tracking-[0.2em]">Languages</p>
                </div>
                <p className="mt-2 wrap-break-wordword text-sm text-gray-700">
                  TypeScript · Python · Java · SQL · Swift · HTML/CSS
                </p>
              </div>

              <div className="min-w-0 rounded-2xl border border-[#97A53E]/30 bg-white/85 p-4 text-left shadow-sm backdrop-blur-sm">
                <div className="flex items-center gap-2 text-[#97A53E]">
                  <Layers className="h-4 w-4 shrink-0" />
                  <p className="text-xs uppercase tracking-[0.2em]">Frameworks</p>
                </div>
                <p className="mt-2 wrap-break-word text-sm text-gray-700">
                  React · Next.js · Node.js · Express · Tailwind · REST APIs
                </p>
              </div>

              <div className="min-w-0 rounded-2xl border border-[#D7DE8C]/70 bg-white/85 p-4 text-left shadow-sm backdrop-blur-sm">
                <div className="flex items-center gap-2 text-[#97A53E]">
                  <Wrench className="h-4 w-4 shrink-0" />
                  <p className="text-xs uppercase tracking-[0.2em]">Tools & Cloud</p>
                </div>
                <p className="mt-2 wrap-break-word text-sm text-gray-700">
                  AWS · Docker · Git · Firebase · PostgreSQL · MongoDB
                </p>
              </div>

            </div>
          </ScrollReveal>
        </div>

        <div className="flex flex-col gap-4 md:self-start md:sticky md:top-24">

          <ScrollReveal delay={0.08}>
            <div className="w-full md:w-72 relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-5 shadow-2xl backdrop-blur-sm">
              <div className="inline-flex rounded-full border border-[#F0A0B5]/40 bg-white px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#F0A0B5]">
                ● Available
              </div>
              <div className="mt-4 rounded-2xl bg-[#FFF9B1]/70 p-4 text-sm leading-relaxed text-gray-700">
                <p className="font-semibold text-[#97A53E]">Hiring note</p>
                <p className="mt-1">
                  Looking for a developer who can own both product polish and
                  technical depth? I can help your team ship customer-facing
                  features faster.
                </p>
              </div>
              <div className="mt-4 border-t border-gray-100 pt-4">
                <a
                  href="#contact"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F0A0B5]/10 px-4 py-2.5 text-xs font-medium text-[#F0A0B5] transition-colors hover:bg-[#F0A0B5]/20"
                >
                  Get in touch
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.22}>
            <SkillsCard />
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}