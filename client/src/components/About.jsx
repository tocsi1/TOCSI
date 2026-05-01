import { motion } from "framer-motion";
import { CheckCircle, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  const stats = [
    "GATE CS 2026",
    "JRF Qualified",
    "2x UGC-NET",
    "JK-SET",
    "Life Coach for Gen-Z",
  ];

  return (
    <section
      id="about"
      className="relative py-28 bg-gradient-to-br from-violet-50 via-white to-indigo-100 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-purple-300/40 blur-[130px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/40 blur-[150px] rounded-full"></div>
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-yellow-300/30 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* IMAGE SIDE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="absolute w-80 h-80 bg-yellow-300/40 blur-3xl rounded-full"></div>

            <motion.div
              whileHover={{ scale: 1.04, rotate: 1 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-[2rem] p-[3px] bg-gradient-to-br from-yellow-400 via-purple-500 to-indigo-500 shadow-2xl"
            >
              <div className="bg-white rounded-[2rem] p-3">
                <img
                  src="/images/mentorImage.png"
                  alt="Arun Singh Katoch"
                  className="rounded-[1.5rem] w-full max-w-sm object-cover shadow-xl"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* TEXT SIDE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 text-purple-700 font-bold uppercase tracking-widest text-xs mb-5">
              <Sparkles size={15} />
              About Mentor
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-950 mt-3 mb-5 leading-tight">
              Arun Singh{" "}
              <span className="bg-gradient-to-r from-purple-700 via-indigo-700 to-yellow-500 bg-clip-text text-transparent">
                Katoch
              </span>
            </h2>

            <p className="text-slate-700 text-lg leading-8 mb-8 max-w-xl">
              <b>Founder & Mentor at TOCSI. </b> <br></br>
              Assistant Professor, SIIEDC, University of Jammu, driven by a vision
              to guide young minds towards clarity, purpose, and meaningful
              direction — transforming confusion into confidence and potential
              into achievement.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat}
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.04, y: -5 }}
                  className="flex items-center gap-3 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-purple-100 shadow-lg hover:border-yellow-400/60 hover:shadow-xl transition-all duration-500"
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center shadow-md">
                    <CheckCircle className="text-white w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-800">{stat}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl bg-gradient-to-r from-purple-700 to-indigo-700 p-[1px] shadow-xl">
              <div className="rounded-3xl bg-white/90 p-5">
                <p className="text-slate-700 font-medium leading-7">
                  “Guidance is not just about teaching — it is about helping
                  young minds find direction, discipline, and purpose.”
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;