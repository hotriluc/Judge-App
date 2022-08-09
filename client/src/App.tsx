import React from 'react';
import Login from './pages/Login';

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
      {/* <Routes>
        <Route path="/" element={<Home />} />

        <Route path="users" element={<Users />}>
          <Route path=":id" element={<UserDetails />} />
        </Route>
      </Routes> */}
      <Login></Login>
    </div>
  );
};

export default App;
