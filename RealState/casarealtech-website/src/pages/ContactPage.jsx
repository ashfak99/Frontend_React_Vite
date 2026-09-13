import ContactSection from '../components/ContactSection';

const ContactPage = () => {
  return (
    <div className="bg-white">

      {/* Contact Hero */}
      <section className="bg-[#0B1B32] text-white py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <p className="text-amber-500 font-semibold tracking-widest text-sm uppercase mb-4">
            — Contact Us —
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Let's Talk About Your
            <span className="text-amber-500"> Property</span>
          </h1>

          <p className="text-gray-300 max-w-2xl text-base md:text-lg leading-relaxed">
            Have a property requirement or want to discuss an investment
            opportunity? Our team is ready to help.
          </p>

        </div>
      </section>

      {/* Existing Contact Component */}
      <ContactSection />

    </div>
  );
};

export default ContactPage;