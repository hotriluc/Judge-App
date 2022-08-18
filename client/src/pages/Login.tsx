import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthenticationForm from '../components/Auth/AuthenticationForm';

import { useAppSelector } from '../hooks/app-hooks';

const Login = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? <Navigate to="/" /> : <AuthenticationForm />;
};

export default Login;
