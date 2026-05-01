import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const user = userCredential.user;

      await sendEmailVerification(user);

      await setDoc(doc(db, "users", user.uid), {
        name: formData.name,
        email: formData.email,
        role: "student",
        paymentStatus: "pending",
        allowedCourses: [],
        activeDeviceId: "",
        isBlocked: false,
        createdAt: new Date()
      });

      setMessage("Signup successful! Verification email sent. Please verify your email before login.");

      setTimeout(() => {
        navigate("/login");
      }, 2500);

    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 px-4 py-24 relative overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl shadow-2xl w-full max-w-md space-y-5"
      >
        {/* Header */}
        <div className="text-center space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-200">
            TOCSI
          </p>

          <h2 className="text-3xl font-extrabold text-white">
            Create Account
          </h2>

          <p className="text-sm text-purple-100">
            Begin your premium learning journey with TOCSI.
          </p>
        </div>

        {/* Inputs */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-purple-200 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40 transition"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-purple-200 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40 transition"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-purple-200 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40 transition"
          required
        />

        {/* Message */}
        {message && (
          <p className="text-center text-sm text-purple-100 bg-purple-500/20 border border-purple-300/20 rounded-xl p-3">
            {message}
          </p>
        )}

        {/* Button */}
        <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-xl font-bold hover:from-purple-400 hover:to-indigo-400 transition shadow-lg shadow-purple-900/40">
          Sign Up
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-purple-100">
          Already have an account?{" "}
          <Link to="/login" className="text-white font-semibold hover:text-purple-200">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;