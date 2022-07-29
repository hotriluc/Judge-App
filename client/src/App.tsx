import React from 'react';
import logo from './logo.svg';
import './App.css';

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello
        </a>
      </header>
    </div>
  );
};

export default App;
