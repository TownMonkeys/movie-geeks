import React, { memo } from 'react';
import Dashboard from '../../components/dashboard';
import ReviewForm from '../../components/reviewForm';
import { 
  HomePage
} from './style';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = (props) => {
  const { auth } = props;
  
  if (!auth.uid) {
    return <Redirect to="login" />
  }

  return (
    <HomePage>
      <ReviewForm />
      <Dashboard />
    </HomePage>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(memo(Home));