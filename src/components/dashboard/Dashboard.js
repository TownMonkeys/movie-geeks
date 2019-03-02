import React from 'react';
import MovieList from '../movie/MovieList';
import MemberList from '../member/MemberList';
import './Dashboard.scss';

const Dashboard = () => {
  return (
    <section className="dashboard">
      <h2 className="dashboard__heading">Dashboard</h2>
      <div className="container">
        <MovieList />
        <MemberList />
      </div>
    </section>
  );
}

export default Dashboard;