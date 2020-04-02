import React, { memo, useEffect, useRef, useState } from 'react'
import {
  ProfilePage
} from './style';
import Header from './components/header';
import Movies from '../../components/movies';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const Profile = (props) => {
  const { match, movies } = props;
  const { username } = match.params;
  const filteredMovies = movies ? Object.values(movies).filter(movie => movie.username === username) : [];

  return (
    <ProfilePage>
      <Header />
      <Movies movies={filteredMovies} />
    </ProfilePage>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.firestore.data.movies
  }
}

export default compose(
  firestoreConnect(['movies']),
  connect(mapStateToProps)
)(memo(Profile));