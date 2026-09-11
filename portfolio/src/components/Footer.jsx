import React from 'react';
import { FaGithub, FaLinkedin, FaPaperPlane, FaEnvelope } from 'react-icons/fa'; // FaTwitter hata diya, FaPaperPlane add kiya

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] border-t border-[#233554] py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-blue-500 text-xl font-bold">🕊️</div>
          <span className="text-lg font-bold text-white">Ashfak Alam</span>
        </div>

        {/* Center Links */}
        <div className="flex gap-6 text-xs text-gray-400 font-medium">
          <a href="#" className="hover:text-blue-400 transition">Code</a>
          <span>•</span>
          <a href="#" className="hover:text-blue-400 transition">Learn</a>
          <span>•</span>
          <a href="#" className="hover:text-blue-400 transition">Build</a>
          <span>•</span>
          <a href="#" className="hover:text-blue-400 transition">Grow</a>
        </div>

        {/* Copyright & Socials */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-4">
            {/* GitHub */}
            <a 
              href="https://github.com/ashfak99" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaGithub size={14} />
            </a>
            
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/feed/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaLinkedin size={14} />
            </a>
            
            {/* WhatsApp */}
            <a 
              href="https://wa.me/919934648423" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaPaperPlane size={14} />
            </a>
            
            {/* Email */}
            <a 
              href="mailto:ashfakalam8423@gmail.com" 
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaEnvelope size={14} />
            </a>
          </div>
          <p className="text-[10px] text-gray-500">
            © 2025 Ashfak Alam. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;