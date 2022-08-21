import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Courses = () => {
  const courseList = [
    { id: '1', name: 'course 1' },
    { id: '2', name: 'course 2' },
  ];
  return (
    <div>
      <h1>this is Course page</h1>
      <ul>
        {courseList.map((course) => (
          <li key={course.id}>
            <Link to={course.id}>{course.name}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
      {/* <Routes>
        <Route path="/:id" element={<UserDetails />}></Route>
      </Routes> */}
    </div>
  );
};

export default Courses;
