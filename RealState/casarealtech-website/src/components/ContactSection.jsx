import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaUser, FaCommentAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-amber-500 font-semibold tracking-widest text-sm mb-2 uppercase">
            — Get In Touch —
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B32] mb-2">
            Let's Find Your Dream Property
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl">
            Have a question or need help? Fill out the form and our team will get back to you soon.
          </p>
        </div>

        {/* Layout Grid */}
        {/* Mobile: 1 col (stacked), Tablet: 1 col, Desktop: 2 cols */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* LEFT SIDE: Inquiry Form */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <form className="space-y-5">
              {/* Full Name */}
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full pl-12 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
                />
              </div>

              {/* Phone Number */}
              <div className="relative">
                <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full pl-12 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full pl-12 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <FaCommentAlt className="absolute left-4 top-4 text-gray-400" />
                <textarea 
                  rows="4" 
                  placeholder="Your Message / Requirement" 
                  className="w-full pl-12 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-amber-500 text-[#0B1B32] py-3 rounded-md font-semibold hover:bg-amber-400 transition flex items-center justify-center gap-2"
              >
                Send Inquiry <FaPaperPlane />
              </button>
            </form>
          </div>

          {/* RIGHT SIDE: Contact Info + Map */}
          <div className="flex flex-col gap-8">
            
            {/* Contact Details Box */}
            <div className="bg-[#0B1B32] text-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6">Our Office</h3>
              <ul className="space-y-6">
                
                {/* Address */}
                <li className="flex items-start gap-4">
                  <div className="bg-amber-500 text-[#0B1B32] p-3 rounded-full flex-shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Address</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Tower 5A-303, Ecospace Business Tower,<br />
                      Action Area II, Newtown, Kolkata - 700156
                    </p>
                  </div>
                </li>

                {/* Phone */}
                <li className="flex items-start gap-4">
                  <div className="bg-amber-500 text-[#0B1B32] p-3 rounded-full flex-shrink-0">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Phone</h4>
                    <p className="text-gray-400 text-sm">
                      +91 98303 34567<br />
                      +91 98765 43210
                    </p>
                  </div>
                </li>

                {/* Email */}
                <li className="flex items-start gap-4">
                  <div className="bg-amber-500 text-[#0B1B32] p-3 rounded-full flex-shrink-0">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Email</h4>
                    <p className="text-gray-400 text-sm">
                      info@casarealtech.com<br />
                      sales@casarealtech.com
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Map Embed (FIXED) */}
            <div className="rounded-xl overflow-hidden shadow-md h-64 md:h-72 w-full border border-gray-200">
              <iframe 
                src="https://www.google.com/maps?q=Ecospace+Business+Tower,+Newtown,+Kolkata&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Casa Realtech Office Location"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;