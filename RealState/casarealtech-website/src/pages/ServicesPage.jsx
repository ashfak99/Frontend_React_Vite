import {
  FaBuilding,
  FaMapMarkedAlt,
  FaChartLine,
  FaHome,
  FaFileContract,
  FaHandshake,
  FaArrowRight,
} from 'react-icons/fa';

const ServicesPage = ({ setCurrentPage }) => {
  const services = [
    {
      icon: <FaBuilding />,
      title: 'Commercial Real Estate',
      description:
        'Find office spaces, retail properties and commercial opportunities in strategic business locations.',
    },
    {
      icon: <FaHome />,
      title: 'Residential Properties',
      description:
        'Explore apartments and homes suited to your lifestyle, location preferences and budget.',
    },
    {
      icon: <FaMapMarkedAlt />,
      title: 'Land & Plots',
      description:
        'Get assistance in identifying suitable residential, agricultural and other land opportunities.',
    },
    {
      icon: <FaChartLine />,
      title: 'Property Investment',
      description:
        'Explore real estate opportunities with a focus on location, potential and long-term value.',
    },
    {
      icon: <FaFileContract />,
      title: 'Property Assistance',
      description:
        'Receive guidance throughout the property selection and transaction process.',
    },
    {
      icon: <FaHandshake />,
      title: 'Consultation',
      description:
        'Discuss your requirements with our team and get property recommendations based on your needs.',
    },
  ];

  const goToContact = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-[#0B1B32] text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <p className="text-amber-500 font-semibold tracking-widest text-sm uppercase mb-4">
            — Our Services —
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Real Estate Solutions
            <span className="text-amber-500"> Built Around You</span>
          </h1>

          <p className="text-gray-300 max-w-2xl text-base md:text-lg leading-relaxed">
            From finding the right property to exploring investment
            opportunities, we provide practical real estate assistance
            for different requirements.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-amber-500 font-semibold tracking-widest text-sm uppercase mb-3">
              — What We Offer —
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B32] mb-4">
              Comprehensive Real Estate Services
            </h2>

            <p className="text-gray-600">
              Professional assistance across residential, commercial,
              land and investment requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-full bg-[#0B1B32] text-amber-500 flex items-center justify-center text-xl mb-6">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-[#0B1B32] mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="text-center mb-14">
            <p className="text-amber-500 font-semibold tracking-widest text-sm uppercase mb-3">
              — Our Process —
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B32]">
              Simple. Clear. Professional.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              {
                number: '01',
                title: 'Understand',
                text: 'We first understand your property requirements, preferences and goals.'
              },
              {
                number: '02',
                title: 'Recommend',
                text: 'We help you explore suitable options based on your requirements.'
              },
              {
                number: '03',
                title: 'Support',
                text: 'We remain available throughout the process to provide guidance and assistance.'
              },
            ].map((step) => (
              <div
                key={step.number}
                className="bg-white p-8 rounded-2xl border border-gray-200"
              >
                <span className="text-5xl font-bold text-amber-500/30">
                  {step.number}
                </span>

                <h3 className="text-xl font-bold text-[#0B1B32] mt-3 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B1B32] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Need Help With Your Property Requirement?
          </h2>

          <p className="text-gray-300 mb-8">
            Speak with our team and discuss your real estate needs.
          </p>

          <button
            onClick={goToContact}
            className="bg-amber-500 text-[#0B1B32] px-7 py-3 rounded-md font-semibold hover:bg-amber-400 transition flex items-center gap-2 mx-auto"
          >
            Talk to Us
            <FaArrowRight />
          </button>

        </div>
      </section>

    </div>
  );
};

export default ServicesPage;