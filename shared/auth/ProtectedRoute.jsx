// shared/auth/ProtectedRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div>Loading authentication status...</div>;
  }

  if (!isAuthenticated()) {
    // Redirect to login page and save the intended destination
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
};
