import { useState } from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaDumbbell } from "react-icons/fa";
import mockData from "../../mockdata/mockdata.json";

function Trainers() {
    const trainers = mockData?.trainers || [];

    return (
        <section
            id="trainers"
            className="relative overflow-hidden bg-slate-50 py-20 lg:py-28"
        >
            {/* Background glow */}
            <div className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px]" />
            <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-400/5 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">

                {/* ================= SECTION HEADER ================= */}
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2">
                        <span className="h-2 w-2 rounded-full bg-blue-600 shadow-[0_0_12px_#2563eb]" />
                        <span className="text-sm font-semibold tracking-wider text-blue-700 uppercase">
                            Meet Our Trainers
                        </span>
                    </div>

                    <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        Expert Coaches Who{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                            Transform Lives
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                        Learn from certified professionals with years of experience in strength, conditioning, and nutrition.
                    </p>
                </div>

                {/* ================= TRAINERS GRID ================= */}
                <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {trainers.map((trainer) => (
                        <TrainerCard key={trainer.id} trainer={trainer} />
                    ))}
                </div>

            </div>
        </section>
    );
}

/* ================= TRAINER CARD ================= */
function TrainerCard({ trainer }) {
    const [imgError, setImgError] = useState(false);

    const {
        name = "Trainer",
        title = "Fitness Coach",
        experience = "",
        expertise = [],
        image = "",
        bio = "",
    } = trainer;

    // Fallback avatar with initials
    const initials = name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return (
        <div
            className="
                group relative
                overflow-hidden
                rounded-3xl
                border border-slate-200
                bg-white
                shadow-sm
                transition-all duration-300
                hover:-translate-y-2
                hover:border-blue-300
                hover:shadow-xl
                hover:shadow-blue-500/10
            "
        >
            {/* ================= IMAGE AREA ================= */}
            <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
                {!imgError && image ? (
                    <img
                        src={image}
                        alt={name}
                        onError={() => setImgError(true)}
                        className="
                            h-full w-full object-cover object-center
                            transition-transform duration-500
                            group-hover:scale-110
                        "
                    />
                ) : (
                    /* Fallback: Initials Avatar */
                    <div className="flex h-full w-full items-center justify-center">
                        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-3xl font-black text-white shadow-lg shadow-blue-600/30">
                            {initials}
                        </div>
                    </div>
                )}

                {/* Dark gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Experience Badge */}
                {experience && (
                    <div className="absolute top-4 right-4">
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-blue-600 shadow-lg backdrop-blur-sm">
                            <FaDumbbell size={10} />
                            {experience}
                        </div>
                    </div>
                )}

                {/* Social icons - slide in on hover */}
                <div
                    className="
                        absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2
                        translate-y-16 opacity-0
                        transition-all duration-300
                        group-hover:translate-y-0 group-hover:opacity-100
                    "
                >
                    {[FaInstagram, FaTwitter, FaLinkedin].map((Icon, i) => (
                        <a
                            key={i}
                            href="#"
                            className="
                                flex h-9 w-9 items-center justify-center
                                rounded-full
                                bg-white text-blue-600
                                shadow-lg
                                transition-all duration-200
                                hover:bg-blue-600 hover:text-white
                            "
                            aria-label="Social link"
                        >
                            <Icon size={14} />
                        </a>
                    ))}
                </div>
            </div>

            {/* ================= INFO AREA ================= */}
            <div className="p-6">
                {/* Name */}
                <h3 className="text-xl font-black text-slate-900 transition-colors group-hover:text-blue-600">
                    {name}
                </h3>

                {/* Title */}
                <p className="mt-1 text-sm font-semibold text-blue-600">
                    {title}
                </p>

                {/* Bio */}
                {bio && (
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                        {bio}
                    </p>
                )}

                {/* Expertise Tags */}
                {expertise.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {expertise.slice(0, 3).map((skill, i) => (
                            <span
                                key={i}
                                className="
                                    rounded-full
                                    border border-blue-100
                                    bg-blue-50
                                    px-3 py-1
                                    text-[11px]
                                    font-semibold
                                    text-blue-700
                                    transition-colors
                                    group-hover:border-blue-200
                                "
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Trainers;