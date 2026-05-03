import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-[#1a1a2e] via-[#2a1f4a] to-[#1a1a2e] text-white overflow-hidden relative">

      {/* 🌌 Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-500/30 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/30 blur-[160px] rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-yellow-400/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Transforming <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent"> Aspirations </span> <br/> into <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent"> Achievements </span>
          </h1>

          {/* badge premium course */}
          <a
            href="https://forms.gle/RAjFhqPTRUkvYEWq9"
            target="_blank"
            rel="noopener noreferrer"
            className="block mx-auto mt-6 mb-8 w-fit group"
          >
            <div className="relative w-40 sm:w-44 md:w-48 rounded-3xl p-[3px] bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 shadow-[0_0_40px_rgba(250,204,21,0.35)] hover:scale-105 transition duration-300">
              
              <div className="absolute -top-3 -right-3 bg-red-600 text-white text-[10px] sm:text-xs font-extrabold px-3 py-1 rounded-full animate-pulse shadow-lg z-10">
                HOT
              </div>

              <div className="rounded-3xl bg-white/95 backdrop-blur-xl p-4 sm:p-5 text-center">
                <p className="text-[10px] sm:text-xs font-bold text-purple-700 uppercase tracking-wide">
                  Limited Offer
                </p>

                <h3 className="mt-2 text-sm sm:text-base md:text-lg font-extrabold text-purple-950 leading-tight">
                  Join Paper-1 Premium
                </h3>

                <div className="my-3 sm:my-4">
                  <span className="text-3xl sm:text-4xl font-black text-red-600">₹1499</span>
                </div>

                <div className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-2 rounded-xl text-xs sm:text-sm font-bold shadow-md group-hover:from-yellow-400 group-hover:to-orange-400 group-hover:text-purple-950 transition">
                  Enroll Now
                </div>
              </div>
            </div>
          </a>

          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Live Classes • Recorded Videos • Expert-Curated Notes for UGC-NET, JK-SET and JKSSB.
          </p>

          <div className="flex justify-center gap-4">
            <a 
              href="#courses" 
              className="relative inline-block px-8 py-4 rounded-full font-bold text-lg text-yellow-300 border border-yellow-400/40 bg-yellow-400/10 hover:bg-yellow-400 hover:text-black transition shadow-[0_0_25px_rgba(250,204,21,0.25)]"
            >
              Explore Courses
            </a>
          </div>
        </motion.div>
      </div>

      {/* Animated background blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
    </section>
  );
};

export default Hero;