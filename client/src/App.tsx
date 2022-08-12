import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavbarSimple } from './components/UI/NavigationBar';
import { useAppDispatch } from './hooks/app-hooks';
// import { useAppDispatch } from './hooks/app-hooks';
import Home from './pages/Home';
import Login from './pages/Login';
import UserDetails from './pages/UserDetails';
import Users from './pages/Users';
import { autoLogin } from './services/AuthService';
import ProtectedRoutes from './utils/ProtectedRoutes';

const App = () => {
  const token = localStorage.getItem('token');
  const dispatch = useAppDispatch();

  // On first app run check if token exists
  // if yes then auto-login
  useEffect(() => {
    if (token) {
      dispatch(autoLogin(token));
    }
  }, [token]);

  return (
    <>
      <NavbarSimple />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<Users />}>
            <Route path=":id" element={<UserDetails />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
