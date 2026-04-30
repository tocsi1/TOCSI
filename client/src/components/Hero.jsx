
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


{/* badge */}
          <a
  href="YOUR_GOOGLE_FORM_LINK"
  target="_blank"
  rel="noopener noreferrer"
  className="absolute right-10 top-60 -translate-y-1/2 hidden md:block group"
>
  <div className="relative w-48 rounded-3xl p-[3px] bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 shadow-2xl hover:scale-105 transition duration-300">
    
    <div className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-extrabold px-3 py-1 rounded-full animate-pulse shadow-lg">
      HOT
    </div>

    <div className="rounded-3xl bg-white/95 backdrop-blur-xl p-5 text-center">
      <p className="text-xs font-bold text-purple-700 uppercase tracking-wide">
        Limited Offer
      </p>

      <h3 className="mt-2 text-lg font-extrabold text-purple-950 leading-tight">
        Join Paper-1 Premium
      </h3>

      <div className="my-4">
        <span className="text-4xl font-black text-red-600">₹1499</span>
      </div>

      <div className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-2 rounded-xl text-sm font-bold shadow-md group-hover:from-yellow-400 group-hover:to-orange-400 group-hover:text-purple-950 transition">
        Enroll Now
      </div>
    </div>
  </div>
</a>



          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Live Classes • Recorded Videos • Expert-Curated Notes for JKSSB, JK-SET, and UGC-NET.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#courses" className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition shadow-lg">Explore Courses</a>
          </div>
        </motion.div>
      </div>


      <h1 className="text-4xl md:text-6xl font-bold text-white">
  Transform Your Aspirations into Achievements
</h1>

<p className="mt-4 text-purple-200">
  Learn with expert mentorship for UGC-NET, JK-SET and more.
</p>






      {/* Animated background blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
    </section>
  );
};


export default Hero;