// src/components/sections/About.jsx
import { gymInfo } from "../../data/gymData";

const highlights = [
  {
    icon: "🏋️",
    title: "Quality Equipment",
    desc: "Well-maintained, modern machines for every training style.",
  },
  {
    icon: "🧼",
    title: "Clean Space",
    desc: "Hygienic and organised floor — always ready for a workout.",
  },
  {
    icon: "🎯",
    title: "Expert Trainers",
    desc: "Knowledgeable, supportive coaches who guide every rep.",
  },
  {
    icon: "💰",
    title: "Reasonable Pricing",
    desc: "Premium fitness experience at membership costs that make sense.",
  },
];

const stats = [
  { value: "4.2★", label: "Google Rating" },
  { value: "317+", label: "Happy Reviews" },
  { value: "4", label: "Core Services" },
  { value: "10 PM", label: "Open Till Late" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28 lg:py-32 bg-bg"
    >
      <div className="max-w-wrap mx-auto px-5">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4">
            About Us
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-white mb-5">
            WHERE NEWTOWN <span className="text-accent">GETS STRONGER</span>
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            {gymInfo.aiSummary}
          </p>
        </div>

        {/* Two-column layout: Highlights + Image/Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="bg-card border border-white/5 rounded-2xl p-5 sm:p-6 hover:border-accent/40 hover:bg-card-2 transition-all duration-300 group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Image + Stats */}
          <div className="flex flex-col gap-6">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80"
                alt="Inside Ultimate Fitness Centre Newtown"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 text-xs text-white/80">
                <span className="bg-bg/70 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5">
                  📍 Newtown, Kolkata
                </span>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="bg-card border border-white/5 rounded-xl p-4 text-center"
                >
                  <div className="font-display text-2xl sm:text-3xl text-accent-2 leading-none mb-1">
                    {s.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-dim uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}