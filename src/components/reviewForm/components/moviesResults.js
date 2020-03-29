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
    <StyledMoviesResults data-expanded={expanded} >
      {movies.map((movie, i) => {
        const movieName = movie.title || movie.name;
        const releaseDate = movie.release_date || movie.first_air_date; // year-month-day
        const releaseYear = releaseDate ? releaseDate.split('-')[0] : '';

        return (
          <Movie key={i}>
            <Thumbnail 
              src={
                  movie.poster_path ?   `https://image.tmdb.org/t/p/original/${movie.poster_path}` :
                  movie.backdrop_path ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` :
                                        "https://media.falsoo.com/large/2019/12/16/201912160311591159.jpg"
              } 
              alt="Movie Poster" 
            />     
            <MovieInfo>
              <MovieTitle>{movieName}</MovieTitle>
              <MovieReleaseDate>{releaseYear}</MovieReleaseDate>
            </MovieInfo> 
          </Movie>
        )
      })}
    </StyledMoviesResults>
  );
}

export default memo(MoviesResults);