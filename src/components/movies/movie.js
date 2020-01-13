import React, { memo } from 'react';
import { 
  StyledMovie
} from './style';

const Movie = (props) => {
  const { movie } = props;

  return (
    <StyledMovie>
      {movie.name}
    </StyledMovie>
  );
}

export default memo(Movie);