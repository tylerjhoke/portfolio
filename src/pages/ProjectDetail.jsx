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
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-semibold text-red-600">Project not found</h2>
        <Link to="/projects">
          <button className="mt-6 px-5 py-2 border border-gray-400 text-gray-700 rounded hover:bg-gray-100 transition">
            Back to Projects
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{project.name}</h1>

      <p className="text-lg text-gray-700 mb-4">{project.body}</p>

      <p className="text-sm text-gray-600 mb-6">
        <strong>Tags:</strong>{" "}
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs font-medium mr-2"
          >
            {tag}
          </span>
        ))}
      </p>

      <Link to="/projects">
        <button className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white transition">
          Back to Projects
        </button>
      </Link>

      {project.image && (
        <img
          src={project.image}
          alt={project.name}
          className="w-full rounded-md shadow-sm mb-6"
        />
      )}
      {project.image1 && (
        <img
          src={project.image1}
          alt={project.name}
          className="w-full rounded-md shadow-sm mb-6"
        />
      )}
      {project.image2 && (
        <img
          src={project.image2}
          alt={project.name}
          className="w-full rounded-md shadow-sm mb-6"
        />
      )}
      {project.image3 && (
        <img
          src={project.image3}
          alt={project.name}
          className="w-full rounded-md shadow-sm mb-6"
        />
      )}
      {project.image4 && (
        <img
          src={project.image4}
          alt={project.name}
          className="w-full rounded-md shadow-sm mb-6"
        />
      )}

      {project.video && (
        <div className="mb-6">
          <video
            src={project.video}
            controls
            className="w-full rounded-md shadow-sm"
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {project.pdf && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Full Report (PDF)</h3>
          <div className="w-full h-[80vh] rounded-xl shadow-lg overflow-hidden border border-gray-300">
            <iframe
              src={project.pdf}
              title="report"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
