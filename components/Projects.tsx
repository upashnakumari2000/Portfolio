'use client'
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Projects() {
  return (
    <section id="projects" className="bg-[#F4E0E1] py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="text-xs tracking-[0.24em] text-[#97A53E]">SELECTED WORK</p>
            <h2 className="mt-3 text-4xl text-[#F0A0B5] md:text-5xl">Projects with product impact</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">
              A few builds that show how I combine engineering quality with practical UX decisions.
            </p>
          </div>
        </ScrollReveal>

<div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={0.04 * index}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                link={project.link}
                github={project.github}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}