'use client'
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useEffect, useRef } from 'react';

export function Projects() {
  const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    wrapperRefs.current.forEach((el) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0) scale(1)";
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="projects" className="bg-[#F4E0E1] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#F0A0B5] mb-4">
            My Projects
          </h2>
          <p className="text-gray-700">
            Bringing creative visions to life ✨
          </p>
        </div>

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="sticky"
              style={{ top: `${72 + i * 16}px` }}
            >
              <div
                ref={(el) => { wrapperRefs.current[i] = el; }}
                style={{
                  opacity: 0,
                  transform: "translateY(32px) scale(0.98)",
                  transition: `opacity 0.5s ease ${i * 60}ms, transform 0.5s ease ${i * 60}ms`,
                  marginBottom: "1rem",
                }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  image={project.image}
                  link={project.link}
                  github={project.github}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
