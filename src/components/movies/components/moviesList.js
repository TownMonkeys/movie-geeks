import React, { memo } from 'react';
import { connect } from 'react-redux';
import { 
  List,
  Item
} from '../style';
import Movie from './movie';

const MoviesList = (props) => {
  const { movies } = props;

  return (
    <List>
      {
        movies.map((movie) => (
          <Item key={movie.id}>
            <Movie movie={movie} />
          </Item>
        ))
      }
    </List>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.movie.movies
  };
}

export default connect(mapStateToProps)(memo(MoviesList));