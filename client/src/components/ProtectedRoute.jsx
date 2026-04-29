<<<<<<< HEAD
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  console.log("ProtectedRoute token:", token);
  console.log("ProtectedRoute pathname:", location.pathname);

  if (!token) {
    return (
      <Navigate
        to="/login"
        state={{
          message: "Please login to access course content.",
          from: location.pathname
        }}
        replace
      />
    );
  }

  return children;
};

=======
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  console.log("ProtectedRoute token:", token);
  console.log("ProtectedRoute pathname:", location.pathname);

  if (!token) {
    return (
      <Navigate
        to="/login"
        state={{
          message: "Please login to access course content.",
          from: location.pathname
        }}
        replace
      />
    );
  }

  return children;
};

>>>>>>> 338b2c97f7e46148fc166ca8077e8278819aa3ad
export default ProtectedRoute;