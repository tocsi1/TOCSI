import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, BookOpen, ChevronDown, Rocket, 
  FileText, PlayCircle, CheckCircle, Target,
  ArrowLeft, GraduationCap,Brain, BarChart,Laptop,MessageSquare, Leaf, Library,Calculator,
  
} from 'lucide-react';
import { Link } from 'react-router-dom';

const UgcNetPaper1 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeUnit, setActiveUnit] = useState(null);

  const units = [
    { 
      id: 1, 
      title: "Teaching Aptitude", 
      topics: ["Levels of Teaching", "Learner Characteristics", "Factors affecting Teaching", "Methods of Teaching", "Evaluation Systems"],
      color: "bg-purple-600",
      icon: <Library className="text-white" />
    },
    { 
      id: 2, 
      title: "Research Aptitude", 
      topics: ["Methods of Research", "Steps of Research", "Thesis & Article Writing", "ICT in Research", "Research Ethics"],
      color: "bg-indigo-900",
      icon: <Search className="text-white" />
    },
    { 
      id: 3, 
      title: "Comprehension", 
      topics: ["Strategy for Reading", "Critical Analysis", "Speed Reading", "Identifying Main Themes"],
      color: "bg-blue-600",
      icon: <BookOpen className="text-white" />
    },
    
    { 
        id: 4, 
        title: "Communication", 
        topics: ["Effective Communication", "Barriers to Communication", "Mass Media & Society"],
        color: "bg-amber-600",
        icon: <Rocket className="text-white" />
      },
      
      { 
        id: 5, 
        title: "Mathematical Reasoning & Aptitude", 
        topics: ["Number series & Letter series", "Codes and Relationships", "Fraction, Time & Distance", "Ratio, Proportion and Percentage", "Profit and Loss, Interest and Discounting"],
        color: "bg-blue-600",
        icon: <Calculator className="text-white" />
      },

      { 
        id: 6, 
        title: "Logical Reasoning", 
        topics: ["Understanding the structure of arguments", "Evaluating and distinguishing deductive and inductive reasoning", "Analogies", "Venn diagram", "Indian Logic: Means of knowledge", "Pramanas (Pratyaksha, Anumana, Upamana, Shabda)"],
        color:  "bg-orange-500",
        icon: <Brain className="text-white" />
      },

      { 
        id: 7, 
        title: "Data Interpretation(DI)", 
        topics: ["Sources, acquisition and classification of Data", "Quantitative and Qualitative Data", "Graphical representation (Bar-chart, Histograms, Pie-chart)", "Data Interpretation Mapping", "Data and Governance"],
        color: "bg-cyan-300",
        icon: <BarChart className="text-white" />
      },
      
      { 
        id: 8, 
        title: "Information & Communication Technology (ICT)", 
        topics: ["ICT: General abbreviations and terminology", "Basics of Internet, Intranet, E-mail", "Audio and Video-conferencing", "Digital initiatives in higher education", "ICT and Governance"],
        color: "bg-rose-500",
        icon: <Laptop className="text-white" />
      },

      { 
        id: 9, 
        title: "People, Development and Environment", 
        topics: ["Development and environment: Millennium development and Sustainable development goals", "Human and environment interaction", "Environmental issues (Air, Water, Soil, Noise pollution)", "Impact of pollutants on human health", "Natural and energy resources", "Climate Change & International Agreements"],
        color: "bg-green-600",
        icon: <Leaf className="text-white" />
      },

      { 
        id: 10, 
        title: "Higher Education System", 
        topics: ["Institutions of higher learning in ancient India", "Evolution of higher learning in Post Independence India", "Oriental, Conventional and Non-conventional learning", "Professional, Technical and Skill based education", "Value education", "Governance, Polity and Administration"],
        color: "bg-indigo-600",
        icon: <GraduationCap className="text-white" />
      },

      
      

    
    // ... You can add all 10 units here following this pattern
  ];

  const filteredUnits = units.filter(unit => 
    unit.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#2a1f4a] to-[#1a1a2e] font-sans text-white">
      {/* --- PREMIUM HERO SECTION --- */}
      <div className="bg-gradient-to-br from-[#1a1a2e] via-[#2a1f4a] to-[#1a1a2e] pt-32 pb-40 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-purple-500/30 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-indigo-500/30 blur-[160px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-[320px] h-[320px] bg-yellow-400/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="flex items-center text-yellow-300 hover:text-white transition mb-8 group font-bold">
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-2 transition-transform" />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              UGC NET <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent underline decoration-wavy decoration-yellow-400">Paper 1</span>
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl leading-relaxed">
              Master the General Paper on Teaching and Research Aptitude with our unit-wise structured roadmap and premium resources.
            </p>
          </motion.div>
        </div>
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* --- INTERACTIVE CONTENT AREA --- */}
      <main className="max-w-7xl mx-auto px-6 -mt-24 pb-20 grid lg:grid-cols-3 gap-12 relative z-10">
        
        {/* Left Column: Syllabus Roadmap */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-2xl flex items-center gap-4 border border-white/10 focus-within:ring-2 ring-yellow-400 transition-all">
            <Search className="text-slate-300" />
            <input 
              type="text" 
              placeholder="Search a topic or unit (e.g. Research Ethics)..." 
              className="w-full bg-transparent border-none outline-none text-white placeholder-slate-400"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            {filteredUnits.map((unit) => (
              <motion.div 
                layout
                key={unit.id}
                className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-sm border border-white/10 overflow-hidden hover:border-yellow-400/50 hover:shadow-[0_0_35px_rgba(250,204,21,0.16)] transition-all duration-500"
              >
                <button 
                  onClick={() => setActiveUnit(activeUnit === unit.id ? null : unit.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-white/10 transition"
                >
                  <div className="flex items-center gap-4 text-left">
                    <div className={`${unit.color} p-3 rounded-xl shadow-lg shadow-purple-900/30`}>
                      {unit.icon}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-yellow-300 uppercase tracking-widest">Unit {unit.id}</span>
                      <h3 className="text-lg font-bold text-white">{unit.title}</h3>
                    </div>
                  </div>
                  <ChevronDown className={`text-slate-300 transition-transform ${activeUnit === unit.id ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeUnit === unit.id && (
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="px-6 pb-6"
                    >
                      <div className="pt-4 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-3">
                        {unit.topics.map((topic, i) => (
                          <div key={i} className="flex items-center gap-2 text-slate-300 p-3 bg-white/5 rounded-xl text-sm hover:bg-purple-600/20 hover:text-yellow-300 transition cursor-default">
                            <CheckCircle size={16} className="text-green-400" />
                            {topic}
                          </div>
                        ))}
                      </div>
                      <button className="mt-6 w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-bold hover:scale-[1.02] transition shadow-lg shadow-purple-900/30">
                        Start Unit {unit.id} Lessons
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Sticky Resource Sidebar */}
        <div className="space-y-8">
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-white/10 sticky top-28">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Target className="text-yellow-300" /> Exam Resources
            </h4>
            
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition group cursor-pointer border border-white/10 hover:border-yellow-400/40">
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-400 p-3 rounded-xl group-hover:scale-110 transition">
                    <FileText size={24} className="text-purple-900" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white">Mock Tests</h5>
                    <p className="text-xs text-slate-400">15+ Full Length Tests</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition group cursor-pointer border border-white/10 hover:border-yellow-400/40">
                <div className="flex items-center gap-4">
                  <div className="bg-green-400 p-3 rounded-xl group-hover:scale-110 transition">
                    <Rocket size={24} className="text-purple-900" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white">PYP Archive</h5>
                    <p className="text-xs text-slate-400">Previous Year Papers</p>
                  </div>
                </div>
              </div>
            </div>



            <div className="mt-8 bg-gradient-to-br from-purple-600 to-indigo-700 p-6 rounded-2xl text-white shadow-2xl">
              <p className="text-sm opacity-80 mb-2">Ready to upgrade?</p>
              {/* <h5 className="text-lg font-bold mb-4">Join TOCSI Premium Course</h5> */}

              <p className="mb-4 text-center text-sm font-extrabold text-yellow-300 bg-purple-950 px-4 py-2 rounded-full animate-pulse shadow-lg">
                Join TOCSI Premium Course at ₹1499
              </p>

              <a 
                href="https://forms.gle/tmYafWZk7paiBdCm6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center bg-white text-purple-700 py-3 rounded-xl font-bold text-sm hover:bg-yellow-400 hover:text-purple-950 transition"
              >
                Join Premium Course
              </a>
            </div>
            

            <div className="mt-8 bg-gradient-to-br from-purple-600 to-indigo-700 p-6 rounded-2xl text-white shadow-2xl">
              <p className="text-sm opacity-80 mb-2">Ready to explore?</p>
              <h5 className="text-lg font-bold mb-4">Book Your Free Demo Class</h5>

              <a 
                href="https://forms.gle/2DdzDdZgBBpU1KY9A" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center bg-white text-purple-700 py-3 rounded-xl font-bold text-sm hover:bg-yellow-400 hover:text-purple-950 transition"
              >
                Book Free Demo
              </a>
            </div>






          </div>
        </div>

      </main>
    </div>
  );
};

export default UgcNetPaper1;