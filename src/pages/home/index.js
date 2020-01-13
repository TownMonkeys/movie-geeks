import React, { memo } from 'react';
import Movies from '../../components/movies';
// import MemberList from '../../components/member/MemberList';
import './index.scss';

const Dashboard = () => {
  return (
    <React.Fragment>
      <h2 className="home__heading">Home</h2>
      <div className="container">
        <Movies />
        {/* <MemberList /> */}
      </div>
    </React.Fragment>
  );
}

export default memo(Dashboard);