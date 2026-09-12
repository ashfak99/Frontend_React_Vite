const doctors = [
  {
    name: "Dr. Darshna Chowdhury Bhattacharya",
    role: "Chief Dental Surgeon",
    exp: "8+ Years",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    specialties: ["Root Canal", "Implants", "Cosmetic Dentistry"],
  },
  {
    name: "Dr. Ananya Sen",
    role: "Orthodontist",
    exp: "6+ Years",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80",
    specialties: ["Braces", "Aligners", "Smile Design"],
  },
  {
    name: "Dr. Rohit Mehta",
    role: "Pediatric Dentist",
    exp: "5+ Years",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
    specialties: ["Kids Dentistry", "Preventive Care"],
  },
];

export default function Doctors() {
  // Book Appointment click pe Contact section pe smooth scroll
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <section
      id="doctors"
      className="py-16 md:py-24 bg-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary text-xs md:text-sm font-semibold uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-tight">
            Meet Our <span className="text-primary">Expert Doctors</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-600">
            Experienced aur caring dental specialists jo aapki smile ke liye
            dedicated hain.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {doctors.map((doc, idx) => (
            <div
              key={idx}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-72 sm:h-80">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Experience badge */}
                <span className="absolute top-4 right-4 bg-white/95 backdrop-blur text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  {doc.exp}
                </span>
              </div>

              {/* Info */}
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-dark leading-snug">
                  {doc.name}
                </h3>
                <p className="text-primary text-sm font-medium mt-1">
                  {doc.role}
                </p>

                {/* Specialties */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {doc.specialties.map((s, i) => (
                    <span
                      key={i}
                      className="text-[11px] md:text-xs bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={scrollToContact}
                  className="mt-5 w-full bg-dark text-white text-sm font-semibold py-2.5 rounded-full hover:bg-primary transition-colors duration-300"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}