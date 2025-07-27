import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you have react-router-dom installed
import { workExperiences } from '../work.js'; // Import the data from the new file

export default function WorkExperience() {
  return (
    <section className="animate-fade max-w-7xl mx-auto px-6 py-16 bg-gray-50 rounded-md">
      <h2 className="text-3xl font-semibold text-gray-900 mb-8 border-b border-gray-300 pb-2">
        Past Work Experience
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {workExperiences.map((experience) => (
          <div key={experience.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-1">{experience.company}</h3>
            <p className="text-lg text-indigo-700 font-medium mb-1">{experience.title}</p>
            <p className="text-sm text-gray-600 mb-4">{experience.duration} - {experience.location}</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              {experience.responsibilities.map((responsibility, index) => (
                <li key={index} className="text-base">{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
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
