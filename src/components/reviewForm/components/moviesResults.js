import React, { memo } from 'react';

import {
  Movie,
  MovieInfo,
  MovieTitle,
  Thumbnail,
  MovieReleaseDate,
  StyledMoviesResults
} from '../style';

const MoviesResults = (props) => {
  const { movies, expanded } = props;
  console.log(expanded);

  return (
    <StyledMoviesResults 
      data-expanded={expanded} 
      id="reviewForm__moviesResults"
    >
      {movies.map((movie, i) => {
        const movieName = movie.title || movie.name;
        const releaseDate = movie.release_date || movie.first_air_date; // year-month-day
        const releaseYear = releaseDate ? releaseDate.split('-')[0] : '';

        return (
          <Movie 
            key={i}
            value={`${movieName} (${releaseYear})`}
          />
        )
      })}
    </StyledMoviesResults>
  );
}

export default memo(MoviesResults);