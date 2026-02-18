import Image from "next/image";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  MessageCircle,
  Rocket,
  Sparkles,
  Stars,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#D4E5F3_0%,#D4E5F3_50%,#ffffff_50%,#ffffff_100%)] bg-size-[80px_100%]" />
      <div className="pointer-events-none absolute -top-16 left-0 -z-10 h-72 w-72 rounded-full bg-[#F0A0B5]/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 -z-10 h-72 w-72 rounded-full bg-[#D7DE8C]/35 blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="relative text-center md:text-left">
          <div className="absolute right-6 top-0 hidden animate-pulse md:block">
            <Sparkles className="h-6 w-6 text-[#F0A0B5]" />
          </div>

          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F0A0B5]/30 bg-white/80 px-4 py-2 text-xs tracking-[0.22em] text-[#97A53E] backdrop-blur-sm">
              <Stars className="h-3.5 w-3.5" />
              OPEN TO FULL-TIME ROLES
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
              <span className="block text-gray-800">Hi, I&apos;m Upashna.</span>
              <span className="block text-[#F0A0B5]">Full-stack engineer</span>
              <span className="block text-[#97A53E]">who designs for outcomes.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-700 md:mx-0 md:text-base">
              I build reliable React + TypeScript + Node.js products that are fast, intuitive,
              and genuinely enjoyable to use. I care about conversion-focused UX, scalable
              architecture, and shipping work that helps teams move confidently.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
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
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#F0A0B5]/30 bg-white/85 p-4 text-left shadow-sm backdrop-blur-sm">
                <div className="flex items-center gap-2 text-[#F0A0B5]">
                  <Code2 className="h-4 w-4" />
                  <p className="text-xs uppercase tracking-[0.2em]">Stack</p>
                </div>
                <p className="mt-2 text-sm text-gray-700">React • TypeScript • Node.js</p>
              </div>

              <div className="rounded-2xl border border-[#97A53E]/30 bg-white/85 p-4 text-left shadow-sm backdrop-blur-sm">
                <div className="flex items-center gap-2 text-[#97A53E]">
                  <BriefcaseBusiness className="h-4 w-4" />
                  <p className="text-xs uppercase tracking-[0.2em]">Focus</p>
                </div>
                <p className="mt-2 text-sm text-gray-700">Clean architecture + delightful UX</p>
              </div>

              <div className="rounded-2xl border border-[#D7DE8C]/70 bg-white/85 p-4 text-left shadow-sm backdrop-blur-sm">
                <div className="flex items-center gap-2 text-[#97A53E]">
                  <MessageCircle className="h-4 w-4" />
                  <p className="text-xs uppercase tracking-[0.2em]">Working style</p>
                </div>
                <p className="mt-2 text-sm text-gray-700">Collaborative, proactive, product-minded</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.08}>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative overflow-hidden rounded-4xl border border-white/60 bg-white/80 p-4 shadow-2xl backdrop-blur-sm">
              <div className="absolute right-4 top-4 rounded-full border border-[#F0A0B5]/30 bg-white px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#F0A0B5]">
                Available
              </div>
              <div className="relative mx-auto mt-6 aspect-4/5 w-full overflow-hidden rounded-3xl border border-[#D4E5F3] bg-[#D4E5F3]/40">
                <Image
                  src="/me.png"
                  alt="Portrait of Upashna"
                  fill
                  sizes="(max-width: 768px) 80vw, 360px"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="mt-4 rounded-2xl bg-[#FFF9B1]/70 p-4 text-sm leading-relaxed text-gray-700">
                <p className="font-medium text-[#97A53E]">Hiring note</p>
                <p className="mt-1">
                  Looking for a developer who can own both product polish and technical depth?
                  I can help your team ship customer-facing features faster.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
