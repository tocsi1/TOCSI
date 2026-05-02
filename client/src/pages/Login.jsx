import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

import { signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";
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

  // Forgot password states
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

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

    // Clear old warning message when user starts typing again
    if (message) {
      setMessage("");
    }
  };

  // Send password reset email
  const handleForgotPassword = async () => {
    if (!resetEmail) {
      setMessage("Please enter your registered email address.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setMessage("Password reset link sent successfully. Please check your mail (inbox/spam folder).");
      setShowForgotPassword(false);
      setResetEmail("");
    } catch (error) {
      console.log("Password reset error:", error);

      if (error.code === "auth/user-not-found") {
        setMessage("No account found with this email.");
      } else if (error.code === "auth/invalid-email") {
        setMessage("Please enter a valid email address.");
      } else {
        setMessage("Unable to send reset link. Please try again.");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Remove old redirected message before fresh login attempt
    setMessage("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const firebaseUser = userCredential.user;

      if (!firebaseUser.emailVerified) {
        await signOut(auth);
        setMessage("Please verify your email before login. Check your mail inbox/spam folder.");
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
      const sessionId = crypto.randomUUID();

      // New login becomes the active session/device
      await updateDoc(userRef, {
        activeDeviceId: deviceId,
        sessionId: sessionId
      });
      
      localStorage.setItem("tocsi_session_id", sessionId);

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
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-300 font-semibold">
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

        <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-xl font-bold hover:from-purple-400 hover:to-indigo-400 transition cursor-pointer shadow-lg shadow-purple-900/40">
          Login
        </button>

        <div className="text-center">
          <button
            type="button"
            onClick={() => {
              setResetEmail(formData.email);
              setShowForgotPassword(true);
            }}
            className="text-sm text-yellow-200 hover:text-yellow-100 font-semibold transition cursor-pointer"
          >
            Forgot Password?
          </button>
        </div>

        <p className="text-center text-sm text-purple-100">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-white font-semibold hover:text-purple-200">
            Sign Up
          </Link>
        </p>
      </form>

      {/* Premium Forgot Password Modal */}
      {showForgotPassword && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-gradient-to-br from-slate-950/95 via-purple-950/95 to-slate-900/95 backdrop-blur-md px-4">
          
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-8 overflow-hidden space-y-5">
            <div className="text-center space-y-2">
              <p className="text-sm uppercase tracking-[0.3em] text-yellow-300 font-semibold">
                TOCSI
              </p>

              <h3 className="text-3xl font-extrabold text-white">
                Reset Password
              </h3>

              <p className="text-sm text-purple-100">
                Enter your TOCSI registered email address to receive a secure password reset link.
              </p>
            </div>

            <input
              type="email"
              placeholder="Enter registered email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-purple-200 outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40 transition"
            />

            <button
              type="button"
              onClick={handleForgotPassword}
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-xl font-bold hover:from-purple-400 hover:to-indigo-400 transition cursor-pointer shadow-lg shadow-purple-900/40"
            >
              Send Reset Link
            </button>

            <button
              type="button"
              onClick={() => {
                setShowForgotPassword(false);
                setResetEmail("");
              }}
              className="w-full bg-white/10 text-purple-100 py-3 rounded-xl font-semibold hover:bg-white/15 transition border border-white/10 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Login;