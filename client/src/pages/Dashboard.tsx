import { Tabs } from '@mantine/core';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Wrapper from '../components/Layout/Wrapper';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <h1>Dashboard</h1>

      <Tabs
        defaultValue={'courses'}
        onTabChange={(value) => navigate(`${value}`)}
      >
        <Tabs.List>
          <Tabs.Tab value="courses">Courses</Tabs.Tab>
          <Tabs.Tab value="students">Students</Tabs.Tab>
        </Tabs.List>
      </Tabs>

      <Outlet />
    </Wrapper>
  );
};

export default Dashboard;
