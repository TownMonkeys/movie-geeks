import React from 'react';
import './MovieList.scss';
import Movie from './Movie';

const MovieList = () => {
  return (
    <section className="movieSection dashboard__movieSection">
      <h3 className="movieSection__heading">Movies</h3>

      <ul className="list movieList">
        <li className="movieList__item">
          <Movie />
        </li>
      </ul>
    </section>
  );
}

export default MovieList;