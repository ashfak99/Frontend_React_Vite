import { FaArrowRight, FaPlay } from "react-icons/fa";
import mockData from "../../mockdata/mockdata.json";

function Hero() {
    const heroSection = mockData?.heroSection || {};

    const {
        backgroundImage = "https://via.placeholder.com/1920x1080/ffffff/2563eb?text=Nexus+Gym",
        subtitle = "Transform your body and mind with our world-class facilities and expert trainers.",
        primaryCTA = { label: "Join Now", link: "#" },
        secondaryCTA = { label: "Watch Video", link: "#" },
    } = heroSection;

    return (
        <section
            id="home"
            className="relative min-h-[calc(100vh-96px)] overflow-hidden bg-white text-slate-900"
        >
            {/* Background Image (light overlay) */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
            />

            {/* Soft Blue Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-blue-50" />

            {/* Decorative Blue Glow */}
            <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
            <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-blue-400/10 blur-[120px]" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-[1400px] items-center px-6 py-20 lg:px-10">
                <div className="grid w-full items-center gap-12 lg:grid-cols-2">
                    {/* LEFT CONTENT */}
                    <div className="max-w-2xl">
                        {/* Small Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2">
                            <span className="h-2 w-2 rounded-full bg-blue-600 shadow-[0_0_12px_#2563eb]" />
                            <span className="text-sm font-semibold tracking-wider text-blue-700 uppercase">
                                NEXUS GYM
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl xl:text-8xl">
                            Build
                            <span className="block text-slate-900">
                                Your{" "}
                                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                                    Legacy
                                </span>
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                            {subtitle}
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <a
                                href={primaryCTA.link || "#"}
                                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-600/40"
                            >
                                {primaryCTA.label || "Join Now"}
                                <FaArrowRight
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                    size={14}
                                />
                            </a>

                            <a
                                href={secondaryCTA.link || "#"}
                                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-blue-200 bg-white px-7 py-3.5 font-bold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-50"
                            >
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                    <FaPlay size={9} />
                                </span>
                                {secondaryCTA.label || "Watch Video"}
                            </a>
                        </div>

                        {/* Trust / Mini Stats */}
                        <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-slate-200 pt-6">
                            <div>
                                <p className="text-2xl font-bold text-slate-900">1200+</p>
                                <p className="text-xs text-slate-500">Happy Members</p>
                            </div>
                            <div className="h-10 w-px bg-slate-200" />
                            <div>
                                <p className="text-2xl font-bold text-slate-900">95%</p>
                                <p className="text-xs text-slate-500">Success Rate</p>
                            </div>
                            <div className="h-10 w-px bg-slate-200" />
                            <div>
                                <p className="text-2xl font-bold text-slate-900">12+</p>
                                <p className="text-xs text-slate-500">Expert Trainers</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT VISUAL AREA */}
                    <div className="relative hidden h-[600px] lg:block">
                        <div className="absolute right-10 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full border border-blue-200 bg-blue-50 shadow-[0_0_100px_rgba(37,99,235,0.15)]" />
                        <div className="absolute right-24 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full border border-blue-100" />

                        <img
                            src={backgroundImage}
                            alt="Nexus Gym"
                            className="absolute right-0 top-1/2 h-[550px] w-[550px] -translate-y-1/2 object-cover opacity-95 [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
                            onError={(e) => {
                                e.target.src =
                                    "https://via.placeholder.com/550x550/ffffff/2563eb?text=Nexus+Gym";
                            }}
                        />

                        <div className="absolute right-4 top-20 rounded-2xl border border-blue-100 bg-white px-5 py-4 shadow-2xl">
                            <p className="text-xs font-medium text-slate-500">TRAIN HARD</p>
                            <p className="mt-1 text-lg font-black text-blue-600">STAY STRONG</p>
                        </div>

                        <div className="absolute bottom-20 left-10 rounded-2xl border border-blue-100 bg-white px-5 py-4 shadow-2xl">
                            <p className="text-xs text-slate-500">YOUR POTENTIAL</p>
                            <p className="mt-1 text-xl font-black text-slate-900">HAS NO LIMIT</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 md:flex">
                <span className="text-[10px] font-semibold tracking-[0.3em] uppercase">Scroll</span>
                <div className="h-8 w-px bg-gradient-to-b from-blue-600 to-transparent" />
            </div>
        </section>
    );
}

export default Hero;