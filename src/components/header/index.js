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

const user = null;

const Header = () => {
  const searchButtonRef = useRef();

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

export default memo(Header);