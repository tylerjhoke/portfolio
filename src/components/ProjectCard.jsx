import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer group"
    >
      <div className="aspect-[4/3] overflow-hidden mb-4">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-light text-black mb-2 group-hover:underline">
        {project.name}
      </h3>
      <p className="text-gray-600 text-sm font-light leading-relaxed mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs uppercase tracking-wider text-gray-500 font-light"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
