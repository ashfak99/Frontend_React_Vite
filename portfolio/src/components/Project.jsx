import React from 'react';
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  // Projects ka data (GitHub repos ke hisaab se)
  const projectsData = [
    {
      title: "EnhanceSkills",
      subtitle: "Android Skill Tracking App",
      desc: "An Android application built with Kotlin and Gradle to help users enhance and track their skills efficiently.",
      tech: ["Kotlin", "Android", "Gradle"],
      icon: "📱",
      github: "https://github.com/ashfak99/EnhanceSkills"
    },
    {
      title: "Rate-Limiter",
      subtitle: "Distributed Rate Limiter Middleware",
      desc: "A high-performance, distributed rate limiter middleware for Node.js using Redis, implementing the Sliding Window Log algorithm for precise request limiting.",
      tech: ["Node.js", "Redis", "Express.js"],
      icon: "⏱️",
      github: "https://github.com/ashfak99/Rate-Limiter"
    },
    {
      title: "Face-Blur-System",
      subtitle: "AI Privacy Protection Tool",
      desc: "A Streamlit web app that detects and blurs faces in images using MediaPipe and OpenCV, with adjustable blur intensity and real-time preview.",
      tech: ["Python", "Streamlit", "OpenCV", "MediaPipe"],
      icon: "🔒",
      github: "https://github.com/ashfak99/Face-Blur-System"
    },
    {
      title: "Frontend Projects",
      subtitle: "React + Vite Web Apps",
      desc: "A collection of modern frontend projects built with React and Vite, including a fully responsive gym website and a personal portfolio.",
      tech: ["React", "Vite", "Tailwind CSS"],
      icon: "⚛️",
      github: "https://github.com/ashfak99/Frontend_React_Vite"
    }
  ];

  return (
    <section id="projects" className="bg-[#0B1120] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-blue-400 font-semibold mb-3 bg-blue-900/30 border border-blue-800/50 px-3 py-1 rounded-full text-xs">
              <FaGithub /> Featured Projects
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              My Recent <span className="text-blue-500">Work</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xl">
              A collection of projects built with modern technologies, focused on backend, AI and real-world problem solving.
            </p>
          </div>
          
          <a 
            href="https://github.com/ashfak99" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-2 transition"
          >
            View All Projects <FaArrowRight size={12} />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="bg-[#112240] border border-[#233554] rounded-2xl p-6 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition duration-300 group"
            >
              <div>
                {/* Project Icon & Arrow */}
                <div className="flex justify-between items-start mb-4">
                  <div className="text-3xl bg-[#0B1120] p-2 rounded-lg border border-[#233554]">
                    {project.icon}
                  </div>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-400 transition"
                  >
                    <FaExternalLinkAlt size={14} />
                  </a>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition">
                  {project.title}
                </h3>
                <p className="text-xs text-blue-400 font-medium mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-xs leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>

              {/* Tech Stack Badges */}
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="bg-[#0B1120] border border-[#233554] text-gray-300 text-[10px] px-2 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 text-xs font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300"
                >
                  View Project <FaArrowRight size={10} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;