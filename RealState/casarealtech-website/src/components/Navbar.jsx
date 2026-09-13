import { useState } from 'react';
import { FaHome, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ currentPage, setCurrentPage }) => {
  // Mobile/Tablet menu toggle karne ke liye state
  const [isOpen, setIsOpen] = useState(false);

  // Navigation Links ka data (path → page id)
  const navLinks = [
    { name: 'Home', page: 'home' },
    { name: 'Properties', page: 'properties' },
    { name: 'About Us', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Contact', page: 'contact' },
  ];

  // Navigate helper
  const goTo = (page) => {
    if (setCurrentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false); // mobile menu band karo
  };

  return (
    <nav className="bg-[#0B1B32] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* 1. LOGO SECTION (Mobile, Tablet, Desktop sabme same) */}
          <button 
            onClick={() => goTo('home')} 
            className="flex items-center gap-3 text-left"
          >
            <div className="text-amber-500 text-3xl">
              <FaHome />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-wide">Casa Realtech</h1>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">Private Limited</p>
            </div>
          </button>

          {/* 2. DESKTOP MENU (Sirf bade screens par dikhega) */}
          <div className="hidden lg:flex gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => goTo(link.page)}
                className={`transition duration-300 hover:text-amber-500 ${
                  currentPage === link.page ? 'text-amber-500 font-semibold' : 'text-white'
                }`}
              >
                {link.name}
              </button>
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

            {/* Mobile ke liye sirf WhatsApp Icon */}
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
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* 4. MOBILE & TABLET DROPDOWN MENU */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-[#0B1B32] border-t border-gray-800 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4 text-base font-medium">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => goTo(link.page)}
              className={`text-left transition duration-300 py-2 border-b border-gray-800/50 last:border-0 hover:text-amber-500 ${
                currentPage === link.page ? 'text-amber-500 font-semibold' : 'text-white'
              }`}
            >
              {link.name}
            </button>
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