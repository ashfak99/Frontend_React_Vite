import React from 'react';
import { FaGraduationCap, FaCode, FaTerminal, FaBookOpen, FaBullseye, FaCheck } from 'react-icons/fa';

const Experience = () => {
  // Timeline Data
  const timelineData = [
    {
      icon: <FaGraduationCap />,
      title: "Diploma in Computer Engineering",
      subtitle: "Jamia Millia Islamia",
      date: "Jan 2022 - Jan 2025",
    },
    {
      icon: <FaGraduationCap />,
      title: "B.Tech in Computer Science & Engineering",
      subtitle: "Aliah University, Kolkata",
      date: "July 2025 - Present",
    },
    {
      icon: <FaBookOpen />,
      title: "Learning & Building",
      subtitle: "Backend | AI | DSA",
      date: "Daily Progress",
    }
  ];

  // Goals Data
  const goals = [
    "SIH Team Lead",
    "AI Engineer",
    "Product Company (C++ + Node.js)"
  ];

  return (
    <section id="experience" className="bg-[#f8f9fa] text-gray-800 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row gap-16">
        
        {/* LEFT SIDE: Timeline */}
        <div className="md:w-2/3">
          <div className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-4 bg-blue-50 px-3 py-1 rounded-full text-sm">
            <FaBookOpen /> My Journey
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Education & Experience
          </h2>

          {/* Vertical Timeline Line */}
          <div className="relative border-l-2 border-blue-200 ml-4 space-y-10">
            {timelineData.map((item, index) => (
              <div key={index} className="relative pl-10">
                
                {/* Timeline Dot / Icon */}
                <div className="absolute -left-[22px] top-0 bg-white p-2 rounded-full border-2 border-blue-500 text-blue-500 shadow-sm">
                  {item.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                <p className="text-blue-600 font-medium text-sm">{item.subtitle}</p>
                <p className="text-gray-400 text-xs mt-1">{item.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: My Goals */}
        <div className="md:w-1/3">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
            <div className="flex items-center gap-3 mb-6">
              <FaBullseye className="text-blue-600 text-2xl" />
              <h3 className="text-xl font-bold text-gray-800">My Goals</h3>
            </div>
            
            <ul className="space-y-5">
              {goals.map((goal, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600 text-sm">
                  <FaCheck className="text-blue-500 mt-1 flex-shrink-0" size={12} />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;