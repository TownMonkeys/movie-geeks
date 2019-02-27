import React from 'react';
import Members from './Members';
import MoviesList from '../movie/MoviesList';

const Dashboard = (props) => {
  console.log(props);
  return (
    <div className="dashboard">
      <MoviesList />
      <Members />
    </div>
  );
}

export default Dashboard;