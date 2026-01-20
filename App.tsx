
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Planner from './pages/Planner.tsx';
import StudyBuddy from './pages/StudyBuddy.tsx';
import Careers from './pages/Careers.tsx';
import Roadmap from './pages/Roadmap.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Quiz from './pages/Quiz.tsx';
import Resources from './pages/Resources.tsx';
import About from './pages/About.tsx';
import { Task } from './types.ts';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Planner', path: '/planner' },
    { name: 'Study Buddy', path: '/study-buddy' },
    { name: 'Careers', path: '/careers' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0a192f]/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-400 tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-600/20">
            <div className="w-4 h-4 border-2 border-white rounded-full"></div>
          </div>
          <span className="text-white">Futureline</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-6 xl:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-semibold transition-all hover:text-white relative py-1 ${
                location.pathname === item.path ? 'text-indigo-400' : 'text-slate-400'
              }`}
            >
              {item.name}
              {location.pathname === item.path && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0a192f] border-b border-white/5 flex flex-col p-6 gap-4 shadow-2xl">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-slate-400 hover:text-white transition-colors font-medium ${location.pathname === item.path ? 'text-indigo-400' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="mt-20 py-12 border-t border-white/5 bg-[#050c18]">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <div className="mb-6 flex justify-center items-center gap-2">
         <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
            <div className="w-2 h-2 border border-white rounded-full"></div>
          </div>
          <span className="font-bold text-white">Futureline</span>
      </div>
      <p className="text-slate-500 text-sm mb-4">"Membangun masa depan, satu langkah belajar pada satu waktu."</p>
      <p className="text-slate-400 text-xs font-medium">Developed by: Vaza Elrine & Zarin</p>
      <div className="mt-8 flex justify-center gap-6">
        <Link to="/resources" className="text-slate-500 hover:text-indigo-400 text-xs transition-colors">Resources</Link>
        <Link to="/quiz" className="text-slate-500 hover:text-indigo-400 text-xs transition-colors">Find Your Path</Link>
        <Link to="/about" className="text-slate-500 hover:text-indigo-400 text-xs transition-colors">About Us</Link>
      </div>
    </div>
  </footer>
);

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem('futureline_tasks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('futureline_tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#0a192f] text-slate-200 selection:bg-indigo-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planner" element={<Planner tasks={tasks} setTasks={setTasks} />} />
            <Route path="/study-buddy" element={<StudyBuddy />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/dashboard" element={<Dashboard tasks={tasks} />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
