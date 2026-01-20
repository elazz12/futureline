
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const roadmapData = [
  {
    field: 'Teknologi Informasi',
    steps: [
      { label: 'SMA', desc: 'Fokus pada Matematika, Fisika, dan TIK. Ikuti klub coding.', icon: '🏫' },
      { label: 'KULIAH', desc: 'Ambil S1 Teknik Informatika atau Sistem Informasi.', icon: '🎓' },
      { label: 'SKILLS', desc: 'Kuasai Pemrograman, Basis Data, dan Cloud Computing.', icon: '💻' },
      { label: 'KARIR', desc: 'Menjadi Software Engineer atau IT Consultant profesional.', icon: '💼' },
    ]
  },
  {
    field: 'Kesehatan',
    steps: [
      { label: 'SMA', desc: 'Fokus pada Biologi dan Kimia. Jaga nilai akademik yang baik.', icon: '🏫' },
      { label: 'KULIAH', desc: 'Tempuh Pendidikan Dokter dan Program Koas.', icon: '🎓' },
      { label: 'SKILLS', desc: 'Asah kemampuan diagnosis, tindakan medis, dan empati.', icon: '🩺' },
      { label: 'KARIR', desc: 'Bekerja sebagai Dokter Umum atau lanjut Spesialisasi.', icon: '🏥' },
    ]
  },
  {
    field: 'Bisnis & Ekonomi',
    steps: [
      { label: 'SMA', desc: 'Fokus pada Ekonomi, Akuntansi, dan Matematika.', icon: '🏫' },
      { label: 'KULIAH', desc: 'Tempuh S1 Manajemen, Ekonomi, atau Akuntansi.', icon: '🎓' },
      { label: 'SKILLS', desc: 'Asah analisis pasar, manajemen keuangan, dan leadership.', icon: '📈' },
      { label: 'KARIR', desc: 'Menjadi Manajer Bisnis, Akuntan, atau Entrepreneur.', icon: '🏢' },
    ]
  }
];

const Roadmap: React.FC = () => {
  const [activeField, setActiveField] = useState(0);

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 bg-[#0a192f]">
      <div className="text-center mb-20 space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Study Roadmap</h1>
        <p className="text-slate-400 max-w-2xl mx-auto font-medium text-lg">Visualisasi alur pendidikanmu dari bangku sekolah hingga mencapai sukses karir.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-24">
        {roadmapData.map((rd, i) => (
          <button 
            key={rd.field}
            onClick={() => setActiveField(i)}
            className={`px-8 py-3 rounded-2xl border transition-all font-bold text-sm ${
              activeField === i 
                ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-600/30' 
                : 'bg-white/5 border-white/10 text-slate-400 hover:border-indigo-500/50 hover:text-white'
            }`}
          >
            {rd.field}
          </button>
        ))}
      </div>

      <div className="relative">
        {/* Horizontal Line (Desktop) */}
        <div className="hidden md:block absolute top-[40px] left-0 right-0 h-0.5 bg-white/5 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {roadmapData[activeField].steps.map((step, idx) => (
            <div key={idx} className="relative pt-10 md:pt-0 animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
              {/* Dot / Connector */}
              <div className="absolute top-0 md:top-[28px] left-1/2 -translate-x-1/2 w-7 h-7 bg-[#0a192f] border-4 border-indigo-600 rounded-full z-10 shadow-[0_0_15px_rgba(79,70,229,0.5)]"></div>
              
              <div className="mt-6 md:mt-24 text-center">
                <div className="glass-card p-8 rounded-[2rem] border border-white/10 hover:border-indigo-500/30 transition-all group">
                  <div className="text-4xl mb-6 bg-white/5 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    {step.icon}
                  </div>
                  <span className="text-indigo-400 font-black text-[10px] uppercase tracking-widest mb-2 block">{step.label}</span>
                  <h3 className="text-xl font-bold text-white mb-4">Langkah {idx + 1}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32 p-12 glass-card rounded-[3rem] border border-white/5 text-center shadow-2xl">
         <h2 className="text-3xl font-extrabold text-white mb-6">Mulai Rencanakan Perjalananmu</h2>
         <p className="text-slate-400 max-w-xl mx-auto mb-10 font-medium">Langkah besar dimulai dari persiapan yang matang hari ini.</p>
         <Link to="/planner" className="px-12 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/30">
            Buka Task Planner
         </Link>
      </div>
    </div>
  );
};

export default Roadmap;
