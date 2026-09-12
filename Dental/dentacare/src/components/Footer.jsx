const quickLinks = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about" },
  { name: "Services", id: "services" },
  { name: "Our Doctors", id: "doctors" },
  { name: "Contact", id: "contact" },
];

const services = [
  "General Dentistry",
  "Teeth Whitening",
  "Root Canal",
  "Braces & Aligners",
  "Dental Implants",
  "Kids Dentistry",
];

const socials = [
  { name: "Facebook", icon: "f", url: "#" },
  { name: "Instagram", icon: "in", url: "#" },
  { name: "Twitter", icon: "X", url: "#" },
  { name: "YouTube", icon: "▶", url: "#" },
];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-dark text-gray-300">
      {/* 🔹 Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* 🔸 Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("home");
              }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                D
              </div>
              <div className="leading-tight">
                <p className="text-base md:text-lg font-bold text-white">
                  Dentacare
                </p>
                <p className="text-[10px] md:text-xs text-gray-400 -mt-0.5">
                  Dental Clinic
                </p>
              </div>
            </a>

            <p className="mt-5 text-sm text-gray-400 leading-relaxed max-w-sm">
              Newtown, Kolkata ki trusted dental clinic. 8+ saal se hum
              painless, affordable aur personalized dental care de rahe hain.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  onClick={(e) => {
                    if (s.url === "#") e.preventDefault();
                  }}
                  aria-label={s.name}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 🔸 Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base md:text-lg">
              Quick Links
            </h3>
            <div className="mt-1 w-10 h-0.5 bg-primary rounded-full" />
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.id);
                    }}
                    className="text-sm text-gray-400 hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 🔸 Column 3: Services */}
          <div>
            <h3 className="text-white font-bold text-base md:text-lg">
              Our Services
            </h3>
            <div className="mt-1 w-10 h-0.5 bg-primary rounded-full" />
            <ul className="mt-5 space-y-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo("services");
                    }}
                    className="text-sm text-gray-400 hover:text-primary transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 🔸 Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-bold text-base md:text-lg">
              Get In Touch
            </h3>
            <div className="mt-1 w-10 h-0.5 bg-primary rounded-full" />
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg shrink-0">📍</span>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Community Market, CA 20, Street No. 254, Newtown, Kolkata –
                  700156
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg shrink-0">📞</span>
                <a
                  href="tel:+919883625407"
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  +91 98836 25407
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg shrink-0">✉️</span>
                <a
                  href="mailto:info@dentacare.com"
                  className="text-sm text-gray-400 hover:text-primary transition-colors break-all"
                >
                  info@dentacare.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg shrink-0">🕒</span>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Mon–Tue, Thu–Sun: 11 AM – 9 PM
                  <br />
                  <span className="text-red-400">Wednesday: Closed</span>
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* 🔹 CTA Strip */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-primary to-teal-600 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg md:text-2xl font-bold">
              Ready for a Healthier Smile?
            </h3>
            <p className="text-white/80 text-xs md:text-sm mt-1">
              Book your appointment today — pehla consultation friendly hai!
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("contact");
            }}
            className="bg-white text-primary text-sm md:text-base font-semibold px-6 md:px-7 py-3 rounded-full hover:bg-gray-100 transition-all duration-200 shadow-md whitespace-nowrap"
          >
            Book Appointment →
          </a>
        </div>
      </div>

      {/* 🔹 Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs md:text-sm text-gray-400 text-center sm:text-left">
            © {new Date().getFullYear()} Dentacare Dental Clinic. All rights
            reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-xs md:text-sm text-gray-400 hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-xs md:text-sm text-gray-400 hover:text-primary transition-colors"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}