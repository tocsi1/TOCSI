import React from 'react';
import { Zap, BookOpen, ShieldCheck, Users } from 'lucide-react';

const Features = () => {
  const featureList = [
    { icon: <Zap className="w-8 h-8" />, title: "Live Interaction", desc: "Real-time doubt solving sessions with mentors." },
    { icon: <BookOpen className="w-8 h-8" />, title: "Expert Material", desc: "Access notes curated for JKSSB and UGC-NET." },
    { icon: <ShieldCheck className="w-8 h-8" />, title: "Success Strategy", desc: "Proven methods to transform aspirations into results." },
    { icon: <Users className="w-8 h-8" />, title: "Community Support", desc: "Learn alongside a network of dedicated achievers." }
  ];

  return (
    <section className="py-20 bg-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        {featureList.map((f, i) => (
          <div key={i} className="text-center p-6 hover:bg-white/5 rounded-2xl transition-colors">
            <div className="text-yellow-400 mb-4 flex justify-center">{f.icon}</div>
            <h4 className="text-xl font-bold mb-2 uppercase tracking-wide">{f.title}</h4>
            <p className="text-purple-200 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;