
import React, { useState, useRef, useEffect } from 'react';
import { getStudyBuddyResponse } from '../services/geminiService.ts';
import { ChatMessage } from '../types.ts';

const StudyBuddy: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Halo! Gue Futureline Study Buddy. Ada materi yang bikin lo pusing? Sini tanya gue, bakal gue jelasin pake bahasa santai biar lo cepet ngerti! 🚀" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (customPrompt?: string) => {
    const textToSend = customPrompt || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await getStudyBuddyResponse(textToSend);
    const aiMsg: ChatMessage = { role: 'model', text: response };
    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  const quickActions = [
    { label: 'Rangkum materi', prompt: 'Bisa tolong rangkumin materi tentang metabolisme sel?' },
    { label: 'Contoh soal', prompt: 'Kasih gue contoh soal fisika tentang gerak lurus berubah beraturan dong.' },
    { label: 'Jelaskan lebih mudah', prompt: 'Coba jelasin konsep ekonomi inflasi tapi kayak lagi ngomong ke anak kecil.' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col h-[85vh] bg-[#0a192f]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-white flex items-center gap-3">
             <span className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-indigo-500/10">📘</span>
             Study Buddy
          </h1>
          <p className="text-slate-400 font-medium">Asisten belajar pintarmu yang bahasanya santai.</p>
        </div>
        <div className="flex items-center gap-4 p-4 glass-card rounded-2xl border-white/10 shadow-lg">
           <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
           </div>
           <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Assistant Online</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Ready to Help</p>
           </div>
        </div>
      </div>

      <div className="flex-grow glass-card rounded-[2.5rem] p-4 md:p-8 flex flex-col overflow-hidden relative border border-white/10 shadow-2xl">
        {/* Background Pattern - subtle dots */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div ref={scrollRef} className="flex-grow overflow-y-auto space-y-8 pr-4 custom-scrollbar relative z-10">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex items-end gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                {msg.role === 'model' && (
                  <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-600/20">
                    <span className="text-lg">📘</span>
                  </div>
                )}
                <div className={`p-5 rounded-3xl leading-relaxed text-sm md:text-base shadow-lg ${
                  msg.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-br-none' 
                    : 'bg-[#050c18] border border-white/10 text-slate-200 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
                {msg.role === 'user' && (
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm">👤</span>
                  </div>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start items-end gap-3">
               <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center">
                  <span className="text-lg text-white">📘</span>
               </div>
               <div className="bg-[#050c18] border border-white/10 p-5 rounded-3xl rounded-bl-none flex gap-2 shadow-lg">
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 relative z-10">
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            {quickActions.map(action => (
              <button 
                key={action.label}
                onClick={() => handleSend(action.prompt)}
                className="text-xs px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all font-bold shadow-sm"
              >
                {action.label}
              </button>
            ))}
          </div>
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex gap-4 p-2 bg-[#050c18]/80 border border-white/10 rounded-3xl shadow-xl"
          >
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanya materi, minta rangkuman, atau contoh soal..."
              className="flex-grow bg-transparent px-6 py-4 focus:outline-none text-white placeholder-slate-500 font-medium"
            />
            <button 
              disabled={isLoading || !input.trim()}
              className="px-8 bg-indigo-600 text-white disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl hover:bg-indigo-700 transition-all flex items-center gap-2 font-bold shadow-lg shadow-indigo-600/30"
            >
              Kirim <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudyBuddy;
