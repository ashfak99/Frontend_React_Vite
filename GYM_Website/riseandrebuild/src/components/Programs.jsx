// src/components/Programs.jsx
const programs = [
  {
    title: 'Strength Training',
    desc: 'Build raw power with free weights, barbells, and compound lifts.',
    img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Cardio & Conditioning',
    desc: 'Boost endurance with treadmills, cycles, and HIIT circuits.',
    img: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Yoga & Flexibility',
    desc: 'Improve mobility, posture, and mental clarity through guided yoga.',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Personal Training',
    desc: 'One-on-one coaching tailored to your body, goals, and schedule.',
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-black py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-red-500 font-bold uppercase tracking-[0.3em] text-xs mb-3">What We Offer</p>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Our <span className="text-red-600">Programs</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog) => (
            <div
              key={prog.title}
              className="group relative rounded-2xl overflow-hidden h-72 sm:h-80 cursor-pointer"
            >
              <img
                src={prog.img}
                alt={prog.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-bold text-white mb-1">{prog.title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{prog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}