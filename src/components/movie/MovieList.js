import React from 'react';
import './MovieList.scss';

const MovieList = () => {
  return (
    <section className="movieSection dashboard__movieSection">
      <h3 className="movieSection__heading">Movies</h3>

      <ul className="list movieList">
        Movie List
      </ul>
    </section>
  );
}

export default MovieList;