// src/components/Trainers.jsx
const trainers = [
  {
    name: 'Arjun Das',
    role: 'Head Strength Coach',
    img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Priya Sharma',
    role: 'Yoga & Flexibility',
    img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Rahul Mondal',
    role: 'Personal Trainer',
    img: 'https://images.unsplash.com/photo-1597347343908-2937e7dcc560?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Sneha Roy',
    role: 'Cardio & Nutrition',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop',
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="bg-neutral-950 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-red-500 font-bold uppercase tracking-[0.3em] text-xs mb-3">The Team</p>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Meet Your <span className="text-red-600">Trainers</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((t) => (
            <div key={t.name} className="group text-center">
              <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[3/4]">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-base font-bold text-white">{t.name}</h3>
              <p className="text-xs text-red-500 font-semibold uppercase tracking-wider mt-1">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}