import React, { memo, useCallback } from 'react';
import {
  StyledFacebookButton,
  FacebookIcon,
} from '../style';
// import { logInWithFacebook } from '../../../store/actions/authActions';
import { connect } from 'react-redux';
import facebookIcon from '../../../images/facebook.svg';


const FacebookButton = (props) => {
  // const { logInWithFacebook } = props;

  // const handleClick = useCallback((event) => {
  //   event.preventDefault();
  //   logInWithFacebook();
  // }, []);

  return (
    <StyledFacebookButton onClick={e => e.preventDefault()}
      // onClick={handleClick} 
    >
      <FacebookIcon src={facebookIcon} alt="Facebook icon" />
      Log in with Facebook
    </StyledFacebookButton>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     logInWithFacebook: () => dispatch(logInWithFacebook())
//   }
// }

export default connect(null,
  //  mapDispatchToProps
)(memo(FacebookButton));