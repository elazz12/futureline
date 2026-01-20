
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { QuizQuestion } from '../types.ts';

const questions: QuizQuestion[] = [
  {
    id: 1,
    text: "Bagaimana cara Anda menyelesaikan masalah yang sulit?",
    options: [
      { text: "🧠 Menganalisis masalah menggunakan logika dan data.", category: "IT" },
      { text: "🤝 Berdiskusi dan mendengarkan masukan orang lain.", category: "Health" },
      { text: "💰 Mencari solusi yang paling efisien dan menguntungkan.", category: "Business" },
      { text: "🎨 Mencari cara baru yang kreatif dan unik.", category: "Arts" },
    ]
  },
  {
    id: 2,
    text: "Apa topik yang paling sering Anda baca di internet?",
    options: [
      { text: "⚙️ Perkembangan teknologi dan pemrograman.", category: "IT" },
      { text: "🧬 Sains, kesehatan, dan penemuan medis.", category: "Health" },
      { text: "📈 Tren ekonomi, investasi, dan startup.", category: "Business" },
      { text: "🎬 Desain, seni, dan karya kreatif lainnya.", category: "Arts" },
    ]
  },
  {
    id: 3,
    text: "Pelajaran apa yang paling Anda sukai di sekolah?",
    options: [
      { text: "💻 Informatika, Matematika, atau Fisika.", category: "IT" },
      { text: "🔬 Biologi, Kimia, atau IPA.", category: "Health" },
      { text: "💵 Ekonomi, Akuntansi, atau IPS.", category: "Business" },
      { text: "🖌️ Seni Budaya, Sastra, atau Prakarya.", category: "Arts" },
    ]
  }
];

const Quiz: React.FC = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (category: string) => {
    const newAnswers = [...answers, category];
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (ans: string[]) => {
    const counts: Record<string, number> = {};
    ans.forEach(a => counts[a] = (counts[a] || 0) + 1);
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    setResult(sorted[0][0]);
  };

  const resultInfo: Record<string, any> = {
    "IT": { name: "Ahli Teknologi", icon: "💻", desc: "Anda sangat cocok berkarir di bidang Teknologi Informasi. Peran seperti Software Engineer atau Data Analyst menanti Anda.", link: "/careers" },
    "Health": { name: "Pejuang Kesehatan", icon: "🩺", desc: "Empati dan ketertarikan Anda pada sains sangat cocok untuk karir medis. Dokter atau Peneliti Kesehatan adalah jalur yang tepat.", link: "/careers" },
    "Business": { name: "Strategis Bisnis", icon: "📈", desc: "Jiwa kepemimpinan dan analisis bisnis Anda sangat kuat. Bidang Manajemen atau Kewirausahaan sangat pas untuk Anda.", link: "/careers" },
    "Arts": { name: "Pencipta Kreatif", icon: "🎨", desc: "Kreativitas Anda adalah aset besar. Bidang Desain Visual atau Direktur Kreatif adalah jalan kesuksesan Anda.", link: "/careers" },
  };

  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center py-20 px-6 bg-[#0a192f]">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none grayscale">
        <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover blur-sm" alt="Background" />
        <div className="absolute inset-0 bg-[#0a192f]/60"></div>
      </div>

      {!result ? (
        <div className="bg-black/40 backdrop-blur-xl p-8 md:p-16 rounded-[3rem] shadow-2xl border border-white/10 w-full max-w-4xl relative z-10 animate-fade-in">
          <div className="mb-12 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-white">Find Your Path</h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mt-1">Kuis Minat & Bakat</p>
            </div>
            <div className="text-right">
              <span className="text-indigo-400 font-black text-2xl">0{step + 1}</span>
              <span className="text-slate-600 text-sm font-bold"> / 0{questions.length}</span>
            </div>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl md:text-4xl font-extrabold mb-12 leading-tight text-white">{questions[step].text}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {questions[step].options.map((opt, i) => (
                <button 
                  key={i}
                  onClick={() => handleAnswer(opt.category)}
                  className="w-full text-left p-8 bg-white/5 border-2 border-white/5 rounded-3xl hover:border-indigo-600 hover:bg-white/10 transition-all font-bold group shadow-xl active:scale-95"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-2xl border-2 border-white/10 flex items-center justify-center text-xs group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all font-black text-slate-500">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-slate-300 group-hover:text-white transition-colors text-lg">{opt.text}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
             <div 
              className="h-full bg-indigo-600 transition-all duration-500 shadow-[0_0_12px_rgba(79,70,229,0.5)]" 
              style={{ width: `${((step + 1) / questions.length) * 100}%` }}
             ></div>
          </div>
        </div>
      ) : (
        <div className="text-center bg-black/40 backdrop-blur-xl p-16 rounded-[4rem] shadow-2xl border border-white/10 w-full max-w-3xl relative z-10 animate-fade-in">
           <div className="text-8xl mb-10 drop-shadow-2xl">{resultInfo[result].icon}</div>
           <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">Anda adalah {resultInfo[result].name}!</h2>
           <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium">
             {resultInfo[result].desc}
           </p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to={resultInfo[result].link} className="px-12 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/30">
                 Lihat Roadmap Karir
              </Link>
              <button 
                onClick={() => { setStep(0); setAnswers([]); setResult(null); }} 
                className="px-12 py-4 bg-white/5 border-2 border-white/10 text-slate-300 rounded-2xl font-bold hover:bg-white/10 transition-all"
              >
                 Ulang Kuis
              </button>
           </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
