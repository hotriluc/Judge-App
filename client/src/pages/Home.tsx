import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/app-hooks';
import { stopSession } from '../services/AuthService';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const onLogoutHandler = () => {
    dispatch(stopSession());
    navigate('/login');
  };

  return (
    <div>
      <h1>Welcome {user.first_name}</h1>
      <Link to={'/users'}> users </Link>
      <button onClick={onLogoutHandler}>logout </button>
    </div>
  );
};

export default Home;
