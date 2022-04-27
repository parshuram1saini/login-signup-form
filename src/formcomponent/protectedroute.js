import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function Protectedroute({ children }) {
  // let auth = true;
  let { user } = useUserAuth();
  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}

export default Protectedroute;
