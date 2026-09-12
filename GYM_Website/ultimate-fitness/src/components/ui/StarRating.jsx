// src/components/ui/StarRating.jsx
export default function StarRating({ rating = 0, size = "md" }) {
  const sizes = {
    sm: "text-sm",
    md: "text-base sm:text-lg",
    lg: "text-2xl sm:text-3xl",
  };

  return (
    <div className={`flex items-center gap-0.5 ${sizes[size]}`} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = rating >= star;
        const half = !filled && rating >= star - 0.5;
        return (
          <span
            key={star}
            className={
              filled || half ? "text-accent-2" : "text-white/15"
            }
          >
            {half ? "⯨" : "★"}
          </span>
        );
      })}
    </div>
  );
}