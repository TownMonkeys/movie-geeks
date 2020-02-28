import React, { memo, useRef, useContext } from 'react';
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
import { AuthContext } from '../../auth';

const Header = () => {
  // ref
  const searchButtonRef = useRef();

  // user state
  const { user } = useContext(AuthContext);

  return (
    <StyledHeader>
      <Title>Movie Geeks</Title>
      {user && <Navigation>
        <NavTitle>Main Navigation</NavTitle>

        <Logo />

        <SearchForm ref={searchButtonRef} />

        <FeaturesList searchButtonRef={searchButtonRef} />

        <CommunicationMediums />
      </Navigation>}
    </StyledHeader>
  );
}

export default connect()(memo(Header));