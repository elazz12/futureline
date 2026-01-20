
import React, { useState } from 'react';
import { Career } from '../types.ts';

const careerData: Career[] = [
  {
    id: 'it',
    name: 'Software Engineer',
    category: 'Teknologi Informasi',
    description: 'Rancang dan bangun sistem perangkat lunak untuk masa depan digital.',
    icon: '💻',
    details: {
      tasks: ['Menulis kode program', 'Analisis sistem perangkat lunak', 'Maintenance aplikasi'],
      skills: ['Pemrograman', 'Logika Algoritma', 'Problem Solving'],
      subjects: ['Matematika', 'TIK', 'Bahasa Inggris'],
      majors: ['Teknik Informatika', 'Sistem Informasi', 'Ilmu Komputer']
    }
  },
  {
    id: 'med',
    name: 'Dokter Spesialis',
    category: 'Kesehatan',
    description: 'Bantu masyarakat dengan diagnosis dan perawatan medis yang profesional.',
    icon: '🩺',
    details: {
      tasks: ['Diagnosis medis', 'Perawatan pasien', 'Penelitian kesehatan'],
      skills: ['Empati', 'Ketelitian Tinggi', 'Analisis Medis'],
      subjects: ['Biologi', 'Kimia', 'Bahasa Inggris'],
      majors: ['Pendidikan Dokter', 'Ilmu Kesehatan']
    }
  },
  {
    id: 'biz',
    name: 'Business Analyst',
    category: 'Bisnis & Manajemen',
    description: 'Analisis data bisnis untuk membantu perusahaan mengambil keputusan strategis.',
    icon: '📊',
    details: {
      tasks: ['Analisis data pasar', 'Penyusunan laporan bisnis', 'Strategi operasional'],
      skills: ['Statistik', 'Analisis Data', 'Komunikasi Bisnis'],
      subjects: ['Ekonomi', 'Matematika'],
      majors: ['Manajemen Bisnis', 'Statistika', 'Ekonomi']
    }
  },
  {
    id: 'art',
    name: 'Graphic Designer',
    category: 'Industri Kreatif',
    description: 'Komunikasikan ide lewat visual yang estetik dan fungsional.',
    icon: '🎨',
    details: {
      tasks: ['Pembuatan desain visual', 'Branding identitas', 'Layouting media'],
      skills: ['Kreativitas', 'Software Desain', 'Komunikasi Visual'],
      subjects: ['Seni Budaya', 'TIK'],
      majors: ['Desain Komunikasi Visual', 'Seni Murni']
    }
  },
  {
    id: 'eng',
    name: 'Civil Engineer',
    category: 'Teknik & Infrastruktur',
    description: 'Rancang dan bangun infrastruktur publik yang aman dan berkelanjutan.',
    icon: '🏗️',
    details: {
      tasks: ['Manajemen proyek konstruksi', 'Perhitungan struktur', 'Survei lapangan'],
      skills: ['Fisika Terapan', 'Manajemen Proyek', 'Advanced Math'],
      subjects: ['Fisika', 'Matematika'],
      majors: ['Teknik Sipil', 'Arsitektur']
    }
  },
  {
    id: 'edu',
    name: 'Guru Inspiratif',
    category: 'Pendidikan',
    description: 'Bentuk masa depan bangsa melalui pengajaran dan bimbingan yang tulus.',
    icon: '🍎',
    details: {
      tasks: ['Penyusunan modul ajar', 'Bimbingan siswa', 'Evaluasi pendidikan'],
      skills: ['Public Speaking', 'Psikologi Pendidikan', 'Sabar & Tekun'],
      subjects: ['Psikologi', 'Sosiologi', 'Bahasa'],
      majors: ['Pendidikan Guru', 'Ilmu Pendidikan']
    }
  }
];

const Careers: React.FC = () => {
  const [selected, setSelected] = useState<Career | null>(null);

  return (
    <div className="pb-24 bg-[#0a192f]">
      {/* Banner Foto */}
      <div className="relative h-64 md:h-96 w-full overflow-hidden mb-16 border-b border-white/5">
        <img 
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200" 
          className="w-full h-full object-cover opacity-60"
          alt="Group of professionals in a bright modern office"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent"></div>
        <div className="absolute bottom-12 left-6 lg:left-24 max-w-7xl">
           <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 backdrop-blur-md border border-indigo-500/30 text-indigo-300 text-xs font-bold tracking-widest uppercase mb-4">
              Rancang Masa Depanmu
           </div>
           <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3">Career Explorer</h1>
           <p className="text-slate-300 font-medium text-lg max-w-2xl">Kenali berbagai profesi impian dan jalur pendidikan yang tepat.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {careerData.map(career => (
            <div key={career.id} className="glass-card p-10 rounded-[2.5rem] group hover:border-indigo-500/40 border border-white/5 transition-all flex flex-col justify-between shadow-xl">
              <div>
                <div className="text-4xl mb-8 bg-white/5 w-20 h-20 flex items-center justify-center rounded-3xl border border-white/10 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-md">
                  {career.icon}
                </div>
                <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-black mb-3 block">{career.category}</span>
                <h3 className="text-2xl font-bold mb-4 text-white">{career.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-10 font-medium">{career.description}</p>
              </div>
              <button 
                onClick={() => setSelected(career)}
                className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all font-bold text-slate-200 shadow-sm"
              >
                Detail Karir
              </button>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl overflow-y-auto">
          <div className="glass-card w-full max-w-5xl p-8 lg:p-16 rounded-[3rem] relative my-auto border border-white/10 shadow-2xl animate-fade-in">
            <button onClick={() => setSelected(null)} className="absolute top-8 right-8 text-slate-400 hover:text-white transition-colors">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4 lg:border-r lg:border-white/5 lg:pr-12">
                <div className="text-8xl mb-10 drop-shadow-2xl">{selected.icon}</div>
                <h2 className="text-4xl font-extrabold mb-3 text-white">{selected.name}</h2>
                <p className="text-indigo-400 text-sm font-black uppercase tracking-widest mb-10">{selected.category}</p>
                <div className="p-6 bg-black/40 rounded-3xl border border-white/5">
                   <p className="text-slate-400 leading-relaxed text-sm font-medium italic">"{selected.description}"</p>
                </div>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                <DetailSection title="Tanggung Jawab" items={selected.details.tasks} />
                <DetailSection title="Skill yang Dibutuhkan" items={selected.details.skills} />
                <DetailSection title="Mata Pelajaran SMA" items={selected.details.subjects} />
                <DetailSection title="Jurusan Kuliah" items={selected.details.majors} />
              </div>
            </div>
            
            <div className="mt-16 flex justify-center">
              <button 
                onClick={() => setSelected(null)}
                className="px-16 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/30"
              >
                Tutup Detail
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const DetailSection = ({ title, items }: { title: string, items: string[] }) => (
  <div>
    <h4 className="text-white font-bold mb-6 flex items-center gap-3">
      <span className="w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>
      {title}
    </h4>
    <ul className="space-y-3">
      {items.map((t, idx) => (
        <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm font-medium">
          <span className="text-indigo-400 mt-0.5 font-black">›</span>
          {t}
        </li>
      ))}
    </ul>
  </div>
);

export default Careers;
