import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../projects";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center bg-white min-h-screen">
        <h2 className="text-2xl font-light text-black mb-8">Project not found</h2>
        <Link to="/projects">
          <button className="text-sm uppercase tracking-wider border-b border-black pb-1 hover:pb-2 transition-all duration-300 font-light">
            Back to Projects
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen animate-fade">
      {/* Hero Section */}
      <div className="border-b border-gray-200 py-20 mb-16">
        <div className="max-w-6xl mx-auto px-6">
          <Link to="/projects" className="inline-block mb-12">
            <button className="text-sm uppercase tracking-wider font-light text-gray-600 hover:text-black transition-colors">
              ← Back to Projects
            </button>
          </Link>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-black mb-6 tracking-tight">
            {project.name}
          </h1>
          <p className="text-lg font-light text-gray-700 max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20">
        {/* Body Content */}
        <div className="mb-12 text-gray-700 font-light leading-relaxed text-lg">
          {project.body}
        </div>

        {/* Tags */}
        <div className="mb-16 pb-8 border-b border-gray-200">
          <p className="text-xs uppercase tracking-wider text-gray-500 font-light mb-4">Technologies</p>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs uppercase tracking-wider text-gray-500 font-light border border-gray-300 px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Images */}
        {project.image && (
          <img
            src={project.image}
            alt={project.name}
            className="w-full mb-8"
          />
        )}
        {project.image1 && (
          <img
            src={project.image1}
            alt={project.name}
            className="w-full mb-8"
          />
        )}
        {project.image2 && (
          <img
            src={project.image2}
            alt={project.name}
            className="w-full mb-8"
          />
        )}
        {project.image3 && (
          <img
            src={project.image3}
            alt={project.name}
            className="w-full mb-8"
          />
        )}
        {project.image4 && (
          <img
            src={project.image4}
            alt={project.name}
            className="w-full mb-8"
          />
        )}

        {/* Video */}
        {project.video && (
          <div className="mb-8">
            <video
              src={project.video}
              controls
              className="w-full"
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {/* PDF */}
        {project.pdf && (
          <div className="mt-16">
            <p className="text-sm uppercase tracking-wider text-gray-500 font-light mb-8">
              Full Report
            </p>
            <div className="w-full h-[80vh] border border-gray-200 overflow-hidden">
              <iframe
                src={project.pdf}
                title="report"
                className="w-full h-full"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
