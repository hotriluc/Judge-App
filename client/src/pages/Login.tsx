import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/app-hooks';
import { createSession } from '../services/AuthService';

const Login = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const clickLogInBtnHandler = () => {
    dispatch(createSession({ email: 'abc', password: 'abc' }));
  };

  return (
    <div>
      <h1 className="text-3xl">log in page</h1>
      <p>{isLoggedIn.toString()}</p>
      <form>
        <input type="email" />
        <input type="password" />
      </form>
      <button onClick={clickLogInBtnHandler}>log in</button>
    </div>
  );
};

export default Login;
