
import { Award, BookOpen, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = ["GATE CS 2026", "JRF Qualified", "2x UGC-NET", "JK-SET","Life Coach for Gen-Z"];
  
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-purple-100 rounded-2xl rotate-3"></div>
            <img src="/public/images/mentorImage.png" alt="Arun Singh Katoch" className="relative rounded-2xl shadow-xl w-full max-w-md mx-auto" />
          </div>
          <div>
            <h2 className="text-purple-600 font-bold uppercase tracking-wider mb-2">About Mentor</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Arun Singh Katoch</h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Founder & Educator at TOCSI. Assistant Professor with a mission to simplify complex Computer Science concepts for every aspirant.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition">
                  <CheckCircle className="text-green-500 w-5 h-5" />
                  <span className="font-semibold text-slate-700">{stat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;