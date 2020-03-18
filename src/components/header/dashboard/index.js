import React, { memo } from 'react';
import { 
  StyledDashboard,
  Title
} from './style';
import Movies from '../movies';

const Dashboard = () => {
  return (
    <StyledDashboard>
      <Title>Dashboard</Title>
      <Movies />
    </StyledDashboard>
  );
}

export default memo(Dashboard);