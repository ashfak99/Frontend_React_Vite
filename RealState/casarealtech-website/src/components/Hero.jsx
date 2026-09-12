import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center lg:justify-start">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=1920&auto=format&fit=crop')" 
        }}
      >
        {/* Dark gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B32]/95 via-[#0B1B32]/80 to-[#0B1B32]/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20 text-center lg:text-left text-white">
        <div className="max-w-3xl mx-auto lg:mx-0">
          
          {/* Top Label */}
          <p className="text-amber-500 font-semibold tracking-widest text-xs md:text-sm mb-4 uppercase flex items-center justify-center lg:justify-start gap-2">
            <span className="w-8 h-[2px] bg-amber-500 inline-block"></span> 
            Premium Real Estate Consultancy
          </p>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Where Every Dream <br className="hidden md:block" /> 
            Finds a <span className="text-amber-500">Roof.</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-gray-300 text-base md:text-lg lg:text-xl mb-10 max-w-xl mx-auto lg:mx-0">
            Trusted real estate consultancy in Kolkata, helping you find the perfect property for a brighter tomorrow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="w-full sm:w-auto bg-amber-500 text-[#0B1B32] px-8 py-4 rounded-md font-semibold hover:bg-amber-400 transition flex items-center justify-center gap-2">
              Explore Properties <FaArrowRight />
            </button>
            <button className="w-full sm:w-auto border border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[#0B1B32] transition flex items-center justify-center gap-2">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;