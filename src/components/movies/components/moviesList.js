import React, { memo } from 'react';
import { List, Item } from '../style';
import Movie from './movie';

const MoviesList = (props) => {
  const { movies } = props;

  return (
    <List>
      {movies.filter(([id, data]) => data).map((movie) => (
        <Item key={movie[1].movieId}>
          <Movie movie={movie} />
        </Item>
      ))}
    </List>
  );
};

export default memo(MoviesList);
