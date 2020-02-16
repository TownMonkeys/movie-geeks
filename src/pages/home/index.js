import React, { memo } from 'react';
import Dashboard from '../../components/dashboard';
import ReviewForm from '../../components/reviewForm';
import { 
  HomePage
} from './style';

const Home = () => {
  return (
    <HomePage>
      <ReviewForm />
      <Dashboard />
    </HomePage>
  );
}

export default memo(Home);