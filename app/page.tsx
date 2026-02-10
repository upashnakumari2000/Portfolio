import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Transition } from "@/components/Transition";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { WaveTransition } from "@/components/WaveTransition";
import { TransitionLast } from "@/components/TransitonLast";

export default function Page() {
  return (
      <div className="min-h-screen relative">
        <div className="min-h-screen">
          <Navbar />
          <Hero />
          <Transition />
          <Projects />
          <WaveTransition />
          <About />
          <TransitionLast />
          <Contact />
        </div>
      </div>
  );
}