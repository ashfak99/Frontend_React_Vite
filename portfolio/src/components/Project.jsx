import { FaArrowRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/portfolioData';

const Projects = () => (
  <section id="projects" className="section">
    <div className="container">
      <div className="section-heading reveal">
        <div className="eyebrow"><FaGithub /> Featured projects</div>
        <h2>Selected engineering work.</h2>
        <p>Projects spanning AI-assisted developer workflows, backend infrastructure, privacy tools, and Android applications.</p>
      </div>
      <div className="project-grid reveal">
        {projects.map((project, index) => (
          <article className="project-card card" key={project.title}>
            <div className="project-index">0{index + 1}</div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-description">{project.description}</p>
              <ul>
                {project.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <div className="tech-list">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">GitHub <FaArrowRight /></a>
              {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live demo <FaExternalLinkAlt /></a>}
            </div>
          </article>
        ))}
      </div>
    </div>
    <style>{`
      .project-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
      .project-card{position:relative;display:flex;flex-direction:column;min-height:430px;padding:28px;overflow:hidden}
      .project-card:hover{border-color:color-mix(in srgb,var(--accent) 55%,var(--border))}
      .project-index{position:absolute;right:20px;top:16px;color:var(--border);font-size:3.8rem;font-weight:850;line-height:1}
      .project-body{position:relative;z-index:1}.project-body h3{margin:0 0 6px;font-size:1.45rem}
      .project-subtitle{color:var(--accent)!important;font-size:.76rem!important;font-weight:700;margin-bottom:18px!important}
      .project-description{max-width:470px;color:var(--muted);font-size:.92rem;line-height:1.7}
      .project-body ul{margin:20px 0;padding:0 0 0 18px;color:var(--muted);font-size:.84rem;line-height:1.9}
      .project-body li::marker{color:var(--accent)}
      .tech-list{display:flex;flex-wrap:wrap;gap:7px}.tech-list span{padding:6px 8px;border:1px solid var(--border);border-radius:6px;color:var(--muted);font-size:.68rem}
      .project-links{display:flex;gap:18px;margin-top:auto;padding-top:24px}.project-links a{display:flex;align-items:center;gap:7px;color:var(--text);font-size:.78rem;font-weight:750}
      .project-links a:hover{color:var(--accent)}
      @media(max-width:768px){.project-grid{grid-template-columns:1fr}.project-card{min-height:400px}}
    `}</style>
  </section>
);

export default Projects;
