
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 bg-[#0a192f]">
      <div className="text-center mb-20 space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">Tentang Futureline</h1>
        <p className="text-indigo-400 font-black tracking-widest uppercase text-sm">Empowering the Next Generation</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold text-white">Misi Kami</h2>
          <p className="text-slate-400 leading-relaxed font-medium">
            Futureline hadir sebagai solusi bagi siswa SMA yang ingin merencanakan masa depan mereka secara terstruktur. 
            Kami percaya bahwa bimbingan karir dan alat manajemen belajar yang tepat dapat mengubah cara siswa meraih cita-cita mereka.
          </p>
          <p className="text-slate-400 leading-relaxed font-medium">
            Dikembangkan dengan fokus pada kemudahan penggunaan dan fungsionalitas profesional, Futureline adalah kompas setiamu 
            menuju gerbang kesuksesan akademik dan karir.
          </p>
        </div>
        <div className="glass-card p-10 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden">
           <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/5 rounded-full opacity-50"></div>
           <div className="space-y-10 relative z-10">
             <div className="flex items-center gap-6">
                <span className="text-4xl bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl shadow-lg border border-white/10">💡</span>
                <div>
                  <h4 className="font-extrabold text-white">Inovasi Belajar</h4>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Metode Modern</p>
                </div>
             </div>
             <div className="flex items-center gap-6">
                <span className="text-4xl bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl shadow-lg border border-white/10">🤝</span>
                <div>
                  <h4 className="font-extrabold text-white">Terpusat pada Siswa</h4>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Empati Pengguna</p>
                </div>
             </div>
             <div className="flex items-center gap-6">
                <span className="text-4xl bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl shadow-lg border border-white/10">🏆</span>
                <div>
                  <h4 className="font-extrabold text-white">Hasil Berkualitas</h4>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Standar Tinggi</p>
                </div>
             </div>
           </div>
        </div>
      </div>

      <div className="text-center p-16 glass-card rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-indigo-600 shadow-[0_4px_12px_rgba(79,70,229,0.5)]"></div>
        <h3 className="text-2xl font-extrabold text-white mb-12">Tim Pengembang</h3>
        <div className="flex justify-center flex-wrap gap-16">
          <TeamMember name="Vaza Elrine" role="Product Lead" icon="👩‍💻" />
          <TeamMember name="Zarin" role="Lead Developer" icon="👨‍💻" />
        </div>
      </div>
    </div>
  );
};

const TeamMember = ({ name, role, icon }: { name: string, role: string, icon: string }) => (
  <div className="flex flex-col items-center group">
    <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-[2rem] flex items-center justify-center text-5xl mb-6 shadow-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <h4 className="font-extrabold text-white text-lg">{name}</h4>
    <p className="text-[10px] text-indigo-400 font-black tracking-widest uppercase mt-1">{role}</p>
  </div>
);

export default About;
