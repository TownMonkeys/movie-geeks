import React, { memo } from 'react';
import { 
  MoviesSection,
  Title
} from './style';
import MoviesList from './components/moviesList';


const Movies = ({ movies }) => {
  return (
    <MoviesSection>
      <Title>Movies</Title>
      <MoviesList movies={movies} />
    </MoviesSection>
  );
}

export default memo(Movies);