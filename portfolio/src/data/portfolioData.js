export const socialLinks = {
  github: 'https://github.com/ashfak99',
  linkedin: 'https://www.linkedin.com/in/ashfak-alam/',
  email: 'mailto:ashfakalam8423@gmail.com',
};

export const skillGroups = [
  { title: 'Programming', items: ['C++', 'Python', 'JavaScript', 'Kotlin'] },
  { title: 'Backend', items: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs'] },
  { title: 'Data', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
  { title: 'AI & Applications', items: ['LLMs', 'Generative AI', 'AI API Integration', 'Streamlit'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Docker', 'Linux'] },
  { title: 'Computer Science', items: ['Data Structures', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'] },
];

export const projects = [
  {
    title: 'ContribPilot',
    subtitle: 'AI-powered open-source contribution assistant',
    description: 'Helps developers find relevant GitHub issues, understand unfamiliar codebases, and use guided hints to contribute independently.',
    features: ['Issue matching and scoring', 'Repository-grounded AI breakdowns', 'Progressive hints', 'BYOK credential handling'],
    tech: ['Python', 'FastAPI', 'React', 'GitHub API', 'Groq'],
    github: 'https://github.com/ashfak99/ContribPilot',
    live: 'https://contribpilot.vercel.app',
  },
  {
    title: 'Rate-Limiter',
    subtitle: 'Distributed middleware for API traffic control',
    description: 'A Redis-backed Node.js middleware that applies precise sliding-window request limits across multiple application instances.',
    features: ['Sliding Window Log algorithm', 'Redis sorted-set operations', 'Distributed enforcement', 'Standard rate-limit headers'],
    tech: ['Node.js', 'Express.js', 'Redis'],
    github: 'https://github.com/ashfak99/Rate-Limiter',
  },
  {
    title: 'Face-Blur-System',
    subtitle: 'Privacy-first image processing application',
    description: 'A web tool that detects faces in uploaded images, provides adjustable privacy filtering, and enables the processed image to be downloaded.',
    features: ['MediaPipe face detection', 'Adjustable blur intensity', 'In-memory processing', 'Before-and-after preview'],
    tech: ['Python', 'Streamlit', 'OpenCV', 'MediaPipe'],
    github: 'https://github.com/ashfak99/Face-Blur-System',
  },
  {
    title: 'EnhanceSkills',
    subtitle: 'Android skill tracking application',
    description: 'An Android application built to organize and track personal skill-development activities.',
    features: ['Android UI', 'Structured skill tracking', 'Gradle build setup'],
    tech: ['Kotlin', 'Android', 'Gradle'],
    github: 'https://github.com/ashfak99/EnhanceSkills',
  },
];

export const education = [
  { degree: 'B.Tech in Computer Science & Engineering', institution: 'Aliah University', period: '2025 - 2028' },
  { degree: 'Diploma in Computer Engineering', institution: 'Jamia Millia Islamia', period: '2022 - 2025' },
];