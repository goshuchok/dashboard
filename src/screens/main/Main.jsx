import React from 'react';
import Dashboard from 'screens/dashboard';
import Sidebar from 'screens/global/Sidebar';
import { HomeWrapper } from 'styles/Flex.styled';

export const Main = () => {
  return (
    <HomeWrapper>
      <Sidebar />
      <Dashboard />
    </HomeWrapper>
  );
};
