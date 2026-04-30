import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-[9999] bg-white/80 backdrop-blur-md border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between h-20 items-center">

          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src="/images/tocsi_logo.png"
              alt="TOCSI Logo"
              className="w-30 h-20 object-cover rounded-lg border-2 border-yellow-600 shadow-lg"
            />

            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent italic">
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-semibold text-slate-700">
            <Link to="/#courses" className="hover:text-purple-600 transition">
              Courses
            </Link>

            <Link to="/about-tocsi" className="hover:text-purple-600 transition">
              About
            </Link>

            <Link to="/research" className="hover:text-purple-600 transition">
              Research
            </Link>

            <Link to="/live" className="hover:text-purple-600 transition">
              Live Classes
            </Link>

            <Link to="/#contact" className="hover:text-purple-600 transition">
              Contact
            </Link>

            <Link
              to="/login"
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition transform hover:scale-105"
            >
              Login
            </Link>
          </div>

          {/* Mobile Icon */}
          <button
            className="md:hidden text-purple-900 p-2 z-[10000]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={34} /> : <Menu size={34} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-md shadow-xl border-t border-purple-100 px-6 py-6 flex flex-col gap-5 font-semibold text-slate-700 z-[9999]">

            <Link
              to="/#courses"
              onClick={() => setIsOpen(false)}
              className="hover:text-purple-600 transition"
            >
              Courses
            </Link>

            <Link
              to="/about-tocsi"
              onClick={() => setIsOpen(false)}
              className="hover:text-purple-600 transition"
            >
              About
            </Link>

            <Link
              to="/research"
              onClick={() => setIsOpen(false)}
              className="hover:text-purple-600 transition"
            >
              Research
            </Link>

            <Link
              to="/live"
              onClick={() => setIsOpen(false)}
              className="hover:text-purple-600 transition"
            >
              Live Classes
            </Link>

            <Link
              to="/#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-purple-600 transition"
            >
              Contact
            </Link>

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="bg-purple-600 text-white text-center px-6 py-3 rounded-lg hover:bg-purple-700 transition"
            >
              Login
            </Link>

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;