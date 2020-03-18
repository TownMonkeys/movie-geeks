import React, { memo, useEffect } from 'react'
import {
  ProfilePage
} from './style';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const Profile = (props) => {
  const { match, usernames } = props;

  useEffect(() => {
    const { username } = match.params;
    if (usernames) {
      var { id } = usernames[username];
    }
  }, [ usernames ]);

  return (
    <ProfilePage>

    </ProfilePage>
  );
}

const mapStateToProps = (state) => {
  return {
    usernames: state.firestore.data.usernames
  }
}

export default compose(
  firestoreConnect(() => ['usernames']),
  connect(mapStateToProps)
)(memo(Profile));