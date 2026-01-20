
import React from 'react';
import { Link } from 'react-router-dom';
import { Task } from '../types.ts';

interface DashboardProps {
  tasks: Task[];
}

const Dashboard: React.FC<DashboardProps> = ({ tasks }) => {
  const completedTasks = tasks.filter(t => t.completed).length;
  const pendingTasks = tasks.length - completedTasks;
  const progressPercent = tasks.length > 0 ? Math.round((completedTasks / tasks.length) * 100) : 0;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-[#0a192f]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        <div>
          <h1 className="text-4xl font-extrabold text-white mb-2">Halo, Pelajar Hebat! 👋</h1>
          <p className="text-slate-400 font-medium">Teruslah semangat belajar untuk masa depan yang lebih cerah.</p>
        </div>
        <div className="flex gap-4">
           <Link to="/planner" className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold text-slate-200 hover:border-indigo-500/50 transition-all shadow-xl">
              ➕ Tugas Baru
           </Link>
           <Link to="/study-buddy" className="px-6 py-3 bg-indigo-600 text-white rounded-2xl text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20">
              Mulai Belajar
           </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <StatCard title="Total Tugas" value={tasks.length} icon="📝" />
        <StatCard title="Sudah Selesai" value={completedTasks} icon="✅" color="text-emerald-400" />
        <StatCard title="Belum Selesai" value={pendingTasks} icon="⏳" color="text-amber-400" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-8">
          <div className="glass-card p-10 rounded-[2.5rem] border border-white/5 shadow-2xl">
            <h3 className="text-xl font-bold mb-8 flex justify-between items-center text-white">
              Progress Belajar
              <span className="px-4 py-1.5 bg-indigo-500/10 text-indigo-400 rounded-full text-sm font-black tracking-tight">{progressPercent}%</span>
            </h3>
            <div className="w-full h-4 bg-[#050c18] rounded-full overflow-hidden border border-white/5 mb-6 p-0.5">
              <div 
                className="h-full bg-indigo-600 rounded-full transition-all duration-1000 shadow-[0_0_12px_rgba(79,70,229,0.5)]" 
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-indigo-500/5 rounded-2xl border border-white/5">
               <span className="text-2xl">💡</span>
               <p className="text-sm text-slate-400 leading-relaxed font-medium">
                 {progressPercent >= 100 
                   ? "Luar biasa! Semua tugas hari ini sudah terselesaikan dengan baik." 
                   : "Progressmu sudah berjalan. Selesaikan tugas tersisa dengan teliti ya!"}
               </p>
            </div>
          </div>

          <div className="glass-card p-10 rounded-[2.5rem] border border-white/5 shadow-2xl">
            <h3 className="text-xl font-bold mb-8 text-white">Tugas Terdekat</h3>
            <div className="space-y-4">
               {tasks.filter(t => !t.completed).slice(0, 3).map(t => (
                 <div key={t.id} className="p-6 bg-[#050c18]/40 rounded-3xl border border-white/5 flex justify-between items-center hover:border-indigo-500/30 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-xl shadow-sm border border-white/10">📌</div>
                      <div>
                        <p className="font-bold text-white mb-1">{t.title}</p>
                        <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Deadline: {t.deadline}</p>
                      </div>
                    </div>
                    <Link to="/planner" className="px-5 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all shadow-sm">Atur</Link>
                 </div>
               ))}
               {tasks.filter(t => !t.completed).length === 0 && (
                 <div className="text-center py-8">
                   <div className="text-4xl mb-4">✨</div>
                   <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Semua tugas beres. Hebat!</p>
                 </div>
               )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <div className="glass-card p-10 rounded-[2.5rem] text-center border border-white/5 shadow-2xl relative group overflow-hidden">
             <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-500/5 rounded-full opacity-50 transition-transform group-hover:scale-150 duration-500"></div>
             <div className="text-5xl mb-6 relative z-10">🎯</div>
             <h4 className="text-xl font-bold mb-3 text-white relative z-10">Tentukan Karirmu</h4>
             <p className="text-slate-400 text-sm mb-8 leading-relaxed font-medium relative z-10">Kenali minat dan bakatmu lebih dalam melalui kuis karir kami.</p>
             <Link to="/quiz" className="block w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/30 relative z-10">
                Mulai Kuis
             </Link>
          </div>
          
          <div className="glass-card p-10 rounded-[2.5rem] border border-white/5 shadow-2xl">
             <h4 className="text-lg font-bold mb-6 flex items-center gap-3 text-white">
               <span className="w-8 h-8 bg-amber-500/10 rounded-xl flex items-center justify-center text-sm shadow-sm">✨</span>
               Kata Motivasi
             </h4>
             <p className="text-slate-300 text-base italic font-semibold leading-relaxed mb-6">
               "Investasi terbaik yang bisa kamu lakukan adalah investasi pada dirimu sendiri."
             </p>
             <div className="text-right">
                <span className="text-[10px] text-indigo-400 font-black tracking-widest uppercase">— FUTURELINE TEAM</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, color = "text-white" }: { title: string, value: number, icon: string, color?: string }) => (
  <div className="glass-card p-8 rounded-[2rem] flex items-center gap-8 border border-white/5 shadow-2xl group hover:border-indigo-500/30 transition-all">
    <div className="text-5xl bg-white/5 w-20 h-20 flex items-center justify-center rounded-3xl shadow-lg border border-white/5">{icon}</div>
    <div>
      <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2">{title}</p>
      <p className={`text-4xl font-extrabold ${color}`}>{value}</p>
    </div>
  </div>
);

export default Dashboard;
