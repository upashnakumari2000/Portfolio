import { ArrowRight, Rocket, Sparkles, Stars } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-24 pb-16"
    >
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#D4E5F3_0%,#e8f2fa_40%,#f9fafb_60%,#ffffff_100%)]" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      <div className="pointer-events-none absolute -top-16 left-0 -z-10 h-96 w-96 rounded-full bg-[#F0A0B5]/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 -z-10 h-96 w-96 rounded-full bg-[#D7DE8C]/30 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4E5F3]/40 blur-3xl" />

      <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 text-center">
        <div className="relative flex w-full flex-col items-center gap-8">
          <div className="absolute -right-2 top-0 hidden md:block">
            <Sparkles className="h-5 w-5 animate-pulse text-[#F0A0B5]" />
          </div>

          <ScrollReveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#97A53E]/25 bg-white/90 px-4 py-2 text-xs tracking-[0.18em] text-[#97A53E] shadow-sm backdrop-blur-sm mx-auto">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#97A53E] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#97A53E]" />
              </span>
              <Stars className="h-3.5 w-3.5" />
              OPEN TO FULL-TIME ROLES
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-white/75 p-5 shadow-2xl shadow-[#D4E5F3]/50 backdrop-blur-sm md:p-7">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F0A0B5]/60 to-transparent" />

              <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight md:text-5xl lg:text-6xl text-center">
                <span className="block text-gray-800">Hi, I&apos;m Upashna.</span>
                <span className="block text-[#F0A0B5]">Full-stack engineer</span>
                <span className="block text-[#97A53E]">who designs for outcomes.</span>
              </h1>

              <p className="mt-5 max-w-prose text-sm leading-relaxed text-gray-600 md:text-base text-center mx-auto">
                I build reliable React + TypeScript + Node.js products that are
                fast, intuitive, and genuinely enjoyable to use. I care about
                conversion-focused UX, scalable architecture, and shipping work
                that helps teams move confidently.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-[#F0A0B5] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#F0A0B5]/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#F0A0B5]/40"
              >
                See Case Studies
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-[#97A53E]/30 bg-white/90 px-6 py-3 text-sm font-medium text-[#97A53E] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#97A53E]/50 hover:shadow-md"
              >
                Let&apos;s Work Together
                <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}