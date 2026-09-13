// src/components/About.jsx
export default function About() {
  const features = [
    { icon: '🏋️', title: 'Premium Equipment', desc: 'Free weights, weight machines, and a full cardio zone to power every workout.' },
    { icon: '❄️', title: 'Air Conditioned', desc: 'Train in comfort with fully air-conditioned facilities year-round.' },
    { icon: '🚗', title: 'Parking & Lockers', desc: 'Ample parking space and secure locker rooms for your convenience.' },
    { icon: '📹', title: 'CCTV Secured', desc: '24/7 CCTV surveillance ensures a safe training environment for all.' },
    { icon: '🧘', title: 'Yoga Classes', desc: 'Dedicated yoga sessions to improve flexibility, balance, and mental focus.' },
    { icon: '📶', title: 'Wi-Fi & Personal Training', desc: 'Stay connected and get one-on-one coaching from certified trainers.' },
  ];

  return (
    <section id="about" className="bg-neutral-950 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-red-500 font-bold uppercase tracking-[0.3em] text-xs mb-3">Who We Are</p>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Built for <span className="text-red-600">Strength</span>
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-400 text-sm sm:text-base mt-4 leading-relaxed">
            RISE & REBUILD is a modern fitness center in Rishra, West Bengal, designed for people
            who are serious about transformation. With a capacity of 100 members, we maintain
            an exclusive, focused environment.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item) => (
            <div
              key={item.title}
              className="group bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-3xl block mb-4">{item.icon}</span>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}