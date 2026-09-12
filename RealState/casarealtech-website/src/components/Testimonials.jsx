import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Rahul Saha",
      role: "Business Owner",
      rating: 5,
      review: "Casa Realtech made our commercial property search so easy. Professional, transparent, and truly reliable. Highly recommended!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Home Buyer",
      rating: 5,
      review: "The team was extremely helpful from property selection to documentation. Best real estate experience in Kolkata!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Arijit Das",
      role: "Investor",
      rating: 5,
      review: "Great insights on investment opportunities. Their guidance helped me make a profitable decision. Very professional team!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="mb-12">
          <p className="text-amber-500 font-semibold tracking-widest text-sm mb-2 uppercase">
            — Testimonials —
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B32] mb-2">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Real stories. Real satisfaction.
          </p>
        </div>

        {/* Reviews Grid */}
        {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Quote Icon (Background) */}
              <FaQuoteLeft className="absolute top-6 right-6 text-4xl text-gray-100" />

              {/* Client Info (Top) */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-amber-500"
                />
                <div>
                  <h3 className="font-bold text-[#0B1B32]">{review.name}</h3>
                  <p className="text-xs text-gray-500">{review.role}</p>
                  
                  {/* Star Rating */}
                  <div className="flex text-amber-500 text-xs mt-1 gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-600 text-sm leading-relaxed italic flex-grow relative z-10">
                "{review.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;