
import React, { useState, useRef, useEffect } from 'react';
import { getServiceRecommendation } from '../services/geminiService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  sources?: any[];
}

interface AIAgentProps {
  onSchedule: () => void;
}

const AIAgent: React.FC<AIAgentProps> = ({ onSchedule }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: "Hi! I'm your Nexus HVAC Specialist. Need help with a cold heater, noisy AC, or plumbing tip? I can also help you book a technician. How can I assist you?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = input;
    setInput('');
    setIsTyping(true);

    const response = await getServiceRecommendation(currentInput);
    
    const assistantMsg: Message = { 
      role: 'assistant', 
      content: response.text || "I apologize, but I'm having trouble connecting to my systems.",
      sources: response.sources
    };
    
    setMessages(prev => [...prev, assistantMsg]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[550px] bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="p-4 bg-emerald-600 text-zinc-950 flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-zinc-950/20 rounded-full flex items-center justify-center border border-zinc-950/30">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-black text-sm leading-none">Nexus HVAC Pro</h4>
                <span className="text-[10px] font-bold uppercase tracking-tighter flex items-center gap-1 mt-1 opacity-70">
                  <span className="w-1.5 h-1.5 bg-zinc-950 rounded-full animate-pulse"></span>
                  Online Expert
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-black/10 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-zinc-950">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                  ? 'bg-emerald-600 text-zinc-950 font-bold rounded-tr-none' 
                  : 'bg-zinc-900 text-zinc-200 border border-zinc-800 rounded-tl-none font-medium'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-zinc-900 p-3 rounded-2xl shadow-sm border border-zinc-800 rounded-tl-none flex gap-1">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-4 bg-zinc-900 border-t border-zinc-800 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask an expert..."
              className="flex-grow px-4 py-2 bg-zinc-950 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all border border-zinc-800 text-zinc-100"
            />
            <button 
              type="submit"
              disabled={!input.trim() || isTyping}
              className={`p-2 rounded-xl transition-all ${
                !input.trim() || isTyping ? 'text-zinc-700' : 'text-emerald-500 hover:bg-emerald-950/20'
              }`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 ${
          isOpen ? 'bg-zinc-800 rotate-90 text-white' : 'bg-emerald-600 text-zinc-950'
        }`}
      >
        {isOpen ? (
           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default AIAgent;
