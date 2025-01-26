import React from "react";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link?: string; // Make `link` optional
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  image,
  link,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain object-center"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          {/* Conditionally render the ExternalLink icon only if `link` is provided */}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <ExternalLink
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
                size={20}
              />
            </a>
          )}
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;