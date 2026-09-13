import { FaMapMarkerAlt, FaArrowRight, FaSearch } from 'react-icons/fa';

const PropertiesPage = ({ setCurrentPage }) => {
  const properties = [
    {
      id: 1,
      tag: 'Commercial',
      title: 'IT Park Office Space',
      location: 'New Town, Kolkata',
      price: '₹ 60 L – ₹ 1.2 Cr',
      type: 'Commercial',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 2,
      tag: 'Residential',
      title: 'Luxury Apartments',
      location: 'Rajarhat, Kolkata',
      price: '₹ 45 L – ₹ 1.8 Cr',
      type: 'Residential',
      image:
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 3,
      tag: 'Land',
      title: 'Residential Plots',
      location: 'Behala, Kolkata',
      price: '₹ 15 L – ₹ 50 L',
      type: 'Land',
      image:
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 4,
      tag: 'Commercial',
      title: 'Retail Space',
      location: 'Salt Lake, Kolkata',
      price: '₹ 2 Cr – ₹ 8 Cr',
      type: 'Commercial',
      image:
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 5,
      tag: 'Residential',
      title: 'Premium Family Homes',
      location: 'New Town, Kolkata',
      price: '₹ 75 L – ₹ 2 Cr',
      type: 'Residential',
      image:
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 6,
      tag: 'Commercial',
      title: 'Corporate Office',
      location: 'Park Street, Kolkata',
      price: '₹ 1.5 Cr – ₹ 4 Cr',
      type: 'Commercial',
      image:
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000&auto=format&fit=crop',
    },
  ];

  const goToContact = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-[#0B1B32] text-white py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <p className="text-amber-500 font-semibold tracking-widest text-sm uppercase mb-4">
            — Our Properties —
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find a Property That
            <span className="text-amber-500"> Fits Your Future</span>
          </h1>

          <p className="text-gray-300 max-w-2xl text-base md:text-lg leading-relaxed">
            Explore residential, commercial and land opportunities in
            some of Kolkata's most promising locations.
          </p>

        </div>
      </section>

      {/* Search / Filter UI */}
      <section className="py-10 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 md:p-6">

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

              <div className="relative md:col-span-2">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  placeholder="Search by location or property"
                  className="w-full pl-11 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <select className="px-4 py-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option>All Property Types</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Land</option>
              </select>

              <select className="px-4 py-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option>Any Budget</option>
                <option>Under ₹50 L</option>
                <option>₹50 L – ₹1 Cr</option>
                <option>₹1 Cr – ₹2 Cr</option>
                <option>Above ₹2 Cr</option>
              </select>

            </div>

          </div>
        </div>
      </section>

      {/* Property Listing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="mb-12">
            <p className="text-amber-500 font-semibold tracking-widest text-sm uppercase mb-2">
              — Explore —
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B32] mb-3">
              Featured Property Opportunities
            </h2>

            <p className="text-gray-600">
              Browse some of our current property opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >

                <div className="relative h-56 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />

                  <span className="absolute top-4 left-4 bg-[#0B1B32]/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {property.tag}
                  </span>
                </div>

                <div className="p-6">

                  <h3 className="text-xl font-bold text-[#0B1B32] mb-3">
                    {property.title}
                  </h3>

                  <p className="text-gray-500 text-sm flex items-center gap-2 mb-4">
                    <FaMapMarkerAlt className="text-amber-500" />
                    {property.location}
                  </p>

                  <p className="text-amber-500 text-xl font-bold mb-6">
                    {property.price}
                  </p>

                  <button
                    onClick={goToContact}
                    className="w-full bg-[#0B1B32] text-white py-3 rounded-md font-semibold hover:bg-amber-500 hover:text-[#0B1B32] transition flex items-center justify-center gap-2"
                  >
                    Enquire Now
                    <FaArrowRight />
                  </button>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B32] mb-5">
            Can't Find What You're Looking For?
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Tell us your requirements and our team can help you explore
            suitable property opportunities.
          </p>

          <button
            onClick={goToContact}
            className="bg-amber-500 text-[#0B1B32] px-7 py-3 rounded-md font-semibold hover:bg-amber-400 transition"
          >
            Share Your Requirement
          </button>

        </div>
      </section>

    </div>
  );
};

export default PropertiesPage;