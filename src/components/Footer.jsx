import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light text-gray-600">
          <p>&copy; {new Date().getFullYear()} Tyler Hoke</p>
          <p className="text-xs uppercase tracking-wider">
            <a 
              href="https://www.linkedin.com/in/tylerjhoke/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
