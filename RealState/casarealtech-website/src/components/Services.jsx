import { FaBuilding, FaMapMarkedAlt, FaChartLine, FaArrowRight } from 'react-icons/fa';

const Services = ({ setCurrentPage }) => {
  // Services ka data array (taaki code clean rahe aur easily map ho sake)
  const servicesData = [
    {
      id: 1,
      icon: <FaBuilding />,
      title: "Commercial",
      subtitle: "Office Spaces, Retail, Corporate Hubs",
      description: "Premium commercial spaces in prime locations for your business growth.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      icon: <FaMapMarkedAlt />,
      title: "Land",
      subtitle: "NA Plots, Agricultural, Industrial",
      description: "From residential plots to industrial land, we help you find the right space.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      icon: <FaChartLine />,
      title: "Investment",
      subtitle: "Growth Potential, High ROI, Secure Assets",
      description: "Smart investment opportunities for long-term wealth creation.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-amber-500 font-semibold tracking-widest text-sm mb-2 uppercase">
            — Our Services —
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B32] mb-4">
            What We Do
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Comprehensive real estate solutions for your needs, whether you're looking to buy, invest or grow your assets.
          </p>
        </div>

        {/* Services Grid */}
        {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Top Half: Image with overlapping Icon */}
              <div className="relative h-48">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute -bottom-6 left-6 bg-[#0B1B32] text-white p-4 rounded-full shadow-lg text-xl">
                  {service.icon}
                </div>
              </div>

              {/* Bottom Half: Content */}
              <div className="p-8 pt-12 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#0B1B32] mb-2">{service.title}</h3>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-4">
                  {service.subtitle}
                </p>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {service.description}
                </p>
                
                {/* Learn More Button */}
                <button 
                  onClick={() => goTo('services')}
                  className="text-amber-500 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all w-max"
                >
                  Learn More <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;