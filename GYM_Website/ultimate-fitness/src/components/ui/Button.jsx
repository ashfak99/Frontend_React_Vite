// src/components/ui/Button.jsx
export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
  fullWidth = false,
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold text-sm px-5 sm:px-6 py-3 transition-all duration-300 cursor-pointer whitespace-nowrap";

  const variants = {
    primary:
      "bg-gradient-to-br from-accent to-accent-2 text-[#12100c] shadow-lg shadow-accent/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40",
    wa: "bg-wa text-[#04220f] shadow-lg shadow-wa/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-wa/40",
    ghost:
      "bg-white/5 border border-white/15 text-white backdrop-blur-md hover:bg-white/10 hover:border-white/30",
  };

  const classes = `${base} ${variants[variant]} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}