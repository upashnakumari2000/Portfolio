export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "one ✨",
    description: "A something here",
    tags: ["React", "Tailwind"],
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