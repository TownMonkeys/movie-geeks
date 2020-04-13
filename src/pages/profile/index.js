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
  const filteredMovies = movies ? Object.entries(movies).filter(([id, data]) => data.username === username) : [];
  console.log(filteredMovies);

  return (
    <ProfilePage>
      <Header />
      {filteredMovies.length && <Movies movies={filteredMovies} />}
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