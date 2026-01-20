
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-[#0a192f]">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-indigo-900/10 rounded-full blur-[120px] -z-10"></div>
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-28 grid lg:grid-cols-2 items-center gap-16">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-2">
            🎓 Platform Belajar Terintegrasi
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Futureline: Your Path to <br/>
            <span className="text-indigo-400">Tomorrow.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-xl leading-relaxed font-medium">
            Rencanakan masa depanmu dengan cerdas. Atur tugas sekolah, eksplorasi karir impian, 
            dan belajar lebih efektif bersama Futureline.
          </p>
          
          <div className="grid grid-cols-2 gap-4 pt-4">
            <Link to="/planner" className="p-6 glass-card rounded-2xl hover:border-indigo-500/50 hover:bg-white/5 transition-all flex flex-col items-center gap-3">
              <span className="text-3xl">📅</span>
              <span className="font-bold text-slate-200 text-sm">Planner</span>
            </Link>
            <Link to="/study-buddy" className="p-6 glass-card rounded-2xl hover:border-indigo-500/50 hover:bg-white/5 transition-all flex flex-col items-center gap-3">
              <span className="text-3xl">📖</span>
              <span className="font-bold text-slate-200 text-sm">Study Buddy</span>
            </Link>
            <Link to="/careers" className="p-6 glass-card rounded-2xl hover:border-indigo-500/50 hover:bg-white/5 transition-all flex flex-col items-center gap-3">
              <span className="text-3xl">🚀</span>
              <span className="font-bold text-slate-200 text-sm">Careers</span>
            </Link>
            <Link to="/roadmap" className="p-6 glass-card rounded-2xl hover:border-indigo-500/50 hover:bg-white/5 transition-all flex flex-col items-center gap-3">
              <span className="text-3xl">🛤️</span>
              <span className="font-bold text-slate-200 text-sm">Roadmap</span>
            </Link>
          </div>
        </div>

        <div className="relative animate-fade-in hidden lg:block">
           <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                alt="Students studying together in a library" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 right-10 p-6 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl">💡</div>
                  <div>
                    <p className="text-white font-bold text-lg">Belajar Lebih Fokus</p>
                    <p className="text-slate-300 text-sm">Bersama komunitas dan alat yang tepat.</p>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </div>

      {/* Brief Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-extrabold text-white">Satu Platform, Berbagai Solusi</h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium">Futureline dirancang khusus untuk memandu perjalanan akademis dan profesional siswa SMA Indonesia.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureItem 
            title="Task Planner" 
            desc="Sistem manajemen tugas dengan prioritas dan kalender interaktif untuk harimu."
            icon="📊"
          />
          <FeatureItem 
            title="Study Buddy" 
            desc="Dapatkan bantuan rangkuman dan penjelasan materi pelajaran yang sulit."
            icon="📚"
          />
          <FeatureItem 
            title="Career Explorer" 
            desc="Eksplorasi database karir lengkap dengan detail skill dan jurusan kuliah."
            icon="🔍"
          />
          <FeatureItem 
            title="Roadmap Studi" 
            desc="Visualisasi langkah nyata dari sekolah hingga mencapai karir impian."
            icon="🛤️"
          />
        </div>
      </section>
    </div>
  );
};

const FeatureItem = ({ title, desc, icon }: { title: string, desc: string, icon: string }) => (
  <div className="p-8 glass-card rounded-3xl hover:border-indigo-500/30 transition-all group">
    <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed font-medium">{desc}</p>
  </div>
);

export default Home;
