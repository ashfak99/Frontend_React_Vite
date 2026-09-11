import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B1120]/90 backdrop-blur-md border-b border-[#233554]">
      <nav className="flex justify-between items-center px-4 md:px-16 py-3 max-w-7xl mx-auto relative">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-blue-500 text-2xl font-bold">🕊️</div>
          <span className="text-xl font-bold tracking-wide">Ashfak Alam</span>
        </div>

        {/* Desktop Links (Hidden on Mobile) */}
        <ul className="hidden md:flex space-x-8 text-sm text-gray-300">
          <li><a href="#home" className="text-blue-500 border-b-2 border-blue-500 pb-1">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500 transition pb-1">About</a></li>
          <li><a href="#projects" className="hover:text-blue-500 transition pb-1">Projects</a></li>
          <li><a href="#skills" className="hover:text-blue-500 transition pb-1">Skills</a></li>
          <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition pb-1">Resume</a></li>
          <li><a href="#contact" className="hover:text-blue-500 transition pb-1">Contact</a></li>
        </ul>

        {/* Get in Touch Button (Desktop Only) */}
        <a href="#contact" className="hidden md:flex border border-blue-500 text-blue-400 px-5 py-2 rounded-full text-sm hover:bg-blue-600 hover:text-white transition duration-300 items-center gap-2">
          Get in Touch <span>→</span>
        </a>

        {/* Mobile Hamburger Icon */}
        <button onClick={toggleMenu} className="md:hidden text-gray-300 text-2xl focus:outline-none">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0B1120] border-b border-[#233554] flex flex-col items-center py-6 space-y-4 md:hidden shadow-xl">
            <a href="#home" onClick={toggleMenu} className="text-blue-500 text-sm font-medium">Home</a>
            <a href="#about" onClick={toggleMenu} className="text-gray-300 hover:text-blue-500 text-sm font-medium">About</a>
            <a href="#projects" onClick={toggleMenu} className="text-gray-300 hover:text-blue-500 text-sm font-medium">Projects</a>
            <a href="#skills" onClick={toggleMenu} className="text-gray-300 hover:text-blue-500 text-sm font-medium">Skills</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 text-sm font-medium">Resume</a>
            <a href="#contact" onClick={toggleMenu} className="text-gray-300 hover:text-blue-500 text-sm font-medium">Contact</a>
            <a href="#contact" onClick={toggleMenu} className="mt-2 border border-blue-500 text-blue-400 px-6 py-2 rounded-full text-sm hover:bg-blue-600 hover:text-white transition">
              Get in Touch →
            </a>
          </div>
        )}

      </nav>
    </header>
  );
};

export default Navbar;