import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-0 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Navigation links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">About</a>
          <a href="#skills" className="text-gray-700 hover:text-gray-900 transition-colors">Skills</a>
          <a href="#experience" className="text-gray-700 hover:text-gray-900 transition-colors">Experience</a>
          <a href="#portfolio" className="text-gray-700 hover:text-gray-900 transition-colors">Portfolio</a>
          <a href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors">Projects</a>
          <a href="#education" className="text-gray-700 hover:text-gray-900 transition-colors">Education</a>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          © 2025 Isiah Griffin. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;