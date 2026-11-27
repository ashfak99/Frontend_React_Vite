import { FaLayerGroup } from 'react-icons/fa';
import { skillGroups } from '../data/portfolioData';

const Skills = () => (
  <section id="skills" className="section skills-section">
    <div className="container">
      <div className="section-heading reveal">
        <div className="eyebrow"><FaLayerGroup /> Technical skills</div>
        <h2>Tools for building dependable systems.</h2>
        <p>A practical working stack across backend development, databases, AI integration, and computer science fundamentals.</p>
      </div>
      <div className="skills-grid reveal">
        {skillGroups.map((group) => (
          <article className="skill-card card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-list">
              {group.items.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </article>
        ))}
      </div>
    </div>
    <style>{`
      .skills-section{background:var(--surface)}
      .skills-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
      .skill-card{padding:22px}.skill-card h3{margin:0 0 18px;font-size:.82rem;letter-spacing:.08em;text-transform:uppercase}
      .skill-list{display:flex;flex-wrap:wrap;gap:8px}.skill-list span{padding:7px 9px;border:1px solid var(--border);border-radius:7px;background:var(--surface-2);color:var(--muted);font-size:.78rem}
      @media(max-width:768px){.skills-grid{grid-template-columns:1fr 1fr}}
      @media(max-width:480px){.skills-grid{grid-template-columns:1fr}}
    `}</style>
  </section>
);

export default Skills;
