// src/components/sections/Contact.jsx
import { useState } from "react";
import { gymInfo } from "../../data/gymData";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    goal: "General Enquiry",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const goals = [
    "General Enquiry",
    "Weight Loss",
    "Muscle Gain",
    "Personal Training",
    "Nutrition Consulting",
    "Cycling",
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Build a clean message body
  const buildMessage = () =>
    `Hi Ultimate Fitness Centre Newtown! 👋\n\n` +
    `*Name:* ${form.name || "-"}\n` +
    `*Phone:* ${form.phone || "-"}\n` +
    `*Goal:* ${form.goal}\n` +
    `*Message:* ${form.message || "-"}\n\n` +
    `Please share membership details. Thanks!`;

  const sendWhatsApp = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      alert("Please enter your name and phone number.");
      return;
    }
    const url = `https://wa.me/${gymInfo.whatsapp}?text=${encodeURIComponent(
      buildMessage()
    )}`;
    window.open(url, "_blank");
    setSent(true);
  };

  const sendEmail = () => {
    if (!form.name || !form.phone) {
      alert("Please enter your name and phone number.");
      return;
    }
    const subject = `Gym Enquiry — ${form.name} (${form.goal})`;
    const body = buildMessage().replace(/\*/g, ""); // strip WhatsApp formatting
    const url = `mailto:${gymInfo.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 lg:py-32 bg-bg">
      <div className="max-w-wrap mx-auto px-5">
        {/* Header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-white mb-5">
            READY TO <span className="text-accent-2">START?</span>
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Fill the form and we'll reach out on WhatsApp. Or just drop by —
            we're open till 10 pm.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* ================= LEFT: Form ================= */}
          <div className="bg-card border border-white/5 rounded-2xl p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
              Send us a message
            </h3>
            <p className="text-sm text-muted mb-6">
              We'll get back to you on WhatsApp or email.
            </p>

            <form onSubmit={sendWhatsApp} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-medium text-muted mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-bg-2 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-dim focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/20 transition-all"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-medium text-muted mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="e.g. 98XXXXXXXX"
                  className="w-full bg-bg-2 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-dim focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/20 transition-all"
                />
              </div>

              {/* Goal */}
              <div>
                <label className="block text-xs font-medium text-muted mb-1.5">
                  Your Goal
                </label>
                <select
                  name="goal"
                  value={form.goal}
                  onChange={handleChange}
                  className="w-full bg-bg-2 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/20 transition-all appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%239aa5ad%22 stroke-width=%222%22><polyline points=%226 9 12 15 18 9%22/></svg>')] bg-no-repeat bg-[right_1rem_center]"
                >
                  {goals.map((g) => (
                    <option key={g} value={g} className="bg-bg-2">
                      {g}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-muted mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any specific questions? (optional)"
                  className="w-full bg-bg-2 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-dim focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full font-semibold text-sm px-5 py-3.5 bg-wa text-[#04220f] shadow-lg shadow-wa/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-wa/40 transition-all duration-300"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Send on WhatsApp
                </button>
                <button
                  type="button"
                  onClick={sendEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full font-semibold text-sm px-5 py-3.5 bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                >
                  ✉️ Send via Email
                </button>
              </div>

              {/* Success note */}
              {sent && (
                <p className="text-xs text-lime text-center pt-1">
                  ✓ Opening your {form.goal ? "message" : "app"}... If nothing
                  happened, check your popup blocker.
                </p>
              )}
            </form>
          </div>

          {/* ================= RIGHT: Info + Map ================= */}
          <div className="flex flex-col gap-5">
            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Address */}
              <div className="bg-card border border-white/5 rounded-2xl p-5 sm:col-span-2">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-lg flex-none">
                    📍
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-dim mb-1">
                      Address
                    </p>
                    <p className="text-sm text-white leading-relaxed">
                      {gymInfo.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <a
                href={`tel:${gymInfo.phoneRaw}`}
                className="bg-card border border-white/5 rounded-2xl p-5 hover:border-accent/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-lg mb-3 group-hover:scale-110 transition-transform">
                  📞
                </div>
                <p className="text-xs uppercase tracking-wider text-dim mb-1">
                  Call Us
                </p>
                <p className="text-sm font-semibold text-white">
                  {gymInfo.phone}
                </p>
              </a>

              {/* Hours */}
              <div className="bg-card border border-white/5 rounded-2xl p-5">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-lg mb-3">
                  🕒
                </div>
                <p className="text-xs uppercase tracking-wider text-dim mb-1">
                  Hours
                </p>
                <p className="text-sm font-semibold text-white">
                  {gymInfo.hours}
                </p>
              </div>
            </div>

            {/* Map Embed */}
            <div className="rounded-2xl overflow-hidden border border-white/5 h-[260px] sm:h-[320px] lg:h-full lg:min-h-[300px] bg-card">
              <iframe
                title="Ultimate Fitness Centre Newtown location"
                src="https://www.google.com/maps?q=Ultimate+Fitness+Centre+Newtown+Kolkata&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Directions CTA */}
            <a
              href={gymInfo.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full font-semibold text-sm px-5 py-3.5 bg-gradient-to-br from-accent to-accent-2 text-[#12100c] shadow-lg shadow-accent/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300"
            >
              📍 Get Directions on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}