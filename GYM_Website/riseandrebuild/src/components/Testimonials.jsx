// src/components/Testimonials.jsx
const reviews = [
  {
    name: 'Sourav K.',
    text: 'Best gym in Rishra! The equipment is top-notch and the trainers actually care about your progress. Lost 12kg in 5 months.',
    rating: 5,
  },
  {
    name: 'Ananya M.',
    text: 'The yoga classes here changed my life. Priya di is an amazing instructor. The AC makes it so comfortable even in summer.',
    rating: 5,
  },
  {
    name: 'Debjit R.',
    text: 'Clean, well-maintained, and never overcrowded. The personal training sessions are worth every rupee. Highly recommended!',
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-neutral-950 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-red-500 font-bold uppercase tracking-[0.3em] text-xs mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            What Our <span className="text-red-600">Members</span> Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 hover:border-red-600/40 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < r.rating ? 'text-red-500' : 'text-neutral-700'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6 italic">"{r.text}"</p>
              <p className="text-sm font-bold text-white">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}