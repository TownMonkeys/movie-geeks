import React, { memo } from 'react';
import logoImg from "../../images/logo.svg";
import { LogoImg } from './style';


const Logo = (props) => {
  const { width } = props;

  return (
    <LogoImg src={logoImg} width={width} />
  );
}

export default memo(Logo);