import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/app-hooks';
import { stopSession } from '../services/AuthService';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onLogoutHandler = () => {
    dispatch(stopSession());
    navigate('/login');
  };

  return (
    <div>
      <h1>Welcome its judge app second implementation</h1>
      <Link to={'/users'}> users </Link>
      <button onClick={onLogoutHandler}>logout </button>
    </div>
  );
};

export default Home;
