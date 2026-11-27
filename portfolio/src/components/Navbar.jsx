import { useEffect, useState } from 'react';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';

const links = [
  ['Home', 'home'], ['About', 'about'], ['Skills', 'skills'],
  ['Projects', 'projects'], ['Open Source', 'open-source'], ['Contact', 'contact'],
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id));
    }, { rootMargin: '-35% 0px -55% 0px' });
    links.forEach(([, id]) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <nav className="container nav-inner" aria-label="Primary navigation">
        <a className="brand" href="#home" onClick={close} aria-label="Ashfak Alam, home">
          <span className="brand-mark">AA</span>
          <span>Ashfak Alam</span>
        </a>
        <div className="nav-actions">
          <ul className="nav-links" id="desktop-navigation">
            {links.map(([label, id]) => (
              <li key={id}><a className={active === id ? 'active' : ''} href={`#${id}`}>{label}</a></li>
            ))}
          </ul>
          <button className="icon-button theme-button" type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <button className="icon-button menu-button" type="button" onClick={() => setOpen(!open)}
            aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close menu' : 'Open menu'}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {open && (
          <div className="mobile-menu" id="mobile-navigation">
            {links.map(([label, id]) => (
              <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={close}>{label}</a>
            ))}
          </div>
        )}
      </nav>
      <style>{`
        .navbar{position:sticky;top:0;z-index:50;height:72px;border-bottom:1px solid var(--border);background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(14px)}
        .nav-inner{height:72px;display:flex;align-items:center;justify-content:space-between;position:relative}
        .brand{display:flex;align-items:center;gap:10px;font-size:.95rem;font-weight:780}
        .brand-mark{display:grid;place-items:center;width:34px;height:34px;border:1px solid var(--border);border-radius:8px;color:var(--accent);font-size:.72rem;letter-spacing:.08em}
        .nav-actions{display:flex;align-items:center;gap:12px}
        .nav-links{display:flex;align-items:center;gap:24px;list-style:none;margin:0;padding:0}
        .nav-links a{color:var(--muted);font-size:.82rem;font-weight:650;transition:color .2s ease}
        .nav-links a:hover,.nav-links a.active{color:var(--text)}
        .icon-button{display:grid;place-items:center;width:38px;height:38px;border:1px solid var(--border);border-radius:8px;background:var(--surface);color:var(--muted);cursor:pointer}
        .icon-button:hover{color:var(--text);border-color:var(--accent)}
        .menu-button{display:none}
        .mobile-menu{display:none}
        @media(max-width:900px){
          .nav-links{display:none}.menu-button{display:grid}
          .mobile-menu{position:absolute;display:flex;flex-direction:column;gap:2px;top:64px;left:16px;right:16px;padding:10px;border:1px solid var(--border);border-radius:12px;background:var(--surface);box-shadow:0 18px 40px rgba(0,0,0,.18)}
          .mobile-menu a{padding:12px 10px;border-radius:7px;color:var(--muted);font-size:.9rem;font-weight:650}
          .mobile-menu a.active{background:var(--surface-2);color:var(--text)}
        }
      `}</style>
    </header>
  );
};

export default Navbar;
