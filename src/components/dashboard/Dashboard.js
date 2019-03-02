import React from 'react';
import MovieList from '../movie/MovieList';
import MemberList from '../member/MemberList';

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="container">
        <MovieList />
        <MemberList />
      </div>
    </section>
  );
}

export default Dashboard;