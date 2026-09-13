import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const FeaturedProperties = ({ setCurrentPage }) => {
  const properties = [
    {
      id: 1,
      tag: "Commercial",
      title: "IT Park Office Space",
      location: "New Town, Kolkata",
      price: "₹ 60 L – ₹ 1.2 Cr",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      tag: "Residential",
      title: "Luxury Apartments",
      location: "Rajarhat, Kolkata",
      price: "₹ 45 L – ₹ 1.8 Cr",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      tag: "Land",
      title: "Residential Plots",
      location: "Behala, Kolkata",
      price: "₹ 15 L – ₹ 50 L",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      tag: "Commercial",
      title: "Retail Space",
      location: "Salt Lake, Kolkata",
      price: "₹ 2 Cr – ₹ 8 Cr",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop"
    }
  ];

  // Navigate helper
  const goTo = (page) => {
    if (setCurrentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header with "View All" link */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 gap-4">
          <div>
            <p className="text-amber-500 font-semibold tracking-widest text-sm mb-2 uppercase">
              — Featured Properties —
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B32] mb-2">
              Our Featured Properties
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Handpicked properties in the best locations of Kolkata.
            </p>
          </div>
          
          <button 
            onClick={() => goTo('properties')}
            className="text-[#0B1B32] font-semibold text-sm flex items-center gap-2 hover:text-amber-500 hover:gap-3 transition-all w-max"
          >
            View All Properties <FaArrowRight />
          </button>
        </div>

        {/* Properties Grid */}
        {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <div 
              key={property.id} 
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image with Tag */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                {/* Tag Badge */}
                <span className="absolute top-3 left-3 bg-[#0B1B32]/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {property.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-[#0B1B32] mb-2">
                  {property.title}
                </h3>
                
                {/* Location */}
                <p className="text-gray-500 text-xs flex items-center gap-1 mb-3">
                  <FaMapMarkerAlt className="text-amber-500" />
                  {property.location}
                </p>
                
                {/* Price */}
                <p className="text-amber-500 font-bold text-lg mb-5 flex-grow">
                  {property.price}
                </p>
                
                {/* View Details Button */}
                <button 
                  onClick={() => goTo('properties')}
                  className="w-full bg-[#0B1B32] text-white py-3 rounded-md text-sm font-semibold hover:bg-amber-500 hover:text-[#0B1B32] transition-colors flex items-center justify-center gap-2"
                >
                  View Details <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;