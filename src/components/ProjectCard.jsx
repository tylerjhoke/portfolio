import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.name} className="project-image" />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="tags">
        {project.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
        View Project
      </a>
    </div>
  );
}