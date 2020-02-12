import React, { memo } from 'react';
import Movies from '../../components/movies';
import ReviewForm from '../../components/reviewForm';
// import MemberList from '../../components/member/MemberList';
import './index.scss';
const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="container">
        <ReviewForm />
        <Movies />
        {/* <MemberList /> */}
      </div>
    </React.Fragment>
  );
}

export default memo(Dashboard);