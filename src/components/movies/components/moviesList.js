import React, { memo } from 'react';
import { List, Item } from '../style';
import Movie from './movie';

const MoviesList = (props) => {
  const { movies } = props;
  console.log('movies: ', movies && Object.values(movies));

  return (
    <List>
      {movies.map((movie) => (
        <Item key={movie.movieId}>
          <Movie movie={movie} />
        </Item>
      ))}
    </List>
  );
};

export default memo(MoviesList);
