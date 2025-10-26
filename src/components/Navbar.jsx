
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  // Removed isMenuOpen state and toggleMenu/closeMenu functions as mobile menu is removed

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Left: Name */}
        <Link
          to="/"
          className="text-xl font-light tracking-tight hover:opacity-70 transition-opacity duration-200 text-black"
        >
          Tyler Hoke
        </Link>

        {/* Right: Navigation Links */}
        <div className="flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm uppercase tracking-wider font-light transition-opacity duration-200 text-black ${
                isActive ? "underline underline-offset-8 decoration-2" : "hover:opacity-70"
              }`
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `text-sm uppercase tracking-wider font-light transition-opacity duration-200 text-black ${
                isActive ? "underline underline-offset-8 decoration-2" : "hover:opacity-70"
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/work_experience"
            className={({ isActive }) =>
              `text-sm uppercase tracking-wider font-light transition-opacity duration-200 text-black ${
                isActive ? "underline underline-offset-8 decoration-2" : "hover:opacity-70"
              }`
            }
          >
            Experience
          </NavLink>
          <a
            href="https://www.linkedin.com/in/tylerjhoke/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-70 transition-opacity duration-200"
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/linkedin.svg`}
              alt="LinkedIn"
              className="w-5 h-5"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
