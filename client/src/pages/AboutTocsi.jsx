import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";

import {
  BookOpen,
  Target,
  Sparkles,
  CheckCircle2,
  BrainCircuit,
  ArrowLeft,
  Crown,
  Lightbulb,
  Scale,
  Sprout,
  Quote,
  Users,
  Rocket,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const visionFadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const visionMissionPoints = [
  "Provide the right direction to youth",
  "Help them realize their life’s purpose",
  "Transform distraction and procrastination into focus and action",
  "Replace confusion with clarity and vision",
  "Nurture them into rational thinkers, researchers, scientists, innovators, and leaders",
];

const AboutTocsi = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden relative">
     
     
     {/* BACK TO HOME BUTTON */}
    <div className="fixed top-22 left-4 z-50">
      <Link
        to="/"
        className="flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold text-white hover:bg-white/20 transition shadow-lg"
      >
        <ArrowLeft size={18} />
        Back
      </Link>
    </div>

      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-indigo-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full"></div>
      </div>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-yellow-300 text-sm font-semibold mb-6">
              <Sparkles size={16} />
              About TOCSI
            </div>

            {/* <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Transforming Aspirations into{" "}
              <span className="text-yellow-400">Achievements</span>
            </h1> */}

           

           







          </motion.div>
        </div>
      </section>

      {/* ADVANCED OUR VISION SECTION */}
      <section className="relative overflow-hidden bg-[#050816] text-white py-24 px-5 md:px-10 lg:px-20">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-700/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-800/40 rounded-full blur-[180px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-yellow-400/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            variants={visionFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className="inline-block px-6 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-300 text-sm md:text-base tracking-[0.25em] uppercase font-semibold">
              Our Vision
            </span>
          </motion.div>

          <motion.h1
            variants={visionFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-[Montserrat] text-center text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-10"
          >
            TOCSI is not just a platform —
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-400 bg-clip-text text-transparent">
              it is a Vision.
            </span>
          </motion.h1>

          <motion.div
            variants={visionFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mb-16 p-8 md:p-10 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
          >
            <p className="font-[Poppins] text-lg md:text-xl lg:text-2xl leading-[1.9] text-slate-200 text-center">
              TOCSI{" "}
              <span className="text-yellow-300 font-semibold">
                (Team of Collaborative Studies and Innovation)
              </span>{" "}
              is not just a platform — it is a vision to guide every young mind towards clarity, purpose, and meaningful direction in life, with a belief that empowered youth are the foundation of a{" "}
              <span className="text-yellow-300 font-bold">"Viksit Bharat"</span>.
            </p>
          </motion.div>

          <motion.div
            variants={visionFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative mb-16 rounded-[2rem] p-[1px] bg-gradient-to-r from-yellow-400/60 via-violet-500/50 to-indigo-500/50"
          >
            <div className="rounded-[2rem] bg-[#0b1026]/90 backdrop-blur-xl p-8 md:p-12">
              <h2 className="font-[Montserrat] text-3xl md:text-5xl font-bold mb-6">
                The Soul of the Vision
              </h2>

              <p className="font-[Poppins] text-lg md:text-xl lg:text-2xl leading-[1.9] text-slate-300">
                I envision an India that stands as a true{" "}
                <span className="text-yellow-300 font-bold">"Vishwa Guru"</span>{" "}
                — a developed and self-reliant nation "Atmanirbhar Bharat" that leads the world through Knowledge, Wisdom, Innovation, Values, and Global Leadership.
              </p>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="mt-10 p-6 rounded-2xl bg-yellow-400/10 border border-yellow-400/30"
              >
                <p className="font-[Montserrat] text-2xl md:text-4xl font-extrabold text-center">
                  But this transformation begins with one powerful force:
                  <span className="text-yellow-300"> our YOUTH.</span>
                </p>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <motion.div
              custom={1}
              variants={visionFadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-10 hover:border-yellow-400/40 transition-all duration-500"
            >
              <h3 className="font-[Montserrat] text-2xl md:text-4xl font-bold mb-6 text-yellow-300">
                The Reality
              </h3>

              <p className="font-[Poppins] text-lg md:text-xl leading-[1.9] text-slate-300">
                Today, many young minds are full of energy, yet often lack direction. In a world filled with constant distraction, rising procrastination, and a growing lack of clarity and purpose, even the most capable individuals struggle to channel their potential effectively. They have dreams, but often find themselves unable to translate those dreams into meaningful action.
              </p>
            </motion.div>

            <motion.div
              custom={2}
              variants={visionFadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-10 hover:border-yellow-400/40 transition-all duration-500"
            >
              <h3 className="font-[Montserrat] text-2xl md:text-4xl font-bold mb-6 text-yellow-300">
                My Mission
              </h3>

              <p className="font-[Poppins] text-lg md:text-xl leading-[1.9] text-slate-300">
                My mission is to guide this energy in the right direction — to help every student overcome confusion, discover their true potential, define their goals, and move forward with clarity, discipline, and confidence.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={visionFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="font-[Montserrat] text-center text-3xl md:text-5xl font-extrabold mb-12">
              Through TOCSI, I aim to:
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visionMissionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  variants={visionFadeUp}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.06,
                    y: -10,
                  }}
                  className="group min-h-[180px] rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 flex items-center justify-center text-center cursor-pointer transition-all duration-500 hover:border-yellow-400/60 hover:shadow-[0_0_35px_rgba(250,204,21,0.25)]"
                >
                  <p className="font-[Poppins] text-lg md:text-xl leading-relaxed text-slate-200 group-hover:text-yellow-200 transition">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={visionFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="max-w-5xl mx-auto mb-16 text-center rounded-[2rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 md:p-12 backdrop-blur-xl"
          >
            <p className="font-[Montserrat] text-2xl md:text-4xl font-bold leading-snug">
              I believe that empowering young minds is not just education —
              <br />
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-400 bg-clip-text text-transparent">
                it is the highest form of Service, the purest form of Patriotism.
              </span>
            </p>
          </motion.div>

          <motion.div
            variants={visionFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative text-center rounded-[2.5rem] p-[1px] bg-gradient-to-r from-yellow-400 via-violet-500 to-indigo-500"
          >
            <div className="rounded-[2.5rem] bg-[#070b1d]/95 p-8 md:p-14">
              <p className="font-[Poppins] text-lg md:text-2xl leading-[1.9] text-slate-300 mb-8">
                When our youth rise above distraction, act with purpose, and move with discipline and vision — India will not just grow, it will lead — towards a truly{" "}
                <span className="text-yellow-300 font-bold">Viksit Bharat</span>{" "}
                and a global{" "}
                <span className="text-yellow-300 font-bold">Vishwa Guru</span>.
              </p>

              <h2 className="font-[Montserrat] text-3xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-400 bg-clip-text text-transparent">
                "Viksit Bharat". "Vishwa Guru".
              </h2>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-yellow-300 text-sm font-semibold mb-6">
              <Target size={16} />
              Mission Statement
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
            A Movement for Purpose, Direction, and Nation-Building
            </h2>

            <p className="text-slate-300 leading-8 mb-5">
            TOCSI, the Team of Collaborative Studies and Innovation, was founded with a simple yet powerful belief — that every young mind holds immense potential, but what truly shapes that potential is the right direction.

TOCSI is not limited to preparing individuals for examinations; it is about guiding them to think clearly, act purposefully, and move forward with confidence. It is about helping individuals rise above confusion, overcome distraction, and transform their energy into meaningful action.

            </p>

            <p className="text-slate-300 leading-8">
            At its core, TOCSI is an ecosystem where ideas evolve into clarity, ambition turns into disciplined effort, and potential transforms into purposeful impact. It is a space where individuals are not just prepared for exams, but prepared for life — as thinkers, innovators, leaders, and contributors to a stronger and self-reliant nation.

Because true nation-building does not begin with systems — it begins with individuals who have clarity, purpose, and the courage to act.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl border border-purple-400/20 bg-gradient-to-br from-purple-700/20 via-slate-900 to-indigo-900/30 backdrop-blur-xl p-8 md:p-10 shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400/10 blur-3xl rounded-full"></div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-400">
                Why TOCSI Matters
              </h3>

              <div className="space-y-4 text-slate-300 leading-7">
                <p>Bridging the gap between talent and opportunity.</p>
                <p>Creating confident, capable, and future-ready learners.</p>
                <p>Building a culture of collaborative studies, innovation, and academic excellence.</p>
                <p>Empowering youth through education that is accessible, visionary, and transformational.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-yellow-300 text-sm font-semibold mb-6">
              <Sparkles size={16} />
              Our Core Values
            </div>

            <h2 className="text-3xl md:text-5xl font-bold">
              The Principles That Define <span className="text-yellow-400">TOCSI</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                icon: <Crown size={26} />,
                title: "Excellence",
                desc: "We pursue the highest standards in teaching, mentorship, and preparation so every learner can strive for extraordinary outcomes.",
              },
              {
                icon: <Lightbulb size={26} />,
                title: "Innovation",
                desc: "We believe modern learners deserve dynamic methods, smart strategies, and next-generation approaches to success.",
              },
              {
                icon: <Scale size={26} />,
                title: "Integrity",
                desc: "We stand for honesty, discipline, and authenticity, because true achievement must be built on strong values.",
              },
              {
                icon: <Sprout size={26} />,
                title: "Empowerment",
                desc: "We exist to awaken confidence, capability, and courage in students so they can shape their own future with pride.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple-600/20 text-yellow-300 flex items-center justify-center mb-4">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-300 leading-7">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-stretch">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-xl shadow-2xl"
          >
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-yellow-400/40 shadow-2xl mb-6 bg-white/10">
              <img
                src="/images/mentorImage.png"
                alt="Arun Singh Katoch"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-3xl font-bold">Arun Singh Katoch</h3>
            <p className="text-yellow-400 font-semibold mt-2 mb-6">
              Founder & Mentor, TOCSI
            </p>

            <div className="grid gap-3">
              {[
                "JRF Qualified",
                "GATE CS Qualified",
                "Assistant Professor",
                "Dedicated Mentor for Competitive Aspirants",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl shadow-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-yellow-300 text-sm font-semibold mb-6">
              <BookOpen size={16} />
              Founder’s Message
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Built from Struggle, Driven by Purpose
            </h2>

            <p className="text-slate-300 leading-8 mb-5">
            I created TOCSI with a deeply personal purpose. Like many young minds across India, I experienced uncertainty, lack of direction, limited access to the right guidance, and the silent struggles that often go unseen. 
            TOCSI was born not just to address these challenges, but to create a space where clarity replaces confusion, purpose replaces doubt, and individuals are empowered to realize their true potential and move forward with confidence.
            </p>

            <p className="text-slate-300 leading-8 mb-5">
            My journey as a learner, a researcher, and an <span className="text-yellow-400">Assistant Professor</span> has shown me that talent alone is never enough—what truly shapes growth is the right guidance, a supportive environment, and someone who genuinely believes in your potential. 
            TOCSI was built with this vision: to create an ecosystem where individuals find clarity, build confidence, and move forward with purpose—ensuring that no determined mind has to navigate their journey alone.
            </p>

            <p className="text-slate-300 leading-8">
              With the discipline of a <span className="text-yellow-400">JRF-qualified scholar</span>, the technical grounding
              of <span className="text-yellow-400">GATE CS</span>, and the heart of a committed mentor, my goal is to help
              students transform confusion into clarity, effort into excellence, and aspiration into achievement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SUCCESS ROADMAP */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-yellow-300 text-sm font-semibold mb-6">
              <Rocket size={16} />
              A Success Roadmap
            </div>

            <h2 className="text-3xl md:text-5xl font-bold">
              From Aspirant to <span className="text-yellow-400">Achiever</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                number: "1",
                title: "Aspirant",
                desc: "Begin with ambition, a sense of purpose, and the desire to create a meaningful future.",
              },
              {
                number: "2",
                title: "Guided Learner",
                desc: "Move forward with clarity through the right guidance, a supportive environment, and continuous learning.",
              },
              {
                number: "3",
                title: "Confident Performer",
                desc: "Build confidence, strengthen your abilities, and develop the mindset to perform with clarity and conviction.",
              },
              {
                number: "4",
                title: "Achiever",
                desc: "Step forward as a confident individual, ready to contribute, lead, and create impact in the real world.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-7 backdrop-blur-xl shadow-xl text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-yellow-400 text-black font-extrabold flex items-center justify-center text-xl mb-5">
                  {item.number}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-300 leading-7">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT-FIRST QUOTE */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-10 md:p-14 text-center shadow-2xl backdrop-blur-xl"
          >
            <Quote size={42} className="text-yellow-400 mx-auto mb-6" />

            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
            “At TOCSI, we don’t just impart knowledge—we cultivate confidence, clarity, and the mindset to navigate challenges and create meaningful impact.”
            </h2>

            <p className="text-slate-300 text-lg">
            Student-first mindset • Mentor-guided growth • Purpose-driven learning
            </p>
          </motion.div>
        </div>
      </section>

      {/* COLLABORATIVE SPIRIT */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl shadow-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-yellow-300 text-sm font-semibold mb-6">
              <Users size={16} />
              The Collaborative Spirit
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Learning Beyond the Classroom
            </h2>

            <p className="text-slate-300 leading-8 mb-5">
              TOCSI stands for collaborative studies because we believe growth becomes stronger when learning is shared.
              Our vision is to create a community where learners motivate one another, exchange ideas, and rise together.
            </p>

            <p className="text-slate-300 leading-8">
              Here, education is not one-directional. It is interactive, supportive, and deeply human—built on the belief
              that collective progress creates stronger individuals and a Stronger Nation.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl shadow-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-yellow-300 text-sm font-semibold mb-6">
              <Sparkles size={16} />
              Vision for the Future
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Preparing the Next Generation of Scholars
            </h2>

            <p className="text-slate-300 leading-8 mb-5">
              TOCSI is committed to shaping learners who are not only exam-ready but also intellectually strong,
              ethically grounded, and capable of meaningful contribution to Society.
            </p>

            <p className="text-slate-300 leading-8">
              Nation-building through Education, we aspire to build a generation that leads with Knowledge,
              Confidence, and Character.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] border border-purple-400/20 bg-gradient-to-r from-purple-700/30 via-slate-900 to-indigo-900/30 backdrop-blur-xl p-10 md:p-14 text-center shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-400/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-5">
                Join the <span className="text-yellow-400">TOCSI Movement</span>
              </h2>

              <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-8 mb-8">
                Become part of a premium learning ecosystem built on excellence, innovation, integrity,
                and empowerment. Your aspirations deserve the right direction.
              </p>

              <Link
                to="/live"
                className="inline-flex items-center gap-2 bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition shadow-lg"
              >
                Explore Live Classes
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <Contact />
    </div>
  );
};


export default AboutTocsi;