
import React from 'react';

interface ServicesProps {
  onSchedule: () => void;
}

const services = [
  {
    title: 'Climate Systems',
    desc: 'Expert diagnostic and repair for forced air, hydronic heating, and ultra-high efficiency inverter systems.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Thermal Management',
    desc: 'Specialized maintenance for gas furnaces, electrical heat pumps, and modern ductless solutions.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.99 7.99 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
  },
  {
    title: 'Precision Plumbing',
    desc: 'From hydrodynamic drain clearing to smart leak prevention systems and tankless water heating.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: 'Air Path Purification',
    desc: 'Advanced HEPA filtration, UV-C biological neutralizers, and smart humidity equilibration.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  }
];

const Services: React.FC<ServicesProps> = ({ onSchedule }) => {
  return (
    <section id="services" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-emerald-600 dark:text-emerald-500 font-black tracking-widest uppercase text-xs mb-4">Core Competencies</h2>
            <h3 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-zinc-100 leading-tight">Professional Engineering For Residential Comfort</h3>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-sm mb-2 font-medium">
            Nexus delivery models leverage military-grade precision and the latest thermodynamic research to ensure your home remains an oasis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/50 hover:bg-emerald-600/5 dark:hover:bg-emerald-950/10 transition-all duration-500">
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 shadow-inner border border-zinc-200 dark:border-zinc-800 text-emerald-600 dark:text-emerald-500 group-hover:bg-emerald-600 group-hover:text-zinc-950 transition-all duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-black text-zinc-900 dark:text-zinc-100 mb-3 tracking-tight">{service.title}</h4>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6 font-medium">{service.desc}</p>
              <button 
                onClick={onSchedule}
                className="text-emerald-600 dark:text-emerald-500 font-bold inline-flex items-center gap-2 group/link text-xs uppercase tracking-widest"
              >
                Learn More 
                <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
