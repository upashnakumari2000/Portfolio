import { Navbar } from "@/components/Navbar";
import { Hero } from "@/pages/Hero";
import { Projects } from "@/pages/Projects";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { WaveTransition } from "@/components/WaveTransition";
import { TransitionLast } from "@/components/TransitionLast";
import { Footer } from "@/pages/Footer";
import { Marquee } from "@/components/Marquee";
import { LoadIntro } from "@/pages/LoadIntro";

export default function Page() {
  return (
    <div className="min-h-screen relative">
      <LoadIntro />
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Marquee
          items={["React",
            "TypeScript",
            "Node.js",
            "Figma",
            "Tailwind CSS",
            "PostgreSQL",
            "Full Stack Engineering"]}
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