import React, { useState } from "react";
import { projects } from "../projects";
import ProjectCard from "./ProjectCard";
import TagsFilter from "./TagsFilter";

// Utility: get unique tags from all projects
const getUniqueTags = (projects) =>
  [...new Set(projects.flatMap(project => project.tags))];

export default function Projects() {
  const [selectedTags, setSelectedTags] = useState([]);
  const allTags = getUniqueTags(projects);

  // Filter projects based on selected tags
  const filteredProjects = selectedTags.length === 0
    ? projects
    : projects.filter(project =>
        selectedTags.every(tag => project.tags.includes(tag))
      );

  const handleTagClick = (tag) => {
    setSelectedTags(selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag]
    );
  };

  return (
    <section>
      <h2>Projects</h2>
      <TagsFilter allTags={allTags} selectedTags={selectedTags} onTagClick={handleTagClick} />
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <ProjectCard key={project.name} project={project} />
        ))}
        {filteredProjects.length === 0 && <p>No projects match the selected skills.</p>}
      </div>
    </section>
  );
}