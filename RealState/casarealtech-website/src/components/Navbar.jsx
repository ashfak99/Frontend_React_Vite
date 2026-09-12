import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  // Mobile/Tablet menu toggle karne ke liye state
  const [isOpen, setIsOpen] = useState(false);

  // Navigation Links ka data
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-[#0B1B32] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* 1. LOGO SECTION (Mobile, Tablet, Desktop sabme same) */}
          <Link to="/" className="flex items-center gap-3">
            <div className="text-amber-500 text-3xl">
              <FaHome />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-wide">Casa Realtech</h1>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">Private Limited</p>
            </div>
          </Link>

          {/* 2. DESKTOP MENU (Sirf bade screens par dikhega) */}
          <div className="hidden lg:flex gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="hover:text-amber-500 transition duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* 3. RIGHT SIDE ACTIONS (WhatsApp + Hamburger) */}
          <div className="flex items-center gap-4">
            
            {/* Tablet & Desktop ke liye WhatsApp Button */}
            <a
              href="https://wa.me/919830334567"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex border border-green-500 text-green-500 px-4 py-2 rounded-full items-center gap-2 hover:bg-green-500 hover:text-white transition duration-300 text-sm font-medium"
            >
              <FaWhatsapp size={18} />
              <span>WhatsApp Us</span>
            </a>

            {/* Mobile ke liye sirf WhatsApp Icon (kyunki jagah kam hoti hai) */}
            <a
              href="https://wa.me/919830334567"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden text-green-500 text-2xl"
            >
              <FaWhatsapp />
            </a>

            {/* Hamburger Menu Button (Mobile aur Tablet ke liye) */}
            <button
              className="lg:hidden text-2xl text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* 4. MOBILE & TABLET DROPDOWN MENU */}
      {/* Jab hamburger click hoga tabhi ye menu smoothly open hoga */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-[#0B1B32] border-t border-gray-800 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4 text-base font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-amber-500 transition duration-300 py-2 border-b border-gray-800/50 last:border-0"
              onClick={() => setIsOpen(false)} // Link click hone par menu band ho jaye
            >
              {link.name}
            </Link>
          ))}
          
          {/* Mobile ke liye menu ke andar ek full-width WhatsApp button */}
          <a
            href="https://wa.me/919830334567"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-3 rounded-md font-semibold mt-4"
          >
            <FaWhatsapp size={20} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;