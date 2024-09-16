import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token || !role || !allowedRoles.includes(role)) {
    return <Navigate to="/login" replace />;
  }

  if (role === "manager") {
    return <Navigate to="/manager" replace />;
  } else if (role === "employee") {
    return <Navigate to="/employee" replace />;
  }

  return children;
};

export default ProtectedRoute;
