import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  rotation?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  github,
  rotation = "rotate-0",
}: ProjectCardProps) {
  return (
    <div className="group cursor-pointer">
      <div
        className={`
          bg-white rounded-lg overflow-hidden shadow-lg
          hover:shadow-xl transition-all duration-300
          ${rotation} hover:rotate-0
        `}
      >
        
        <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-400">
          image
        </div>

        <div className="p-4 space-y-2">
          <p className="text-sm text-gray-700 italic">{title}</p>

          <p className="text-xs text-gray-500">{description}</p>

          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map(tag => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-[#F0A0B5]/20 text-[#F0A0B5] rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3 pt-3 opacity-0 group-hover:opacity-100 transition-opacity">
            {link && (
              <a href={link} target="_blank">
                <ExternalLink className="w-4 h-4 text-gray-600 hover:text-black" />
              </a>
            )}
            {github && (
              <a href={github} target="_blank">
                <Github className="w-4 h-4 text-gray-600 hover:text-black" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
