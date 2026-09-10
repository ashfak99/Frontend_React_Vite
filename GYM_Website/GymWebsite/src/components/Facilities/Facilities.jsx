import { FaHeartbeat, FaDumbbell, FaWeightHanging, FaCheck } from "react-icons/fa";
import mockData from "../../mockdata/mockdata.json";

// Icon map — mockdata mein icon string hai
const ICON_MAP = {
    FaHeartbeat: FaHeartbeat,
    FaDumbbell: FaDumbbell,
    FaWeightHanging: FaWeightHanging,
};

function Facilities() {
    const facilities = mockData?.facilities || {};
    const { zones = [], amenities = [] } = facilities;

    return (
        <section
            id="facilities"
            className="relative overflow-hidden bg-slate-50 py-20 lg:py-28"
        >
            {/* Subtle background glow */}
            <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/5 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">

                {/* ================= SECTION HEADER ================= */}
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2">
                        <span className="h-2 w-2 rounded-full bg-blue-600 shadow-[0_0_12px_#2563eb]" />
                        <span className="text-sm font-semibold tracking-wider text-blue-700 uppercase">
                            Our Facilities
                        </span>
                    </div>

                    <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        Premium{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                            Equipment
                        </span>{" "}
                        & Zones
                    </h2>

                    <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                        Everything you need to crush your fitness goals — all under one roof.
                    </p>
                </div>

                {/* ================= ZONES GRID ================= */}
                <div className="mt-14 grid gap-6 md:grid-cols-3">
                    {zones.map((zone, index) => {
                        const IconComponent = ICON_MAP[zone.icon] || FaDumbbell;

                        return (
                            <div
                                key={index}
                                className="
                                    group relative
                                    overflow-hidden
                                    rounded-2xl
                                    border border-slate-200
                                    bg-white
                                    p-8
                                    shadow-sm
                                    transition-all duration-300
                                    hover:-translate-y-2
                                    hover:border-blue-300
                                    hover:shadow-xl
                                    hover:shadow-blue-500/10
                                "
                            >
                                {/* Top gradient accent */}
                                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                {/* Icon */}
                                <div
                                    className="
                                        mb-6 inline-flex h-16 w-16 items-center justify-center
                                        rounded-2xl
                                        bg-blue-50
                                        text-blue-600
                                        transition-all duration-300
                                        group-hover:bg-blue-600
                                        group-hover:text-white
                                        group-hover:shadow-lg
                                        group-hover:shadow-blue-600/30
                                    "
                                >
                                    <IconComponent size={28} />
                                </div>

                                {/* Title */}
                                <h3 className="mb-3 text-xl font-bold text-slate-900">
                                    {zone.name}
                                </h3>

                                {/* Description */}
                                <p className="text-sm leading-6 text-slate-600">
                                    {zone.description}
                                </p>

                                {/* Bottom subtle accent */}
                                <div className="mt-6 h-1 w-10 rounded-full bg-blue-100 transition-all duration-300 group-hover:w-16 group-hover:bg-blue-600" />
                            </div>
                        );
                    })}
                </div>

                {/* ================= AMENITIES STRIP ================= */}
                <div className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 lg:p-12">
                    <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

                        {/* Left Text */}
                        <div className="max-w-xl">
                            <h3 className="text-2xl font-black leading-tight text-slate-900 sm:text-3xl">
                                Everything You Need,{" "}
                                <span className="text-blue-600">Included</span>
                            </h3>
                            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                                We've thought of every detail so you can focus only on your workout.
                            </p>
                        </div>

                        {/* Right Amenities Grid */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                            {amenities.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3"
                                >
                                    <span
                                        className="
                                            flex h-7 w-7 shrink-0 items-center justify-center
                                            rounded-full
                                            bg-blue-50
                                            text-blue-600
                                        "
                                    >
                                        <FaCheck size={11} />
                                    </span>
                                    <span className="text-sm font-medium text-slate-700">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Facilities;