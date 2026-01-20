
import React, { useState } from 'react';
import { Task, Priority } from '../types.ts';

interface PlannerProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const Planner: React.FC<PlannerProps> = ({ tasks, setTasks }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDeadline, setNewDeadline] = useState('');
  const [newPriority, setNewPriority] = useState<Priority>(Priority.MEDIUM);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;
    const newTask: Task = {
      id: Date.now().toString(),
      title: newTitle,
      deadline: newDeadline || new Date().toISOString().split('T')[0],
      priority: newPriority,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setNewTitle('');
    setNewDeadline('');
    setIsAdding(false);
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const priorityColors = {
    [Priority.LOW]: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    [Priority.MEDIUM]: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    [Priority.HIGH]: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  };

  return (
    <div className="relative pb-24 bg-[#0a192f]">
      {/* Header Visual */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden mb-12 border-b border-white/5">
        <img 
          src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=1200" 
          className="w-full h-full object-cover opacity-60"
          alt="Clean student desk with laptop and books"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent"></div>
        <div className="absolute bottom-10 left-6 lg:left-24">
           <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">Task Planner</h1>
           <p className="text-indigo-300 text-lg font-medium">Kelola tugas harianmu dengan lebih tertata.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Task Form & List */}
        <div className="lg:col-span-8 space-y-8">
          <div className="glass-card p-8 rounded-3xl border border-white/10 shadow-xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-white">
              <span className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center text-xl">📝</span>
              Tambah Tugas Baru
            </h3>
            <form onSubmit={addTask} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <input 
                  type="text" 
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-[#050c18] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-white placeholder-slate-500"
                  placeholder="Apa tugas sekolahmu hari ini?"
                />
              </div>
              <div>
                <input 
                  type="date" 
                  value={newDeadline}
                  onChange={(e) => setNewDeadline(e.target.value)}
                  className="w-full bg-[#050c18] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-white text-sm"
                />
              </div>
              <div>
                <select 
                  value={newPriority}
                  onChange={(e) => setNewPriority(e.target.value as Priority)}
                  className="w-full bg-[#050c18] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-white text-sm appearance-none"
                >
                  <option value={Priority.LOW}>Prioritas Rendah</option>
                  <option value={Priority.MEDIUM}>Prioritas Sedang</option>
                  <option value={Priority.HIGH}>Prioritas Tinggi</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20">
                  Simpan Tugas
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold px-2 text-white">Daftar Tugas</h3>
            {tasks.length === 0 ? (
              <div className="glass-card p-16 text-center rounded-3xl border-2 border-dashed border-white/5">
                <div className="text-5xl mb-4">✨</div>
                <p className="text-slate-500 font-medium">Belum ada tugas. Semangat belajarnya!</p>
              </div>
            ) : (
              tasks.map(task => (
                <div key={task.id} className={`glass-card p-6 rounded-2xl flex items-center gap-6 group transition-all border border-white/5 hover:border-indigo-500/30 ${task.completed ? 'opacity-40' : ''}`}>
                  <button 
                    onClick={() => toggleTask(task.id)}
                    className={`w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-all ${
                      task.completed ? 'bg-indigo-600 border-indigo-600' : 'border-white/20 hover:border-indigo-500'
                    }`}
                  >
                    {task.completed && <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                  </button>
                  <div className="flex-grow">
                    <h3 className={`font-bold text-lg ${task.completed ? 'line-through text-slate-500' : 'text-white'}`}>{task.title}</h3>
                    <div className="flex gap-4 items-center mt-2">
                      <span className="text-xs text-indigo-400 font-bold">📅 {task.deadline}</span>
                      <span className={`text-[10px] uppercase font-black px-2.5 py-1 rounded-lg border ${priorityColors[task.priority]}`}>
                        {task.priority}
                      </span>
                    </div>
                  </div>
                  <button onClick={() => deleteTask(task.id)} className="p-3 text-slate-500 hover:text-rose-400 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right: Calendar Visual */}
        <div className="lg:col-span-4 space-y-8">
           <div className="glass-card p-8 rounded-3xl border border-white/10 shadow-xl">
            <h4 className="font-bold mb-6 flex items-center gap-3 text-white">
              <span className="w-2 h-8 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.5)]"></span>
              Kalender Mini
            </h4>
            <div className="grid grid-cols-7 gap-2 text-center text-sm mb-4">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => <div key={d} className="font-black text-indigo-400 py-1">{d}</div>)}
              {Array.from({ length: 31 }).map((_, i) => (
                <div key={i} className={`py-2 rounded-xl transition-all font-medium ${i + 1 === new Date().getDate() ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30' : 'text-slate-400 hover:bg-white/5 cursor-default'}`}>
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Add Button */}
      <button 
        onClick={() => setIsAdding(true)}
        className="fixed bottom-10 right-10 w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl shadow-indigo-600/50 hover:bg-indigo-700 hover:scale-110 transition-all z-40"
      >
        +
      </button>

      {/* Add Modal */}
      {isAdding && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-md">
           <div className="w-full max-w-lg animate-fade-in glass-card p-8 rounded-[2.5rem] shadow-2xl border border-white/10">
             <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Tambah Tugas</h2>
                <button onClick={() => setIsAdding(false)} className="text-slate-400 hover:text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
             </div>
             <form onSubmit={addTask} className="space-y-6">
                <input 
                  autoFocus
                  type="text" 
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-[#050c18] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-white placeholder-slate-500"
                  placeholder="Judul tugas..."
                />
                <div className="grid grid-cols-2 gap-4">
                  <input type="date" value={newDeadline} onChange={(e) => setNewDeadline(e.target.value)} className="w-full bg-[#050c18] border border-white/10 rounded-2xl px-6 py-3 text-white text-sm" />
                  <select value={newPriority} onChange={(e) => setNewPriority(e.target.value as Priority)} className="w-full bg-[#050c18] border border-white/10 rounded-2xl px-6 py-3 text-white text-sm">
                    <option value={Priority.LOW}>Rendah</option>
                    <option value={Priority.MEDIUM}>Sedang</option>
                    <option value={Priority.HIGH}>Tinggi</option>
                  </select>
                </div>
                <button type="submit" className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg shadow-indigo-600/20">Tambah</button>
              </form>
           </div>
        </div>
      )}
    </div>
  );
};

export default Planner;
