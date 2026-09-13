// src/components/Hero.jsx
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <p className="text-red-500 font-bold uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 animate-pulse">
          Rishra, Hooghly — West Bengal
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter mb-6">
          RISE &<br />
          <span className="text-red-600">REBUILD</span>
        </h1>

        <p className="max-w-2xl mx-auto text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed mb-10">
          Transform your body. Transform your life. Strength, Discipline, Consistency —
          the three pillars that build champions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#membership"
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-300 text-sm"
          >
            Start Your Journey
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto border-2 border-white/30 hover:border-red-500 text-white hover:text-red-500 font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-300 text-sm"
          >
            Learn More
          </a>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-16 sm:mt-20 max-w-2xl mx-auto">
          {[
            { value: '100+', label: 'Members' },
            { value: '24/7', label: 'Support' },
            { value: '4.5★', label: 'Rated' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-white">{stat.value}</p>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-neutral-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}