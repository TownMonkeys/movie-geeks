import React, { memo } from 'react';
import { 
  StyledHeader,
  Title,
  Container
} from './style';
import Logo from './logo';
import SearchForm from './searchForm';

const Header = () => {
  return (
    <StyledHeader>
      <Title>Movie Geeks</Title>
      <Container>
        <Logo />

        <SearchForm />
      </Container>
    </StyledHeader>
  );
}

export default memo(Header);