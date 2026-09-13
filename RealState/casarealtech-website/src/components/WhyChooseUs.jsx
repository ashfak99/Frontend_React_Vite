import { FaShieldAlt, FaStar, FaUsers, FaHeadset } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <FaShieldAlt />,
      title: "RERA Registered",
      subtitle: "RERA No: WBRERA/x/xxx/xxxx/xxxxxx",
      description: "Complete transparency & legal assurance."
    },
    {
      id: 2,
      icon: <FaStar />,
      title: "5.0 Google Rating",
      subtitle: "Based on 100+ genuine reviews",
      description: "Our clients trust us, we deliver."
    },
    {
      id: 3,
      icon: <FaUsers />,
      title: "Expert Consultation",
      subtitle: "Experienced team with market expertise.",
      description: "Get the right advice, make the right decision."
    },
    {
      id: 4,
      icon: <FaHeadset />,
      title: "End-to-End Support",
      subtitle: "From property search to post-purchase assistance.",
      description: "We're with you, every step of the way."
    }
  ];

  return (
    <section className="py-20 bg-[#0B1B32] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-amber-500 font-semibold tracking-widest text-sm mb-2 uppercase">
            — Why Choose Us —
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Trusted Real Estate Partner
          </h2>
        </div>

        {/* Features Grid */}
        {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`flex flex-col items-center text-center px-4 ${
                // Desktop par vertical divider lines add karne ke liye
                index !== features.length - 1 ? 'lg:border-r lg:border-gray-700' : ''
              }`}
            >
              {/* Icon Circle */}
              <div 
                className="w-16 h-16 rounded-full border-2 border-amber-500 flex items-center justify-center text-amber-500 text-2xl mb-6"
                aria-hidden="true"
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              
              {/* Subtitle (small, colored) */}
              <p className="text-amber-500 text-xs font-medium mb-3">
                {feature.subtitle}
              </p>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;