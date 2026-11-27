import { FaGithub, FaGraduationCap, FaCodeBranch } from 'react-icons/fa';
import { education, socialLinks } from '../data/portfolioData';

const Experience = () => (
  <section id="open-source" className="section surface-divider">
    <div className="container">
      <div className="open-grid reveal">
        <article className="open-card card">
          <div className="eyebrow"><FaGithub /> Open source</div>
          <h2>Build in public.</h2>
          <p>I publish practical software projects and build tools that solve visible developer and privacy problems.</p>
          <a className="text-link" href={socialLinks.github} target="_blank" rel="noreferrer">Explore GitHub <FaCodeBranch /></a>
        </article>
        <div>
          <div className="eyebrow"><FaGraduationCap /> Education</div>
          <div className="education-list">
            {education.map((item) => (
              <article className="education-item card" key={item.degree}>
                <span>{item.period}</span>
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
    <style>{`
      .open-grid{display:grid;grid-template-columns:.75fr 1.25fr;gap:20px}.open-card{padding:32px}.open-card h2{margin:8px 0 14px;font-size:2.2rem}
      .open-card p{color:var(--muted);line-height:1.75}.text-link{display:inline-flex;align-items:center;gap:8px;margin-top:18px;color:var(--accent);font-size:.82rem;font-weight:750}
      .education-list{display:grid;gap:12px}.education-item{padding:22px}.education-item span{color:var(--accent);font-size:.72rem;font-weight:750}
      .education-item h3{margin:8px 0 5px;font-size:1.05rem}.education-item p{margin:0;color:var(--muted);font-size:.86rem}
      @media(max-width:768px){.open-grid{grid-template-columns:1fr}}
    `}</style>
  </section>
);

export default Experience;
