// src/components/Membership.jsx
const plans = [
  {
    name: 'Basic',
    price: '₹999',
    period: '/month',
    features: ['Gym Floor Access', 'Cardio Zone', 'Locker Room', 'Wi-Fi Access'],
    popular: false,
  },
  {
    name: 'Pro',
    price: '₹1,499',
    period: '/month',
    features: ['Everything in Basic', 'Personal Training (2x/week)', 'Yoga Classes', 'Diet Consultation'],
    popular: true,
  },
  {
    name: 'Elite',
    price: '₹2,499',
    period: '/month',
    features: ['Everything in Pro', 'Unlimited PT Sessions', 'Priority Booking', 'Guest Passes'],
    popular: false,
  },
];

export default function Membership() {
  return (
    <section id="membership" className="bg-black py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-red-500 font-bold uppercase tracking-[0.3em] text-xs mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Choose Your <span className="text-red-600">Plan</span>
          </h2>
          <p className="text-neutral-400 text-sm mt-4">
            Contact us at <span className="text-white font-semibold">+91 8017389524</span> for current offers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 sm:p-8 border transition-all duration-300 ${
                plan.popular
                  ? 'bg-red-600/10 border-red-600 scale-100 md:scale-105'
                  : 'bg-neutral-900 border-neutral-800 hover:border-neutral-600'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-black text-white">{plan.price}</span>
                <span className="text-neutral-500 text-sm mb-1">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-neutral-300">
                    <svg className="w-4 h-4 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center font-bold uppercase tracking-wider text-sm py-3 rounded-full transition-all ${
                  plan.popular
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}