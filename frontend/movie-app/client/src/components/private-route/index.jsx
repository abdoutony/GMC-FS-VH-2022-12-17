import React from "react";
import { Navigate } from "react-router-dom";
export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  if (token && token === "1234") {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
