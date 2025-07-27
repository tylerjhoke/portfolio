import React, { useState } from "react"; // Import useState
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-zinc-900/100 text-white shadow-md sticky top-0 z-50 backdrop-blur-xl">
      <div className="max-w-10xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Name + LinkedIn */}
        <div className="flex items-center gap-4 whitespace-nowrap">
          <Link
            to="/"
            className="text-xl font-semibold text-white hover:text-red-600 transition-colors duration-200"
            onClick={closeMenu} // Close menu if clicking logo while menu is open
          >
            Tyler Hoke
          </Link>
          <a
            href="https://www.linkedin.com/in/tylerjhoke/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
            onClick={closeMenu} // Close menu if clicking LinkedIn while menu is open
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/linkedin.svg`}
              alt="LinkedIn"
              className="w-6 h-6 hover:scale-110 transition-transform duration-200"
            />
          </a>
        </div>

        {/* Right: Desktop Navigation Links */}
        <div className="hidden sm:flex items-center gap-6">
          <Link to="/" className="text-white hover:text-red-600 transition">Home</Link>
          <Link to="/projects" className="text-white hover:text-red-600 transition">Projects</Link>
          <Link to="/work_experience" className="text-white hover:text-red-600 transition">Work Experience</Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="sm:hidden fixed inset-0 bg-gray-900 bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8">
          <button
            className="absolute top-4 right-4 text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <Link to="/" className="text-4xl text-white hover:text-red-600 transition" onClick={closeMenu}>Home</Link>
          <Link to="/projects" className="text-4xl text-white hover:text-red-400 transition" onClick={closeMenu}>Projects</Link>
          <Link to="/work_experience" className="text-4xl text-white hover:text-red-400 transition" onClick={closeMenu}>Past Work</Link>
          {/* Add more mobile navigation links here as needed */}
        </div>
      )}
    </nav>
  );
}