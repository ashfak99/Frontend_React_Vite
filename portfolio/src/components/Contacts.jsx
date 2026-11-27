import { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { socialLinks } from '../data/portfolioData';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setLoading(true);
    setError('');
    try {
      const response = await fetch('https://formspree.io/f/xbgljqrz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      if (!response.ok) throw new Error('Submission failed');
      form.reset();
      setSent(true);
    } catch {
      setError('The form could not send your message. Please email ashfakalam8423@gmail.com instead.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid reveal">
        <div>
          <div className="eyebrow"><FaEnvelope /> Contact</div>
          <h2>Let’s discuss systems worth building.</h2>
          <p>I’m open to internships, collaborations, open-source work, and engineering conversations.</p>
          <div className="contact-links">
            <a href={socialLinks.email}><FaEnvelope /> ashfakalam8423@gmail.com</a>
            <a href={socialLinks.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
          </div>
        </div>
        <form className="contact-form card" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Name<input name="name" type="text" required autoComplete="name" /></label>
            <label>Email<input name="email" type="email" required autoComplete="email" /></label>
          </div>
          <label>Message<textarea name="message" rows="6" required /></label>
          <button className="button button-primary" type="submit" disabled={loading || sent}>
            {loading ? 'Sending...' : sent ? 'Message sent' : <>Send message <FaPaperPlane /></>}
          </button>
          {error && <p className="form-error" role="alert">{error}</p>}
        </form>
      </div>
      <style>{`
        .contact-section{background:var(--surface)}.contact-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:64px;align-items:start}
        .contact-grid h2{max-width:500px;margin:8px 0 16px;font-size:clamp(2.2rem,5vw,4rem);line-height:1.02;letter-spacing:-.05em}
        .contact-grid>div>p{color:var(--muted);line-height:1.75}.contact-links{display:flex;flex-direction:column;gap:10px;margin-top:28px}
        .contact-links a{display:flex;align-items:center;gap:9px;color:var(--muted);font-size:.84rem}.contact-links a:hover{color:var(--accent)}
        .contact-form{display:flex;flex-direction:column;gap:16px;padding:24px}.form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .contact-form label{display:flex;flex-direction:column;gap:8px;color:var(--muted);font-size:.76rem;font-weight:700}
        .contact-form input,.contact-form textarea{width:100%;border:1px solid var(--border);border-radius:8px;background:var(--bg);color:var(--text);padding:12px;outline:none}
        .contact-form input:focus,.contact-form textarea:focus{border-color:var(--accent)}.contact-form textarea{resize:vertical}
        .contact-form .button{border:0;cursor:pointer}.contact-form .button:disabled{opacity:.7;cursor:not-allowed}.form-error{color:#ef4444;font-size:.78rem}
        @media(max-width:768px){.contact-grid{grid-template-columns:1fr}.form-row{grid-template-columns:1fr}}
      `}</style>
    </section>
  );
};

export default Contact;
