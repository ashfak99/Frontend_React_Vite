// src/components/sections/Services.jsx
import { gymInfo } from "../../data/gymData";

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 md:py-28 lg:py-32 bg-bg-2"
    >
      {/* Subtle top divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="max-w-wrap mx-auto px-5">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4">
            What We Offer
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-white mb-5">
            TRAIN YOUR WAY, <span className="text-accent-2">EVERY DAY</span>
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            From strength to stamina, from diet to discipline — pick the
            training style that fits your goals, all under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {gymInfo.services.map((service, i) => (
            <article
              key={i}
              className="group relative bg-card border border-white/5 rounded-2xl p-6 md:p-7 flex flex-col overflow-hidden transition-all duration-300 hover:border-accent/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10"
            >
              {/* Card number watermark */}
              <span className="absolute top-4 right-5 font-display text-5xl md:text-6xl text-white/[0.04] leading-none select-none">
                0{i + 1}
              </span>

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/10 border border-accent/20 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="relative z-10 text-lg md:text-xl font-semibold text-white mb-2 leading-tight">
                {service.title}
              </h3>
              <p className="relative z-10 text-sm text-muted leading-relaxed mb-5 flex-grow">
                {service.desc}
              </p>

              {/* Learn more link */}
              <a
                href={`https://wa.me/${gymInfo.whatsapp}?text=${encodeURIComponent(
                  `Hi, I want to know more about ${service.title} at Ultimate Fitness Centre Newtown.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-2 transition-colors"
              >
                Enquire Now
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* Bottom accent line on hover */}
              <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-accent to-accent-2 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 md:mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 bg-card border border-white/5 rounded-2xl p-6 md:p-8">
          <div>
            <h3 className="font-display text-2xl md:text-3xl text-white leading-tight mb-1">
              NOT SURE WHERE TO START?
            </h3>
            <p className="text-sm md:text-base text-muted">
              Talk to our trainers — they'll help you pick the right program.
            </p>
          </div>
          <a
            href={`https://wa.me/${gymInfo.whatsapp}?text=${encodeURIComponent(
              "Hi, I need help choosing the right training program at Ultimate Fitness Centre Newtown."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full font-semibold text-sm px-5 sm:px-6 py-3 bg-gradient-to-br from-accent to-accent-2 text-[#12100c] shadow-lg shadow-accent/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 whitespace-nowrap"
          >
            Chat with a Trainer →
          </a>
        </div>
      </div>
    </section>
  );
}