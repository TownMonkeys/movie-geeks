import React, { memo } from 'react';
import { 
  Hdr,
  Title,
  Container
} from './style';
import Logo from './logo';

const Header = () => {
  return (
    <Hdr>
      <Title>Movie Geeks</Title>
      <Container>
        <Logo />
      </Container>
    </Hdr>
  );
}

export default memo(Header);