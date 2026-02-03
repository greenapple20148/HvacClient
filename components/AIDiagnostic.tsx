
import React, { useState } from 'react';
import { getDiagnosticReport } from '../services/geminiService';
import { DiagnosticResult } from '../types';

interface AIDiagnosticProps {
  onSchedule: () => void;
}

const AIDiagnostic: React.FC<AIDiagnosticProps> = ({ onSchedule }) => {
  const [symptoms, setSymptoms] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DiagnosticResult | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!symptoms.trim()) return;

    setLoading(true);
    setResult(null);
    const report = await getDiagnosticReport(symptoms);
    setResult(report);
    setLoading(false);
  };

  const urgencyColors = {
    Low: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50',
    Medium: 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800/50',
    High: 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50',
    Emergency: 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800/50 animate-pulse',
  };

  return (
    <section id="diagnostic" className="py-24 bg-zinc-950 text-white relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight">Smart Symptom Checker</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-medium">
            Describe the issue you're experiencing, and our AI assistant will provide an initial diagnostic and safety report.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 shadow-2xl">
          <form onSubmit={handleAnalyze} className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">
                What's happening? (e.g., "AC is blowing warm air")
              </label>
              <textarea
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                rows={4}
                className="w-full px-5 py-4 bg-zinc-950 border border-zinc-800 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all placeholder:text-zinc-700 font-medium"
                placeholder="Describe sounds, smells, temperature issues..."
              />
            </div>

            <button
              disabled={loading || !symptoms}
              className={`w-full py-4 rounded-xl font-black text-lg flex items-center justify-center transition-all ${
                loading || !symptoms 
                ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed' 
                : 'bg-emerald-600 hover:bg-emerald-500 text-zinc-950 shadow-lg shadow-emerald-900/20'
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-zinc-950" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing Symptoms...
                </>
              ) : 'Run AI Diagnostic'}
            </button>
          </form>

          {result && (
            <div className="mt-12 space-y-8 animate-in fade-in slide-in-from-bottom duration-500">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 bg-zinc-950 rounded-2xl border border-zinc-800">
                <div>
                  <h3 className="text-xl font-black text-zinc-100 mb-2">Potential Issue: {result.issue}</h3>
                  <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${urgencyColors[result.urgency as keyof typeof urgencyColors]}`}>
                    {result.urgency} Priority
                  </div>
                </div>
                <button 
                  onClick={onSchedule}
                  className="px-6 py-3 bg-zinc-100 text-zinc-950 rounded-xl font-black hover:bg-white transition-colors shrink-0 shadow-lg"
                >
                  Book Professional Tech
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-sm font-black uppercase tracking-widest text-emerald-500">Possible Causes</h4>
                  <ul className="space-y-3">
                    {result.possibleCauses.map((cause, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-zinc-400 text-sm font-medium">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_5px_#10b981]" />
                        {cause}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-black uppercase tracking-widest text-teal-500">Next Steps</h4>
                  <p className="text-zinc-300 leading-relaxed italic border-l-2 border-emerald-500 pl-4 py-1 text-sm font-medium">
                    "{result.recommendation}"
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIDiagnostic;
