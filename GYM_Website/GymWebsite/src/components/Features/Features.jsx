import {
    FaDumbbell,
    FaAppleAlt,
    FaChartLine,
    FaCheck,
    FaBolt,
    FaHeartbeat,
} from "react-icons/fa";
import mockData from "../../mockdata/mockdata.json";

function Features() {
    const classes = mockData?.classes || {};
    const nutrition = mockData?.nutrition || {};
    const technology = mockData?.technology || {};

    return (
        <section
            id="features"
            className="relative overflow-hidden bg-slate-50 py-20 lg:py-28"
        >
            {/* Background glow */}
            <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/5 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">

                {/* ================= SECTION HEADER ================= */}
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2">
                        <span className="h-2 w-2 rounded-full bg-blue-600 shadow-[0_0_12px_#2563eb]" />
                        <span className="text-sm font-semibold tracking-wider text-blue-700 uppercase">
                            What We Offer
                        </span>
                    </div>

                    <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        More Than Just a{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                            Gym
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                        From group classes to nutrition guidance and smart tracking — we've built a complete fitness ecosystem for you.
                    </p>
                </div>

                {/* ================= 3-COLUMN FEATURES GRID ================= */}
                <div className="mt-14 grid gap-8 lg:grid-cols-3">

                    {/* ============ CARD 1 — GROUP CLASSES ============ */}
                    <FeatureCard
                        icon={FaDumbbell}
                        badge="Group Classes"
                        title={classes.title || "Group Fitness Classes"}
                        description={classes.description}
                        items={classes.classTypes || []}
                        itemsLabel="Available Classes"
                        accent="from-blue-600 to-cyan-500"
                        itemIcon={FaBolt}
                    />

                    {/* ============ CARD 2 — NUTRITION ============ */}
                    {nutrition.isAvailable && (
                        <FeatureCard
                            icon={FaAppleAlt}
                            badge="Nutrition"
                            title={nutrition.title || "Complete Nutrition Guidance"}
                            description={nutrition.description}
                            items={nutrition.includes || []}
                            itemsLabel="What's Included"
                            accent="from-cyan-500 to-blue-600"
                            itemIcon={FaHeartbeat}
                            highlighted
                        />
                    )}

                    {/* ============ CARD 3 — TECHNOLOGY ============ */}
                    <FeatureCard
                        icon={FaChartLine}
                        badge="Smart Tracking"
                        title={technology.title || "Progress Monitoring"}
                        description={technology.description}
                        items={technology.features || []}
                        itemsLabel="Features"
                        accent="from-blue-500 to-indigo-500"
                        itemIcon={FaCheck}
                    />
                </div>

                {/* ================= BOTTOM GUARANTEE STRIP ================= */}
                {technology.guarantee && (
                    <div className="mt-16 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-600 via-blue-600 to-cyan-500 p-8 text-white shadow-xl shadow-blue-600/20 lg:p-10">
                        <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
                            <div className="flex items-center gap-5">
                                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                                    <FaChartLine size={28} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold tracking-[0.2em] text-blue-100 uppercase">
                                        Our Promise
                                    </p>
                                    <h3 className="mt-1 text-2xl font-black sm:text-3xl">
                                        {technology.guarantee}
                                    </h3>
                                </div>
                            </div>

                            <a
                                href="#pricing"
                                className="
                                    group
                                    inline-flex shrink-0 items-center justify-center gap-3
                                    rounded-xl
                                    bg-white
                                    px-7 py-3.5
                                    font-bold
                                    text-blue-600
                                    shadow-lg
                                    transition-all duration-300
                                    hover:-translate-y-1
                                    hover:shadow-2xl
                                "
                            >
                                View Membership Plans
                            </a>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}

/* ================= REUSABLE FEATURE CARD ================= */
function FeatureCard({
    icon: Icon,
    badge,
    title,
    description,
    items,
    itemsLabel,
    accent,
    itemIcon: ItemIcon,
    highlighted = false,
}) {
    return (
        <div
            className={`
                group relative flex flex-col
                overflow-hidden
                rounded-3xl
                border
                p-8
                transition-all duration-300
                ${
                    highlighted
                        ? "border-blue-300 bg-gradient-to-br from-blue-50 via-white to-cyan-50 shadow-lg shadow-blue-500/10"
                        : "border-slate-200 bg-white shadow-sm hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"
                }
            `}
        >
            {/* Top Gradient Accent */}
            <div
                className={`
                    absolute top-0 left-0 h-1 w-full
                    bg-gradient-to-r ${accent}
                    ${highlighted ? "opacity-100" : "opacity-0 transition-opacity duration-300 group-hover:opacity-100"}
                `}
            />

            {/* Header Row */}
            <div className="mb-6 flex items-start justify-between gap-4">
                <div
                    className={`
                        inline-flex h-14 w-14 items-center justify-center
                        rounded-2xl
                        bg-blue-600 text-white
                        shadow-lg shadow-blue-600/25
                        transition-all duration-300
                        group-hover:scale-110
                    `}
                >
                    <Icon size={24} />
                </div>

                <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-bold tracking-wider text-blue-700 uppercase">
                    {badge}
                </span>
            </div>

            {/* Title */}
            <h3 className="mb-3 text-xl font-black leading-tight text-slate-900 sm:text-2xl">
                {title}
            </h3>

            {/* Description */}
            <p className="text-sm leading-6 text-slate-600">
                {description}
            </p>

            {/* Divider */}
            <div className="my-6 h-px w-full bg-slate-200" />

            {/* Items List */}
            <div className="flex-1">
                <p className="mb-4 text-xs font-bold tracking-wider text-slate-500 uppercase">
                    {itemsLabel}
                </p>

                <ul className="flex flex-col gap-3">
                    {items.map((item, i) => (
                        <li
                            key={i}
                            className="flex items-center gap-3"
                        >
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                <ItemIcon size={10} />
                            </span>
                            <span className="text-sm font-medium text-slate-700">
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Features;