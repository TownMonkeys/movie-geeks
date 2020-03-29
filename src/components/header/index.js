import React, { memo, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { 
  StyledHeader,
  Title,
  Navigation,
  NavTitle,
  LogoLink
} from './style';
import Logo from '../logo';
import SearchForm from './components/searchForm';
import FeaturesList from './components/featuresList';
import CommunicationMediums from './components/communicationMediums';
import { connect } from 'react-redux';
import { AuthContext } from '../../contexts/auth';

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

        <LogoLink to="/">
          <Logo width="2.3rem" />
        </LogoLink>

        <SearchForm ref={searchButtonRef} />

        <FeaturesList searchButtonRef={searchButtonRef} />

        <CommunicationMediums />
      </Navigation>}
    </StyledHeader>
  );
}

export default connect()(memo(Header));