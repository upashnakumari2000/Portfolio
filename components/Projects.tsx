import { ProjectCard } from "@/components/ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "one ✨",
    description: "A something here",
    tags: ["React","Tailwind"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "two 💕",
    description: "A something here",
    tags: ["React"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "three ✏️",
    description: "A something here",
    tags: ["React"],
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "four 🎨",
    description: "A something here",
    tags: ["React"],
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "five ☕",
    description: "A something here",
    tags: ["React"],
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "six 🌟",
    description: "A something here",
    tags: ["React"],
    link: "#",
    github: "#",
  },
];

const rotations = ["rotate-1", "-rotate-1", "rotate-2", "-rotate-2"];

export function Projects() {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              github={project.github}
              rotation={rotations[i % rotations.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
