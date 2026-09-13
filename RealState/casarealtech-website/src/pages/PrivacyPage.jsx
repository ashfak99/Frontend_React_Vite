const PrivacyPage = () => {
  return (
    <div className="bg-white">

      <section className="bg-[#0B1B32] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <p className="text-amber-500 font-semibold tracking-widest text-sm uppercase mb-4">
            — Legal —
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            Privacy Policy
          </h1>

        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">

          <div className="prose max-w-none">

            <h2 className="text-2xl font-bold text-[#0B1B32] mb-4">
              Introduction
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              Casa Realtech Private Limited respects your privacy and is
              committed to protecting the information you share with us.
            </p>

            <h2 className="text-2xl font-bold text-[#0B1B32] mb-4">
              Information We Collect
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              Information such as your name, phone number, email address
              and property requirements may be collected when you contact
              us or submit an inquiry.
            </p>

            <h2 className="text-2xl font-bold text-[#0B1B32] mb-4">
              How We Use Information
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              Information may be used to respond to inquiries, provide
              requested property information and communicate with you
              regarding relevant services.
            </p>

            <h2 className="text-2xl font-bold text-[#0B1B32] mb-4">
              Data Protection
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We take reasonable measures to protect information provided
              through our website. For questions regarding this policy,
              please contact our team.
            </p>

          </div>

        </div>
      </section>

    </div>
  );
};

export default PrivacyPage;