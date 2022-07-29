import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';
import Users from './pages/Users';

const App = () => {
  // const [usersList, setUsersList] = useState(Array<IUser>);

  // useEffect(() => {
  //   axios.get('/api/v1/users').then((res: AxiosResponse) => {
  //     setUsersList(res.data);
  //   });

  //   return () => {
  //     console.log('kek');
  //   };
  // }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="users/:id" element={<UserDetails />} /> */}
        <Route path="users" element={<Users />}>
          <Route path=":id" element={<UserDetails />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
