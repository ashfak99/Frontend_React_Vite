// src/components/sections/Gallery.jsx
import { useState } from "react";
import { gymInfo } from "../../data/gymData";

// Placeholder media — user se actual files aayengi
const media = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
    alt: "Gym floor with modern equipment",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    type: "video",
    thumb: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
    alt: "Weight training area",
    duration: "0:24",
    span: "",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
    alt: "Personal training session",
    span: "",
  },
  {
    type: "video",
    thumb: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=80",
    alt: "Cycling session",
    duration: "0:22",
    span: "",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=80",
    alt: "Cardio machines",
    span: "",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=900&q=80",
    alt: "Free weights zone",
    span: "",
  },
  {
    type: "video",
    thumb: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    alt: "Trainer guiding member",
    duration: "0:35",
    span: "",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=900&q=80",
    alt: "Gym interior",
    span: "lg:col-span-2",
  },
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="gallery"
      className="relative py-20 md:py-28 lg:py-32 bg-bg"
    >
      <div className="max-w-wrap mx-auto px-5">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4">
              Inside The Gym
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-white mb-5">
              A LOOK <span className="text-accent-2">INSIDE</span>
            </h2>
            <p className="text-base sm:text-lg text-muted leading-relaxed">
              Real moments from our floor — equipment, energy, and the people
              who make it happen.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[140px] sm:auto-rows-[180px] lg:auto-rows-[200px] gap-3 sm:gap-4">
          {media.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(item)}
              className={`group relative overflow-hidden rounded-xl border border-white/5 hover:border-accent/40 transition-all duration-300 ${item.span}`}
            >
              <img
                src={item.type === "video" ? item.thumb : item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Video play badge */}
              {item.type === "video" && (
                <>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-lg sm:text-xl ml-0.5">▶</span>
                    </div>
                  </div>
                  <span className="absolute top-3 right-3 text-[10px] sm:text-xs font-semibold text-white bg-bg/70 backdrop-blur-md border border-white/10 rounded-full px-2.5 py-1">
                    {item.duration}
                  </span>
                </>
              )}

              {/* Caption on hover */}
              <span className="absolute bottom-0 left-0 right-0 p-3 text-left text-xs sm:text-sm text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.alt}
              </span>
            </button>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="text-sm md:text-base text-muted">
            Want to see more? Follow us or visit us in person.
          </p>
          <a
            href={gymInfo.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full font-semibold text-sm px-5 sm:px-6 py-3 bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
          >
            📍 Visit Us in Newtown
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-[fadeIn_.2s_ease]"
        >
          {/* Close button */}
          <button
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white text-xl hover:bg-white/20 transition-colors"
          >
            ×
          </button>

          {/* Media container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden border border-white/10 bg-card"
          >
            {active.type === "video" ? (
              <div className="relative aspect-video bg-black flex items-center justify-center">
                <img
                  src={active.thumb}
                  alt={active.alt}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6">
                  <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center">
                    <span className="text-white text-2xl ml-1">▶</span>
                  </div>
                  <p className="text-white text-sm font-medium">
                    Video coming soon
                  </p>
                  <p className="text-dim text-xs max-w-sm">
                    Actual video file yahan embed hogi jab gym se media milegi.
                  </p>
                </div>
              </div>
            ) : (
              <img
                src={active.src}
                alt={active.alt}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            )}

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-bg to-transparent">
              <p className="text-sm text-white font-medium">{active.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}