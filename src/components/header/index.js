import React, { memo } from 'react';
import { 
  StyledHeader,
  Title,
  Navigation
} from './style';
import Logo from './components/logo';
import SearchForm from './components/searchForm';
import FeaturesList from './components/featuresList';

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