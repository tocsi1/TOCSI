
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { Link } from 'react-router-dom';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
        <div className="flex items-center gap-3 cursor-pointer">
        <img
          src="/images/tocsi_logo.png"
          alt="TOCSI Logo"
          className="w-12 h-12 object-contain rectangular-full shadow-lg rectangular ring-purple-0/40"
        />

        <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent italic">
        
        </span>
      </div>  


          
          <div className="hidden md:flex items-center space-x-8 font-semibold text-slate-700">
          <Link to="/#courses" className="hover:text-purple-600 transition">
            Courses
          </Link>

          <Link to="/about-tocsi" className="hover:text-purple-600 transition">
            About
          </Link>

          <Link to="/research"className="hover:text-purple-600 transition">
          Research</Link>

          <Link to="/live" className="hover:text-purple-600 transition">
          Live Classes</Link>

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

          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </div>
        </div>
      </div>
    </nav>
  );
};

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { Link } from 'react-router-dom';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
        <div className="flex items-center gap-3 cursor-pointer">
        <img
          src="/images/tocsi_logo1.jpeg"
          alt="TOCSI Logo"
          className="w-12 h-12 object-contain rectangular-full shadow-lg rectangular ring-purple-0/40"
        />

        <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent italic">
        
        </span>
      </div>  


          
          <div className="hidden md:flex items-center space-x-8 font-semibold text-slate-700">
          <Link to="/#courses" className="hover:text-purple-600 transition">
            Courses
          </Link>

          <Link to="/about-tocsi" className="hover:text-purple-600 transition">
            About
          </Link>

          <Link to="/research"className="hover:text-purple-600 transition">
          Research</Link>

          <Link to="/live" className="hover:text-purple-600 transition">
          Live Classes</Link>

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

          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;