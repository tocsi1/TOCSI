import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Transforming <span className="text-yellow-400">Aspirations</span> <br/>into Achievements
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Live Classes • Recorded Videos • Expert-Curated Notes for JKSSB, JK-SET, and UGC-NET.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#courses" className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition shadow-lg">Explore Courses</a>
          </div>
        </motion.div>
      </div>
      {/* Animated background blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
    </section>
  );
};
export default Hero;