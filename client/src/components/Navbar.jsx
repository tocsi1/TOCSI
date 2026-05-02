import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';



import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, updateDoc, onSnapshot,getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Logged-in user state
  const [currentUser, setCurrentUser] = useState(null);

  // Profile dropdown state
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const navigate = useNavigate();



  // Check if user is logged in or logged out

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
  
        if (userSnap.exists()) {
          const userData = userSnap.data();
  
          const finalUser = {
            uid: user.uid,
            name: userData.name,
            email: user.email,
            role: userData.role,
            paymentStatus: userData.paymentStatus,
            allowedCourses: userData.allowedCourses
          };
  
          localStorage.setItem("user", JSON.stringify(finalUser));
          setCurrentUser(finalUser);
        } else {
          setCurrentUser({
            uid: user.uid,
            name: "User",
            email: user.email
          });
        }
      } else {
        setCurrentUser(null);
      }
    });
  
    return () => unsubscribe();
  }, []);
 





  // Auto logout this device if user logs in from another device
useEffect(() => {
  const user = auth.currentUser;

  if (!user) return;

  const userRef = doc(db, "users", user.uid);

  const unsubscribe = onSnapshot(userRef, async (docSnap) => {
    if (!docSnap.exists()) return;

    const userData = docSnap.data();
    const localSessionId = localStorage.getItem("tocsi_session_id");

    if (
      localSessionId &&
      userData.sessionId &&
      userData.sessionId !== localSessionId
    ) {
      await signOut(auth);

      localStorage.removeItem("user");
      localStorage.removeItem("tocsi_device_id");
      localStorage.removeItem("tocsi_session_id");

      setCurrentUser(null);
      setShowProfileMenu(false);
      setIsOpen(false);

      navigate("/login", {
        state: {
          message: "Your account was logged in on another device."
        }
      });
    }
  });

  return () => unsubscribe();
}, [currentUser, navigate]);


  

  // Logout user and remove access
  const handleLogout = async () => {
    try {
      const user = auth.currentUser;

      if (user) {
        const userRef = doc(db, "users", user.uid);

        // Reset device access after logout
        await updateDoc(userRef, {
          activeDeviceId: ""
        });
      }

      await signOut(auth);

      localStorage.removeItem("user");
      localStorage.removeItem("tocsi_device_id");
      localStorage.removeItem("tocsi_session_id");

      setCurrentUser(null);
      setShowProfileMenu(false);
      setIsOpen(false);

      navigate("/", {
        state: {
          message: "You have been logged out successfully."
        }
      });
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

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

            <Link to="/live" className="hover:text-purple-600 transition">
              Live Classes
            </Link>

            

            <Link to="/research" className="hover:text-purple-600 transition">
              Research
            </Link>

          

            <Link to="/#contact" className="hover:text-purple-600 transition">
              Contact
            </Link>

            <Link to="/about-tocsi" className="hover:text-purple-600 transition">
              About TOCSI
            </Link>

            

            

            {/* Show profile after login, otherwise show Login button */}
            
            {currentUser ? (
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-3 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition transform hover:scale-105 cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-white text-purple-700 flex items-center justify-center font-bold">
                    {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : "U"}
                  </div>

                  <span className="font-bold">
                    {currentUser.name || "User"}
                  </span>
                  <ChevronDown  size={18}  className={`transition ${showProfileMenu ? "rotate-180" : ""}`} />



                </button>

                {/* Profile dropdown */}
                {showProfileMenu && (
                  <div className="absolute right-0 mt-3 w-60 bg-white rounded-2xl shadow-xl border border-purple-100 p-4 z-[10000] " >
                    <p className="text-sm font-bold text-slate-800">
                      {currentUser.name || "TOCSI User"}
                    </p>

                    <p className="text-xs text-slate-500 break-all mt-1">
                      {currentUser.email}
                    </p>

                    <Link
                      to="/dashboard"
                      onClick={() => setShowProfileMenu(false)}
                      className="block mt-4 text-center bg-purple-100 text-purple-700 py-2 rounded-xl font-semibold hover:bg-purple-200 transition cursor-pointer"
                    >
                      Dashboard
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="mt-3 w-full bg-red-500 text-white py-2 rounded-xl font-semibold hover:bg-red-600 transition cursor-pointer"
                    >
                      Logout
                    </button>
                  </div>

                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition transform hover:scale-105"
              >
                Login
              </Link>
            )}
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
              to="/live"
              onClick={() => setIsOpen(false)}
              className="hover:text-purple-600 transition"
            >
              Live Classes
            </Link>


            <Link
              to="/research"
              onClick={() => setIsOpen(false)}
              className="hover:text-purple-600 transition"
            >
              Research
            </Link>

            <Link
              to="/#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-purple-600 transition"
            >
              Contact
            </Link>

            <Link
              to="/about-tocsi"
              onClick={() => setIsOpen(false)}
              className="hover:text-purple-600 transition"
            >
              About TOCSI
            </Link>

            

            

            

            

            {/* Mobile login/profile section */}
            {currentUser ? (
              <div className="border-t border-purple-100 pt-4">
                <div className="flex items-center gap-3 bg-purple-50 p-3 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                    {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : "U"}
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      {currentUser.name || "TOCSI User"}
                    </p>
                    <p className="text-xs text-slate-500 break-all">
                      {currentUser.email}
                    </p>
                  </div>
                </div>


                <Link
                      to="/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="mt-4 block w-full bg-purple-100 text-purple-700 text-center px-6 py-3 rounded-lg hover:bg-purple-200 transition font-semibold"
                    >
                      Dashboard
                </Link>





                {/* Logout */}
                <button
                  onClick={handleLogout}
                  className="mt-4 w-full bg-red-500 text-white text-center px-6 py-3 rounded-lg hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>

            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="bg-purple-600 text-white text-center px-6 py-3 rounded-lg hover:bg-purple-700 transition"
              >
                Login
              </Link>
            )}

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;