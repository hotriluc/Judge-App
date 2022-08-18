import { createStyles } from '@mantine/core';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './utils/ProtectedRoutes';

import { useAppDispatch, useAppSelector } from './hooks/app-hooks';
import { autoLogin } from './services/AuthService';

import NavigationBar from './components/UI/NavigationBar';

import Home from './pages/Home';
import Login from './pages/Login';
import User from './pages/User';
import Users from './pages/Users';

const useStyle = createStyles(() => ({
  wrapper: {
    display: 'flex',
  },
}));

const App = () => {
  const { classes } = useStyle();
  const token = localStorage.getItem('token');
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  // On first app run check if token exists
  // if yes then auto-login
  useEffect(() => {
    if (token) {
      dispatch(autoLogin(token));
    }
  }, [token]);

  return (
    <div className={classes.wrapper}>
      {isAuthenticated && <NavigationBar />}
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<Users />}>
            <Route path=":id" element={<User />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
