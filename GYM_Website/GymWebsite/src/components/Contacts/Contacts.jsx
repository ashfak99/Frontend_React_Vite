import { useState } from "react";
import {
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaWhatsapp,
    FaClock,
    FaPaperPlane,
    FaCheckCircle,
} from "react-icons/fa";
import mockData from "../../mockdata/mockdata.json";

function Contact() {
    const contactInfo = mockData?.contactInfo || {};
    const openingHours = mockData?.openingHours || {};

    const {
        address = {},
        phone = "",
        email = "",
        whatsappLink = "",
        inquiryForm = {},
    } = contactInfo;

    const { fields = [], submitLabel = "Send Inquiry", redirectToWhatsApp = false } = inquiryForm;

    // Dynamic form state
    const initialFormState = fields.reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
    }, {});

    const [formData, setFormData] = useState(initialFormState);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (redirectToWhatsApp && whatsappLink) {
            // Build WhatsApp message from form data
            const messageLines = [
                "Hi NEXUS GYM, I'd like to inquire:",
                "",
                ...fields
                    .filter((f) => formData[f.name])
                    .map((f) => `${f.label}: ${formData[f.name]}`),
            ];

            const message = encodeURIComponent(messageLines.join("\n"));

            // Strip existing text param if any, then append ours
            const baseUrl = whatsappLink.split("?")[0];
            const finalUrl = `${baseUrl}?text=${message}`;

            window.open(finalUrl, "_blank", "noopener,noreferrer");
        }

        setIsSubmitted(true);
        setFormData(initialFormState);

        // Reset success message after 4s
        setTimeout(() => setIsSubmitted(false), 4000);
    };

    return (
        <section
            id="contact"
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
                            Get In Touch
                        </span>
                    </div>

                    <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        Ready to Start Your{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                            Journey?
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                        Drop us a message and our team will get back to you within 24 hours. Or just walk in — we're open 7 days a week.
                    </p>
                </div>

                {/* ================= MAIN GRID ================= */}
                <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">

                    {/* ============ LEFT — CONTACT INFO ============ */}
                    <div className="flex flex-col gap-4">

                        {/* Address Card */}
                        <InfoCard
                            icon={FaMapMarkerAlt}
                            title="Visit Us"
                            accent="from-blue-600 to-cyan-500"
                        >
                            <p className="text-sm leading-6 text-slate-700">
                                {address.street}
                                {address.area && `, ${address.area}`}
                                <br />
                                {address.city}
                                {address.state && `, ${address.state}`}
                                {address.pincode && ` - ${address.pincode}`}
                            </p>
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                    address.fullAddress || address.street || ""
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700"
                            >
                                Open in Google Maps →
                            </a>
                        </InfoCard>

                        {/* Phone + Email Row */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            <InfoCard
                                icon={FaPhone}
                                title="Call Us"
                                accent="from-blue-500 to-indigo-500"
                                compact
                            >
                                <a
                                    href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                                    className="text-sm font-semibold text-slate-800 hover:text-blue-600"
                                >
                                    {phone}
                                </a>
                            </InfoCard>

                            <InfoCard
                                icon={FaEnvelope}
                                title="Email Us"
                                accent="from-cyan-500 to-blue-600"
                                compact
                            >
                                <a
                                    href={`mailto:${email}`}
                                    className="break-all text-sm font-semibold text-slate-800 hover:text-blue-600"
                                >
                                    {email}
                                </a>
                            </InfoCard>
                        </div>

                        {/* Opening Hours Card */}
                        <InfoCard
                            icon={FaClock}
                            title="Opening Hours"
                            accent="from-indigo-500 to-blue-600"
                        >
                            <ul className="flex flex-col gap-2">
                                {Object.values(openingHours).map((slot, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center justify-between gap-3 border-b border-slate-100 pb-2 text-sm last:border-b-0 last:pb-0"
                                    >
                                        <span className="font-medium text-slate-600">
                                            {slot.days}
                                        </span>
                                        <span className="font-bold text-slate-900">
                                            {slot.time}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5">
                                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                                <span className="text-xs font-bold text-emerald-700">
                                    Open 7 Days a Week
                                </span>
                            </div>
                        </InfoCard>

                        {/* WhatsApp CTA */}
                        {whatsappLink && (
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group flex items-center justify-between gap-4
                                    rounded-2xl
                                    border border-emerald-200
                                    bg-emerald-50
                                    p-5
                                    transition-all duration-300
                                    hover:-translate-y-1
                                    hover:border-emerald-300
                                    hover:bg-emerald-100
                                    hover:shadow-lg
                                    hover:shadow-emerald-500/10
                                "
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
                                        <FaWhatsapp size={22} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-black text-slate-900">
                                            Chat on WhatsApp
                                        </p>
                                        <p className="text-xs text-slate-600">
                                            Fastest way to reach us
                                        </p>
                                    </div>
                                </div>
                                <span className="text-emerald-600 transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </a>
                        )}
                    </div>

                    {/* ============ RIGHT — INQUIRY FORM ============ */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
                        <div className="mb-6">
                            <h3 className="text-2xl font-black text-slate-900">
                                Send an Inquiry
                            </h3>
                            <p className="mt-1 text-sm text-slate-600">
                                Fill in the form and we'll reach out to you shortly.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            {fields.map((field) => (
                                <FormField
                                    key={field.name}
                                    field={field}
                                    value={formData[field.name] || ""}
                                    onChange={handleChange}
                                />
                            ))}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="
                                    group
                                    mt-2 inline-flex items-center justify-center gap-3
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
                                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                                "
                            >
                                {submitLabel}
                                <FaPaperPlane
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                                    size={13}
                                />
                            </button>

                            {/* Success Message */}
                            {isSubmitted && (
                                <div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                                    <FaCheckCircle className="shrink-0 text-emerald-600" size={18} />
                                    <p className="text-sm font-semibold text-emerald-700">
                                        Thanks! Redirecting you to WhatsApp...
                                    </p>
                                </div>
                            )}
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}

/* ================= INFO CARD ================= */
function InfoCard({ icon: Icon, title, children, accent, compact = false }) {
    return (
        <div
            className={`
                group relative overflow-hidden
                rounded-2xl
                border border-slate-200
                bg-white
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:border-blue-300
                hover:shadow-lg
                hover:shadow-blue-500/10
                ${compact ? "p-5" : "p-6"}
            `}
        >
            {/* Top accent line */}
            <div
                className={`
                    absolute top-0 left-0 h-1 w-full
                    bg-gradient-to-r ${accent}
                    opacity-0 transition-opacity duration-300
                    group-hover:opacity-100
                `}
            />

            <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/30">
                    <Icon size={18} />
                </div>

                <div className="min-w-0 flex-1">
                    <p className="mb-1.5 text-xs font-bold tracking-wider text-slate-500 uppercase">
                        {title}
                    </p>
                    {children}
                </div>
            </div>
        </div>
    );
}

/* ================= FORM FIELD ================= */
function FormField({ field, value, onChange }) {
    const baseClasses = `
        w-full rounded-xl
        border border-slate-200
        bg-slate-50
        px-4 py-3
        text-sm text-slate-900
        placeholder:text-slate-400
        transition-all duration-200
        focus:border-blue-500
        focus:bg-white
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500/20
    `;

    return (
        <div>
            <label
                htmlFor={field.name}
                className="mb-2 block text-sm font-semibold text-slate-700"
            >
                {field.label}
                {field.required && <span className="ml-1 text-blue-600">*</span>}
            </label>

            {field.type === "textarea" ? (
                <textarea
                    id={field.name}
                    name={field.name}
                    value={value}
                    onChange={onChange}
                    required={field.required}
                    rows={4}
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                    className={`${baseClasses} resize-none`}
                />
            ) : (
                <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    value={value}
                    onChange={onChange}
                    required={field.required}
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                    className={baseClasses}
                />
            )}
        </div>
    );
}

export default Contact;