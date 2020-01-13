import React, { memo } from 'react';
import { 
  MoviesSection,
  Title
} from './style';
import MoviesList from './moviesList';

const Movies = () => {
  return (
    <MoviesSection>
      <Title>Movies Section</Title>

      <MoviesList />
    </MoviesSection>
  );
}

export default memo(Movies);