export default function About() {
  const highlights = [
    { icon: "🏥", title: "Modern Equipment", desc: "Latest dental technology" },
    { icon: "👨‍⚕️", title: "Expert Doctors", desc: "Experienced specialists" },
    { icon: "💉", title: "Painless Care", desc: "Gentle treatment" },
    { icon: "💰", title: "Affordable", desc: "Transparent pricing" },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-teal-50/50 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* 🔹 Left Image Stack */}
          <div className="relative order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
                  alt="Dental Team"
                  className="w-full h-[300px] sm:h-[400px] md:h-[460px] object-cover"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-5 -right-3 md:-right-6 bg-primary text-white rounded-2xl shadow-xl p-4 md:p-5 text-center">
                <p className="text-2xl md:text-3xl font-bold">8+</p>
                <p className="text-[10px] md:text-xs uppercase tracking-wider mt-0.5">
                  Years Experience
                </p>
              </div>

              {/* Floating stat */}
              <div className="absolute -top-4 -left-3 md:-left-6 bg-white rounded-2xl shadow-xl p-3 md:p-4">
                <p className="text-xl md:text-2xl font-bold text-primary">4.9★</p>
                <p className="text-[10px] md:text-xs text-gray-500">102 Reviews</p>
              </div>
            </div>
          </div>

          {/* 🔹 Right Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <span className="text-primary text-xs md:text-sm font-semibold uppercase tracking-wider">
              About Us
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-tight">
              Caring for Your Smile,
              <br className="hidden md:block" />
              <span className="text-primary">Since Day One</span>
            </h2>
            <p className="mt-5 text-sm md:text-base text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Dentacare Dental Clinic, Newtown Kolkata mein sthit ek modern
              dental care center hai. Dr. Darshna Chowdhury Bhattacharya ki
              leadership mein hum 8+ saal se patients ko painless, affordable
              aur personalized dental treatment de rahe hain.
            </p>
            <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Humara mission simple hai — har patient ko ek healthy, confident
              smile dena, bina kisi darr aur bina extra kharch ke.
            </p>

            {/* Highlights Grid */}
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white rounded-xl p-3.5 border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <span className="text-xl md:text-2xl shrink-0">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-sm md:text-base font-bold text-dark">
                      {item.title}
                    </p>
                    <p className="text-[11px] md:text-xs text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}