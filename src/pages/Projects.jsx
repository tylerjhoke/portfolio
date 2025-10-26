import React, { useState } from "react";
import { projects } from "../projects";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

// Utility: get unique tags from all projects
const getUniqueTags = (projects) =>
  [...new Set(projects.flatMap(project => project.tags))];

// Define the categories for the skills
const mechanicalSkills = [
  "SolidWorks",
  "nTop",
  "ANSYS Fluent",
  "3D Printing",
  "FEA",
  "MATLAB",
  "Product Design",
  "Mechanical Analysis",
  "Simulation",
  "Fluid/Thermal Analysis",
  "Creo",
  "SolidWorks",
];

export default function Projects() {
  const [selectedTags, setSelectedTags] = useState([]);
  const allTags = getUniqueTags(projects);

  // Split tags into categories
  const mechanicalTags = allTags.filter(tag => mechanicalSkills.includes(tag)).sort();
  const interdisciplinaryTags = allTags.filter(tag => !mechanicalSkills.includes(tag)).sort();

  // Filter projects based on selected tags (OR logic)
  const filteredProjects = selectedTags.length === 0
    ? projects
    : projects.filter(project =>
        selectedTags.some(tag => project.tags.includes(tag))
      );

  const handleTagClick = (tag) => {
    setSelectedTags(selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

  return (
    <div className="animate-fade bg-white min-h-screen">
      {/* Hero Section */}
      <div className="border-b border-gray-200 py-20 mb-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-black mb-6 tracking-tight">
            Projects
          </h1>
          <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
            A collection of my personal and educational engineering projects
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Stats */}
        <div className="mb-8 text-sm font-light text-gray-600 flex items-center justify-between">
          <span>{filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}</span>
          {selectedTags.length > 0 && (
            <button
              onClick={clearFilters}
              className="uppercase tracking-wider text-xs hover:opacity-70 transition-opacity"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="mb-12 pb-8 border-b border-gray-200">
          <p className="text-xs uppercase tracking-wider text-gray-500 font-light mb-4">Filter</p>
          
          {/* Mechanical Skills */}
          <div className="mb-6">
            <p className="text-xs text-gray-500 font-light mb-3">Mechanical Skills</p>
            <div className="flex flex-wrap gap-2">
              {mechanicalTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`px-4 py-2 text-sm font-light transition-all uppercase tracking-wide ${
                    selectedTags.includes(tag)
                      ? 'bg-black text-white border border-black'
                      : 'bg-white text-black border border-gray-300 hover:border-black'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Interdisciplinary Skills */}
          <div>
            <p className="text-xs text-gray-500 font-light mb-3">Interdisciplinary Skills</p>
            <div className="flex flex-wrap gap-2">
              {interdisciplinaryTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`px-4 py-2 text-sm font-light transition-all uppercase tracking-wide ${
                    selectedTags.includes(tag)
                      ? 'bg-black text-white border border-black'
                      : 'bg-white text-black border border-gray-300 hover:border-black'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            {filteredProjects.map(project => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32">
            <p className="text-lg font-light text-gray-600 mb-4">No projects found</p>
            <button
              onClick={clearFilters}
              className="text-sm uppercase tracking-wider border-b border-black pb-1 hover:pb-2 transition-all duration-300 font-light"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}