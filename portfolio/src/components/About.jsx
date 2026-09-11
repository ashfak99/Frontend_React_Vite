import React from 'react';
import { FaUser, FaCode, FaTrophy, FaClock } from 'react-icons/fa';

const About = () => {
  // Tech Stack ka data
  const techStack = [
    { name: "Python", icon: "🐍" },
    { name: "FastAPI", icon: "⚡" },
    { name: "Node.js", icon: "🟢" },
    { name: "JavaScript", icon: "🟨" },
    { name: "C++", icon: "🔵" },
    { name: "MySQL", icon: "🐬" },
    { name: "MongoDB", icon: "🍃" },
    { name: "SQLite", icon: "🗄️" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Docker", icon: "🐳" },
    { name: "Git", icon: "🔴" },
    { name: "Linux", icon: "🐧" },
  ];

  return (
    // Light background section
    <section id="about" className="bg-[#f8f9fa] text-gray-800 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-12">
        
        {/* LEFT SIDE: About Me */}
        <div className="md:w-1/2">
          <div className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-4 bg-blue-50 px-3 py-1 rounded-full text-sm">
            <FaUser /> About Me
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            I'm <span className="text-blue-600">Ashfak Alam</span>
          </h2>
          
          <p className="text-gray-600 mb-4 leading-relaxed">
            I'm a B.Tech student at Aliah University, Kolkata, with a strong interest in backend development and AI. I love working on various projects ranging from web applications to AI-powered systems.
          </p>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            I'm passionate about solving real-world problems, participating in hackathons and continuously learning new technologies.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
              <FaCode className="text-blue-500 mx-auto mb-2 text-xl" />
              <h3 className="text-2xl font-bold">3+</h3>
              <p className="text-xs text-gray-500">Projects Built</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
              <FaTrophy className="text-blue-500 mx-auto mb-2 text-xl" />
              <h3 className="text-2xl font-bold">2+</h3>
              <p className="text-xs text-gray-500">Hackathons</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
              <FaClock className="text-blue-500 mx-auto mb-2 text-xl" />
              <h3 className="text-2xl font-bold">1+</h3>
              <p className="text-xs text-gray-500">Years of Coding</p>
            </div>
          </div>

          {/* Signature */}
          <div className="text-4xl text-gray-700 font-serif italic">
            Ashfak Alam
          </div>
        </div>

        {/* RIGHT SIDE: Tech Stack */}
        <div id='skills' className="md:w-1/2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <FaCode className="text-blue-600 text-xl" />
            <h2 className="text-2xl font-bold">Tech Stack</h2>
          </div>
          <p className="text-gray-500 text-sm mb-6">My Technologies & Tools</p>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center p-3 border border-gray-100 rounded-xl bg-gray-50 hover:bg-blue-50 hover:border-blue-200 transition duration-300 cursor-pointer"
              >
                <span className="text-2xl mb-2">{tech.icon}</span>
                <span className="text-xs font-medium text-gray-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;