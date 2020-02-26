import React, { memo, useRef } from 'react';
import { 
  StyledHeader,
  Title,
  Navigation,
  NavTitle
} from './style';
import Logo from './components/logo';
import SearchForm from './components/searchForm';
import FeaturesList from './components/featuresList';
import CommunicationMediums from './components/communicationMediums';
import { connect } from 'react-redux';

const Header = (props) => {
  // props
  const { auth } = props;

  // ref
  const searchButtonRef = useRef();

  return (
    <StyledHeader>
      <Title>Movie Geeks</Title>
      {auth.uid && <Navigation>
        <NavTitle>Main Navigation</NavTitle>

        <Logo />

        <SearchForm ref={searchButtonRef} />

        <FeaturesList searchButtonRef={searchButtonRef} />

        <CommunicationMediums />
      </Navigation>}
    </StyledHeader>
  );
}

const mapStateToProps = (state) => {
  console.log('state: ', state);
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(memo(Header));