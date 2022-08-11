import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = (): JSX.Element => {
  const isAuthenticated = localStorage.getItem('token');
  console.log(isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
