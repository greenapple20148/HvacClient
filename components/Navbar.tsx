
import React, { useState } from 'react';

interface NavbarProps {
  onSchedule: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSchedule, theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      title: 'Residential',
      links: ['HVAC Repair', 'HVAC Maintenance', 'HVAC Installation', 'Plumbing', 'Indoor Air Quality', 'Water Heaters']
    },
    {
      title: 'Commercial',
      links: ['Commercial Services', 'Commercial Projects']
    },
    {
      title: 'Home Comfort',
      links: ['Promotions', 'Financing', 'Protection Plans']
    },
    {
      title: 'Our Company',
      links: ['About Falcon', 'Community Involvement', 'Reviews', 'Careers', 'Blog', 'FAQs']
    },
    { title: 'Service Area', links: [] },
    { title: 'Contact Us', links: [] }
  ];

  return (
    <nav className="fixed w-full z-50 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      {/* Top Utility Bar */}
      <div className="hidden lg:block bg-zinc-100/50 dark:bg-zinc-900/50 border-b border-zinc-200 dark:border-zinc-800 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[10px] font-bold text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 uppercase tracking-wider">
              Residential: <a href="tel:8005550199" className="text-emerald-600 dark:text-emerald-500 hover:text-emerald-500 transition-colors">(800) 555-0199</a>
            </span>
            <span className="flex items-center gap-1 uppercase tracking-wider">
              Commercial: <a href="tel:8005550199" className="text-emerald-600 dark:text-emerald-500 hover:text-emerald-500 transition-colors">(800) 555-0199</a>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-500">
              <span className="text-zinc-400 mr-1 uppercase">Excellent Reviews:</span>
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="bg-emerald-600 p-2 rounded-lg shadow-lg shadow-emerald-600/20">
              <svg className="w-8 h-8 text-zinc-950" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
              </svg>
            </div>
            <span className="text-2xl font-black tracking-tighter text-zinc-900 dark:text-zinc-100 leading-none">
              Falcon <br />
              <span className="text-emerald-600 dark:text-emerald-500 italic">HVAC</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, idx) => (
              <div key={idx} className="relative group">
                <button className="flex items-center gap-1 px-3 py-2 text-xs font-bold text-zinc-600 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors uppercase tracking-tight">
                  {item.title}
                  {item.links.length > 0 && (
                    <svg className="w-3 h-3 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                {item.links.length > 0 && (
                  <div className="absolute left-0 top-full pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-xl py-3 w-56 overflow-hidden">
                      {item.links.map((link, lIdx) => (
                        <a 
                          key={lIdx} 
                          href="#" 
                          className="block px-6 py-2.5 text-xs text-zinc-600 dark:text-zinc-400 hover:bg-emerald-600/10 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-semibold"
                        >
                          {link}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <div className="flex items-center gap-4 pl-4 border-l border-zinc-200 dark:border-zinc-800 ml-4">
              <button 
                onClick={onToggleTheme}
                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                title="Toggle Dark/Light Mode"
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
              <button 
                onClick={onSchedule}
                className="bg-emerald-600 text-zinc-950 px-5 py-3 rounded-lg font-black text-xs uppercase tracking-wider hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/20"
              >
                Schedule Service
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
             <button 
                onClick={onToggleTheme}
                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                )}
              </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-500 dark:text-zinc-400 p-2">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 overflow-y-auto max-h-[calc(100vh-80px)]">
          <div className="px-4 py-6 space-y-4">
            <div className="grid grid-cols-2 gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800">
              <a href="tel:8005550199" className="flex flex-col p-3 bg-zinc-100 dark:bg-zinc-900 rounded-xl">
                <span className="text-[10px] uppercase text-zinc-500 font-bold">Residential</span>
                <span className="text-sm font-black text-emerald-600 dark:text-emerald-500">(800) 555-0199</span>
              </a>
              <a href="tel:8005550199" className="flex flex-col p-3 bg-zinc-100 dark:bg-zinc-900 rounded-xl">
                <span className="text-[10px] uppercase text-zinc-500 font-bold">Commercial</span>
                <span className="text-sm font-black text-emerald-600 dark:text-emerald-500">(800) 555-0199</span>
              </a>
            </div>
            
            <div className="space-y-1">
              {navItems.map((item, idx) => (
                <div key={idx} className="py-2">
                  <div className="font-black text-zinc-900 dark:text-zinc-100 uppercase tracking-tighter text-lg">{item.title}</div>
                  {item.links.length > 0 && (
                    <div className="grid grid-cols-1 gap-1 pl-4 mt-2">
                      {item.links.map((link, lIdx) => (
                        <a key={lIdx} href="#" className="py-2 text-zinc-500 font-bold text-sm hover:text-emerald-600">{link}</a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <button 
                onClick={() => { onSchedule(); setIsOpen(false); }}
                className="w-full bg-emerald-600 text-zinc-950 py-4 rounded-xl font-black text-center text-lg uppercase shadow-xl"
              >
                Schedule Service
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
