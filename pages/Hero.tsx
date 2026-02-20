import { ArrowRight,Rocket, Sparkles, Stars } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

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
        </div>

        <div className="flex flex-col gap-4 md:self-start md:sticky md:top-24">
        </div>
      </div>
    </section>
  );
}