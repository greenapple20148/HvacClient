
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Gallery from './components/Gallery';
import AIDiagnostic from './components/AIDiagnostic';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import AIAgent from './components/AIAgent';
import ScheduleModule from './components/ScheduleModule';

const App: React.FC = () => {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('nexus-theme') as 'dark' | 'light') || 'dark';
  });

  const toggleSchedule = () => setIsScheduleOpen(!isScheduleOpen);
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('nexus-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className={`min-h-screen transition-colors duration-500 flex flex-col selection:bg-emerald-500/30 ${theme === 'dark' ? 'bg-zinc-950 text-zinc-100' : 'bg-zinc-50 text-zinc-900'}`}>
      <Navbar onSchedule={toggleSchedule} theme={theme} onToggleTheme={toggleTheme} />
      
      <main className="flex-grow">
        <Hero onSchedule={toggleSchedule} />
        
        {/* Trusted Partners / Logos */}
        <section className="py-12 bg-transparent border-y border-zinc-200 dark:border-zinc-900">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-[10px] font-black text-zinc-500 dark:text-zinc-600 uppercase tracking-[0.3em] mb-8">Authorized Dealer & Certified Partner</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 dark:opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <span className="text-2xl font-black text-zinc-800 dark:text-zinc-100 tracking-tighter">TRANE</span>
              <span className="text-2xl font-black text-zinc-800 dark:text-zinc-100 tracking-tighter">CARRIER</span>
              <span className="text-2xl font-black text-zinc-800 dark:text-zinc-100 tracking-tighter">LENNOX</span>
              <span className="text-2xl font-black text-zinc-800 dark:text-zinc-100 tracking-tighter">RHEEM</span>
              <span className="text-2xl font-black text-zinc-800 dark:text-zinc-100 tracking-tighter">NATE</span>
            </div>
          </div>
        </section>

        <Services onSchedule={toggleSchedule} />
        
        <Features />
        
        <Gallery />

        <AIDiagnostic onSchedule={toggleSchedule} />
        
        <Reviews />

        {/* Call to Action Banner */}
        <section className="py-24 bg-emerald-600 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-zinc-950 mb-6 tracking-tight">Ready for 5-Star Service?</h2>
            <p className="text-emerald-950/80 text-xl mb-12 max-w-2xl mx-auto font-bold">
              Schedule your inspection today and see why Nexus is the highest-rated HVAC team in the region.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={toggleSchedule}
                className="px-10 py-5 bg-zinc-950 text-emerald-500 rounded-2xl font-black text-xl hover:bg-zinc-900 transition-all shadow-2xl"
              >
                Book My Appointment
              </button>
              <button className="px-10 py-5 bg-emerald-700 text-zinc-950 rounded-2xl font-black text-xl hover:bg-emerald-800 transition-all border border-emerald-500/30">
                Call (800) 555-0199
              </button>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-20 pointer-events-none text-zinc-950">
             <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M47.7,-63.2C61.4,-54.6,71.7,-40.7,76.5,-25.1C81.3,-9.6,80.5,7.6,74.7,23.3C68.9,38.9,58.1,53,44.2,62.8C30.3,72.6,13.3,78.2,-2.7,81.9C-18.7,85.6,-33.7,87.4,-47.1,80.5C-60.6,73.5,-72.5,57.7,-78.7,40.8C-84.9,23.9,-85.4,5.9,-81.1,-10.5C-76.8,-26.9,-67.7,-41.8,-55.1,-50.7C-42.5,-59.7,-26.3,-62.7,-10.5,-67.4C5.2,-72.1,21,-78.6,36.5,-75.7C52,-72.8,67.1,-60.5,47.7,-63.2Z" transform="translate(100 100)" />
              </svg>
          </div>
        </section>
      </main>

      <Footer />
      <AIAgent onSchedule={toggleSchedule} />
      <ScheduleModule isOpen={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} />
      
      {/* Sticky Mobile Call Button */}
      <div className="fixed bottom-6 left-6 md:hidden z-50">
        <a href="tel:8005550199" className="w-14 h-14 bg-emerald-600 text-zinc-950 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.82 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default App;
