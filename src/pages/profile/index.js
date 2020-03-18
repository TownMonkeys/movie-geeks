import React, { memo, useEffect } from 'react'
import {
  ProfilePage
} from './style';

const Profile = (props) => {
  useEffect(() => {
    console.log('profile page props: ', props);
  }, []);

  return (
    <ProfilePage>

    </ProfilePage>
  );
}

export default memo(Profile);