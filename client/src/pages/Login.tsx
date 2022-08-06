import React from 'react';
import { useAppDispatch } from '../hooks/redux-hooks';
import { createSession } from '../services/AuthService';

const Login = () => {
  const dispatch = useAppDispatch();

  const clickLogInBtnHandler = () => {
    console.log('hello');
    dispatch(createSession({ email: 'abc', password: 'abc' }));
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
