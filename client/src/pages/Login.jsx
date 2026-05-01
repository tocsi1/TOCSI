import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log("Login location.state:", location.state);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState(
    location.state?.message || ""
  );

  const getDeviceId = () => {
    let deviceId = localStorage.getItem("tocsi_device_id");

    if (!deviceId) {
      deviceId = crypto.randomUUID();
      localStorage.setItem("tocsi_device_id", deviceId);
    }

    return deviceId;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const firebaseUser = userCredential.user;

      if (!firebaseUser.emailVerified) {
        await signOut(auth);
        setMessage("Please verify your email before login. Check your Gmail inbox/spam folder.");
        return;
      }

      const userRef = doc(db, "users", firebaseUser.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await signOut(auth);
        setMessage("User record not found. Please contact TOCSI support.");
        return;
      }

      const userData = userSnap.data();

      if (userData.isBlocked) {
        await signOut(auth);
        setMessage("Your account is blocked. Please contact TOCSI support.");
        return;
      }

      const deviceId = getDeviceId();

      if (userData.activeDeviceId && userData.activeDeviceId !== deviceId) {
        await signOut(auth);
        setMessage("This account is already active on another device. Please contact TOCSI to reset device access.");
        return;
      }

      if (!userData.activeDeviceId) {
        await updateDoc(userRef, {
          activeDeviceId: deviceId
        });
      }

      localStorage.setItem("user", JSON.stringify({
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        name: userData.name,
        role: userData.role,
        paymentStatus: userData.paymentStatus,
        allowedCourses: userData.allowedCourses
      }));

      const redirectTo = location.state?.from || "/dashboard";
      console.log("Redirecting to:", redirectTo);

      navigate(redirectTo, { replace: true });

    } catch (error) {
      console.log("Login error:", error);

      if (error.code === "auth/invalid-credential") {
        setMessage("Invalid email or password.");
      } else if (error.code === "auth/user-not-found") {
        setMessage("No account found with this email.");
      } else if (error.code === "auth/wrong-password") {
        setMessage("Wrong password.");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 px-4 py-24 relative overflow-hidden">
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl shadow-2xl w-full max-w-md space-y-5"
      >
        <div className="text-center space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-200">
            TOCSI
          </p>

          <h2 className="text-3xl font-extrabold text-white">
            Login
          </h2>

          <p className="text-sm text-purple-100">
            Welcome back to your premium learning space.
          </p>
        </div>

        {message && (
          <div className="bg-yellow-400/15 text-yellow-100 text-sm p-3 rounded-xl border border-yellow-300/30">
            {message}
          </div>
        )}

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

        <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-xl font-bold hover:from-purple-400 hover:to-indigo-400 transition shadow-lg shadow-purple-900/40">
          Login
        </button>

        <p className="text-center text-sm text-purple-100">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-white font-semibold hover:text-purple-200">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;