import { Sparkles, Palette, Computer, Rocket, ArrowRight, Stars } from "lucide-react"
import { ScrollReveal } from "@/components/ScrollReveal";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stripes" x="0" y="0" width="80" height="100%" patternUnits="userSpaceOnUse">
              <rect x="0" width="40" height="100%" fill="#D4E5F3" />
              <rect x="40" width="40" height="100%" fill="#ffffff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stripes)" />
        </svg>
      </div>

      <div className="pointer-events-none absolute -top-20 -left-24 h-64 w-64 rounded-full bg-[#F0A0B5]/30 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute bottom-16 -right-20 h-72 w-72 rounded-full bg-[#D7DE8C]/35 blur-3xl animate-pulse" style={{ animationDelay: "0.6s" }} />

      <div className="relative max-w-6xl mx-auto px-4 py-14 w-full">
        <div className="relative grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="text-center md:text-left">
            <div className="absolute top-6 left-2 md:left-auto md:right-4 animate-spin" style={{ animationDuration: "8s" }}>
              <Sparkles className="w-7 h-7 text-[#F0A0B5]" />
            </div>
            <div className="absolute top-20 right-4 md:right-20 animate-spin" style={{ animationDuration: "9s" }}>
              <div className="bg-[#F0A0B5] rounded-lg p-2 shadow-lg">
                <Palette className="w-5 h-5 text-white" />
              </div>
              </div>
              <div className="absolute bottom-10 left-20 -rotate-12 animate-pulse">
                <div className="bg-[#D7DE8C] rounded-full p-5 shadow-lg">
                  <Computer className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="absolute bottom-20 right-10 animate-bounce" style={{ animationDuration: '5s' }}>
                <div className="bg-[#97A53E] rounded-lg px-4 py-2 text-white text-xs rotate-6 shadow-lg">
                  ✨ coding ✨
                </div>
              </div>
              

              <ScrollReveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#F0A0B5]/30 bg-white/70 px-4 py-2 text-xs tracking-[0.24em] text-[#97A53E] backdrop-blur-sm">
                  <Stars className="h-3.5 w-3.5" />
                  CREATIVE + TECHNICAL
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.06}>
                <div className="mt-5 max-w-2xl rounded-2xl border border-purple-200 bg-purple-50/90 p-7 shadow-lg">
                  <h1 className="text-4xl md:text-6xl leading-tight">
                    <span className="block text-[#F0A0B5]">full stack engineer</span>
                    <span className="block text-[#97A53E]">React · TypeScript · Node.js</span>
                    <span className="block text-gray-700">crafting software that</span>
                    <span className="block text-[#F0A0B5] italic">feels magical & ships fast</span>
                  </h1>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="mt-6 max-w-xl text-gray-700 leading-relaxed text-sm md:text-base">
                  I blend clean engineering with playful design to build products people actually enjoy using.
                  From idea to production, I care about delightful details and solid architecture.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.14}>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-full bg-[#F0A0B5] px-5 py-3 text-sm text-white shadow-lg transition-transform hover:-translate-y-0.5"
                  >
                    View Projects
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-[#97A53E]/40 bg-white/90 px-5 py-3 text-sm text-[#97A53E] shadow-sm transition-transform hover:-translate-y-0.5"
                  >
                    Let&apos;s build together
                    <Rocket className="h-4 w-4" />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal>
              <div className="max-w-xs mx-auto mt-12 bg-[#FFF9B1] shadow-lg 
                border border-yellow-200 rounded-sm 
                -rotate-2 relative p-6">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 
                  w-16 h-6 bg-red-300/70 backdrop-blur-[1px] -rotate-3deg] 
                  shadow-sm rounded-sm" />
                <p className="text-gray-700 leading-relaxed text-sm">
                  your next hire is<br />
                  totally in reach, you just<br />
                  need a sprinkle of<br />
                  <span className="text-[#F0A0B5] font-medium">me</span>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
    </section>
  );
}
