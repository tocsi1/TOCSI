import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
// COMPATIBLE IMPORTS: All tools needed for the 10 units
import { 
  Search, BookOpen, ChevronDown, Rocket, 
  FileText, PlayCircle, CheckCircle, Target,
  ArrowLeft, GraduationCap, Brain, BarChart,
  Laptop, MessageSquare, Leaf, Library, Calculator,
  Database, Cpu, Network, Globe, ShieldCheck, Code
} from 'lucide-react';

const UgcNetPaper2Cs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeUnit, setActiveUnit] = useState(null);

  // DATA: All 10 Units for Computer Science
  const units = [
    { 
      id: 1, title: "Discrete Structures & Optimization", 
      topics: ["Mathematical Logic", "Sets & Relations", "Graph Theory", "Optimization"],
      color: "bg-purple-600", icon: <Brain className="text-white" />
    },
    { 
      id: 2, title: "Computer System Architecture", 
      topics: ["Digital Logic", "Control Unit", "Memory Hierarchy", "I/O Organization"],
      color: "bg-indigo-600", icon: <Cpu className="text-white" />
    },
    { 
      id: 3, title: "Programming Languages & Graphics", 
      topics: ["C++ Programming", "Web Programming", "Computer Graphics", "2D/3D Objects"],
      color: "bg-blue-600", icon: <Code className="text-white" />
    },
    { 
      id: 4, title: "Database Management Systems", 
      topics: ["ER Model", "Relational Algebra", "SQL", "Normalization", "NoSQL"],
      color: "bg-cyan-600", icon: <Database className="text-white" />
    },
    { 
      id: 5, title: "System Software & OS", 
      topics: ["Process Management", "Deadlocks", "Memory Management", "File Systems"],
      color: "bg-emerald-600", icon: <Laptop className="text-white" />
    },
    { 
      id: 6, title: "Software Engineering", 
      topics: ["Software Process Models", "Requirement Engineering", "Testing", "Project Mgmt"],
      color: "bg-amber-500", icon: <ShieldCheck className="text-white" />
    },
    { 
      id: 7, title: "Data Structures & Algorithms", 
      topics: ["Asymptotic Notation", "Searching & Sorting", "Complexity Theory", "Trees & Graphs"],
      color: "bg-orange-500", icon: <BarChart className="text-white" />
    },
    { 
      id: 8, title: "Theory of Computation & Compilers", 
      topics: ["Regular Languages", "Context Free Languages", "Turing Machines", "Code Optimization"],
      color: "bg-rose-500", icon: <Library className="text-white" />
    },
    { 
      id: 9, title: "Data Communication & Networks", 
      topics: ["OSI Model", "TCP/IP", "Network Security", "Cloud Computing"],
      color: "bg-green-600", icon: <Network className="text-white" />
    },
    { 
      id: 10, title: "Artificial Intelligence (AI)", 
      topics: ["Heuristic Search", "Neural Networks", "Fuzzy Sets", "Genetic Algorithms"],
      color: "bg-slate-700", icon: <Target className="text-white" />
    }
  ];

  const filteredUnits = units.filter(unit => 
    unit.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#2a1f4a] to-[#1a1a2e] font-sans pt-20 text-white">
      <header className="bg-gradient-to-br from-[#1a1a2e] via-[#2a1f4a] to-[#1a1a2e] py-20 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-purple-500/30 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-indigo-500/30 blur-[160px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-[320px] h-[320px] bg-yellow-400/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto z-10 relative">
          <Link to="/" className="inline-flex items-center text-yellow-300 hover:text-white mb-6 group font-bold transition">
            <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-2 transition-transform" />
            Back to Dashboard
          </Link>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">UGC NET <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">CS & Apps</span></h1>
          <p className="text-slate-300 text-lg opacity-80 uppercase tracking-widest">Paper 2 • Subject Code 87</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 -mt-16 pb-20 grid lg:grid-cols-3 gap-8 relative z-10">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/10 focus-within:ring-2 ring-yellow-400 transition-all">
            <Search className="text-slate-300" />
            <input 
              type="text" 
              placeholder="Search units (e.g. Operating Systems)..." 
              className="w-full bg-transparent outline-none text-white placeholder-slate-400"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            {filteredUnits.map((unit) => (
              <div key={unit.id} className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-sm border border-white/10 overflow-hidden hover:border-yellow-400/50 hover:shadow-[0_0_35px_rgba(250,204,21,0.16)] transition-all duration-500">
                <button 
                  onClick={() => setActiveUnit(activeUnit === unit.id ? null : unit.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-white/10 transition"
                >
                  <div className="flex items-center gap-4 text-left">
                    <div className={`${unit.color} p-3 rounded-xl shadow-md shadow-purple-900/30`}>
                      {unit.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-yellow-300 uppercase">Unit {unit.id}</span>
                      <h3 className="text-lg font-bold text-white">{unit.title}</h3>
                    </div>
                  </div>
                  <ChevronDown className={`text-slate-300 transition-transform ${activeUnit === unit.id ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeUnit === unit.id && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="px-6 pb-6 border-t border-white/10">
                      <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                        {unit.topics.map((topic, i) => (
                          <div key={i} className="flex items-center gap-2 text-slate-300 p-2 bg-white/5 rounded-lg text-sm hover:bg-purple-600/20 hover:text-yellow-300 transition cursor-default">
                            <CheckCircle size={14} className="text-green-400" /> {topic}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <aside className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/10 h-fit sticky top-28">
           <h4 className="text-xl font-bold text-white mb-6">Subject Resources</h4>
           <div className="space-y-4">
             <div className="p-4 bg-white/5 rounded-xl flex items-center gap-3 font-bold text-sm text-white border border-white/10 hover:border-yellow-400/40 hover:bg-white/10 transition"><FileText className="text-yellow-300"/> CS Cheat Sheets</div>
             <div className="p-4 bg-white/5 rounded-xl flex items-center gap-3 font-bold text-sm text-white border border-white/10 hover:border-yellow-400/40 hover:bg-white/10 transition"><Rocket className="text-yellow-300"/> Live Doubt Classes</div>
           </div>
           <button className="w-full mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl font-bold hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(250,204,21,0.16)] transition">Get Started</button>
        </aside>
      </main>
    </div>
  );
};


export default UgcNetPaper2Cs;