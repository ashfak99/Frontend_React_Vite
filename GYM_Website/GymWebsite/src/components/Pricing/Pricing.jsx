import { FaCheck, FaCrown, FaArrowRight } from "react-icons/fa";
import mockData from "../../mockdata/mockdata.json";

function Pricing() {
    const plans = mockData?.membershipPlans || [];
    const freeTrial = mockData?.freeTrial || {};

    // Middle plan ko "popular" banate hain (usually Pro)
    const popularIndex = Math.floor(plans.length / 2);

    return (
        <section
            id="pricing"
            className="relative overflow-hidden bg-white py-20 lg:py-28"
        >
            {/* Background glow */}
            <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/5 blur-[120px]" />
            <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-400/5 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">

                {/* ================= SECTION HEADER ================= */}
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2">
                        <span className="h-2 w-2 rounded-full bg-blue-600 shadow-[0_0_12px_#2563eb]" />
                        <span className="text-sm font-semibold tracking-wider text-blue-700 uppercase">
                            Membership Plans
                        </span>
                    </div>

                    <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        Choose Your{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                            Plan
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                        Flexible plans designed to match your fitness goals and budget.
                    </p>
                </div>

                {/* ================= PLANS GRID ================= */}
                <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
                    {plans.map((plan, index) => {
                        const isPopular = index === popularIndex;

                        return (
                            <div
                                key={plan.id}
                                className={`
                                    group relative flex flex-col
                                    rounded-3xl
                                    border
                                    p-8
                                    transition-all duration-300
                                    ${
                                        isPopular
                                            ? "border-blue-300 bg-gradient-to-br from-blue-50 via-white to-cyan-50 shadow-xl shadow-blue-500/10 lg:-translate-y-4 lg:scale-[1.03]"
                                            : "border-slate-200 bg-white shadow-sm hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"
                                    }
                                `}
                            >
                                {/* Popular Badge */}
                                {isPopular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <div className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold tracking-wider text-white uppercase shadow-lg shadow-blue-600/30">
                                            <FaCrown size={11} />
                                            Most Popular
                                        </div>
                                    </div>
                                )}

                                {/* Plan Name */}
                                <h3 className="text-2xl font-black text-slate-900">
                                    {plan.name}
                                </h3>

                                {/* Access Time */}
                                <p className="mt-1 text-sm font-medium text-slate-500">
                                    {plan.accessTime}
                                </p>

                                {/* Price */}
                                <div className="mt-6 flex items-end gap-1">
                                    <span
                                        className={`
                                            text-5xl font-black tracking-tight
                                            ${isPopular ? "text-blue-600" : "text-slate-900"}
                                        `}
                                    >
                                        {plan.price.split("/")[0]}
                                    </span>
                                    <span className="mb-2 text-sm font-medium text-slate-500">
                                        /{plan.price.split("/")[1] || "month"}
                                    </span>
                                </div>

                                {/* Divider */}
                                <div className="my-6 h-px w-full bg-slate-200" />

                                {/* Features */}
                                <ul className="mb-8 flex flex-1 flex-col gap-3">
                                    {plan.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-3"
                                        >
                                            <span
                                                className={`
                                                    mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center
                                                    rounded-full
                                                    ${
                                                        isPopular
                                                            ? "bg-blue-600 text-white"
                                                            : "bg-blue-50 text-blue-600"
                                                    }
                                                `}
                                            >
                                                <FaCheck size={9} />
                                            </span>
                                            <span className="text-sm leading-6 text-slate-700">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <a
                                    href="#contact"
                                    className={`
                                        group/btn
                                        inline-flex items-center justify-center gap-3
                                        rounded-xl
                                        px-7 py-3.5
                                        font-bold
                                        transition-all duration-300
                                        ${
                                            isPopular
                                                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-600/40"
                                                : "border border-blue-200 bg-white text-blue-600 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-50"
                                        }
                                    `}
                                >
                                    Join Now
                                    <FaArrowRight
                                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                                        size={13}
                                    />
                                </a>
                            </div>
                        );
                    })}
                </div>

                {/* ================= FREE TRIAL CTA ================= */}
                {freeTrial.enabled && (
                    <div className="mt-16 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-600 via-blue-600 to-cyan-500 p-8 text-white shadow-xl shadow-blue-600/20 lg:p-12">
                        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                            <div className="max-w-2xl">
                                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
                                    <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_12px_#ffffff]" />
                                    <span className="text-xs font-bold tracking-wider uppercase">
                                        Limited Time Offer
                                    </span>
                                </div>

                                <h3 className="text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">
                                    {freeTrial.sessionsOffered} Free Training Sessions —{" "}
                                    <span className="text-white/90">On Us!</span>
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-blue-50 sm:text-base">
                                    {freeTrial.description}
                                </p>
                            </div>

                            <a
                                href="#contact"
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
                                {freeTrial.ctaLabel || "Claim Free Trial"}
                                <FaArrowRight
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                    size={13}
                                />
                            </a>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}

export default Pricing;