import { Navbar } from "@/components/Navbar";
import { Hero }  from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function Page() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}