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
import InteractionMediums from './components/interactionMediums';

const Header = () => {
  const searchBtnRef = useRef();

  return (
    <StyledHeader>
      <Title>Movie Geeks</Title>
      <Navigation>
        <NavTitle>Main Navigation</NavTitle>

        <Logo />

        <SearchForm ref={searchBtnRef} />

        <FeaturesList searchBtnRef={searchBtnRef} />

        <InteractionMediums />
      </Navigation>
    </StyledHeader>
  );
}

export default memo(Header);