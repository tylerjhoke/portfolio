import React, { useState } from "react";
import { projects } from "../projects";
import ProjectCard from "../components/ProjectCard";
import TagsFilter from "../components/TagsFilter";
import { Link } from "react-router-dom";

// Utility: get unique tags from all projects
const getUniqueTags = (projects) =>
  [...new Set(projects.flatMap(project => project.tags))];

// Define the categories for the skills
const mechanicalSkills = [
  "SolidWorks",
  "3D Printing",
  "FEA",
  "MATLAB",
  "Product Design",
  "Mechanical Analysis",
  "Simulation",

];

export default function Projects() {
  const [selectedTags, setSelectedTags] = useState([]);
  const allTags = getUniqueTags(projects);

  // Split tags into categories
  const mechanicalTags = allTags.filter(tag => mechanicalSkills.includes(tag)).sort();
  const interdisciplinaryTags = allTags.filter(tag => !mechanicalSkills.includes(tag)).sort();

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
    <section className="animate-fade max-w-7xl mx-auto px-6 py-16 bg-gray-50 rounded-md">
      <h2 className="text-3xl font-semibold text-gray-900 mb-8 border-b border-gray-300 pb-2">
        Projects
      </h2>
      
      {/* Tags Filter for Mechanical Skills */}
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Mechanical Skills</h3>
      <TagsFilter 
        allTags={mechanicalTags} 
        selectedTags={selectedTags} 
        onTagClick={handleTagClick} 
        className="mb-8"
      />
      
      {/* Tags Filter for Interdisciplinary Skills */}
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Interdisciplinary Skills</h3>
      <TagsFilter 
        allTags={interdisciplinaryTags} 
        selectedTags={selectedTags} 
        onTagClick={handleTagClick} 
        className="mb-8"
      />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <ProjectCard key={project.name} project={project} />
          ))
        ) : (
          <p className="text-gray-600 col-span-full text-center">
            No projects match the selected skills.
          </p>
        )}
      </div>

      {/* Back Button */}
      <div className="mt-12 text-center">
        <Link to="/">
          <button
            type="button"
            className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white transition">
          Back to Home
          </button>
        </Link>
      </div>
    </section>
  );
}