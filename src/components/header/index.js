import React, { memo } from 'react';
import { 
  StyledHeader,
  Title,
  Navigation
} from './style';
import Logo from './logo';
import SearchForm from './searchForm';
import FeaturesList from './featuresList';

const Header = () => {
  return (
    <StyledHeader>
      <Title>Movie Geeks</Title>
      <Navigation aria-label="main navigation">
        <Logo />

        <SearchForm />

        <FeaturesList />
      </Navigation>
    </StyledHeader>
  );
}

export default memo(Header);