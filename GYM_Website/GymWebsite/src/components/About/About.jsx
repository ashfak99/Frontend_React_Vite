import {
    FaDollarSign,
    FaUsers,
    FaClock,
    FaThumbsUp,
    FaCheckCircle,
} from "react-icons/fa";
import mockData from "../../mockdata/mockdata.json";

// Icon map — mockdata mein icon string hai, usse actual component mein convert karte hain
const ICON_MAP = {
    FaDollarSign: FaDollarSign,
    FaUsers: FaUsers,
    FaClock: FaClock,
    FaThumbsUp: FaThumbsUp,
};

function About() {
    const whyChooseUs = mockData?.whyChooseUs || {};
    const stats = mockData?.stats || {};
    const contactInfo = mockData?.contactInfo || {};

    const {
        title = "Why NEXUS GYM?",
        description = "We combine premium quality with budget-friendly pricing.",
        reasons = [],
    } = whyChooseUs;

    const {
        yearsOfExcellence = 3,
        happyMembers = 1200,
        successRate = 95,
        totalTrainers = 12,
        achievementText = "Members have achieved remarkable transformations with our expert guidance.",
    } = stats;

    const city = contactInfo?.address?.city || "Kolkata";

    return (
        <section
            id="about"
            className="relative overflow-hidden bg-white py-20 lg:py-28"
        >
            {/* Subtle background glow */}
            <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-400/5 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
                {/* ================= SECTION HEADER ================= */}
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2">
                        <span className="h-2 w-2 rounded-full bg-blue-600 shadow-[0_0_12px_#2563eb]" />
                        <span className="text-sm font-semibold tracking-wider text-blue-700 uppercase">
                            About Us
                        </span>
                    </div>

                    <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        {title.replace("NEXUS GYM?", "")}
                        <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                            NEXUS GYM?
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                        {description}
                    </p>
                </div>

                {/* ================= REASONS GRID ================= */}
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {reasons.map((reason, index) => {
                        const IconComponent =
                            ICON_MAP[reason.icon] || FaCheckCircle;

                        return (
                            <div
                                key={index}
                                className="
                                    group relative
                                    rounded-2xl
                                    border border-slate-200
                                    bg-white
                                    p-6
                                    shadow-sm
                                    transition-all duration-300
                                    hover:-translate-y-2
                                    hover:border-blue-300
                                    hover:shadow-xl
                                    hover:shadow-blue-500/10
                                "
                            >
                                {/* Icon */}
                                <div
                                    className="
                                        mb-5 inline-flex h-14 w-14 items-center justify-center
                                        rounded-xl
                                        bg-blue-50
                                        text-blue-600
                                        transition-all duration-300
                                        group-hover:bg-blue-600
                                        group-hover:text-white
                                        group-hover:shadow-lg
                                        group-hover:shadow-blue-600/30
                                    "
                                >
                                    <IconComponent size={24} />
                                </div>

                                {/* Title */}
                                <h3 className="mb-2 text-lg font-bold text-slate-900">
                                    {reason.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm leading-6 text-slate-600">
                                    {reason.description}
                                </p>

                                {/* Bottom Accent Line */}
                                <div className="mt-5 h-1 w-10 rounded-full bg-blue-100 transition-all duration-300 group-hover:w-16 group-hover:bg-blue-600" />
                            </div>
                        );
                    })}
                </div>

                {/* ================= STATS STRIP ================= */}
                <div className="mt-20 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50 p-8 lg:p-12">
                    <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                        {/* Left Text */}
                        <div className="max-w-xl">
                            <h3 className="text-2xl font-black leading-tight text-slate-900 sm:text-3xl">
                                Trusted by fitness enthusiasts in{" "}
                                <span className="text-blue-600">{city}</span>
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                                {achievementText}
                            </p>
                        </div>

                        {/* Right Stats */}
                        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-8">
                            <StatItem
                                value={`${yearsOfExcellence}+`}
                                label="Years of Excellence"
                            />
                            <StatItem
                                value={`${happyMembers}+`}
                                label="Happy Members"
                            />
                            <StatItem
                                value={`${successRate}%`}
                                label="Success Rate"
                            />
                            <StatItem
                                value={`${totalTrainers}+`}
                                label="Expert Trainers"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------- Reusable Stat Item ---------- */
function StatItem({ value, label }) {
    return (
        <div className="text-center lg:text-left">
            <p className="text-3xl font-black text-blue-600 sm:text-4xl">
                {value}
            </p>
            <p className="mt-1 text-xs font-medium tracking-wide text-slate-500 uppercase sm:text-sm">
                {label}
            </p>
        </div>
    );
}

export default About;