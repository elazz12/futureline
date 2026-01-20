
import React from 'react';

const Resources: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 bg-[#0a192f]">
      <div className="text-center mb-20 space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Tips & Sumber Belajar</h1>
        <p className="text-slate-400 max-w-2xl mx-auto font-medium text-lg">Teknik belajar efektif yang terbukti membantu siswa meraih prestasi lebih maksimal.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        <ResourceCard 
          title="Teknik Pomodoro"
          desc="Belajar selama 25 menit penuh, diselingi istirahat 5 menit. Efektif menjaga fokus agar tidak mudah lelah."
          icon="⏳"
        />
        <ResourceCard 
          title="Active Recall"
          desc="Uji pemahaman dengan menjawab pertanyaan tanpa melihat catatan. Teknik terbaik untuk daya ingat jangka panjang."
          icon="🧠"
        />
        <ResourceCard 
          title="Teknik Feynman"
          desc="Jelaskan konsep yang sulit dengan bahasa yang sangat sederhana, seolah-olah mengajar orang awam."
          icon="🗣️"
        />
      </div>

      <div className="glass-card p-12 lg:p-20 rounded-[4rem] border border-white/5 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full opacity-40 translate-x-20 -translate-y-20"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-8">Visual Learning</h2>
            <p className="text-slate-400 leading-relaxed mb-8 font-medium">
              Otak kita memproses gambar 60.000 kali lebih cepat daripada teks. Gunakan Mind Mapping untuk menghubungkan 
              berbagai ide besar dalam satu skema visual yang rapi dan mudah diingat.
            </p>
            <div className="flex flex-wrap gap-4">
               <span className="px-5 py-2.5 bg-white/5 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10 shadow-sm">Mind Mapping</span>
               <span className="px-5 py-2.5 bg-white/5 text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10 shadow-sm">Infografis</span>
            </div>
          </div>
          <div className="bg-black/20 rounded-[3rem] aspect-video flex items-center justify-center border border-white/5 shadow-inner overflow-hidden">
             <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" alt="Person writing notes neatly" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ResourceCard = ({ title, desc, icon }: { title: string, desc: string, icon: string }) => (
  <div className="glass-card p-10 rounded-[2.5rem] border border-white/5 hover:border-indigo-500/30 hover:bg-white/5 transition-all group">
    <div className="text-4xl mb-6 bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-lg border border-white/5">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed font-medium">{desc}</p>
  </div>
);

export default Resources;
