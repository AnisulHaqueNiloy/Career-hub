import React, { createContext, useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Protected = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center text-center">
        <p className="">
          <span className="loading loading-bars loading-lg"></span>
        </p>
      </div>
    );
  }

  if (user) {
    return children;
  }

  console.log(location.pathname);
  return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
};

export default Protected;
