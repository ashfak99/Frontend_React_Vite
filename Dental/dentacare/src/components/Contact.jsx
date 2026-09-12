import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan aap apna API call ya EmailJS laga sakte ho
    console.log("Form submitted:", form);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", email: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Us",
      lines: [
        "Community Market, CA 20, Street No. 254,",
        "Newtown, Kolkata – 700156",
      ],
    },
    {
      icon: "📞",
      title: "Call Us",
      lines: ["+91 98836 25407", "Mon–Sat: 11 AM – 9 PM"],
    },
    {
      icon: "✉️",
      title: "Email Us",
      lines: ["info@dentacare.com", "We reply within 24 hrs"],
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-teal-50/50 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary text-xs md:text-sm font-semibold uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-tight">
            Book Your <span className="text-primary">Appointment</span> Today
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-600">
            Form fill karo ya direct call karo — hum aapki smile ke liye ready
            hain.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* 🔹 Left: Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 md:p-6 border border-gray-100 hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl bg-teal-50 flex items-center justify-center text-xl md:text-2xl">
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-bold text-dark text-base md:text-lg">
                    {info.title}
                  </h3>
                  {info.lines.map((line, i) => (
                    <p
                      key={i}
                      className="text-xs md:text-sm text-gray-600 mt-0.5"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map embed placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-48 md:h-56">
              <iframe
                title="Clinic Location"
                src="https://www.google.com/maps?q=Newtown,Kolkata&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* 🔹 Right: Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm"
            >
              <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                <div className="sm:col-span-1">
                  <label className="text-xs md:text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Aapka naam"
                    className="mt-1.5 w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="text-xs md:text-sm font-medium text-gray-700">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="mt-1.5 w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs md:text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="aapka@email.com"
                    className="mt-1.5 w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs md:text-sm font-medium text-gray-700">
                    Message / Concern
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Aapki problem ya query likhein..."
                    className="mt-1.5 w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full bg-primary text-white font-semibold py-3.5 rounded-full hover:bg-teal-600 transition-all duration-200 shadow-md hover:shadow-lg text-sm md:text-base"
              >
                {submitted ? "✓ Request Sent!" : "Send Request"}
              </button>

              <p className="mt-3 text-[11px] md:text-xs text-gray-500 text-center">
                Hum aapko 24 ghante ke andar contact karenge.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}