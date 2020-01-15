import React, { memo } from 'react';
import {
  LogoLink,
  LogoImg
} from '../style';
import logo from '../../../images/logo.svg';

const Logo = () => {
  return (
    <LogoLink href="#">
      <LogoImg src={logo} alt="Movie Geeks" />
    </LogoLink>
  );
}

export default memo(Logo);