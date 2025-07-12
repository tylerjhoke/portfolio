import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-logo">Tyler Hoke</Link>
        {/* LinkedIn Button (added here) */}
        <a
          href="https://www.linkedin.com/in/tylerjhoke/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-icon-link" // Add a class for styling
          
        >
        <img
            src="public/assets/images/linkedin.svg" // This path is now confirmed correct!
            alt="LinkedIn Profile"
            className="linkedin-icon"
            style={{ border: '1px solid white' }}
        />
        
        </a>


        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          {/* Add more links like About, Resume, etc. later */}
        </div>
      </div>
    </nav>
  );
}
