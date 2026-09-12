// src/components/layout/Header.jsx
import { useEffect, useState } from "react";
import { gymInfo } from "../../data/gymData";
import Button from "../ui/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll detect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll(); // initial check
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  // Solid background jab scrolled ho YA menu open ho
  const solid = scrolled || menuOpen;

  return (
    <>
      {/* ================= HEADER (z-50) ================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
          solid
            ? "bg-bg border-white/10 shadow-lg"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-wrap mx-auto px-5 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={handleLinkClick}
            className="flex flex-col leading-none select-none"
          >
            <span className="font-display text-xl md:text-2xl tracking-wide text-white">
              ULTIMATE <span className="text-accent">FITNESS</span>
            </span>
            <span className="text-[10px] md:text-xs text-muted tracking-[0.25em] uppercase">
              {gymInfo.nameSuffix}
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {gymInfo.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button href={`tel:${gymInfo.phoneRaw}`} variant="ghost">
              📞 {gymInfo.phone}
            </Button>
            <Button
              href={`https://wa.me/${gymInfo.whatsapp}?text=${encodeURIComponent(
                "Hi, I want to know more about Ultimate Fitness Centre Newtown."
              )}`}
              variant="primary"
            >
              Join Now
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 relative"
          >
            <span
              className={`block w-5 h-[2px] bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-white my-1 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* ================= MOBILE OVERLAY (z-40, header ke NEECHE) ================= */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-bg transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="h-full overflow-y-auto flex flex-col pt-20 md:pt-24 px-6 pb-8">
          {gymInfo.navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-lg font-medium text-white py-3.5 border-b border-white/10 hover:text-accent transition-colors"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {link.label}
            </a>
          ))}

          <div className="flex flex-col gap-3 mt-8">
            <Button
              href={`https://wa.me/${gymInfo.whatsapp}?text=${encodeURIComponent(
                "Hi, I want to know more about Ultimate Fitness Centre Newtown."
              )}`}
              variant="primary"
              fullWidth
            >
              Join on WhatsApp
            </Button>
            <Button
              href={`tel:${gymInfo.phoneRaw}`}
              variant="ghost"
              fullWidth
            >
              📞 Call {gymInfo.phone}
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}