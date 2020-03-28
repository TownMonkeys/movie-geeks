import React, { memo } from 'react';
import logoImg from "../../images/logo.svg";
import { 
  StyledDashboard,
  LogoImg
} from './style';


const Logo = ({w,h}) => {
  return (
    <StyledDashboard>
      <LogoImg src={logoImg}  width={w} height={h} />
    </StyledDashboard>
  );
}

export default memo(Logo);