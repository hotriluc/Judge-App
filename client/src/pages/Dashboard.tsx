import React from 'react';
import { Outlet } from 'react-router-dom';
import Wrapper from '../components/Layout/Wrapper';

const Dashboard = () => {
  return (
    <Wrapper>
      <h1>Dashboard</h1>
      <Outlet />
    </Wrapper>
  );
};

export default Dashboard;
