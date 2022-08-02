import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Users = () => {
  const userList = [
    { id: '1', name: 'user 1' },
    { id: '2', name: 'user 2' },
  ];
  return (
    <div>
      <h1>this is users page</h1>
      <ul>
        {userList.map((user) => (
          <li key={user.id}>
            <Link to={user.id}>{user.name}</Link>
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

export default Users;
