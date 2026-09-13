import {
  FaBuilding,
  FaBullseye,
  FaEye,
  FaHandshake,
  FaArrowRight,
} from 'react-icons/fa';

const AboutPage = ({ setCurrentPage }) => {
  const goToContact = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative bg-[#0B1B32] text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <p className="text-amber-500 font-semibold tracking-widest text-sm uppercase mb-4">
              — About Casa Realtech —
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Building Trust Through
              <span className="text-amber-500"> Real Estate</span>
            </h1>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              We are committed to helping individuals and businesses make
              confident real estate decisions through transparent guidance,
              quality properties and professional service.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            <div>
              <p className="text-amber-500 font-semibold tracking-widest text-sm uppercase mb-3">
                — Who We Are —
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B32] mb-6">
                Your Trusted Real Estate Partner
              </h2>

              <p className="text-gray-600 leading-relaxed mb-5">
                Casa Realtech Private Limited is a real estate company
                focused on providing reliable property solutions for
                residential, commercial and land requirements.
              </p>

              <p className="text-gray-600 leading-relaxed mb-5">
                Our approach is simple: understand what our clients need,
                provide suitable options and support them throughout the
                decision-making process.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Whether you are buying a property, looking for commercial
                space or exploring an investment opportunity, our team is
                here to make the process easier and more transparent.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                alt="Modern real estate building"
                className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
              />

              <div className="absolute -bottom-6 -left-4 md:-left-6 bg-amber-500 text-[#0B1B32] p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">Trusted</p>
                <p className="text-sm font-semibold">Real Estate Solutions</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-amber-500 font-semibold tracking-widest text-sm uppercase mb-3">
              — Our Purpose —
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B32]">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
              <div className="w-14 h-14 rounded-full bg-[#0B1B32] text-amber-500 flex items-center justify-center text-xl mb-6">
                <FaBullseye />
              </div>

              <h3 className="text-2xl font-bold text-[#0B1B32] mb-4">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-relaxed">
                To provide dependable real estate solutions with
                transparency, professional guidance and a strong focus on
                client satisfaction.
              </p>
            </div>

            <div className="bg-[#0B1B32] rounded-2xl p-8 md:p-10 shadow-sm text-white">
              <div className="w-14 h-14 rounded-full bg-amber-500 text-[#0B1B32] flex items-center justify-center text-xl mb-6">
                <FaEye />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Our Vision
              </h3>

              <p className="text-gray-300 leading-relaxed">
                To become a trusted real estate brand known for quality
                properties, honest advice and long-term relationships with
                clients.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="text-center mb-14">
            <p className="text-amber-500 font-semibold tracking-widest text-sm uppercase mb-3">
              — Our Values —
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B32]">
              Why Clients Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                icon: <FaHandshake />,
                title: 'Trust & Transparency',
                text: 'Clear communication and honest guidance at every stage.'
              },
              {
                icon: <FaBuilding />,
                title: 'Quality Properties',
                text: 'Carefully selected opportunities across different real estate categories.'
              },
              {
                icon: <FaBullseye />,
                title: 'Client Focus',
                text: 'Our recommendations are built around your requirements and goals.'
              }
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-amber-500 text-[#0B1B32] flex items-center justify-center text-xl mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-[#0B1B32] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B1B32] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Looking for the Right Property?
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Talk to our team and let us help you find a property that
            matches your requirements.
          </p>

          <button
            onClick={goToContact}
            className="bg-amber-500 text-[#0B1B32] px-7 py-3 rounded-md font-semibold hover:bg-amber-400 transition flex items-center gap-2 mx-auto"
          >
            Contact Us
            <FaArrowRight />
          </button>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;