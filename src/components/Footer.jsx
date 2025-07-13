import React from 'react';

export default function Footer() {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} Tyler Hoke. All rights reserved.</p>
      {/* LinkedIn Icon Attribution */}
      <p className="attribution-text">
        <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by Freepik - Flaticon</a>
      </p>
    </footer>
  );
}