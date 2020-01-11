import React from 'react';
import { 
  Hdr,
  AppName,
  Container,
  LogoLink,
  Logo
} from './style';
import logo from '../../images/yuri.jpg';

const Header = () => {
  return (
    <Hdr>
      <AppName>Movie Geeks</AppName>
      <Container>
        <LogoLink>
          <Logo src={logo} alt="Movie Geeks" />
        </LogoLink>
      </Container>
    </Hdr>
  );
}

export default Header;