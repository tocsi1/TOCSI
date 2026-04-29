import React from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import UgcNetPaper1 from './components/UgcNetPaper1'; // The detailed page we created
import UgcNetPaper2Cs from './components/UgcNetPaper2Cs';
import JkssbCs from './components/JkssbCs';
import AboutTocsi from "./pages/AboutTocsi";
import Research from "./pages/Research";
import LiveClasses from "./pages/LiveClasses";


import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";


function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return null;
}


function App() {
  return (
    <Router>
      <ScrollToSection />
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
        <Navbar />


        <Routes>


          {/* HOME PAGE ROUTE */}
          <Route path="/" element={
            <main>
              <Hero />
              <Features />
              
              <About />
              <Courses />
              <Contact />
            </main>
          } />


          {/* ABOUT TOCSI PAGE ROUTE */}
          <Route path="/about-tocsi" element={<AboutTocsi />} />
          
          {/* RESEARCH PAGE ROUTE */}
          <Route path="/research" element={<Research />} />
          
          <Route path="/live" element={<LiveClasses />} />


          {/* COURSE DETAILS ROUTE */}

          {/* <Route path="/ugc-net-paper-1" element={<UgcNetPaper1 />} />
          <Route path="/ugc-net-paper-2" element={<UgcNetPaper2Cs />} />
          <Route path="/jkssb" element={<JkssbCs />} /> */}

{/* PROTECTED COURSE DETAILS ROUTES */}
          <Route
            path="/ugc-net-paper-1"
            element={
              <ProtectedRoute>
                <UgcNetPaper1 />
              </ProtectedRoute>
            }
          />

          <Route
            path="/ugc-net-paper-2"
            element={
              <ProtectedRoute>
                <UgcNetPaper2Cs />
              </ProtectedRoute>
            }
          />

          <Route
            path="/jkssb"
            element={
              <ProtectedRoute>
                <JkssbCs />
              </ProtectedRoute>
            }
          />

{/* AUTH ROUTES */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;