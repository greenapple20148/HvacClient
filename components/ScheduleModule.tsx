
import React, { useState } from 'react';

interface ScheduleModuleProps {
  isOpen: boolean;
  onClose: () => void;
}

const ScheduleModule: React.FC<ScheduleModuleProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    address: ''
  });

  if (!isOpen) return null;

  const services = [
    { id: 'ac', label: 'AC Repair', icon: '❄️' },
    { id: 'heating', label: 'Heating', icon: '🔥' },
    { id: 'plumbing', label: 'Plumbing', icon: '💧' },
    { id: 'maintenance', label: 'Maintenance', icon: '🛠️' }
  ];

  const timeSlots = ['8 AM - 12 PM', '12 PM - 4 PM', '4 PM - 8 PM'];
  const dates = ['Mon, Oct 23', 'Tue, Oct 24', 'Wed, Oct 25', 'Thu, Oct 26', 'Fri, Oct 27'];

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md transition-opacity" onClick={onClose} />

      <div className="relative bg-zinc-900 w-full max-w-xl rounded-[2rem] shadow-2xl overflow-hidden border border-zinc-800 animate-in zoom-in-95 duration-200">
        <div className="h-1.5 w-full bg-zinc-950 flex">
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i} 
              className={`h-full flex-grow transition-all duration-500 ${step >= i ? 'bg-emerald-600' : 'bg-transparent'}`}
            />
          ))}
        </div>

        <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-zinc-800 rounded-full text-zinc-500 z-10">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 md:p-12">
          {step === 1 && (
            <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
              <div className="text-center">
                <h3 className="text-3xl font-black text-zinc-100">What do you need?</h3>
                <p className="text-zinc-500 mt-2 font-medium">Select a service for professional assistance.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setFormData({...formData, service: s.label}); handleNext(); }}
                    className={`p-6 rounded-2xl border-2 transition-all text-left flex flex-col gap-3 group ${
                      formData.service === s.label ? 'border-emerald-600 bg-emerald-950/20' : 'border-zinc-800 hover:border-emerald-900 hover:bg-zinc-800'
                    }`}
                  >
                    <span className="text-3xl">{s.icon}</span>
                    <span className="font-black text-zinc-100 uppercase tracking-widest text-xs">{s.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
              <div className="text-center">
                <h3 className="text-3xl font-black text-zinc-100">Choose a time</h3>
                <p className="text-zinc-500 mt-2 font-medium">Pick a date and arrival window.</p>
              </div>
              <div className="space-y-6">
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {dates.map((d) => (
                    <button
                      key={d}
                      onClick={() => setFormData({...formData, date: d})}
                      className={`px-4 py-3 rounded-xl border-2 font-black whitespace-nowrap transition-all text-xs uppercase tracking-widest ${
                        formData.date === d ? 'border-emerald-600 bg-emerald-950/20 text-emerald-400' : 'border-zinc-800 text-zinc-500 hover:border-zinc-700'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {timeSlots.map((t) => (
                    <button
                      key={t}
                      onClick={() => { setFormData({...formData, time: t}); }}
                      className={`p-4 rounded-xl border-2 text-left font-black transition-all text-sm tracking-wide ${
                        formData.time === t ? 'border-emerald-600 bg-emerald-950/20 text-emerald-400' : 'border-zinc-800 text-zinc-500 hover:border-zinc-700'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <button onClick={handleBack} className="flex-grow py-4 rounded-xl font-black text-zinc-500 hover:text-zinc-300 transition-all uppercase tracking-widest text-xs">Back</button>
                <button 
                  disabled={!formData.date || !formData.time}
                  onClick={handleNext} 
                  className="flex-[2] py-4 bg-emerald-600 text-zinc-950 rounded-xl font-black shadow-lg shadow-emerald-900/20 disabled:opacity-50 uppercase tracking-widest text-xs"
                >
                  Confirm Timing
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
              <div className="text-center">
                <h3 className="text-3xl font-black text-zinc-100">Your Details</h3>
                <p className="text-zinc-500 mt-2 font-medium">Almost there! We just need your location.</p>
              </div>
              <div className="space-y-4">
                <input 
                  type="text" placeholder="Full Name" 
                  className="w-full p-4 bg-zinc-950 border-2 border-zinc-800 rounded-xl focus:border-emerald-600 text-zinc-100 outline-none font-medium"
                  value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <input 
                  type="tel" placeholder="Phone Number" 
                  className="w-full p-4 bg-zinc-950 border-2 border-zinc-800 rounded-xl focus:border-emerald-600 text-zinc-100 outline-none font-medium"
                  value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                <textarea 
                  placeholder="Address & Details" 
                  className="w-full p-4 bg-zinc-950 border-2 border-zinc-800 rounded-xl focus:border-emerald-600 text-zinc-100 outline-none h-24 font-medium"
                  value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>
              <div className="flex gap-4 pt-4">
                <button onClick={handleBack} className="flex-grow py-4 rounded-xl font-black text-zinc-500 hover:text-zinc-300 uppercase tracking-widest text-xs">Back</button>
                <button 
                  disabled={!formData.name || !formData.phone || !formData.address}
                  onClick={handleNext} 
                  className="flex-[2] py-4 bg-emerald-600 text-zinc-950 rounded-xl font-black shadow-lg shadow-emerald-900/20 disabled:opacity-50 uppercase tracking-widest text-xs"
                >
                  Schedule Appointment
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center space-y-8 py-8 animate-in zoom-in-95 duration-500">
              <div className="w-24 h-24 bg-emerald-900/30 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-4xl font-black text-zinc-100 tracking-tight">All Set!</h3>
                <p className="text-zinc-400 mt-4 max-w-sm mx-auto font-medium">
                  Your appointment for <span className="text-emerald-500 font-black uppercase tracking-tighter">{formData.service}</span> is booked.
                </p>
              </div>
              <div className="p-4 bg-zinc-950 rounded-2xl border border-zinc-800 inline-block">
                <span className="text-[10px] uppercase font-black text-zinc-600 tracking-widest block mb-1">Confirmation Code</span>
                <p className="text-xl font-black text-emerald-500 tracking-[0.2em]">NEX-{Math.floor(100000 + Math.random() * 900000)}</p>
              </div>
              <button 
                onClick={onClose}
                className="w-full py-4 bg-zinc-100 text-zinc-950 rounded-xl font-black uppercase tracking-widest text-xs"
              >
                Close Portal
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScheduleModule;
