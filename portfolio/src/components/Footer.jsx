import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { socialLinks } from '../data/portfolioData';

const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <span>© {new Date().getFullYear()} Ashfak Alam</span>
      <div>
        <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
      </div>
    </div>
    <style>{`
      .footer{border-top:1px solid var(--border);padding:24px 0}.footer-inner{display:flex;align-items:center;justify-content:space-between;color:var(--muted);font-size:.76rem}
      .footer-inner div{display:flex;gap:14px}.footer-inner a:hover{color:var(--accent)}
    `}</style>
  </footer>
);

export default Footer;
