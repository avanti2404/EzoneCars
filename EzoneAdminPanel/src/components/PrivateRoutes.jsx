// components/PrivateRoute.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const token = localStorage.getItem("adminToken");

  // If no token, redirect to login
  return token ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoutes;
