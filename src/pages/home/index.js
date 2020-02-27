import React, { memo } from 'react';
import Dashboard from '../../components/dashboard';
import ReviewForm from '../../components/reviewForm';
import { 
  HomePage
} from './style';
import { connect } from 'react-redux';

const Home = () => {
  return (
    <HomePage>
      <ReviewForm />
      <Dashboard />
    </HomePage>
  );
}

export default connect()(memo(Home));