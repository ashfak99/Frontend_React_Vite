import { FaArrowRight, FaPlay } from "react-icons/fa";
import mockData from "../../mockdata/mockdata.json";

function Hero() {
    // Safe fallback if mockData or heroSection is missing
    const heroSection = mockData?.heroSection || {};

    // Provide default values for all used fields
    const {
        backgroundImage = "https://via.placeholder.com/1920x1080/050b14/3b82f6?text=Nexus+Gym",
        subtitle = "Transform your body and mind with our world-class facilities and expert trainers.",
        primaryCTA = { label: "Join Now", link: "#" },
        secondaryCTA = { label: "Watch Video", link: "#" },
    } = heroSection;

    // Debug: log the data to see if it's loaded correctly
    console.log("Hero data:", heroSection);

    return (
        <section
            id="home"
            className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#050b14] text-white"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#050b14]/75" />

            {/* Blue Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050b14] via-[#050b14]/80 to-blue-950/30" />

            {/* Decorative Glow */}
            <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
            <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-[1400px] items-center px-6 py-20 lg:px-10">
                <div className="grid w-full items-center gap-12 lg:grid-cols-2">
                    {/* LEFT CONTENT */}
                    <div className="max-w-2xl">
                        {/* Small Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 backdrop-blur-sm">
                            <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_12px_#3b82f6]" />
                            <span className="text-sm font-semibold tracking-wider text-blue-300 uppercase">
                                NEXUS GYM
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
                            Build
                            <span className="block text-white">
                                Your{" "}
                                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                                    Legacy
                                </span>
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
                            {subtitle}
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <a
                                href={primaryCTA.link || "#"}
                                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/40"
                            >
                                {primaryCTA.label || "Join Now"}
                                <FaArrowRight
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                    size={14}
                                />
                            </a>

                            <a
                                href={secondaryCTA.link || "#"}
                                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10"
                            >
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-blue-500">
                                    <FaPlay size={9} />
                                </span>
                                {secondaryCTA.label || "Watch Video"}
                            </a>
                        </div>

                        {/* Trust / Mini Stats */}
                        <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6">
                            <div>
                                <p className="text-2xl font-bold text-white">1200+</p>
                                <p className="text-xs text-gray-400">Happy Members</p>
                            </div>
                            <div className="h-10 w-px bg-white/10" />
                            <div>
                                <p className="text-2xl font-bold text-white">95%</p>
                                <p className="text-xs text-gray-400">Success Rate</p>
                            </div>
                            <div className="h-10 w-px bg-white/10" />
                            <div>
                                <p className="text-2xl font-bold text-white">12+</p>
                                <p className="text-xs text-gray-400">Expert Trainers</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT VISUAL AREA */}
                    <div className="relative hidden h-[600px] lg:block">
                        <div className="absolute right-10 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full border border-blue-500/20 bg-blue-500/5 shadow-[0_0_100px_rgba(37,99,235,0.15)]" />
                        <div className="absolute right-24 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full border border-blue-400/10" />

                        <img
                            src={backgroundImage}
                            alt="Nexus Gym"
                            className="absolute right-0 top-1/2 h-[550px] w-[550px] -translate-y-1/2 object-cover opacity-80 [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
                            onError={(e) => {
                                // Fallback if image fails to load
                                e.target.src = "https://via.placeholder.com/550x550/050b14/3b82f6?text=Nexus+Gym";
                            }}
                        />

                        <div className="absolute right-4 top-20 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 shadow-2xl backdrop-blur-xl">
                            <p className="text-xs font-medium text-gray-400">TRAIN HARD</p>
                            <p className="mt-1 text-lg font-black text-blue-400">STAY STRONG</p>
                        </div>

                        <div className="absolute bottom-20 left-10 rounded-2xl border border-blue-400/20 bg-[#0b1422]/80 px-5 py-4 shadow-2xl backdrop-blur-xl">
                            <p className="text-xs text-gray-400">YOUR POTENTIAL</p>
                            <p className="mt-1 text-xl font-black">HAS NO LIMIT</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-500 md:flex">
                <span className="text-[10px] font-semibold tracking-[0.3em] uppercase">Scroll</span>
                <div className="h-8 w-px bg-gradient-to-b from-blue-500 to-transparent" />
            </div>
        </section>
    );
}

export default Hero;