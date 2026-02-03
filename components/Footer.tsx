
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-zinc-50 dark:bg-zinc-950 text-zinc-500 dark:text-zinc-400 py-20 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-600 p-1.5 rounded-lg shadow-lg shadow-emerald-600/10">
                <svg className="w-6 h-6 text-zinc-950" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
                </svg>
              </div>
              <span className="text-xl font-black tracking-tighter text-zinc-900 dark:text-white">
                NEXUS <span className="text-emerald-600 dark:text-emerald-500 italic">HVAC</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed font-medium">
              Providing premium home comfort services for over 30 years. Certified technicians available 24 hours a day, 7 days a week.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-900 flex items-center justify-center hover:bg-emerald-600 hover:text-zinc-950 transition-all duration-300">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-zinc-900 dark:text-white font-black uppercase tracking-widest text-xs mb-6">Our Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors">Air Conditioning Repair</a></li>
              <li><a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors">Heating & Furnace Service</a></li>
              <li><a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors">Plumbing & Water Heaters</a></li>
              <li><a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors">Indoor Air Quality</a></li>
              <li><a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors">Emergency Dispatch</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-900 dark:text-white font-black uppercase tracking-widest text-xs mb-6">Service Areas</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>Sterling, VA (HQ)</li>
              <li>Arlington & Alexandria, VA</li>
              <li>Fairfax & Loudoun, VA</li>
              <li>Rockville & Bethesda, MD</li>
              <li>Washington, DC</li>
            </ul>
          </div>

          <div className="bg-zinc-100 dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <h4 className="text-zinc-900 dark:text-white font-black uppercase tracking-widest text-xs mb-4">Emergency Support</h4>
            <p className="text-emerald-600 dark:text-emerald-500 text-2xl font-black mb-4 tracking-tighter">(800) 555-0199</p>
            <p className="text-[10px] text-zinc-500 dark:text-zinc-600 mb-6 uppercase font-black tracking-widest">Available 24/7/365</p>
            <a href="mailto:service@nexushvac.example" className="text-xs hover:text-zinc-900 dark:hover:text-white underline transition-colors uppercase font-bold tracking-widest">
              Request Quote
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest">
          <p>© 2024 Nexus HVAC & Plumbing. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
