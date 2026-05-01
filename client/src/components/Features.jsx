import React from 'react';
import { Zap, BookOpen, ShieldCheck, Users } from 'lucide-react';

const Features = () => {
  const featureList = [
    { icon: <Zap className="w-8 h-8" />, title: "Live Interaction", desc: "Real-time doubt solving sessions with mentor." },
    { icon: <BookOpen className="w-8 h-8" />, title: "Expert-curated content", desc: "Access notes curated for JKSSB and UGC-NET." },
    { icon: <ShieldCheck className="w-8 h-8" />, title: "Success Strategy", desc: "Proven methods to transform aspirations into results." },
    { icon: <Users className="w-8 h-8" />, title: "Community Support", desc: "Learn alongside a network of dedicated achievers." }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-[radial-gradient(circle_at_top_left,#3b0764_0%,#1e1b4b_35%,#09090f_100%)] text-white">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-purple-500/25 blur-[130px]"></div>
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-indigo-500/25 blur-[150px]"></div>
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[110px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        {featureList.map((f, i) => (
          <div
            key={i}
            className="group relative overflow-hidden text-center p-7 rounded-3xl border border-white/10 bg-white/[0.07] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400/50 hover:bg-white/[0.11] hover:shadow-[0_0_35px_rgba(250,204,21,0.18)]"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.15),transparent_70%)]"></div>
            <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-yellow-400/10 blur-3xl transition group-hover:bg-yellow-400/20"></div>

            <div className="relative z-10 text-yellow-300 mb-5 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10 group-hover:bg-yellow-400 group-hover:text-slate-950 transition">
                {f.icon}
              </div>
            </div>

            <h4 className="relative z-10 text-xl font-extrabold mb-3 uppercase tracking-wide text-white">
              {f.title}
            </h4>

            <p className="relative z-10 text-slate-300 text-sm leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;