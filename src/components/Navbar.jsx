
import { Link } from "react-router-dom";

export default function Navbar() {
  // Removed isMenuOpen state and toggleMenu/closeMenu functions as mobile menu is removed

  return (
    <nav className="bg-zinc-900/100 text-white shadow-md sticky top-0 z-50 backdrop-blur-xl">
      <div className="max-w-10xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Name + LinkedIn */}
        <div className="flex items-center gap-4 whitespace-nowrap">
          <Link
            to="/"
            className="text-xl font-semibold text-white hover:text-red-600 transition-colors duration-200"
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

        {/* Right: Desktop Navigation Links (now always visible) */}
        <div className="flex items-center gap-6"> {/* Removed 'hidden sm:flex' */}
          <Link to="/" className="text-white hover:text-red-600 transition">Home</Link>
          <Link to="/projects" className="text-white hover:text-red-600 transition">Projects</Link>
          <Link to="/work_experience" className="text-white hover:text-red-600 transition">Work Experience</Link>
        </div>

        {/* Hamburger Icon for Mobile - REMOVED */}
      </div>

      {/* Mobile Menu Overlay - REMOVED */}
    </nav>
  );
}
