import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoutes from '../utils/ProtectedRoutes';

import CourseDetails from '../pages/CourseDetails';
import Courses from '../pages/Courses';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';
import UserDetails from '../pages/UserDetails';
import Users from '../pages/Users';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to={'courses'} />} />
          <Route path="students" element={<Users />}>
            <Route path=":id" element={<UserDetails />} />
          </Route>
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:id" element={<CourseDetails />} />
        </Route>
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
