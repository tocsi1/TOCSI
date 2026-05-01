import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { auth } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const [allowed, setAllowed] = useState(null);

  useEffect(() => {
    const checkAccess = async () => {
      const user = auth.currentUser;

      if (!user) {
        setAllowed(false);
        return;
      }

      if (!user.emailVerified) {
        setAllowed(false);
        return;
      }

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        setAllowed(false);
        return;
      }

      const userData = userSnap.data();

      if (userData.isBlocked) {
        setAllowed(false);
        return;
      }

      // For now allow dashboard access
      // Later we will add course-specific checks

      setAllowed(true);
    };

    checkAccess();
  }, []);

  if (allowed === null) {
    return <p className="text-center mt-10">Checking access...</p>;
  }

  if (!allowed) {
    return (
      <Navigate
        to="/login"
        state={{
          message: "Access denied. Please login with a verified account.",
          from: location.pathname
        }}
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;