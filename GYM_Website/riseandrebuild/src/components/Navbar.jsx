// src/components/Navbar.jsx
import { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Trainers', href: '#trainers' },
  { name: 'Membership', href: '#membership' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-black tracking-tighter text-white">
              RISE<span className="text-red-600">&</span>REBUILD
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wider text-neutral-400 hover:text-red-500 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#membership"
              className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold uppercase tracking-wider px-6 py-2.5 rounded-full transition-all duration-200"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-black/95 px-4 pt-2 pb-6 space-y-3 border-t border-neutral-800">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-semibold uppercase tracking-wider text-neutral-400 hover:text-red-500 transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#membership"
            onClick={() => setIsOpen(false)}
            className="block bg-red-600 hover:bg-red-700 text-white text-sm font-bold uppercase tracking-wider px-6 py-2.5 rounded-full text-center transition-all"
          >
            Join Now
          </a>
        </div>
      </div>
    </nav>
  );
}