// src/components/sections/Hero.jsx
import { gymInfo } from "../../data/gymData";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80"
          alt="Ultimate Fitness Centre Newtown gym floor"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/85 via-bg/70 to-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-transparent to-bg/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-wrap mx-auto px-5 pt-28 pb-20 md:pt-32 md:pb-24 w-full">
        <div className="max-w-3xl">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6">
            <span className="text-accent-2 text-lg leading-none">★★★★★</span>
            <span className="text-sm font-semibold text-white">
              {gymInfo.rating}
            </span>
            <span className="text-xs text-muted">
              ({gymInfo.reviewCount} reviews)
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-5">
            ULTIMATE <span className="text-accent">FITNESS</span>
            <br />
            <span className="text-accent-2">CENTRE</span> NEWTOWN
          </h1>

          {/* Subline */}
          <p className="text-base sm:text-lg text-muted max-w-xl mb-8 leading-relaxed">
            {gymInfo.tagline}. Quality equipment, expert trainers, clean space,
            and a positive environment — all at reasonable membership costs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              href={`https://wa.me/${gymInfo.whatsapp}?text=${encodeURIComponent(
                "Hi, I want to join Ultimate Fitness Centre Newtown. Please share membership details."
              )}`}
              variant="primary"
            >
              Join on WhatsApp →
            </Button>
            <Button
              href={gymInfo.mapLink}
              variant="ghost"
            >
              📍 Get Directions
            </Button>
          </div>

          {/* Trust strip */}
          <div className="mt-10 md:mt-14 flex flex-wrap gap-x-8 gap-y-3 text-xs sm:text-sm text-dim">
            <span>✓ Open · Closes 10 pm</span>
            <span>✓ Personal Training</span>
            <span>✓ Nutrition Consulting</span>
            <span>✓ Weight Training</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg to-transparent z-10" />
    </section>
  );
}