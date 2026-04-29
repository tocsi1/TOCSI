
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
    <div className="min-h-screen bg-slate-50 font-sans pt-20">
      <header className="bg-purple-950 py-20 px-6 text-center text-white relative">
        <div className="max-w-7xl mx-auto z-10 relative">
          <Link to="/" className="inline-flex items-center text-purple-300 hover:text-white mb-6 group">
            <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-2 transition-transform" />
            Back to Dashboard
          </Link>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">UGC NET <span className="text-yellow-400">CS & Apps</span></h1>
          <p className="text-purple-200 text-lg opacity-80 uppercase tracking-widest">Paper 2 • Subject Code 87</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 -mt-16 pb-20 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100">
            <Search className="text-slate-400" />
            <input 
              type="text" 
              placeholder="Search units (e.g. Operating Systems)..." 
              className="w-full outline-none text-slate-800"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            {filteredUnits.map((unit) => (
              <div key={unit.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <button 
                  onClick={() => setActiveUnit(activeUnit === unit.id ? null : unit.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition"
                >
                  <div className="flex items-center gap-4 text-left">
                    <div className={`${unit.color} p-3 rounded-xl shadow-md`}>
                      {unit.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Unit {unit.id}</span>
                      <h3 className="text-lg font-bold text-slate-800">{unit.title}</h3>
                    </div>
                  </div>
                  <ChevronDown className={`text-slate-400 transition-transform ${activeUnit === unit.id ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeUnit === unit.id && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="px-6 pb-6 border-t border-slate-50">
                      <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                        {unit.topics.map((topic, i) => (
                          <div key={i} className="flex items-center gap-2 text-slate-600 p-2 bg-slate-50 rounded-lg text-sm">
                            <CheckCircle size={14} className="text-green-500" /> {topic}
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

        <aside className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 h-fit sticky top-28">
           <h4 className="text-xl font-bold text-slate-800 mb-6">Subject Resources</h4>
           <div className="space-y-4">
             <div className="p-4 bg-slate-50 rounded-xl flex items-center gap-3 font-bold text-sm"><FileText className="text-purple-600"/> CS Cheat Sheets</div>
             <div className="p-4 bg-slate-50 rounded-xl flex items-center gap-3 font-bold text-sm"><Rocket className="text-purple-600"/> Live Doubt Classes</div>
           </div>
           <button className="w-full mt-8 bg-purple-600 text-white py-3 rounded-xl font-bold hover:bg-purple-700 transition">Get Started</button>
        </aside>
      </main>
    </div>
  );
};


export default UgcNetPaper2Cs;