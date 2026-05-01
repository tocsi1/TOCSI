import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, GraduationCap, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.65,
      ease: "easeOut",
    },
  }),
};

const Courses = () => {
  const freeCourses = [
    {
      id: 1,
      title: "Free Demo Classes",
      desc: "Experience TOCSI’s teaching style before joining premium programs",
      path: "/live",
    },
    {
      id: 2,
      title: "Study Resources",
      desc: "Notes, guidance, and preparation support for all learners",
      path: "/research",
    },
  ];

  const premiumCourses = [
    {
      id: 1,
      title: "UGC-NET PAPER-1",
      desc: "Teaching and Research Aptitude",
      path: "/ugc-net-paper-1",
    },
    {
      id: 2,
      title: "UGC-NET PAPER-2",
      desc: "Computer Science and Applications (87)",
      path: "/ugc-net-paper-2",
    },
    {
      id: 3,
      title: "JKSSB",
      desc: "Complete Computer Syllabus for competitive exams",
      path: "/jkssb",
    },
  ];

  const CourseCard = ({ course, index, premium = false }) => (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.03 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.08] p-6 backdrop-blur-xl transition-all duration-500 hover:border-yellow-400/60 hover:bg-white/[0.12] hover:shadow-[0_0_40px_rgba(250,204,21,0.25)]"
    >
      {/* 🔥 Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* 🔥 Cursor glow */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.18),transparent_70%)]"></div>

      {/* 🔥 Premium badge */}
      {premium && (
        <span className="absolute top-4 right-4 text-xs px-3 py-1 bg-yellow-400 text-black rounded-full font-bold shadow-lg">
          PRO
        </span>
      )}

      {/* Glow blob */}
      <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-yellow-400/10 blur-3xl transition group-hover:bg-yellow-400/20"></div>

      {/* Icon */}
      <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-yellow-300 ring-1 ring-white/10">
        {premium ? <GraduationCap size={24} /> : <BookOpen size={24} />}
      </div>

      {/* TEXT (UNCHANGED ✅) */}
      <p className="relative z-10 mb-3 text-xs font-bold uppercase tracking-[0.25em] text-yellow-300/90">
        {premium ? "Premium Program" : "Free Learning"}
      </p>

      <h4 className="relative z-10 mb-3 text-2xl font-extrabold text-white">
        {course.title}
      </h4>

      <p className="relative z-10 mb-7 leading-7 text-slate-300">
        {course.desc}
      </p>

      <Link
        to={course.path}
        className="relative z-10 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2.5 font-bold text-yellow-300 transition hover:bg-yellow-400 hover:text-slate-950"
      >
        {premium ? "View Details" : "Explore"}
        <ArrowRight size={18} className="transition group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );

  return (
    <section
      id="courses"
      className="relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#2a1f4a] to-[#1a1a2e] py-28"
    >
      {/* Background glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-purple-500/30 blur-[140px]"></div>
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-indigo-500/30 blur-[160px]"></div>
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[120px]"></div>

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-yellow-300 backdrop-blur-xl">
            <Sparkles size={16} />
            TOCSI Learning Programs
          </div>

          {/* 🔥 TEXT NOT CHANGED */}
          <h2 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Choose Your Path to{" "}
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Clarity & Success
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300">
            From free learning support to structured premium programs — choose
            your path towards clarity, discipline, purpose, and achievement.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* FREE */}
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-2xl md:p-8">
            <div className="mb-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-yellow-300">
                Start Here
              </p>
              <h3 className="text-3xl font-extrabold text-white md:text-4xl">
                Free Learning
              </h3>
              <p className="mt-3 text-slate-300">
                Begin with guidance, resources, and demo learning.
              </p>
            </div>

            <div className="space-y-5">
              {freeCourses.map((course, index) => (
                <CourseCard key={course.id} course={course} index={index} />
              ))}
            </div>
          </div>

          {/* PREMIUM */}
          <div className="relative rounded-[2rem] bg-gradient-to-br from-yellow-400/70 via-purple-500/70 to-indigo-500/70 p-[1px] shadow-[0_0_45px_rgba(250,204,21,0.18)]">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 backdrop-blur-2xl md:p-8">
              <div className="mb-8">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-yellow-300">
                  Structured Programs
                </p>
                <h3 className="text-3xl font-extrabold text-white md:text-4xl">
                  Premium Courses
                </h3>
                <p className="mt-3 text-slate-300">
                  Focused preparation with direction, structure, and mentorship.
                </p>
              </div>

              <div className="space-y-5">
                {premiumCourses.map((course, index) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    index={index}
                    premium
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;