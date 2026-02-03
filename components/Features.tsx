
import React from 'react';

const features = [
  {
    title: 'Falcon Smart Monitoring',
    desc: 'Real-time diagnostic sensors that alert us to issues before your system fails.',
    icon: '🛰️'
  },
  {
    title: 'Eco-Forward Cooling',
    desc: 'We prioritize low-GWP refrigerants and ultra-high SEER2 rated equipment.',
    icon: '🍃'
  },
  {
    title: 'Upfront Logic Pricing',
    desc: 'Transparent, flat-rate pricing based on national standards. No hourly surprises.',
    icon: '📊'
  },
  {
    title: 'Elite NATE Fleet',
    desc: 'Our technicians undergo 100+ hours of annual continuing education.',
    icon: '🛡️'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-100/50 dark:bg-zinc-900/50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 border-zinc-200 dark:border-zinc-800 last:border-0 md:border-b lg:border-b-0 lg:border-r">
              <span className="text-4xl mb-4">{f.icon}</span>
              <h4 className="text-zinc-900 dark:text-zinc-100 font-black uppercase tracking-widest text-xs mb-2">{f.title}</h4>
              <p className="text-zinc-500 dark:text-zinc-500 text-sm leading-relaxed font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
