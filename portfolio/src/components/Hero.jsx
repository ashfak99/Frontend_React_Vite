import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Photo from '../assets/ashfak.png';
import { socialLinks } from '../data/portfolioData';

const Hero = () => (
  <section id="home" className="hero section">
    <div className="container hero-grid reveal visible">
      <div className="hero-copy">
        <div className="status"><span /> Computer Science undergraduate</div>
        <h1>Building scalable backend systems <span>& intelligent AI applications.</span></h1>
        <p>I’m Ashfak Alam, passionate about backend engineering, distributed systems, and AI engineering. I enjoy building practical software solutions, developer tools, and intelligent applications.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">View projects <FaArrowRight /></a>
          <a className="button button-secondary" href={socialLinks.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
        </div>
        <div className="hero-socials" aria-label="Professional profiles">
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href={socialLinks.email} aria-label="Email"><FaEnvelope /></a>
        </div>
      </div>
      <div className="system-visual" aria-label="Engineering profile visual">
        <div className="visual-grid" />
        <img src={Photo} alt="Ashfak Alam" width="280" height="340" />
        <div className="visual-label label-one"><span>BACKEND</span><b>Systems</b></div>
        <div className="visual-label label-two"><span>AI</span><b>Applications</b></div>
      </div>
    </div>
    <style>{`
      .hero{min-height:calc(100vh - 72px);display:flex;align-items:center}
      .hero-grid{display:grid;grid-template-columns:minmax(0,1.12fr) minmax(300px,.88fr);align-items:center;gap:72px}
      .status{display:inline-flex;align-items:center;gap:9px;padding:7px 10px;border:1px solid var(--border);border-radius:999px;color:var(--muted);font-size:.78rem;font-weight:700;margin-bottom:24px}
      .status span{width:7px;height:7px;border-radius:50%;background:#22c55e;box-shadow:0 0 0 4px rgba(34,197,94,.1)}
      .hero h1{max-width:760px;margin:0;font-size:clamp(3rem,6vw,5.6rem);line-height:.98;letter-spacing:-.065em}
      .hero h1 span{display:block;color:var(--muted);margin-top:8px}
      .hero-copy>p{max-width:620px;margin:28px 0 30px;color:var(--muted);font-size:1.08rem;line-height:1.75}
      .hero-actions{display:flex;flex-wrap:wrap;gap:12px}
      .hero-socials{display:flex;gap:10px;margin-top:24px}
      .hero-socials a{display:grid;place-items:center;width:38px;height:38px;border:1px solid var(--border);border-radius:8px;color:var(--muted)}
      .hero-socials a:hover{color:var(--accent);border-color:var(--accent)}
      .system-visual{position:relative;height:470px;border:1px solid var(--border);border-radius:16px;overflow:hidden;background:linear-gradient(145deg,var(--surface),var(--surface-2))}
      .visual-grid{position:absolute;inset:0;background-image:linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px);background-size:38px 38px;mask-image:linear-gradient(to bottom,black,transparent)}
      .system-visual img{position:absolute;width:280px;height:340px;object-fit:cover;object-position:center 18%;bottom:-20px;left:50%;transform:translateX(-50%);border:1px solid var(--border);border-bottom:0;border-radius:140px 140px 10px 10px;filter:saturate(.82)}
      .visual-label{position:absolute;padding:10px 12px;border:1px solid var(--border);border-radius:8px;background:color-mix(in srgb,var(--surface) 92%,transparent);box-shadow:0 12px 30px rgba(0,0,0,.12)}
      .visual-label span{display:block;color:var(--muted);font-size:.58rem;letter-spacing:.14em;margin-bottom:3px}
      .visual-label b{font-size:.78rem}
      .label-one{top:72px;left:28px}.label-two{right:24px;bottom:72px}
      @media(max-width:900px){.hero-grid{grid-template-columns:1fr}.system-visual{display:none}.hero h1{font-size:clamp(2.8rem,11vw,4.8rem)}}
      @media(max-width:480px){.hero h1{font-size:2.65rem}.hero-copy>p{font-size:.98rem}.hero-actions .button{flex:1}.hero{min-height:auto}}
    `}</style>
  </section>
);

export default Hero;
