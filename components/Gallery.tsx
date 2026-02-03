
import React, { useState } from 'react';
import { generateProjectImage } from '../services/geminiService';

interface Project {
  id: string;
  title: string;
  category: string;
  img: string;
  desc: string;
}

const initialProjects: Project[] = [
  {
    id: 'p1',
    title: 'Smart Home Integration',
    category: 'HVAC Control',
    img: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800',
    desc: 'Precision installation of multi-zone smart thermostat systems for optimized efficiency.'
  },
  {
    id: 'p2',
    title: 'High-Efficiency Heat Pump',
    category: 'Installation',
    img: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800',
    desc: 'A recent Nexus-Gold standard heat pump installation featuring variable speed technology for silent operation.'
  },
  {
    id: 'p3',
    title: 'Industrial Manifold',
    category: 'Plumbing',
    img: 'https://images.unsplash.com/photo-1581094288338-2314dddb7bc3?auto=format&fit=crop&q=80&w=800',
    desc: 'Clean, modern plumbing routing for a luxury residential property with smart leak detection.'
  },
  {
    id: 'p4',
    title: 'Ductless Mini-Split',
    category: 'Custom Solutions',
    img: 'https://images.unsplash.com/photo-1590496793907-39b7df9a8a1a?auto=format&fit=crop&q=80&w=800',
    desc: 'Zoned comfort solutions for modern interior design with whisper-quiet wall units.'
  }
];

const Gallery: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [generatingId, setGeneratingId] = useState<string | null>(null);

  const handleGenerateAI = async (id: string, title: string) => {
    setGeneratingId(id);
    const newImage = await generateProjectImage(title);
    if (newImage) {
      setProjects(prev => prev.map(p => p.id === id ? { ...p, img: newImage } : p));
    }
    setGeneratingId(null);
  };

  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-emerald-600 dark:text-emerald-500 font-black tracking-widest uppercase text-xs mb-4">Nexus Showcase</h2>
            <h3 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-zinc-100">Precision In Every Connection</h3>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-sm font-medium">
            Explore our professional standards. Use the AI button to visualize custom installation scenarios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div key={p.id} className="group relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-300">
              <div className="aspect-[16/9] overflow-hidden relative">
                {generatingId === p.id && (
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-white">
                    <svg className="animate-spin h-10 w-10 text-emerald-500 mb-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="text-xs font-black uppercase tracking-widest">Generating AI Concept...</span>
                  </div>
                )}
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className={`w-full h-full object-cover transition-all duration-700 ${generatingId === p.id ? 'blur-sm scale-110' : 'group-hover:scale-105'}`}
                />
                <button 
                  onClick={() => handleGenerateAI(p.id, p.title)}
                  disabled={!!generatingId}
                  className="absolute bottom-4 right-4 bg-zinc-950/80 backdrop-blur text-emerald-400 p-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-all hover:bg-emerald-600 hover:text-zinc-950 flex items-center gap-2 border border-emerald-500/20 shadow-2xl z-10"
                  title="Generate AI Visualization"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-[10px] font-black uppercase tracking-widest">AI Preview</span>
                </button>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-500 mb-1 block">
                      {p.category}
                    </span>
                    <h4 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">{p.title}</h4>
                  </div>
                </div>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
