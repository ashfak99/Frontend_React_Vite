// src/components/sections/Reviews.jsx
import { gymInfo } from "../../data/gymData";
import StarRating from "../ui/StarRating";

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative py-20 md:py-28 lg:py-32 bg-bg-2"
    >
      {/* Top divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="max-w-wrap mx-auto px-5">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4">
            Member Reviews
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-white mb-5">
            WHAT NEWTOWN <span className="text-accent-2">SAYS</span>
          </h2>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            Real feedback from our members — the wins, the energy, and the
            experience on our floor.
          </p>
        </div>

        {/* Two-column: Summary (left) + Reviews (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 lg:gap-12">
          {/* ================= LEFT: Rating Summary ================= */}
          <div className="bg-card border border-white/5 rounded-2xl p-6 md:p-8 h-fit lg:sticky lg:top-24">
            {/* Big rating */}
            <div className="flex items-end gap-4 mb-5">
              <span className="font-display text-6xl sm:text-7xl text-white leading-none">
                {gymInfo.rating}
              </span>
              <div className="pb-2">
                <StarRating rating={gymInfo.rating} size="lg" />
                <p className="text-xs text-muted mt-1">
                  {gymInfo.reviewCount} Google reviews
                </p>
              </div>
            </div>

            {/* Breakdown bars */}
            <div className="space-y-2.5 mb-6">
              {gymInfo.ratingBreakdown.map((row) => (
                <div key={row.stars} className="flex items-center gap-3">
                  <span className="text-xs text-muted w-3 text-right">
                    {row.stars}
                  </span>
                  <span className="text-accent-2 text-xs">★</span>
                  <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-accent-2 rounded-full transition-all duration-700"
                      style={{ width: `${row.percent}%` }}
                    />
                  </div>
                  <span className="text-xs text-dim w-8 text-right">
                    {row.percent}%
                  </span>
                </div>
              ))}
            </div>

            {/* CTA to Google */}
            <a
              href={gymInfo.googleReviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full rounded-full font-semibold text-sm px-5 py-3 bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              ⭐ Rate & Review on Google
            </a>
          </div>

          {/* ================= RIGHT: AI Summary + Review Cards ================= */}
          <div className="flex flex-col gap-6">
            {/* AI Summary highlight */}
            <div className="relative bg-gradient-to-br from-accent/10 via-card to-card-2 border border-accent/20 rounded-2xl p-6 md:p-7 overflow-hidden">
              <div className="absolute top-4 right-4 text-5xl text-accent/10 leading-none select-none">
                ”
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                  AI Summary
                </span>
                <span className="h-[1px] flex-1 bg-accent/20" />
              </div>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                {gymInfo.aiSummary}
              </p>
            </div>

            {/* Review Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {gymInfo.reviews.map((rev, i) => (
                <article
                  key={i}
                  className="bg-card border border-white/5 rounded-2xl p-6 flex flex-col gap-4 hover:border-accent/30 transition-all duration-300"
                >
                  {/* Top row: avatar + name */}
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center font-display text-lg text-[#12100c]">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white leading-tight">
                        {rev.name}
                      </p>
                      <p className="text-[11px] text-dim">
                        Posted on Google
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <StarRating rating={rev.rating} size="sm" />

                  {/* Text */}
                  <p className="text-sm text-muted leading-relaxed">
                    “{rev.text}”
                  </p>
                </article>
              ))}
            </div>

            {/* Trainer shoutout strip */}
            <div className="bg-card border border-white/5 rounded-2xl p-6 md:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lime/30 to-accent/20 border border-lime/30 flex items-center justify-center text-xl">
                  💪
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-white leading-tight">
                    Trainer Nitish — praised by members
                  </h3>
                  <p className="text-xs sm:text-sm text-muted mt-0.5">
                    Knowledgeable, supportive, and hands-on coaching.
                  </p>
                </div>
              </div>
              <a
                href={`https://wa.me/${gymInfo.whatsapp}?text=${encodeURIComponent(
                  "Hi, I want to book a session with trainer Nitish at Ultimate Fitness Centre Newtown."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full font-semibold text-sm px-5 py-3 bg-gradient-to-br from-accent to-accent-2 text-[#12100c] shadow-lg shadow-accent/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 whitespace-nowrap"
              >
                Book a Session →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}