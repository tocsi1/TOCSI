import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, ChevronDown, Rocket, FileText, CheckCircle, 
  Target, ArrowLeft, Laptop, Cpu, Globe, ShieldCheck, 
  Database, HardDrive, Layout, Monitor, Terminal, Layers
} from 'lucide-react';

const JkssbCs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeUnit, setActiveUnit] = useState(null);

  const units = [
    { 
      id: 1, title: "Fundamentals of Computer", 
      topics: ["Introduction and Objectives", "Evolution & Generations", "Input & Output Devices", "Hardware & Software Concepts"],
      color: "bg-purple-600", icon: <Monitor className="text-white" />
    },
    { 
      id: 2, title: "Computer Memory", 
      topics: ["Primary Memory (RAM/ROM)", "Secondary Storage", "Cache Memory", "Memory Units (KB, MB, GB)"],
      color: "bg-indigo-600", icon: <HardDrive className="text-white" />
    },
    { 
      id: 3, title: "Operating Systems", 
      topics: ["Types of OS", "Functions of OS", "Windows basics", "DOS vs Linux basics"],
      color: "bg-blue-600", icon: <Layers className="text-white" />
    },
    { 
      id: 4, title: "Microsoft Office Suite", 
      topics: ["MS Word (Document Formatting)", "MS Excel (Formulas & Charts)", "MS PowerPoint", "MS Access basics"],
      color: "bg-orange-500", icon: <Layout className="text-white" />
    },
    { 
      id: 5, title: "Computer Communication & Networks", 
      topics: ["Types of Networks (LAN, WAN, MAN)", "Network Topology", "OSI Model basics", "Transmission Media"],
      color: "bg-emerald-600", icon: <Globe className="text-white" />
    },
    { 
      id: 6, title: "Internet & Email", 
      topics: ["Web Browsers & Search Engines", "Internet Protocols (HTTP/FTP)", "Email Protocols", "Social Media & Cyber Security"],
      color: "bg-rose-500", icon: <ShieldCheck className="text-white" />
    },
    { 
      id: 7, title: "Data Representation", 
      topics: ["Binary, Decimal, Hexadecimal", "Number System Conversion", "ASCII & Unicode", "Logic Gates basics"],
      color: "bg-cyan-500", icon: <Terminal className="text-white" />
    },
    { 
      id: 8, title: "Keyboard Shortcuts", 
      topics: ["Windows Shortcuts", "MS Office Hotkeys", "Function Keys (F1-F12)", "Browser Shortcuts"],
      color: "bg-amber-500", icon: <Terminal className="text-white" />
    },
    { 
      id: 9, title: "Latest Trends in IT", 
      topics: ["Artificial Intelligence", "Cloud Computing", "IoT (Internet of Things)", "Digital India Initiatives"],
      color: "bg-teal-600", icon: <Rocket className="text-white" />
    },
    { 
      id: 10, title: "Database Management", 
      topics: ["Introduction to Data", "DBMS vs File System", "Keys in DBMS", "SQL basics"],
      color: "bg-slate-700", icon: <Database className="text-white" />
    }
  ];

  const filteredUnits = units.filter(unit => 
    unit.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    unit.topics.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#2a1f4a] to-[#1a1a2e] font-sans pt-20 text-white">

      {/* --- JKSSB HEADER --- */}
      <header className="bg-gradient-to-br from-[#1a1a2e] via-[#2a1f4a] to-[#1a1a2e] py-20 px-6 text-center text-white relative overflow-hidden">
        
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-500/30 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/30 blur-[160px] rounded-full"></div>

        <div className="max-w-7xl mx-auto z-10 relative">
          <Link to="/" className="inline-flex items-center text-yellow-300 hover:text-white transition mb-6 group font-bold">
            <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-2 transition-transform" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            JKSSB <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">Computer Syllabus</span>
          </h1>

          <p className="text-purple-100 text-lg opacity-80">
            Complete coverage for Graduate & 10+2 Level Exams
          </p>
        </div>
      </header>

      {/* --- CONTENT AREA --- */}
      <main className="max-w-7xl mx-auto px-6 -mt-16 pb-20 grid lg:grid-cols-3 gap-8">
        
        {/* SYLLABUS LIST */}
        <div className="lg:col-span-2 space-y-6">

          <div className="bg-white/10 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/10 flex items-center gap-4 focus-within:ring-2 ring-yellow-400 transition-all">
            <Search className="text-slate-300" />
            <input 
              type="text" 
              placeholder="Search JKSSB topics (e.g. RAM, Excel, OSI)..." 
              className="w-full bg-transparent outline-none text-white placeholder-slate-400 font-medium"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            {filteredUnits.map((unit) => (
              <div key={unit.id} className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-sm border border-white/10 overflow-hidden hover:border-yellow-400/50 transition-all">

                <button 
                  onClick={() => setActiveUnit(activeUnit === unit.id ? null : unit.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-white/10 transition text-left"
                >
                  <div className="flex items-center gap-5">
                    <div className={`${unit.color} w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg`}>
                      {unit.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-yellow-300 uppercase tracking-widest">Section {unit.id}</span>
                      <h3 className="text-lg font-bold text-white">{unit.title}</h3>
                    </div>
                  </div>
                  <ChevronDown className={`text-slate-300 transition-transform duration-300 ${activeUnit === unit.id ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeUnit === unit.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 border-t border-white/10"
                    >
                      <div className="pt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                        {unit.topics.map((topic, i) => (
                          <div key={i} className="flex items-center gap-3 text-slate-300 p-3 bg-white/5 rounded-xl text-sm hover:bg-purple-600/20 hover:text-yellow-300 transition cursor-default group">
                            <CheckCircle size={16} className="text-green-400 flex-shrink-0 group-hover:scale-110" />
                            {topic}
                          </div>
                        ))}
                      </div>

                      <button className="w-full mt-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-bold hover:scale-105 transition shadow-lg active:scale-95">
                        Download Topic Notes (PDF)
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ))}
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-6">
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/10 sticky top-28">

            <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <Target className="text-yellow-300" /> Exam Tools
            </h4>
            
            <div className="space-y-4">

              <div className="p-4 bg-white/5 rounded-2xl border-l-4 border-yellow-400 hover:bg-white/10 hover:shadow-md transition cursor-pointer">
                <FileText className="text-purple-300 mb-2" />
                <h5 className="font-bold text-white">PYP Archive</h5>
                <p className="text-xs text-slate-400 uppercase tracking-widest">Previous Years</p>
              </div>

              <div className="p-4 bg-white/5 rounded-2xl border-l-4 border-green-500 hover:bg-white/10 hover:shadow-md transition cursor-pointer">
                <Rocket className="text-purple-300 mb-2" />
                <h5 className="font-bold text-white">Computer Quiz</h5>
                <p className="text-xs text-slate-400 uppercase tracking-widest">Score 20/20</p>
              </div>

            </div>

            <div className="mt-10 p-6 bg-gradient-to-br from-purple-800 to-indigo-900 rounded-3xl text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <h5 className="text-xl font-bold mb-4 italic">𝔹𝕖𝕤𝕥 𝕃𝕦𝕔𝕜, 𝔸𝕤𝕡𝕚𝕣𝕒𝕟𝕥𝕤!</h5>
                <p className="text-sm opacity-80 leading-relaxed mb-6">"Start where you are. Use what you have. Do what you can."</p>
                <button className="w-full bg-yellow-400 text-purple-900 py-3 rounded-2xl font-black text-sm hover:scale-105 transition">
                  JOIN TEST SERIES
                </button>
              </div>
            </div>

          </div>
        </aside>

      </main>
    </div>
  );
};

export default JkssbCs;