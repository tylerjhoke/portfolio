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
      className="cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 p-5 flex flex-col"
    >
      <img
        src={project.image}
        alt={project.name}
        className="rounded-md mb-4 h-48 w-full object-cover"
      />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {project.name}
      </h3>
      <p className="text-gray-600 text-sm flex-grow">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
