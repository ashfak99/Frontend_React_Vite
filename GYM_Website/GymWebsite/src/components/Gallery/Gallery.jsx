import { useState } from "react";
import { FaTimes, FaExpand, FaChevronLeft, FaChevronRight, FaImage } from "react-icons/fa";
import mockData from "../../mockdata/mockdata.json";

// Bento grid layout classes (3-col grid on md+)
const GRID_CLASSES = [
    "md:col-span-2 md:row-span-2", // 1 — Big hero image
    "md:col-span-1 md:row-span-1", // 2
    "md:col-span-1 md:row-span-1", // 3
    "md:col-span-1 md:row-span-1", // 4
    "md:col-span-1 md:row-span-1", // 5
    "md:col-span-1 md:row-span-1", // 6
];

function Gallery() {
    const gallery = mockData?.gallery || {};
    const { title = "Fuel Your Motivation", description = "", images = [] } = gallery;

    const [lightboxIndex, setLightboxIndex] = useState(null);

    const openLightbox = (index) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    const goPrev = () =>
        setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
    const goNext = () =>
        setLightboxIndex((prev) => (prev + 1) % images.length);

    return (
        <>
            <section
                id="gallery"
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
                                Our Gallery
                            </span>
                        </div>

                        <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            {title.split(" ").slice(0, -1).join(" ")}{" "}
                            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                                {title.split(" ").slice(-1)}
                            </span>
                        </h2>

                        <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                            {description}
                        </p>
                    </div>

                    {/* ================= BENTO GRID ================= */}
                    <div className="mt-14 grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[220px]">
                        {images.map((img, index) => (
                            <GalleryItem
                                key={index}
                                image={img}
                                index={index}
                                className={GRID_CLASSES[index] || GRID_CLASSES[GRID_CLASSES.length - 1]}
                                onClick={() => openLightbox(index)}
                            />
                        ))}
                    </div>

                </div>
            </section>

            {/* ================= LIGHTBOX MODAL ================= */}
            {lightboxIndex !== null && images[lightboxIndex] && (
                <Lightbox
                    images={images}
                    currentIndex={lightboxIndex}
                    onClose={closeLightbox}
                    onPrev={goPrev}
                    onNext={goNext}
                />
            )}
        </>
    );
}

/* ================= GALLERY ITEM ================= */
function GalleryItem({ image, index, className, onClick }) {
    const [imgError, setImgError] = useState(false);

    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                group relative overflow-hidden
                rounded-2xl
                border border-slate-200
                bg-slate-100
                shadow-sm
                transition-all duration-500
                hover:-translate-y-1
                hover:border-blue-300
                hover:shadow-xl
                hover:shadow-blue-500/10
                focus:outline-none focus:ring-2 focus:ring-blue-500
                ${className}
            `}
            aria-label={`View ${image.caption}`}
        >
            {/* Image or Fallback */}
            {!imgError && image.url ? (
                <img
                    src={image.url}
                    alt={image.caption}
                    loading="lazy"
                    onError={() => setImgError(true)}
                    className="
                        h-full w-full object-cover object-center
                        transition-transform duration-700
                        group-hover:scale-110
                    "
                />
            ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-400">
                    <FaImage size={32} />
                    <span className="mt-2 px-3 text-center text-xs font-medium text-blue-500/70">
                        {image.caption}
                    </span>
                </div>
            )}

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Expand Icon */}
            <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-blue-600 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
                <FaExpand size={12} />
            </div>

            {/* Caption */}
            <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                <p className="translate-y-2 text-sm font-bold text-white transition-transform duration-300 group-hover:translate-y-0 sm:text-base">
                    {image.caption}
                </p>
                <div className="mt-1.5 h-0.5 w-0 rounded-full bg-blue-400 transition-all duration-300 group-hover:w-12" />
            </div>
        </button>
    );
}

/* ================= LIGHTBOX ================= */
function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
    const image = images[currentIndex];

    // Keyboard navigation
    const handleKeyDown = (e) => {
        if (e.key === "Escape") onClose();
        if (e.key === "ArrowLeft") onPrev();
        if (e.key === "ArrowRight") onNext();
    };

    // Attach listener via useEffect-style on mount
    if (typeof window !== "undefined") {
        window.onkeydown = handleKeyDown;
    }

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
        >
            {/* Close Button */}
            <button
                type="button"
                onClick={onClose}
                className="absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-110"
                aria-label="Close lightbox"
            >
                <FaTimes size={18} />
            </button>

            {/* Prev Button */}
            {images.length > 1 && (
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        onPrev();
                    }}
                    className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-110 sm:left-8"
                    aria-label="Previous image"
                >
                    <FaChevronLeft size={18} />
                </button>
            )}

            {/* Next Button */}
            {images.length > 1 && (
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        onNext();
                    }}
                    className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-110 sm:right-8"
                    aria-label="Next image"
                >
                    <FaChevronRight size={18} />
                </button>
            )}

            {/* Image Container */}
            <div
                className="relative max-h-[85vh] w-full max-w-5xl"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={image.url}
                    alt={image.caption}
                    className="mx-auto max-h-[85vh] w-auto rounded-2xl object-contain shadow-2xl"
                    onError={(e) => {
                        e.target.src =
                            "https://via.placeholder.com/1200x800/ffffff/2563eb?text=" +
                            encodeURIComponent(image.caption);
                    }}
                />

                {/* Caption Footer */}
                <div className="mt-4 flex items-center justify-between gap-4 text-white">
                    <p className="text-sm font-semibold sm:text-base">
                        {image.caption}
                    </p>
                    <p className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-bold backdrop-blur-md">
                        {currentIndex + 1} / {images.length}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Gallery;