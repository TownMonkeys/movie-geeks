import React, { memo } from 'react';
import { 
  List,
  Item
} from '../style';
import Movie from './movie';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';

const MoviesList = (props) => {
  const { movies } = props;
  console.log('movies: ', movies && Object.values(movies));

  return (
    <List>
      {
        movies && Object.values(movies).map((movie) => (
          <Item key={movie.movieId}>
            <Movie movie={movie} />
          </Item>
        ))
      }
    </List>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.firestore.data.movies
  };
}

export default compose(
  firestoreConnect(() => ['movies']),
  connect(mapStateToProps)
)(memo(MoviesList));