import { useState } from "react";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import mockData from "../../mockdata/mockdata.json";

function Testimonials() {
    const testimonials = mockData?.testimonials || [];

    return (
        <section
            id="testimonials"
            className="relative overflow-hidden bg-white py-20 lg:py-28"
        >
            {/* Background glow */}
            <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/5 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/5 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">

                {/* ================= SECTION HEADER ================= */}
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2">
                        <span className="h-2 w-2 rounded-full bg-blue-600 shadow-[0_0_12px_#2563eb]" />
                        <span className="text-sm font-semibold tracking-wider text-blue-700 uppercase">
                            Success Stories
                        </span>
                    </div>

                    <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        Real People.{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                            Real Results.
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                        Hear from our members who transformed their lives at NEXUS GYM.
                    </p>
                </div>

                {/* ================= TESTIMONIALS GRID ================= */}
                <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <TestimonialCard
                            key={item.id}
                            testimonial={item}
                            index={index}
                        />
                    ))}
                </div>

                {/* ================= TRUST FOOTER ================= */}
                <div className="mt-16 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50 p-8 lg:p-10">
                    <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">

                        {/* Left — Stats */}
                        <div className="flex flex-wrap items-center justify-center gap-8 lg:justify-start">
                            <div className="text-center lg:text-left">
                                <p className="text-3xl font-black text-blue-600">4.9</p>
                                <div className="mt-1 flex items-center justify-center gap-0.5 lg:justify-start">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} size={12} className="text-amber-400" />
                                    ))}
                                </div>
                                <p className="mt-1 text-xs text-slate-500">Average Rating</p>
                            </div>

                            <div className="hidden h-12 w-px bg-slate-200 lg:block" />

                            <div className="text-center lg:text-left">
                                <p className="text-3xl font-black text-blue-600">1200+</p>
                                <p className="mt-1 text-xs text-slate-500">Happy Members</p>
                            </div>

                            <div className="hidden h-12 w-px bg-slate-200 lg:block" />

                            <div className="text-center lg:text-left">
                                <p className="text-3xl font-black text-blue-600">95%</p>
                                <p className="mt-1 text-xs text-slate-500">Success Rate</p>
                            </div>
                        </div>

                        {/* Right — CTA */}
                        <a
                            href="#contact"
                            className="
                                group
                                inline-flex items-center justify-center gap-3
                                rounded-xl
                                bg-blue-600
                                px-7 py-3.5
                                font-bold
                                text-white
                                shadow-lg shadow-blue-600/25
                                transition-all duration-300
                                hover:-translate-y-1
                                hover:bg-blue-700
                                hover:shadow-blue-600/40
                            "
                        >
                            Start Your Transformation
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}

/* ================= TESTIMONIAL CARD ================= */
function TestimonialCard({ testimonial, index }) {
    const [imgError, setImgError] = useState(false);

    const {
        name = "Member",
        result = "",
        quote = "",
        image = "",
    } = testimonial;

    // Initials fallback
    const initials = name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    // Rotate accent colors slightly for variety
    const accentColors = [
        "from-blue-600 to-cyan-500",
        "from-blue-500 to-indigo-500",
        "from-cyan-500 to-blue-600",
    ];
    const accent = accentColors[index % accentColors.length];

    return (
        <div
            className="
                group relative flex flex-col
                rounded-3xl
                border border-slate-200
                bg-white
                p-7
                shadow-sm
                transition-all duration-300
                hover:-translate-y-2
                hover:border-blue-300
                hover:shadow-xl
                hover:shadow-blue-500/10
            "
        >
            {/* Top Gradient Accent */}
            <div
                className={`
                    absolute top-0 left-0 h-1 w-full
                    bg-gradient-to-r ${accent}
                    opacity-0 transition-opacity duration-300
                    group-hover:opacity-100
                `}
            />

            {/* Quote Icon */}
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/30">
                <FaQuoteLeft size={18} />
            </div>

            {/* Star Rating */}
            <div className="mb-4 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={14} className="text-amber-400" />
                ))}
            </div>

            {/* Quote */}
            <p className="flex-1 text-sm leading-7 text-slate-700">
                "{quote}"
            </p>

            {/* Result Badge */}
            {result && (
                <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <span className="text-xs font-bold text-blue-700">
                        {result}
                    </span>
                </div>
            )}

            {/* Divider */}
            <div className="my-5 h-px w-full bg-slate-100" />

            {/* Author */}
            <div className="flex items-center gap-3">
                {/* Avatar */}
                {!imgError && image ? (
                    <img
                        src={image}
                        alt={name}
                        onError={() => setImgError(true)}
                        className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-blue-100"
                    />
                ) : (
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white ring-2 ring-blue-100">
                        {initials}
                    </div>
                )}

                {/* Name + Label */}
                <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-slate-900">
                        {name}
                    </p>
                    <p className="text-xs text-slate-500">
                        Verified Member
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;