import React from 'react';
import Login from './pages/Login';

const App = () => {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />} />

        <Route path="users" element={<Users />}>
          <Route path=":id" element={<UserDetails />} />
        </Route>
      </Routes> */}
      <Login></Login>
    </>
  );
};

export default App;
