import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../projects";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="project-detail">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>{project.description}</p>
      <p><strong>Tags:</strong> {project.tags.join(", ")}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
}
