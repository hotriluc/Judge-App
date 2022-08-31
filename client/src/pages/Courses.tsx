import React from 'react';
import { Outlet } from 'react-router-dom';
import CoursesTable from '../components/Dashboard/CoursesTable';

const Courses = () => {
  return (
    <div>
      <h1>My courses</h1>
      <div>
        <CoursesTable />
        <Outlet />
      </div>
    </div>
  );
};

export default Courses;
