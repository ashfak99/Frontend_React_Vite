const services = [
  {
    icon: "🦷",
    title: "General Dentistry",
    desc: "Regular checkups, cleaning, aur cavity fillings — basic dental care sab kuch.",
  },
  {
    icon: "✨",
    title: "Teeth Whitening",
    desc: "Professional whitening treatment se paayein bright aur confident smile.",
  },
  {
    icon: "🪥",
    title: "Root Canal",
    desc: "Painless RCT with modern rotary instruments aur single-visit option.",
  },
  {
    icon: "😁",
    title: "Braces & Aligners",
    desc: "Metal braces, ceramic braces, aur invisible aligners — sabhi options.",
  },
  {
    icon: "🔧",
    title: "Dental Implants",
    desc: "Missing teeth ka permanent solution with titanium implants.",
  },
  {
    icon: "👶",
    title: "Kids Dentistry",
    desc: "Bachhon ke liye friendly aur fear-free dental care environment.",
  },
];

export default function Services() {
  // Service card click pe Contact section pe scroll
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary text-xs md:text-sm font-semibold uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-tight">
            Complete Dental Care <br className="hidden md:block" />
            <span className="text-primary">Under One Roof</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-600">
            Simple checkup se lekar complex surgeries tak — hum sabhi dental
            treatments provide karte hain latest technology ke saath.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              onClick={scrollToContact}
              className="group bg-white border border-gray-100 rounded-2xl p-6 md:p-7 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-teal-50 flex items-center justify-center text-2xl md:text-3xl group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="mt-5 text-lg md:text-xl font-bold text-dark">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {service.desc}
              </p>
              <div className="mt-4 flex items-center gap-1 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Book Now
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToContact();
            }}
            className="inline-block bg-dark text-white text-sm md:text-base font-semibold px-7 py-3.5 rounded-full hover:bg-primary transition-all duration-200"
          >
            Book Appointment →
          </a>
        </div>
      </div>
    </section>
  );
}