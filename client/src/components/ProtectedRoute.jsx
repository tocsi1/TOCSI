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

export default ProtectedRoute;