import React, { memo,useState } from 'react';
import settingImage from '../../../images/setting.svg';

import { Img, SettingContainer, Container, SettingLi } from '../style';

const Setting = ({deleteMovie}) => {
  const [visibility,setVisibility] =  useState(false);
  const visibilit = ()=>{
      setVisibility(!visibility);
  };
  return (
    <Container>
      <Img src={settingImage} alt="Setting Icon" onClick={visibilit} />
      {visibility && 
      <SettingContainer>
        <SettingLi>Edit</SettingLi>
        <SettingLi onClick={deleteMovie}>Delete</SettingLi>
      </SettingContainer>
      }
    </Container>
  );
};

export default memo(Setting);