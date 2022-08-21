import React from 'react';
import { Outlet } from 'react-router-dom';
import CoursesTable from '../components/Dashboard/CoursesTable';

const Courses = () => {
  return (
    <div>
      <h1>this is Course page</h1>
      <CoursesTable />
      <Outlet />
    </div>
  );
};

export default Courses;
