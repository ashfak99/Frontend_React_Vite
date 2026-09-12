export default function Hero() {
  // Book Appointment click pe Contact section pe scroll
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-teal-50 via-white to-teal-100 overflow-hidden scroll-mt-24"
    >
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-72 h-72 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 md:w-96 md:h-96 bg-teal-200/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* 🔹 Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-white border border-teal-200 text-primary text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Trusted by 5000+ Happy Patients
            </span>

            {/* Heading */}
            <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight">
              Aapki Muskaan,
              <br />
              <span className="text-primary">Hamari Zimmedari</span>
            </h1>

            {/* Subtext */}
            <p className="mt-5 text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Advanced dental care with modern technology aur experienced
              specialists. Painless treatment, affordable pricing, aur personal
              attention — sab ek hi jagah.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToContact();
                }}
                className="bg-primary text-white text-sm md:text-base font-semibold px-7 py-3.5 rounded-full hover:bg-teal-600 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-center"
              >
                Book Appointment
              </a>
              <a
                href="tel:+919883625407"
                className="border-2 border-primary text-primary text-sm md:text-base font-semibold px-7 py-3.5 rounded-full hover:bg-primary hover:text-white transition-all duration-200 text-center"
              >
                📞 Call Now
              </a>
            </div>

            {/* Trust points */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="text-xl md:text-2xl font-bold text-primary">8+</p>
                <p className="text-xs md:text-sm text-gray-500">Years Experience</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-xl md:text-2xl font-bold text-primary">4.9★</p>
                <p className="text-xs md:text-sm text-gray-500">Patient Rating</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-xl md:text-2xl font-bold text-primary">5000+</p>
                <p className="text-xs md:text-sm text-gray-500">Happy Smiles</p>
              </div>
            </div>
          </div>

          {/* 🔹 Right Visual */}
          <div className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                  alt="Dental Clinic"
                  className="w-full h-[320px] sm:h-[400px] md:h-[480px] object-cover"
                />
              </div>

              {/* Floating Card 1 */}
              <div className="absolute -bottom-4 -left-4 md:-left-8 bg-white rounded-2xl shadow-xl p-3 md:p-4 flex items-center gap-3 animate-[float_3s_ease-in-out_infinite]">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-100 flex items-center justify-center text-primary text-lg md:text-xl">
                  ✓
                </div>
                <div>
                  <p className="text-xs md:text-sm font-bold text-dark">
                    Painless Treatment
                  </p>
                  <p className="text-[10px] md:text-xs text-gray-500">
                    Modern equipment
                  </p>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -top-4 -right-4 md:-right-8 bg-white rounded-2xl shadow-xl p-3 md:p-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-teal-400 border-2 border-white" />
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-teal-500 border-2 border-white" />
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-teal-600 border-2 border-white" />
                  </div>
                  <p className="text-xs md:text-sm font-bold text-dark">5000+</p>
                </div>
                <p className="text-[10px] md:text-xs text-gray-500 mt-1">
                  Patients Treated
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}