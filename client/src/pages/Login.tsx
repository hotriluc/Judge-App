import React from 'react';
import AuthenticationForm from '../components/Auth/AuthenticationForm';

// import { useAppDispatch, useAppSelector } from '../hooks/app-hooks';
// import { createSession } from '../services/AuthService';

const Login = () => {
  // const dispatch = useAppDispatch();
  // const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  // const clickLogInBtnHandler = () => {
  //   dispatch(createSession({ email: 'abc', password: 'abc' }));
  // };

  return <AuthenticationForm />;
};

export default Login;
