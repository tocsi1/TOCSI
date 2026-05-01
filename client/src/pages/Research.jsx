import React from "react";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";

import { ArrowLeft } from "lucide-react";


import {
  Cpu,
  FlaskConical,
  Globe2,
  FileCode,
  Database,
  Brain,
  ChartLine,
  BookOpen,
  Layers,
  Users,
  PenTool,
} from "lucide-react";

function Research() {
  return (
    <main className="min-h-screen overflow-hidden text-white font-[Poppins] bg-[radial-gradient(circle_at_top_left,#3b0764_0%,#1e1b4b_35%,#09090f_100%)]">
      


      {/* BACK TO HOME BUTTON */}
<div className="fixed top-24 left-4 z-50">
  <Link
    to="/"
    className="flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300 backdrop-blur-xl shadow-[0_0_25px_rgba(250,204,21,0.18)] hover:bg-yellow-400 hover:text-slate-950 transition"
  >
    <ArrowLeft size={18} />
    Back
  </Link>
</div>


      {/* Hero */}
      <section className="relative min-h-[82vh] flex items-center text-center px-4 sm:px-6 py-28">
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-purple-500/25 blur-[130px]"></div>
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-indigo-500/25 blur-[150px]"></div>
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[110px]"></div>
        <div className="absolute inset-[80px_10%] rounded-full blur-[70px] bg-gradient-to-br from-yellow-300/10 to-blue-400/10"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <Badge>Research & Innovation</Badge>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-7">
            Empowering Minds,{" "}
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-400 bg-clip-text text-transparent">Shaping the Future</span>
          </h1>

          <p className="max-w-4xl mx-auto text-lg leading-9 text-slate-300">
            TOCSI bridges the gap between traditional learning and future-proof technologies through
            purpose-driven research, academic innovation, and visionary mentorship. We believe the youth
            of India can lead the journey toward <span className="text-yellow-300 font-bold">"Viksit Bharat"</span> through
            Knowledge, Inquiry, Creativity, and Excellence.
          </p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <GlassCard className="p-8 md:p-12">
            <Badge>The Research Manifesto</Badge>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Where Curiosity Meets Purpose
            </h2>

            <p className="para">
              At TOCSI, research is not an isolated academic activity—it is a transformative force.
              We are committed to building a culture where students move beyond memorization and become
              thinkers, creators, investigators, and problem-solvers. Our approach blends classical
              scholarship with emerging technologies so that learning remains relevant, rigorous, and future-ready.
            </p>

            <p className="para mt-4">
              Through collaborative inquiry, innovation-driven thinking, and real-world relevance,
              TOCSI inspires young minds to contribute meaningfully to society. Our vision is to create
              a generation that does not merely prepare for exams, but prepares to shape India’s future through
              research, academic leadership, and nation-building through education.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Pillars */}
      <Section badge="Visionary Research Pillars" title="The Engines of Innovation at TOCSI">
        <div className="grid md:grid-cols-3 gap-7">
          <FeatureCard icon={<Cpu />} title="Future-Proof Technologies">
            We explore AI, Data Science, Python-based analysis, and research methodology to equip students
            with the tools that define the future of scholarship, industry, and intelligent problem-solving.
          </FeatureCard>

          <FeatureCard icon={<FlaskConical />} title="Innovation ">
            TOCSI promotes collaborative problem-solving, design thinking, and out-of-the-box innovation,
            nurturing a mindset where ideas are tested, refined, and transformed into meaningful impact.
          </FeatureCard>

          <FeatureCard icon={<Globe2 />} title="Purpose-Driven Inquiry">
            Our research vision is rooted in solving real-world Indian challenges through scholarly inquiry,
            empowering youth to contribute to a stronger, smarter, and more developed India.
          </FeatureCard>
        </div>
      </Section>

      {/* Tech Stack */}
      <Section badge="The Tech Stack of Tomorrow" title="Tools That Shape Modern Research">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <MiniCard icon={<FileCode />} title="Python" text="Data analysis, automation, and intelligent research workflows." />
          <MiniCard icon={<FileCode />} title="LaTeX" text="Professional academic writing and scholarly publication formatting." />
          <MiniCard icon={<Database />} title="Research Databases" text="Structured access to journals, references, and academic knowledge systems." />
          <MiniCard icon={<Brain />} title="AI Tools" text="Next-generation support for ideation, productivity, and analytical thinking." />
          <MiniCard icon={<ChartLine />} title="Data Science" text="Evidence-based insights for impactful and future-ready inquiry." />
        </div>
      </Section>

      {/* Scholarly Impact */}
      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.3fr_0.7fr] gap-7">
          <GlassCard className="p-8 md:p-11">
            <Badge>Scholarly Impact</Badge>

            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Youth Empowerment Through Research
            </h2>

            <p className="para">
              TOCSI prepares students to become researchers, not just exam-takers. We cultivate intellectual courage,
              academic discipline, and analytical maturity so that learners can ask deeper questions, evaluate evidence,
              and create meaningful knowledge.
            </p>

            <p className="para mt-4">
              In the journey toward <span className="text-yellow-300">Viksit Bharat</span>, young scholars must become active contributors
              to innovation, policy thinking, social transformation, and scientific progress. TOCSI exists to train such minds—
              minds that are curious, competent, ethical, and future-ready.
            </p>
          </GlassCard>

          <GlassCard className="p-8 md:p-11">
            <h3 className="text-3xl font-bold text-yellow-300 mb-6">
              What We Build in Students
            </h3>

            <ul className="space-y-4 text-slate-300">
              {[
                "Research mindset and academic curiosity",
                "Confidence in scholarly writing and presentation",
                "Critical thinking for real-world problem solving",
                "Readiness for higher studies and innovation ecosystems",
                "Purpose-driven contribution to national development",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 border-b border-white/10 pb-3">
                  <span className="text-yellow-300 font-extrabold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </section>

      {/* Roadmap */}
      <Section badge="The Scholarly Roadmap" title="From Curious Student to Independent Researcher">
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-yellow-300 to-white/10"></div>

          <Timeline title="Curious Student">
            Begins with questions, curiosity, and the desire to understand the world beyond textbooks.
          </Timeline>

          <Timeline title="Guided Explorer">
            Learns research basics, academic tools, and the discipline of inquiry under structured mentorship.
          </Timeline>

          <Timeline title="Emerging Scholar">
            Builds confidence in literature review, writing, critical analysis, and problem-solving.
          </Timeline>

          <Timeline title="Independent Researcher">
            Contributes original insights, applies knowledge to real challenges, and grows as a future-ready academic leader.
          </Timeline>
        </div>
      </Section>

      {/* Toolkit */}
      <Section badge="Research Toolkit" title="Essential Resources for Scholars">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ToolCard icon={<BookOpen />} title="Google Scholar">
            Discover research papers, citations, and scholarly literature across disciplines.
          </ToolCard>

          <ToolCard icon={<Layers />} title="Mendeley">
            Organize references, manage citations, and streamline your research workflow.
          </ToolCard>

          <ToolCard icon={<Users />} title="ResearchGate">
            Connect with scholars, explore publications, and stay engaged with research communities.
          </ToolCard>

          <ToolCard icon={<PenTool />} title="Academic Writing Guides">
            Build strong foundations in proposal writing, review papers, formatting, and referencing.
          </ToolCard>
        </div>
      </Section>

      {/* Spotlight */}
      <section className="px-4 sm:px-6 py-16">
        <GlassCard className="max-w-6xl mx-auto p-8 md:p-12 grid md:grid-cols-2 gap-9 items-center">
          <div>
            <Badge>Innovation Spotlight</Badge>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
              Featured Project / Case Study
            </h2>
            <p className="para">
              This section can showcase a research paper, student innovation, case study, or a real-world problem
              solved through academic excellence and collaborative inquiry at TOCSI.
            </p>
          </div>

          <div className="rounded-3xl bg-white/[0.07] border border-white/10 p-8 backdrop-blur-xl shadow-2xl">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">
              Sample Spotlight Area
            </h3>

            <p className="para">Title: AI-Driven Academic Support for Competitive Aspirants</p>

            <p className="para mt-3">
              Summary: A future-ready concept exploring how intelligent academic systems can improve learning,
              feedback, and personalized preparation for Indian students.
            </p>

            <p className="para mt-3">Status: Coming Soon</p>
          </div>
        </GlassCard>
      </section>






      {/* --- RESEARCH GUIDANCE CTA SECTION --- */}
<section className="px-4 sm:px-6 py-20">
  <div className="max-w-5xl mx-auto">

    <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.06] backdrop-blur-2xl p-10 md:p-14 text-center shadow-[0_0_40px_rgba(250,204,21,0.10)] hover:shadow-[0_0_55px_rgba(250,204,21,0.18)] transition-all duration-500">

      {/* Glow Effects */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-400/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/10 blur-3xl rounded-full"></div>

      {/* Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10">
        
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Need Guidance in{" "}
          <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Research?
          </span>
        </h2>

        <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
          If you are seeking guidance in your research journey, TOCSI is always ready to support, mentor, and guide you.
        </p>

        <Link
          to="/#contact"
          className="inline-block rounded-full border border-yellow-400/30 bg-yellow-400/10 px-8 py-4 font-bold text-yellow-300 shadow-[0_0_30px_rgba(250,204,21,0.15)] hover:bg-yellow-400 hover:text-slate-950 hover:scale-105 hover:shadow-[0_0_45px_rgba(250,204,21,0.25)] transition-all duration-300"
        >
          Get Guidance
        </Link>

      </div>
    </div>

  </div>
</section>







      {/* CTA */}
      <section className="px-4 sm:px-6 py-20 pb-28">
        <GlassCard className="max-w-5xl mx-auto text-center p-9 md:p-14">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
            Join the Research & Innovation Movement
          </h2>

          <p className="max-w-3xl mx-auto text-slate-300 leading-8 mb-8">
            At TOCSI, we are building not only successful aspirants, but thoughtful researchers,
            innovators, and future nation-builders. Begin your journey toward academic excellence and
            contribute to the vision of a developed India.
          </p>

          <Link
            to="/live"
            className="inline-block rounded-full border border-yellow-400/30 bg-yellow-400/10 px-9 py-4 text-yellow-300 font-extrabold shadow-[0_0_35px_rgba(250,204,21,0.18)] hover:bg-yellow-400 hover:text-slate-950 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(250,204,21,0.28)] transition"
          >
            Explore Live Classes
          </Link>
        </GlassCard>
      </section>
      <Contact />
    </main>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-block px-6 py-2.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 font-semibold text-sm mb-5 shadow-[0_0_28px_rgba(250,204,21,0.12)] backdrop-blur-xl">
      {children}
    </span>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <div className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.07] backdrop-blur-xl shadow-[0_0_35px_rgba(250,204,21,0.10)] hover:border-yellow-400/40 hover:bg-white/[0.10] hover:shadow-[0_0_45px_rgba(250,204,21,0.16)] transition-all duration-500 ${className}`}>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.12),transparent_70%)]"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

function Section({ badge, title, children }) {
  return (
    <section className="px-4 sm:px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge>{badge}</Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function IconBox({ children }) {
  return (
    <div className="w-14 h-14 rounded-2xl grid place-items-center text-yellow-300 bg-white/10 border border-white/10 mb-6 [&>svg]:w-8 [&>svg]:h-8 group-hover:bg-yellow-400 group-hover:text-slate-950 transition">
      {children}
    </div>
  );
}

function FeatureCard({ icon, title, children }) {
  return (
    <GlassCard className="p-8 hover:-translate-y-2 transition duration-300">
      <IconBox>{icon}</IconBox>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="para">{children}</p>
    </GlassCard>
  );
}

function MiniCard({ icon, title, text }) {
  return (
    <GlassCard className="p-6 text-center hover:scale-105 transition duration-300">
      <div className="mx-auto w-13 h-13 rounded-2xl grid place-items-center text-yellow-300 bg-white/10 border border-white/10 mb-5 [&>svg]:w-7 [&>svg]:h-7 group-hover:bg-yellow-400 group-hover:text-slate-950 transition">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-300 text-sm leading-6">{text}</p>
    </GlassCard>
  );
}

function Timeline({ title, children }) {
  return (
    <div className="relative grid grid-cols-[46px_1fr] gap-5 mb-7">
      <div className="relative z-10 w-5 h-5 rounded-full bg-yellow-300 shadow-[0_0_0_8px_rgba(250,204,21,0.12)] mt-8"></div>
      <GlassCard className="p-7">
        <h3 className="text-2xl font-bold text-yellow-300 mb-3">{title}</h3>
        <p className="para">{children}</p>
      </GlassCard>
    </div>
  );
}

function ToolCard({ icon, title, children }) {
  return (
    <GlassCard className="p-7 hover:-translate-y-2 transition duration-300">
      <IconBox>{icon}</IconBox>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-300 text-sm leading-6 mb-4">{children}</p>
      <a href="#" className="text-yellow-300 font-bold hover:underline">
        Add Link Here
      </a>
    </GlassCard>
  );
}

export default Research;