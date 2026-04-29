<<<<<<< HEAD
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
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* --- PREMIUM HERO SECTION --- */}
      <div className="bg-purple-950 pt-32 pb-40 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="flex items-center text-purple-200 hover:text-white transition mb-8 group">
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-2 transition-transform" />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              UGC NET <span className="text-yellow-400 underline decoration-wavy">Paper 1</span>
            </h1>
            <p className="text-purple-200 text-xl max-w-2xl leading-relaxed">
              Master the General Paper on Teaching and Research Aptitude with our unit-wise structured roadmap and premium resources.
            </p>
          </motion.div>
        </div>
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* --- INTERACTIVE CONTENT AREA --- */}
      <main className="max-w-7xl mx-auto px-6 -mt-24 pb-20 grid lg:grid-cols-3 gap-12">
        
        {/* Left Column: Syllabus Roadmap */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 border border-slate-100">
            <Search className="text-slate-400" />
            <input 
              type="text" 
              placeholder="Search a topic or unit (e.g. Research Ethics)..." 
              className="w-full bg-transparent border-none outline-none text-slate-700"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            {filteredUnits.map((unit) => (
              <motion.div 
                layout
                key={unit.id}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
              >
                <button 
                  onClick={() => setActiveUnit(activeUnit === unit.id ? null : unit.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition"
                >
                  <div className="flex items-center gap-4 text-left">
                    <div className={`${unit.color} p-3 rounded-xl shadow-lg shadow-purple-200`}>
                      {unit.icon}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Unit {unit.id}</span>
                      <h3 className="text-lg font-bold text-slate-800">{unit.title}</h3>
                    </div>
                  </div>
                  <ChevronDown className={`text-slate-400 transition-transform ${activeUnit === unit.id ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeUnit === unit.id && (
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="px-6 pb-6"
                    >
                      <div className="pt-4 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-3">
                        {unit.topics.map((topic, i) => (
                          <div key={i} className="flex items-center gap-2 text-slate-600 p-3 bg-slate-50 rounded-xl text-sm">
                            <CheckCircle size={16} className="text-green-500" />
                            {topic}
                          </div>
                        ))}
                      </div>
                      <button className="mt-6 w-full py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition shadow-lg shadow-purple-100">
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
          <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 sticky top-28">
            <h4 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Target className="text-purple-600" /> Exam Resources
            </h4>
            
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-2xl hover:bg-purple-50 transition group cursor-pointer border border-transparent hover:border-purple-200">
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-400 p-3 rounded-xl group-hover:scale-110 transition">
                    <FileText size={24} className="text-purple-900" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800">Mock Tests</h5>
                    <p className="text-xs text-slate-500">15+ Full Length Tests</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl hover:bg-purple-50 transition group cursor-pointer border border-transparent hover:border-purple-200">
                <div className="flex items-center gap-4">
                  <div className="bg-green-400 p-3 rounded-xl group-hover:scale-110 transition">
                    <Rocket size={24} className="text-purple-900" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800">PYP Archive</h5>
                    <p className="text-xs text-slate-500">Previous Year Papers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-purple-600 to-indigo-700 p-6 rounded-2xl text-white">
              <p className="text-sm opacity-80 mb-2">Ready to excel?</p>
              <h5 className="text-lg font-bold mb-4">Join Live Mentorship</h5>
              <button className="w-full bg-white text-purple-700 py-3 rounded-xl font-bold text-sm hover:bg-yellow-400 hover:text-purple-950 transition">
                Book Free Demo
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

=======
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
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* --- PREMIUM HERO SECTION --- */}
      <div className="bg-purple-950 pt-32 pb-40 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="flex items-center text-purple-200 hover:text-white transition mb-8 group">
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-2 transition-transform" />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              UGC NET <span className="text-yellow-400 underline decoration-wavy">Paper 1</span>
            </h1>
            <p className="text-purple-200 text-xl max-w-2xl leading-relaxed">
              Master the General Paper on Teaching and Research Aptitude with our unit-wise structured roadmap and premium resources.
            </p>
          </motion.div>
        </div>
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* --- INTERACTIVE CONTENT AREA --- */}
      <main className="max-w-7xl mx-auto px-6 -mt-24 pb-20 grid lg:grid-cols-3 gap-12">
        
        {/* Left Column: Syllabus Roadmap */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 border border-slate-100">
            <Search className="text-slate-400" />
            <input 
              type="text" 
              placeholder="Search a topic or unit (e.g. Research Ethics)..." 
              className="w-full bg-transparent border-none outline-none text-slate-700"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            {filteredUnits.map((unit) => (
              <motion.div 
                layout
                key={unit.id}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
              >
                <button 
                  onClick={() => setActiveUnit(activeUnit === unit.id ? null : unit.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition"
                >
                  <div className="flex items-center gap-4 text-left">
                    <div className={`${unit.color} p-3 rounded-xl shadow-lg shadow-purple-200`}>
                      {unit.icon}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Unit {unit.id}</span>
                      <h3 className="text-lg font-bold text-slate-800">{unit.title}</h3>
                    </div>
                  </div>
                  <ChevronDown className={`text-slate-400 transition-transform ${activeUnit === unit.id ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeUnit === unit.id && (
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="px-6 pb-6"
                    >
                      <div className="pt-4 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-3">
                        {unit.topics.map((topic, i) => (
                          <div key={i} className="flex items-center gap-2 text-slate-600 p-3 bg-slate-50 rounded-xl text-sm">
                            <CheckCircle size={16} className="text-green-500" />
                            {topic}
                          </div>
                        ))}
                      </div>
                      <button className="mt-6 w-full py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition shadow-lg shadow-purple-100">
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
          <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 sticky top-28">
            <h4 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Target className="text-purple-600" /> Exam Resources
            </h4>
            
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-2xl hover:bg-purple-50 transition group cursor-pointer border border-transparent hover:border-purple-200">
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-400 p-3 rounded-xl group-hover:scale-110 transition">
                    <FileText size={24} className="text-purple-900" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800">Mock Tests</h5>
                    <p className="text-xs text-slate-500">15+ Full Length Tests</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl hover:bg-purple-50 transition group cursor-pointer border border-transparent hover:border-purple-200">
                <div className="flex items-center gap-4">
                  <div className="bg-green-400 p-3 rounded-xl group-hover:scale-110 transition">
                    <Rocket size={24} className="text-purple-900" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800">PYP Archive</h5>
                    <p className="text-xs text-slate-500">Previous Year Papers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-purple-600 to-indigo-700 p-6 rounded-2xl text-white">
              <p className="text-sm opacity-80 mb-2">Ready to excel?</p>
              <h5 className="text-lg font-bold mb-4">Join Live Mentorship</h5>
              <button className="w-full bg-white text-purple-700 py-3 rounded-xl font-bold text-sm hover:bg-yellow-400 hover:text-purple-950 transition">
                Book Free Demo
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

>>>>>>> 338b2c97f7e46148fc166ca8077e8278819aa3ad
export default UgcNetPaper1;