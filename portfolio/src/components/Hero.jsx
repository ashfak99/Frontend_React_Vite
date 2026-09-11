import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import Photo from '../assets/Ashfak_Alam.webp'

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-16 py-16 flex flex-col md:flex-row items-center justify-between gap-12">
      
      {/* Left Side: Text Content */}
      <div className="md:w-1/2 flex flex-col items-start">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-[#233554] bg-[#112240] rounded-full px-4 py-1.5 text-xs text-green-400 mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Backend Developer | AI Engineer
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
          Hi, I'm <span className="text-blue-500">Ashfak Alam</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-200 font-semibold mb-6">
          Building Scalable Backend Systems <br /> & Exploring the Future of AI
        </h2>
        
        <p className="text-gray-400 mb-8 leading-relaxed max-w-lg">
          I'm a backend developer and AI enthusiast, currently pursuing B.Tech at Aliah University, Kolkata. I love working with Python, FastAPI, databases and building real-world solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center gap-2">
            View My Projects <span>→</span>
          </button>
          <button className="border border-gray-600 hover:border-gray-400 text-gray-300 px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center gap-2">
            Download Resume
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
  {/* GitHub Link */}
  <a 
    href="https://github.com/ashfak99" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-3 bg-[#112240] border border-[#233554] rounded-full text-gray-300 hover:text-blue-500 hover:border-blue-500 transition duration-300"
  >
    <FaGithub size={20} />
  </a>

  {/* LinkedIn Link */}
  <a 
    href="https://www.linkedin.com/feed/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-3 bg-[#112240] border border-[#233554] rounded-full text-gray-300 hover:text-blue-500 hover:border-blue-500 transition duration-300"
  >
    <FaLinkedin size={20} />
  </a>

  {/* WhatsApp Link (FaPaperPlane icon) */}
  <a 
    href="https://wa.me/919934648423" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-3 bg-[#112240] border border-[#233554] rounded-full text-gray-300 hover:text-blue-500 hover:border-blue-500 transition duration-300"
  >
    <FaPaperPlane size={20} />
  </a>

  {/* Email Link */}
  <a 
    href="mailto:ashfakalam8423@gmail.com" 
    className="p-3 bg-[#112240] border border-[#233554] rounded-full text-gray-300 hover:text-blue-500 hover:border-blue-500 transition duration-300"
  >
    <FaEnvelope size={20} />
  </a>
</div>
      </div>

      {/* Right Side: Profile Image */}
      <div className="md:w-1/2 flex justify-center md:justify-end relative">
        {/* Glowing effect background */}
        <div className="absolute w-72 h-72 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
        
        <div className="relative w-72 h-80 md:w-96 md:h-[450px] rounded-3xl border-2 border-[#233554] p-2 bg-[#112240] overflow-hidden shadow-2xl shadow-blue-900/30">
          {/* Yaha apni image ka path daalo */}
          <img 
            src={Photo} 
            alt="Ashfak Alam" 
            className="w-full h-full object-cover rounded-2xl"
          />
          
          {/* Floating text on image (Optional) */}
          <div className="absolute bottom-4 right-4 bg-[#0B1120]/80 backdrop-blur-sm border border-[#233554] p-2 rounded-lg text-xs text-blue-400 italic font-serif">
            Code<br/>Build<br/>Improve
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;