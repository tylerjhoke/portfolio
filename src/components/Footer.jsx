import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center py-8 px-4 mt-12 bg-gray-100 text-gray-600 text-sm">
      <p className="my-2">&copy; {new Date().getFullYear()} Tyler Hoke. All rights reserved.</p>
      {/* LinkedIn Icon Attribution */}
      <p className="my-2">
        <a 
          href="https://www.flaticon.com/free-icons/linkedin" 
          title="linkedin icons" 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline hover:text-gray-800 transition-colors" // Tailwind classes for link styling
        >
          Linkedin icons created by Freepik - Flaticon
        </a>
      </p>
    </footer>
  );
}
