// src/components/layout/Footer.jsx
import { gymInfo } from "../../data/gymData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-bg-2 border-t border-white/10 pt-16 md:pt-20 pb-8">
      {/* Top accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="max-w-wrap mx-auto px-5">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12 md:mb-16">
          {/* ============ Brand (wider column on desktop) ============ */}
          <div className="lg:col-span-5">
            <a href="#home" className="inline-flex flex-col leading-none mb-5">
              <span className="font-display text-2xl md:text-3xl tracking-wide text-white">
                ULTIMATE <span className="text-accent">FITNESS</span>
              </span>
              <span className="text-[10px] md:text-xs text-muted tracking-[0.25em] uppercase mt-1">
                {gymInfo.nameSuffix}
              </span>
            </a>

            <p className="text-sm text-muted leading-relaxed mb-6 max-w-sm">
              {gymInfo.tagline}. Quality equipment, expert trainers, clean
              space — all at reasonable membership costs.
            </p>

            {/* Rating badge */}
            <div className="inline-flex items-center gap-3 bg-card border border-white/5 rounded-full px-4 py-2 mb-6">
              <span className="text-accent-2 text-base leading-none">★★★★★</span>
              <span className="text-sm font-semibold text-white">
                {gymInfo.rating}
              </span>
              <span className="text-xs text-muted">
                ({gymInfo.reviewCount} reviews)
              </span>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${gymInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-card border border-white/10 flex items-center justify-center text-muted hover:text-wa hover:border-wa/40 transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>

              <a
                href={`tel:${gymInfo.phoneRaw}`}
                aria-label="Call"
                className="w-10 h-10 rounded-full bg-card border border-white/10 flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </a>

              <a
                href={gymInfo.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Location"
                className="w-10 h-10 rounded-full bg-card border border-white/10 flex items-center justify-center text-muted hover:text-accent-2 hover:border-accent-2/40 transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </a>

              <a
                href={`mailto:${gymInfo.email}`}
                aria-label="Email"
                className="w-10 h-10 rounded-full bg-card border border-white/10 flex items-center justify-center text-muted hover:text-white hover:border-white/30 transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ============ Quick Links ============ */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {gymInfo.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-accent transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ============ Services ============ */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {gymInfo.services.map((s, i) => (
                <li key={i}>
                  <a
                    href={`https://wa.me/${gymInfo.whatsapp}?text=${encodeURIComponent(
                      `Hi, I want to know more about ${s.title} at Ultimate Fitness Centre Newtown.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-accent-2 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-0 h-[1px] bg-accent-2 transition-all duration-300 group-hover:w-3" />
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ============ Contact Info ============ */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-5">
              Visit Us
            </h4>
            <ul className="space-y-4 text-sm">
              {/* Address */}
              <li className="flex items-start gap-3">
                <span className="text-accent text-base leading-none mt-0.5">📍</span>
                <span className="text-muted leading-relaxed">
                  {gymInfo.address}
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-3">
                <span className="text-accent text-base leading-none mt-0.5">📞</span>
                <a
                  href={`tel:${gymInfo.phoneRaw}`}
                  className="text-muted hover:text-white transition-colors"
                >
                  {gymInfo.phone}
                </a>
              </li>

              {/* Hours */}
              <li className="flex items-start gap-3">
                <span className="text-accent text-base leading-none mt-0.5">🕒</span>
                <span className="text-muted">{gymInfo.hours}</span>
              </li>
            </ul>

            {/* Mini CTA */}
            <a
              href={`https://wa.me/${gymInfo.whatsapp}?text=${encodeURIComponent(
                "Hi, I want to join Ultimate Fitness Centre Newtown."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-accent hover:text-accent-2 transition-colors group"
            >
              Join on WhatsApp
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-white/10 mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dim">
          <p className="text-center sm:text-left">
            © {year} {gymInfo.name} {gymInfo.nameSuffix}. All rights reserved.
          </p>

          <div className="flex items-center gap-4 sm:gap-5">
            <a
              href={gymInfo.googleReviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Google Reviews
            </a>
            <span className="text-white/10">|</span>
            <a
              href={gymInfo.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Directions
            </a>
          </div>

          {/* Back to top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="w-9 h-9 rounded-full bg-card border border-white/10 flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-all"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}