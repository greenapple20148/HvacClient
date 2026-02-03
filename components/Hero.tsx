
import React from 'react';

interface HeroProps {
  onSchedule: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSchedule }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-transparent">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-emerald-100/30 dark:bg-emerald-950/20 rounded-bl-[200px] hidden lg:block blur-3xl transition-colors duration-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100/50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-900/50 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-widest transition-colors duration-500">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse shadow-[0_0_8px_#10b981]"></span>
              Available 24/7 for Emergencies
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-900 dark:text-zinc-100 leading-tight tracking-tight transition-colors duration-500">
              Maximum Comfort. <br />
              <span className="text-emerald-600 dark:text-emerald-500 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">Falcon Reliable.</span>
            </h1>
            
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed font-medium transition-colors duration-500">
              Premium HVAC and Plumbing services serving Northern Virginia, DC, and Maryland. Experience 5-star service from technicians who treat your home like their own.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onSchedule}
                className="px-8 py-4 bg-emerald-600 text-zinc-950 rounded-xl font-black text-lg hover:bg-emerald-500 transition-all text-center shadow-xl shadow-emerald-600/20"
              >
                Schedule Service
              </button>
              <a href="#diagnostic" className="px-8 py-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 rounded-xl font-bold text-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all text-center">
                AI Symptom Checker
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} className="w-12 h-12 rounded-full border-2 border-white dark:border-zinc-950 transition-colors duration-500" src={`https://picsum.photos/seed/${i + 15}/100/100`} alt="Technician" />
                ))}
              </div>
              <div>
                <div className="flex text-emerald-600 dark:text-emerald-500 transition-colors duration-500">
                  {[1, 2, 3, 4, 5].map(i => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-sm font-bold text-zinc-500 uppercase tracking-tighter">4.9/5 from 2,500+ local reviews</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-16 lg:mt-0 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
              <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800" alt="Professional Technician" className="w-full aspect-[4/3] object-cover dark:opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-full border border-emerald-300 dark:border-emerald-500/30">
                    <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-black text-zinc-900 dark:text-zinc-100">Certified Experts</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">All techs are NATE-certified</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500 rounded-full blur-[100px] opacity-10 dark:opacity-20 transition-opacity"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-500 rounded-full blur-[100px] opacity-10 transition-opacity"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
