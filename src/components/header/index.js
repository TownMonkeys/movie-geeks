import React, { memo, useRef } from 'react';
import { 
  StyledHeader,
  Title,
  Navigation
} from './style';
import Logo from './components/logo';
import SearchForm from './components/searchForm';
import FeaturesList from './components/featuresList';

const Header = () => {
  const searchBtnRef = useRef();

  return (
    <StyledHeader>
      <Title>Movie Geeks</Title>
      <Navigation aria-label="main navigation">
        <Logo />

        <SearchForm ref={searchBtnRef} />

        <FeaturesList searchBtnRef={searchBtnRef} />
      </Navigation>
    </StyledHeader>
  );
}

export default memo(Header);