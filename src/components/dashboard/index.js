import React, { memo } from 'react';
import { 
  StyledDashboard,
  Title
} from './style';
import Movies from '../movies';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';

const Dashboard = (props) => {
  const { movies } = props;
  console.log(movies);

  return (
    movies && <StyledDashboard>
      <Title>Dashboard</Title>
      <Movies movies={Object.entries(movies)} />
    </StyledDashboard>
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
)(memo(Dashboard));