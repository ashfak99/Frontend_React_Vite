import { FaCalendarAlt, FaUser, FaArrowRight, FaClock } from "react-icons/fa";

// Sample blog posts — baad mein mockdata.json mein shift kar sakte ho
const BLOG_POSTS = [
    {
        id: "b1",
        title: "5 Essential Exercises for Beginners at the Gym",
        excerpt:
            "Just starting your fitness journey? These 5 foundational exercises will build your strength and confidence from day one.",
        category: "Fitness Tips",
        author: "Coach Vikram",
        date: "Feb 12, 2026",
        readTime: "5 min read",
        image: "/assets/images/blog/blog-1.jpg",
    },
    {
        id: "b2",
        title: "The Complete Guide to Pre-Workout Nutrition",
        excerpt:
            "What you eat before training can make or break your performance. Here's a science-backed guide to fuel your workouts.",
        category: "Nutrition",
        author: "Coach Arjun",
        date: "Feb 8, 2026",
        readTime: "7 min read",
        image: "/assets/images/blog/blog-2.jpg",
    },
    {
        id: "b3",
        title: "How to Stay Consistent When Motivation Fades",
        excerpt:
            "Motivation comes and goes — discipline is what keeps you going. Learn how to build habits that stick for life.",
        category: "Mindset",
        author: "Coach Meera",
        date: "Feb 3, 2026",
        readTime: "4 min read",
        image: "/assets/images/blog/blog-3.jpg",
    },
];

function Blog() {
    return (
        <section
            id="blog"
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
                            Fitness Blog
                        </span>
                    </div>

                    <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        Insights to Fuel Your{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                            Fitness Journey
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                        Expert tips, workout guides, and nutrition advice from our certified coaches.
                    </p>
                </div>

                {/* ================= BLOG GRID ================= */}
                <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {BLOG_POSTS.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>

                {/* ================= VIEW ALL CTA ================= */}
                <div className="mt-14 text-center">
                    <a
                        href="#blog"
                        className="
                            group inline-flex items-center justify-center gap-3
                            rounded-xl
                            border border-blue-200
                            bg-white
                            px-7 py-3.5
                            font-bold
                            text-blue-600
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:border-blue-600
                            hover:bg-blue-50
                            hover:shadow-lg
                            hover:shadow-blue-500/10
                        "
                    >
                        View All Articles
                        <FaArrowRight
                            className="transition-transform duration-300 group-hover:translate-x-1"
                            size={13}
                        />
                    </a>
                </div>

            </div>
        </section>
    );
}

/* ================= BLOG CARD ================= */
function BlogCard({ post }) {
    return (
        <article
            className="
                group relative flex flex-col
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
            <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
                <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    onError={(e) => {
                        e.target.style.display = "none";
                    }}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />

                {/* Fallback overlay (visible if image fails) */}
                <div className="absolute inset-0 -z-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50">
                    <span className="text-4xl font-black text-blue-200">
                        {post.category.charAt(0)}
                    </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                    <span className="rounded-full border border-blue-100 bg-white/95 px-3 py-1.5 text-[11px] font-bold tracking-wider text-blue-700 uppercase shadow-sm backdrop-blur-sm">
                        {post.category}
                    </span>
                </div>
            </div>

            {/* ================= CONTENT ================= */}
            <div className="flex flex-1 flex-col p-6">
                {/* Meta Row */}
                <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                        <FaUser size={10} className="text-blue-500" />
                        {post.author}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                        <FaCalendarAlt size={10} className="text-blue-500" />
                        {post.date}
                    </span>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-black leading-snug text-slate-900 transition-colors group-hover:text-blue-600">
                    {post.title}
                </h3>

                {/* Excerpt */}
                <p className="mb-5 line-clamp-3 flex-1 text-sm leading-6 text-slate-600">
                    {post.excerpt}
                </p>

                {/* Footer Row */}
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
                        <FaClock size={10} />
                        {post.readTime}
                    </span>

                    <span className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-transform duration-300 group-hover:translate-x-1">
                        Read More
                        <FaArrowRight size={11} />
                    </span>
                </div>
            </div>
        </article>
    );
}

export default Blog;