import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import UserDetails from './pages/UserDetails';
import Users from './pages/Users';
import ProtectedRoutes from './utils/ProtectedRoutes';

const App = () => {
  return (
    <>
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
