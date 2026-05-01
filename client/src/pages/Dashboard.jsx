import React from "react";
import {
  PlayCircle,
  FileText,
  Presentation,
  ClipboardCheck,
  Brain,
  Crown,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const Dashboard = () => {
  const cards = [
    {
      title: "Videos",
      desc: "Access premium recorded lectures and learning sessions.",
      icon: PlayCircle,
    },
    {
      title: "Notes",
      desc: "Read structured notes prepared for focused revision.",
      icon: FileText,
    },
    {
      title: "PPTs",
      desc: "Explore presentation-based learning resources.",
      icon: Presentation,
    },
    {
      title: "Mock Tests",
      desc: "Practice exam-style tests to improve performance.",
      icon: ClipboardCheck,
    },
    {
      title: "Quizzes",
      desc: "Check your understanding with quick concept quizzes.",
      icon: Brain,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 px-5 py-28 relative overflow-hidden">
      <div className="absolute top-24 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-yellow-400/30 text-yellow-200 text-sm font-semibold mb-5">
            <Crown size={18} />
            TOCSI Premium Learning Space
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            Student Dashboard
          </h1>

          <p className="text-purple-100 max-w-2xl mx-auto text-lg">
            Everything you need for focused preparation — videos, notes, PPTs,
            mock tests, and quizzes in one premium learning hub.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {cards.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-2xl border border-white/15 rounded-3xl p-7 shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-300 to-yellow-500 text-purple-950 flex items-center justify-center shadow-lg mb-6">
                    <Icon size={30} />
                  </div>

                  <h2 className="text-2xl font-extrabold text-white mb-3">
                    {item.title}
                  </h2>

                  <p className="text-purple-100 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <button className="flex items-center gap-2 text-yellow-200 font-bold group-hover:gap-4 transition-all">
                    Explore
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            );
          })}

          <div className="relative bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl p-7 shadow-2xl border border-yellow-400/30 overflow-hidden">
            <Sparkles className="absolute right-6 top-6 text-yellow-300" size={34} />

            <h2 className="text-2xl font-extrabold text-white mb-3">
              Your Learning Journey
            </h2>

            <p className="text-purple-100 text-sm leading-relaxed mb-6">
              Stay consistent, track your progress, and transform your
              aspirations into achievements with TOCSI.
            </p>

            <div className="h-3 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full w-[1%] bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full"></div>
            </div>

            <p className="text-yellow-200 text-sm font-semibold mt-3">
              0% progress unlocked
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;