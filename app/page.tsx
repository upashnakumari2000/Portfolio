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

export default function Page() {
  return (
      <div className="min-h-screen relative">
        <LoadIntro />
        <div className="min-h-screen">
          <Navbar />
          <Hero />
          <Marquee 
            items={["React", "TypeScript", "Node.js", "Full Stack Engineer", "Python", "Sydney, AU", "Clean Code", "Docker"]}
            bgColor="bg-[#F0A0B5]"
            textColor="text-white"
            italic={true}
            separator="✦"
            speed="40s"
          />
          <Projects />
          <WaveTransition />
          <About />
          <TransitionLast />
          <Contact />
          <Footer />
        </div>
      </div>
  );
}