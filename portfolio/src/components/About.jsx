import { FaCode } from 'react-icons/fa';

const About = () => (
  <section id="about" className="section surface-divider">
    <div className="container about-grid reveal">
      <div className="section-heading">
        <div className="eyebrow"><FaCode /> About</div>
        <h2>Engineering fundamentals, applied to real problems.</h2>
      </div>
      <div className="about-copy">
        <p>I’m a B.Tech Computer Science & Engineering undergraduate at <strong>Aliah University</strong>, with a diploma in Computer Engineering from <strong>Jamia Millia Islamia</strong>.</p>
        <p>My interests are in backend engineering, API development, database engineering, distributed systems, AI engineering, and developer tools. I’m especially interested in understanding how software systems work internally and improving practical implementations through code.</p>
      </div>
      <div className="education-strip card">
        <div><span>Degree</span><strong>B.Tech · Computer Science & Engineering</strong></div>
        <div><span>Institution</span><strong>Aliah University</strong></div>
        <div><span>Expected</span><strong>2028</strong></div>
      </div>
    </div>
    <style>{`
      .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px 80px}.about-grid .section-heading{margin:0}
      .about-copy{padding-top:30px}.about-copy p{color:var(--muted);line-height:1.8;margin:0 0 18px}
      .about-copy strong{color:var(--text)}.education-strip{grid-column:1/-1;display:grid;grid-template-columns:1.5fr 1fr .5fr;margin-top:24px;padding:24px}
      .education-strip div{display:flex;flex-direction:column;gap:7px;padding:4px 24px;border-right:1px solid var(--border)}
      .education-strip div:first-child{padding-left:0}.education-strip div:last-child{border:0}
      .education-strip span{color:var(--muted);font-size:.68rem;text-transform:uppercase;letter-spacing:.12em}.education-strip strong{font-size:.9rem}
      @media(max-width:768px){.about-grid{grid-template-columns:1fr}.about-copy{padding-top:0}.education-strip{grid-template-columns:1fr}.education-strip div{padding:14px 0;border-right:0;border-bottom:1px solid var(--border)}.education-strip div:last-child{border-bottom:0}}
    `}</style>
  </section>
);

export default About;
