import React, { useEffect } from 'react';
import { createStyles } from '@mantine/core';
import { useAppDispatch, useAppSelector } from './hooks/app-hooks';
import { autoLogin } from './services/AuthService';

import NavigationBar from './components/UI/NavigationBar';
import AppRoutes from './routes/AppRoutes';

const useStyle = createStyles(() => ({
  wrapper: {
    display: 'flex',
  },
}));

const App = () => {
  const { classes } = useStyle();
  const dispatch = useAppDispatch();

  // We assume if token exists in localStorage then user is authenticated
  const token = localStorage.getItem('token');
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  // On first app run check if token is valid
  // if true then login
  // otherwise logout
  useEffect(() => {
    if (token) {
      dispatch(autoLogin(token));
    }
  }, [token]);

  return (
    <div className={classes.wrapper}>
      {isAuthenticated && <NavigationBar />}
      <AppRoutes />
    </div>
  );
};

export default App;
