<<<<<<< HEAD
import React, { useRef, useState } from "react";
import Contact from "../components/Contact";
import liveClasses from "../data/liveClassData";


function LiveClasses() {
  const [selectedClass, setSelectedClass] = useState(null);
  const playerRef = useRef(null);

  const startClass = (classItem) => {
    setSelectedClass(classItem);

    setTimeout(() => {
      playerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const closeClass = () => {
    setSelectedClass(null);
  };

  return (
    <main className="min-h-screen overflow-hidden text-white bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.13),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(124,58,237,0.32),transparent_30%),linear-gradient(135deg,#1a1a2e_0%,#211033_45%,#301934_100%)]">

      <section className="px-6 pt-28 pb-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-5 py-2 rounded-full bg-yellow-300/10 border border-yellow-300/30 text-yellow-300 font-semibold text-sm mb-5">
            TOCSI PREMIUM LEARNING
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Live <span className="text-yellow-300">Classes</span>
          </h1>

          <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-8">
            Join premium live sessions designed for serious aspirants. Learn from
            expert mentorship, stay updated with real-time classes, and elevate
            your preparation with TOCSI.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-7 mt-14">
         {liveClasses.map((item, index) =>  (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-7 shadow-[0_24px_70px_rgba(0,0,0,0.28)] hover:-translate-y-2 transition duration-300"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition duration-700 bg-gradient-to-r from-transparent via-yellow-200/10 to-transparent"></div>

              <div className="flex items-center justify-between gap-3 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/15 border border-red-400/30 text-red-300 font-bold text-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-ping"></span>
                  LIVE
                </div>

                <div className="px-3 py-2 rounded-full bg-yellow-300/10 border border-yellow-300/20 text-yellow-200 text-xs font-semibold">
                  {item.icon} {item.time}
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">{item.title}</h2>

              <p className="text-gray-300 mb-8">
                Mentor:{" "}
                <span className="text-yellow-300 font-semibold">
                  {item.mentor}
                </span>
              </p>

              <button
                onClick={() => startClass(item)}
                className="relative z-10 w-full rounded-full px-6 py-3 bg-gradient-to-r from-yellow-300 to-yellow-500 text-[#1a1a2e] font-extrabold shadow-[0_16px_40px_rgba(250,204,21,0.25)] hover:-translate-y-1 transition"
              >
                Join Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {selectedClass && (
        <section ref={playerRef} className="px-6 pb-24">
          <div className="max-w-5xl mx-auto rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-[0_24px_70px_rgba(0,0,0,0.35)] overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 border-b border-white/10">
              <div>
                <h3 className="text-2xl font-bold text-yellow-300">
                  {selectedClass.title}
                </h3>
                <p className="text-gray-300">Now streaming on TOCSI</p>
              </div>

              <button
                onClick={closeClass}
                className="rounded-full px-6 py-3 bg-red-500/20 border border-red-400/30 text-red-200 font-bold hover:bg-red-500/30 transition"
              >
                Close Player
              </button>
            </div>

            <div className="aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedClass.videoId}?autoplay=1&rel=0`}
                title="TOCSI Live Class Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      )}
      
      <Contact />
    </main>
  );
}

=======
import React, { useRef, useState } from "react";
import Contact from "../components/Contact";
import liveClasses from "../data/liveClassData";


function LiveClasses() {
  const [selectedClass, setSelectedClass] = useState(null);
  const playerRef = useRef(null);

  const startClass = (classItem) => {
    setSelectedClass(classItem);

    setTimeout(() => {
      playerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const closeClass = () => {
    setSelectedClass(null);
  };

  return (
    <main className="min-h-screen overflow-hidden text-white bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.13),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(124,58,237,0.32),transparent_30%),linear-gradient(135deg,#1a1a2e_0%,#211033_45%,#301934_100%)]">

      <section className="px-6 pt-28 pb-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-5 py-2 rounded-full bg-yellow-300/10 border border-yellow-300/30 text-yellow-300 font-semibold text-sm mb-5">
            TOCSI PREMIUM LEARNING
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Live <span className="text-yellow-300">Classes</span>
          </h1>

          <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-8">
            Join premium live sessions designed for serious aspirants. Learn from
            expert mentorship, stay updated with real-time classes, and elevate
            your preparation with TOCSI.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-7 mt-14">
         {liveClasses.map((item, index) =>  (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-7 shadow-[0_24px_70px_rgba(0,0,0,0.28)] hover:-translate-y-2 transition duration-300"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition duration-700 bg-gradient-to-r from-transparent via-yellow-200/10 to-transparent"></div>

              <div className="flex items-center justify-between gap-3 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/15 border border-red-400/30 text-red-300 font-bold text-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-ping"></span>
                  LIVE
                </div>

                <div className="px-3 py-2 rounded-full bg-yellow-300/10 border border-yellow-300/20 text-yellow-200 text-xs font-semibold">
                  {item.icon} {item.time}
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">{item.title}</h2>

              <p className="text-gray-300 mb-8">
                Mentor:{" "}
                <span className="text-yellow-300 font-semibold">
                  {item.mentor}
                </span>
              </p>

              <button
                onClick={() => startClass(item)}
                className="relative z-10 w-full rounded-full px-6 py-3 bg-gradient-to-r from-yellow-300 to-yellow-500 text-[#1a1a2e] font-extrabold shadow-[0_16px_40px_rgba(250,204,21,0.25)] hover:-translate-y-1 transition"
              >
                Join Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {selectedClass && (
        <section ref={playerRef} className="px-6 pb-24">
          <div className="max-w-5xl mx-auto rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-[0_24px_70px_rgba(0,0,0,0.35)] overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 border-b border-white/10">
              <div>
                <h3 className="text-2xl font-bold text-yellow-300">
                  {selectedClass.title}
                </h3>
                <p className="text-gray-300">Now streaming on TOCSI</p>
              </div>

              <button
                onClick={closeClass}
                className="rounded-full px-6 py-3 bg-red-500/20 border border-red-400/30 text-red-200 font-bold hover:bg-red-500/30 transition"
              >
                Close Player
              </button>
            </div>

            <div className="aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedClass.videoId}?autoplay=1&rel=0`}
                title="TOCSI Live Class Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      )}
      
      <Contact />
    </main>
  );
}

>>>>>>> 338b2c97f7e46148fc166ca8077e8278819aa3ad
export default LiveClasses;