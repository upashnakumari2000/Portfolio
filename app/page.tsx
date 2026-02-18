import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { WaveTransition } from "@/components/WaveTransition";
import { TransitionLast } from "@/components/TransitionLast";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { LoadIntro } from "@/components/LoadIntro";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Page() {
  return (
      <div className="min-h-screen relative">
        <LoadIntro />
        <div className="min-h-screen">
          <ScrollReveal>
            <Navbar />
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
          <Hero />
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
          <Marquee 
            items={["React", "TypeScript", "Node.js", "Full Stack Engineer", "Python", "Sydney, AU", "Clean Code", "Docker"]}
            bgColor="bg-[#F0A0B5]"
            textColor="text-white"
            italic={true}
            separator="✦"
            speed="40s"
          />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
          <Projects />
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
          <WaveTransition />
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
          <About />
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
          <TransitionLast />
          </ScrollReveal>
          <ScrollReveal delay={0.18}>
          <Contact />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
          <Footer />
          </ScrollReveal>
        </div>
      </div>
  );
}