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
    <div className="group cursor-pointer">
      <div
        className={"bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"}>
        
        <div className="h-40 bg-gray-100 flex items-center justify-center text-gray-400">
          {image ? (
          <NextImage 
            src={image}
            alt={title}
            fill
            className="object-cover"
            />
        ) : (
          <div className="">
            <ImageOff className="w-8 h-8" />
            <span className="">No image yet</span>
          </div>
        )}
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
              <a href={link} 
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} live`}
              >
                <ExternalLink className="w-4 h-4 text-gray-600 hover:text-black" />
              </a>
            )}
            {github && (
              <a 
                href={github} 
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} on GitHub`}
              >
                <Github className="w-4 h-4 text-gray-600 hover:text-black" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
