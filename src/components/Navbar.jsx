import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left: Name + LinkedIn */}
        <div className="flex items-center gap-4 whitespace-nowrap">
          <Link
            to="/"
            className="text-xl font-semibold hover:text-red-400 transition-colors duration-200"
          >
            Tyler Hoke
          </Link>
          <a
            href="https://www.linkedin.com/in/tylerjhoke/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/linkedin.svg`}
              alt="LinkedIn"
              className="w-6 h-6 hover:scale-110 transition-transform duration-200"
            />
          </a>
        </div>

        {/* Right: Navigation Links */}
        <div className="hidden sm:flex items-center gap-6">
          <Link to="/" className="hover:text-red-400 transition">Home</Link>
          <Link to="/projects" className="hover:text-red-400 transition">Projects</Link>
        </div>
      </div>
    </nav>
  );
}
