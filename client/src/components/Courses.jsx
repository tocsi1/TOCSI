import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // This is the "Magic Link" tool

const Courses = () => {
  const courseData = [
    { 
      id: 1, 
      title: "UGC-NET PAPER-1", 
      desc: "Teaching and Research Aptitude",
      path: "/ugc-net-paper-1" // This matches the path we set in App.jsx
    },
    { 
      id: 2, 
      title: "UGC-NET PAPER-2", 
      desc: "Computer Science and Applications(87)",
      path: "/ugc-net-paper-2" 
    },
    { 
      id: 3, 
      title: "JKSSB", 
      desc: "Complete Computer Syllabus for competitive exams",
      path: "/jkssb"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900 font-serif">Our Premium Courses</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {courseData.map((course) => (
            <motion.div 
              key={course.id}
              whileHover={{ y: -10 }}
              className="bg-purple-100 p-8 rounded-2xl shadow-lg border border-purple-200 hover:shadow-2xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-purple-600 font-bold mb-4 uppercase tracking-widest text-sm">Online Course</div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">{course.title}</h3>
                <p className="text-slate-600 mb-6">{course.desc}</p>
              </div>

              {/* Clicking this now changes the page! */}
              <Link 
                to={course.path} 
                className="mt-4 inline-block text-purple-600 font-bold hover:text-purple-800 transition"
              >
                View Details →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;