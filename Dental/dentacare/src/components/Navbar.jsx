import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Doctors", id: "doctors" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // 🔹 Scroll pe navbar shadow + active section detect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detect karo
      const sections = navLinks.map((l) => document.getElementById(l.id));
      const scrollPos = window.scrollY + 120; // navbar height offset

      sections.forEach((sec) => {
        if (sec) {
          const top = sec.offsetTop;
          const bottom = top + sec.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(sec.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Mobile menu open hone pe body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // 🔹 Smooth scroll handler
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);

    const target = document.getElementById(id);
    if (target) {
      const offset = 80; // fixed navbar ki height
      const top = target.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/90 backdrop-blur py-3 md:py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* 🔹 Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center gap-2 shrink-0"
          >
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
              D
            </div>
            <div className="leading-tight">
              <p className="text-base md:text-lg font-bold text-dark">
                Dentacare
              </p>
              <p className="text-[10px] md:text-xs text-gray-500 -mt-0.5">
                Dental Clinic
              </p>
            </div>
          </a>

          {/* 🔹 Desktop Menu (lg aur upar) */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-sm font-medium transition-colors duration-200 relative ${
                    activeSection === link.id
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {link.name}
                  {/* Active underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                      activeSection === link.id ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* 🔹 Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919883625407"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              📞 +91 98836 25407
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-teal-600 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Book Appointment
            </a>
          </div>

          {/* 🔹 Hamburger (mobile + tablet) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-dark rounded transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-dark rounded transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-dark rounded transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* 🔹 Mobile / Tablet Slide-in Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[64px] bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-white w-full sm:w-80 ml-auto h-[calc(100vh-64px)] shadow-xl p-6 transform transition-transform duration-300 overflow-y-auto ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition ${
                    activeSection === link.id
                      ? "bg-primary/10 text-primary"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col gap-3">
            <a
              href="tel:+919883625407"
              className="text-center text-sm font-medium text-gray-700 border border-gray-300 rounded-full py-3 hover:bg-gray-50 transition"
            >
              📞 Call Now
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="text-center bg-primary text-white text-sm font-semibold py-3 rounded-full hover:bg-teal-600 transition"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}