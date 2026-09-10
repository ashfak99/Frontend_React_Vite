import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaArrowUp,
    FaHeart,
} from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import logo from "../../assets/logoNexus.png";
import mockData from "../../mockdata/mockdata.json";

// Icon map — mockdata mein icon string hai
const SOCIAL_ICON_MAP = {
    FaFacebook: FaFacebookF,
    FaInstagram: FaInstagram,
    FaYoutube: FaYoutube,
};

function Footer() {
    const siteConfig = mockData?.siteConfig || {};
    const footer = mockData?.footer || {};
    const contactInfo = mockData?.contactInfo || {};

    const {
        about = "",
        quickLinks = [],
        socialMedia = [],
        copyright = "",
    } = footer;

    const { address = {}, phone = "", email = "" } = contactInfo;
    const { siteName = "NEXUS GYM", tagline = "" } = siteConfig;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative overflow-hidden bg-slate-900 text-slate-300">
            {/* Background glow */}
            <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

            {/* Top Blue Accent Line */}
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500" />

            <div className="relative z-10 mx-auto max-w-[1400px] px-6 pt-16 pb-8 lg:px-10 lg:pt-20">

                {/* ================= MAIN GRID ================= */}
                <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">

                    {/* ============ COLUMN 1 — BRAND + ABOUT ============ */}
                    <div>
                        <a href="#" className="mb-5 inline-flex items-center gap-3">
                            <img
                                src={logo}
                                alt={`${siteName} Logo`}
                                className="h-14 w-auto object-contain brightness-0 invert"
                                onError={(e) => {
                                    e.target.style.display = "none";
                                }}
                            />
                        </a>

                        <p className="mb-5 text-sm font-semibold text-blue-400">
                            {tagline}
                        </p>

                        <p className="text-sm leading-6 text-slate-400">
                            {about}
                        </p>

                        {/* Social Media */}
                        {socialMedia.length > 0 && (
                            <div className="mt-6">
                                <p className="mb-3 text-xs font-bold tracking-wider text-slate-500 uppercase">
                                    Follow Us
                                </p>
                                <div className="flex items-center gap-3">
                                    {socialMedia.map((social, i) => {
                                        const Icon =
                                            SOCIAL_ICON_MAP[social.icon] || FaFacebookF;

                                        return (
                                            <a
                                                key={i}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={social.platform}
                                                className="
                                                    flex h-10 w-10 items-center justify-center
                                                    rounded-xl
                                                    border border-slate-700
                                                    bg-slate-800/50
                                                    text-slate-400
                                                    transition-all duration-300
                                                    hover:-translate-y-1
                                                    hover:border-blue-500
                                                    hover:bg-blue-600
                                                    hover:text-white
                                                    hover:shadow-lg
                                                    hover:shadow-blue-600/30
                                                "
                                            >
                                                <Icon size={14} />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* ============ COLUMN 2 — QUICK LINKS ============ */}
                    <div>
                        <h4 className="mb-5 text-sm font-bold tracking-wider text-white uppercase">
                            Quick Links
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {quickLinks.map((link, i) => (
                                <li key={i}>
                                    <a
                                        href={link.link}
                                        className="
                                            group inline-flex items-center gap-2
                                            text-sm text-slate-400
                                            transition-colors duration-200
                                            hover:text-blue-400
                                        "
                                    >
                                        <span className="h-px w-3 bg-slate-600 transition-all duration-200 group-hover:w-5 group-hover:bg-blue-500" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ============ COLUMN 3 — EXPLORE ============ */}
                    <div>
                        <h4 className="mb-5 text-sm font-bold tracking-wider text-white uppercase">
                            Explore
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {[
                                { label: "Facilities", link: "#facilities" },
                                { label: "Pricing", link: "#pricing" },
                                { label: "Trainers", link: "#trainers" },
                                { label: "Gallery", link: "#gallery" },
                                { label: "Blog", link: "#blog" },
                            ].map((link, i) => (
                                <li key={i}>
                                    <a
                                        href={link.link}
                                        className="
                                            group inline-flex items-center gap-2
                                            text-sm text-slate-400
                                            transition-colors duration-200
                                            hover:text-blue-400
                                        "
                                    >
                                        <span className="h-px w-3 bg-slate-600 transition-all duration-200 group-hover:w-5 group-hover:bg-blue-500" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ============ COLUMN 4 — CONTACT ============ */}
                    <div>
                        <h4 className="mb-5 text-sm font-bold tracking-wider text-white uppercase">
                            Get In Touch
                        </h4>

                        <ul className="flex flex-col gap-4 text-sm">
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt
                                    size={14}
                                    className="mt-1 shrink-0 text-blue-500"
                                />
                                <span className="leading-6 text-slate-400">
                                    {address.street}
                                    {address.city && `, ${address.city}`}
                                    {address.pincode && ` - ${address.pincode}`}
                                </span>
                            </li>

                            <li>
                                <a
                                    href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                                    className="flex items-center gap-3 text-slate-400 transition-colors hover:text-blue-400"
                                >
                                    <FaPhone size={14} className="shrink-0 text-blue-500" />
                                    {phone}
                                </a>
                            </li>

                            <li>
                                <a
                                    href={`mailto:${email}`}
                                    className="flex items-start gap-3 break-all text-slate-400 transition-colors hover:text-blue-400"
                                >
                                    <FaEnvelope
                                        size={14}
                                        className="mt-1 shrink-0 text-blue-500"
                                    />
                                    {email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ================= BOTTOM BAR ================= */}
                <div className="mt-14 border-t border-slate-800 pt-6">
                    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                        {/* Copyright */}
                        <p className="text-center text-xs text-slate-500 sm:text-left">
                            {copyright || `© ${new Date().getFullYear()} ${siteName}. All Rights Reserved.`}
                        </p>

                        {/* Made With Love */}
                        <p className="inline-flex items-center gap-2 text-xs text-slate-500">
                            Made with
                            <FaHeart size={10} className="text-red-500" />
                            in Kolkata
                        </p>

                        {/* Back to Top */}
                        <button
                            type="button"
                            onClick={scrollToTop}
                            className="
                                group inline-flex items-center gap-2
                                rounded-full
                                border border-slate-700
                                bg-slate-800/50
                                px-4 py-2
                                text-xs font-bold
                                text-slate-400
                                transition-all duration-300
                                hover:-translate-y-1
                                hover:border-blue-500
                                hover:bg-blue-600
                                hover:text-white
                            "
                            aria-label="Back to top"
                        >
                            <IoMdMenu className="-rotate-90" size={14} />
                            Back to Top
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;