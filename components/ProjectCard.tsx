import { ExternalLink, Github, ImageOff } from "lucide-react";
import NextImage from "next/image"

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  link,
  github,
}: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#F0A0B5]/20 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-44 w-full bg-[#D4E5F3]/35">
        {image ? (
          <NextImage src={image} alt={title} fill className="object-cover" />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-gray-500">
            <ImageOff className="h-8 w-8" />
            <span className="text-xs">No preview image yet</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col space-y-3 p-4">
        <div>
          <h3 className="text-2xl text-gray-800">{title}</h3>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-600">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-[#F0A0B5]/15 px-3 py-1 text-xs text-[#F0A0B5]">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4 pt-1">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} live`}
              className="inline-flex items-center gap-2 text-sm text-[#97A53E] transition-colors hover:text-[#7f8d35]"
            >
              Live demo <ExternalLink className="h-4 w-4" />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} on GitHub`}
              className="inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900"
            >
              GitHub <Github className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
