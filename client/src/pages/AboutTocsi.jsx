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

const AboutTocsi = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden relative">
      {/* BACK TO HOME BUTTON */}
      <div className="absolute top-30 left-6 z-50">
        <Link
          to="/"
          className="flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold hover:bg-white/20 transition"
        >
          <ArrowLeft size={18} />
          Back to Home
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

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Transforming Aspirations into{" "}
              <span className="text-yellow-400">Achievements</span>
            </h1>

            <p className="max-w-4xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed">
              TOCSI is more than an educational platform. It is a visionary movement committed to
              bridging the gap between aspiration and achievement by empowering the youth of India
              with high-quality, accessible, and purpose-driven education.
            </p>
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
              A Movement for Nation-Building Through Education
            </h2>

            <p className="text-slate-300 leading-8 mb-5">
              TOCSI, the <span className="text-yellow-400">Team of Collaborative Studies and Innovation</span>,
              was founded with a clear purpose: to make quality education reach every learner, from every
              background, in every corner of India. We are not just preparing students for UGC-NET, GATE,
              JKSSB, and other competitive examinations—we are nurturing the next generation of scholars,
              thinkers, innovators, and nation-builders.
            </p>

            <p className="text-slate-300 leading-8">
              Our mission is to create a learning ecosystem where excellence is accessible, mentorship is meaningful,
              and ambition is supported with strategy, structure, and sincerity. TOCSI is not merely a coaching
              center; it is a commitment to transforming potential into performance and dreams into disciplined success.
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
              I created TOCSI with a deeply personal purpose. Like many aspirants across India, I experienced
              the uncertainty, lack of direction, limited access to quality mentorship, and silent struggles that
              students often face while preparing for competitive examinations.
            </p>

            <p className="text-slate-300 leading-8 mb-5">
              My journey as a learner, a researcher, and now an <span className="text-yellow-400">Assistant Professor</span>
              taught me that talent alone is not enough—students also need the right guidance, the right environment,
              and someone who genuinely believes in their potential. That is why TOCSI was built: so that no sincere
              aspirant has to walk the difficult road alone.
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
                desc: "Begin with ambition, clarity of purpose, and the dream to build a meaningful future.",
              },
              {
                number: "2",
                title: "Guided Learner",
                desc: "Gain structured preparation, premium resources, and consistent mentor support.",
              },
              {
                number: "3",
                title: "Confident Performer",
                desc: "Strengthen concepts, improve performance, and build exam temperament through practice.",
              },
              {
                number: "4",
                title: "Achiever",
                desc: "Step forward with confidence as a successful candidate, scholar, and contributor to the nation.",
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
              At TOCSI, we don’t just teach subjects; we build the confidence to conquer them.
            </h2>

            <p className="text-slate-300 text-lg">
              Student-first philosophy • Mentor-led preparation • Vision-driven learning
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
              Our vision is to create a community where students motivate one another, exchange ideas, and rise together.
            </p>

            <p className="text-slate-300 leading-8">
              Here, education is not one-directional. It is interactive, supportive, and deeply human—built on the belief
              that collective progress creates stronger individuals and a stronger nation.
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
              ethically grounded, and capable of meaningful contribution to society.
            </p>

            <p className="text-slate-300 leading-8">
              Through nation-building through education, we aspire to build a generation that leads with knowledge,
              confidence, and character.
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