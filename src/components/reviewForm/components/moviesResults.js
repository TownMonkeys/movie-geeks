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
  const { movies } = props;

  return (
    <StyledMoviesResults>
      {movies.map((movie,i) => 
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
            <MovieTitle>{movie.title || movie.name}</MovieTitle>
            <MovieReleaseDate>{movie.release_date || movie.first_air_date}</MovieReleaseDate>
          </MovieInfo> 
        </Movie>
      )}
    </StyledMoviesResults>
  );
}

export default memo(MoviesResults);