import React, { memo } from 'react';
import Dashboard from '../../components/dashboard';
import ReviewForm from '../../components/reviewForm';
// import MemberList from '../../components/member/MemberList';
import './index.scss';
const Home = () => {
  return (
    <React.Fragment>
      <div className="container">
        <ReviewForm />
        <Dashboard />
        {/* <MemberList /> */}
      </div>
    </React.Fragment>
  );
}

export default memo(Home);