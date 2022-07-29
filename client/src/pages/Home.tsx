import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome its judge app second implementation</h1>
      <Link to={'/users'}> users </Link>
    </div>
  );
};

export default Home;
