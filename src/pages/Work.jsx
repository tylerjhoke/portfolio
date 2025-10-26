import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you have react-router-dom installed
import { workExperiences } from '../work.js'; // Import the data from the new file

export default function WorkExperience() {
  return (
    <div className="animate-fade bg-white min-h-screen">
      {/* Hero Section */}
      <div className="border-b border-gray-200 py-20 mb-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-black mb-6 tracking-tight">
            Experience
          </h1>
          <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
            Professional work experience and internships
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          {workExperiences.map((experience) => (
            <div key={experience.id} className="border-b border-gray-200 pb-12 last:border-0">
              <div className="mb-6">
                <h3 className="text-2xl font-light text-black mb-2">{experience.company}</h3>
                <p className="text-lg font-light text-gray-700 mb-2">{experience.title}</p>
                <p className="text-sm uppercase tracking-wider text-gray-500 font-light">
                  {experience.duration} • {experience.location}
                </p>
              </div>
              <ul className="space-y-3 text-gray-700 font-light leading-relaxed">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 text-black">—</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
