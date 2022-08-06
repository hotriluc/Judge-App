import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../services/AuthService';

const Login = () => {
  const dispatch = useDispatch();
  const clickLogInBtnHandler = () => {
    console.log('hello');
    dispatch(login({ email: 'a', password: 'b' }));
  };

  return (
    <div>
      <h1>log in page</h1>
      <form>
        <input type="email" />
        <input type="password" />
      </form>
      <button onClick={clickLogInBtnHandler}>log in</button>
    </div>
  );
};

export default Login;
