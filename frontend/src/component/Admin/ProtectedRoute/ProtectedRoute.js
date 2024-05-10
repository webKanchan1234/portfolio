import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({isAuthenticated, children ,adminRoute,isAdmin}) => {


  if(!isAuthenticated){
    return <Navigate to="/"/>
  }
  if(adminRoute && !isAdmin){
    return <Navigate to="/"/>
  }
  return children ? children : <Outlet/>
  
};

export default ProtectedRoute;